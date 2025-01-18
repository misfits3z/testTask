import { ErrorMessage, Field, Formik, Form } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from './BookingForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/selectors";
import { nanoid } from "nanoid";
import { bookCamper } from "../../redux/operations";
import * as Yup from 'yup';
import { Toaster, toast } from "react-hot-toast";

export default function BookingForm() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    const initialValues = {
        name: '',
        email: '',
        date: null,
        comment: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, 'Name must be at least 2 characters')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        date: Yup.date()
            .nullable()
            .required('Booking date is required'),
        comment: Yup.string().max(500, 'Comment must be 500 characters or less'),
    });

    const handleSubmit = (values, actions) => {
        const newBooking = {
            id: nanoid(),
            name: values.name,
            email: values.email,
            date: values.date.toISOString(), // Зберігаємо дату у форматі ISO
            comment: values.comment,
        };

        dispatch(bookCamper(newBooking))
            .unwrap()
            .then(() => {
                toast.success(`Booking successful for ${values.date.toLocaleDateString()}`);
                actions.resetForm();
            })
            .catch(() => {
                toast.error("Booking failed. Please try again.");
            });
    };

    return (
        <div>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, values }) => (
                    <Form>
                        <Field
                            name="name"
                            type="text"
                            className={css.field}
                            placeholder="Name*"
                        />
                        <ErrorMessage name="name" component="span" className={css.error} />

                        <Field
                            name="email"
                            type="email"
                            className={css.field}
                            placeholder="Email*"
                        />
                        <ErrorMessage name="email" component="span" className={css.error} />

                        <ReactDatePicker
                            selected={values.date}
                            onChange={(date) => setFieldValue('date', date)}
                            minDate={new Date()} // Забороняємо вибір минулих дат
                            placeholderText="Booking Date*"
                            dateFormat="yyyy-MM-dd"
                            className={css.field}
                        />
                        <ErrorMessage name="date" component="span" className={css.error} />

                        <Field
                            name="comment"
                            as="textarea"
                            className={`${css.field} ${css.textarea}`}
                            placeholder="Comment"
                        />
                        <ErrorMessage name="comment" component="span" className={css.error} />

                        <button
                            type="submit"
                            className={css.btn}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </Form>
                )}
            </Formik>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}
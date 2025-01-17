import { ErrorMessage, Field, Formik, Form } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from './BookingForm.module.css';
import {  useSelector } from "react-redux";
import { selectLoading } from "../../redux/selectors";
import { nanoid } from "nanoid";

import * as Yup from 'yup';
import { Toaster, toast } from "react-hot-toast";

export default function BookingForm() {
    // const dispatch = useDispatch();
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
            date: values.date.toISOString(), 
            comment: values.comment,
        };

        // Імітація відправки на сервер
        setTimeout(() => {
            console.log("New booking data:", newBooking); 
            
            toast.success(`Booking successful for ${values.date.toLocaleDateString()}`);
            actions.resetForm();
        }, 2000);

        setTimeout(() => {
            toast.error("Booking failed. Please try again.");
        }, 2000);
    };

    return (
        <div className={css.formContainer}>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, values }) => (
                    <Form className={css.form}>
                        <Field
                            name="name"
                            type="text"
                            className={css.inputField}
                            placeholder="Name*"
                        />
                        <ErrorMessage name="name" component="span" className={css.errorMessage} />

                        <Field
                            name="email"
                            type="email"
                            className={css.inputField}
                            placeholder="Email*"
                        />
                        <ErrorMessage name="email" component="span" className={css.errorMessage} />

                        <ReactDatePicker
                            selected={values.date}
                            onChange={(date) => setFieldValue('date', date)}
                            minDate={new Date()}
                            placeholderText="Booking Date*"
                            dateFormat="yyyy-MM-dd"
                            className={css.inputField}
                        />
                        <ErrorMessage name="date" component="span" className={css.errorMessage} />

                        <Field
                            name="comment"
                            as="textarea"
                            className={`${css.inputField} ${css.textarea}`}
                            placeholder="Comment"
                        />
                        <ErrorMessage name="comment" component="span" className={css.errorMessage} />

                        <button
                            type="submit"
                            className={css.submitButton}
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
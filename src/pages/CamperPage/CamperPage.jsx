import { useSelector, useDispatch } from 'react-redux'
import css from './CamperPage.module.css'
import { selectLoading, selectSelectedCamper } from '../../redux/selectors'
import { useEffect } from 'react';
import { getCamperDetails } from '../../redux/operations';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import sprite from '../../images/icons.svg'

import Loader from '../../components/Loader/Loader';
import BookingForm from '../../components/BookingForm/BookingForm'
import Lightbox from '../../components/Ligthbox/Lightbox';

export default function CamperPage() {

    const camper = useSelector(selectSelectedCamper)
    const dispatch = useDispatch()
    const { id } = useParams()
    const isLoading = useSelector(selectLoading);
    
    useEffect(() => {
        dispatch(getCamperDetails(id));
    }, [dispatch, id]);
    
    if (isLoading) {
        return <Loader />;
    }

    // Якщо дані ще не завантажені, показуємо заглушку
    if (!camper) {
        return <div>No camper details available</div>;
    }
    
    const getActiveClass = ({ isActive }) => {
        return isActive ? `${css.link} ${css.active}` : css.link;
    };


    return (
        <div className="container">
            <section className={css.camperInfoSection}>
                <div className={css.camperInfo}>
                    <h2>{camper.name || 'Unknown Name'}</h2>
                    <div className={css.ratingContainer}>
                        <div className={css.reviews}>
                            <svg className={css.starIcon} width="16" height="16">
                              <use href={`${sprite}#icon-star`} />
                            </svg>
                            <p>
                          {camper.rating || 0} ({camper.reviews?.length || 0} Reviews)
                            </p>
                        </div>
                        <div className={css.location}>
                            <svg className={css.locationIcon} width="16" height="16">
                            <use href={`${sprite}#icon-map`} />
                            </svg>
                            <p>{camper.location || 'Location not available'}</p>
                        </div>
                </div>
                <div className={css.priceContainer}>
                  <p>€{camper.price || 0},00</p>
                </div>
              </div>
              <Lightbox images={camper.gallery} alt={camper.name || "Camper"} />
              <p className={css.camperDescription}>{camper.description || 'No description available'}</p>
            </section>
            <section>
                <div > 
                    <nav className={css.additionalInfoList}>
                        <ul>
                            <li>
                                <NavLink className={getActiveClass} to="features">
                                   Features
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={getActiveClass} to="reviews">
                                   Reviews
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className={css.bookingSection}>
                        <Outlet />
                        <BookingForm camper={camper} />
                    </div>
                </div>
            </section>
        </div>
    );
}
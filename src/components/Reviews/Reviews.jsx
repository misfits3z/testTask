import { useParams } from "react-router-dom";
import sprite from "../../images/icons.svg";
import css from "./Reviews.module.css";
import { selectSelectedCamper } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCamperDetails } from "../../redux/operations";

const Reviews = () => {
  // Перевіряємо, чи переданий масив відгуків
  const camper = useSelector(selectSelectedCamper);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!camper) {
      dispatch(getCamperDetails(id)); // Завантажуємо дані, якщо їх ще немає
    }
  }, [dispatch, id, camper]);

  if (!camper?.reviews || camper.reviews.length === 0) {
    return <p className={css.noReviews}>No reviews available.</p>;
  }

  // Рендеримо список відгуків
  return (
    <ul className={css.reviewsList}>
      {camper.reviews.map((review, index) => (
        <li key={index} className={css.reviewItem}>
          <div className={css.wrap}>
            <p className={css.avatar}>{review.reviewer_name[0]}</p>
            <div className={css.info}>
              <p className={css.name}>{review.reviewer_name}</p>
              <ul className={css.starsList}>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <li key={i}>
                      <svg
                        width="16"
                        height="16"
                        style={{
                          fill:
                            i < review.reviewer_rating
                              ? "var(--rating)"
                              : "var(--badges)",
                        }}
                      >
                        <use href={`${sprite}#icon-star`} />
                      </svg>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <p className={css.description}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
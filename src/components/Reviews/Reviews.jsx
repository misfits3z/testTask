import sprite from "../../images/icons.svg";
import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  // Перевіряємо, чи переданий масив відгуків
  if (!Array.isArray(reviews)) {
    return <p>Loading reviews...</p>;
  }

  // Якщо масив порожній
  if (reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  // Рендеримо список відгуків
  return (
    <ul className={css.reviewsList}>
      {reviews.map((review, index) => (
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
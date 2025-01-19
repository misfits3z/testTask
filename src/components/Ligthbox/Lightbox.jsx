import  { useState } from "react";
import css from "./Lightbox.module.css";
import ImageCard from '../ImageCard/ImageCard';

export default function Lightbox({ images, alt }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleOpen = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div>
      
      <ul className={css.gallery}>
        {images.map((img, index) => (
          <li key={index} className={css.thumbnail} onClick={() => handleOpen(index)}>
            <ImageCard img={img} alt={`${alt} ${index + 1}`} />
          </li>
        ))}
      </ul>

      
      {isOpen && (
        <div className={css.lightbox}>
          <button className={css.closeButton} onClick={handleClose}>
            ✖
          </button>
          <button className={css.prevButton} onClick={handlePrev}>
            ‹
          </button>
          <img
            src={images[currentImage].original}
            alt={`${alt} ${currentImage + 1}`}
            className={css.largeImage}
          />
          <button className={css.nextButton} onClick={handleNext}>
            ›
          </button>
        </div>
      )}
    </div>
  );
}
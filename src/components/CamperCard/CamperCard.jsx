import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import sprite from '../../images/icons.svg'
import Equipment from '../Equipment/Equipment'
import css from './CamperCard.module.css'
import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/favoriteSlice";

export default function CamperCard({camper}) {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleAddFavorite = () =>
    dispatch(addFavorite(camper))

    
    return (
        <div className={css.CamperCard}>
          <li className={css.camper}>
              <img src={camper.gallery[0].thumb} width="292px" height="320px"/>
          
            <div>
                <div className={css.titleBlock}>
                    <h2>{camper.name}</h2>
                    <p>{ camper.price},00</p>
                    <button onClick={handleAddFavorite}>
                        <svg width="26" height="24">
                          <use href={`${sprite}#icon-heart`} />
                        </svg>
                    </button>
                </div>
                <div className={css.ratingBlock}>
                   <svg className='{css.star}' width="16" height="16">
                     <use href={`${sprite}#icon-star`} />
                    </svg> 
                    <p>
                       {camper.rating}({camper.reviews.length} Reviews)
                    </p>
                
                    <svg className='{css.location}' width="16" height="16">
                      <use href={`${sprite}#icon-map`} />
                    </svg>
                    <p>{camper.location}</p>
                </div>
            </div>
                <p className="{css.description}">{camper.description}</p>
                <Equipment camper={camper} />
                <Link className={css.btn} to={`/catalog/${camper.id}`} state={location}>
                  Show more
                </Link>
            </li>
        </div>
    )
    
}
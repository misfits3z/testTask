// import { useLocation } from "react-router-dom";
import sprite from '../../images/icons.svg'


export default function CamperCard({camper}) {
    //  const location = useLocation();

    
    return (
        <div>
          <li>
              <img src={camper.gallery[0].thumb} width="292px" height="320px"/>
          </li>
            <div>
                <div>
                    <h2>{camper.name}</h2>
                    <p>{ camper.price},00</p>
                    <button>
                        <svg width="26" height="24">
                        <use href={`${sprite}#icon-heart`} />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
    
}
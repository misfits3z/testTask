import iconsMap from "../../utils/iconMap"
import sprite from '../../images/icons.svg'
import css from './VehicleType.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setVehicleType } from "../../redux/filtersSlice";

export default function VehicleType() {
    
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);

    return (
       
               <div>
                  <form>
                    <p className={css.vehicleTypeP}>Vehicle type</p>
                    <div className={css.vehicleTypeForm}>
                      {["Van", "Fully Integrated", "Alcove"].map((type) => (
                        <div key={type}>
                          <input
                            type="radio"
                            id={type}
                            name="type"
                            value={type}
                            checked={filters.vehicleType === type}
                            onChange={() => dispatch(setVehicleType(type))}
                            className={css.vehicleTypeInput}
                          />
                          <label htmlFor={type} className={css.vehicleTypeLabel}>
                            <svg className={css.vehicleTypeSvg}>
                              <use href={`${sprite}#${iconsMap[type]}`} />
                            </svg>
                            <span className={css.vehicleTypeText}>{type}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </form>
                </div>
    )
}
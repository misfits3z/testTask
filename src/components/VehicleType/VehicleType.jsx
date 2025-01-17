import iconsMap from "../../utils/iconMap"
import sprite from '../../images/icons.svg'
import css from './VehicleType.module.css'

export default function VehicleType() {
    return (
       
               <div>
                  <form>
                    <p className={css.vehicleTypeP}>Vehicle type</p>
                    <div className={css.vehicleTypeForm}>
                      {["Van", "Fully Integrated", "Alcove"].map((item) => (
                        <div key={item}>
                          <input
                            type="radio"
                            id={item}
                            name="type"
                            value={item}
                            className={css.vehicleTypeInput}
                          />
                          <label htmlFor={item} className={css.vehicleTypeLabel}>
                            <svg className={css.vehicleTypeSvg}>
                              <use href={`${sprite}#${iconsMap[item]}`} />
                            </svg>
                            <span className={css.vehicleTypeText}>{item}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </form>
                </div>
    )
}
import iconsMap from "../../utils/iconMap"
import sprite from '../../images/icons.svg'

export default function VehicleType() {
    return (
       
              <div>
                <form>
                  <p>Vehicle type</p>
                  {["Van", "Fully Integrated", "Alcove"].map((item) => (
                      <label key={item}>
                          <svg width="20" height="20">
                        <use href={`${sprite}#${iconsMap[item]}`} />
                      </svg>
                      <input type="radio" name="type" value={item} />
                      {item}
                    </label>
                  ))}
                </form>
              </div>
    )
}
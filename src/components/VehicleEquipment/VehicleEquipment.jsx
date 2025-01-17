import sprite from '../../images/icons.svg'
import iconsMap from '../../utils/iconMap';
import css from './VehicleEquipment.module.css'

export default function VehicleEquipment() {
  return (
    
        <div className={css.vehicleEquipmenText}>
            <form>
                <p className={css.vehicleEquipmenP}>Vehicle equipment</p>
                <div className={css.vehicleEquipmentForm}>
                {[
                    "AC",
                    "Automatic",
                    "Kitchen",
                    "TV",
                    "Bathroom",
                    "Radio",
                    "Microwave",
                    "Refrigerator",
                    "Petrol",
                    "Water",
                    "Gas",
                ].map((item) => (
                    <div key={item}>
                    <input
                        type="checkbox"
                        id={item}
                        name="equipment"
                        value={item}
                        className={css.vehicleEquipmentInput}
                    />
                    <label htmlFor={item} className={css.vehicleEquipmentLabel}>
                        <svg className={css.vehicleEquipmentSvg}>
                        <use href={`${sprite}#${iconsMap[item]}`} />
                        </svg>
                        <span className={css.vehicleEquipmentText}>{item}</span>
                    </label>
                    </div>
                ))}
                </div>
            </form>
       </div>
  );
}


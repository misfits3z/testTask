import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/icons.svg'
import iconsMap from '../../utils/iconMap';
import css from './VehicleEquipment.module.css'
import {
  toggleAC,toggleKitchen,toggleTV,toggleBathroom,toggleRadio,toggleMicrowave,toggleRefrigerator,
  toggleWater,toggleGas,setTransmission,setEngine,} from '../../redux/filtersSlice'

export default function VehicleEquipment() {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);

    const equipmentOptions = [
    { name: "AC", action: toggleAC, checked: filters.hasAC },
    { name: "Automatic", action: setTransmission, value: "automatic", checked: filters.transmission === "automatic" },
    { name: "Kitchen", action: toggleKitchen, checked: filters.hasKitchen },
    { name: "TV", action: toggleTV, checked: filters.hasTV },
    { name: "Bathroom", action: toggleBathroom, checked: filters.hasBathroom },
    { name: "Radio", action: toggleRadio, checked: filters.hasRadio },
    { name: "Microwave", action: toggleMicrowave, checked: filters.hasMicrowave },
    { name: "Refrigerator", action: toggleRefrigerator, checked: filters.hasRefrigerator },
    { name: "Petrol", action: setEngine, value: "petrol", checked: filters.engine === "petrol" },
    { name: "Water", action: toggleWater, checked: filters.hasWater },
    { name: "Gas", action: toggleGas, checked: filters.hasGas },
  ];

  return (
    
        
    <div className={css.vehicleEquipmenText}>
      <form>
        <p className={css.vehicleEquipmenP}>Vehicle equipment</p>
        <div className={css.vehicleEquipmentForm}>
          {equipmentOptions.map(({ name, action, value, checked }) => (
            <div key={name}>
              <input
                type="checkbox"
                id={name}
                name="equipment"
                value={value || name}
                checked={checked}
                onChange={() => dispatch(action(value || undefined))}
                className={css.vehicleEquipmentInput}
              />
              <label htmlFor={name} className={css.vehicleEquipmentLabel}>
                <svg className={css.vehicleEquipmentSvg}>
                  <use href={`${sprite}#${iconsMap[name]}`} />
                </svg>
                <span className={css.vehicleEquipmentText}>{name}</span>
              </label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
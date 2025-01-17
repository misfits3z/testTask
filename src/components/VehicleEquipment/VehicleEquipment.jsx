import sprite from '../../images/icons.svg'
import iconsMap from '../../utils/iconMap';

export default function VehicleEquipment() {
  return (
    // Vehicle Equipment Section
    <div>
      <form>
        <p>Vehicle equipment</p>
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
          <label key={item}>
            <svg width="20" height="20">
              <use href={`${sprite}#${iconsMap[item]}`} />
            </svg>
            <input type="checkbox" name="equipment" value={item} />
            {item}
          </label>
        ))}
      </form>
    </div>
  );
}


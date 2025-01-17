import sprite from '../../images/icons.svg';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment';
import VehicleType from '../VehicleType/VehicleType';
import css from './Filters.module.css';

export default function Filters() {
  return (
    <div className={css.filtersBlock}>
      <div className={css.inputWrapper}>
        <label>Location</label>
        <svg className={css.location} width="20" height="20">
          <use href={`${sprite}#icon-map`} />
        </svg>
        <input
          type="text"
          name="location"
          placeholder="Kyiv, Ukraine"
          className={css.input}
        />
      </div>
      <div className={css.filtersWrapper}>

        <p className={css.filtersP}>Filters</p>
        <VehicleEquipment />
        <VehicleType />
      </div>

      <div>
        <button className={css.filtersBtn}>Search</button>
      </div>
    </div>
  );
}
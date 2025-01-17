import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/icons.svg';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment';
import VehicleType from '../VehicleType/VehicleType';
import css from './Filters.module.css';
import { selectAllFilters } from '../../redux/selectors';
import { getCampersList } from '../../redux/operations'
import { setLocation } from '../../redux/filtersSlice'

export default function Filters() {

  const dispatch = useDispatch();
  const filters = useSelector(selectAllFilters)

  const handleSearch = () => {
    dispatch(getCampersList(filters))
  }

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
          value={filters.location}
          onChange={(e) => dispatch(setLocation(e.target.value))}
        />
      </div>
      <div className={css.filtersWrapper}>

        <p className={css.filtersP}>Filters</p>
        <VehicleEquipment />
        <VehicleType />
      </div>

      <div>
        <button className={css.filtersBtn} onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
import { useSelector } from 'react-redux'
import sprite from '../../images/icons.svg'
import { selectFilter } from '../../redux/selectors'
import css from './Equipment.module.css'

export default function Equipment({ camper }) {
    const filters = useSelector(selectFilter)
    
    const features = [
    { icon: "icon-diagram", text: camper.transmission },
    { icon: "icon-petrol", text: camper.engine },
    { icon: "icon-cup", key: "kitchen", text: "Kitchen", active: camper.kitchen },
    { icon: "icon-wind", key: "AC", text: "AC", active: camper.AC },
    { icon: "icon-shower", key: "bathroom", text: "Bathroom", active: camper.bathroom },
    { icon: "icon-tv", key: "TV", text: "TV", active: camper.TV },
    { icon: "icon-radios", key: "radio", text: "Radio", active: camper.radio },
    { icon: "icon-microwave", key: "microwave", text: "Microwave", active: camper.microwave },
    { icon: "icon-fridge", key: "refrigerator", text: "Refrigerator", active: camper.microwave },
    { icon: "icon-water", key: "water", text: "Water", active: camper.water },
    { icon: "icon-gas", key: "gas", text: "Gas", active: camper.gas },
  ];

  
  const filteredFeatures = features.filter(
    (feature) => filters[`has${feature.key}`] === false || feature.active
  );

  return (
    <ul className={css.equipmentList}>
      {filteredFeatures.map((feature, index) => (
        <li key={index} className={css.equipmentItem}>
          <svg width="20" height="20">
            <use href={`${sprite}#${feature.icon}`} />
          </svg>
          <p className={css.equipmentText}>{feature.text}</p>
        </li>
      ))}
    </ul>
  );
}
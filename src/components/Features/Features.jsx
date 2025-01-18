import { useOutletContext } from 'react-router-dom';
import Equipment from '../Equipment/Equipment';
import VehicleDetails from '../VehicleDetails/VehicleDetails';

export default function Features() {
  const { camper } = useOutletContext(); // Отримуємо camper через контекст

  return (
    <div>
      <Equipment camper={camper} /> {/* Передаємо camper в Equipment */}
      <div>
        <VehicleDetails/>
      </div>
    </div>
  );
}
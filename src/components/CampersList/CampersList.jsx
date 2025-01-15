import { useSelector, useDispatch } from "react-redux";
import { selectFilteredCampers  } from '../../redux/selectors'
// import { selectCampers } from "../../redux/selectors";
import CamperCard from '../CamperCard/CamperCard'
import { useEffect } from "react";
import { getCampersList } from "../../redux/operations";


export default function CampersList() {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFilteredCampers); // Використання селектора
  
  useEffect(() => {
    dispatch(getCampersList());
  }, [dispatch]);

  return (
    <ul>
      {filteredCampers &&
        filteredCampers.length > 0 &&
        filteredCampers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
    </ul>
  );
}
import {  useParams } from 'react-router-dom';
import Equipment from '../Equipment/Equipment';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedCamper } from '../../redux/selectors';
import { useEffect } from 'react';
import { getCamperDetails } from '../../redux/operations';
import Loader from '../Loader/Loader';
import css from './Features.module.css'

export default function Features() {
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper)
  const { id } = useParams();

  useEffect(() => {
    if (!camper) {
      dispatch(getCamperDetails(id))
    }
  }, [dispatch, id, camper])
  
  if (!camper) {
    return <Loader/>
  }


  return (
    <div className={css.featuresWrap}>
      <Equipment camper={camper} /> {/* Передаємо camper в Equipment */}
      <div>
        <VehicleDetails/>
      </div>
    </div>
  );
}
import { useSelector, useDispatch } from "react-redux";

import { selectCampers } from "../../redux/selectors";
import CamperCard from '../CamperCard/CamperCard'
import { useEffect } from "react";
import { getCampersList } from "../../redux/operations";


export default function CampersList() {
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
   
    useEffect(() => {
        dispatch(getCampersList());
    }, [dispatch]);
    
    
    return (
        <ul>
            {campers.map((camper) => (
                <CamperCard key={camper.id} camper={camper}/>

            ))}      
        </ul>
    )
    
}
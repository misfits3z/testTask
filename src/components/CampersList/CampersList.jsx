import { useSelector, useDispatch } from "react-redux";
import { selectCurrentPage, selectFilteredCampers, selectItemsPerPage  } from '../../redux/selectors'
// import { selectCampers } from "../../redux/selectors";
import CamperCard from '../CamperCard/CamperCard'
import { useEffect } from "react";
import { getCampersList } from "../../redux/operations";
import { loadMorePage } from "../../redux/campersSlice";
import css from './CampersList.module.css'


export default function CampersList() {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFilteredCampers); // Використання селектора
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  
  useEffect(() => {
    dispatch(getCampersList());
  }, [dispatch]);

  const displayedCampers = filteredCampers.slice(0, currentPage * itemsPerPage);
  const handleLoadMore = () => {
    dispatch(loadMorePage())
  }


  return (
    <div>
      <ul className={css.list}>
        {displayedCampers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>
      {filteredCampers.length > displayedCampers.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}
import Filters from '../../components/Filters/Filters'
import CampersList from '../../components/CampersList/CampersList'
import css from './CatalogPage.module.css'

export default function CatalogPage() {
    
    
    return (
        <div className={css.catalogPage}>
            <Filters />
            <CampersList/>
        </div>
    )
    
}
import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

export default function Navigation() {
    return (
        <nav>
            <NavLink to='/' end className={({ isActive }) => (isActive ? css.activeLink : css.inactiveLink)}>
                Home
            </NavLink>
            <NavLink to="/catalog" className={({isActive})=> (isActive ? css.activeLink : css.inactiveLink)}>
                Catalog
            </NavLink>
        </nav>
    )
    
} 
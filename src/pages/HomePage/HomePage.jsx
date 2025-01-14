import { Link } from "react-router-dom"
import css from './HomePage.module.css'

export default function HomePage() {
    return (
        <section className={css.homePage}>
            <div className='container'>
              <h1 className={css.title}>Campers of your dreams</h1>
              <h2 className={css.titleInfo}>You can find everything you want in our catalog</h2>
              <Link className={css.viewBtn} to='/catalog'>
                    View Now
              </Link>
            </div>
        </section>
    )
    
}
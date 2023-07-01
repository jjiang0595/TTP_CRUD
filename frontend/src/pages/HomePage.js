import {Link} from "react-router-dom";
import styles from './HomePage.module.scss'

function HomePage() {
    return (
        <div className={styles.home}>
            <div className={styles.home__container}>
                <h1 className={styles.home__header}>Your Stop For Campuses & Students</h1>
                <p className={styles.home__p}>What would you like to go?</p>
                <div className={styles.home__links}>
                    <Link to="/campuses" className={styles.home__links__link}>All Campuses</Link>
                    <Link to="/students" className={styles.home__links__link}>All Students</Link>
                </div>
            </div>
        </div>
    );

}

export default HomePage;
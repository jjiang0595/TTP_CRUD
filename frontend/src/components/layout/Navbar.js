import styles from './Navbar.module.scss';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className={styles.header}>
            <Link to="/students" className={styles.link}>
                Students
            </Link>
            <Link to="/" className={styles.link}>
                <p className={styles.header__logo}>Home</p>
            </Link>
            <Link to="/campuses" className={styles.link}>
                <p>Campuses</p>
            </Link>
        </nav>
    );
}

export default Navbar;
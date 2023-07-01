import {Link} from "react-router-dom";
import {useState} from "react";
import styles from './Campuses.module.scss';

function Campuses() {
    const [campuses, setCampuses] = useState([]);

    return (
        <div className={styles.campuses}>
            <div className={styles.campuses__header}>
                <h1 className={styles.campuses__header__title}>Campuses List</h1>
                <Link to="/campuses/add" className={styles.campuses__header__button}>Add Campus</Link>
            </div>
            {!campuses ?
                <ul>
                    {campuses.map(campus => {
                        return (<li key={campus.id}>
                            <Link to={`/campuses/${campus.id}`}>
                                {campus.name}
                            </Link>
                        </li>)
                    })}
                </ul>
                : <p className={styles.campuses__none}>No Campuses</p>}

        </div>
    )
}

export default Campuses;


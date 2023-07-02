import {Link} from "react-router-dom";
import {useEffect} from "react";
import styles from './Campuses.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCampusesThunk} from "../../redux/campus/campus.action";
import CampusCell from "../../components/campuses/CampusCell";

function Campuses() {
    const dispatch = useDispatch();
    const campuses = useSelector(state => state.campuses.allCampuses);

    const fetchAllCampuses = () => {
        return dispatch(fetchAllCampusesThunk());
    };

    useEffect(() => {
        fetchAllCampuses();
    }, [])

    return (
        <div className={styles.campuses}>
            <div className={styles.campuses__header}>
                <h1 className={styles.campuses__header__title}>Campuses List</h1>
                <Link to="/campuses/add" className={styles.campuses__header__button}>Add Campus</Link>
            </div>
            {campuses.length > 0 ?
                <ul className={styles.campuses__grid}>
                    {campuses.map(campus =>
                        <CampusCell key={campus.campusId} campus={campus} />
                    )}
                </ul>
                : <p className={styles.campuses__none}>No Campuses</p>}

        </div>
    )
}

export default Campuses;


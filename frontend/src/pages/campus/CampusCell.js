import {Link} from "react-router-dom";
import styles from './CampusCell.module.scss';
import {deleteCampusThunk} from "../../redux/campus/campus.action";
import {useDispatch} from "react-redux";

function CampusCell({campus}) {
    const dispatch = useDispatch();
    const deleteCampus = (event) => {
        event.preventDefault();
        dispatch(deleteCampusThunk(campus.id));
    };

    return (
        <li>
            <Link to={`/campuses/${campus.campusId}`} className={styles.cell}>
                <img src={campus.imageUrl} alt={campus.name}
                     className={styles.cell__image}/>
                <p className={styles.cell__text}>{campus.name}</p>
                <Link to={`/campuses/${campus.campusId}/edit`}
                      className={styles.cell__edit}>Edit</Link>
                <button type="button" onClick={deleteCampus}
                        className={styles.cell__delete}>Delete
                </button>
            </Link>
        </li>
    )
}

export default CampusCell
import {Link} from "react-router-dom";
import styles from './SelectCampusCell.module.scss';

function SelectCampusCell({campus, onSelect, selectedCampusId}) {
    const handleCheckboxChange = () => {
        onSelect(campus.campusId);
    };

    return (
        <li>
            <Link to={`/campuses/${campus.campusId}`} className={styles.cell}>
                <img src={campus.imageUrl} alt={campus.name}
                     className={styles.cell__image}/>
                <p className={styles.cell__text}>{campus.name}</p>
                <Link to={`/campuses/${campus.campusId}/edit`}
                      className={styles.cell__edit}>Edit</Link>
            </Link>
            <>
                <span className={styles.cell__label}>Switch Campus</span>
                <input
                    type="checkbox"
                    checked={selectedCampusId === campus.campusId}
                    onChange={handleCheckboxChange}
                />
            </>
        </li>
    )
}

export default SelectCampusCell
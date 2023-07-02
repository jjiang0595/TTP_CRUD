import {Link} from "react-router-dom";
import styles from './StudentCell.module.scss';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {deleteStudentThunk, fetchAllStudents} from "../../redux/student/student.action";

function StudentCell({student}) {
    const dispatch = useDispatch();

    const deleteStudent = (event) => {
        event.preventDefault();
        dispatch(deleteStudentThunk(student.id));
    };

    useEffect(() => {
        fetchAllStudents();
    }, [])

    return (
        <li>
            <Link to={`/campuses/${student.id}`} className={styles.cell}>
                <img src={student.imageUrl} alt={student.name}
                     className={styles.cell__image}/>
                <p className={styles.cell__text}>{student.firstName} {student.lastName}</p>
                <Link to={`/campuses/${student.id}/edit`}
                      className={styles.cell__edit}>Edit</Link>
                <button type="button" onClick={deleteStudent}
                        className={styles.cell__delete}>Delete
                </button>
            </Link>
        </li>
    )
}

export default StudentCell
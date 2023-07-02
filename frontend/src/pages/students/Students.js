import {Link} from "react-router-dom";
import {useEffect} from "react";
import styles from './Students.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllStudentsThunk} from "../../redux/student/student.action";
import StudentCell from "./StudentCell";

function Students() {
    const dispatch = useDispatch();
    const students = useSelector(state => state.students.allStudents);

    const fetchAllStudents = () => {
        return dispatch(fetchAllStudentsThunk());
    };

    useEffect(() => {
        fetchAllStudents();
    }, [])

    return (
        <div className={styles.students}>
            <div className={styles.students__header}>
                <h1 className={styles.students__header__title}>Students List</h1>
                <Link to="/students/add" className={styles.students__header__button}>Add Student</Link>
            </div>
            {students.length > 0 ?
                <ul className={styles.students__grid}>
                    {students.map(student =>
                        <StudentCell key={student.id} student={student} />
                    )}
                </ul>
                : <p className={styles.students__none}>No Students</p>}
        </div>
    )
}

export default Students;


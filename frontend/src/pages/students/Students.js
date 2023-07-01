import {Link} from "react-router-dom";
import {useState} from "react";
import styles from './Students.module.scss';

function Students() {
    const [students, setStudents] = useState([]);

    return (
        <div className={styles.students}>
            <div className={styles.students__header}>
                <h1 className={styles.students__header__title}>Students List</h1>
                <Link to="/students/add" className={styles.students__header__button}>Add Student</Link>
            </div>
            {!students ?
                <ul>
                    {students.map(student => {
                        return (<li key={student.id}>
                            <Link to={`/campuses/${student.id}`}>
                                {student.name}
                            </Link>
                        </li>)
                    })}
                </ul>
                : <p className={styles.students__none}>No Students</p>}

        </div>
    )
}

export default Students;


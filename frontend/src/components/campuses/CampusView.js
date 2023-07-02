import {useDispatch, useSelector} from "react-redux";
import {fetchSingleCampusThunk} from "../../redux/campus/campus.action";
import {useEffect, useState} from "react";
import {fetchAllStudentsThunk} from "../../redux/student/student.action";
import styles from './CampusView.module.scss';
import CampusCell from "./CampusCell";
import StudentCell from "../students/StudentCell";

const CampusView = ({campusId}) => {
    const dispatch = useDispatch();
    const campus = useSelector(state => state.campuses.singleCampus);
    const students = useSelector((state) => state.students.allStudents.filter((student) => student.campusId === campus.campusId));

    const fetchSingleCampus = () => {
        return dispatch(fetchSingleCampusThunk(campusId));
    };

    const fetchAllStudents = () => {
        return dispatch(fetchAllStudentsThunk());
    }

    useEffect(() => {
        fetchSingleCampus();
        fetchAllStudents();
    }, [campusId])

    return (
        <>
            <div className={styles.container}>
                <img className={styles.container__image} src={campus.imageUrl} alt={campus.name}/>
                <div className={styles.container__header}>
                    <h1 className={styles.container__header__title}>{campus.name}</h1>
                    <p className={styles.container__header__address}>{campus.address}</p>
                    <p>{campus.description}</p>
                </div>
            </div>
            <div>
                <hr/>
                {students.length > 0 ? (
                    <>
                        <h1 className={styles.students__header}>Students in this Campus</h1>
                        <ul className={styles.students__grid}>
                            {students.map(student =>
                                <StudentCell key={student.id} student={student}/>
                            )}
                        </ul>
                    </>
                ) : <p className={styles.students__none}>No students in this campus</p>}
            </div>

        </>
    )
}

export default CampusView;
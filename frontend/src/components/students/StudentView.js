import {useDispatch, useSelector} from "react-redux";
import {fetchAllCampusesThunk} from "../../redux/campus/campus.action";
import {useEffect, useState} from "react";
import styles from './StudentView.module.scss';
import CampusCell from "../campuses/CampusCell";
import {deleteStudentThunk, fetchSingleStudentThunk, updateStudentThunk} from "../../redux/student/student.action";
import {Link, useNavigate} from "react-router-dom";
import SelectCampusCell from "../campuses/SelectCampusCell";

const StudentView = ({id}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const student = useSelector(state => state.students.singleStudent);
    const campuses = useSelector((state) => state.campuses.allCampuses.filter((campus) => campus.campusId === student.campusId));
    const allCampuses = useSelector(state => state.campuses.allCampuses);
    const [selectedCampusId, setSelectedCampusId] = useState(null);

    const handleCampusSelect = (campusId) => {
        setSelectedCampusId(campusId);
        dispatch(updateStudentThunk(student.id, {...student, campusId: campusId}));
    };

    const fetchSingleStudent = () => {
        return dispatch(fetchSingleStudentThunk(id));
    };

    const fetchAllCampuses = () => {
        return dispatch(fetchAllCampusesThunk());
    }

    function deleteHandler() {
        dispatch(deleteStudentThunk(student.id));
        navigate('/students');
    }

    useEffect(() => {
        fetchAllCampuses();
        fetchSingleStudent();
    }, [])

    return (
        <>
            <div className={styles.container}>
                <img className={styles.container__image} src={student.imageUrl} alt={student.name}/>
                <div className={styles.container__header}>
                    <h1 className={styles.container__header__title}>{student.firstName} {student.lastName}</h1>
                    <p className={styles.container__header__address}>GPA: {student.gpa}</p>
                </div>
            </div>
            <div className={styles.buttons}>
                <Link className={styles.buttons__edit} to={`/students/${id}/edit`}>Edit</Link>
                <button className={styles.buttons__delete} type="button" onClick={deleteHandler}>Delete</button>
            </div>
            <div>
                <hr/>
                {student.campusId > 0 ? (
                    <>
                        <p className={styles.students__none}>This student is registered to {campuses[0].name}.</p>
                    </>)
                    : <p className={styles.students__none}>This student is not registered to a campus.</p>
                }
                {allCampuses.length > 0 &&
                    <>
                        <h1 className={styles.students__header}>All Campuses</h1>
                        <ul className={styles.students__grid}>
                            {allCampuses.map(campus =>
                                <SelectCampusCell key={campus.id} campus={campus} selectedCampusId={selectedCampusId}
                                                  onSelect={handleCampusSelect}/>
                            )}
                        </ul>
                    </>
                }
            </div>
        </>
    )
}

export default StudentView;
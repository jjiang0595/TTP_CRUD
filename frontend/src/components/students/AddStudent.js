import styles from './AddStudent.module.scss';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createStudentThunk} from "../../redux/student/student.action";
import {useNavigate} from "react-router-dom";

function AddStudent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        gpa: 0,
        campusId: 0
    })

    const changeHandler = (event) => {
        setStudent({...student, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(createStudentThunk(student));
        navigate("/students");
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.container__header}>Add a Student</h1>
            <form onSubmit={submitHandler} className={styles.container__form}>
                <label htmlFor="firstName" className={styles.container__form__label}>First Name:</label>
                <input className={styles.container__form__input} onChange={changeHandler} type="text" id="firstName"
                       name="firstName"
                       required/>

                <label htmlFor="lastName" className={styles.container__form__label}>Last Name:</label>
                <input className={styles.container__form__input} onChange={changeHandler} type="text" id="lastName"
                       name="lastName"
                       required/>

                <label htmlFor="email" className={styles.container__form__label}>Email:</label>
                <input className={styles.container__form__input} onChange={changeHandler} type="email" id="email"
                       name="email"
                       required/>

                <label htmlFor="url" className={styles.container__form__label}>Image URL:</label>
                <input className={styles.container__form__input} onChange={changeHandler} type="url" id="url"
                       name="URL"/>

                <label htmlFor="gpa" className={styles.container__form__label}>GPA:</label>
                <input className={styles.container__form__input} onChange={changeHandler} type="number" min="0.0"
                       max="4.0" step=".1" id="gpa" name="gpa" required/>
                <button type="submit" className={styles.container__form__submit}>Add Student</button>
            </form>
        </div>
    )
}

export default AddStudent;
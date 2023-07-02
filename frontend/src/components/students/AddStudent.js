import styles from './AddStudent.module.scss';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createStudentThunk} from "../../redux/student/student.action";

function AddStudent() {
    const dispatch = useDispatch();
    const [student, setStudent] = useState({
        name: "",
        email: "",
        url: "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg",
        gpa: 0,
        campusId: 0
    })

    const changeHandler = (event) => {
        setStudent({...student, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(createStudentThunk(student));
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.container__header}>Add a Student</h1>
            <form onSubmit={submitHandler} className={styles.container__form}>
                <div className={styles.column}>
                    <>
                        <label htmlFor="firstName" className={styles.container__form__label}>First Name:</label>
                        <input className={styles.container__form__input} onChange={changeHandler} type="text" id="firstName" name="firstName"
                               required/>
                    </>
                    <>
                        <label htmlFor="lastName" className={styles.container__form__label}>Last Name:</label>
                        <input className={styles.container__form__input} onChange={changeHandler} type="text" id="lastName" name="lastName"
                               required/>
                    </>
                </div>
                <div className={styles.column}>
                    <>
                        <label htmlFor="email" className={styles.container__form__label}>Email:</label>
                        <input className={styles.container__form__input} onChange={changeHandler} type="email" id="email" name="email"
                               required/>
                    </>
                    <>
                        <label htmlFor="url" className={styles.container__form__label}>Image URL:</label>
                    <input className={styles.container__form__input} onChange={changeHandler} type="url" id="url" name="URL"/>
                    </>
                </div>

                <div>
                    <label htmlFor="gpa" className={styles.container__form__label}>GPA:</label>
                    <input className={styles.container__form__input} onChange={changeHandler} type="number" min="0.0" max="4.0" step=".25" id="gpa" name="gpa" required/>
                </div>
                <button type="submit" className={styles.container__form__submit}>Add Student</button>
            </form>
        </div>
    )
}

export default AddStudent;
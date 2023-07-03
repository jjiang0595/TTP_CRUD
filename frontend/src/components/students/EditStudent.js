import styles from './AddStudent.module.scss';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateStudentThunk} from "../../redux/student/student.action";
import {useNavigate} from "react-router-dom";

function EditStudent({id}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        gpa: 0,
    })

    const changeHandler = (event) => {
        setStudent({...student, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(updateStudentThunk(id, student));
        navigate(`/students/${id}`)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.container__header}>Edit Student</h1>
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
                <button type="submit" className={styles.container__form__submit}>Edit Student</button>
            </form>
        </div>
    )
}

export default EditStudent;
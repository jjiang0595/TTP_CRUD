import styles from './AddStudent.module.scss';
import {useState} from "react";

function AddStudent() {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        url: "",
        gpa: 0,
        campusId: 0
    })

    const changeHandler = (event) => {
        setStudent({...student, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault();

    }

    return (
        <div className={styles.container}>
            <h1 className={styles.container__header}>Add a Student</h1>
            <form className={styles.container__form}>
                <div className={styles.column}>
                    <>
                        <label htmlFor="name" className={styles.container__form__label}>Name:</label>
                        <input className={styles.container__form__input} type="text" id="name" name="name"
                               required/>
                    </>
                    <>
                        <label htmlFor="email" className={styles.container__form__label}>Email:</label>
                        <input className={styles.container__form__input} type="email" id="email" name="email"
                               required/>
                    </>
                </div>

                <div>
                    <label htmlFor="url" className={styles.container__form__label}>Image URL:</label>
                    <input className={styles.container__form__input} type="url" id="url" name="URL" required/>
                </div>

                <div>
                    <label htmlFor="gpa" className={styles.container__form__label}>GPA:</label>
                    <input className={styles.container__form__input} type="number" min="0.0" max="4.0" step=".25" id="gpa" name="gpa" required/>
                </div>

                <div>
                    <label htmlFor="campus_name" className={styles.container__form__label}>Campus Name:</label>
                    <input className={styles.container__form__input} type="text" id="campus_name" name="campus_name"/>
                </div>

                <button type="submit" className={styles.container__form__submit}>Add Student</button>
            </form>
        </div>
    )
}

export default AddStudent;
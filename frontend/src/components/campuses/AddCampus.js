import styles from './AddCampus.module.scss';
import {useState} from "react";

function AddCampus() {
    const [campus, setCampus] = useState({
        name: "",
        address: "",
        url: "",
        description: ""
    })

    const changeHandler = (event) => {
        setCampus({...campus, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault();

    }

    return (
        <div className={styles.container}>
            <h1 className={styles.container__header}>Add a Campus!</h1>
            <form className={styles.container__form}>
                <div className={styles.column}>
                    <>
                        <label htmlFor="name" className={styles.container__form__label}>Name:</label>
                        <input className={styles.container__form__input} type="text" id="name" name="name"
                               value={campus.name} placeholder="Name"/>
                    </>
                    <>
                        <label htmlFor="address" className={styles.container__form__label}>Address:</label>
                        <input className={styles.container__form__input} type="text" id="address" name="address"
                               value={campus.address} placeholder="Address"/>
                    </>
                </div>

                <div>
                    <label htmlFor="url" className={styles.container__form__label}>Image URL:</label>
                    <input value={campus.url} className={styles.container__form__input} type="url" id="url" name="URL" placeholder="URL"/>
                </div>

                <div>
                    <label htmlFor="description" className={styles.container__form__label}>Description: </label>
                    <textarea id="description" name="description"
                              value={campus.description} placeholder="Description"/>
                </div>

                <button type="submit" className={styles.container__form__submit}>Add Campus</button>
            </form>
        </div>
    )
}

export default AddCampus;
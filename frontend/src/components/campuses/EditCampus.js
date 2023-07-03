import styles from './AddCampus.module.scss';
import {useState} from "react";
import {updateCampusThunk} from "../../redux/campus/campus.action";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

function EditCampus({campusId}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [campus, setCampus] = useState({
        name: "",
        address: "",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
        description: ""
    })

    const changeHandler = (event) => {
        setCampus({...campus, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(updateCampusThunk(campusId, campus));
        navigate(`/campuses/${campusId}`)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.container__header}>Edit the Campus</h1>
            <form onSubmit={submitHandler} className={styles.container__form}>
                <div className={styles.column}>
                    <>
                        <label htmlFor="name" className={styles.container__form__label}>Name:</label>
                        <input className={styles.container__form__input} type="text" id="name" name="name" onChange={changeHandler}
                               value={campus.name} placeholder="Name" required />
                    </>
                    <>
                        <label htmlFor="address" className={styles.container__form__label}>Address:</label>
                        <input className={styles.container__form__input} type="text" id="address" name="address" onChange={changeHandler}
                               value={campus.address} placeholder="Address" required/>
                    </>
                </div>

                <div>
                    <label htmlFor="url" className={styles.container__form__label}>Image URL:</label>
                    <input className={styles.container__form__input} type="url" id="url" onChange={changeHandler}
                           name="url" placeholder="URL"/>
                </div>

                <div>
                    <label htmlFor="description" className={styles.container__form__label}>Description: </label>
                    <textarea id="description" name="description" onChange={changeHandler}
                              value={campus.description} placeholder="Description" required/>
                </div>

                <button type="submit" className={styles.container__form__submit}>Update Campus</button>
            </form>
        </div>
    )
}

export default EditCampus;
import styles from './AddCampus.module.scss';

function AddCampus() {
    return (
        <div className={styles.container}>
            <h1 className={styles.container__header}>Add a Campus!</h1>
            <form className={styles.container__form}>
                <div className={styles.column}>
                    <>
                        <label htmlFor="name" className={styles.container__form__label}>Name:</label>
                        <input className={styles.container__form__input} type="text" id="name" name="name"
                               placeholder="Name"/>
                    </>
                    <>
                        <label htmlFor="address" className={styles.container__form__label}>Address:</label>
                        <input className={styles.container__form__input} type="text" id="address" name="address"
                               placeholder="Address"/>
                    </>
                </div>

                <div>
                    <label htmlFor="url" className={styles.container__form__label}>Image URL:</label>
                    <input className={styles.container__form__input} type="text" id="url" name="URL" placeholder="URL"/>
                </div>

                <div>
                    <label htmlFor="description" className={styles.container__form__label}>Description: </label>
                    <textarea id="description" name="description"
                              placeholder="Description"/>
                </div>

                <button type="submit" className={styles.container__form__submit}>Add Campus</button>
            </form>
        </div>
    )
}

export default AddCampus;
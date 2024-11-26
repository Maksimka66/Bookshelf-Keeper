import styles from './TextFirstPage.module.scss';

export const TextFirstPage = () => {
    return (
        <div className={styles.containerFirstPage}>
            <p className={styles.textFirstPage}>
                Books are the ships of thoughts, wandering through the waves of time.
            </p>
            <hr className={styles.line} />
            <p className={styles.nameFirstPage}>Francis Bacon</p>
        </div>
    );
};

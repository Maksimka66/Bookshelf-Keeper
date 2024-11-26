import styles from './GoogleButton.module.scss';

export const GoogleButton = () => {
    return (
        <button className={styles.googleButton} type='button'>
            <svg className={styles.googleIcon} width='18' height='18'>
                <use href=''></use>
            </svg>
            Google
        </button>
    );
};

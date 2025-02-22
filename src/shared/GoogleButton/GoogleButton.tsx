import { IconGoogle } from '@/shared/Svg/IconGoogle';
import styles from './GoogleButton.module.scss';

export const GoogleButton = () => {
    return (
        <button className={styles.googleButton} type='button'>
            <IconGoogle />
            <p className={styles.googleButton_text}>Google</p>
        </button>
    );
};

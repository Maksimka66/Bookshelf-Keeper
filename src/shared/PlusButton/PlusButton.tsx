import { IconPlus } from '../Svg/IconPlus';

import styles from './PlusButton.module.scss';

export const PlusButton = () => {
    return (
        <button className={styles.plusBtn} type='button'>
            <IconPlus />
        </button>
    );
};

import styles from './AppMainInfo.module.scss';

export const AppMainInfo = () => {
    return (
        <div className={styles.mainInfoContainer}>
            <h1 className={styles.mainHeader}>Books Reading</h1>
            <div className={styles.appInfoContainer}>
                <p className={styles.appInfo}>Will help you to</p>
                <ul className={styles.mainInfoList}>
                    <li className={styles.mainInfoListItem}>
                        <p className={styles.mainInfoItemText}>
                            Create your goal faster and proceed to read
                        </p>
                    </li>
                    <li className={styles.mainInfoListItem}>
                        <p className={styles.mainInfoItemText}>
                            Divide process proportionally for each day
                        </p>
                    </li>
                    <li className={styles.mainInfoListItem}>
                        <p className={styles.mainInfoItemText}>Track your success</p>
                    </li>
                </ul>
            </div>
            <div className={styles.appInfoContainer}>
                <p className={styles.appInfo}>You may also</p>
                <ul className={styles.mainInfoList}>
                    <li className={styles.mainInfoListItem}>
                        <p className={styles.mainInfoItemText}>
                            Pose your own independent point of view
                        </p>
                    </li>
                    <li className={styles.mainInfoListItem}>
                        <p className={styles.mainInfoItemText}>
                            Improve your professional skills according to new knowledge
                        </p>
                    </li>
                    <li className={styles.mainInfoListItem}>
                        <p className={styles.mainInfoItemText}>
                            Become an interesting interlocutor
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

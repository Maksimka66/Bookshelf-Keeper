import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '@/store/features/auth/authApi';
import { clearToken, selectIsLoggedIn, selectUser } from '@/store/features/auth/authSlice';
import { Loader } from '../Loader/Loader';
import { IconBook } from '../Svg/IconBook';
import { IconHome } from '../Svg/IconHome';

import styles from './LibraryHeader.module.scss';

export const LibraryHeader = () => {
    const [logoutUser, { isLoading }] = useLogoutMutation();
    const dispatch = useDispatch();

    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const handleLogout = async () => {
        try {
            const res = await logoutUser({});
            console.log('Logout result: ', res);

            if (res.error) dispatch(clearToken());
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading) return <Loader />;

    if (!isLoggedIn) return <p className={styles.logoNoLoginned}>br</p>;

    return (
        user.name && (
            <header className={styles.appHeader}>
                <div className={styles.headerContainer}>
                    <p className={styles.logoText}>br</p>
                    <div className={styles.userInfo}>
                        <p className={styles.userInitials}>{user.name[0]}</p>
                        <p className={styles.userName}>{user.name}</p>
                    </div>
                    <div className={styles.headerIconsContainer}>
                        <IconBook />
                        <div className={styles.homeIconContainer}>
                            <IconHome />
                        </div>
                        <div className={styles.logoutContainer}>
                            <p className={styles.userInitialsTelephone}>{user.name[0]}</p>
                            <button
                                className={styles.logoutButton}
                                type='button'
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        )
    );
};

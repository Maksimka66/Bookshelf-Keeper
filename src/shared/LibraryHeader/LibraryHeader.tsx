import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '@/store/features/auth/authApi';
import { clearToken, selectIsRegistered } from '@/store/features/auth/authSlice';
import { Loader } from '../Loader/Loader';
import { IconBook } from '../Svg/IconBook';
import { IconHome } from '../Svg/IconHome';
import { selectUserName } from '@/store/features/user/userSlice';

import styles from './LibraryHeader.module.scss';

export const LibraryHeader = () => {
    const [logoutUser, { isLoading }] = useLogoutMutation();
    const dispatch = useDispatch();

    const userName = useSelector(selectUserName);
    const isUserRegistered = useSelector(selectIsRegistered);

    const handleLogin = () => {
        console.log(5);

        dispatch(clearToken());
    };

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

    if (!isUserRegistered) return <p className={styles.logoNoLoginned}>br</p>;

    return (
        isUserRegistered && (
            <header className={styles.appHeader}>
                <div className={styles.headerContainer}>
                    <p className={styles.logoText}>br</p>
                    <div className={styles.userInfo}>
                        <p className={styles.userInitials}>{userName[0]}</p>
                        <p className={styles.userName}>{userName}</p>
                    </div>
                    <div className={styles.headerIconsContainer}>
                        <IconBook />
                        <div className={styles.homeIconContainer}>
                            <IconHome />
                        </div>
                        <div className={styles.logoutContainer}>
                            <p className={styles.userInitialsTelephone}>{userName[0]}</p>
                            {isUserRegistered ? (
                                <button
                                    className={styles.logoutButton}
                                    type='button'
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    className={styles.loginNavLink}
                                    href='/'
                                    onClick={handleLogin}
                                >
                                    Log in
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        )
    );
};

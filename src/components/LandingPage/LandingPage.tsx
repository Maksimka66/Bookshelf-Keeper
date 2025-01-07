import Link from 'next/link';
import { AppMainInfo } from '@/shared/AppMainInfo/AppMainInfo';

import styles from './LandingPage.module.scss';

export const LandingPage = () => {
    return (
        <div>
            <AppMainInfo />
            <div className={styles.routesContainer}>
                <Link className={styles.signInLink} href='/signin'>
                    Log in
                </Link>
                <Link className={styles.signUpLink} href='/signup'>
                    Register
                </Link>
            </div>
        </div>
    );
};

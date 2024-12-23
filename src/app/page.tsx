'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { selectIsLoggedIn } from '@/store/features/auth/authSelectors';
import { Library } from '@/components/Library/Library';

import cls from './page.module.scss';

export default function HomePage() {
    const [width, setWidth] = useState<null | number>(null);

    const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!width) {
        return (
            <main>
                <p>Загрузка...</p>
            </main>
        );
    }

    return (
        <main className={cls.container}>
            {isLoggedIn ? (
                <Library />
            ) : width < 1280 ? (
                <>
                    <SignInForm />
                </>
            ) : (
                <div className={cls.desktopContainerSignIn}>
                    <SignInForm />
                </div>
            )}
        </main>
    );
}

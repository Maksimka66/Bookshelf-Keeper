'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Logo } from '@/shared/Logo/Logo';
import { TextFirstPage } from '@/shared/TextFirstPage/TextFirstPage';
import { selectIsLoggedIn } from '@/store/features/auth/authSelectors';
import cls from './page.module.scss';
import { Library } from '@/components/Library/Library';

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
            <Logo />
            {isLoggedIn ? (
                <Library />
            ) : width < 1280 ? (
                <>
                    <SignInForm />
                    <TextFirstPage />
                </>
            ) : (
                <div className={cls.desktopContainerSignIn}>
                    <SignInForm />
                    <TextFirstPage />
                </div>
            )}
        </main>
    );
}

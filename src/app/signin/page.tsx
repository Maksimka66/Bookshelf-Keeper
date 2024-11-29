'use client';

import { useEffect, useState } from 'react';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Logo } from '@/shared/Logo/Logo';
import { TextFirstPage } from '@/shared/TextFirstPage/TextFirstPage';
import cls from './page.module.scss';

export default function SignIn() {
    const [width, setWidth] = useState<null | number>(null);

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
            {width < 1280 ? (
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

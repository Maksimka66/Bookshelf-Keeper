'use client';

import { useEffect, useState } from 'react';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Logo } from '@/shared/Logo/Logo';
import { TextFirstPage } from '@/shared/TextFirstPage/TextFirstPage';
import cls from './page.module.scss';

export default function SignIn() {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

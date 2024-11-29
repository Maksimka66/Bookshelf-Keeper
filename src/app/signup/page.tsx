'use client';

import { useEffect, useState } from 'react';
import { Logo } from '@/shared/Logo/Logo';
import { SignUpForm } from '@/components/SignUpForm/SignUpForm';
import { AppMainInfo } from '@/shared/AppMainInfo/AppMainInfo';
import cls from './page.module.scss';

export default function SignUp() {
    const [width, setWidth] = useState<number | null>(null);

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
            {width < 768 ? (
                <SignUpForm />
            ) : (
                <div className={cls.desktopContainerSignUp}>
                    <SignUpForm />
                    <AppMainInfo />
                </div>
            )}
        </main>
    );
}

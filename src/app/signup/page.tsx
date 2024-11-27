'use client';

import { useEffect, useState } from 'react';
import { Logo } from '@/shared/Logo/Logo';
import { SignUpForm } from '@/components/SignUpForm/SignUpForm';
import cls from './page.module.scss';
import { AppMainInfo } from '@/shared/AppMainInfo/AppMainInfo';

export default function SignUp() {
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
            {width && width < 768 ? (
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

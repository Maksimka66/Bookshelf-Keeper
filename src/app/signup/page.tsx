'use client';

import { useEffect, useState } from 'react';
import { SignUpForm } from '@/components/SignUpForm/SignUpForm';
import { AppMainInfo } from '@/shared/AppMainInfo/AppMainInfo';
import { Loader } from '@/shared/Loader/Loader';

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
                <Loader />
            </main>
        );
    }

    return (
        <main className={cls.container}>
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

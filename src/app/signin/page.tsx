'use client';

import { useEffect, useState } from 'react';
import { Loader } from '@/shared/Loader/Loader';
import { SignInForm } from '@/components/SignInForm/SignInForm';

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
        <main>
            {width < 1280 ? (
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

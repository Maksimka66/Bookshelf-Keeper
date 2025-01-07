'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsRegistered } from '@/store/features/auth/authSlice';
import { Library } from '@/components/Library/Library';
import { LibraryHeader } from '@/shared/LibraryHeader/LibraryHeader';
import { LandingPage } from '@/components/LandingPage/LandingPage';
import { Loader } from '@/shared/Loader/Loader';

import cls from './page.module.scss';

export default function HomePage() {
    const [width, setWidth] = useState<null | number>(null);

    const isUserRegistered = useSelector(selectIsRegistered);

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
            {isUserRegistered ? (
                <>
                    <LibraryHeader />
                    <Library />
                </>
            ) : (
                <LandingPage />
            )}
        </main>
    );
}

'use client';

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/shared/Input/Input';
import { GoogleButton } from '@/shared/GoogleButton/GoogleButton';
import { ValidateSchemaSignIn } from '@/components/SignInForm/ValidateSchemaSignIn';
import styles from './SignInForm.module.scss';

export type SignInFormType = {
    email: string;
    password: string;
};

export const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignInFormType>({
        mode: 'onSubmit',
        resolver: yupResolver(ValidateSchemaSignIn)
    });

    const onSubmit: SubmitHandler<SignInFormType> = (data) => console.log(data);

    return (
        <div className={styles.signInContainer}>
            <GoogleButton />
            <form className={styles.signInForm} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='email'
                    placeholder='Enter email'
                    label='Email'
                    name='email'
                    register={register}
                    error={errors.email?.message}
                />
                <Input
                    type='password'
                    placeholder='Enter password'
                    label='Password'
                    name='password'
                    register={register}
                    error={errors.password?.message}
                />
                <button className={styles.signInSubmitButton} type='submit'>
                    Login
                </button>
            </form>
            <Link className={styles.registrationNavLink} href='/signup'>
                Register
            </Link>
        </div>
    );
};

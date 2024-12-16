'use client';

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation, useRegisterMutation } from '@/store/features/auth/authApi';
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
    const [loginUser, isLoading] = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignInFormType>({
        mode: 'onSubmit',
        resolver: yupResolver(ValidateSchemaSignIn)
    });

    const onSubmit: SubmitHandler<SignInFormType> = async ({ email, password }) => {
        try {
            const res = await loginUser({ email, password });

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.signInContainer}>
            <div className={styles.secondSignInContainer}>
                <GoogleButton />
                <form className={styles.signInForm} onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type='email'
                        placeholder='your@email.com'
                        label='Email'
                        id='email'
                        register={register('email')}
                        error={errors.email?.message}
                    />
                    <Input
                        type='password'
                        placeholder='Password'
                        label='Password'
                        id='password'
                        register={register('password')}
                        error={errors.password?.message}
                    />
                    <button className={styles.signInSubmitButton} type='submit'>
                        Login
                    </button>
                </form>
                <div className={styles.registrationNav}>
                    <Link className={styles.registrationNavLink} href='/signup'>
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

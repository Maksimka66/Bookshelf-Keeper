'use client';

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidateSchemaSignUp } from '@/components/SignUpForm/ValidateSchemaSignUp';
import { Input } from '@/shared/Input/Input';
import { GoogleButton } from '@/shared/GoogleButton/GoogleButton';
import { useRegisterMutation } from '@/store/features/auth/authApi';
import { Loader } from '@/shared/Loader/Loader';

import styles from './SignUpForm.module.scss';

export type SignUpFormType = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export const SignUpForm = () => {
    const [registerUser, { isLoading }] = useRegisterMutation();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpFormType>({
        mode: 'onSubmit',
        resolver: yupResolver(ValidateSchemaSignUp)
    });

    const onSubmit: SubmitHandler<SignUpFormType> = async ({ email, name, password }) => {
        try {
            const res = await registerUser({ email, name, password });

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <div className={styles.signUpContainer}>
            <div className={styles.secondSignUpContainer}>
                <GoogleButton />
                <form className={styles.signUpForm} onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type='text'
                        placeholder='Enter name'
                        label='Name'
                        error={errors.name?.message}
                        register={register('name')}
                        id='name'
                    />
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
                        placeholder='Enter password'
                        label='Password'
                        id='password'
                        register={register('password')}
                        error={errors.password?.message}
                    />
                    <Input
                        type='password'
                        placeholder='Confirm password'
                        label='Confirm password'
                        id='confirmPassword'
                        register={register('confirmPassword')}
                        error={errors.password?.message}
                    />
                    <button className={styles.signUpSubmitButton} type='submit'>
                        Register
                    </button>
                </form>
                <div className={styles.loginNav}>
                    <p className={styles.loginNavText}>Already have an account?</p>
                    <Link className={styles.loginNavLink} href='/'>
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
};

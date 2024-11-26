'use client';

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidateSchemaSignUp } from '@/components/SignUpForm/ValidateSchemaSignUp';
import { Input } from '@/shared/Input/Input';
import { GoogleButton } from '@/shared/GoogleButton/GoogleButton';
import styles from './SignUpForm.module.scss';

export type SignUpFormType = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpFormType>({
        mode: 'onSubmit',
        resolver: yupResolver(ValidateSchemaSignUp)
    });

    const onSubmit: SubmitHandler<SignUpFormType> = (data) => console.log(data);

    return (
        <div className={styles.signUpContainer}>
            <GoogleButton />
            <form className={styles.signUpForm} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='text'
                    placeholder='Enter name'
                    label='Name'
                    error={errors.name?.message}
                    register={register}
                    name='name'
                />
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
                <Input
                    type='password'
                    placeholder='Confirm password'
                    label='Confirm password'
                    name='confirmPassword'
                    register={register}
                    error={errors.password?.message}
                />
                <button className={styles.signUpSubmitButton} type='submit'>
                    Register
                </button>
            </form>
            <div className={styles.loginNav}>
                <p className={styles.loginNavText}>Already have an account?</p>
                <Link className={styles.loginNavLink} href='/signin'>
                    Log in
                </Link>
            </div>
        </div>
    );
};

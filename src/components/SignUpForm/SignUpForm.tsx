'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/shared/Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidateSchemaSignUp } from '@/components/SignUpForm/ValidateSchemaSignUp';

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type='text'
                placeholder='Enter name'
                label='Name'
                error={errors.name?.message}
                register={register}
                name='name'
            />
            <button>Register</button>
        </form>
    );
};

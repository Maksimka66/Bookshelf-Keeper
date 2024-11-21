import { UseFormRegister } from 'react-hook-form';
import { SignUpFormType } from '@/components/SignUpForm/SignUpForm';

export type InputProps = {
    type: string;
    placeholder: string;
    label: string;
    name: keyof SignUpFormType;
    error?: string;
    register: UseFormRegister<SignUpFormType>;
};

export const Input = (props: InputProps) => {
    const { type, placeholder, label, name, error, register } = props;
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input id={name} type={type} placeholder={placeholder} {...register(name)} />
            {error && <span>{error}</span>}
        </>
    );
};

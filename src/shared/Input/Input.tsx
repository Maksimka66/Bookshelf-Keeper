import { UseFormRegister } from 'react-hook-form';
import { SignUpFormType } from '@/components/SignUpForm/SignUpForm';
import { SignInFormType } from '@/components/SignInForm/SignInForm';
import styles from './Input.module.scss';

export type InputProps = {
    type: string;
    placeholder: string;
    label: string;
    name: keyof SignInFormType | keyof SignUpFormType;
    error?: string;
    register: UseFormRegister<SignUpFormType>;
};

export const Input = (props: InputProps) => {
    const { type, placeholder, label, name, error, register } = props;
    return (
        <>
            <label className={styles.labelTest} htmlFor={name}>
                <p className={styles.inputLabel}>{label}</p>
            </label>
            <input
                className={styles.inputField}
                id={name}
                type={type}
                placeholder={placeholder}
                {...register(name)}
            />
            {error && <span> {error} </span>}
        </>
    );
};

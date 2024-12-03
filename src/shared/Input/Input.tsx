import { UseFormRegisterReturn } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password' | 'email';
    placeholder: string;
    label: string;
    id: string;
    error?: string;
    register: UseFormRegisterReturn;
}

export const Input = (props: InputProps) => {
    const { type, placeholder, label, error, register, id } = props;
    return (
        <>
            <label className={styles.inputLabel} htmlFor={id}>
                {label}
            </label>
            <input
                className={styles.inputField}
                id={id}
                type={type}
                placeholder={placeholder}
                {...register}
            />
            {error && <span> {error} </span>}
        </>
    );
};

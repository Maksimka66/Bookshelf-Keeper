export type InputProps = {
    type: string;
    placeholder: string;
    label: string;
    name: string;
    error?: string;
    register: any;
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
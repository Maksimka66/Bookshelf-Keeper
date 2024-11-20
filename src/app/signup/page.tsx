import cls from './page.module.scss';
import { SignUpForm } from '@/components/SignUpForm/SignUpForm';

export default function SignUp() {
    return (
        <main className={cls.container}>
            <SignUpForm />
        </main>
    );
}

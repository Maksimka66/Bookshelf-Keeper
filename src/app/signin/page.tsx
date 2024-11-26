import cls from './page.module.scss';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Logo } from '@/shared/Logo/Logo';
import { TextFirstPage } from '@/shared/TextFirstPage/TextFirstPage';

export default function SignIn() {
    return (
        <main className={cls.container}>
            <Logo />
            <SignInForm />
            <TextFirstPage />
        </main>
    );
}

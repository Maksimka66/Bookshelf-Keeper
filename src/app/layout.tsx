import { ReactNode } from 'react';
import { montserrat } from '@/styles/fonts';
import cls from './layout.module.scss';

export const metadata = {
    title: 'Next.js',
    description: 'Next template project'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>Wait...</title>
                <link rel='icon' type='image/svg+xml' href='/vercel.svg' />
                <link rel='apple-touch-icon' href='/vercel.svg' type='image/svg+xml' />
            </head>
            <body className={`${montserrat.className} ${cls.container}`}>{children}</body>
        </html>
    );
}

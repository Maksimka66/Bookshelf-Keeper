import '@/styles/globals.scss';

import { ReactNode } from 'react';
import ReduxProvider from '@/store/ReduxProvider';
import { abrilFatface, montserrat } from '@/styles/fonts';

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

                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
                    rel='stylesheet'
                />

                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
                    rel='stylesheet'
                />

                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap'
                    rel='stylesheet'
                />
            </head>
            <body className={`${montserrat.className} ${abrilFatface.className} ${cls.container}`}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}

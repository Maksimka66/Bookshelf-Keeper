import { Montserrat, Roboto, Abril_Fatface } from 'next/font/google';

export const montserrat = Montserrat({
    weight: ['300', '400', '500', '600'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-montserrat'
});

export const roboto = Roboto({
    weight: ['400', '700'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto'
});

export const abrilFatface = Abril_Fatface({
    weight: ['400'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-abril_fatface'
});

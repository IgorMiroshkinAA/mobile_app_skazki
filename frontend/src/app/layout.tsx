import type { Metadata } from 'next';
import { Nunito, Comfortaa, PT_Serif } from 'next/font/google';
import './globals.css';
import { RegisterSW } from '@/components/RegisterSW';

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-nunito',
  display: 'swap',
});

const comfortaa = Comfortaa({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-comfortaa',
  display: 'swap',
});

const ptSerif = PT_Serif({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Сказки на ночь',
  description: 'Добрые истории для детей 6+ с озвучкой. Слушайте и читайте онлайн.',
  manifest: '/manifest.webmanifest',
  themeColor: '#F5C542',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Сказки',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${nunito.variable} ${comfortaa.variable} ${ptSerif.variable}`}>
      <body>
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}
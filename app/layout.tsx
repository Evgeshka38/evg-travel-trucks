import type { Metadata } from 'next';
import {
  Inter,
  Manrope,
} from 'next/font/google';

import Header from '@/components/layout/Header/Header';
import TanStackProvider from '@/lib/providers/TanStackProvider';
import { Toaster } from 'react-hot-toast';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TravelTrucks',
  description:
    'Camper rental service for comfortable travel',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable}`}
      >
        <TanStackProvider>
          <Header />

          <main>{children}</main>
          <Toaster position="top-right" />
        </TanStackProvider>
      </body>
    </html>
  );
}
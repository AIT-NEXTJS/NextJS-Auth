import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import NavBar from '@/components/NavBar/NavBar';
import { ThemeProvider } from 'next-themes';
import { Providers } from './providers/providers';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Сайт спортивных курсов',
	description: 'Платформа для онлайн-обучения различным видам спорта',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
						<NavBar />
						{children}
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	);
}

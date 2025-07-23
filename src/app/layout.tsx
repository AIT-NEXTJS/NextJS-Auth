import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

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
		<html lang='ru'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<nav className='flex justify-center items-center gap-6 min-h-12 sticky top-0 bg-slate-900'>
					<Link href='/' className='hover:text-orange-300'>
						Главная
					</Link>
					<Link href='/about' className='hover:text-orange-300'>
						О проекте
					</Link>
					<Link href='/sports' className='hover:text-orange-300'>
						Курсы по спорту
					</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}

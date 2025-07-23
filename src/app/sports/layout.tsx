import Link from 'next/link';

export default function SportsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<nav className='flex justify-center items-center gap-8 font-medium sticky top-[56px] z-10 bg-blue-950'>
				<Link href='/sports/football' className='hover:text-blue-500'>
					Футбол
				</Link>
				<Link href='/sports/tennis' className='hover:text-blue-500'>
					Теннис
				</Link>
				<Link href='/sports/swimming' className='hover:text-blue-500'>
					Плавание
				</Link>
			</nav>
			<main className='p-6'>{children}</main>
		</>
	);
}

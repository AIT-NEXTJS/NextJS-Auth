import Link from 'next/link';

export default function SportsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<nav className='flex justify-center items-center gap-8 font-medium sticky top-[56px] z-10 bg-blue-950 text-gray-100 py-3'>
				<Link href='/sports/football' className='hover:text-orange-300 transition'>
					Футбол
				</Link>
				<Link href='/sports/tennis' className='hover:text-orange-300 transition'>
					Теннис
				</Link>
				<Link href='/sports/swimming' className='hover:text-orange-300 transition'>
					Плавание
				</Link>
			</nav>
			<main className='p-6'>{children}</main>
		</>
	);
}

import Link from 'next/link';
import React from 'react';

export default function NavBar() {
	return (
		<nav className='flex justify-center items-center gap-6 min-h-12 sticky top-0 bg-slate-900 text-gray-100 z-20'>
			<Link href='/' className='hover:text-orange-300 transition'>
				Главная
			</Link>
			<Link href='/about' className='hover:text-orange-300 transition'>
				О проекте
			</Link>
			<Link href='/sports' className='hover:text-orange-300 transition'>
				Курсы по спорту
			</Link>
		</nav>
	);
}

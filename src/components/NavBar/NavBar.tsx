import Link from 'next/link';
import React from 'react';

export default function NavBar() {
	return (
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
	);
}

'use client';

import Link from 'next/link';
import React from 'react';
import ThemeToggles from '../ThemeToggles.tsx/ThemeToggles';

export default function NavBar() {
	return (
		<nav className='flex justify-center items-center gap-6 min-h-12 sticky top-0 bg-sky-100 text-gray-800 dark:bg-blue-950 dark:text-gray-300'>
			{/* Main page */}
			<Link href='/' className='hover:text-orange-300 transition'>
				Главная
			</Link>
			{/* Info  */}
			<Link href='/about' className='hover:text-orange-300 transition'>
				О проекте
			</Link>
			{/* Courses */}
			<Link href='/sports' className='hover:text-orange-300 transition'>
				Курсы по спорту
			</Link>
			{/* Clients */}
			<Link href='/users/client-version' className='hover:text-amber-300'>
				Users client
			</Link>
			<Link href='/users/server-version' className='hover:text-amber-300'>
				Users server
			</Link>

			<Link href='/users/server-version-v2' className='hover:text-amber-300 -ml-5'>
				(v2)
			</Link>
			{/* Products */}
			<Link href='/products/client-version' className='hover:text-lime-300'>
				Products client
			</Link>
			<Link href='/products-v2/client-version' className='hover:text-lime-300 -ml-5'>
				(v2)
			</Link>
			<Link href='/products/server-version' className='hover:text-lime-300 '>
				Products server
			</Link>
			<Link href='/products-v2/server-version' className='hover:text-lime-300 -ml-5'>
				(v2)
			</Link>
			<ThemeToggles />
		</nav>
	);
}

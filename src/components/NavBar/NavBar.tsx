'use client';

import Link from 'next/link';
import React from 'react';

export default function NavBar() {
	return (
		<nav className='flex justify-center items-center gap-6 min-h-12 sticky top-0 bg-slate-900 text-gray-100 z-20'>
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

			{/* Products */}
			<Link href='/products/client-version' className='hover:text-lime-300'>
				Products client
			</Link>
			<Link href='/products/server-version' className='hover:text-lime-300'>
				Products server
			</Link>
		</nav>
	);
}

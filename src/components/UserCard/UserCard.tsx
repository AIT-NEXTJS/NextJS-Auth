'use client';

import { User } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function UserCard({ user, showBackLink = true }: { user: User; showBackLink?: boolean }) {
	return (
		<div className='text-center p-4 rounded-lg shadow-md max-w-xs'>
			<h3 className='text-lg font-semibold mb-2'>{user.name}</h3>
			{!showBackLink ? (
				<Link href={`/users/server-version/${user.id}`}>
					<Image src={user.avatar} alt={'User ' + user.name} width={200} height={200} className='rounded-full mb-4' unoptimized />
				</Link>
			) : (
				<Image src={user.avatar} alt={'User ' + user.name} width={200} height={200} className='rounded-full mb-4' unoptimized />
			)}
			<p className='text-sm text-gray-600 mb-2'>{user.email}</p>

			{showBackLink && (
				<Link href='/users/server-version' className='inline-block mt-6 text-sm hover:underline transition'>
					Back to users
				</Link>
			)}
		</div>
	);
}

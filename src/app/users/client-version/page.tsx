'use client';
// import Image from 'next/image';
import { User } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function UsersClientVersion() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		fetchUsers();
	}, []);
	async function fetchUsers() {
		const res = await fetch('https://api.escuelajs.co/api/v1/users');
		if (!res.ok) {
			throw new Error('Failed to fetch users');
		}
		const arr = await res.json();
		setUsers(arr);
	}
	console.log(users);
	return (
		<div className='max-w-3xl mx-auto p-6'>
			<h1 className='text-2xl font-bold mb-4 text-gray-800'>Список пользователей (клиентская версия)</h1>
			<div>
				{users.map((user: User) => (
					<li key={user.id}>
						<Link href={`/users/client-version/${user.id}`} className=' hover:underline'>
							{user.name}
						</Link>
					</li>
				))}
			</div>
		</div>
	);
}

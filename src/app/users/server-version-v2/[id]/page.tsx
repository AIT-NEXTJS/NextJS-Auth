import { User } from '@/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function UserInfo({ params }: { params: { id: string } }) {
	const id = params.id;
	const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
	console.log('ID: ', id);
	if (!res.ok) {
		if (res.status === 404) {
			notFound();
		}
		throw new Error('Failed to fetch users');
	}
	const user: User = await res.json();

	return (
		<div className='flex items-center justify-center flex-col p-6 bg-secondary py-20 px-32'>
			<div className='bg-primary rounded-2xl border border-border text-white font-bold mb-4 w-64 p-8 flex flex-col items-center gap-6'>
				<h2>{user.name}</h2>
				<Image src={user.avatar} alt={'avatar'} unoptimized width={200} height={200} className='rounded-full mb-4' />
				<p>{user.email}</p>
			</div>
		</div>
	);
}

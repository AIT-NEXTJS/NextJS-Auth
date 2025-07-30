'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function AuthButton() {
	const { data: session } = useSession();

	useEffect(() => {
		console.log('Session data:', session);
	}, [session]);

	if (session) {
		return (
			<div className='flex items-center gap-4'>
				<img src={session.user?.image || ''} alt={session.user?.name || 'User Avatar'} className='w-8 h-8 rounded-full' />
				<Link href={'/profile'} className='hover:text-amber-300 '>
					Profile
				</Link>

				<button onClick={() => signOut()}>Sign out</button>
			</div>
		);
	} else {
		return <button onClick={() => signIn()}>Sign in with Google</button>;
	}
}

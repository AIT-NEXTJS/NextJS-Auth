import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Image from 'next/image';

export default async function Profile() {
	const session = await getServerSession(authOptions);

	if (!session) {
		return <div className='text-red-500 text-center h-[calc(100vh-80px)] flex items-center justify-center'>You are not authorized.</div>;
	}

	return (
		<div className='flex items-center justify-center flex-col gap-4 p-6'>
			<h2 className='text-2xl font-bold'>User profile</h2>
			<pre>{JSON.stringify(session?.user, null, 2)}</pre>
			<p>{session?.user?.email}</p>
			<Image src={typeof session?.user?.image === 'string' ? session.user.image : '/fallback.png'} alt='avatar' width={200} height={200} unoptimized />
		</div>
	);
}

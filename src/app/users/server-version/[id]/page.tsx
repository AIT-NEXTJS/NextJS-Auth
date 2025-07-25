import UserCard from '@/components/UserCard/UserCard';
import { User } from '@/types';
export default async function ProductDetails({ params }: { params: { id: string } }) {
	const id = (await params).id;
	//api.escuelajs.co/api/v1/users/{id}

	const user: User = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`).then(res => res.json());

	console.log(user);

	//https: return <div>Id - {id}</div>;
	return (
		<div className='flex items-center justify-center'>
			<UserCard key={user.id} user={user} />
		</div>
	);
}

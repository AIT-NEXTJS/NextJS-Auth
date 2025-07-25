// server-version/page.tsx

import UserCard from '@/components/UserCard/UserCard';
import { User } from '@/types';
import { revalidateTag } from 'next/cache';
import Link from 'next/link';

// Компонент по умолчанию серверный (в Next.js 13+ это поведение по умолчанию)
const UsersServerVersion = async () => {
	// Выполняем запрос на API
	const res = await fetch('https://api.escuelajs.co/api/v1/users', {
		headers: {
			// API-ключ безопасен здесь — он не попадёт на клиент
			'Api-Key': 'asdasda.asdasd.asdasdasd9123adsmkkasd',
		},
		//next: { revalidate: 60 },
		next: { tags: ['users'] },

		//1 cache: 'force-cache', // кэшируется при сборке, потом не обновляется

		// 2 cache: "no-store" — кэшируется при сборке, потом обновляется
		// 3 next: {revalidate:60} - обновляется каждые 60 секунд
		// новости, курсы валют, продукты

		// ручное обновление: next: {tags: ['users']}, внутри фетча
		// revalidateTag: ['users']
	});

	// Если ответ не OK (например, 404 или 500) — выбрасываем ошибку
	if (!res.ok) {
		throw new Error('Fetch users failed');
	}

	// Преобразуем ответ в JSON и сохраняем в переменную users
	const users: User[] = await res.json();

	// console.log(users);

	return (
		<div className='max-w-5xl mx-auto p-6'>
			<h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>Список пользователей</h1>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center'>
				{users.map(user => (
					<UserCard user={user} showBackLink={false} key={user.id}/>
				))}

				{/* <button
				type='button'
				onClick={() => {
					revalidateTag('users');
				}}
			>
				Обновить данные пользователей с сейчас - пример
			</button> */}
			</div>
		</div>
	);
};

export default UsersServerVersion;

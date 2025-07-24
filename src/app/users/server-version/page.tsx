// server-version/page.tsx

import { User } from '@/types';

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

	// Выводим в терминал сервера — клиент этого не увидит
	// console.log(users); // ← можно включить для отладки

	// Возвращаем JSX-разметку: список пользователей
	return (
		<div>
			{users.map((user: User) => (
				<li key={user.id}>{user.name}</li>
			))}
		</div>
	);
};

export default UsersServerVersion;

export default async function About() {
 const URL = process.env.BASE_URL;
 let message = '...';

 try {
		const res = await fetch(`${URL}/api/hello`, { cache: 'no-store' });
		const data = await res.json();
		message = data.message;
 } catch (e) {
		// во время билда сюда попадёт
		message = '[Ошибка подключения к API]';
 }

	return (
		<section className='px-28 max-w-3xl mx-auto p-6'>
			<h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>О проекте</h1>
			<div className='border border-gray-700 p-4 rounded'>
				<p>Наша платформа предназначена для онлайн-обучения различным видам спорта.</p>
				<p>Мы стремимся помочь людям всех возрастов заниматься спортом удобно и доступно.</p>
				<p>{message}</p>
			</div>
		</section>
	);
}

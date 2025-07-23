export default function Football() {
	return (
		<section className='max-w-3xl mx-auto p-6 px-6 sm:px-12 md:px-28'>
			<h1 className='text-3xl font-bold mb-6 text-center text-blue-900'>Курс по футболу</h1>
			<div className='border border-gray-700 p-6 rounded space-y-4'>
				<p>В этом курсе вы познакомитесь с основами футбола. Материалы подходят для самостоятельного изучения или в сопровождении тренера.</p>
				<ul className='list-disc list-inside space-y-1'>
					<li>Техника владения мячом</li>
					<li>Пас и дриблинг</li>
					<li>Тактика и командная игра</li>
				</ul>
				<p className='text-gray-700'>Подходит для начинающих игроков.</p>
			</div>
		</section>
	);
}

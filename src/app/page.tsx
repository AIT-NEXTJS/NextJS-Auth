export default function Home() {
	return (
		<div className='max-w-3xl mx-auto p-6'>
			<section className='px-6 sm:px-12 md:px-28'>
				<h1 className='text-3xl font-bold mb-6 text-center text-gray-700'>Добро пожаловать на сайт спортивных курсов!</h1>
				<div className='border border-gray-700 p-6 rounded space-y-4'>
					<p>Мы предлагаем обучение различным видам спорта онлайн. Курсы подходят для начинающих и всех желающих улучшить свои навыки.</p>
					<p>
						<a href='/sports' className='text-yellow-600 hover:text-orange-300 transition'>
							Перейти к курсам по спорту →
						</a>
					</p>
				</div>
				<p className='bg-background:amber text-foreground dark:bg-orange-400'>Hello Next</p>
			</section>
		</div>
	);
}

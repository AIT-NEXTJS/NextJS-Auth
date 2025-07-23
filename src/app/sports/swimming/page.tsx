export default function Swimming() {
	return (
		<section className='max-w-3xl mx-auto p-6 px-6 sm:px-12 md:px-28'>
			<h1 className='text-3xl font-bold mb-6 text-center text-blue-900'>Курс по плаванию</h1>
			<div className='border border-gray-700 p-6 rounded space-y-4'>
				<p>Плавание — важный навык для здоровья и безопасности. Этот курс поможет освоить базовые техники и повысить уверенность в воде.</p>
				<ul className='list-disc list-inside space-y-1'>
					<li>Дыхательные упражнения</li>
					<li>Основы техники</li>
					<li>Стили плавания: кроль, брасс, баттерфляй</li>
				</ul>
				<p className='text-gray-700'>Подходит для всех возрастов и уровней подготовки.</p>
			</div>
		</section>
	);
}

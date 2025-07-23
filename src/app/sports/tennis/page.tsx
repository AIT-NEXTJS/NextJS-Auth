import style from './page.module.css';


export default function Tennis() {
	return (
		<section className='max-w-3xl mx-auto p-6 px-6 sm:px-12 md:px-28'>
			<h1 className='text-3xl font-bold mb-6 text-center text-blue-900'>Курс по теннису</h1>
			<div className='border border-gray-700 p-6 rounded space-y-4'>
				<p>Введение в основы тенниса и развитие игровых навыков. Курс поможет освоить ключевые элементы игры и повысить уверенность на корте.</p>
				<ul className='list-disc list-inside space-y-1'>
					<li>Основные удары</li>
					<li>Подача</li>
					<li>Правила игры</li>
					<li className={style.custom}>Стратегия на корте</li>
				</ul>
				<p className='text-gray-700'>Курс подходит для любителей и новичков.</p>
			</div>
		</section>
	);
}

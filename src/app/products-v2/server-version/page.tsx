import ProductCard from '@/components/ProductCard/ProductCard';
import { Product } from '@/types';

export default async function ProductsServerVersion() {
	const res = await fetch('https://api.escuelajs.co/api/v1/products');
	next: {tags: ['products']};

	if (!res.ok) {
		throw new Error('Products failed to fetch');
	}
	const products = await res.json();
	// console.log(products); -
	return (
		<div>
			{products.map((product: Product) => (
				<ProductCard product={product} key={product.id} />
			))}
		</div>
	);
}

// default -> SSG - server side generate - 1 раз и все
// -> только первый запуск -> только для статичных страниц

// next: { revalidate: 60 } -> обновляется каждые 60 секунд -> для динамических страниц -> ISR
// каждое n времени генерируется новый статичный файл
// через 40 сек - получит сохраненный ранее статичный файл
// 180 сек - делает еще один запрос -> получит опять старый статичный файл
// но готовит новый для следущих 40 сек

// next: {revalidate:0} -> SSR - server side render -> генерация при каждом запросе - каждый раз при запросе
// аналог cache: 'no-store' -> SSR > такой же контент будет генерироваться при каждом запросе

// SSG - никогда не обновляется
// SSR - обновляется при каждом запросе
// ISR - обновляется каждые n секунд

// cache: 'force-cache' - кэшируется при сборке, потом не обновляется
// cache: "no-store" - кэшируется при сборке, потом обновляется
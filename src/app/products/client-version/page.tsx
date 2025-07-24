'use client'; // yes, it's a client component

import { useEffect, useState } from 'react';

interface Product {
	id: number;
	title: string;
	price: number;
}

export default function ProductsClient() {
	const [products, setProducts] = useState<Product[]>([]);

	// request products after load
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(data => setProducts(data.slice(0, 5))); // get first 5
	}, []);

	return (
		<div className='max-w-3xl mx-auto p-6'>
			<h1 className='text-xl font-bold mb-4'>Клиентский компонент - список продуктов</h1>

			{/* Get first 5 products to render */}
			<ul className='list-disc pl-6 space-y-2'>
				{products.map(product => (
					<li key={product.id}>
						<strong>{product.title}</strong> – {product.price}$
					</li>
				))}
			</ul>
		</div>
	);
}

// server

export default async function ProductsServer() {
	// Get products
	const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());

	return (
		<div className='max-w-3xl mx-auto p-6'>
			<h1 className='text-xl font-bold mb-4'>Серверный компонент - список продуктов</h1>

			{/* Get first 5 products */}
			<ul className='list-disc pl-6 space-y-2'>
				{products.slice(0, 5).map((product: any) => (
					<li key={product.id}>
						<strong>{product.title}</strong> – {product.price}$
					</li>
				))}
			</ul>
		</div>
	);
}

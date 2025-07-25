'use client';

import { Product } from '@/types';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface ProductCardProps {
	product: Product;
}
// chunk, bundle, code splitting
export default function ProductCard({ product }: ProductCardProps) {
	const router = useRouter();
	function handleDelete(id: number) {
		fetchDelete(id);
	}
	async function fetchDelete(id: number) {
		const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
			method: 'DELETE',
		});
		if (res.ok) {
			router.refresh();
			// router.push('/products');
		}
	}

	return (
		<li>
			<h3>{product.title}</h3>

			<Image src={product.images[0]} alt={'Product ' + product.title} width={200} height={200} unoptimized />
			<button
				type='button'
				onClick={() => {
					handleDelete(product.id);
				}}
			>
				Delete
			</button>
			<Link href={`/products-v2/server-version/${product.id}`}>Details</Link>
		</li>
	);
}

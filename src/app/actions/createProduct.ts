'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createProduct(formData: FormData) {
  const title = formData.get('title')?.toString();
  const price = Number(formData.get('price'));
  const description = formData.get('description')?.toString();
  const categoryId = Number(formData.get('categoryId'));
  const image = formData.get('image')?.toString(); // Get the image URL, not required

  try { //check validation
    const res = await fetch('https://api.escuelajs.co/api/v1/products/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        price,
        description,
        categoryId,
        images: [image],
      }),
    });

    if (!res.ok) {
      throw new Error('API request failed');
    }


    revalidateTag('products');
    redirect('/products');

  } catch (error) {
    console.error('Error creating product:', error);
    redirect('/products-v2/server-version'); // Redirect to the create product page
  }
}

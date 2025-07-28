import  { createProduct }  from '@/app/actions/createProduct';
import { FiImage } from 'react-icons/fi';
import { Category } from '@/types';

export default async function CreateProduct() {

const res2 = await fetch('https://api.escuelajs.co/api/v1/categories');
if (!res2.ok) {
	throw new Error('Failed to fetch categories');
}
const categories = await res2.json();


	return (
		<div className='max-w-xl mx-auto p-6'>
			<h1 className='text-2xl font-bold mb-4'>Create product</h1>

			<form action={createProduct} className='space-y-4'>
				<input type='text' name='title' placeholder='Name' className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200' required />
				<input type='number' name='price' placeholder='Price' className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200' required />
				<textarea name='description' placeholder='Description' className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200' required />

				<select name='categoryId' className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200' required>
					{/* <option value={35}>Clothes</option>
          <option value={36}>Electronics</option> */}
					{categories.map((category: Category) => (
						<option value={category.id} key={category.id}>
							{category.name}
						</option>
					))}
				</select>
				<div className='relative'>
					<FiImage className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
					<input type='text' name='image' placeholder='Image URL' className='w-full pl-10 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200' />
				</div>

				<button type='submit' className='rounded-md w-full px-4 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring focus:ring-blue-200 transition'>
					Save
				</button>
			</form>
		</div>
	);
}

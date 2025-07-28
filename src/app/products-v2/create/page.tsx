import { createProduct } from '@/app/actions/createProduct';
import { FiImage } from 'react-icons/fi';

export default function CreateProduct() {
	return (
		<div className='max-w-xl mx-auto p-6'>
			<h1 className='text-2xl font-bold mb-4'>Create product</h1>

			<form action={createProduct} className='space-y-4'>
				<input type='text' name='title' placeholder='Name' className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200' required />
				<input type='number' name='price' placeholder='Price' className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200' required />
				<textarea name='description' placeholder='Description' className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200' required />
				<input type='number' name='categoryId' placeholder='Category ID (ex. 11 - Clothes' className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200r' required />
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

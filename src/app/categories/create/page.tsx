import { createCategory } from '@/app/actions/createCategory';

export default function CreateCategory() {
	return (
		<div className='max-w-xl mx-auto p-6 bg-white rounded-xl'>
			<h1 className='text-2xl font-bold text-center mb-6'>Add New Category</h1>
			<form action={createCategory} className='space-y-4'>
				<input type='text' name='name' placeholder='Category name' className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200' />
				<input type='text' name='image' placeholder='Image URL' className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200' />
				<button type='submit' className=' rounded-md w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 transition'>
					Save
				</button>
			</form>
		</div>
	);
}

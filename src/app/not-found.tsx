import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='max-w-3xl mx-auto p-6 text-center'>
			<h1 className='text-3xl font-bold mb-6 text-gray-800'>Page not found</h1>
			<Link href='/' className='text-yellow-600 hover:text-orange-300 transition'>
				← Back to home
			</Link>
		</div>
	);
}

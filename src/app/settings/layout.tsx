import Link from 'next/link';

export default function SettingsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<nav className='flex justify-start gap-8 bg-slate-600'>
				<Link href={'/settings/user'}>Users setting</Link>
				<Link href={'/settings/organization'}>Organization setting</Link>
			</nav>
			{children}
		</>
	);
}

import style from './Button.module.css';
interface Props {
	title: string;
	type?: 'submit' | 'reset' | 'button';
	onClick?: () => void;
}
export default function Button({ title, type = 'button', onClick }: Props) {
	return (
		<button type={type} className={style.params} onClick={onClick}>
			{title}
		</button>
	);
}



import styles from './Counter.module.css';
import Button from '../Button/Button';
function Counter() {
	return (
		<div className={styles.counter}>
			<Button title='-' onClick={() => {}} />
			<div className={styles.value}>0</div>
			<Button title='+' onClick={() => {}} />
		</div>
	);
}
export default Counter;

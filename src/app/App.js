import Board from './components/board/board';
import StatusTitle from './components/statusTitle/statusTitle';
import styles from './App.module.css';
import { RESET_BOARD } from './actions';
import { useDispatch } from 'react-redux';

export default function AppLayout() {
	const dispatch = useDispatch();

	function resetGame() {
		dispatch(RESET_BOARD);
	}

	return (
		<div className={styles.App}>
			<StatusTitle />
			<Board />
			<button className={styles.ResetBtn} onClick={resetGame}>
				Reset game
			</button>
		</div>
	);
}

import Board from './components/board/board';
import StatusTitle from './components/statusTitle/statusTitle';
import styles from './App.module.css';

export default function AppLayout({ props }) {
	const { board, handleClick, resetGame } = props;
	return (
		<div className={styles.App}>
			<StatusTitle board={board} />
			<Board board={board} onClick={handleClick} />
			<button className={styles.ResetBtn} onClick={resetGame}>
				Reset game
			</button>
		</div>
	);
}

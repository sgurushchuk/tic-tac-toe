import styles from './statusTitle.module.css';
import { selectPlayer, selectBoard } from '../../selectors';
import { useSelector } from 'react-redux';
import { checkWinner, checkDraw } from '../../utils/utils';

export default function StatusTitleLayout() {
	const board = useSelector(selectBoard);
	const winner = checkWinner(board);
	const isDraw = checkDraw(board);
	const player = useSelector(selectPlayer);

	return (
		<h1 className={styles.statusTitle}>
			{winner
				? `Winner: ${winner}`
				: isDraw
				? "It's a draw!"
				: `Next player: ${player ? 'X' : 'O'}`}
		</h1>
	);
}

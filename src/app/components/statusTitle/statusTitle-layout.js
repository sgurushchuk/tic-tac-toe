import styles from './statusTitle.module.css';
import { checkDraw } from '../../utils/utils';

export default function StatusTitleLayout({ props }) {
	const { board, winner, player } = props;

	return (
		<h1 className={styles.statusTitle}>
			{winner
				? `Winner: ${winner}`
				: checkDraw(board)
				? "It's a draw!"
				: `Next player: ${player ? 'X' : 'O'}`}
		</h1>
	);
}

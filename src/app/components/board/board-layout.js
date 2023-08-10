import styles from './board.module.css';
import { useSelector } from 'react-redux';
import { selectBoard } from '../../selectors/selectBoard';

export default function BoardLayout({ handleClick }) {
	const board = useSelector(selectBoard);

	return (
		<div className={styles.board}>
			{board.map((cell, index) => {
				return (
					<button
						key={index}
						onClick={() => handleClick(index)}
						className={styles.cell}
					>
						{cell}
					</button>
				);
			})}
		</div>
	);
}

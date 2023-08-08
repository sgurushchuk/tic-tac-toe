import styles from './board.module.css';

export default function BoardLayout({ props }) {
	const { board, handleClick } = props;

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

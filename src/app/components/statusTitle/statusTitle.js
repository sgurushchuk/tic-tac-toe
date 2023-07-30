import StatusTitleLayout from './statusTitle-layout';
import { checkWinner } from '../../utils/utils';
import { store } from '../../store';

export default function StatusTitle({ board }) {
	function renderStatus() {
		const winner = checkWinner(board);
		if (winner) {
			return `Winner: ${winner}`;
		} else if (board.every((cell) => cell !== null)) {
			return "It's a draw!";
		} else {
			return `Next player: ${store.getState().player ? 'X' : 'O'}`;
		}
	}

	return <StatusTitleLayout renderStatus={renderStatus} />;
}

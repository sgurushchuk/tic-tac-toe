import { checkWinner } from './utils/utils';
import AppLayout from './app-layout';
import { RESET_BOARD, updateBoard } from './actions';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
	const board = useSelector((state) => state.board);
	const dispatch = useDispatch();

	function resetGame() {
		dispatch(RESET_BOARD);
	}

	function handleClick(index) {
		if (board[index] || checkWinner(board)) {
			return;
		}
		dispatch(updateBoard(index));
	}

	return <AppLayout props={{ board, handleClick, resetGame }} />;
}

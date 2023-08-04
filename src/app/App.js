import { checkWinner } from './utils/utils';
import AppLayout from './app-layout';
import { RESET_BOARD, updateBoard } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard } from './selectors/selectBoard';

export default function App() {
	const board = useSelector(selectBoard);
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

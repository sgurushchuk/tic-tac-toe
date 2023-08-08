import BoardLayout from './board-layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard } from '../../selectors/selectBoard';
import { checkWinner } from '../../utils/utils';
import { updateBoard } from '../../actions';

export default function Board() {
	const board = useSelector(selectBoard);
	const dispatch = useDispatch();

	function handleClick(index) {
		if (board[index] || checkWinner(board)) {
			return;
		}
		dispatch(updateBoard(index));
	}

	return <BoardLayout props={{ board, handleClick }} />;
}

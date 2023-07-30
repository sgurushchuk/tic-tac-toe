import { useState } from 'react';
import { checkWinner } from './utils/utils';
import AppLayout from './app-layout';
import { store } from './store';
import { RESET_BOARD, updateBoard } from './actions';

export default function App() {
	const [board, setBoard] = useState(store.getState().board);

	function resetGame() {
		store.dispatch(RESET_BOARD);
		setBoard(store.getState().board);
	}

	function handleClick(index) {
		if (store.getState().board[index] || checkWinner(store.getState().board)) {
			return;
		}

		store.dispatch(updateBoard(index));

		setBoard(store.getState().board);
	}

	return <AppLayout props={{ board, handleClick, resetGame }} />;
}

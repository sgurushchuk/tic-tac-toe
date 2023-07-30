import { useState } from 'react';
import { checkWinner } from './utils/utils';
import AppLayout from './app-layout';
import { store } from './store';

export default function App() {
	const [board, setBoard] = useState(store.getState().board);

	function resetGame() {
		store.dispatch({ type: 'RESET_BOARD' });
		store.dispatch({ type: 'RESET_PLAYER' });
		setBoard(store.getState().board);
	}

	function handleClick(index) {
		if (store.getState().board[index] || checkWinner(store.getState().board)) {
			return;
		}

		const player = store.getState().player;

		store.dispatch({
			type: 'UPDATE_BOARD',
			payload: { index, player },
		});

		setBoard(store.getState().board);
		store.dispatch({ type: 'UPDATE_PlAYER' });
	}

	return <AppLayout props={{ board, handleClick, resetGame }} />;
}

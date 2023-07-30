const initalState = {
	board: Array(9).fill(null),
	player: true,
};

export default function reducer(state = initalState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'UPDATE_BOARD': {
			const updatedBoard = [...state.board];
			updatedBoard[payload.index] = state.player ? 'X' : 'O';
			return {
				...state,
				board: updatedBoard,
				player: !state.player,
			};
		}
		case 'RESET_BOARD': {
			return initalState;
		}
		default:
			return state;
	}
}

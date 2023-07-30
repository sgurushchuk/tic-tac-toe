// const initalBoardState = Array(9).fill(null);

// export default function board(state = initalBoardState, action) {
// 	const { type, payload } = action;
// 	switch (type) {
// 		case 'UPDATE_BOARD': {
// 			const updatedBoard = [...state];
// 			updatedBoard[payload.index] = payload.player ? 'X' : 'O';
// 			return updatedBoard;
// 		}
// 		case 'RESET_BOARD': {
// 			return initalBoardState;
// 		}
// 		default:
// 			return state;
// 	}
// }

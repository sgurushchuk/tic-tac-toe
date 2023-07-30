export function updateBoard(index) {
	return {
		type: 'UPDATE_BOARD',
		payload: { index },
	};
}

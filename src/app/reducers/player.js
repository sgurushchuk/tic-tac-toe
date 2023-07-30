const initialPlayerState = true;

export default function player(state = initialPlayerState, action) {
	const { type } = action;
	switch (type) {
		case 'UPDATE_PlAYER': {
			return !state;
		}
		case 'RESET_PLAYER': {
			return initialPlayerState;
		}
		default:
			return state;
	}
}

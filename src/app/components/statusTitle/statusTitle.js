import StatusTitleLayout from './statusTitle-layout';
import { checkWinner } from '../../utils/utils';
import { useSelector } from 'react-redux';
import { selectPlayer, selectBoard } from '../../selectors';

export default function StatusTitle() {
	const board = useSelector(selectBoard);
	const player = useSelector(selectPlayer);
	const winner = checkWinner(board);

	return <StatusTitleLayout props={{ board, player, winner }} />;
}

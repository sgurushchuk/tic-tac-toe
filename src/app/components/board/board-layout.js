import styles from './board.module.css'

export default function BoardLayout({board, onClick}) {
    return (
        <div className={styles.board}>
            {board.map((cell, index) => {
                return <button key={index} onClick={() => onClick(index)} className={styles.cell}>{cell}</button>
            })}
        </div>
    )
}
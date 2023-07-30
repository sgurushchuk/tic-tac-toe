import styles from './statusTitle.module.css'

export default function StatusTitleLayout({renderStatus}) {
    return <h1 className={styles.statusTitle}>{renderStatus()}</h1>
}
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					display: 'flex',
					alignItems: 'start',
					justifyContent: 'center',
					flexDirection: 'column',
					padding: 16,
				}}
			>
				<h1>AIBFWG</h1>
				<p>ai boyfriend working group</p>
			</div>
		</main>
	)
}

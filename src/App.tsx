import './styles/index.scss'
import Navbar from 'components/Navbar'
import Searchbar from 'components/Searchbar'
import styles from './App.module.scss'

function App() {
	return (
		<div className={styles.container}>
			<Navbar className={styles.navbar} />
			<Searchbar />
		</div>
	)
}

export default App

import Button from 'components/Button'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import styles from './Searchbar.module.scss'

const Searchbar = () => {
	return (
		<div className={styles.container}>
			<SearchIcon />
			<input
				type='text'
				className={styles.input}
				placeholder='Search Github username'
			/>
			<Button>Search</Button>
		</div>
	)
}

export default Searchbar

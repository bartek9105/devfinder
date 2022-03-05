import { ReactComponent as SunIcon } from '../../icons/sun.svg'
import styles from './ThemeSwitch.module.scss'

const ThemeSwitch = () => {
	return (
		<div className={styles.container}>
			<span className={styles.hint}>Dark</span>
			<SunIcon className={styles.sunIcon} />
		</div>
	)
}

export default ThemeSwitch

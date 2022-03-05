import DevFinderLogo from 'components/DevFinderLogo'
import ThemeSwitch from 'components/ThemeSwitch'
import styles from './Navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<DevFinderLogo />
			<ThemeSwitch />
		</nav>
	)
}

export default Navbar

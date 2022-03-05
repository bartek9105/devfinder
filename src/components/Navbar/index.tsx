import DevFinderLogo from 'components/DevFinderLogo'
import ThemeSwitch from 'components/ThemeSwitch'
import cn from 'classnames'
import styles from './Navbar.module.scss'

type NavbarProps = {
	className?: string
}

const Navbar = ({ className }: NavbarProps) => {
	return (
		<nav className={cn(styles.navbar, className)}>
			<DevFinderLogo />
			<ThemeSwitch />
		</nav>
	)
}

export default Navbar

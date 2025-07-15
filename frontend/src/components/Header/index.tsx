
import ThemeToggleButton from '../ThemeToggleButton';
import styles from './styles.module.scss';



const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Zenda</h1>
            <ThemeToggleButton />
        </header>
    )
}

export default Header;
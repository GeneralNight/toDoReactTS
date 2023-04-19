import Logo from '../../assets/Logo.svg'

import styles from './styles.module.css'

export function Header() {
    return (
        <header>
            <img src={Logo} alt="" className={styles.logo} />
        </header>
    )
}
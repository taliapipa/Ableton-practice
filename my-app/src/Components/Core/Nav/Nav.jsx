import './Nav.css'
import Logo from '../../../Assets/logo.png'

const Nav = () => {
    return (
        <header>
            <nav className='first-nav'>
                <img src={Logo} alt='logo' className='logo'/>
                <ul className='nav-pages'>
                    <li>Live</li>
                    <li>Push</li>
                    <li>Link</li>
                    <li>Shop</li>
                    <li>Packs</li>
                    <li>Help</li>
                    <li>More+</li>
                </ul>
                <ul className='nav-account'>
                    <li>Try Live for free</li>
                    <li>Account</li>
                    <li>Log out</li>
                </ul>
            </nav>
            <nav className='second-nav'>
                <ul>
                    <li>About</li>
                    <li>Jobs</li>
                </ul>
            </nav>

        </header>

    )
}

export default Nav
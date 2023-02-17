import React from 'react'
import NavLink from './components/NavLink'
import User from './components/User'
import { Container, Nav, Overlay } from './style'
import { useAuth } from '../../../../../context/authContext';

// images
import about from '../../../../../assets/images/MobileNav/about.png';
import categories from '../../../../../assets/images/MobileNav/categories.png';
import contact from '../../../../../assets/images/MobileNav/contact.png';
import favotites from '../../../../../assets/images/MobileNav/favotites.png';
import home from '../../../../../assets/images/MobileNav/home.png';
import lang from '../../../../../assets/images/MobileNav/lang.png';
import orders from '../../../../../assets/images/MobileNav/orders.png';

const MobileNav = ({ closeNav, className = "" }) => {
    const { logout } = useAuth();

    return (
        <Nav className={className}>
            <Container>
                <User />
                <div className='nav__section border__bottom'>
                    <NavLink to="/" text="Home" image={home} />
                    <NavLink to="/" text="Categories" image={categories} />
                    <NavLink to="/" text="Favorites" image={favotites} />
                    <NavLink to="/" text="My orders" image={orders} />
                </div>
                <div className='nav__section border__bottom'>
                    <NavLink onClick={() => { }} text="English | USD" image={lang} />
                    <NavLink to="/" text="Contact us" image={contact} />
                    <NavLink to="/" text="About" image={about} />
                </div>
                <div className='nav__section'>
                    <NavLink onClick={logout} text="logout" />

                    <NavLink to="/" text="User agreement" />
                    <NavLink to="/" text="Partnership" />
                    <NavLink to="/" text="Privacy policy" />
                </div>
            </Container>
            <Overlay className={className} onClick={closeNav} />
        </Nav>
    )
}

export default MobileNav
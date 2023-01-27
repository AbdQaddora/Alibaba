import React from 'react'
// components
import TransparentButton from '../../../../components/TransparentButton'
import CustomeLink from '../../../../components/CustomeLink';
import Container from '../../../../components/Container/style';
import InputWithIcon from '../../../../components/InputWithIcon';

// images
import logo from '../../../../assets/images/full_logo_mobile.png'
import toggle from '../../../../assets/images/header/toggleNav.png'
import profile from '../../../../assets/images/header/profileMobile.png'
import cart from '../../../../assets/images/header/cartMobile.png'
import seacrh from '../../../../assets/images/header/seacrh.png'

// style
import Style from './style'
const MobileHeader = () => {
    return (
        <Style>
            <Container className='header_container'>
                <div className='row-1'>
                    <div>
                        <TransparentButton>
                            <img src={toggle} alt="toggle nav" />
                        </TransparentButton>
                        <CustomeLink to="/">
                            <img src={logo} alt="logo" />
                        </CustomeLink>
                    </div>
                    <div>
                        <CustomeLink to="/profile">
                            <img src={profile} alt="profile" />
                        </CustomeLink>
                        <CustomeLink to="/cart">
                            <img src={cart} alt="cart" />
                        </CustomeLink>
                    </div>
                </div>
                <div className='row-2'>
                    <InputWithIcon
                        icon={seacrh}
                        className="search_input"
                    />
                </div>
                <div></div>
            </Container>
        </Style>
    )
}

export default MobileHeader
import React from 'react'
import Style from './style'
import full_logo from '../../../../assets/images/full_logo.png'
import Container from '../../../../components/Container';

import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import SelectInput from '../../../../components/SelectInput';
import CustomeLink from '../../../../components/CustomeLink';

// images
import profile from '../../../../assets/images/header/PcProfile.png';
import message from '../../../../assets/images/header/PcMessage.png';
import orders from '../../../../assets/images/header/PcOrders.png';
import cart from '../../../../assets/images/header/PcCart.png';

const PcHeader = () => {
    return (
        <Style>
            <Container className="header_container">
                <div className='logo'>
                    <CustomeLink to="/">
                        <img src={full_logo} alt="full_logo" />
                    </CustomeLink>
                </div>
                <div className='search'>
                    <Input
                        className='search__input'
                        placeholder="Search"
                    />
                    <SelectInput options={[
                        { text: "All category", value: "0" },
                        { text: "Hot offers", value: "1" },
                        { text: "Gift boxes", value: "2" },
                        { text: "Projects", value: "3" },
                        { text: "Menu item", value: "4" }
                    ]} />
                    <Button size="small">Search</Button>
                </div>
                <div className='links'>
                    <CustomeLink to="/profile">
                        <img src={profile} alt="profile" />
                    </CustomeLink>
                    <CustomeLink to="/message">
                        <img src={message} alt="message" />
                    </CustomeLink>
                    <CustomeLink to="/orders">
                        <img src={orders} alt="orders" />
                    </CustomeLink>
                    <CustomeLink to="/cart">
                        <img src={cart} alt="cart" />
                    </CustomeLink>
                </div>
            </Container>
        </Style>
    )
}

export default PcHeader
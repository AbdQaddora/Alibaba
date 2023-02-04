import React, { useState } from 'react'
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
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PATHS } from '../../../../router';

const PcHeader = () => {
    const [searchParams] = useSearchParams();
    const [categoryValue, setCategoryValue] = useState(searchParams.get("category") || "all");
    const [searchValue, setSearchValue] = useState(searchParams.get("search") || "");

    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        navigate(`${PATHS.STORE_LIST}?search=${searchValue}&category=${categoryValue}`)
    }

    return (
        <Style>
            <Container className="header_container">
                <div className='logo'>
                    <CustomeLink to="/">
                        <img src={full_logo} alt="full_logo" />
                    </CustomeLink>
                </div>
                <form className='search' onSubmit={handelSubmit}>
                    <Input
                        className='search__input'
                        placeholder="Search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <SelectInput options={[
                        { text: "All category", value: "all" },
                        { text: "Hot offers", value: "offers" },
                        { text: "Gift boxes", value: "boxes" },
                        { text: "Projects", value: "projects" },
                        { text: "Menu item", value: "item" }
                    ]}
                        value={categoryValue}
                        onChange={setCategoryValue}
                    />
                    <Button size="small">Search</Button>
                </form>
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
import React, { useEffect, useState } from 'react'
// components
import TransparentButton from '../../../../components/TransparentButton'
import CustomeLink from '../../../../components/CustomeLink';
import Container from '../../../../components/Container';
import InputWithIcon from '../../../../components/InputWithIcon';

// images
import logo from '../../../../assets/images/full_logo_mobile.png'
import toggle from '../../../../assets/images/header/toggleNav.png'
import profile from '../../../../assets/images/header/profileMobile.png'
import cart from '../../../../assets/images/header/cartMobile.png'
import seacrh from '../../../../assets/images/header/seacrh.png'

// style
import Style from './style'
import MobileSelectInput from '../../../../components/MobileSelectInput';
import MobileNav from './MobileNav/inde';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PATHS } from '../../../../router';
const MobileHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const [categoryValue, setCategoryValue] = useState(searchParams.get("category" || 'all'));
    const [searchValue, setSearchValue] = useState(searchParams.get("search") || "");
    const navigate = useNavigate();

    useEffect(() => {
        handelSubmit({ preventDefault: () => { } });
    }, [categoryValue]);

    const handelSubmit = () => {
        navigate(`${PATHS.STORE_LIST}?search=${searchValue}&category=${categoryValue}`)
    }

    const toggleNav = () => {
        setIsNavOpen(prev => !prev);
    }

    return (
        <>
            <MobileNav
                closeNav={() => { setIsNavOpen(false) }}
                className={isNavOpen ? "open" : ""}
            />
            <Style>
                <Container className='header_container'>
                    <div className='row-1'>
                        <div>
                            <TransparentButton onClick={toggleNav}>
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
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            icon={seacrh}
                            className="search_input"
                            onIconClick={handelSubmit}
                        />
                    </div>
                    <div className='row-3'>
                        <MobileSelectInput
                            value={categoryValue}
                            options={[
                                { text: "All category", value: "all" },
                                { text: "Hot offers", value: "offers" },
                                { text: "Gift boxes", value: "boxes" },
                                { text: "Projects", value: "projects" },
                                { text: "Menu item", value: "item" }
                            ]}
                            onChange={(value) => { setCategoryValue(value) }}
                        />
                    </div>
                </Container>
            </Style>
        </>
    )
}

export default MobileHeader
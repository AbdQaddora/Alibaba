import React from 'react'
import CustomLink from '../../../../../../../components/CustomeLink'
import TransparentButton from '../../../../../../../components/TransparentButton'
import { Body1 } from '../../../../../../../components/Typography'
import Style from './style'

const NavLink = ({ image, text, to, onClick }) => {
    if (onClick) {
        return (
            <Style>
                <TransparentButton onClick={onClick}>
                    <div className="nav__link__inner">
                        <div className='image__container'>
                            {image && <img src={image} alt={`to ${text}`} />}
                        </div>
                        <Body1 align="start">{text}</Body1>
                    </div>
                </TransparentButton>
            </Style>
        )
    }

    return (
        <Style>
            <CustomLink to={to}>
                <div className="nav__link__inner">
                    <div className='image__container'>
                        {image && <img src={image} alt={`to ${text}`} />}
                    </div>
                    <Body1>{text}</Body1>
                </div>
            </CustomLink>
        </Style>
    )
}

export default NavLink
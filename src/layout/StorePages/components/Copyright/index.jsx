import React from 'react'
import Container from '../../../../components/Container'
import { Body1 } from '../../../../components/Typography'
// images
import US from '../../../../assets/images/flags/US.png'
// style
import Style from './style'
const Copyright = () => {
    return (
        <Style>
            <Container className='copyright_container'>
                <Body1 color="gray/800">
                    © 2023 Ecommerce.
                </Body1>
                <Body1 color="gray/800">
                    <img src={US} alt="US" /> English
                </Body1>
            </Container>
        </Style>
    )
}

export default Copyright
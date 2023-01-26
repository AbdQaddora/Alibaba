import React from 'react'
import CustomLink from '../../../../components/CustomeLink'
import { Body1 } from '../../../../components/Typography';

// images
import visa1 from '../../../../assets/images/auth/visa1.png';
import visa2 from '../../../../assets/images/auth/visa2.png';
import visa3 from '../../../../assets/images/auth/visa3.png';
import visa4 from '../../../../assets/images/auth/visa4.png';
import Style from './style';

const Footer = () => {
    return (
        <Style>
            <div className='visa'>
                <img src={visa1} alt="visa1" />
                <img src={visa2} alt="visa2" />
                <img src={visa3} alt="visa3" />
                <img src={visa4} alt="visa4" />
            </div>
            <div className='links'>
                <Body1>
                    <CustomLink color="gray/800" to="">
                        Support
                    </CustomLink>
                </Body1>
                <Body1>
                    <CustomLink color="gray/800" to="">
                        Privacy & Cookies
                    </CustomLink>
                </Body1>
                <Body1>
                    <CustomLink color="gray/800" to="">
                        Accessibility
                    </CustomLink>
                </Body1>
            </div>
        </Style>
    )
}

export default Footer
import React from 'react'
import NotMobile from '../../../../components/NotMobile'
import Section from '../../../../components/Section'
import Style from './style'
import Card from './components/Card'

// images
import AE from '../../../../assets/images/flags/AE.png'
import AU from '../../../../assets/images/flags/AU.png'
import CN from '../../../../assets/images/flags/CN.png'
import DE from '../../../../assets/images/flags/DE.png'
import FR from '../../../../assets/images/flags/FR.png'
import GB from '../../../../assets/images/flags/GB.png'
import IT from '../../../../assets/images/flags/IT.png'
import RU from '../../../../assets/images/flags/RU.png'
import US from '../../../../assets/images/flags/US.png'

const Suppliers = () => {
    return (
        <NotMobile>
            <Section title="Suppliers by region">
                <Style>
                    <Card flag={AE} name="Arabic Emirates" link="shopname.ae" />
                    <Card flag={AU} name="Australia" link="shopname.ae" />
                    <Card flag={US} name="United States" link="shopname.ae" />
                    <Card flag={RU} name="Russia" link="shopname.ae" />
                    <Card flag={IT} name="Italy" link="shopname.ae" />
                    <Card flag={DE} name="Denmark" link="denmark.com.dk" />
                    <Card flag={FR} name="France" link="shopname.com.fr" />
                    <Card flag={AE} name="Arabic Emirates" link="shopname.ae" />
                    <Card flag={CN} name="China" link="shopname.ae" />
                    <Card flag={GB} name="Great Britain" link="shopname.ae" />
                </Style>
            </Section>
        </NotMobile>
    )
}

export default Suppliers
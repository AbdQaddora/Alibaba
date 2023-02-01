import React from 'react'
import Section from '../../../../components/Section'
import Style from './style'
import NotMobile from '../../../../components/NotMobile'
import Card from './components/Card'

// images
import extra1 from '../../../../assets/images/home/extra1.png';
import extra2 from '../../../../assets/images/home/extra2.png';
import extra3 from '../../../../assets/images/home/extra3.png';
import extra4 from '../../../../assets/images/home/extra4.png';

// icons
import { MdSearch , MdOutlineInventory2, MdOutlineSend, MdSecurity } from 'react-icons/md';

const ExtraServices = () => {
    return (
        <NotMobile>
            <Section title="Our extra services">
                <Style>
                    <Card
                        headerImage={extra1}
                        icon={<MdSearch />}
                        text1="Source from"
                        text2="Industry Hubs"
                    />
                    <Card
                        headerImage={extra2}
                        icon={<MdOutlineInventory2 />}
                        text1="Source from"
                        text2="Industry Hubs"
                    />
                    <Card
                        headerImage={extra3}
                        icon={<MdOutlineSend />}
                        text1="Source from"
                        text2="Industry Hubs"
                    />
                    <Card
                        headerImage={extra4}
                        icon={<MdSecurity />}
                        text1="Source from"
                        text2="Industry Hubs"
                    />
                </Style>
            </Section>
        </NotMobile>
    )
}

export default ExtraServices
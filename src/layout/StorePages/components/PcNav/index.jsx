import React from 'react'
import Container from '../../../../components/Container'
import CustomLink from '../../../../components/CustomeLink'
import SelectInput from '../../../../components/SelectInput'
import { Body1 } from '../../../../components/Typography'
import Style from './style'

// images
import DE from "../../../../assets/images/flags/DE.png"
import AE from "../../../../assets/images/flags/AE.png"
import US from "../../../../assets/images/flags/US.png"

const PcNav = () => {
  return (
    <Style>
      <Container className='nav__container'>
        <div>
          <CustomLink to="/">
            <Body1>All category</Body1>
          </CustomLink>
          <CustomLink to="/">
            <Body1>Hot offers</Body1>
          </CustomLink>
          <CustomLink to="/">
            <Body1>Gift boxes</Body1>
          </CustomLink>
          <CustomLink to="/">
            <Body1>Projects</Body1>
          </CustomLink>
          <SelectInput
            className='select help'
            noBorder={true}
            onChange={() => { }}
            value={0}
            options={[
              { text: "Help 1", value: "0" },
              { text: "Help 2", value: "1" },
              { text: "Help 3", value: "2" }
            ]}
          />
        </div>
        <div>
          <SelectInput
            className='select'
            noBorder={true}
            onChange={() => { }}
            options={[
              { text: "English, USD", value: "0" },
              { text: "Arabic", value: "1" },
            ]}
          />
          <Body1>Ship to</Body1>
          <SelectInput
            className='select lang__select'
            noBorder={true}
            onChange={() => { }}
            value={0}
            options={[
              { text: <img src={DE} alt="DE" />, value: "0" },
              { text: <img src={AE} alt="AE" />, value: "1" },
              { text: <img src={US} alt="US" />, value: "2" },
            ]}
          />
        </div>
      </Container>
    </Style>
  )
}

export default PcNav
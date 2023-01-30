import React, { useState } from 'react'
import InputWithIcon from '../../../../components/InputWithIcon'
import Style from './style'
// images
import emailIcon from '../../../../assets/images/home/email.png'
import { Body1, H4 } from '../../../../components/Typography'
import Button from '../../../../components/Button'
const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <Style>
      <H4 align="center">Subscribe on our newsletter</H4>
      <Body1 align="center">Get daily news on upcoming offers from many suppliers all over the world</Body1>
      <div className='subscribe__form'>
          <InputWithIcon
            className='subscribe__input'
            icon={emailIcon}
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
            type="email"
          />
          <Button>Subscribe</Button>
      </div>
    </Style>
  )
}

export default Subscribe
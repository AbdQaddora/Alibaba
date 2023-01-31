import React from 'react'
import Style from './style'

import noUser from '../../../../../../assets/images/noAvatarBlue.png'

import { Body1 } from '../../../../../../components/Typography'
import Button from '../../../../../../components/Button'
const UserSection = () => {
    return (
        <Style>
            <div className='user__header'>
                <img src={noUser} alt="no user" />
                <div>
                    <Body1>Hi, user</Body1>
                    <Body1>let’s get stated</Body1>
                </div>
            </div>
            <Button fullWidth className="sign_up_button">Join now</Button>
            <Button varient="secondary" fullWidth>Log in</Button>
        </Style>
    )
}

export default UserSection
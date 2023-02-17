import React from 'react'
import { useAuth } from '../../../../../../../context/authContext';


import { Body1 } from '../../../../../../../components/Typography';

// images
import noAvatar from '../../../../../../../assets/images/noAvatar.png';
// style
import Style from './style'
const User = () => {
    const { user } = useAuth();
    return (
        <Style>
            <img src={user.avatar ? user.avatar : noAvatar} alt="avatar" />
            <Body1
                margin="7px 0 0"
                transform="capitalize"
            >{user.name}</Body1>
        </Style>
    )
}

export default User
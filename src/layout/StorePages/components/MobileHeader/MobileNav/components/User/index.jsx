import React, { useEffect, useState } from 'react'
import Style from './style'

import { Body1 } from '../../../../../../../components/Typography';

// images
import noAvatar from '../../../../../../../assets/images/noAvatar.png';

const User = () => {
    const [user, setuser] = useState({
        name: "",
        avatar: ""
    });

    useEffect(() => {
        // !TODO: get user data from the api via user id
        setuser({
            name: "abd qaddora",
            avatar: ""
        });
    }, []);

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
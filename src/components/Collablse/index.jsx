import React, { useState } from 'react'
import Style from './style'

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Body1, H5 } from '../Typography';

const Collablse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleIsOpen = () => setIsOpen(prev => !prev);
    return (
        <Style>
            <div className="title" onClick={toggleIsOpen}>
                <Body1 weight={600}>{title}</Body1>
                <H5 color="gray/500">
                    {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </H5>
            </div>
            <div className={`${isOpen ? "open" : ""} content`}>{children}</div>
        </Style>
    )
}

export default Collablse
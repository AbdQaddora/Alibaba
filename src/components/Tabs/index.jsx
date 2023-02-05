import React, { useState } from 'react'
import TransparentButton from '../TransparentButton';
import { Body1 } from '../Typography';
import Style from './style';

const Tabs = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <Style>
            <div className="tabs__titles">
                {tabs.map((tab, index) => <TransparentButton
                    key={index}
                    onClick={() => { setActiveTabIndex(index) }}>
                    <Body1
                        className={activeTabIndex === index ? "tab__title active" : "tab__title"}
                        weight={500}
                        color={activeTabIndex === index ? "blue" : "gray/500"}
                        padding="13px">{tab.title}</Body1>
                </TransparentButton>)}
            </div>
            {tabs[activeTabIndex].content}
        </Style>
    )
}

export default Tabs
import React from 'react'
import { BsFillGridFill } from 'react-icons/bs';
import { MdTableRows } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';
import Paper from '../../../../../../components/Paper'
import { Body1, Span } from '../../../../../../components/Typography';
import Style from './style'

const Header = ({ items, displayType, toggleDisplayType }) => {
    const [searchParams] = useSearchParams();
    return (
        <Style>
            <Paper className='paper'>
                <Body1>
                    {items} items in <Span weight={600}>{searchParams.get("category") || "All"} category</Span>
                </Body1>
                <button className='toggle_display_type' onClick={toggleDisplayType}>
                    <p className={displayType === 'grid' ? "active" : ""}><BsFillGridFill /></p>
                    <p className={displayType === 'row' ? "active" : ""}><MdTableRows /></p>
                </button>
            </Paper>
        </Style>
    )
}

export default Header
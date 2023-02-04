import React from 'react'
import TransparentButton from '../../../../../../components/TransparentButton'
import { Span } from '../../../../../../components/Typography'
import Style, { Tag } from './style'

const Filters = ({ keywords, setKeywords }) => {
    const deleteKeyword = (keywordValue) => {
        setKeywords(prev => prev.filter((keyword) => keyword !== keywordValue))
    }

    if (keywords.length === 0) {
        return <></>
    }

    return (
        <Style>
            {keywords.map(keyword => <Tag key={keyword}>
                {keyword}
                <TransparentButton className='delete_btn' onClick={() => { deleteKeyword(keyword) }}>
                    <Span color='gray/500'>X</Span>
                </TransparentButton>
            </Tag>)}
            <TransparentButton className='clear_btn' onClick={() => { setKeywords([]) }}>
                <Span color='blue'>Clear all filter</Span>
            </TransparentButton>
        </Style>
    )
}

export default Filters
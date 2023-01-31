import React from 'react'
import Section from '../../../../components/Section'
import { RECOMMENDED_ITEMS } from '../../../../mock'
import Card from './components/Card'
import Style from './style'

const RecommendedItems = () => {
    return (
        <Section title="Recommended items">
            <Style>
                {RECOMMENDED_ITEMS.map((el , index) => <Card key={index} {...el}/>)}
            </Style>
        </Section>
    )
}

export default RecommendedItems
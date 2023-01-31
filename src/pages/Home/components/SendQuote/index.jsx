import React from 'react'
import Button from '../../../../components/Button'
import { Input, Textarea } from '../../../../components/common'
import Paper from '../../../../components/Paper'
import SelectInput from '../../../../components/SelectInput'
import { Body1, H3, H4 } from '../../../../components/Typography'
import { useIsMobile } from '../../../../context/IsMobile'
import Style from './style'

const SendQuote = () => {
    const isMobile = useIsMobile();
    return (
        <Style>
            <div className='text'>
                <H3 color="white">An easy way to send requests to all suppliers</H3>
                <Body1 margin="14px 0" color="white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</Body1>
                {isMobile && <Button varient="secondary" size='medium'>Send inquiry</Button>}
            </div>
            <Paper className='form'>
                <H4 margin="0 0 15px">Send quote to suppliers</H4>
                <Input placeholder='What item you need?' />
                <Textarea placeholder='Type more details' />
                <div className="quantity">
                    <Input placeholder='Quantity' width={50} />
                    <SelectInput className='select__quantity' value="Pcs" options={[
                        { text: "lorem", value: "0" },
                        { text: "lorem", value: "1" },
                        { text: "lorem", value: "2" },
                    ]} />
                </div>
                <Button size='medium'>Send inquiry</Button>
            </Paper>
        </Style>
    )
}

export default SendQuote
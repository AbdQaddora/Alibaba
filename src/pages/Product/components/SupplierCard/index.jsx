import React from 'react'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import Button from '../../../../components/Button'
import { Body1 } from '../../../../components/Typography'
import Style from './style'

const SupplierCard = ({ supplier }) => {
    return (
        <Style>
            <div className="name">
                <div className='letter'>
                    {supplier.name.charAt(0)}
                </div>
                <div>
                    <Body1>Supplier</Body1>
                    <Body1>{supplier.name}</Body1>
                </div>
            </div>
            <div className='supplier_info'>
                <img src={supplier.flag} alt={supplier.name} />
                <Body1 color="gray/500">{supplier.location}</Body1>
            </div>
            <div className='supplier_info'>
                <Body1 color="gray/500">
                    <MdOutlineVerifiedUser className="icon" />
                </Body1>
                <Body1 color="gray/500">
                    {supplier.verified ? "Verified Seller" : "Not Verified Seller"}
                </Body1>
            </div>
            <div className='supplier_info'>
                <Body1 color="gray/500">
                    <TbWorld className="icon" />
                </Body1>
                <Body1 color="gray/500">
                    {supplier.shipper}
                </Body1>
            </div>
            <div className="supplier_btns">
                <Button className="supplier_btn" fullWidth size='medium'>Send inquiry</Button>
                <Button varient="secondary" fullWidth size='medium'>Seller’s profile</Button>
            </div>
        </Style>
    )
}

export default SupplierCard
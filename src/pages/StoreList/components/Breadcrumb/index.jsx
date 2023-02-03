import React from 'react'
import { useLocation } from 'react-router-dom'
import CustomLink from '../../../../components/CustomeLink';
import Style from './style'

const Breadcrumb = () => {
    const location = useLocation();
    return (
        <Style>
            <CustomLink className="breadcrumb_link" color='gray/500' to="/">Home &#62; </CustomLink>
            {location.pathname.slice(1).split("/")
                .map((chunk, index) => <CustomLink key={chunk + "_" + index} className="breadcrumb_link" color='gray/500'
                    to={`/${location.pathname.slice(1).split("/").splice(index).join("/")}`}>{chunk} &#62; </CustomLink>
                )}

        </Style>
    )
}

export default Breadcrumb
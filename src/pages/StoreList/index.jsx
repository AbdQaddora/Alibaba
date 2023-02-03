import React, { useState } from 'react'
import StorePages from '../../layout/StorePages'
import Breadcrumb from './components/Breadcrumb'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Style from './style'

const StoreList = () => {
  const [keywords, setKeywords] = useState([]);
  const [priceRange , setPriceRange] = useState();
  return (
    <StorePages>
      <Style>
        <Breadcrumb />
        <div className="container">
          <Sidebar keywords={keywords} setKeywords={setKeywords} />
          <Main keywords={keywords} setKeywords={setKeywords} />
        </div>
      </Style>
    </StorePages>
  )
}

export default StoreList
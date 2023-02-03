import React from 'react'
import CheckBox from '../../../../components/CheckBox'
import Collablse from '../../../../components/Collablse'
import Rating from '../../../../components/Rating'
import PriceRange from './components/PriceRange'
import Style from './style'

const Sidebar = ({ keywords, setKeywords }) => {
  const handelChange = (value) => {
    setKeywords(prev => {
      if (prev.find(el => el === value)) {
        return prev.filter(el => el !== value);
      } else {
        return [...prev, value]
      }
    });
  }

  const getValue = (keyword) => {
    return keywords.find((el) => el === keyword) ? true : false;
  }

  return (
    <Style>
      <Collablse title="Brands">
        <CheckBox label="Samsung" value={getValue("Samsung")} onChange={() => handelChange("Samsung")} />
        <CheckBox label="Apple" value={getValue("Apple")} onChange={() => handelChange("Apple")} />
        <CheckBox label="Huawei" value={getValue("Huawei")} onChange={() => handelChange("Huawei")} />
        <CheckBox label="Pocco" value={getValue("Pocco")} onChange={() => handelChange("Pocco")} />
        <CheckBox label="Lenovo" value={getValue("Lenovo")} onChange={() => handelChange("Lenovo")} />
      </Collablse>
      <Collablse title="Features">
        <CheckBox label="Metallic" value={getValue("Metallic")} onChange={() => handelChange("Metallic")} />
        <CheckBox label="Plastic cover" value={getValue("Plastic cover")} onChange={() => handelChange("Plastic cover")} />
        <CheckBox label="8GB Ram" value={getValue("8GB Ram")} onChange={() => handelChange("8GB Ram")} />
        <CheckBox label="Super power" value={getValue("Super power")} onChange={() => handelChange("Super power")} />
        <CheckBox label="Large Memory" value={getValue("Large Memory")} onChange={() => handelChange("Large Memory")} />
      </Collablse>
      <Collablse title="Price range">
        <PriceRange />
      </Collablse>
      <Collablse title="Condition">
        <CheckBox label="Refurbished" value={getValue("Refurbished")} onChange={() => handelChange("Refurbished")} />
        <CheckBox label="Brand new" value={getValue("Brand new")} onChange={() => handelChange("Brand new")} />
        <CheckBox label="Old items" value={getValue("Old items")} onChange={() => handelChange("Old items")} />
      </Collablse>
      <Collablse title="Ratings">
        <CheckBox label={<Rating rate={5} />} value={getValue("rate_5")} onChange={() => handelChange("rate_5")} />
        <CheckBox label={<Rating rate={4} />} value={getValue("rate_4")} onChange={() => handelChange("rate_4")} />
        <CheckBox label={<Rating rate={3} />} value={getValue("rate_3")} onChange={() => handelChange("rate_3")} />
        <CheckBox label={<Rating rate={2} />} value={getValue("rate_2")} onChange={() => handelChange("rate_2")} />
      </Collablse>
    </Style>
  )
}

export default Sidebar
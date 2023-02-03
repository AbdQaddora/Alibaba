import React, { useEffect, useState } from 'react'
import Style from './style'
import MockProducts from '../../../../mock/products';
import Header from './components/Header';
import Filters from './components/Filters';
import RowDisplay from './components/RowDisplay';
import GridDisplay from './components/GridDisplay';
import SelectInput from '../../../../components/SelectInput';
const Main = ({ keywords, setKeywords }) => {
  const [products, setProducts] = useState(MockProducts);
  const [displayType, setDisplayType] = useState("row");
  const [pageSize, setPageSize] = useState(9);
  // const [pageNumber, setPageNumber] = useState("row");

  const toggleDisplayType = () => {
    setDisplayType(prev => prev === "row" ? "grid" : "row")
  }

  //! FILTERING NOT WORKING CORRECTLY
  // its add the same item multiple times if it contain more than one keyword
  useEffect(() => {
    const tempProducts = [];
    MockProducts.forEach((el, index) => {
      for (let i = 0; i < el.keywords.length; i++) {
        const keyword = el.keywords[i];
        for (let j = 0; j < keywords.length; j++) {
          const keywordFromFilter = keywords[j];
          if (keywordFromFilter === keyword) {
            tempProducts.push(el);
            break;
          }
        }
      }
    })
    setProducts(keywords.length > 0 ? tempProducts : MockProducts);
  }, [keywords]);

  return (
    <Style>
      <Header
        items={products.length}
        displayType={displayType}
        toggleDisplayType={toggleDisplayType}
      />
      <Filters keywords={keywords} setKeywords={setKeywords} />
      {displayType === 'row' ? <RowDisplay products={products} /> : <GridDisplay products={products} />}
      <div className="pagination">
        <SelectInput
          value={pageSize}
          onChange={(value) => {setPageSize(value)}}
          options={[
            { text: "Show 6", value: 6 },
            { text: "Show 9", value: 9 },
            { text: "Show 12", value: 12 },
            { text: "Show All", value: MockProducts.length },
          ]}
        />

      </div>
    </Style>
  )
}

export default Main
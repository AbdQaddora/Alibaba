import React, { useEffect, useState } from 'react'
import Style from './style'
import MockProducts from '../../../../mock/products';
import Header from './components/Header';
import Filters from './components/Filters';
import RowDisplay from './components/RowDisplay';
import GridDisplay from './components/GridDisplay';
import SelectInput from '../../../../components/SelectInput';
import Pagination from '../../../../components/Pagination';

const Main = ({ keywords, setKeywords }) => {
  const [products, setProducts] = useState(MockProducts);
  const [displayType, setDisplayType] = useState("row");
  const [pageSize, setPageSize] = useState(9);
  const [activePage, setActivePage] = useState(0);

  const [productsPage, setProductsPage] = useState([]);

  // change product in the page
  useEffect(() => {
    setProductsPage(products
      .slice(activePage * pageSize, (activePage * pageSize) + pageSize))
  }, [pageSize, activePage, products, keywords, setProductsPage])

  const toggleDisplayType = () => {
    setDisplayType(prev => prev === "row" ? "grid" : "row")
  }

  //! FILTERING NOT WORKING CORRECTLY
  // its add the same item multiple times if it contain more than one keyword
  useEffect(() => {
    const tempProducts = [];
    MockProducts.forEach((el, index) => {
      let found = false;
      for (let i = 0; i < el.keywords.length; i++) {
        const keyword = el.keywords[i];
        for (let j = 0; j < keywords.length; j++) {
          const keywordFromFilter = keywords[j];
          if (keywordFromFilter === keyword) {
            found = true;
            break;
          }
        }
      }

      if (found) {
        tempProducts.push(el);
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
      {displayType === 'row' ?
        <RowDisplay products={productsPage} />
        : <GridDisplay products={productsPage} />}

      {products.length > 0 && <div className="pagination__container">
        <SelectInput
          className='pagination__select'
          value={pageSize}
          onChange={(value) => { setPageSize(value) }}
          options={[
            { text: "Show 6", value: 6 },
            { text: "Show 9", value: 9 },
            { text: "Show 12", value: 12 },
            { text: "Show All", value: MockProducts.length },
          ]}
        />
        <Pagination
          activePage={activePage}
          setActivePage={setActivePage}
          numberOfPages={Math.ceil(products.length / pageSize)}
        />

      </div>}
    </Style>
  )
}

export default Main
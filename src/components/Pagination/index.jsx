import React from 'react'
import Style, { PaginationCell } from './style'

import { GrNext, GrPrevious } from 'react-icons/gr';

const Pagination = ({ activePage, numberOfPages, setActivePage }) => {

  return (
    <Style>
      <PaginationCell
        onClick={() => { setActivePage(prev => prev - 1 >= 0 ? prev - 1 : prev) }}
      >
        <GrPrevious />
      </PaginationCell>
      {[...Array(numberOfPages)].map((el, index) => {
        return <PaginationCell
          className={activePage === index ? "active" : ""}
          key={index}
          onClick={() => setActivePage(index)}>
          {index + 1}
        </PaginationCell>
      })}
      <PaginationCell
        onClick={() => { setActivePage(prev => prev + 1 < numberOfPages ? prev + 1 : prev) }}
      >
        <GrNext />
      </PaginationCell>
    </Style>
  )
}


export default Pagination
import React from 'react'

const Pagination = ({onChange , current, totalPage }) => {

    const prev = <button disabled={current === 1? true : false } onClick={()=> onChange(current - 1)} >PREV</button>;
    const currentPage = <button  onClick={() => onChange(current)}>{+current}</button>;
    const next = <button  onClick={() =>onChange(current + 1) } disabled={current === totalPage? true: false }>NEXT</button>;
    const totalPagesElem = (
      <div>
        Total Pages: <b data-testid="total-pages">{totalPage}</b>{" "}
      </div>
    );


  return (
    <div>
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  )
}

export default Pagination

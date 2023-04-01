import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './CSS/FilteringAndSorting.css'
import Button from 'react-bootstrap/esm/Button';


const FilteringAndSorting = ({setSearch,setSort}) => {
  return (
    <div id='FilteringAndSortingDiv'>
       <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Search By Name Here...</Accordion.Header>
        <Accordion.Body>
           <input className='searchInputFilter' type="text" placeholder='Serach By Name Here...' onChange={(e)=>setSearch(e.target.value)}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sort By Date</Accordion.Header>
        <Accordion.Body>
          <Button variant="primary" onClick={()=>setSort("asc")}>Ascending Order</Button>
          {' '}
          <Button variant="primary" onClick={()=>setSort("desc")}>Descending Order</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default FilteringAndSorting

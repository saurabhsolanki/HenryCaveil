import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import './CSS/LimitAndPagination.css'


const LimitAndPagination = ({page,setPage,setLimit,totalPages}) => {
  return (
    <div id="limitAndPaginationDiv">
        <div id="limitofPage">
        <Form.Select aria-label="Default select example" onChange={(e)=>setLimit(e.target.value)}>
        <option value="5">Set Limit of List</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </Form.Select>
        </div>

      <div id="pagination">
        <button disabled={page===1} onClick={(prev)=>setPage(page-1)} >Prev</button>
        <button>{page}</button>
        <button disabled={page===totalPages} onClick={(prev)=>setPage(page+1)} >Next</button>
      </div>
    </div>
  );
};

export default LimitAndPagination;

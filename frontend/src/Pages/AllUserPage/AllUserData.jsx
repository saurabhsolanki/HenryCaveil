import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import "./CSS/userList.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUser } from "../../Redux/Auth/action";
import LimitAndPagination from "./LimitAndPagination";
import Pagination from "../../Components/Pagination";
import axios from "axios";
import FilteringAndSorting from "./FilteringAndSorting";
import { toast } from 'react-toastify'

const AllUserList = () => {
  // const data = useSelector((store) => store.auth.allUser);
  const [data,setData]=useState([])
  const [page, setPage] = useState(1);
  const [limit , setLimit] = useState(5);
  const [totalPages , setTotalPages] = useState(8);
  const [search,setSearch]=useState("")
  const [sort, setSort] = useState("asc");
  const [cat,setCat]=useState("all")
  const dispatch = useDispatch();

  async function getData() {

    try {
      const res = await fetch(`http://localhost:8080/userData?search=${search}&category=${cat}&page=${page}&limit=${limit}&orderBy=date&order=${sort}`)
      const data = await res.json()
      setData(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  

  const handleDelete=async(id)=>{
    if(window.confirm("Are you sure that you want to Delete that contact ?")){
      await axios.delete(`http://localhost:8080/userData/${id}`).then((res)=>{
          console.log("res del data",res.data)
          toast.success("Contact Delete Successfully",{autoClose: 2000,})
          getData()
        }).catch((er)=>{
          toast.error("SomeThing Went Wrong Please Refresh the Page and Try Again",{autoClose: 2000,})
        })
    }

  }

  useEffect(() => {
    getData()
  }, [cat,search,page,limit,sort,data.length]);


  return (
    <div id="usersListContainer">

        <div id="FilteringAndSorting">
          <FilteringAndSorting setSearch={setSearch} setSort={setSort}/>
          <LimitAndPagination page={page} setPage={setPage} setLimit={setLimit} totalPages={totalPages}/>
        </div>


      <div id="allUserDataContentDiv">
      <div id="allUserListDiv">
        <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>No.</th>
                        <th style={{textAlign:"center"}}>User Name</th>
                        <th style={{textAlign:"center"}}>User City</th>
                        <th style={{textAlign:"center"}}>User Phone</th>
                        <th style={{textAlign:"center"}}>User Date</th>
                        <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>{
                            return(
                                <tr key={item.id}>
                                    <th scope='row'>{index+1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.city}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <button className="btn-delete" onClick={() => handleDelete(item._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
              </table>
      </div>

      <div id="limitAndPagination">
                    
                    {/* <p>{totalPages}</p> */}
      </div>
      </div>
    </div>
  );
};

export default AllUserList;

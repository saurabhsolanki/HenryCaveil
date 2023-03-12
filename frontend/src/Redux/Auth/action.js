import axios from "axios";
import { all_user_success } from "./authType";


export const getAllUser=(data)=>(dispatch)=>{
  axios.get("http://localhost:8080/userData").then((res)=>{
    dispatch({ type: all_user_success, payload: res.data });
    // console.log(res.data.data,"res al us data")
  })
}

export const deleteUser=(id)=>(dispatch)=>{
  axios.delete(`http://localhost:8080/userData/${id}`).then((res)=>{
    dispatch(getAllUser())
  })
}
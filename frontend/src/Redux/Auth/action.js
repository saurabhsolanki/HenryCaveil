import axios from "axios";
import { all_user_success, login_success, LOGOUT_USER, VALID_USER } from "./authType";

export const LoginApi = (creds,navigate) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:8080/user/login", creds);
    dispatch({ type: login_success, payload: res.data });
    console.log("userData",res.data)
    localStorage.setItem("token", JSON.stringify(res.data.token))
    alert(`${res.data.message}`)
    setTimeout(()=>{
      navigate("/adminPage")
  },1000)
  } catch (err) {
    return alert(`${err.response.data.message} !!!`)
  }
};


export const getLogoutUser = () =>{
  return {
      type: LOGOUT_USER
  }
}



export const getValidUser=(token)=>(dispatch)=>{
 axios.get('http://localhost:8080/user/validuser',{
  headers:{
    "Content-Type":"application-json",
    "Authorization":token
  }
 }).then((res)=>{

  dispatch({type:VALID_USER,payload:res.data})
  console.log("validuser token",res)
 }).catch((err)=>{
  console.log(err)
})
}
import { action, thunk } from "easy-peasy";

const authenticationModel = {
  response: [],
  reduxlogin:false,
 
  
  addUser: action((state, payload) => {
    state.response.push(payload)
    //localStorage.setItem("userDetail",JSON.stringify( state.response))
  }),

  setlogin: action((state, payload) => {
    console.log("paylaod",payload)
    state.reduxlogin=payload
  //  localStorage.setItem("isLogin",payload)
  }),

  clear: action((state, payload) => {
    console.log("paylaod",payload)
    state.reduxlogin=payload
    //localStorage.removeItem("isLogin");
  }),




};

export default authenticationModel;

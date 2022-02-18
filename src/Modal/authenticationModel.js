import { action, thunk } from "easy-peasy";

const authenticationModel = {
  response: [],
  login:false,
 
  
  addUser: action((state, payload) => {
    state.response.push(payload)
    localStorage.setItem("userDetail",JSON.stringify( state.response))
  }),

  setlogin: action((state, payload) => {
    state.login=payload
  }),

};

export default authenticationModel;

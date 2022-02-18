import { action, thunk } from "easy-peasy";

const authenticationModel = {
  response: [],
 
  
  addUser: action((state, payload) => {
    state.response.push(payload)
    localStorage.setItem("userDetail",JSON.stringify( state.response))
  }),

};

export default authenticationModel;

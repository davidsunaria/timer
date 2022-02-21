import { createStore } from "easy-peasy";
import storeModel from "./storeModal";

const store = createStore(storeModel,{
    storage: 'localstorage'
});
export { store };
export default store;

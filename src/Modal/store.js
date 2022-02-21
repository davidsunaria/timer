import { createStore } from "easy-peasy";
import storeModel from "./storeModal";

const store = createStore(storeModel);
export { store };
export default store;

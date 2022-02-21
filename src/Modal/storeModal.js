import authenticationModel from "./authenticationModel"
import { persist } from 'easy-peasy';

let storeModal = {

    authentication:persist(authenticationModel)
}

export default storeModal
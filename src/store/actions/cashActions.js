import { ADD_CASH, GET_CASH } from "./constants";

const addCash = (cash) => {
    return {
        type: ADD_CASH,
        payload: cash
    }
}

const getCash = (cash) => {
    return {
        type: GET_CASH,
        payload: cash
    }
}

export {addCash, getCash}
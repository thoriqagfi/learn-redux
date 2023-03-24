import { Action } from "redux"
import { ADD_CAKE, BUY_CAKE } from "./cakeTypes"

const initialState = {
  numOfCakes: 10,
}

export const cakeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes > 0 ? state.numOfCakes - 1 : 0,
      }
    case ADD_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      }
    default:
      return state
  }
}
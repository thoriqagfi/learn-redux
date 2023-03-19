import { Action } from "redux"
import { BUY_CAKE } from "./cakeTypes"

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
    default:
      return state
  }
}
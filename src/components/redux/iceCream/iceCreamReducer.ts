import { Action } from "redux"

export const iceCreamInitialState = {
  numOfIceCreams: 20,
}

export const iceCreamReducer = (state = iceCreamInitialState, action: Action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams > 0 ? state.numOfIceCreams - 1 : 0,
      }
    case "ADD_ICECREAM":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + 1,
      }
    default:
      return state
  }
}
import { Action } from "redux"
import { ADD_CAKE, BUY_CAKE, ADD_CAKE_HOOKS, BUY_CAKE_HOOKS } from "./cakeTypes"

export const cakeInitialState = {
  numOfCakes: 10,
  numOfCakesHooks: 20
}

export const cakeReducer = (state = cakeInitialState, action: Action) => {
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
    case ADD_CAKE_HOOKS:
      return {
        ...state,
        numOfCakesHooks: state.numOfCakesHooks + 1,
      }
    case BUY_CAKE_HOOKS:
      return {
        ...state,
        numOfCakesHooks: state.numOfCakesHooks > 0 ? state.numOfCakesHooks - 1 : 0,
      }
    default:
      return state
  }
}
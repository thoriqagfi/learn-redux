import { Action } from "redux"
import { ADD_CAKE, BUY_CAKE, ADD_CAKE_HOOKS, BUY_CAKE_HOOKS } from "./cakeTypes"
import { PayloadAction } from "@reduxjs/toolkit"
import { PayloadOptions } from "next/dist/server/send-payload"

export const cakeInitialState = {
  numOfCakes: 10,
  numOfCakesHooks: 20
}

export const cakeReducer = (state = cakeInitialState, action: PayloadAction<number>) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes > 0 ? state.numOfCakes - action.payload : 0,
      }
    case ADD_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
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
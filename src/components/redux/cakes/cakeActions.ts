import { Reducer } from "redux";
import { ADD_CAKE, BUY_CAKE, ADD_CAKE_HOOKS, BUY_CAKE_HOOKS } from "./cakeTypes";

export const buyCake = (number:number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}

export const addCake = (number: number = 1) => {
  return {
    type: ADD_CAKE,
    payload: number
  }
}

export const addCakeHooks = () => {
  return {
    type: ADD_CAKE_HOOKS
  }
}

export const buyCakeHooks = () => {
  return {
    type: BUY_CAKE_HOOKS
  }
}
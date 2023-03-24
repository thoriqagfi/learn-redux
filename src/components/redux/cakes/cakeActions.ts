import { Reducer } from "redux";
import { ADD_CAKE, BUY_CAKE, ADD_CAKE_HOOKS, BUY_CAKE_HOOKS } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE
  }
}

export const addCake = () => {
  return {
    type: ADD_CAKE
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
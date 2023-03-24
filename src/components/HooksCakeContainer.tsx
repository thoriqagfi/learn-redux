import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCake, addCakeHooks, buyCake, buyCakeHooks } from './redux/cakes/cakeActions'
import { rootState } from './redux/rootReducer'

interface Cakes {
  numOfCakesHooks: number
}

export default function HooksCakeContainer() {
  const numOfCakes = useSelector((state: rootState) => state.cake.numOfCakesHooks)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Hooks Cake Container</h1>
      <h1>Number of Cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCakeHooks())}>Buy Cake</button>
      <button onClick={() => dispatch(addCakeHooks())}>Add Cake</button>
    </div>
  )
}
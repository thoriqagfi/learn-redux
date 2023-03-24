import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from './redux/cakes/cakeActions'

interface Cakes {
  numOfCakes: number
}

export default function HooksCakeContainer() {
  const numOfCakes = useSelector((state: Cakes) => state.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Hooks Cake Container</h1>
      <h1>Number of Cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}
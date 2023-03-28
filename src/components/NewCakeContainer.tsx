import { Dispatch } from "redux"
import { addCake, buyCake } from "@/components/redux/cakes/cakeActions"
import { connect } from "react-redux"
import { rootState } from "./redux/rootReducer"
import { useState } from "react"

interface Cakes {
  numOfCakes: number
  buyCake: (number: number) => void
  addCake: (number: number) => void
}

const mapStateToProps = (state: rootState) => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    buyCake: (number: number) => dispatch(buyCake(number)),
    addCake: (number: number) => dispatch(addCake(number))
  }
}

function NewCakeContainer({numOfCakes, buyCake, addCake}: Cakes) {
  const [number, setNumber] = useState<number>(1);
  const [numberAdd, setNumberAdd] = useState<number>(1);
  return (
    <div className="h-screen w-screen">
      <h1>Number of Cakes - {numOfCakes}</h1>
      <input type="text" onChange={e => setNumber(Number(e.target.value))} value={number}/>
      <button onClick={() => buyCake(number)}>Buy {number} Cake</button>
      <input type="text" onChange={e => setNumberAdd(Number(e.target.value))}/>
      <button onClick={() => addCake(numberAdd)}>Add Cake</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
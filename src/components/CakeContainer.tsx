import { Dispatch } from "redux"
import { addCake, buyCake } from "@/components/redux/cakes/cakeActions"
import { connect } from "react-redux"

interface Cakes {
  numOfCakes: number
  buyCake: () => void
  addCake: () => void
}

const mapStateToProps = (state: Cakes) => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake())
  }
}

function CakeContainer({numOfCakes, buyCake, addCake}: Cakes) {
  return (
    <div className="h-screen w-screen">
      <h1>Number of Cakes - {numOfCakes}</h1>
      <button onClick={buyCake}>Buy Cake</button>
      <button onClick={addCake}>Add Cake</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
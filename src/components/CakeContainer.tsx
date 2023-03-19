import { Dispatch } from "redux"
import { buyCake } from "@/components/redux/cakes/cakeActions"
import { connect } from "react-redux"

interface Cakes {
  numOfCakes: number
  buyCake: () => void
}

const mapStateToProps = (state: Cakes) => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

function CakeContainer({numOfCakes, buyCake}: Cakes) {
  return (
    <div>
      <h1>Number of Cakes - {numOfCakes}</h1>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
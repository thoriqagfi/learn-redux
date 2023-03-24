import { Dispatch } from "redux";
import { connect } from "react-redux";
import { addIceCream, buyIceCream } from "./redux/iceCream/iceCreamActions";
import { rootState } from "./redux/rootReducer";

interface IceCream {
  numOfIceCreams: number
  buyIceCream: () => void;
  addIceCream: () => void;
}

const mapStateToProps = (state: rootState) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
    addIceCream: () => dispatch(addIceCream()),
  };
}

const IceCreamContainer = ({ numOfIceCreams, buyIceCream, addIceCream }: IceCream) => {
  return (
    <div>
      <h1>Ice Cream Container</h1>
      <h3>Num of Icecream - {numOfIceCreams}</h3>
      <button onClick={() => buyIceCream()}>BUy IceCream</button>
      <button onClick={() => addIceCream()}>Add IceCream</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
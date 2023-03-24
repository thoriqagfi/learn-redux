import { combineReducers } from 'redux';

import {cakeReducer, cakeInitialState} from './cakes/cakeReducer';
import {iceCreamReducer, iceCreamInitialState} from './iceCream/iceCreamReducer';

export interface rootState {
  cake: typeof cakeInitialState;
  iceCream: typeof iceCreamInitialState
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})

export default rootReducer;
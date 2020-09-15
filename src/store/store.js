import { createStore,  applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'


const initialState = { counter: 250}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store
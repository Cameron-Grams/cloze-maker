import { combineReducers, createStore, compose } from 'redux'; 
import Reducer from './reducers/reducer';
import { reducer as formReducer } from 'redux-form'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const MasterReducer = combineReducers( {
    reducer: Reducer,
    form: formReducer
})

const store = createStore(
    MasterReducer,
    composeEnhancers()
)

export default store;
import * as actionType from './actions/actionTypes'; 
import { combineReducers, createStore, compose } from 'redux'; 
import Reducer from './reducers/reducer';
import { reducer as formReducer } from 'redux-form'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const MasterReducer = combineReducers( {
    reducer: Reducer,
    form: formReducer.plugin( {
        moreVocab: ( state, action ) => {
            switch( action.type ){
                case actionType.addVocabularyWord:{
                    return undefined 
                }
                default:
                    return state
            }
        }
    })
})

const store = createStore(
    MasterReducer,
    composeEnhancers()
)

export default store;
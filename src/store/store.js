import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger";
import thunkMiddleware from 'redux-thunk'

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLUS':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'MINUS':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

// const simpleMiddleware = store => next => action => {
//     let res;
//
//     console.groupCollapsed('dispatch to state', action.type);
//     console.log('prev state', store.getState())
//     console.log('action', action)
//     res = next(action);
//     console.log('next state', store.getState())
//     console.groupEnd();
//
//     return res;
// }
//
// const simpleThunk = store => next => action => {
//     typeof action === "function" ?
//         action(store.dispatch, store.getState) :
//         next(action)
//
// }

const store = createStore(counterReducer, applyMiddleware(thunkMiddleware, logger));

export default store;

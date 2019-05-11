import { createStore, combineReducers, applyMiddleware } from 'redux';
import { products ,info} from './reducers/products';
import thunk from 'redux-thunk'


const logger = store=>next=>action=>{
    if(action.type){
        let res;
        console.groupCollapsed("dispatching", action.type);
        console.log('prev state', store.getState());
        console.log('action', action);
        res=next(action);
        console.log('next state', store.getState());
        console.groupEnd();
        return res
    }else{
        next(action);
    }
};

const middleware = () => [
    logger,
    thunk
];

const storeFactory=(initialState={})=>
    applyMiddleware(...middleware())(createStore)(combineReducers({products,info}),initialState);

export default storeFactory;
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import reducer from "../reducer";

/**
 * 创建全局store，并apply thunk中间件
 * @type {Store<GenericStoreEnhancer>}
 */
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store;

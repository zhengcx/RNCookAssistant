export function createReducer(initStates, handlers) {
    return function reducer(state = initStates, action) {
        //判断handlers中是否有action.type属性的，就是匹配相应的handler来处理这个action.type
        if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
            return handlers[action.type](state, action);
        }

        return state;
    }
}

export function updateObject(oldObject, newValue) {
    //合并原对象oldObject和新属性newValue，并把他们赋值到一个新对象上{}
    return Object.assign({}, oldObject, newValue);
}




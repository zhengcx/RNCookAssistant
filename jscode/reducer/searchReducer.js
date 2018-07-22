import {createReducer, updateObject} from "../base/ReducerHelper";
import {SEARCH_ACTION_NAME} from "../action/searchAction";


const requestListHandler = (state, action) => {
    if (action.pageNum === 0) {//首页
        return updateObject(state, {
            dataList: [],
            isLoaded: false,
            isRefreshing: false,
            keyword: action.keyword,
        });
    } else {//加载更多
        return updateObject(state, {});
    }
}

const requestListSuccessHandler = (state, action) => {
    if (!action.isLoadMore) {//加载第一页
        return updateObject(state, {
            dataList: action.list,
            isLoaded: true,
            isRefreshing: false,
        });

    } else {//加载更多
        return updateObject(state, {
            dataList: state.dataList.concat(action.list),
            isLoaded: true,
        });
    }
}


const requestListFailedHandler = state => updateObject(state, {
    isLoaded: true,
    isRefreshing: false,
});

const requestListEmptyHandler = state => {

}


export default createReducer({
    dataList: [],
    isLoaded: false,
    isRefreshing: false,
    keyword: '面包'
}, {
    [SEARCH_ACTION_NAME.REQUEST_SEARCH_LIST]: requestListHandler,
    [SEARCH_ACTION_NAME.REQUEST_LIST_SUCCESS]: requestListSuccessHandler,
    [SEARCH_ACTION_NAME.REQUEST_SEARCH_LIST_FAILED]: requestListFailedHandler,
    [SEARCH_ACTION_NAME.REQUEST_SEARCH_LIST_EMPTY]: requestListEmptyHandler
});



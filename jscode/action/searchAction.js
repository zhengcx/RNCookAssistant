import HTTPUtil from "../base/network/HTTPUtil";

/**
 * Action Name
 * @type {{}}
 */
export const SEARCH_ACTION_NAME = {
    REQUEST_SEARCH_LIST: 'request_search_list',
    REQUEST_LIST_SUCCESS: 'request_list_success',
    REQUEST_SEARCH_LIST_FAILED: 'request_search_list_failed',
    REQUEST_SEARCH_LIST_EMPTY: 'request_search_list_empty'
}

/**
 * 请求搜索列表的action
 */
const requestSearchListAction = (keyword, pageNum) => ({
    type: SEARCH_ACTION_NAME.REQUEST_SEARCH_LIST,
    keyword: keyword,
    pageNum: pageNum,
});

/**
 * 请求列表成功action
 * @param resp
 * @returns {{type: string, list: *|list|{path, screen}|{paddingTop: number, backgroundColor: string}|styles.list|{paddingTop, backgroundColor}}}
 */
const requestListSuccessAction = (listData, isLoadMore) => ({
    type: SEARCH_ACTION_NAME.REQUEST_LIST_SUCCESS,
    list: listData,
    isLoadMore: isLoadMore,
})

/**
 * 请求失败的action
 * @param error
 * @returns {{type: string, error: *}}
 */
const requestSearchFailedAction = error => ({type: SEARCH_ACTION_NAME.REQUEST_SEARCH_LIST_FAILED, error});

/**
 * 请求结果为空的action
 */
const requestSearchEmptyAction = isLoadMore => ({
    type: SEARCH_ACTION_NAME.REQUEST_SEARCH_LIST_EMPTY,
    isLoadMore: isLoadMore,
    tag: tag,
});


const REQUEST_FOOD_URL = "http://jisusrecipe.market.alicloudapi.com/recipe/search";

/**
 * 发起列表请求
 * @param keyword
 * @param pageNum
 */
export function requestSearchList(keyword = "", pageNum = 0) {
    return dispatch => {
        //请求开始的action
        dispatch(requestSearchListAction(keyword, pageNum));

        //发起请求
        let params = {
            'keyword': keyword,
            'num': 10,
            'start': pageNum,
        };
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'APPCODE cf5220ddf37245038bedeca1b729a0c0',
        }
        HTTPUtil.get(REQUEST_FOOD_URL, params, headers).then(
            (responseData) => {
                console.log(responseData);
                if (!responseData || !responseData.result || !responseData.result.list) {
                    dispatch(requestSearchEmptyAction(pageNum > 0));
                } else {
                    dispatch(requestListSuccessAction(responseData.result.list, pageNum > 0));
                }

            },
            (error) => {
                console.log(error);
                dispatch(requestSearchFailedAction(error));
            }
        )
    }
}
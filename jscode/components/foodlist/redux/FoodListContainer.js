import {requestSearchList} from "../../../action/searchAction";
import {FoodList} from "./FoodList";
import connect from "react-redux/es/connect/connect";


/**
 * 绑定相关state到props上
 * @param state
 */
const mapStateToProps = state => ({
    isLoaded: state.search.isLoaded,
    isRefreshing: state.search.isRefreshing,
    dataList: state.search.dataList,
    keyword: state.search.keyword,
})

/**
 * 绑定相关action到props上
 * @param dispatch
 */
const mapDispatherToProps = dispatch => ({
    requestList: (keyword, pageNum) => dispatch(requestSearchList(keyword, pageNum))
})

/**
 * connect state、action for view
 */
const FoodListLayout = connect(mapStateToProps, mapDispatherToProps)(FoodList)
export default FoodListLayout;
import {requestSearchList} from "../../../action/searchAction";
import connect from "react-redux/es/connect/connect";
import RecommendFoodList from "./RecommendFoodList";

/**
 * 绑定相关state到props上
 * @param state
 */
const mapStateToProps = state => ({
    isLoaded: state.recommendList.isLoaded,
    isRefreshing: state.recommendList.isRefreshing,
    dataList: state.recommendList.dataList,
    keyword: state.recommendList.keyword,
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
const RecommendFoodListContainer = connect(mapStateToProps, mapDispatherToProps)(RecommendFoodList)
export default RecommendFoodListContainer;
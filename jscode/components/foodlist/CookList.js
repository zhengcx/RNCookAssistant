import React, {Component} from 'react'
import {
    Image, Text, View, StyleSheet, FlatList, TouchableHighlight, TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native'
import ScoreView from "../widget/ScoreView";
import Icon from "react-native-vector-icons/Ionicons";
import {Actions} from "react-native-router-flux"
import HTTPUtil from "../../base/network/HTTPUtil";
import LoadMoreView from "../../base/widget/LoadMoreView";
import LottieLoadingView from "../../base/widget/LottieLoadingView";
import CollectionDao from "../../dao/CollectionDao";
import toast from "../../base/ToastUtil";

var REQUEST_FOOD_URL = 'http://jisusrecipe.market.alicloudapi.com/recipe/search';
var pageNum = 0;
var isNeedShowBreathLoading = true;

// var keyword = '面包';

export class CookList extends Component {

    static defaultProps = {
        isNeedLoadMore: true,
        isNeedRefresh: true,
        defaultKeyword: '面包',
        numPerPage: 10,
        isLocal: false,
        data: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            isLoaded: false,
            isRefreshing: false,
        };

    }

    componentDidMount() {
        if (!this.props.isLocal) {
            setTimeout(() => this._fetchDataFromNet(false), 2000);
        } else {
            this._fetchDataFromDb();
        }

    }


    render() {
        const {isNeedLoadMore, isNeedRefresh} = this.props;

        if (!this.state.isLoaded && isNeedShowBreathLoading) {
            return this.renderLoadingView();
        } else {

            return (
                <FlatList
                    data={this.state.dataList}
                    renderItem={this.renderFoodItem}
                    style={styles.list}
                    ListFooterComponent={isNeedLoadMore ? LoadMoreView : null}
                    onRefresh={isNeedRefresh ? () => this._fetchDataFromNet(false) : null}
                    refreshing={isNeedRefresh ? this.state.isRefreshing : false}
                    onEndReachedThreshold={0.1}
                    onEndReached={isNeedLoadMore ? this.loadMore : null}
                />
            );
        }

    }

    /**
     * 列表单项内容
     * @returns {*}
     */
    renderFoodItem = (food) => {
        if (this.props.isLocal) {
            food = food.item;
        }
        return (
            <TouchableNativeFeedback onPress={() => Actions.detailpage({'data': food})}>
                <View style={styles.container}>
                    <Image style={styles.foodImage}
                           source={{uri: food.item.pic}}/>
                    <View style={styles.rightContainer}>
                        <View style={styles.titlecontainer}>
                            <Text numberOfLines={1} style={{fontSize: 16, color: '#000000'}}>{food.item.name}</Text>

                        </View>
                        <ScoreView score={4.5}/>
                        <Text style={{fontSize: 13, color: '#87cefa', marginBottom: 3}}>
                            "{food.item.peoplenum}" "{food.item.preparetime}"
                        </Text>

                        <View style={{flexDirection: 'row'}}>
                            <Icon name='md-pricetag' size={16} color='#cccccc'></Icon>
                            <Text numberOfLines={1} style={styles.foodtag}>{food.item.tag}</Text>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }

    /**
     * 加载中呼吸动画页面
     * @returns {*}
     */
    renderLoadingView = () => {
        return (
            <LottieLoadingView/>
        );
    }

    /**
     * 从网络获取数据
     */
    _fetchDataFromNet = (isLoadMore) => {
        if (!isLoadMore) {
            pageNum = 0;
            if (!isNeedShowBreathLoading) {
                this.setState({
                    isRefreshing: true,
                });
            }
        }
        let params = {
            'keyword': this.props.defaultKeyword,
            'num': this.props.numPerPage,
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
                if (!isLoadMore) {//加载第一页
                    this.setState({
                        dataList: responseData.result.list,
                        isLoaded: true,
                        isRefreshing: false,
                    });
                } else {//加载更多
                    this.setState({
                        dataList: this.state.dataList.concat(responseData.result.list),
                        isLoaded: true,
                    });
                }

            },
            (error) => {
                console.log(error);
                this.setState({
                    isLoaded: true,
                    isRefreshing: false,
                })
                ;
            }
        )

        isNeedShowBreathLoading = false;

    }

    /**
     * 从本地数据库获取数据
     */
    _fetchDataFromDb = () => {
        //外面没传，则取数据库取，如果外面传过了，则不用
        if (!this.props.data) {
            CollectionDao.getCollectionListDao()
                .then((data) => {
                    if (data && data.length > 0) {

                        this.setState({
                            dataList: data,
                        })
                    } else {
                        toast('暂时还没有收藏内容')
                    }
                })
                .catch((err) => {
                    toast('报错' + err)
                })
        } else {
            this.setState({
                dataList: this.props.data,
            });
        }

    }

    /**
     * 加载更多
     */
    loadMore = () => {
        pageNum = pageNum + 1;
        this.fetchData(true);
    }

    /**
     * 根据关键字搜索
     */
    searchByKeyword = (word) => {
        // keyword = word;
        isNeedShowBreathLoading = true;
        this.setState({
            dataList: [],
            isLoaded: false,
            isRefreshing: false
        });
        setTimeout(() => this.fetchData(false), 2000);
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
        marginBottom: 2
    },

    foodImage: {
        width: 100,
        height: 100
    },

    rightContainer: {
        flex: 1,
        height: 100,
        paddingLeft: 10,
        justifyContent: 'flex-start',

    },
    titlecontainer: {
        flexDirection: 'row',
        marginBottom: 3,
        marginTop: 10,
        marginRight: 10,
    },

    foodtag: {
        textAlign: 'left',
        fontSize: 13,
        marginRight: 20,
        marginLeft: 5,
        color: '#cccccc'
    },

    list: {
        paddingTop: 10,
        backgroundColor: '#fafafa',
    },
});
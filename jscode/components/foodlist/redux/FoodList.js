import React, {Component} from 'react'
import {
    Image, Text, View, StyleSheet, FlatList, TouchableNativeFeedback,
} from 'react-native'
import ScoreView from "../../widget/ScoreView";
import Icon from "react-native-vector-icons/Ionicons";
import {Actions} from "react-native-router-flux"
import LoadMoreView from "../../../base/widget/LoadMoreView";
import LottieLoadingView from "../../../base/widget/LottieLoadingView";

var pageNum = 0;
var keywordVar = '蛋糕';
var requestFoodList;

export class FoodList extends Component {

    static defaultProps = {
        isNeedLoadMore: true,
        isNeedRefresh: true,
        defaultKeyword: '蛋糕',
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {requestList} = this.props;
        requestFoodList = requestList;
        keywordVar = this.props.defaultKeyword;
        setTimeout(() => requestList(keywordVar, pageNum), 3000);
    }


    render() {
        const {dataList, isLoaded, isRefreshing, keyword} = this.props;
        keywordVar = keyword;
        if (!isLoaded && pageNum === 0) {
            return this.renderLoadingView();
        } else {
            return (
                <FlatList
                    data={dataList}
                    renderItem={this.renderFoodItem}
                    style={styles.list}
                    ListFooterComponent={this.props.isNeedLoadMore ? LoadMoreView : null}
                    onRefresh={this.props.isNeedRefresh ? () => requestFoodList(keyword, pageNum) : null}
                    refreshing={this.props.isNeedRefresh ? isRefreshing : false}
                    onEndReachedThreshold={0.1}
                    onEndReached={this.props.isNeedLoadMore ? this.loadMore : null}
                />
            );
        }

    }

    /**
     * 列表单项内容
     * @returns {*}
     */
    renderFoodItem = (food) => {
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
     * 加载更多
     */
    loadMore = () => {
        pageNum = pageNum + 1;
        requestFoodList(keywordVar, pageNum);
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
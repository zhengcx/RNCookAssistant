import React, {Component} from 'react';
import {
    Image, RefreshControl, ScrollView, StatusBar,
    StyleSheet, Text,
    View,
} from 'react-native';
import {color_333333, color_gold, lineColor, primarycolor, white} from "../constant/color";
import {screenWidth} from "../style";
import NameValueItem from "./widget/NameValueItem";
import gStyles from "../style";
import CommonListItem from "./widget/CommonListItem";
import toast from "../base/ToastUtil";
import CollectionDao from "../dao/CollectionDao";
import {Actions} from "react-native-router-flux"


/**
 * Created by davidSu on 2018/6/25.
 */
var collectData;
export default class MyAccountPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            collectNum: 0,
        }
    }

    static propTypes = {}

    componentDidMount() {
        this._onRefresh
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={[color_333333, primarycolor]}
                        progressBackgroundColor={white}
                    />
                }>
                {/*<StatusBar hidden={false} backgroundColor={'transparent'} translucent barStyle={'light-content'}/>*/}
                <StatusBar hidden={false} backgroundColor={color_333333}/>
                {this._getUserHeader()}
                {this._getFooterList()}
            </ScrollView>
        );
    }

    _onRefresh = () => {
        collectData = null
        this._setRefreshState(true)
        CollectionDao.getCollectionListDao()
            .then((data) => {
                collectData = data
                let num = data.length;

                this._setRefreshState(false, num)
            })
            .catch((err) => {
                this._setRefreshState(false)
                toast('请求失败')
            })

    }

    _setRefreshState = (isRefreshing, collectNum = this.state.collectNum) => {
        this.setState({
            isRefreshing: isRefreshing,
            collectNum: collectNum
        })
    }

    _getUserHeader() {
        return (
            <View style={styles.imageContainer}>
                <Image source={require('../img/icon_zhanghu.png')}
                       style={styles.image}/>
                <Text style={[styles.text1, {fontSize: 14}]}>登录/注册</Text>
                <Text style={styles.text1}>Ta什么也没有留下~</Text>

                <View style={[gStyles.flexDirectionRowNotFlex, styles.headerMenu]}>
                    <NameValueItem
                        itemStyle={[gStyles.flex, gStyles.centered,]}
                        itemName={'作品'}
                        itemValue={0}
                    />
                    <NameValueItem
                        itemStyle={[gStyles.flex, gStyles.centered, {
                            borderLeftWidth: StyleSheet.hairlineWidth,
                            borderLeftColor: lineColor,
                            borderRightWidth: StyleSheet.hairlineWidth,
                            borderRightColor: lineColor,
                        }]}
                        itemName={'收藏'}
                        itemValue={this.state.collectNum}
                        onItemPress={() => this._gotoCollectionPage()}
                    />
                    <NameValueItem
                        itemStyle={[gStyles.flex, gStyles.centered]}
                        itemName={'食谱'}
                        itemValue={0}
                    />
                </View>

            </View>);
    }

    _getFooterList() {
        return (
            <View style={{marginTop: 15}}>
                <CommonListItem content={'我的收藏'} imageName={'shoucang1'} onClick={() => {
                    this._gotoCollectionPage()
                }}/>
                <CommonListItem content={'查看消息'} imageName={'xiaoxi'}/>
                <CommonListItem content={'草稿箱'} imageName={'iconfontedit'}/>
                <CommonListItem content={'系统设置'} imageName={'shezhi'}/>
                <CommonListItem content={'意见反馈'} imageName={'yijianfankui'} isNeedLine={false}/>
            </View>
        );
    }

    /**
     * 跳到收藏页
     * @private
     */
    _gotoCollectionPage = () => {
        Actions.collectionpage({'data': collectData})
    }
}


const styles = StyleSheet.create({
    imageContainer: {
        height: 210,
        backgroundColor: color_333333,
    },
    image: {
        width: 50,
        height: 50,
        borderColor: white,
        borderWidth: 1,
        borderRadius: 50,
        marginTop: 40,
        alignSelf: 'center'
    },

    text1: {
        fontSize: 12,
        color: white,
        marginTop: 5,
        alignSelf: 'center'
    },

    headerMenu: {
        height: 50,
        width: screenWidth,
        position: 'absolute',
        bottom: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: lineColor,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: lineColor,
    },
});
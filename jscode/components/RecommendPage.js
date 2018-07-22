import React, {Component} from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import TopFoodTypeBar from "./widget/TopFoodTypeBar";
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {color_333333, primarycolor, white} from "../constant/color";
import SelectedListContainer from "./recommendlist/SelectedListContainer";
import {screenWidth} from "../style";

/**
 * Created by davidSu on 2018/4/2.
 * 推荐页面
 */
const initialLayout = {
    height: 500,
    width: screenWidth,
};
export default class RecommendPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                {key: 'first', title: '精选'},
                {key: 'second', title: '热门'},
                {key: 'three', title: '菜单'},
            ],
        }
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor={color_333333}/>
                <TopFoodTypeBar/>
                <TabView
                    style={[styles.tabContainer, this.props.style]}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderTabBar={this._renderTabBar}
                    onIndexChange={this._handleIndexChange}
                    initialLayout={initialLayout}/>
            </View>
        );
    }


    _renderTabBar = props => (
        <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            tabStyle={styles.tab}
            labelStyle={styles.label}
        />
    );

    _renderScene = SceneMap({
        first: () => {
            return (<SelectedListContainer keyword={'披萨'} num={10}/>);
        },
        second: () => {
            return (<SelectedListContainer keyword={'水果'} num={15}/>);
        },
        three: () => {
            return (<SelectedListContainer keyword={'螃蟹'} num={1}/>);
        },
    });

    _handleIndexChange = index =>
        this.setState({
            index,
        });
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer: {
        marginTop: 10,
    },
    tabbar: {
        backgroundColor: white,
    },
    tab: {
        width: 120,
    },
    indicator: {
        backgroundColor: color_333333,
    },
    label: {
        color: color_333333,
        fontWeight: '400',
    },
});
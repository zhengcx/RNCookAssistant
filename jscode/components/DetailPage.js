import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Image,
    ScrollView,
    StyleSheet, Text,
    View,
} from 'react-native';
import gStyles, {screenWidth} from "../style/index";
import TabView from "react-native-tab-view/src/TabView";
import {SceneMap} from "react-native-tab-view";
import TabBar from "react-native-tab-view/src/TabBar";
import PrepareTab from "./detailpage/PrepareTab";
import {color_333333, primarycolor, white} from "../constant/color";
import CookStepTab from "./detailpage/CookStepTab";

/**
 * Created by davidSu on 2018/3/17.
 */
const initialLayout = {
    height: 500,
    width: screenWidth,
};

export default class DetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                {key: 'first', title: '准备'},
                {key: 'second', title: '步骤'},
            ],
        }
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        let food = this.props.data;
        console.log("zcx", food);
        return (
            <TabView
                style={[styles.tabContainer, this.props.style]}
                navigationState={this.state}
                renderScene={this._renderScene(food)}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}/>
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

    _renderScene = (food) => SceneMap({
        first: () => {
            return (<PrepareTab data={food}/>);
        },
        second: () => {
            return (<CookStepTab data={food}/>);
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
    tabContainer: {},
    tabbar: {
        backgroundColor: white,
    },
    tab: {
        width: screenWidth / 2,
    },
    indicator: {
        backgroundColor: primarycolor,
    },
    label: {
        color: primarycolor,
        fontWeight: '400',
    },
});
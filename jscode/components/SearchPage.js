import React, {Component} from 'react';
import {
    StatusBar,
    StyleSheet, Text,
    View,
} from 'react-native';
import SearchBar from "./widget/SearchBar";
import FoodListLayout from "./foodlist/redux/FoodListContainer";
import {color_333333} from "../constant/color";

/**
 * Created by davidSu on 2018/4/2.
 * 搜索页面
 */
export default class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        console.log('ReceiveProps:', nextProps.keyword)
        if (nextProps.keyword) {
            this.refs.searchBar.updateSearchContent(nextProps.keyword)
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar hidden={false} backgroundColor={color_333333}/>
                <SearchBar ref='searchBar'/>
                <FoodListLayout/>

            </View>
        );
    }


}

const styles = StyleSheet.create({});  
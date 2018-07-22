import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    ProgressBarAndroid,
    StyleSheet, Text,
    View,
} from 'react-native';
import {color_333333, primarycolor, white} from "../../constant/color";

/**
 * Created by davidSu on 2018/4/1.
 * 列表底部加载更多View
 */
export default class LoadMoreView extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: 40,
                backgroundColor: white
            }}>
                <ProgressBarAndroid styleAttr={'Small'} color={primarycolor} style={{paddingRight: 8}}/>
                <Text style={{fontSize: 16, color: color_333333}}>正在加载更多...</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({});  
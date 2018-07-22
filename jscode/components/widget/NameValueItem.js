import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet, Text, TouchableOpacity,
    View,
} from 'react-native';
import {white} from "../../constant/color";

/**
 * Created by davidSu on 2018/6/26.
 * 键值item
 */
export default class NameValueItem extends Component {

    static defaultProps = {
        itemName: 'Key',
        itemValue: 'Value'
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        let keyStyle = this.props.keyStyle ? this.props.keyStyle : styles.keyStyle;
        let valueStyle = this.props.valueStyle ? this.props.valueStyle : styles.valueStyle;
        return (
            <TouchableOpacity style={[...this.props.itemStyle]} onPress={() => {
                this.props.onItemPress && this.props.onItemPress();
            }}>
                <Text style={keyStyle}>{this.props.itemName}</Text>
                <Text style={valueStyle}>{this.props.itemValue}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    keyStyle: {
        fontSize: 14,
        color: white
    },
    valueStyle: {
        fontSize: 14,
        color: white
    }
});
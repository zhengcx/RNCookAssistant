import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as color from '../../constant/color';
import {
    StyleSheet, Text,
    View,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {primarycolor} from "../../constant/color";

/**
 * Created by davidSu on 2018/4/1.
 */
export default class TabItem extends Component {

    static defaultProps = {
        normalColor: '#333333',
        focusedColor: primarycolor,
        iconSize: 40,
        labelSize: 10,
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {
        focused: PropTypes.bool,
        iconName: PropTypes.string,
        normalColor: PropTypes.string,
        focusedColor: PropTypes.string,
        iconSize: PropTypes.number,
        labelSize: PropTypes.number,
        title: PropTypes.string,
    }

    componentDidMount() {

    }

    render() {
        let iconPath = this.props.iconName;
        let color = this.props.focused ? this.props.focusedColor : this.props.normalColor;
        let iconSize = this.props.iconSize;
        let labelSize = this.props.labelSize;
        return (
            <View>
                <Icon name={iconPath} size={iconSize} color={color}></Icon>
                <Text style={{color: color, fontSize: labelSize}}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});  
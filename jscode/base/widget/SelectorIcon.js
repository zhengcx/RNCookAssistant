import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/Ionicons";
import {
    StyleSheet,
    View,
} from 'react-native';
import {primarycolor, white} from "../../constant/color";

/**
 * Created by davidSu on 2018/4/1.
 */
export default class SelectorIcon extends Component {

    static defaultProps = {
        iconNormalColor: white,
        iconFocusedColor: primarycolor,
        iconSize: 40,
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {
        focused: PropTypes.bool,
        iconName: PropTypes.string,
        iconNormalColor: PropTypes.string,
        iconFocusedColor: PropTypes.string,
        iconSize: PropTypes.number,
    }

    componentDidMount() {

    }


    render() {
        let iconPath = this.props.iconName;
        let iconColor = this.props.focused ? this.props.iconFocusedColor : this.props.iconNormalColor;
        let iconSize = this.props.iconSize;
        return (
            <Icon name={iconPath} size={iconSize} color={iconColor}></Icon>
        );
    }
}

const styles = StyleSheet.create({});  
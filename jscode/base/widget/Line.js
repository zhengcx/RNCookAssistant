import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {screenWidth} from "../../style";
import {color_gold, lineColor} from "../../constant/color";

/**
 * Created by davidSu on 2018/6/27.
 */
export default class Line extends Component {

    static defaultProps = {
        color: lineColor,
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        return (
            <View style={[styles.line, {backgroundColor: this.props.color}]}/>

        );
    }
}

const styles = StyleSheet.create({
    line: {
        width: screenWidth,
        height: 1,
    }
});
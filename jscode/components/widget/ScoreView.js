import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as color from '../../constant/color';
import {
    StyleSheet, Text,
    View,
} from 'react-native';

/**
 * Created by davidSu on 2018/3/20.
 */
export default class ScoreView extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        return (
            <Text style={styles.scoreText}>推荐指数: {this.props.score}</Text>
        );
    }
}

const styles = StyleSheet.create({
    scoreText: {
        flex: 0,
        fontSize: 10,
        color: '#ffffff',
        backgroundColor: color.color_gold,
        paddingLeft: 7,
        paddingRight: 7,
        textAlignVertical: 'center',
        borderRadius: 15,
        alignSelf: 'flex-start'
    }
});
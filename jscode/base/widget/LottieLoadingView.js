import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';
import {white} from "../../constant/color";

/**
 * Created by davidSu on 2018/3/21.
 */
export default class LottieLoadingView extends Component {

    static defaultProps = {

        lottieSource: require('../../anim/breath_loading.json'),
        duration: 3000,
        viewStyle: {flex: 1, marginTop: 20, marginLeft: -50},
        backgroundColor: white,
    }

    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            isStopAnim: false,
        }
        this.isUnmounted = false;
        this.startLoopAnimation = this.startLoopAnimation.bind(this);

        this.props.text;
    }

    static propTypes = {}

    componentDidMount() {
        this.startLoopAnimation();
    }

    componentWillUnmount() {
        this.isUnmounted = true;
        this.refs.MyAnimation.reset();
    }

    /**
     * 循环播放动画
     */
    startLoopAnimation() {
        if (this.isUnmounted) {
            return;
        }
        Animated.timing(this.state.progress, {
            duration: this.props.duration,
            toValue: 1,
            easing: Easing.linear,
        }).start(({finished}) => {
            if (this.state.isStopAnim || !finished) {
                return;
            }
            this.setState({
                progress: new Animated.Value(0),
            });
            this.startLoopAnimation();
        });
    }

    render() {
        return (

            <View style={{
                flex: 1,
                backgroundColor: this.props.backgroundColor,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <LottieView
                    ref='MyAnimation'
                    style={this.props.viewStyle}
                    source={this.props.lottieSource}
                    progress={this.state.progress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});  
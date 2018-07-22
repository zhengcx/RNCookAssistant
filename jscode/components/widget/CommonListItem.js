import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet, Text, TouchableOpacity,
    View,
} from 'react-native';
import {color_333333, lineColor, primarycolor, white} from "../../constant/color";
import gStyles from "../../style";
import CXIcon from "../../base/widget/cxicon/CXIcon";
import Line from "../../base/widget/Line";

/**
 * Created by davidSu on 2018/6/26.
 */
export default class CommonListItem extends Component {

    static defaultProps = {
        content: '文字',
        imageName: 'mianbao',
        isNeedLine: true,
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        const {imageName, content, isNeedLine} = this.props;
        return (
            <TouchableOpacity onPress={() => {
                this.props.onClick && this.props.onClick()
            }}>
                <View style={[gStyles.flexDirectionRowNotFlex, {backgroundColor: white}]}>

                    <CXIcon name={imageName} size={15} color={primarycolor} style={styles.icon}/>
                    <Text style={[styles.text, gStyles.alignSelfCenter]}>{content}</Text>
                    <CXIcon name={'qianwang'} size={12} color={color_333333}
                            style={[gStyles.absoluteRight, gStyles.alignSelfCenter, styles.rightArrow]}/>
                </View>
                {
                    isNeedLine ? <Line color={'#E6E6E6'}/> : null
                }
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        marginTop: 18,
        marginLeft: 20,
        marginBottom: 18,
        marginRight: 20,
    },

    text: {
        color: color_333333,
        fontSize: 15,
    },

    rightArrow: {
        marginRight: 15,
    }

});
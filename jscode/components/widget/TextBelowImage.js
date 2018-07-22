import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Image,
    StyleSheet, Text, TouchableOpacity,
    View,
} from 'react-native';
import {color_333333, white} from "../../constant/color";
import CXIcon from "../../base/widget/cxicon/CXIcon";

/**
 * Created by davidSu on 2018/4/2.
 * 上图下字控件
 */
export default class TextBelowImage extends Component {

    static defaultProps = {
        text: '文本',
        textSize: 12,
        textColor: color_333333,
        imagePath: null,
        imageSize: 25,
        space: 5,//文字与图片间的距离
        containerSize: 65,//整个控件的大小
        isIconfont: true,
        onClick: null
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        const {imageSize, imagePath, isIconFont} = this.props;
        return (
            <TouchableOpacity onPress={() => {
                this.props.onClick && this.props.onClick()
            }}>
                <View style={{
                    height: this.props.containerSize,
                    width: this.props.containerSize,
                    backgroundColor: white,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {
                        isIconFont ? <CXIcon name={imagePath} size={imageSize}></CXIcon>
                            : <Image style={{width: imageSize, height: imageSize}} source={imagePath}/>

                    }


                    <Text style={{
                        fontSize: this.props.textSize,
                        color: this.props.textColor,
                        marginTop: this.props.space,
                        alignSelf: 'center',
                    }}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({});
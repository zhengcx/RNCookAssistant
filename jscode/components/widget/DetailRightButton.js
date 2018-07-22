import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet, TouchableOpacity,
    View,
} from 'react-native';
import CXIcon from "../../base/widget/cxicon/CXIcon";
import toast from "../../base/ToastUtil";
import {storage} from "../../dao/storage";
import CollectionDao from "../../dao/CollectionDao";
import * as md5 from "react-native-md5";
import {color_333333, primarycolor} from "../../constant/color";

/**
 * Created by davidSu on 2018/7/11.
 */
var data;
export default class DetailRightButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCollected: false,
        }
    }

    static propTypes = {}

    componentDidMount() {
        data = this.props.data;
        if (data) {
            let key = md5.b64_md5(data.item.pic + data.item.name)
            console.log("get id", key)
            CollectionDao.getCollectionById(key)
                .then((items) => {
                    if (items && items.length > 0) {
                        this.setState({
                            isCollected: true,
                        })
                    } else {
                        this.setState({
                            isCollected: false,
                        })
                    }
                })
                .catch((err) => {
                    toast('报错' + err)
                })
        }
    }

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => this._clickCollect()}>
                    <CXIcon name={'shoucang'} size={20} style={{marginRight: 15}}
                            color={this.state.isCollected ? primarycolor : color_333333}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    toast('分享')
                }}>
                    <CXIcon name={'fenxiang'} size={20} style={{marginRight: 15}} color={color_333333}/>
                </TouchableOpacity>
            </View>
        );
    }

    _clickCollect = () => {
        if (this.state.isCollected == true) {
            CollectionDao.deleteCollection(data).then((isSuccess) => {
                if (isSuccess) {
                    this.setState({
                        isCollected: false,
                    })
                    toast(`已取消收藏`)
                } else {
                    toast('取消收藏失败')
                }
            })

        } else {
            CollectionDao.addCollection(data).then((isSuccess) => {
                if (isSuccess) {
                    this.setState({
                        isCollected: true,
                    })
                    toast(`已添加到收藏`)
                } else {
                    toast(`添加收藏失败`)
                }
            });
        }
    }
}

const styles = StyleSheet.create({});
import React, {Component} from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet, Text,
    View,
} from 'react-native';
import {color_333333, color_cccccc, primarycolor, white} from "../../constant/color";
import gStyles, {screenWidth} from "../../style";
import DashLine from "../../base/widget/DashLine";
import CXIcon from "../../base/widget/cxicon/CXIcon";

/**
 * Created by davidSu on 2018/7/15.
 */
export default class PrepareTab extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        let food = this.props.data;
        return (
            <ScrollView style={{backgroundColor: white}}>
                {this.renderHeaderPart(food)}
                {this.renderDashLine()}
                {this.renderTimeAndPerson(food)}
                {this.renderDashLine()}
                {this.renderIntro(food)}
                {this.renderDashLine()}
                <FlatList
                    data={food.item.material}
                    renderItem={this.renderMaterialItem}
                    style={styles.list}
                />
            </ScrollView>
        );
    }

    /**
     * 头部部分
     * @param food
     * @returns {*}
     */
    renderHeaderPart(food) {
        return (
            <View>
                <Image style={styles.topImage} source={{uri: food.item.pic}}/>
                <Text style={styles.name}>{food.item.name}</Text>
                <Text style={[styles.subName]}>推荐 · 10分 · 50 浏览</Text>

                <View style={styles.logoView}>
                    <Image source={require('../../img/icon_pisa.png')} style={styles.logoImage}/>
                    <Text style={styles.logoText}>爱心厨房</Text>
                </View>

                <Text numberOfLines={1}
                      style={styles.tagText}>{food.item.tag}</Text>

            </View>
        );

    }

    /**
     * 时间、人数
     * @param food
     * @returns {*}
     */
    renderTimeAndPerson(food) {
        return (
            <View style={{height: 140, flexDirection: 'row'}}>
                {this.getCycleView(food.item.preparetime, "所需时间")}
                {this.getCycleView(food.item.peoplenum, "食用人份")}
            </View>
        );

    }

    getCycleView(mainText, subText) {
        return (
            <View style={[gStyles.centered, {flex: 1}]}>
                <View style={[gStyles.centered, {
                    borderColor: primarycolor,
                    borderWidth: 2,
                    borderRadius: 50,
                    width: 70,
                    height: 70,
                }]
                }>
                    <Text style={gStyles.alignSelfCenter}>{mainText}</Text>
                </View>

                <Text style={{position: "absolute", bottom: 0, marginBottom: 10}}>{subText}</Text>
            </View>
        );
    }

    /**
     * 虚线
     * @returns {*}
     */
    renderDashLine() {
        return (
            <DashLine len={screenWidth / 6} width={screenWidth} backgroundColor={'#cccccc'}/>
        );
    }

    /**
     * 简介
     * @param food
     */
    renderIntro(food) {
        return (
            <View style={{paddingLeft: 15, paddingTop: 15, paddingRight: 15}}>
                <View style={gStyles.flexDirectionRow}>
                    <CXIcon name={'jieshao'} size={15} color={primarycolor} style={{alignSelf: 'center'}}/>
                    <Text style={[{marginLeft: 15, fontSize: 17, fontWeight: 'sold'}]}>简介:</Text>
                </View>

                <Text numberOfLines={5}
                      style={[styles.introContent]}>{food.item.content}</Text>

            </View>
        );
    }


    renderMaterialItem = (material) => {
        return (
            <View style={[gStyles.flexDirectionRow, {height: 40, justifyContent: 'space-between',}]}>
                <Text style={{marginLeft: 50}}>{material.item.mname}</Text>
                <Text style={{marginRight: 50}}>{material.item.amount}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        topImage: {
            height: 170,
        },

        name: {
            alignSelf: 'center',
            fontSize: 19,
            color: color_333333,
            marginTop: 10,
        },

        subName: {
            alignSelf: 'center',
            fontSize: 10,
            color: '#cccccc'
        },

        logoView: {
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 10
        },
        logoImage: {
            width: 35,
            height: 35
        },
        logoText: {
            fontSize: 18,
            marginLeft: 10,
            alignSelf: 'center'
        },
        tagText: {
            fontSize: 12,
            color: color_333333,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 25,
            alignSelf: 'center'
        },
        leftTop15: {
            marginLeft: 15,
            marginTop: 15,
        },
        introContent: {
            marginTop: 10,
            fontSize: 14,
            color: color_cccccc,
            marginBottom: 15,
        },
        list: {
            padding: 15,
        }

    })
;
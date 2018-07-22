import React from 'react'
import {color_333333, color_gold, white} from "../../constant/color";
import {CookList} from "../foodlist/CookList";
import {
    Image, Text, View, StyleSheet, TouchableOpacity,
} from 'react-native'
import LottieLoadingView from "../../base/widget/LottieLoadingView";
import {Actions} from "react-native-router-flux"

/**
 * Created by davidSu on 2018/6/24.
 */
export default class RecommendList extends CookList {


    constructor(props) {
        super(props);
    }

    /**
     * 覆写renderFoodItem方法
     * @param food
     * @returns {*}
     */
    renderFoodItem = (food) => {
        return (
            <TouchableOpacity onPress={() => Actions.detailpage({'data': food})}>
                <View style={styles.item}>
                    <Image style={styles.image} roundAsCircle={true} source={{uri: food.item.pic}}/>

                    <View style={styles.titleLayout}>
                        < Text style={styles.titleText}>{food.item.name}</Text>

                        <View style={styles.timeContainer}>
                            <Image style={{width: 18, height: 18}} source={require('../../img/icon_time.png')}/>
                            <Text>{food.item.preparetime}</Text>
                        </View>
                    </View>

                    <Text numberOfLines={1} style={{fontSize: 10, color: '#cccccc'}}>{food.item.tag}</Text>
                </View>
            </TouchableOpacity>

        );
    }


    /**
     * 覆写加载中动画
     * @returns {*}
     */
    renderLoadingView = () => {
        return (
            <LottieLoadingView lottieSource={require('../../anim/funky_chicken.json')}
                               duration={1000}
                               viewStyle={{width: 60, height: 60, alignSelf: 'center'}}
                               backgroundColor={'#fafafa'}/>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        padding: 10,
        backgroundColor: white
    },
    image: {
        marginBottom: 10,
        height: 160,
        borderRadius: 2,
    },

    titleText: {
        color: color_333333,
        fontSize: 17,
        alignSelf: 'flex-start'
    },

    titleLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    timeContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    }
});
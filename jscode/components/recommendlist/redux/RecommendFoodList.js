import React, {Component} from 'react';
import {FoodList} from "../../foodlist/redux/FoodList";
import {Image, View, StyleSheet, Text} from "react-native";
import {black, color_333333, color_gold, primarycolor, white} from "../../../constant/color";


/**
 * Created by davidSu on 2018/6/24.
 */
export default class RecommendFoodList extends FoodList {

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
            <View style={styles.item}>
                <Image style={styles.image} roundAsCircle={true} source={{uri: food.item.pic}}/>
                <View style={styles.titleLayout}>
                    < Text style={styles.titleText}>{food.item.name}</Text>

                    <Text style={{alignSelf: 'flex-end', backgroundColor: color_gold}}>hahahaha</Text>
                </View>
            </View>
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
        backgroundColor: color_gold,
        alignSelf: 'flex-start'
    },

    titleLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

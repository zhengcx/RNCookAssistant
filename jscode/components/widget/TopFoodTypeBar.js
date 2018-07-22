import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native';
import {color_gold, white} from "../../constant/color";
import TextBelowImage from "./TextBelowImage";
import toast from "../../base/ToastUtil";
import {Actions} from "react-native-router-flux"

/**
 * Created by davidSu on 2018/4/2.
 * 推荐页顶部食物类型Bar
 */
function FoodType(text, image) {
    this.text = text;
    this.image = image;
}

var typeData = [
    [new FoodType('面包', require('../../img/icon_mianbao.png'))],
    [new FoodType('蛋糕', require('../../img/icon_dangao.png'))],
    [new FoodType('披萨', require('../../img/icon_pisa.png'))],
    [new FoodType('面条', require('../../img/icon_miantiao.png'))],
    [new FoodType('饼干', require('../../img/icon_bingan.png'))]
];
export default class TopFoodTypeBar extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>

                <FlatList style={styles.typeList}
                          data={typeData}
                          renderItem={this.renderTypeItem}
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}/>
                <TextBelowImage style={{flex: 1}} text={"全部"} imagePath={require('../../img/icon_quanbu.png')}
                                imageSize={26} isIconfont={false}/>

            </View>
        );
    }

    renderTypeItem = (typeItem) => {
        let foodItem = typeItem.item[0];
        return (
            <TextBelowImage
                text={foodItem.text}
                imagePath={foodItem.image}
                isIconfont={false}
                onClick={() => {
                    Actions.search({'keyword': foodItem.text})
                }}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: white
    },

    typeList: {
        flex: 4,
    },
});
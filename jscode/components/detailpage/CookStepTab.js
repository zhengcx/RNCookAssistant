import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    FlatList, Image,
    StyleSheet, Text,
    View,
} from 'react-native';
import {color_333333} from "../../constant/color";

/**
 * Created by davidSu on 2018/7/16.
 */
export default class CookStepTab extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        let {data} = this.props;
        return (
            <FlatList
                data={data.item.process}
                renderItem={this.renderStepItem}/>
        );
    }

    renderStepItem = (process) => {
        return (
            <View>
                <Image source={{uri: process.item.pic}}
                       roundAsCircle={true}
                       style={{height: 160, marginLeft: 10, marginRight: 10, marginTop: 5, borderRadius: 3}}/>
                <Text style={{
                    padding: 15,
                    fontSize: 13,
                    color: color_333333,
                    alignSelf: 'center'
                }}>{process.item.pcontent}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});  
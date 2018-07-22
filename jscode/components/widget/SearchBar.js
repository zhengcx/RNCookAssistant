import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Keyboard} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {color_333333, white} from "../../constant/color";
import {requestSearchList} from "../../action/searchAction";
import store from "../../store";
import toast from "../../base/ToastUtil";

/**
 * Created by davidSu on 2018/4/2.
 */
export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
        }

    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.searchView}>
                    <Icon style={{alignSelf: 'center', paddingLeft: 10, paddingRight: 5}}
                          name='ios-search-outline'
                          size={20}
                          color={'#cccccc'}></Icon>
                    <TextInput
                        ref='searchInput'
                        style={styles.textInput}
                        placeholder="今天想吃点什么"
                        underlineColorAndroid='transparent'
                        placeholderTextColor={'#cccccc'}
                        value={this.state.searchValue}
                        onChangeText={(value) => {
                            this.setState({searchValue: value})
                        }}
                    />
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: color_333333, fontSize: 15, paddingLeft: 10}}
                          onPress={() => this.clickSearch()}>搜索</Text>
                </View>
            </View>
        );
    }

    clickSearch = () => {
        Keyboard.dismiss();
        if (this.state.searchValue) {
            store.dispatch(requestSearchList(this.state.searchValue, 0, 'search'))
        }

    }

    /**
     * 更新搜索内容
     * @param keyword
     */
    updateSearchContent = (keyword) => {
        this.setState({searchValue: keyword})
        setTimeout(() => {
            this.clickSearch()
        }, 500)

    }
}


const styles = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: white,
        alignItems: 'center'
    },

    searchView: {
        height: 30,
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
        alignItems: 'center'
    },
    textInput: {
        height: 38,
        width: 220,
        color: color_333333,
        fontSize: 15,
    },
});
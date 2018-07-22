/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text, TextInput,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
    testInput(text) {
        alert(text);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to My First React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <Text style={styles.header} onPress={() => test2()}>我的第一个RN项目</Text>
                <Image
                    style={styles.imageColor}
                    source={{uri: 'http://img02.tooopen.com/images/20160122/tooopen_sy_155242698349.jpg'}}
                />

                <TextInput style={styles.textInput} onChangeText={this.testInput}/>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    header: {
        color: '#ff5533'
    },

    imageColor: {
        width: 180,
        height: 180,
        backgroundColor: '#ff6677'
    },

    textInput: {
        width: 200,
        height: 80,
        backgroundColor: '#ffff99'
    }
});

function test2() {

    alert('成功弹出一个小弹窗');

}




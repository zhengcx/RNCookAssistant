import React, {Component} from 'react';
import {Provider} from "react-redux";
import store from "./jscode/store";
import AppRouter from "./jscode/router";


/**
 * Created by davidSu on 2018/3/24.
 */
export default class Entrance extends Component {

    constructor(props) {
        super(props);
        /*暂时关闭警告*/
        console.disableYellowBox = true;
    }

    render() {
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>

        );
    }
}

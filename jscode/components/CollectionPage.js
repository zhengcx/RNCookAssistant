import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
} from 'react-native';
import {CookList} from "./foodlist/CookList";

/**
 * Created by davidSu on 2018/7/22.
 * 收藏页
 */
export default class CollectionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        return (
            <CookList isNeedLoadMore={false} isNeedRefresh={false} isLocal={true} data={this.props.data}/>
        );
    }
}

const styles = StyleSheet.create({});  
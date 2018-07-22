import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import RecommendList from "./RecommendList";

/**
 * Created by davidSu on 2018/6/25.
 * 精选列表
 */
export default class SelectedListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {
        let {keyword, num} = this.props;
        return (

            <RecommendList isNeedLoadMore={false}
                           isNeedRefresh={false}
                           defaultKeyword={keyword}
                           numPerPage={num}
            />
        );
    }
}

const styles = StyleSheet.create({});  
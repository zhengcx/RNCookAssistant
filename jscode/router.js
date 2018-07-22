import React, {Component} from 'react';
import {
    Scene,
    Router,
    Lightbox, Drawer, Actions, Tabs
} from 'react-native-router-flux';
import * as string from './constant/string'
import TabItem from "./base/widget/TabItem";
import SearchPage from "./components/SearchPage";
import RecommendPage from "./components/RecommendPage";
import {color_333333} from "./constant/color";
import MyAccountPage from "./components/MyAccountPage";
import styles from "./style";
import DetailPage from "./components/DetailPage";
import BackUtil from "./base/BackUtil";
import DetailRightButton from "./components/widget/DetailRightButton";
import CollectionPage from "./components/CollectionPage";

export default class AppRouter extends Component {

    render() {
        return (
            <Router
                backAndroidHandler={BackUtil()}>
                <Lightbox>
                    <Scene key="root"
                           navigationBarStyle={styles.navBarStyle}
                           titleStyle={{color: color_333333}}
                    >
                        {/*首页*/}
                        <Scene key="mainpage"
                               tabs={true}
                               lazy={true}
                               swipeEnabled={false}
                               showLabel={false}
                               tabBarPosition='bottom'
                               titleStyle={{fontSize: 16}}
                               tabBarStyle={styles.mainTabBarStyle}
                               navigationBarStyle={{backgroundColor: '#ffffff'}}>
                            <Scene
                                key="search"
                                component={SearchPage}
                                title={string.maintab2}
                                icon={TabItem}
                                iconName={'ios-search'}
                                iconSize={27}/>

                            <Scene
                                key="tuijian"
                                component={RecommendPage}
                                title={string.maintab1}
                                icon={TabItem}
                                iconName={'ios-restaurant'}
                                iconSize={27}
                            />

                            <Scene
                                key="myaccount"
                                component={MyAccountPage}
                                title={string.maintab3}
                                icon={TabItem}
                                iconName={'md-person'}
                                iconSize={27}
                                hideNavBar={true}/>

                        </Scene>

                        {/*详情页*/}
                        <Scene
                            key="detailpage"
                            component={DetailPage}
                            navigationBarStyle={{backgroundColor: '#ffffff'}}
                            title={'详情'}
                            renderRightButton={(params) => {
                                return (<DetailRightButton data={params.data}/>)
                            }}

                        />

                        {/*收藏页*/}
                        <Scene
                            key="collectionpage"
                            component={CollectionPage}
                            navigationBarStyle={{backgroundColor: '#ffffff'}}
                            title={'收藏'}
                        />

                    </Scene>

                </Lightbox>
            </Router>
        );


    }

}


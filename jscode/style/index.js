import React, {StyleSheet, Dimensions, PixelRatio, Platform, StatusBar} from "react-native";
import {cardBackgroundColor, cardShadowColor, color_333333, mainBackgroundColor} from "../constant/color";
import * as dimens from "../constant/dimens";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

export const shadowRadius = (Platform.OS === 'android') ? 5 : 2;
export const elevation = (Platform.OS === 'android') ? 2 : 1;

const gStyles = StyleSheet.create({

    mainBgColor: {
        backgroundColor: mainBackgroundColor
    },
    mainBox: {
        backgroundColor: mainBackgroundColor,
        flex: 1
    },

    flex: {
        flex: 1,
    },

    flexDirectionRow: {
        flexDirection: 'row',
        flex: 1,
    },

    flexDirectionColumn: {
        flexDirection: "column",
        flex: 1,
    },

    flexDirectionRowNotFlex: {
        flexDirection: 'row',
    },

    flexDirectionColumnNotFlex: {
        flexDirection: "column",
    },

    justifyCenter: {
        justifyContent: "center"
    },

    centered: {
        justifyContent: "center",
        alignItems: "center"
    },

    centerV: {
        justifyContent: "center",
    },

    centerH: {
        alignItems: "center"
    },

    justifyBetween: {
        justifyContent: "space-between"
    },

    alignItemsEnd: {
        alignItems: "flex-end"
    },

    justifyEnd: {
        justifyContent: "flex-end"
    },

    alignSelfEnd: {
        alignSelf: 'flex-end'
    },

    alignSelfCenter: {
        alignSelf: 'center'
    },

    absoluteRight: {
        position: "absolute",
        right: 0,
    },
    absoluteFull: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 999,
    },
    shadowCard: {
        shadowColor: cardShadowColor,
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowOpacity: 0.7,
        shadowRadius: shadowRadius,
        elevation: 2,
        backgroundColor: cardBackgroundColor
    },
    shadowText: {
        textShadowColor: cardShadowColor,
        textShadowOffset: {width: 0, height: 0.4},
        textShadowRadius: 0.4
    },


    navBarStyle: {
        height: dimens.navBarHeight,
        backgroundColor: color_333333,
    },

    routerStyle: {
        flex: 1,
        backgroundColor: color_333333,
    },

    mainTabBarStyle: {
        height: dimens.tabBarHeight,
        backgroundColor: '#fafafa',
        paddingBottom: 5,
        paddingTop: 5,
    }

});

export default gStyles;
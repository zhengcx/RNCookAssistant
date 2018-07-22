import {Actions} from "react-native-router-flux";
import toast from "./ToastUtil";
import * as BackHandler from "react-native/Libraries/Utilities/BackHandler.android";

export default function BackUtil() {
    let lastTime;
    let hasShowTip = false;//是否已经显示过退出提示
    return function () {
        //如果不是首页，则点击返回直接返回
        // 如果是首页则提示双击才能退出
        //实现方式：点击判断hasShowTip=false，则弹Toast提醒，并置hasShowTip=true（下次再点击就会走退出App逻辑）,此时也会调一个handler方法，里面相当于一个计时器，1秒过后，则会重新将hasShowTip置为false，
        // 这样就达到连续双击才能退出的效果
        if (Actions.state.routes[0].index > 0) {
            Actions.pop();
            return true;
        }
        lastTime = Date.now();
        if (!hasShowTip) {
            let handler = function () {
                let now = Date.now();
                if (now - lastTime < 1000) {
                    requestAnimationFrame(handler)//会不断调handler方法，直到now-lastTime>1000
                } else {
                    hasShowTip = false
                }
            };
            handler();
            toast("再点一次退出应用");
            hasShowTip = true;
            return true
        } else {
            BackHandler.exitApp();
            return true
        }
    }
}
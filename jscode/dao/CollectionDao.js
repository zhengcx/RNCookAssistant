import realm from "./db";
import * as md5 from "react-native-md5";

/**
 * 添加一个收藏
 * @param data
 * @returns {Promise<boolean>}
 */
const addCollection = async (data) => {
    if (!data) {
        return
    }
    let key = md5.b64_md5(data.item.pic + data.item.name)
    console.log("add id", key)
    try {
        realm.write(() => {
            realm.create('Collection', {
                id: key,
                content: JSON.stringify(data),
                time: new Date()
            })
        })
        return true
    } catch (e) {
        console.log('add err', e);
        return false
    }

}

/**
 * 删除一个收藏
 * @param data
 * @returns {Promise<boolean>}
 */
const deleteCollection = async (data) => {
    if (!data) {
        return
    }
    let key = md5.b64_md5(data.item.pic + data.item.name)
    console.log("delete id", key);
    try {
        realm.write(() => {
            let items = realm.objects('Collection').filtered(`id="${key}"`)
            realm.delete(items)
        })
        return true
    } catch (e) {
        console.log('delete err', e)
        return false
    }
}

/**
 * 获取整个收藏列表
 * @returns {Promise<Array>}
 */
const getCollectionListDao = async () => {
    let allData = realm.objects('Collection');
    console.log('alldata length', allData.length)
    if (allData && allData.length > 0) {
        let data = [];
        allData.forEach((item) => {
            data.push(JSON.parse(item.content));
        });

        return data;
    } else {
        return [];
    }
}

/**
 * 根据Id获取某一条收藏
 * @param id
 * @returns {Promise<Realm.Results<any>>}
 */
const getCollectionById = async (id) => {
    let items = realm.objects('Collection').filtered(`id="${id}"`);//
    console.log('items', items.length + "   " + items[0])
    return items;
}

export default {
    addCollection,
    getCollectionListDao,
    getCollectionById,
    deleteCollection,
};
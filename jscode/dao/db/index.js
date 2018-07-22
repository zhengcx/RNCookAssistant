import Realm from 'realm';

/**
 * 收藏列表
 * @type {{}}
 */
const Collection = {
    name: 'Collection',
    properties: {
        id: 'string',
        content: 'string',
        time: 'date',
    }
}


let realm = new Realm({
    schema: [Collection]
})

export const clearAllData = () => {
    realm.write(() => {
        realm.deleteAll();
    })
}

export default realm;

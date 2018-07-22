/**
 * 网络请求封装
 * @type {{}}
 */

var HTTPUtil = {};

/**
 * GET请求
 */
HTTPUtil.get = function (url, params, headers) {
    if (params) {
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'GET',
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject({status: -1});
            })
    })
}


/**
 * POST请求  FormData 表单数据
 */
HTTPUtil.post = function (url, formData, headers) {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject({status: -1});
            })
    })
}

export default HTTPUtil;
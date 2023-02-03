// 获取cookie
function getCookie(key:string) {
    if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(key + '=')
    if (start !== -1) {
        start = start + key.length + 1
        let end = document.cookie.indexOf(';', start)
        if (end === -1) end = document.cookie.length
        return decodeURI(document.cookie.substring(start, end))
    }
    }
    return ''
}
// 保存cookie
function setCookie(cName:string, value:string, expiredays = 14) {
    const exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = cName + '=' + decodeURIComponent(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toUTCString())
    console.log(document.cookie + 'first');
}

export{
    getCookie,
    setCookie
}
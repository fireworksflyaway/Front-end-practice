/**
 * Created by Mason Jackson on 2017/3/21.
 * 获取url的query对象
 */
function getQueryObject(url) {
    url=url||window.location.href;
    let search=url.substring(url.lastIndexOf("?")+1);
    let obj={};
    let reg= /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg,function (rs,$1,$2) {
        let name=decodeURIComponent($1);
        let val=decodeURIComponent($2);
        obj[name]=val;
        return rs;
    })
    return obj;
}
console.log(getQueryObject());
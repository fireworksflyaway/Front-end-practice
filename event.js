/**
 * Created by Mason Jackson on 2017/3/22.
 * 手写事件委托demo
 */
var element=document.getElementsByTagName('div')[0];
function delegate(element, type, tagName, callback ) {
    if(element.addEventListener)
        element.addEventListener(type,fn);
    else
        element.attachEvent('on'+type,fn);

    function fn(e) {
        e=e||window.event;
        var target=e.target||e.srcElement;
        if(target.tagName.toLowerCase()===tagName.toLowerCase()&&callback)
            callback.call(null, target);
    }
}

delegate(element,'click','li',(target)=>{
    alert(target.textContent);
})
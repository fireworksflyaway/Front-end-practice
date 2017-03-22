/**
 * Created by ImageDBUser on 2017/3/21.
 */
function foo(a,b) {
    this.c=a+b;
    return this.c;
}

Function.prototype.mybind= function(othis) {
    if(typeof this!=='function')
        throw new TypeError('error');
    var fthis=this;
    var argus=Array.prototype.slice.call(arguments,1);
    var fNOP=function () {};
    var fBOUND=function () {
        return fthis.apply(this instanceof fNOP?this:othis, argus.concat(Array.prototype.slice.call(arguments)));
    }
    fNOP.prototype=fthis.prototype;
    fBOUND.prototype=new fNOP();
    return fBOUND;
}

var func=foo.mybind({c:0,d:100},1);
console.log(func(2));
console.log(new func(2));
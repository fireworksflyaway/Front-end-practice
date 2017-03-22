/**
 * Created by Mason Jackson on 2017/3/22.
 * 事件模型
 */
function Emitter() {
    this.events={};
}

Emitter.prototype.addEvent=function(eventName, callback){
    let event=this.events[eventName]||[];
    event.push(callback);
    this.events[eventName]=event;
}

Emitter.prototype.trigger=function (eventName) {
    let event=this.events[eventName];
    let args=[].slice.call(arguments,1);
    if(Array.isArray(event))
        event.forEach(function (item) {
            item.apply(this,args);
        })
}

let myEmitter=new Emitter();
myEmitter.addEvent('hit',x=>{console.log('hit '+x)});
myEmitter.addEvent('sleep',x=>{console.log('sleep '+x)});
myEmitter.addEvent('hit', (x,y)=>{console.log('hit him '+x+y)});
myEmitter.trigger('hit');
myEmitter.trigger('hit','me');
myEmitter.trigger('hit','myself','body');
myEmitter.trigger('sleep','boy');
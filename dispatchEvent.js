/**
 * Created by Mason Jackson in Office on 2017/3/23.
 */
var obj=document.getElementsByTagName('div')[0];
var btn=document.getElementsByTagName('button')[0];
var event;
if(obj.dispatchEvent&&obj.addEventListener){
    obj.addEventListener('changemsg', function(e){
        obj.textContent='world';
        document.write(e.target.textContent);
    })
    event=document.createEvent('HTMLevents');
    event.initEvent('changemsg',true,true);
    btn.addEventListener('click',function(e){
        obj.dispatchEvent(event);
    })
}
else{
    obj.attachEvent('changemsg',function(e){
        obj.textContent='world';
        document.write(e.target.textContent);
    })
    event=document.createEventObject();
    event.eventType='message';
    btn.onclick=function(e){
        obj.fireEvent('changemsg',event);
    }
}


//获取坐标
function getPos(ev){
    //IE FF document.documentElement.scrollTop
    //chrome document.body.scrollTop
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    return {
        x:ev.clientX+scrollLeft,
        y:ev.clientY+scrollTop
    }
}

//可视区宽高
document.documentElement.clientWidth  
document.documentElement.clientHeight
//事件兼容
document.onclick = function(ev){
    //IE
    //alert(event.clientX+','+event.clientY)
    //FF
    //alert(ev.clientX+','+ev.clientY)
    var oEvent = ev || event;    //事件兼容
    oEvent.cancelBubble = true;  //取消冒泡
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
}
document.onkeydown = function(ev){
    var oEvent = ev || event ;
    alert(oEvent.keyCode)
}

//DOM-document
//子节点
oUl.childNodes.length   //IE6-8 下的属性
oUl.children.length     //(元素子节点，代替childNodes) 所有兼容 

//父节点
parentNode    
offsetParent  //可以获取元素相对于定位元素的父级

//获取第一个元素 firstChild /  firstElementChild
//firstChild ie6-8   
//firstElementChild   高级浏览器
var oUl = document.getElementById('ul1');
if(oUl.firstElementChild){
    oUl.firstElementChild.style.background="red";
}else{
    oUl.firstChild.style.background='red';
}

//DOM元素灵活查找
function getByClass(oParent,sClass){
    var aResult = []
    var aEle = oParent.getElementByTagName('*');
    for(var i = 0 ; aEle.length ; i++){
        if(aEle[i].className == sClass){
            aResult.push(aEle[i])
        }
    }
    return aResult;
}
//创建元素
var oLi = document.createElement('li');
var aLi = oUl.getElementByTagName('li');
oLi.innerHTML = 'xxxxxxxxx';
oUl.appendChild(oLi)    //添加元素（添加到末尾）

oUl.insertBefore(oLi,aLi[0])  //在第一个li前面插入新的li


//BOM-window(浏览器)
window.open();   //开启新的窗口   
window.close();  //关闭当前窗口  FF不能关闭非open打开的窗口
window.navigator.userAgent;      //当前浏览器版本信息
window.location  //当前网页地址 （读取和赋值）

var confirm = comfirm('你确定取消？')  //true false


var oNewWin = window.open('about:blank','_blank'); //开一个新窗口  第二个参数如果为_myself 的话，会覆盖当前窗口
oNewWin.document.write('123');




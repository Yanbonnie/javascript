var book = {
    name:'css3修炼手册',
    picture:{
        smallPic:'我是小的',
        centerPic:'我是中的',
        largePic:'我是大的'
    }
}

// 使用递归方式实现对象的深拷贝
var i = 0;
function clone(obj){
    i=i+1;
    var vv = null;
    if(typeof obj == 'object'  && obj != null){
        vv = obj instanceof Array ? [] : {};
        for(var attr in obj){
            vv[attr] = clone(obj[attr])
        }
    }else{
        vv = obj;
        // 
    }
    console.log('我是vv--'+i+'------')
    console.log(vv)
    return vv;
}

var book2 = clone(book);
// console.log(book2)
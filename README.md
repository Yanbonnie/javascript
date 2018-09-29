# javascript
js基本功能

1.三目运算
<script>
    var a = 13;
    var b = a > 15 ? "大于15" : (a < 12) ? "小于10" : "大于12小于15";
    console.log(b)
</script>
2.文本框只能输入数字
<input onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"
	 onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" />
	
3.
	const sortNumbers = function(...numbers){
                return numbers.sort();
        }
         const srotNum = (...numbers) =>  numbers.sort()
         console.log(sortNumbers(5,7,2)) // [2,5,7]
         console.log(srotNum(5,7,2))	 // [2,5,7]
	
4.选文件多次执行onchange方法解决方案 on绑定前面添加unbind
$("#file").unbind().on('change',function(){})

5.阻止冒泡兼容
	if (event.stopPropagation) {
		// this code is for Mozilla and Opera
		event.stopPropagation();
	}
	else if (window.event) {
		// this code is for IE
		window.event.cancelBubble = true;
	}

6.获取当前时间几天内的时间
  Vue.prototype.getDataFn = function(n){ //n几天内
  var nowdate = new Date();
    var Y = nowdate.getFullYear();
    var M = (nowdate.getMonth()+1) < 10 ? "0"+ (nowdate.getMonth()+1) : (nowdate.getMonth()+1);
    var D = nowdate.getDate();
    var currentdate = Y+'-'+M+'-'+D;
   // nowdate.setMonth(nowdate.getMonth()-1);
    nowdate.setDate(nowdate.getDate() - n);
    var y = nowdate.getFullYear();
    var m = (nowdate.getMonth()+1) < 10 ? "0"+ (nowdate.getMonth()+1) : (nowdate.getMonth()+1);
    var d = nowdate.getDate();
    var formatwdate = y+'-'+m+'-'+d;        
    return {
        "formatwdate":formatwdate,
        "currentdate":currentdate
    }
  }
7.匹配所有空格正则
var reg = /\s+/g;
var str = '  dd  sd  sd ';
str.replace(reg,'');  把所有空格替换为空
8.字符串转base64
let data = new Buffer(JSON.stringify({claimTaskId: '2461946cc68b48688a1604466fb6a579'})).toString("base64");

9.数组去重
Array.prototype.unique3 = function() {
        var res = [];
        var json = {};
        for(var i = 0; i < this.length; i++){
            //console.log(this[i]);
            console.log(!json[this[i]]);
            if(!json[this[i]]){
                res.push(this[i]);
                json[this[i]] = 1;
            }
        }
        console.log(json);
        return res;
    }

    var arr = [112,112,34,'你好',112,112,34,'你好','str','str1'];
    console.log(arr.unique3());
10.for循环
（声明;条件;执行）{执行}
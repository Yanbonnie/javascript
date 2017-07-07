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

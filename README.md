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

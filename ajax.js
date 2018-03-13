
/*
 ajax封装成一个函数
 ajax('abc.json',function(str){
 	str = eval(str);
	alert(str)	
  },function(){
	  alert("失败了")
  })
*/


function ajax(url, fnSucc, fnFaild)
{
	//1.创建ajax对象
	var oAjax=null;
	
  //用一个不存在的变量：出错
  //用一个不存在的属性：undefined  undefined在if里面代表false
  //window.XMLHttpResquest IE6不存在的属性
	if(window.XMLHttpRequest)   //将XMLHttpRequest变量转变为window属性
	{
		oAjax=new XMLHttpRequest();
	}
	else
	{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//2.连接服务器
	//open(方法, url, 是否异步)   同步：事情一件一件来，异步：多个事情可以一起做 √	
	oAjax.open('GET', url, true);
	
	//3.发送请求
	oAjax.send();
	
	//4.接收返回
	//OnReadyStateChange
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)
		{
			if(oAjax.status==200)//http状态码
			{
				//alert('成功：'+oAjax.responseText);
				fnSucc(oAjax.responseText);
			}
			else
			{
				if(fnFaild)
				{
					fnFaild(oAjax.status);
				}
			}
		}
	};
}

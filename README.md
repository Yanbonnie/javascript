# javascript
js基本功能
      /*
			 *  js
			 */
				offsetWidth   不可以获取隐藏元素的宽度  
			/*
			 * jq
			 */
				parents()  :获取当前元素的所有祖先节点，参数就是筛选功能（可以找到多个元素）
				closest()  :获取最近的指定的祖先节点（包括当前元素自身）必须要写筛选的参数，只能找到一个元素。
				siblings() :找所有的兄弟节点，参数也是筛选功能
				nextAll()  :找到下面的所有兄弟节点，参数也是筛选功能
				prevAll()  :找到上面的所有兄弟节点，参数也是筛选功能
				clone()    :可以接受一个参数,作用可以复制之前的操作行为  $('div').clone(true).appendTo($('span'));
				wrap()     : $('span').wrap('<div>'); 
				wrapAll()  :整体包装
				wrapInner():内部包装
				unwrap()   :删除包装 (删除父级:不包括body)
				add()      :
				slice()    :$('li').slice(1,4).css("background","red"); 跟数组用法一致
				serialize():表单序列化  console.log($('form').serizlize())  //string  a=1&b=2&c=3
				serializeArray():表单序列化   console.log($('form').serializeArray()) [{name:"a",value:'1'},{name:"b",value:'2'},{name:"c",value:'3'}]
				
				jQuery中的运动
				animate({}) 第一个参数:{} 运动的
							第二个参数:时间    默认400ms
							第三个参数:运动形式 只有两种(默认swing(慢快慢) linear(匀速))
							第四个参数:运动完成的回调函数
							
				stop()      :停止运动   //默认只会组织当前运动  $("#div1").stop();     
								   //阻止后续运动$("#div1").stop(true);
				finish()    :立即停止到所有的目标点  $("#div1").finish();
				delay()     :延迟
				$("#div1").animate({"width":"30px"},1000).delay(1000).animate({"height":"300px"},1000)
				
				outerWidth()  可以获取到隐藏元素的宽度。（padding border content）
				remove() detach()  
			 
				$(function(){})             --等DOM加载完就可以执行.性能好.(利用DOMContentLoaded) 				$(document).ready(function(){})
				window.onload=function(){}  --整个页面加载完(包括js,css,图片...)
				
				$(function(){
					
				})

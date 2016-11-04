/*工厂模式构造函数
 *工厂方式的问题：
 *没有new
 *每个对象都有一套自己的方法，--浪费资源
 */  
function CreatePerson(name,sex){
	//原材料   new一个对象
	var obj = new Object();
	//加工   给对象添加属性和方法
	obj.name = name;
	obj.sex = sex;
	obj.showName = function(){
		alert('我的名字叫：'+obj.name);
	}
	obj.showSex = function(){
		alert('我的性别是：'+obj.sex);
	}
	//出厂
	return obj;
}

var p1 = CreatePerson('blue','男');
var p2 = CreatePerson('leo','女');
p1.showName();
p1.showSex();
p2.showName();
p2.showSex();
alert(p1.showName == P2.showName)  // false  
 

/*
 *混合法
 *解决工厂模式构造函数的弊端
 *prototype 给类添加属性或者方法
 *
 *class  -----改变一类元素的样式  prototype
 *行间样式 ---改变一个元素的样式  给 一个对象添加方法
 */

 function CreatePerson(name,sex){
	 
	//假想的系统内部工作流程
	//var this = new Object();
	//属性
	this.name = name;
	this.sex = sex;
	//假想的系统内部工作流程
	//return this
}
//方法：所有对象都一样
CreatePerson.prototype.showName = function()
{
		alert('我的名字叫：'+this.name);
}
CreatePerson.prototype.showSex = function()
{
		alert('我的性别是：'+this.sex);
}
var p1 = new CreatePerson('blue','男');
var p2 = new CreatePerson('leo','女');

p1.showName();
p1.showSex();
p2.showName();
p2.showSex();
alert(p1.showName == p2.showName)   //true

 
 
/*类		     模子    在js中构造函数就是类，类就是构造函数   Array (类)  new Array (构造函数)
 *对象（实例）	 蛋糕
 
 *var arr = new Array()
 *Array(类)  不具备实际的功能，只能用来构造对象
 *arr对象    真正有功能的东西，被类给构造出来的
 *
 *原型的一个重要功能（应用） -- 可以扩展系统对象
 *eg：给String类添加方法
 */

 String.prototype.trim=function(){
	 return this.replace(/^\s+|\s+$/,"");
 }
 var str = '      abc   de    ';
 alert('('+str.trim()+')');   //(abc   de)



//面向对象之继承--终结版

function Person(name,sex){	
		this.name = name;
		this.sex = sex;		
	}
	Person.prototype.showName = function(){		
		alert(this.name);
	}
	
	Person.prototype.showSex = function(){		
		alert(this.sex);
	}
	
	function Worker(name,sex,job){		
		//this -> new 出来的Worker对象
		//构造函数伪装 调用了父级构造函数 - 为了继承属性
		Person.call(this,name,sex);  		
		this.job = job;		
	}
	
	//原型链  通过原型来继承父级的方法  此方式子类会影响父类，不建议使用
	//Worker.prototype = Person.prototype;   
	
	for(var i in Person.prototype){	
		Worker.prototype[i] = Person.prototype[i];	
	}
	
	Worker.prototype.showJob = function(){	
		alert(this.job)		
	}
	
	var ow1 = new Worker('blue','男','打杂的');
	ow1.showSex();
	//alert(Person.prototype.showJob)
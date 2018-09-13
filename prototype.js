/*工厂模式构造函数
 *工厂方式的问题：
 *没有new
 *每个对象都有一套自己的方法，--浪费资源
 */  
function CreatePerson1(name,sex){
	//原材料   new一个对象
	console.log('----------------------------------------')
	var obj = new Object();
	//加工   给对象添加属性和方法
	obj.name = name;
	obj.sex = sex;
	obj.showName = function(){
		console.log('我的名字叫：'+obj.name);
	}
	obj.showSex = function(){
		console.log('我的性别是：'+obj.sex);
	}
	
	//出厂
	return obj;
}

var p1 = CreatePerson1('blue','男');
var p2 = CreatePerson1('leo','女');
console.log(p1)
p1.showName();
p1.showSex();
p2.showName();
p2.showSex();
console.log(p1.showName == p2.showName)  // false  
 

/*
 *混合法
 *解决工厂模式构造函数的弊端
 *prototype 给类添加属性或者方法
 *
 *class  -----改变一类元素的样式  prototype
 *行间样式 ---改变一个元素的样式  给 一个对象添加方法
 */

 function CreatePerson2(name,sex){
	 
	//假想的系统内部工作流程
	//var this = new Object();
	//属性
	this.name = name;
	this.sex = sex;
	//假想的系统内部工作流程
	//return this
}
//方法：所有对象都一样
CreatePerson2.prototype.showName = function()
{
		console.log('我的名字叫：'+this.name);
}
CreatePerson2.prototype.showSex = function()
{
		console.log('我的性别是：'+this.sex);
}
var p3 = new CreatePerson2('blue','男');
var p4 = new CreatePerson2('leo','女');

p3.showName();
p3.showSex();
p4.showName();
p4.showSex();
console.log(p3.showName == p4.showName)   //true

 
 
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
 console.log('('+str.trim()+')');   //(abc   de)



//面向对象之继承--终结版
// 属性的继承  调用父类的构造函数  call
// 方法的继承
function Person(name,sex){	
		this.name = name;
		this.sex = sex;		
	}
	Person.prototype.showName = function(){		
		console.log(this.name);
	}
	
	Person.prototype.showSex = function(){		
		console.log(this.sex);
	}
	
	function Worker(name,sex,job){		
		//this -> new 出来的Worker对象
		//构造函数伪装 调用了父级构造函数 - 为了继承属性
		Person.call(this,name,sex);     //属性继承		
		this.job = job;		
	}
	
	//原型链  通过原型来继承父级的方法  此方式子类会影响父类，不建议使用
	//Worker.prototype = Person.prototype;   
	
	for(var i in Person.prototype){	     //方法的继承  for in ：拷贝继承（jquery也是采用拷贝继承extend）
		Worker.prototype[i] = Person.prototype[i];	
	}
	
	Worker.prototype.showJob = function(){	
		console.log(this.job)		
	}
	
	var ow1 = new Worker('blue','男','打杂的');
	ow1.showSex();
	//alert(Person.prototype.showJob)

console.log('-----------------------------------------------')

/* hasOwnProperty : 看是不是对象自身下面的属性   Object的原型Propertype下面的***************/
var arr = [];
arr.num = 10;
Array.prototype.num2 = 20;

console.log(arr.hasOwnProperty('num'));   //true
console.log(arr.hasOwnProperty('num2'));  //false
// console.log(arr.hasOwnProperty('hasOwnProperty'));  //false

/*************** constructor  : 查看对象的构造函数       可以对类型进行判断**********************************/
var arr = [1,2,3,4];
console.log(arr.constructor == Array)  //true

// constructor是程序自动生成
function Aaa(){}
Aaa.prototype.constructor = Aaa;   //程序自动处理的

var a1 = new Aaa();
console.log(a1.hasOwnProperty == Object.prototype.hasOwnProperty) //true


function Bbb(){}
// 1.方案一
Bbb.prototype.name = '小明';
// 2.方案二
	// Bbb.prototype = {
	// 	constructor:Bbb,      //此处一定要写，不然b1.constructor就会指向[Function: Object]
	// 	name:'小明'
	// }

var b1 = new Bbb();
console.log(b1.constructor)   //[Function: Bbb]

for(var attr in Bbb.prototype){   //for in   只能找到name，系统的prototype是找不到的
	console.log(attr)   //name  
}


/*********instanceof : 对象与构造函数在原型链上是否有关系  可以对类型进行判断*************/
console.log('对象与构造函数在原型链上是否有关系')
console.log(b1 instanceof Bbb)      //true
console.log(b1 instanceof Object)   //true
console.log(b1 instanceof Array)    //false


/*********toString******************** 
 * 所有系统对象和自己写的构造对象，都有toString方法
 * 系统对象下面都是自带的，在系统对象的prototype，自己写的对象都是通过原型链找Object下面的
 * 
 * 作用：
 * 	1.把对象转成字符串
 * 	2.进制转换
 *  3.利用toString做类型的判断（推荐的写法）
 * */

 console.log(arr.toString == Object.prototype.toString)  //false
 console.log(a1.toString == Object.prototype.toString);  //true

console.log( arr.toString())   //1,2,3,4
var num = 12;
console.log(num.toString(2))   //1100
// 类型判断
console.log(Object.prototype.toString.call([1,2,3]))  //[object Array]
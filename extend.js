// 继承：子类不影响父类，子类可以 继承父类的一些功能（代码复用）            
function CreatePerson(name,sex){
    this.name = name;
    this.sex = sex;
}
CreatePerson.prototype.showName = function(){
    
}

// 原型继承：
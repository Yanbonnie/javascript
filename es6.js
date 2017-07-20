
/**
 * 【数据结构 Set】
 */

// -----------------------------------------------------
/**
 * 集合的基本概念：集合是由一组无序且唯一（即不能重复）的项组成的。这个数据结构使用了与有限集合相同的数学概念，应用在计算机的数据结构中。
 * 特点：key 和 value 相同，没有重复的 value。
 *
 * ES6 提供了数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
 */
// -----------------------------------------------------
// 1 如何创建一个 Set

const s = new Set([1, 2, 3]);

console.log(s); 


// -----------------------------------------------------
// 2 Set 类的属性 

console.log(s.size); // 3


// -----------------------------------------------------
// 3 Set 类的方法

// 1 set.add(value) 添加一个数据，返回Set结构本身。

s.add('a').add('b').add('c');

console.log(s);


// 2 set.delete(value) 删除指定数据，返回一个布尔值，表示删除是否成功。

console.log(s.delete('a'));
console.log(s);

console.log(s.delete('a'));

// 3 set.has(value) 判断该值是否为Set的成员，反回一个布尔值。

console.log(s.has('a')); // false
console.log(s.has(1)); // true

// 4 set.clear() 清除所有数据，没有返回值。

// s.clear();
// 
// console.log(s);

// 5 keys() 返回键名的遍历器

console.log(s.keys());

// 6 values() 返回键值的遍历器

console.log(s.values());

// 7 entries() 返回键值对的遍历器

console.log(s.entries());

// 8 forEach() 使用回调函数遍历每个成员

s.forEach(function (value, key, set){
  console.log(value + ' miaov');
});

console.log(s);

// -----------------------------------------------------

s.add(1);

console.log(s);

/**
 * 【数据结构 Map】
 */

// -----------------------------------------------------
/**
 * 字典：是用来存储不重复key的Hash结构。不同于集合(Set)的是，字典使用的是[键，值]的形式来储存数据的。
 * 
 * JavaScript 的对象（Object:{}）只能用字符串当作键。这给它的使用带来了很大的限制。
 *
 * 为了解决这个问题，ES6提供了Map数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。如果你需要“键值对”的数据结构，Map比Object更合适。。
 */

// var data1 = {a: 1}, data2 = {b: 2}, obj = {};
// 
// obj[data1] = 1;
// obj[data2] = 2;
// 
// console.log(obj);
// 
// console.log(data1.toString() === data2.toString());

// -----------------------------------------------------
// 1 如何创建一个 Map
 
const map = new Map([
  ['a', 1],
  ['b', 2]
]);

console.log(map);

// -----------------------------------------------------
// 2 Map 类的属性 

console.log(map.size);

// -----------------------------------------------------
// 3 Map 类的方法

// 1 set(key, value) 设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。

map.set('miaov', 'ketang').set('new', 'fq').set('miaov', 'leo');

console.log(map);


// 2 get(key) get方法读取key对应的键值，如果找不到 key，返回undefined。

console.log(map.get('new'));
console.log(map.get('x'));

// 3 delete(key) 删除某个键，返回true。如果删除失败，返回false。

console.log(map.delete('a'));
console.log(map);

console.log(map.delete('a'));


// 4 has(key) 方法返回一个布尔值，表示某个键是否在当前Map对象之中。

console.log(map.has('miaov'));
console.log(map.has('a'));

// 5 clear() 清除所有数据，没有返回值。

// map.clear();
// 
// console.log(map);

// 6 keys() 返回键名的遍历器

// console.log(map.keys());

// 7 values() 返回键值的遍历器

// console.log(map.values());

// 8 entries() 返回键值对的遍历器

// console.log(map.entries());

// 9 forEach() 使用回调函数遍历每个成员

// map.forEach(function (key, value, map){
//   console.log(key + ':' + value);
// })

// -----------------------------------------------------
// Map 在使用过程中的一些注意事项：

// map.set(NaN, 10).set(NaN, 100);
// 
// console.log(map);

map.set({}, 'x').set({}, 'y');

console.log(map);

console.log({} === {});


/**
 * 【Iterator和for...of循环】
 */

// ---------------------------------------------------------------
/**
 * > 基本概念：
 * 
 * 在ES6中新增了Set和Map两种数据结构，再加上JS之前原有的数组和对象，这样就有了四种数据集合，平时还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，Map的成员是对象等。这样就需要一种统一的接口机制，来处理所有不同的数据结构。
 *
 * Iterator就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作，而且这种遍历操作是**依次**处理该数据结构的所有成员。
 *
 * Iterator遍历器的做用：
 *  - 为各种数据结构，提供一个统一的、简便的访问接口。
 *  - 使得数据结构的成员能够按某种次序排列。
 *  - ES6新增了遍历命令for...of循环，Iterator接口主要供for...of消费。
 */

// ---------------------------------------------------------------
// 1 手写 Iterator 接口

// const arr = [1, 2, 3];
// 
// function iterator(arr){
//   let index = 0;
//   return {
//     next: function (){
//       return index < arr.length ? 
//       {value: arr[index++], done: false} :
//       {value: undefined, done: true};
//     }
//   }
// }
// 
// const it = iterator(arr);
// 
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

/* Iterator的遍历过程：
 *  - 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
 *  - 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
 *  - 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
 *  - 不断调用指针对象的next方法，直到它指向数据结构的结束位置。
 *
 * 每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。
 */ 


// 2 凡是具有 Symbol.iterator 属性的数据结构都具有 Iterator 接口

const arr = [1, 2, 3];
const set = new Set(['a', 'b', 'c']);
const map = new Map([['a', 1]]);

const itArr = arr[Symbol.iterator]();
const itSet = set[Symbol.iterator]();
const itMap = map[Symbol.iterator]();

console.log(itArr);
console.log(itSet);
console.log(itMap);


console.log(itSet.next());
console.log(itSet.next());
console.log(itSet.next());
console.log(itSet.next());

const obj = {};

console.log(obj[Symbol.iterator]);


/**
 * 3 具备iterator接口的数据结构都可以进行如下操作
 *  - 解构赋值
 *  - 扩展运算符
 */
 
// let [x, y] = set;
// 
// console.log(x, y);

// ...

// let str = 'miaov';
// 
// let arrStr = [...str];
// 
// console.log(arrStr);

// const arr2 = [{}, 1, 'a', 1, 'a', 'b', []];
// 
// console.log([...new Set(arr2)]);


// ---------------------------------------------------------------
// 4 for...of循环

const ofArr = [1, 2, 3, 4];

for(let i of ofArr){
  console.log(i);
}

const m = new Map();

m.set('a', 1).set('b', 2).set('c', 3);

// for(let data of m){
//   console.log(data);
// }

for(let [key, value] of m){
  console.log(key, value);
}




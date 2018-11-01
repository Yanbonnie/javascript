
; (function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' ) { //&& module.exports
    // node/commonjs  
    factory(require('jquery'))
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.fn.add = function (params) {
    console.log(params)
  }
}));

/**
 * 调用方式
 *  -------------browser globals--------------
 *  <script src="./js/lib/jquery-1.12.2.min.js" ></script>
 *  <script src="./js/lib/xxx.js" ></script>
 *  <script>
 *    $('h1').add({a:1,b:2})
 *  </script>
 * 
 * -------------requirejs---------------------
 * require(["../config"], function(){
 *    require(['jquery','js/xxx.js'],function($){
 *        $('h1').add({a:1,b:2})
 *    })
 * })
 * 
 * --------------node/commonjs------------------
 * 首先需要npm install jquery -save模块
 * import '@/assets/js/lib/test.plugin.js';
 * $('h1').add({a:1,b:2})
 */


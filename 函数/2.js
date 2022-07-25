(function(window){
  function yy() {
    console.log("2.1");
  }
  function show() {
    console.log("2.2")
  }
  // 把函数封装起来 然后好调用
  window.js2 = {yy, show};
})(window)
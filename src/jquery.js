window.jQuery = function (selectorOrArray) {
    let elements
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray);
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray;
    }
  // return 回来的 api 可以操作 elements
  return { // const api = {
      // 不用特地给一个名字，直接 return 回来用就可以，而它的名字在 main.js 里面有
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
        // 给我一个 className ，然后遍历所有 elements
      }
      return this;
      // elements 是个闭包
    },
    each(fn){
        for(let i=0; i<elements.length; i++){
            fn.call(null, elements[i], i)
        }
        return this
        // this 就是 api 对象！
        // 所有的函数都应该返回 this ， 除了一些特殊函数。
    },
    find(selector){
        let array = []
        for(let i=0; i<elements.length; i++){
            const elements2 = Array.from(elements[i].querySelectorAll(selector))
            array = array.concat(elements2)
            // elements 是个数组，所以不能这样写 elements.querySelectorAll
            // concat 后面可以接一个数组，但是一个伪数组 
        }
        array.oldApi = this // this 是旧的 api
        const newApi = jQuery(array) // 给我一个数组，我给你返回一个 newApi
        // 用不同的 api 对象，来操作不同的元素。
        return newApi
        // return this // this 是 find 前面的那个函数
        // 上面两行可以直接写成 
        //return jQuery(array)
    },
    oldApi: selectorOrArray.oldApi,
    end(){
        return this.oldApi // this 是当前的 api，新的 api，即 api2 ，api2 的 oldapi 是 api1 
    },
    parent(){
        const array = []
        this.each((node)=>{
            if(array.indexOf(node.parentNode) === -1){
                array.push(node.parentNode)
            } // 如果爸爸都是同一个，就不让它重复打
        })
        return jQuery(array)
    },
    children(){
        const array = []
        this.each((node)=>{
            array.push(...node.children)
            // ... 展开语法，意思是把里面的分组直接拆开，整个弄成一个数组
        })
        return jQuery(array)
    },
    print(){ 
        console.log(elements)
    }
    // elements 就是对应的元素
  };
  // return api; // jQuery 返回的是对象，可以操作 elements 的 api ，不是 elements
};
// jQuery 的核心代码是
// 它接受一个选择器，根据选择器得到一些元素，然后返回一个对象，这个对象有一个方法可以操作这些元素。

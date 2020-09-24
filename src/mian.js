// const api = jQuery(".test");
// api.addClass("red") // this 就是 api，所以可以直接返回 this
//    .addClass("blue") // this 就是 api，所以可以直接返回 this
//    .addClass('green'); // 不清楚我获取到的元素的个数，要用遍历。该行就是遍历所有刚回去的元素，添加 .red
// 因为 api.addClass 返回来的还是 api ，所以我们还可以继续在后面 .addClass('blue)
// 这个操作叫做链式操作。
jQuery(".test")
  .find(".child")
// x1.addClass("red")
  // 因为 find 返回的是 jQuery 所以 red 加到 .test 上面去了
  .addClass("green")

// 如果突然相返回去操作 .test
// const oldApi = api2
  .end() // 只要你给我 end ，我就返回 .test
  // 从这里能看出 end 的 this 就是 api2 ，而不是 api1 。
  .addClass("yellow")

  .each((div)=>console.log(div))

  const x = jQuery('.test')
  x.parent().print()
  x.children().print()
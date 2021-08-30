//该问件用来写组件的逻辑代码（及js代码的）
import { Component } from '@angular/core';

@Component({ //Component是一个装饰器，用于引入该组件的html、css文件
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'angularStudy'; // 这里detitle属性用于显示在浏览器标签上

  btnBgColorClass = 'btnBgColor' // 样式

  index = '这是一个index属性' //用来给某个标签元素添加一个我们自定义的属性

  oneSpan = '<span>span标签元素</span>' // 把一个标签放到另一个标签里面

  h1ClassObj = { //通过h1ClassObj 对象，控制该对象里的属性(该属性为.css文件里的类选择器) 为true还是false，从而控制标签元素的样式
    h1ColorClass1: true,
    h1ColorClass2: false
  }

  classArr = [
    'h1ColorClass1',
    'h1ColorClass2'
  ]

  isShow = true

  sum(a: number, b: number) { // 两数相加的方法
    return a + b
  }
}

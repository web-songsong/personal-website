# Switch 开关

## props

| 属性          | 名称                   | 类型    | 可选值         | 默认值  |
| ------------- | ---------------------- | ------- | -------------- | ------- |
| disabled      | 禁用状态               | boolean | false/true     | false   |
| modulType     | switch的大小           | string  | big/switch/min | switch  |
| activeText    | switch激活时的文字描述 | string  | -              | -       |
| InactiveText  | switch关闭时的文字描述 | string  | -              | -       |
| activeColor   | switch打开时的背景色   | string  | -              | #409EFF |
| inactiveColor | switch关闭时的背景色   | string  | -              | #C0CCDA |
| animate       | 是否有动画             | boolean | false/true     | true    |
| toogleColor   | switch的滑块颜色       | string  | -              | #fff    |
| flag          | switch的初始状态       | boolean | true/false     | false   |
| textStyle     | switch的文字样式       | object  | -              | -       |

## events
| 事件名称 | 说明                           | 回调参数   |
| -------- | ------------------------------ | ---------- |
| change   | switch状态发生变化时的回调函数 | 新状态的值 |
## demo

* 默认状态

  <svt-switch/>

  ```vue
  <svt-switch/>
  ```

* 禁用状态

  <svt-switch :disabled="true"/>

  ```vue
  <svt-switch :disabled="true"/>
  ```

* 小size状态

  <svt-switch modulType="min"/>

  ```vue
  <svt-switch modulType="min"/>
  ```

* 大size状态

  <svt-switch modulType="big"/>

  ```vue
  <svt-switch modulType="big"/>
  ```

* 左、右（关闭、激活）有文字

  <svt-switch activeText="关闭状态" inactiveText="激活状态" :textStyle="textStyle" />

  ```vue
  <song-switch activeText="关闭状态"
           	 inactiveText="激活状态"
           	 :textStyle="textStyle" />
  
  <script>
      export default {
        data() {
          return {
            textStyle: {
              color: 'yellow',
              fontSize: '25px'
            }
          }
        }
      }
  </script>
  ```

* 配合change事件来改变文本

  <svt-switch :inactiveText="text" @change="change" />

  ```vue
  <svt-switch :inactiveText="text" @change="change" />
  <script>
      export default {
        data() {
          text: '关闭状态'
        }
        methods: {
          change(flag) {
            console.log('callback', flag) 
            this.text = flag ? '激活状态' : '关闭状态'
          }
        }
      }
  </script>
  ```

*  关闭背景颜色、激活背景颜色

  <svt-switch inactiveColor="red" activeColor="yellow" />

  ```vue
  <svt-switch inactiveColor="red"
               activeColor="yellow" />
  ```

* 是否有动画

  <svt-switch :animate="false" />

  ```vue
  <svt-switch :animate="false" />
  ```

* 滑动按钮颜色

  <svt-switch toogleColor="pink" />

  ```vue
  <svt-switch toogleColor="pink" />
  ```

* 初始位置

  <svt-switch :flag="true" />

  ```vue
  <svt-switch :flag="true" />
  ```

<script>
export default {
  data() {
    return {
      text: '关闭状态',
      textStyle: {
        color: 'yellow',
        fontSize: '24px'
      }
    }
  },
  methods: {
    change(flag) {
      this.text = flag ? '激活状态' : '关闭状态'
    }
  }
}
</script>
## 疑难bug整理

### 底部fixed,absolute 键盘遮挡
* 方案一： 关闭键盘自动上推，改用获取键盘高度，手动修改bottom定位

`<Input adjustPosition={false}>`
```js
  const onFocus = (e) => {
    console.log(e.detail)
    setBottomValue(e.detail.height)
  };
  const onBlur = (e) => {
    setBottomValue(0)
  };
```

* 方案二：使用延迟点击，延迟focus，input 上层增加点击事件触发focus

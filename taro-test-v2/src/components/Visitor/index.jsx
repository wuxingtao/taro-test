import Taro, { useState, useEffect,useRef,useCallback } from '@tarojs/taro'
import { View, Text, Label, Input } from '@tarojs/components'
import './index.scss'

const initGroupArr = () => {
  return new Array(4).fill('')
}

function useDebounce(fn, delay, dep = []) {
  const { current } = useRef({ fn, timer: null });
  useEffect(function () {
    current.fn = fn;
  }, [current.fn, fn]);

  return useCallback(function f(...args) {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.fn.call(this, ...args);
    }, delay);
  }, [current.fn, current.timer, delay])
}

const Visitor = () => {
  /* data start*/
  const [inputGroup, setInputGroup] = useState(initGroupArr())
  const [isFocus, setIsFocus] = useState(true)
  const [twoFocus,setTwoFocus] = useState(false)
  const [value,setValue] = useState('')
  const inputRef= useRef(null)
  const inputRefTwo = useRef(null)
  /* data end */
  useEffect(() => {
    // console.log(isFocus,'is Focus - 1111111111')
    // if(!isFocus){
    //   setIsFocus(true)
    // }
  }, [isFocus])
  const onInputHandle = (e) => {
    const nowValue = e.target.value
    const length = nowValue && nowValue.length || 0
    const result = initGroupArr()
    for (let i = 0; i < length; i++) {
      if (nowValue[i]) {
        result[i] = nowValue[i]
      }
    }
    setValue(nowValue)
    setInputGroup(result)
  }
  // TODO: 双input 存在光标问题
  const onBlur = useDebounce((e)=>{
    const oldValue = value
    setValue('')
    console.log('blur focus')
    // setIsFocus(false)
    if(isFocus){
      setIsFocus(false)
      setTwoFocus(true)
    }
    if(twoFocus){
      setIsFocus(true)
      setTwoFocus(false)
    }
    setTimeout(()=>{
      setValue(oldValue)
    },100)
  },500)
  const onFocus = (e,type)=>{

  }
  const handleFocus = ()=>{

  }
  const handleFocus1 = useDebounce((e)=>{
    e.preventDefault()
    // setTwoFocus(true)
    // console.log('bg setFocus true')
    setIsFocus(true)
  },1000)

  return (
    <View className='dialog-container'>
      <View className='input-label fixed-box' onClick={handleFocus}>
        {/*<View className='input-bg ' onClick={onClickBg} />*/}
        <View className='input-group fixed-box'>
          <Input className='input-hide' type='number' maxLength={4}
            id='inputId'
            ref={inputRef}
            value={value}
            autoFocus
            focus={isFocus} onInput={onInputHandle} onBlur={onBlur} onFocus={(e)=>{onFocus(e,1)}}
          />
          <Input className='input-hide' type='number' maxLength={4}
            ref={inputRefTwo}
            value={value}
            focus={twoFocus} onInput={onInputHandle} onBlur={onBlur} onFocus={(e)=>{onFocus(e,2)}}
          />
          <View className='input-group-box'>
            <View className='input-item'>{inputGroup[0]}</View>
            <View className='input-item'>{inputGroup[1]}</View>
            <View className='input-item'>{inputGroup[2]}</View>
            <View className='input-item'>{inputGroup[3]}</View>
          </View>
        </View>

      </View>
    </View>
  )
}

export default Visitor

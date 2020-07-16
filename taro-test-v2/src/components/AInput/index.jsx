import Taro , { useState,useCallback } from '@tarojs/taro';
import { View , Input } from '@tarojs/components';
import { useDebounce } from '../../uses/useUtils';
import './index.scss'

/**
 * 兼容ios 键盘遮挡
 * @param props
 * @returns {*}
 * @constructor
 */
const AInput = (props) => {
  const [isFocus, setIsFocus] = useState(props.focus)
  const [info] = useState(Taro.getSystemInfoSync())
  const isAndroid = (info && info.platform === 'android')

  /**
   * 适配多行切换focus
   * @type {f}
   */
  const handlePolyFill = useDebounce((e) => {
    setIsFocus(true)
    props.onFocus && props.onFocus(e)
  }, 600)

  /**
   * 适配同行切换focus
   * @type {(...args: any[]) => any}
   */
  const handleFast = useCallback((e) => {
    Taro.hideKeyboard({
      success: () => {
        setIsFocus(true)
        props.onFocus && props.onFocus(e)
      },
      fail: () => {
        handlePolyFill(e)
      }
    })
  }, [handlePolyFill, props])

  const handleFocus = useCallback((e) => {
    e.preventDefault()
    if (props.parallel) {
      handleFast(e)
    } else {
      handlePolyFill(e)
    }
  }, [handleFast, handlePolyFill, props.parallel])

  const handleBlur = (e) => {
    Taro.hideKeyboard()
    setIsFocus(false)
    props.onBlur && props.onBlur(e)
  }

  const propsIos = {
    ...props,
    onFocus: handleFocus,
    onBlur: handleBlur
  }
  return (
    <View className='netc__input-container flex flex_1'>
      {
        isAndroid ?
          <Input type={props.type}
            className={`my-class ${props.className}`}
            value={props.value}
            maxLength={props.maxLength}
            placeholderStyle={props.placeholderStyle}
            placeholder={props.placeholder}
            placeholderClass={props.placeholderClass}
            disabled={props.disabled}
            cursorSpacing={props.cursorSpacing}
            focus={props.focus} onFocus={props.onFocus} onBlur={props.onBlur}
            onInput={props.onInput}
            onConfirm={props.onInput}
          />
          :
          <View className='flex flex_1' onClick={handleFocus}>
            <Input type={propsIos.type}
              className={`no-event my-class ${propsIos.className}`}
              value={propsIos.value}
              maxLength={propsIos.maxLength}
              placeholderStyle={propsIos.placeholderStyle}
              placeholder={propsIos.placeholder}
              placeholderClass={propsIos.placeholderClass}
              disabled={propsIos.disabled}
              cursorSpacing={propsIos.cursorSpacing}
              focus={isFocus} onBlur={propsIos.onBlur}
              onInput={propsIos.onInput}
              onConfirm={propsIos.onInput}
            />
          </View>
      }
    </View>

  )
}

AInput.options = {
  addGlobalClass: true
}

AInput.externalClasses = ['my-class']
export default AInput;

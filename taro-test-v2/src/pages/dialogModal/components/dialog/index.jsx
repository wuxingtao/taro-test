import Taro, { useContext, useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const IDialog = props => {

  const {
    show,
    spacing,
    title,
    defaultPadding,
    commonPadding,
    children,
    onClose,
    bottom
  } = props

  const stop = e => {
    e.stopPropagation()
  }

  const { isPhoneX } = true
  const [padding, setPadding] = useState('')
  useEffect(() => {
    if (defaultPadding) return setPadding('0')
    if (commonPadding) return setPadding(isPhoneX ? '150rpx' : '140rpx')
    setPadding(isPhoneX ? '190rpx' : '180rpx')
  }, [defaultPadding, commonPadding, isPhoneX])

  return (
    <View className='dialog-box'>
      <View className={`shadow ${show && 'shadow-show'}`} onClick={() => onClose && onClose()} catchtouchmove>
        <View className={`contant ${show && 'dialog-slide'}`} style={`bottom:${bottom}px`} onClick={stop}>
          <View className='content'>
            <View className='content_title'>{title}</View>
            <View className='content_images' onClick={() => onClose && onClose()}>X close</View>
          </View>
          <View className={`spacing-box ${spacing}`} style={`padding-bottom:${padding}`}> {show && children}</View>
        </View>
      </View>
    </View>
  )
}

IDialog.defaultProps = {
  show: false,
  spacing: '',
  defaultPadding: false
}

export default IDialog

import Taro , { useState } from '@tarojs/taro';
import { View,Input } from '@tarojs/components';
import IDialog from './components/dialog';
import Ainput from '../../components/AInput';

const DialogModal = () => {
  const [declarativeValue] = useState(0);
  const [collectionAmount] = useState(0);
  const [bottomValue,setBottomValue] = useState(0)

  const onFocus = (e) => {
    console.log(e.detail)
    // setBottomValue(e.detail.height)
    if(wx && wx.hideKeyboard){
      wx.hideKeyboard()
    }
  };
  const onBlur = (e) => {
    if(wx && wx.hideKeyboard){
      wx.hideKeyboard()
    }
    // setBottomValue(0)
  };
  const onKeyboardHeightChange = (e) => {

  };

  return (
    <View>
      <IDialog show title='title111' bottom={bottomValue}>
        <View className='addServiceContainer'>
          <View>
            {/* 回单类型 */}
            {
              <View className='addedRow'>
                <View className='addedTitle'>回单类型</View>
                <View className='addedContent'>
                  {
                    1111111111
                  }
                </View>
              </View>
            }
            {/* 保价声明 */}
            {
              <View className='addedRow'>
                <View className='addedTitle'>保价声明(元)</View>
                <View className='addedContent'>
                  <Ainput type='number' cursorSpacing={200} className='addedInput' placeholderStyle='color:#CCCCCC'
                    maxlength={6} placeholder='请输入金额' value={declarativeValue}
                  />
                </View>
              </View>
            }
            {/* 代收货款 */}
            {
              <View className='addedRow'>
                <View className='addedTitle'>代收货款(元)</View>
                <View className='addedContent'>
                  <Ainput type='number' cursorSpacing={250} className='addedInput' placeholderStyle='color:#CCCCCC'
                    maxlength={6} placeholder='请输入金额'
                    value={collectionAmount}
                  />
                </View>
              </View>
            }
          </View>
        </View>
      </IDialog>
    </View>
  );
};
export default DialogModal;

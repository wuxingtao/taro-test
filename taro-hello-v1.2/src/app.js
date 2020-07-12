import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  config = {
    pages: [
      'pages/members/index',
      'pages/index/index'
    ],
    tabBar: {
      color: '#828689',
      selectColor: '#7058E1',
      borderStyle: 'white',
      backgroundColor: '#ffffff',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: './assets/tabs/munu-home-1.png',
          selectedIconPath: './assets/tabs/munu-home-2.png',
          text: '首页'
        },
        {
          pagePath: 'pages/members/index',
          iconPath: './assets/tabs/munu-home-1.png',
          selectedIconPath: './assets/tabs/munu-home-2.png',
          text: '会员'
        },
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

class Members extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lists: []
    }
  }

  config = {
    navigationBarTitleText: '会员页'
  }

  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }

  componentWillMount () {
    console.log(this.$router)
  }

  componentDidMount () {
    console.log('did');
    this.handleRefresh();
  }

  componentWillUnmount () {
    console.log('willUnmount')
  }

  componentDidShow () {
    console.log('didShow')
  }

  componentDidHide () {
    console.log('didHide')
  }

  onReachBottom () {
    console.log('button')
    this.handleRefresh();
  }

  /**
   * 更新list列表
   */
  handleRefresh(){
    setTimeout(() => {
      const {lists} = this.state;
      const length = lists.length;
      let result = [];
      if(length === 0){
        result = Object.keys(Array.apply(this, { length: 20 }));
      }else{
        let data = []
        for(let i=length;i<length+10;i++){
          data.push(i);
        }
        result = [...lists,...data]
      }
      this.setState(() => {
        return {
          lists: result
        }
      })
    }, 1000)
  }

  render () {
    const { lists } = this.state
    return (
      <View className='xt-wrapper'>
        <View className='f_s_64'>member pages</View>
        <View className='member-lists'>
          {
            lists.map((item, index) => {
              return <View className='member-item f_s_34 t_a_c' key={index}>{item}</View>
            })
          }
        </View>

        <View>1234</View>
      </View>
    )
  }
}

export default Members

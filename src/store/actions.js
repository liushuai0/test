import {
  reqUserInfo,
  reqHomelist
} from '../api'

import {
  RECEIVE_USER_INFO,
  RECEIVE_HOMELIST
} from './mutation-types'

export default{
  async getUserInfo({commit}){
    const result=await reqUserInfo()
    if (result.code === 1) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },

  async getHomelist({commit}){
    const result=await reqHomelist()
    if (result.code === 1) {
      console.log("aaaaa");
      const homeList = result.data
      commit(RECEIVE_HOMELIST, {homeList})
    }
  },


}

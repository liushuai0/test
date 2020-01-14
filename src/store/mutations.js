import Vue from 'vue'

import {RECEIVE_USER_INFO} from './mutation-types'
import {RECEIVE_HOMELIST} from './mutation-types'


export default{
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo=userInfo
  },
  [RECEIVE_HOMELIST](state,{homeList}){
    state.homeList=homeList
  }

}

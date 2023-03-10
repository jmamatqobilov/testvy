import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    data:[]
  },
  
  mutations: {
    getList(state,jangList){
      state.data = jangList
    }
  },
  actions: {
    jangList({commit}){
      return axios.get('https://jang.novatio.uz/api/history')
      .then((response)=>{
        console.log(response.data)
        console.log('data keldi')
        commit('getList',response.data)
      })
    }
  },
  getters: {
    JANGLIST(state){
      return state.data
    }
  },
  modules: {
  }
})

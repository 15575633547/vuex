import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'



Vue.use(Vuex)
Vue.config.productionTip = false

// const store = new Vuex.Store({
//   state:{//状态值
//     count:0
//   },

//   mutations: {
  //改变store中count的值
//在mail.js中增加一个增加count的逻辑
//     increment(state){
//       state.count++
//     }
//   },
//使用action异步增加count
//   actions: {
//     increment2(action){
//       setTimeout(() => {
//         action.commit('increment')
//       }, 2000);
//     }
//   },
//缓存getter
//   getters: {
//     doubleCount(state) {
//       return state.count*2
//     }
//   }
// })

//小米商城购买
const store = new Vuex.Store({
  state:{//状态值
    count:10,
    
  },
 
  mutations: {
    increment(state){
         state.count--
    },
    increment2(state){
      state.count-=2
    },

    increment3(state,n){
      state.count-=n;
    }

  },
  // actions: {
  //   increment2(action){
  //     setTimeout(() => {
  //       action.commit('increment')
  //     }, 100);
  //   }
  // },
  // getters: {
  //   twoCount(state) {
  //     return state.count-=2
  //   }
  // }
})


new Vue({
  // store,
  store,
  
  render: h => h(App),
}).$mount('#app')
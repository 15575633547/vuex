<template>
  <div id="app">
    <!-- {{count}}
    <span>缓存getter:</span>{{$store.getters.doubleCount}}
    <br>
    <button @click="$store.commit('increment')">count++</button>
    <br>
    <button @click="$store.dispatch('increment2')">count++</button> -->
  

  <span>小米9</span>
  <span>数量: {{count}}</span>
   <br>
    <button :disabled="count<=0" @click="$store.commit('increment')">购买1个</button>
    <br>
    <button :disabled="count<=0" @click="$store.commit('increment2')">购买2个</button> 
  <br>
   <input type="text" v-model="input1"/>
   <input type="button" value="购买" :disabled="count<=0" @click="$store.commit('increment3',input1)"/>
  
 
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    // count(){
    //   return this.$store.state.count
    // }
    count(){
      return this.$store.state.count
    }, 
  },

  data () {
      return {
        input1:'',
      }
    },

   
}
</script>

<style>

</style>
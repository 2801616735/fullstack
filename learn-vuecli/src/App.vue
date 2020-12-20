<!--vue-cli默认创建-->
<!--<template>-->
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
<!--  <router-view/>-->
<!--</template>-->

<!--<style lang="less">-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--#nav {-->
<!--  padding: 30px;-->

<!--  a {-->
<!--    font-weight: bold;-->
<!--    color: #2c3e50;-->

<!--    &.router-link-exact-active {-->
<!--      color: #42b983;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->

<template>
  <p>组件</p>
  <navbar></navbar>
  <sidebar></sidebar>
  <br/>
  <h1>世界，你好!</h1>
  <p>我是小贝</p>
  <button @click="showFunc()">展示</button>
  <ul>
    <li v-for="(data,index) in dataList" :key="index">{{data}}-{{index}}</li>
  </ul>
  <input type="text" ref="mytext"/><button @click="addFunc()">添加</button>
</template>

<script>
import navbar from './components/navbar'
import sidebar from './components/sidebar'
import axios from 'axios' // 需要cnpm install --save axios
// 相当于是之前Vue.componet的写法
export default {
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    showFunc () {
      this.dataList = ['11111111', '2222222222222', '33333333333']
    },
    addFunc () {
      console.log(this.$refs.mytext.value)
      this.dataList.push(this.$refs.mytext.value)
    }
  },
  components: {
    navbar: navbar,
    sidebar: sidebar
  },
  mounted () {
    // 出现跨域，因此需要在根目录下配置vue.config.js配置反向代理,配置后，需要重启服务
    // axios.get('https://www.baidu.com/sugrec').then(res => {
    //   console.log(res)
    // })
    axios.get('/sugrec').then(res => {
      console.log(res)
    })
  }
}
</script>

<style>
  p {color: red;}
  li {
    color: blue;
  }
</style>

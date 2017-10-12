<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/Header.vue'
  export default {
  name: 'app',
  components:{
    MyHeader:header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 625px;
}

.el-tabs__item:hover{
  color: #fff;
}
.el-tabs__item.is-active{
  color: #fff;
}
.el-tabs__header{
  border: none;
}
.el-menu-item{
  color: #fff;
}
.el-menu-item>a{
  text-decoration: none;
}
.el-menu-item:hover{
  color:#20a0ff;
}
.el-menu-item.is-active{
  background-color: #eef1f6;
  border-bottom: 5px solid #20a0ff;
}
</style>

<template>
  <div id="header">
    <el-row>
      <el-col :span="6">
        <div class="logo-area">
          <img class="logo-img" src="../../assets/logo.png" alt="">
        </div>
      </el-col>
      <el-col :span="13">
        <div class="middle-ul">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <router-link to="/home"><el-menu-item index="1">处理中心</el-menu-item></router-link>
            <router-link :to="{path:'/home2'}"><el-menu-item index="2">处理中心2</el-menu-item></router-link>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="right-avatar">
          <el-dropdown>
            <!--<span class="el-dropdown-link">-->
            <div>
              <img id="avatar-img" src="../../assets/ava.jpg" class="el-dropdown-link ava-img" alt="" >
              <label for="avatar-img" class="username-span">{{username}}</label>
            </div>
            <!--</span>-->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled >{{username}}</el-dropdown-item>
              <el-dropdown-item class="danger">黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>



  </div>

</template>

<script>
  export default {
    data() {
      return {
        username: 'Charlie',
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header{
    width: 100%;
    height: 60px;
    text-align: left;
    display: inline-block;
    background-color: #2c3e50;;
  }
 .logo-area{
   height: 60px;
   text-align: center;
 }
 .middle-ul{
   float: left;
 }
  .logo-img{
    height: 50%;
    /*width: 50%;*/
    margin-top: 15px;
  }
.right-avatar{
  float: right;
  margin: 10px 10px;
}
  .ava-img{
    height:40px;
    border-radius:50%;
  }
  .username-span{
    color: #fff;
    float: right;
    padding: 10.5px 5px;
  }
  .username-span:hover{
    color: #ccc;
  }
  .middle-ul>.el-tabs{
    padding-top: 18px;
  }
  .el-menu-demo{
    background-color: transparent;
  }
</style>

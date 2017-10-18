<template>
    <div class="AccountInfo">
        <div>
          <strong v-if="!isMain">监测账号信息</strong>
          <strong v-else="">主账号信息</strong>
        </div>
        <div style="margin-top: 20px; text-align: center">
          <img class="ava-img70" src="http://q.qlogo.cn/qqapp/101204453/821FBBF23166EFAC8D68F1C596639C33/100" alt="">
        </div>

        <!--</el-form-item>-->
        <el-form-item label="昵称:">
          {{ accountInfo.nickname }}
        </el-form-item>
        <el-form-item label="手机号码:">
          <span>{{ accountInfo.phone }}</span>
        </el-form-item>
    </div>
</template>

<script>
    //  import Axios from 'axios'
    import { mapGetters } from 'vuex'
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    export default {
      components: {ElButton},
      name: 'AccountInfo',
        props:['isMain'],
        data() {
            return {

            }
        },
      computed:{

        ...mapGetters([
          'accounts',
          'mainAccount'
        ]),
        accountInfo(){
          console.log(this.mainAccount);
          if(this.isMain){
            return this.mainAccount || {}
          }
          else {
            console.log(this.accounts);
            return this.accounts[0] || {}
          }
        }
      },
        methods: {
          a(){
//          console.log(this.$store.state)
        }
//    get(){
//      Axios.get("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=aaaa").then(function (res) {
//        console.log(res);
//      }).catch(function (err) {
//        console.log(err);
//
//      })
//    }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

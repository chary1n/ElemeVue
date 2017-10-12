<template>
    <div class="StepOne">
      <el-card class="box-card step-1-box">
        <el-form label-width="100px" >

          <el-form-item label="选择类型">
            <el-radio-group size="large" v-model="radio3">
              <el-radio-button label="detect_mode">监测模式</el-radio-button>
              <el-radio-button label="自给自足模式" :disabled="true"></el-radio-button>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="监测账号">
            <el-col :span="16">
              <el-input v-model="accountInfo.detectACC.codeUrl"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="primary" @click="toThridLogin">饿了么登录</el-button>
            </el-col>
          </el-form-item>

          <el-form-item label="主账号">
            <el-col :span="16">
              <el-input v-model="accountInfo.mainAcc.codeUrl"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="primary" @click="toThridLogin">饿了么登录</el-button>
            </el-col>
          </el-form-item>

          <el-form-item label="手机号码">
            <el-input></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="nextStep">下一步</el-button>
          </el-form-item>
        </el-form>
        <!--<span>选择类型:</span>-->
      </el-card>

    </div>
</template>

<script>
    import Axios from 'axios'
    import Utils from '../../assets/js/Utils'
    import UrlTools from '../../assets/js/UrlTools'
    import AccountInfo from '../../model/AccountInfo'
    export default {
        name: 'StepOne',
        props:['curStep'],
        data() {
            return {
              radio3: 'detect_mode',
              accountInfo:{
                detectACC:new AccountInfo({}),
                mainAcc:new AccountInfo({}),

              }
            }
        },
      computed:{
      },
        methods: {
          comDetectCode(){
            if(this.accountInfo.detectACC.codeUrl == ''){
              return ''
            }
            var ret = UrlTools.urlParse(this.accountInfo.detectACC.codeUrl);
            console.log(ret);
            if (ret.code){
              return ret.code
            }
            return ''
          },
          comMainCode(){
            if(this.accountInfo.mainAcc.codeUrl == ''){
              return ''
            }
            var ret = UrlTools.urlParse(this.accountInfo.mainAcc.codeUrl);
            console.log(ret);
            if (ret.code){
              return ret.code
            }
            return ''
          },
          toThridLogin(){
            this.showAlert('即将跳转到饿了么QQ登录页面',function () {
              var url = 'https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=101204453&daid=383&pt_skey_valid=0&style=35&s_url=http://connect.qq.com&refer_cgi=authorize&which=&response_type=code&client_id=101204453&redirect_uri=https://h5.ele.me/hongbao/#hardware_id=&is_lucky_group=True&lucky_number=6&track_id=&platform=4&sn=29d20db7afb3f02d&theme_id=569&device_id=&response_type=code&scope=get_user_info';
              var a = window.open(url,'newwindow','height=500,width=400,top=0,left=0');
            },function () {
              console.log("a");

            });
          },
          nextStep(){
            this.getUserInfo(this.comDetectCode(), function (res) {
              console.log(res);
              if (res.data){
                this.accountInfo.detectACC.setData(res.data)
              }
              else {
                //登录失败
              }
            },function (err) {
              console.log(err);
            })
            return;
            if (this.current_step <= 3) this.current_step ++;
            console.log(this.current_step);
            this.$router.push('/home/step_two');
          },
        },
      mixins:[Utils],
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

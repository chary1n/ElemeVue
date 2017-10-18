<template>
    <div class="StepOne">
      <el-card class="box-card step-1-box">
        <el-form label-width="100px"
                 v-loading="loading"
                 :element-loading-text="loading_msg">

          <el-form-item label="选择类型">
            <el-radio-group size="large" v-model="radio3">
              <el-radio-button label="detect_mode">监控模式</el-radio-button>
              <el-radio-button label="自给自足模式" :disabled="true"></el-radio-button>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="监测账号">
            <el-col :span="16">
              <el-input v-model="detectCodeUrl"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="primary" @click="toThridLogin">饿了么登录</el-button>
            </el-col>
          </el-form-item>

          <el-form-item label="主账号">
            <el-col :span="16">
              <el-input v-model="mainCodeUrl"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="primary" @click="toThridLogin">饿了么登录</el-button>
            </el-col>
          </el-form-item>

          <el-form-item label="手机号码">
            <el-input v-model="phone"></el-input>
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
    import {AccountInfo} from '../../model/AccountInfo'
    import {mapState, mapGetters, mapActions} from 'vuex'
    import * as types from '../../store/mutation-types'
    export default {
        name: 'StepOne',
//        props:['curStep'],
        computed:{
          ...mapGetters([
            'loading',
            'loading_msg',
          ])
//          loading(){
//            console.log(this.$store.getters);
//            return this.$store.getters.loading;
//          },
        },
        data() {
            return {
//              loading_msg:'正在获取检测账号登录信息...',
//              loading: '',
              radio3: 'detect_mode',
              phone: '',
              mainCodeUrl:'',
              detectCodeUrl:'',
            }
        },
        methods: {
          ...mapActions([
            'changeLoadingMsg',
            'changeLoadingState',
            'addAccount',
          ]),
          comDetectCode(){
            if(this.detectCodeUrl == ''){
              return ''
            }
            var ret = UrlTools.urlParse(this.detectCodeUrl);
            console.log(ret);
            if (ret.code){
              return ret.code
            }
            return ''
          },
          comMainCode(){
            if(this.mainCodeUrl == ''){
              return ''
            }
            var ret = UrlTools.urlParse(this.mainCodeUrl);
            console.log(ret);
            if (ret.code){
              return ret.code
            }
            return ''
          },
          toThridLogin(){
            this.showAlert('即将跳转到饿了么QQ登录页面',function () {
              var url = 'https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=101204453&daid=383&pt_skey_valid=0&style=35&s_url=http://connect.qq.com&refer_cgi=authorize&which=&response_type=code&client_id=101204453&redirect_uri=https://h5.ele.me/hongbao/#hardware_id=&is_lucky_group=True&lucky_number=6&track_id=&platform=4&sn=29d20db7afb3f02d&theme_id=569&device_id=&response_type=code&scope=get_user_info';
              var a = window.open(url);

            },function () {
              console.log("a");

            });
          },
          nextStep(){
            var self = this;
            self.changeLoadingState(true);
            this.getUserInfo(this.comDetectCode(), function (res) {
              self.changeLoadingState(false);
              console.log(res);
              if (res.data){
                self.addAccount({isMain:false,account:res.data});
                console.log(res.data);
                self.to_next_step();
                self.changeLoadingState(true);
                self.changeLoadingMsg("正在获取主账号登录信息...");
                self.getUserInfo(self.comMainCode(), function (res1) {
                  self.changeLoadingState(false);
                  re1.data.phone = self.phone;
                  self.addAccount({isMain:true,account:res1.data});
                  console.log('main'+res1.data);
                  //得到数据后 跳转

                },function () {
                  //登录失败
                  self.changeLoadingState(false);
                  self.showAlert('获取登录信息失败，请重试',function () {
                  },function () {
                  });
                })
              }
              else {
                self.changeLoadingState(false);
                //登录失败
                self.showAlert('获取登录信息失败，请重试',function () {
                },function () {
                });
              }
            },function (err) {
              console.log(err);
            })
          },
        to_next_step(){
          if (this.current_step <= 3) this.current_step ++;
          console.log(this.current_step);
          this.$router.push('/home/step_two');
        }
        },
      mixins:[Utils],
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

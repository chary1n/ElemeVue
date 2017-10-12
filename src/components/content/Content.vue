<template>
    <div id="content">
      <el-row>
        <el-col :span="3">
        a
        </el-col>
        <el-col class="step-area" :span="18">

          <div class="step-area-top">

            <el-steps :space="200" :active="current_step" :center="true">
              <el-step title="设置账号信息" icon="setting"></el-step>
              <el-step title="步骤 2" icon="upload"></el-step>
              <el-step title="步骤 3" icon="picture"></el-step>
            </el-steps>
          </div>
          <div class="step-area-content">
            <router-view name="step" :curStep="current_step"></router-view>
            <!--<el-card class="box-card step-1-box">-->
              <!--<el-form label-width="100px" >-->

              <!--<el-form-item label="选择类型">-->
                <!--<el-radio-group size="large" v-model="radio3">-->
                  <!--<el-radio-button label="detect_mode">监测模式</el-radio-button>-->
                  <!--<el-radio-button label="自给自足模式" :disabled="true"></el-radio-button>-->
                <!--</el-radio-group>-->
              <!--</el-form-item>-->

                <!--<el-form-item label="监测账号">-->
                  <!--<el-col :span="16">-->
                    <!--<el-input></el-input>-->
                  <!--</el-col>-->
                  <!--<el-col :span="8">-->
                    <!--<el-button type="primary" @click="toThridLogin">饿了么登录</el-button>-->
                  <!--</el-col>-->
                <!--</el-form-item>-->

                <!--<el-form-item label="主账号">-->
                  <!--<el-col :span="16">-->
                    <!--<el-input></el-input>-->
                  <!--</el-col>-->
                  <!--<el-col :span="8">-->
                    <!--<el-button type="primary" @click="toThridLogin">饿了么登录</el-button>-->
                  <!--</el-col>-->
                <!--</el-form-item>-->

                <!--<el-form-item label="手机号码">-->
                    <!--<el-input></el-input>-->
                <!--</el-form-item>-->

                <!--<el-form-item>-->
                  <!--<el-button type="primary" @click="nextStep">下一步</el-button>-->
                <!--</el-form-item>-->
              <!--</el-form>-->
            <!--&lt;!&ndash;<span>选择类型:</span>&ndash;&gt;-->
            <!--</el-card>-->

          </div>

        </el-col>

        <el-col :span="3">

        </el-col>
      </el-row>

    </div>
</template>

<script>
    //  import Axios from 'axios'
    import ElCol from "element-ui/packages/col/src/col";
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item.vue";
    export default {
      components: {
        ElFormItem,
        ElCol},
      name: 'content',
      props:['myMsg'],
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                current_step:1,
            }
        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .step-area{
    /*border: 1px solid #0c0c0c;*/
  }
.step-area, .step-area-content{
  padding-top: 20px;
}
  .step-1-box{
    text-align: center;
  }
</style>

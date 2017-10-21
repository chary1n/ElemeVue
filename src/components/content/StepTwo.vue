<template>
    <div class="StepTwo">
      <el-card class="box-card step-2-box">

        <el-form label-width="100px">
          <el-row>
          <el-col :span="12" class="form-left">
            <AccountInfo :isMain="false"></AccountInfo>
          </el-col>
          <el-col :span="12" class="form-right">
            <AccountInfo :isMain="true"></AccountInfo>
          </el-col>
        </el-row>
          <el-row class="hongbao-url-area">
            <el-col  :span="12">
              <el-form-item label="红包地址" >
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="1">
                <el-button type="primary" @click="startDetect">开始监测</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <EventLog></EventLog>
            </el-col>
          </el-row>

        </el-form>
      </el-card>
    </div>
</template>

<script>
    //  import Axios from 'axios'
    import {mapActions} from 'vuex'
    import EventLog from '../content/EventLog.vue';
    import ElCol from "element-ui/packages/col/src/col";
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item.vue";
    import AccountInfo from '../../components/content/AccountInfo.vue'
    import ElButtonGroup from "../../../node_modules/element-ui/packages/button/src/button-group.vue";
    import {ElemeCoupon, IS_CONTINUE}from '../../assets/js/ElemeCoupon'
    export default {
      components: {
        ElButtonGroup,
        ElFormItem,
        ElCol,
        AccountInfo,
        EventLog,
      },
      name: 'StepTwo',
        data() {
            return {
              radio3: 'detect_mode',
            }
        },
        methods: {
          ...mapActions([
            'updateLogMsg'
          ]),
          startDetect(){
            ElemeCoupon("https://h5.ele.me/hongbao#hardware_id=&is_lucky_group=True&lucky_number=7&track_id=&platform=4&sn=10d3f051168c68de&theme_id=1489&device_id=");

            this.updateLogMsg({time1:new Date().toTimeString(),msg:'msgadasdasdasdamsgadasdasdasdamsgadasdasdasda'});
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-left{
  border-right: 1px solid #20a0ff;
  border-bottom: 1px solid #20a0ff;
  text-align: center;
}
.form-right{
  border-bottom: 1px solid #20a0ff;
  text-align: center;
}
.step-2-box .el-form-item{
  margin-bottom:0px;
}
  .hongbao-url-area{
    margin-top: 30px;
  }
</style>

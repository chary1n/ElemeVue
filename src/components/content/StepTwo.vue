<template>
    <div class="StepTwo">
      <el-card class="box-card step-2-box">

        <el-form label-width="100px">
          <el-row>
          <el-col :span="12" class="form-left">
            <AccountInfo></AccountInfo>
          </el-col>
          <el-col :span="12" class="form-right">
            <AccountInfo></AccountInfo>
          </el-col>
        </el-row>
        </el-form>
      </el-card>
    </div>
</template>

<script>
    //  import Axios from 'axios'
    import ElCol from "element-ui/packages/col/src/col";
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item.vue";
    import AccountInfo from "../../components/content/AccountInfo.vue"
    export default {
      components: {
        ElFormItem,
        ElCol,
        AccountInfo},
      name: 'StepTwo',
        data() {
            return {
              radio3: 'detect_mode',
            }
        },
        methods: {
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
</style>

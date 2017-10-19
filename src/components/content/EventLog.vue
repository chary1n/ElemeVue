<template>
    <div class="EventLog">
      <el-card class="box-card event-log">
        <el-table
          :data="log_msg"
          :row-class-name="rowClass"
          >
          <el-table-column
            prop="time1"
            label="时间"
          >
          </el-table-column>
          <el-table-column
            prop="msg"
            label="消息"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </div>
</template>

<script>
    //  import Axios from 'axios'
    import { mapGetters, mapActions} from 'vuex'
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    export default {
      components: {ElButton},
      name: 'EventLog',
      data() {
            return {

            }
        },
      computed:{

        ...mapGetters([
          'log_msg'
        ]),
      },
        methods: {
          ...mapActions([
            'updateLogMsg'
          ]),
          rowClass(row, index) {
            if (index === 0) {
              return 'info-row';
            }
            return '';
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-log{
  margin-top: 20px;
}
.item {
  padding: 18px 0;
}

</style>

<style>
  .el-table .info-row {
    background: #c9e5f5;
  }
</style>

<template>
  <div id="part7">
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      :row-style="tableRowStyle"
      :header-cell-style="tableRowStyle">
      <el-table-column
        prop="content"
        label="工作内容"
        style="width: 50%">
      </el-table-column>
      <el-table-column
        prop="goal"
        label="工作目标"
        style="width: 50%">
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="22" :offset="1">
        <el-button class="titlep">工作结果</el-button>
        <el-table
          stripe
          border
          :data="responseData"
          style="width: 100%;"
          :row-style="tableRowStyle"
          :header-cell-style="tableRowStyle">
          <el-table-column prop="name" label="名称"  style="width: 25%"></el-table-column>
          <el-table-column prop="doc" label="输出"  style="width: 50%"></el-table-column>
          <el-table-column prop="remark" label="备注"  style="width: 25%"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          content: '前后端联调',
          goal: '实现前端To do list项目对接 java后台接口'
        }],
        responseData: [],    // 返回的数据
        apiTaskUrl: '/part',      // 后端接口
        whatPart: 'part7'    // 请求的数据类型
      }
    },
    methods: {
      tableRowStyle ({row, rowIndex}) {
        return 'background-color:#3f5c6d2c;'
      },
      getInstruction () {
        // alert('正在获取part7 请稍等')
        // 从后端获取数据给responseData
        let localUrl = this.$ajxj.defaults.baseURL
        let api = this.apiTaskUrl
        this.$ajxj
          .post(api, {whatPart: this.whatPart})
          .then(response => {
            console.log('backend url: ' + localUrl + api)
            // 赋值给返回对象进行输出
            this.responseData = [
              {
                name: JSON.parse(JSON.stringify(response.data[0])).name,
                doc: JSON.parse(JSON.stringify(response.data[0])).doc,
                remark: JSON.parse(JSON.stringify(response.data[0])).remark
              }, {
                name: JSON.parse(JSON.stringify(response.data[1])).name,
                doc: JSON.parse(JSON.stringify(response.data[1])).doc,
                remark: JSON.parse(JSON.stringify(response.data[1])).remark
              }
            ]
          })
          .catch(error => {
            console.log('error: ' + error)
          })
      }
    },
    mounted () {
      this.getInstruction()
    }
  }
</script>

<style>
  .titlep{
    text-align:left;
    font-size:18px;
    font-weight:bold;
    margin:20px 0 20px 0;
    list-style-type: circle;
    color: slategray;
  }
  .setTable {
    border-color: #3a8ee6;
    background-color: #3f5c6d2c;
  }
</style>

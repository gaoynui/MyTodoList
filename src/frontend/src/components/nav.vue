<template>
      <!-- :router='true' 意思是导航中 index属性将指定路由地址 -->
  <el-col :span="40">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
      <el-menu-item index="/part1">
        <i class="el-icon-document"></i>
        <span slot="title">2019.10.16-2019.10.23</span>
      </el-menu-item>
      <el-menu-item index="/part2">
        <i class="el-icon-document"></i>
        <span slot="title">2019.10.24-2018.10.29</span>
      </el-menu-item>
      <el-menu-item index="/part3">
        <i class="el-icon-document"></i>
        <span slot="title">2019.10.30-2019.11.13</span>
      </el-menu-item>
      <el-menu-item index="/part4">
        <i class="el-icon-document"></i>
        <span slot="title">2019.11.14-2019.11.28</span>
      </el-menu-item>
      <el-menu-item index="/part5">
        <i class="el-icon-document"></i>
        <span slot="title">2019.11.29-2019.12.6</span>
      </el-menu-item>
      <el-menu-item index="/part6">
        <i class="el-icon-document"></i>
        <span slot="title">2019.12.9-2019.12.23</span>
      </el-menu-item>
      <el-menu-item index="/part7">
        <i class="el-icon-document"></i>
        <span slot="title">2019.12.24-2020.1.10</span>
      </el-menu-item>
      <el-menu-item index="/part8">
        <i class="el-icon-document"></i>
        <span slot="title">2020.1.13-2020.1.17</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
  export default {
    data: function () {
      return {
        // 默认激活的路由地址
        defaultActive: '/part1'
      }
    },
    methods: {
      // 打开事件
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      // 关闭事件
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

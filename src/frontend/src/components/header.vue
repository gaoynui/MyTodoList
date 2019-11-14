<template>
    <div>
      <!-- 通过$store.state.user 可以获得登陆时记录的用户 -->

      <el-row>
        <h2 class="title">My Todo Lists</h2>
        <el-col :span="8" :offset="17">
          <el-button type="info" class="userIcon">{{$store.state.user.name}}</el-button>
          <el-button type="info" @click="onLogout" class="signout">注销</el-button>
        </el-col>
      </el-row>

    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import ElCol from 'element-ui/packages/col/src/col'

  export default {
    components: {ElCol},
    methods: {
      // 从store.actions中引入方法
      ...mapActions(['logOut', 'loginFail']),
      onLogout: function () {
        this.logOut() // 退出登陆，将user重置为空
        this.loginFail()  // 设置isLogging 为false
      }
    }
  }
</script>

<style>
.title {
  color: khaki;
  size: 20px;
  margin-right: auto;
}
</style>

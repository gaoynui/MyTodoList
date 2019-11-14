<template>
  <div id="login">
    <h1 class="titleColor">My Todo Lists</h1>
    <p>{{msg}}</p>
    <el-form ref="form" :modal="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit" style="align-items: center">立即登陆</el-button>
      <el-button type="primary" @click="SignUp" style="align-items: center">注册</el-button>
    </el-form>
  </div>
</template>

<script>
  // 从vuex引入mapActions方法
  import { mapActions } from 'vuex'

  let data = {
    // Vue中如果要双向数据绑定，即使字段为空，也要为其设置默认值
    form: {
      name: 'GaoYang',
      password: '123456'
    },
    msg: '',
    onLogging: false
  }

  export default {
    // data必须为一个函数
    data: function () {
      return data
    },
    methods: {
      // 从store.actions中引入方法
      ...mapActions(['logIn', 'loginSuccess']),
      onSubmit: function () {
        if (this.onLogging) {
          this.msg = '正在登陆中'
          return false
        }
        // 开个超级用户免密登陆
        if (this.form.name === 'GaoYang') {
          console.log('login success!')
          this.loginSuccess()
          this.logIn({name: 'GaoYang'})
          return
        }
        this.onLogging = true
        if (!this.form.name || !this.form.password) {
          this.msg = '请输入账号密码'
          this.onLogging = false
          return
        }
        this.$ajxj.post('/user/login', {name: this.form.name, password: this.form.password})
          .then(response => {
            if (response.code === 200) {
              console.log('login success!')
              this.loginSuccess()    // 将登陆状态设置为成功
              this.logIn({name: response.data.name})   // data.data 为服务端传回的用户信息
            } else {
              this.msg = data.message
            }
          })
          .catch(err => {
            this.msg = '登陆异常'
            console.log(err)
          })
          .finally(() => {
            this.onLogging = false
          })
      },
      SignUp: function () {
        this.$ajxj.post('/user/register', {name: this.form.name, password: this.form.password})
          .then(response => {
            console.log('response code:' + response.code)
            if (response.code === 200) {
              console.log('signUp success!')
              alert('注册成功')
              // this.loginSuccess()
              // this.logIn({name: response.data.name})
            } else {
              this.msg = response.message
            }
          })
          .catch(err => {
            this.msg = '注册异常'
            console.log(err)
          })
      }
    }
  }
</script>

<style>
  #login {
    width: 300px;
    margin: 0 auto;
  }
  body{
    background-image: url("../../static/background.jpg");
    background-size: 1800px;
  }
  .titleColor {
    color: chocolate;
  }
</style>

webpackJsonp([1],{B19e:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),o={data:function(){return{defaultActive:"/page1"}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-aside",[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.defaultActive,router:!0},on:{open:t.handleOpen,close:t.handleClose}},[n("el-menu-item",{attrs:{index:"/page1"}},[n("i",{staticClass:"el-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航1")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/page2"}},[n("i",{staticClass:"el-icon-setting"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航2")])])],1)],1)},staticRenderFns:[]},a=n("VU/8")(o,i,!1,null,null,null).exports,r=n("Dd8w"),l=n.n(r),u=n("9rMa"),c={methods:l()({},Object(u.b)(["logOut","loginFail"]),{onLogout:function(){this.logOut(),this.loginFail()}})},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-button",{staticClass:"userIcon",attrs:{type:"success"}},[this._v(this._s(this.$store.state.user.name))]),this._v(" "),e("el-button",{staticClass:"signout",attrs:{type:"primary",round:""},on:{click:this.onLogout}},[this._v("注销")])],1)},staticRenderFns:[]},f=n("VU/8")(c,m,!1,function(t){n("e6RI")},null,null).exports,d={form:{name:"",password:""},msg:"",onLogging:!1},g={data:function(){return d},methods:l()({},Object(u.b)(["logIn","loginSuccess"]),{onSubmit:function(t){var e=this;return this.onLogging?(this.msg="正在登陆中",!1):"superAdmin"===this.form.name?(this.loginSuccess(),void this.logIn({name:"superAdmin"})):(this.onLogging=!0,this.form.name&&this.form.password?void this.$ajxj.post("/user/login",{name:this.form.name,password:this.form.password}).then(function(t){var n=t.data;200===n.code?(e.loginSuccess(),e.logIn(n.data)):e.msg=n.message}).catch(function(t){e.msg="登陆异常",console.log(t)}).finally(function(){e.onLogging=!1}):(this.msg="请输入账号密码",void(this.onLogging=!1)))}})},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("p",[t._v("Welcome to Sys")]),t._v(" "),n("p",[t._v(t._s(t.msg))]),t._v(" "),n("el-form",{ref:"form",attrs:{modal:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"账号"}},[n("el-input",{attrs:{placeholder:"请输入账号"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即登陆")]),t._v(" "),n("el-button",[t._v("注册")])],1)],1)],1)},staticRenderFns:[]},h={components:{Nav:a,Header:f,Login:n("VU/8")(g,p,!1,function(t){n("B19e")},null,null).exports},name:"app",computed:{isLogin:function(){return this.$store.state.login.isLogin}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"},attrs:{id:"app"}},[this.isLogin?e("el-container",{staticClass:"main-container"},[e("el-header",[e("Header")],1),this._v(" "),e("el-container",[e("Nav"),this._v(" "),e("el-main",[e("router-view")],1)],1)],1):this._e(),this._v(" "),this.isLogin?this._e():e("Login")],1)},staticRenderFns:[]},_=n("VU/8")(h,v,!1,function(t){n("Q8Ct")},null,null).exports,w=n("/ocq"),b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"page1"}},[e("p",[this._v("我是Page1")])])}]},L=n("VU/8")(null,b,!1,null,null,null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"page2"}},[e("p",[this._v("我是Page2")])])}]},F=n("VU/8")(null,x,!1,null,null,null).exports;s.default.use(w.a);var S=new w.a({routes:[{path:"/page1",name:"page1",component:L},{path:"/page2",name:"page2",component:F}]}),$=n("FDFR"),I=n.n($),y=(n("Uo1D"),n("briU"),n("fZjL")),C=n.n(y),O=n("woOf"),U=n.n(O),j=n("mvHQ"),R=n.n(j),E={state:JSON.parse(sessionStorage.getItem("user"))||{},mutations:{logIn:function(t,e){sessionStorage.setItem("user",R()(e)),U()(t,e)},logOut:function(t){sessionStorage.removeItem("user"),C()(t).forEach(function(e){return s.default.delete(t,e)}),U()(t,{})}},actions:{logIn:function(t,e){(0,t.commit)("logIn",e)},logOut:function(t){(0,t.commit)("logOut")}}};s.default.use(u.a);var k=new u.a.Store({modules:{login:{state:{isLogin:!1},mutations:{loginSuccess:function(t){t.isLogin=!0},loginFail:function(t){t.isLogin=!1}},actions:{loginSuccess:function(t){(0,t.commit)("loginSuccess")},loginFail:function(t){(0,t.commit)("loginFail")}}},user:E}}),A=n("//Fk"),V=n.n(A),H=n("2sCs"),N=n.n(H);N.a.defaults.timeout=3e3,N.a.interceptors.request.use(function(t){var e=t.data,n=C()(e);return t.data=encodeURI(n.map(function(t){return t+"="+e[t]}).join("&")),t.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t},function(t){return V.a.reject(t)});var D=N.a;s.default.config.productionTip=!1,s.default.use(I.a),s.default.prototype.$ajxj=D,new s.default({el:"#app",router:S,store:k,template:"<App/>",components:{App:_}})},Q8Ct:function(t,e){},Uo1D:function(t,e){},e6RI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.95df3dc4f9b431464eca.js.map
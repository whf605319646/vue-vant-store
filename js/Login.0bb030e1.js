(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{7101:function(s,e,a){"use strict";a.r(e);var r=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("transition",{attrs:{name:"slide"}},[a("div",{staticClass:"login"},[a("h1",[s._v("登陆商城")]),a("van-cell-group",{staticClass:"login-from"},[a("van-field",{attrs:{clearable:"",border:"",label:"邮箱",placeholder:"请输入邮箱","error-message":s.userNameErr},model:{value:s.userName,callback:function(e){s.userName=e},expression:"userName"}}),a("van-field",{attrs:{clearable:"",border:"",type:"password",label:"密码",placeholder:"请输入密码","error-message":s.passwordErr},model:{value:s.password,callback:function(e){s.password=e},expression:"password"}}),a("van-cell",[a("van-row",[a("van-col",{staticClass:"btn",attrs:{span:"12"}},[a("van-button",{attrs:{type:"primary",size:"small",loading:s.loading},on:{click:s.login}},[s._v("登陆")])],1),a("van-col",{staticClass:"btn",attrs:{span:"12"}},[a("van-button",{attrs:{type:"default",size:"small"},on:{click:s.reg}},[s._v("注册")])],1)],1)],1)],1)],1)])},t=[],o=(a("6b54"),a("72fe")),i=a.n(o),n=a("0e0b"),l=a("4ec3"),c=a("b970"),u={data:function(){return{userName:"test@qq.com",password:"pwx980101",userNameErr:"",passwordErr:"",loading:!1,redirect:this.$route.query.redirect}},mounted:function(){this.redirect&&Object(c["c"])({position:"bottom",message:"未登录或登陆过期，请重新登陆~"})},methods:{login:function(){var s=this;return this.userNameErr="",this.passwordErr="",this.loading=!0,Object(n["a"])(this.userName)?Object(n["b"])(this.password)?void Object(l["i"])({userName:this.userName,password:i()(this.password).toString()}).then(function(e){200===e.status?(s.loading=!1,s.$router.push("/")):(s.loading=!1,c["c"].fail(e.msg))}).catch(function(e){c["c"].fail(e),s.loading=!1}):(this.passwordErr="密码格式不正确",void(this.loading=!1)):(this.userNameErr="邮箱格式不正确",void(this.loading=!1))},reg:function(){this.$router.push("/reg")}}},d=u,p=(a("f272"),a("2877")),b=Object(p["a"])(d,r,t,!1,null,"0c5a136e",null);b.options.__file="Login.vue";e["default"]=b.exports},b6b3:function(s,e,a){},f272:function(s,e,a){"use strict";var r=a("b6b3"),t=a.n(r);t.a}}]);
//# sourceMappingURL=Login.0bb030e1.js.map
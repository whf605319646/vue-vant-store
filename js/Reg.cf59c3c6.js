(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Reg"],{5858:function(s,e,r){"use strict";var a=r("cc70"),o=r.n(a);o.a},"5bbc":function(s,e,r){"use strict";r.r(e);var a=function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("transition",{attrs:{name:"slide"}},[r("div",{staticClass:"reg"},[r("h1",[s._v("用户注册")]),r("van-cell-group",{staticClass:"reg-from"},[r("van-field",{attrs:{clearable:"",border:"",label:"邮箱",placeholder:"请输入邮箱","error-message":s.userNameErr},model:{value:s.userName,callback:function(e){s.userName=e},expression:"userName"}}),r("van-field",{attrs:{clearable:"",border:"",type:"password",label:"密码",placeholder:"请输入密码","error-message":s.passwordErr},model:{value:s.password,callback:function(e){s.password=e},expression:"password"}}),r("van-field",{attrs:{clearable:"",border:"",type:"password",label:"重复密码",placeholder:"请再次输入密码","error-message":s.passwordRepErr},model:{value:s.passwordRep,callback:function(e){s.passwordRep=e},expression:"passwordRep"}}),r("van-cell",[r("van-row",[r("van-col",{staticClass:"btn",attrs:{span:"24"}},[r("van-button",{attrs:{type:"primary",size:"small",loading:s.loading},on:{click:s.reg}},[s._v("注册")])],1)],1)],1)],1)],1)])},o=[],t=(r("6b54"),r("72fe")),i=r.n(t),n=r("0e0b"),l=r("4ec3"),c=r("b970"),d={data:function(){return{userName:"",password:"",passwordRep:"",userNameErr:"",passwordErr:"",passwordRepErr:"",loading:!1}},methods:{reg:function(){var s=this;return this.userNameErr="",this.passwordErr="",this.passwordRepErr="",this.loading=!0,Object(n["a"])(this.userName)?Object(n["b"])(this.password)?this.password!==this.passwordRep?(this.passwordRepErr="两次密码不一致",void(this.loading=!1)):void Object(l["j"])({userName:this.userName,password:i()(this.password).toString()}).then(function(e){200===e.status?(s.loading=!1,c["c"].success("跳转登陆界面"),setTimeout(function(){c["c"].clear(),s.$router.push("/login")},1e3)):(s.loading=!1,c["c"].fail(e.msg))}).catch(function(e){c["c"].fail(e),s.loading=!1}):(this.passwordErr="密码格式不正确",void(this.loading=!1)):(this.userNameErr="邮箱格式不正确",void(this.loading=!1))}}},p=d,u=(r("5858"),r("2877")),w=Object(u["a"])(p,a,o,!1,null,"273442b0",null);w.options.__file="Reg.vue";e["default"]=w.exports},cc70:function(s,e,r){}}]);
//# sourceMappingURL=Reg.cf59c3c6.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-645ea849"],{"0781":function(e,t,o){e.exports=o.p+"img/logo_100.18c454b3.png"},2017:function(e,t,o){"use strict";var n=o("cafe"),a=o.n(n);a.a},2111:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"f",(function(){return s})),o.d(t,"d",(function(){return l})),o.d(t,"b",(function(){return c})),o.d(t,"e",(function(){return u})),o.d(t,"g",(function(){return d})),o.d(t,"c",(function(){return m}));var n=o("5530"),a=o("bc07"),r="/v1/app";function i(e){return Object(a["a"])({url:r,method:"post",data:Object(n["a"])({method:"add.app.item"},e)})}function s(e){return Object(a["a"])({url:r,method:"post",data:Object(n["a"])({method:"set.app.item"},e)})}function l(e){return Object(a["a"])({url:r,method:"post",data:Object(n["a"])({method:"get.app.list"},e)})}function c(e){return Object(a["a"])({url:r,method:"post",data:{method:"del.app.list",app_id:e}})}function u(e){return Object(a["a"])({url:r,method:"post",data:{method:"replace.app.secret",app_id:e}})}function d(e,t){return Object(a["a"])({url:r,method:"post",data:{method:"set.app.status",app_id:e,status:t}})}function m(e){return Object(a["a"])({url:r,method:"post",data:{method:"get.app.captcha",appkey:e}})}},"9ed6":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("div",{staticClass:"login-border"},[o("div",{staticClass:"login-main"},[e._m(0),o("loginBox")],1)])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-logo"},[n("img",{attrs:{src:o("0781"),alt:"logo"}})])}],r=o("ca00"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{"status-icon":"",rules:e.loginRules,model:e.loginForm,"label-width":"0",size:"default"}},[o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{attrs:{size:"small","auto-complete":"off",placeholder:"请输入账号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin()}},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}},[o("i",{staticClass:"el-icon-user",attrs:{slot:"prefix"},slot:"prefix"})])],1),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{size:"small","show-password":"","auto-complete":"off",placeholder:"请输入密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin()}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[o("i",{staticClass:"el-icon-key",attrs:{slot:"prefix"},slot:"prefix"})])],1),e.captcha?o("el-form-item",{attrs:{prop:"login_code"}},[o("el-row",{attrs:{span:34}},[o("el-col",{attrs:{span:14}},[o("el-input",{attrs:{size:"small","auto-complete":"off",placeholder:"请输入验证码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin()}},model:{value:e.loginForm.login_code,callback:function(t){e.$set(e.loginForm,"login_code",t)},expression:"loginForm.login_code"}},[o("i",{staticClass:"el-icon-mobile",attrs:{slot:"prefix"},slot:"prefix"})])],1),o("el-col",{attrs:{span:10}},[o("div",{staticClass:"login-code"},[o("img",{staticClass:"login-code-img",attrs:{src:e.codeUrl,alt:""},on:{click:e.refreshCode}})])])],1)],1):e._e(),o("el-checkbox",{model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}},[e._v("保持登录")]),o("el-form-item",[o("el-button",{staticClass:"login-submit",attrs:{type:"primary",size:"small",loading:e.loading},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登 录 ")])],1)],1)},s=[],l=(o("99af"),o("d3b7"),o("ac1f"),o("5319"),o("5530")),c=o("5880"),u=o("2111"),d={name:"loginbox",data:function(){return{remember:!1,loading:!1,captcha:!1,codeUrl:"",sessionId:"",loginForm:{username:"",password:"",appkey:this.$baseConfig.APP_KEY,login_code:"",session_id:""},loginRules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"密码长度最少为6位",trigger:"blur"}],login_code:[{required:!0,message:"请输入验证码",trigger:"blur"},{min:4,max:4,message:"验证码长度为4位",trigger:"blur"}]}}},mounted:function(){var e=this;Object(u["c"])(this.$baseConfig.APP_KEY).then((function(t){t.data.captcha&&(e.captcha=!0,e.sessionId=t.data.session_id,e.refreshCode())})).finally((function(){e.loading=!1}))},methods:Object(l["a"])(Object(l["a"])({},Object(c["mapActions"])("careyshop/account",["login"])),{},{refreshCode:function(){var e=r["a"].getBaseApi("/v1/app.html");e+="method=image.app.captcha&session_id=".concat(this.sessionId,"&t=").concat(Math.random()),this.codeUrl=e},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){t&&(e.loading=!0,e.loginForm.session_id=e.sessionId,e.login({login:e.loginForm,remember:e.remember}).then((function(){e.captcha=!1,e.$router.replace(e.$route.query.redirect||"/")})).catch((function(){r["a"].cookies.remove("token"),r["a"].cookies.remove("uuid"),e.loading=!1})))}))}})},m=d,p=o("2877"),f=Object(p["a"])(m,i,s,!1,null,null,null),g=f.exports,h={name:"login",components:{loginBox:g},data:function(){return{activeName:"user"}},created:function(){r["a"].cookies.set("block","false")}},b=h,k=(o("2017"),Object(p["a"])(b,n,a,!1,null,null,null));t["default"]=k.exports},cafe:function(e,t,o){}}]);
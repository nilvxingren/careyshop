(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67fcee76"],{"550a":function(n,e,t){"use strict";t.r(e);var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("cs-container",[t("page-main",{ref:"main",attrs:{loading:n.loading,"tree-data":n.tree},on:{refresh:n.handleRefresh}})],1)},i=[],a=(t("d3b7"),t("ca00")),o=t("f86b"),u={name:"setting-logistics-region",components:{PageMain:function(){return t.e("chunk-8d2a0c60").then(t.bind(null,"1c42"))}},data:function(){return{tree:[],loading:!1}},mounted:function(){this.handleSubmit()},methods:{handleRefresh:function(){var n=this;this.$nextTick((function(){n.handleSubmit()}))},handleSubmit:function(){var n=this;this.loading=!0,Object(o["d"])({region_id:1}).then((function(e){var t={key:"parent_id",value:[1]};n.tree=a["a"].formatDataToTree(e.data,"region_id","parent_id",t),n.$refs.main&&(n.$refs.main.filterText="",n.$refs.main.resetForm(),n.$refs.main.resetElements())})).finally((function(){n.loading=!1}))}}},d=u,c=t("2877"),s=Object(c["a"])(d,r,i,!1,null,null,null);e["default"]=s.exports},f86b:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"f",(function(){return a})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return u})),t.d(e,"d",(function(){return d})),t.d(e,"e",(function(){return c}));var r=t("bc07");function i(n){return Object(r["a"])({url:"/v1/region",method:"post",params:{method:"add.region.item"},data:n})}function a(n){return Object(r["a"])({url:"/v1/region",method:"post",params:{method:"set.region.item"},data:n})}function o(n){return Object(r["a"])({url:"/v1/region",method:"post",params:{method:"del.region.list"},data:{region_id:n}})}function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(r["a"])({url:"/v1/region",method:"post",params:{method:"get.region.list"},data:n})}function d(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(r["a"])({url:"/v1/region",method:"post",params:{method:"get.region.son.list"},data:n})}function c(n){return Object(r["a"])({url:"/v1/region",method:"post",params:{method:"set.region.index"},data:{region_id:n}})}}}]);
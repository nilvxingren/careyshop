(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70506df4"],{1610:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"g",(function(){return i})),o.d(e,"b",(function(){return u})),o.d(e,"i",(function(){return s})),o.d(e,"f",(function(){return c})),o.d(e,"e",(function(){return h})),o.d(e,"j",(function(){return l})),o.d(e,"h",(function(){return g})),o.d(e,"k",(function(){return b})),o.d(e,"c",(function(){return p})),o.d(e,"d",(function(){return f}));var n=o("5530"),a=o("bc07"),d="/v1/goods_attribute";function r(t){return Object(a["a"])({url:d,method:"post",data:Object(n["a"])({method:"add.goods.attribute.body.item"},t)})}function i(t){return Object(a["a"])({url:d,method:"post",data:Object(n["a"])({method:"set.goods.attribute.body.item"},t)})}function u(t){return Object(a["a"])({url:d,method:"post",data:Object(n["a"])({method:"add.goods.attribute.item"},t)})}function s(t){return Object(a["a"])({url:d,method:"post",data:Object(n["a"])({method:"set.goods.attribute.item"},t)})}function c(t){return Object(a["a"])({url:d,method:"post",data:Object(n["a"])({method:"get.goods.attribute.page"},t)})}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(a["a"])({url:d,method:"post",data:{method:"get.goods.attribute.list",goods_type_id:t,attribute_all:e}})}function l(t,e){return Object(a["a"])({url:d,method:"post",data:{method:"set.goods.attribute.key",goods_attribute_id:t,attr_index:e}})}function g(t,e){return Object(a["a"])({url:d,method:"post",data:{method:"set.goods.attribute.important",goods_attribute_id:t,is_important:e}})}function b(t,e){return Object(a["a"])({url:d,method:"post",data:{method:"set.goods.attribute.sort",goods_attribute_id:t,sort:e}})}function p(t){return Object(a["a"])({url:d,method:"post",data:{method:"del.goods.attribute.list",goods_attribute_id:t}})}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(a["a"])({url:d,method:"post",data:{method:"get.goods.attribute.data",goods_type_id:t,attribute_all:e}})}},"7f04":function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"e",(function(){return i})),o.d(e,"b",(function(){return u})),o.d(e,"c",(function(){return s})),o.d(e,"d",(function(){return c}));var n=o("5530"),a=o("bc07"),d="/v1/goods_type";function r(t){return Object(a["a"])({url:d,method:"post",data:{method:"add.goods.type.item",type_name:t}})}function i(t){return Object(a["a"])({url:d,method:"post",data:Object(n["a"])({method:"set.goods.type.item"},t)})}function u(t){return Object(a["a"])({url:d,method:"post",data:{method:"del.goods.type.list",goods_type_id:t}})}function s(t){return Object(a["a"])({url:d,method:"post",data:Object(n["a"])({method:"get.goods.type.list"},t)})}function c(t){return Object(a["a"])({url:d,method:"post",data:Object(n["a"])({method:"get.goods.type.select"},t)})}},"9e69":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("cs-container",[o("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"type-id":t.goods_type_id,"type-data":t.typeList},on:{submit:t.handleSubmit},slot:"header"}),o("page-main",{attrs:{loading:t.loading,"table-data":t.table,"type-data":t.typeList,"select-id":t.selectTypeId},on:{sort:t.handleSort,refresh:t.handleRefresh}}),o("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},a=[],d=(o("4160"),o("a9e3"),o("d3b7"),o("3ca3"),o("159b"),o("ddb0"),o("5530")),r=o("7f04"),i=o("1610"),u={name:"goods-setting-attribute",components:{PageHeader:function(){return o.e("chunk-2d0e1dd2").then(o.bind(null,"7bf7"))},PageMain:function(){return o.e("chunk-79cf1fe8").then(o.bind(null,"5d2c"))},PageFooter:function(){return o.e("chunk-2d225417").then(o.bind(null,"e42d"))}},props:{goods_type_id:{type:[String,Number],required:!1}},data:function(){return{table:[],loading:!1,typeList:{},selectTypeId:null,page:{current:1,size:0,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;Promise.all([Object(r["d"])({order_type:"asc"}),this.$store.dispatch("careyshop/db/databasePage",{user:!0})]).then((function(e){e[0].data&&e[0].data.forEach((function(e){t.typeList[e.goods_type_id]=e.type_name})),t.page.size=e[1].get("size").value()||25})).then((function(){t.handleSubmit({goods_type_id:t.goods_type_id},!0)}))},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o&&(this.page.current=1),this.loading=!0,this.selectTypeId=t.goods_type_id||null,Object(i["f"])(Object(d["a"])(Object(d["a"])(Object(d["a"])({},t),this.order),{},{page_no:this.page.current,page_size:this.page.size})).then((function(t){e.table=t.data.items||[],e.page.total=t.data.total_result})).finally((function(){e.loading=!1}))}}},s=u,c=o("2877"),h=Object(c["a"])(s,n,a,!1,null,null,null);e["default"]=h.exports}}]);
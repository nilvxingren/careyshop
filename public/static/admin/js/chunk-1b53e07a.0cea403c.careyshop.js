(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b53e07a"],{"041d":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return r}));var o=n("5530"),a=n("bc07"),s="/v1/goods_consult";function u(t){return Object(a["a"])({url:s,method:"post",data:{method:"del.goods.consult.list",goods_consult_id:t}})}function c(t,e){return Object(a["a"])({url:s,method:"post",data:{method:"set.goods.consult.show",goods_consult_id:t,is_show:e}})}function i(t,e){return Object(a["a"])({url:s,method:"post",data:{method:"reply.goods.consult.item",goods_consult_id:t,content:e}})}function d(t){return Object(a["a"])({url:s,method:"post",data:{method:"get.goods.consult.item",goods_consult_id:t}})}function r(t){return Object(a["a"])({url:s,method:"post",data:Object(o["a"])({method:"get.goods.consult.list"},t)})}},"78fb":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-main",{attrs:{"table-data":t.table},on:{reply:t.addReply}})],1)},a=[],s=(n("a9e3"),n("b64b"),n("d3b7"),n("5530")),u=n("5880"),c=n("041d"),i={name:"goods-opinion-consult-detail",components:{PageMain:function(){return n.e("chunk-a8bb44a0").then(n.bind(null,"f1e5"))}},props:{goods_consult_id:{type:[Number,String],required:!0}},data:function(){return{table:this.getInitData(),tableBuffer:{},isSourceRoute:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.isSourceRoute||Object.keys(t.tableBuffer).length||t.switchData(t.goods_consult_id)}))},beforeRouteEnter:function(t,e,n){t.params.goods_consult_id?n((function(e){e.switchData(t.params.goods_consult_id),e.isSourceRoute=!0})):n(new Error("未指定ID"))},beforeRouteUpdate:function(t,e,n){t.params.goods_consult_id?(this.switchData(t.params.goods_consult_id),n()):n(new Error("未指定ID"))},methods:Object(s["a"])(Object(s["a"])({},Object(u["mapActions"])("careyshop/update",["updateData"])),{},{getInitData:function(){return{type:null,status:null,get_goods:{name:null}}},switchData:function(t){var e=this;this.tableBuffer[t]?this.table=this.tableBuffer[t]:this.$nextTick((function(){e.table=Object(s["a"])({},e.getInitData()),Object(c["b"])(t).then((function(n){n.data&&n.data.get_answer.unshift({goods_consult_id:n.data.goods_consult_id,content:n.data.content,create_time:n.data.create_time,is_client:!0}),e.tableBuffer[t]=Object(s["a"])({},n.data),e.table=e.tableBuffer[t]}))}))},addReply:function(t,e){this.tableBuffer[t].status=1,this.tableBuffer[t].get_answer.push(Object(s["a"])({},e)),this.updateData({type:"set",name:"goods-opinion-consult",srcId:t,data:{status:1}})}})},d=i,r=n("2877"),l=Object(r["a"])(d,o,a,!1,null,null,null);e["default"]=l.exports}}]);
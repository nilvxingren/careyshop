(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-589758aa"],{"331c":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"d",(function(){return r})),a.d(e,"b",(function(){return u})),a.d(e,"c",(function(){return i}));var n=a("bc07");function s(t){return Object(n["a"])({url:"/v1/ask",method:"post",params:{method:"del.ask.item"},data:{ask_id:t}})}function r(t,e){return Object(n["a"])({url:"/v1/ask",method:"post",params:{method:"reply.ask.item"},data:{ask_id:t,answer:e}})}function u(t){return Object(n["a"])({url:"/v1/ask",method:"post",params:{method:"get.ask.item"},data:{ask_id:t}})}function i(t){return Object(n["a"])({url:"/v1/ask",method:"post",params:{method:"get.ask.list"},data:t})}},c4fe:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("cs-container",[a("page-main",{attrs:{"table-data":t.table},on:{reply:t.addReply}})],1)},s=[],r=(a("a9e3"),a("b64b"),a("d3b7"),a("5530")),u=a("5880"),i=a("331c"),c={name:"member-ask-detail",components:{PageMain:function(){return a.e("chunk-899eeec2").then(a.bind(null,"bf33"))}},props:{ask_id:{type:[Number,String],required:!0}},data:function(){return{table:this.getInitData(),tableBuffer:{},isSourceRoute:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.isSourceRoute||Object.keys(t.tableBuffer).length||t.switchData(t.ask_id)}))},beforeRouteEnter:function(t,e,a){t.params.ask_id?a((function(e){e.switchData(t.params.ask_id),e.isSourceRoute=!0})):a(new Error("未指定ID"))},beforeRouteUpdate:function(t,e,a){t.params.ask_id?(this.switchData(t.params.ask_id),a()):a(new Error("未指定ID"))},methods:Object(r["a"])(Object(r["a"])({},Object(u["mapActions"])("careyshop/update",["updateData"])),{},{getInitData:function(){return{type:null,status:null}},switchData:function(t){var e=this;this.tableBuffer[t]?this.table=this.tableBuffer[t]:this.$nextTick((function(){e.table=Object(r["a"])({},e.getInitData()),Object(i["b"])(t).then((function(a){e.tableBuffer[t]=Object(r["a"])({},a.data),e.table=e.tableBuffer[t]}))}))},addReply:function(t,e){this.tableBuffer[t].status=1,this.tableBuffer[t].get_items.push(Object(r["a"])({},e)),this.updateData({type:"set",name:"member-ask-list",srcId:t,data:{status:1}})}})},o=c,d=a("2877"),f=Object(d["a"])(o,n,s,!1,null,null,null);e["default"]=f.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a947bd4"],{"7a46":function(t,e,o){"use strict";var n=o("98cc"),r=o.n(n);r.a},"98cc":function(t,e,o){},b191:function(t,e,o){"use strict";o.r(e);var n,r,a=o("5530"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"category-control",on:{click:function(e){t.visible=!0}}},[t._t("control"),o("el-dialog",{attrs:{width:"600px",visible:t.visible,"append-to-body":!0},on:{"update:visible":function(e){t.visible=e},open:t.handleOpen}},[t.visible?o("el-tree",{ref:"tree",staticStyle:{"margin-top":"-15px"},attrs:{"node-key":"goods_category_id",data:t.treeData,props:t.treeProps,"default-checked-keys":t.checkedKeys,"close-on-click-modal":!1,"show-checkbox":!0}}):t._e(),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"small"},on:{click:function(e){t.visible=!1}}},[t._v("取消")]),o("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleConfirm}},[t._v("确定")])],1)],1)],2)},s=[],c=o("ca00"),l=o("c54e"),d={name:"category-all",props:{checkedKeys:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{visible:!1,treeData:[],treeProps:{label:"name",children:"children"}}},methods:{handleOpen:function(){var t=this;this.treeData.length>0||Object(l["d"])(null).then((function(e){t.treeData=c["a"].formatDataToTree(e.data,"goods_category_id")}))},handleConfirm:function(){this.$refs.tree&&this.$emit("confirm",this.$refs.tree.getCheckedKeys())}}},u=d,f=(o("7a46"),o("2877")),h=Object(f["a"])(u,i,s,!1,null,"f73a56b4",null),p=h.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"category-control",on:{click:function(e){t.visible=!0}}},[t._t("control"),o("el-dialog",{attrs:{width:"600px",visible:t.visible,"append-to-body":!0,"close-on-click-modal":!1},on:{"update:visible":function(e){t.visible=e}}},[t.visible?o("el-tree",{ref:"tree",staticStyle:{"margin-top":"-15px"},attrs:{"node-key":"goods_category_id",props:t.treeProps,load:t.loadNode,"show-checkbox":!0,lazy:!0}}):t._e(),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"small"},on:{click:function(e){t.visible=!1}}},[t._v("取消")]),o("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleConfirm}},[t._v("确定")])],1)],1)],2)},y=[],m={name:"category-lazy",data:function(){return{visible:!1,treeProps:{label:"name",children:"children"}}},methods:{loadNode:function(t,e){this.getCategoryData(t.key,e)},getCategoryData:function(t,e){Object(l["d"])({goods_category_id:t,level:0}).then((function(t){e(t.data||[])}))},handleConfirm:function(){this.$refs.tree&&this.$emit("confirm",this.$refs.tree.getCheckedKeys())}}},b=m,v=(o("e32a"),Object(f["a"])(b,g,y,!1,null,"2d799412",null)),_=v.exports,k={name:"cs-goods-category",props:{value:{type:Array,required:!1,default:function(){return[]}},type:{type:String,required:!1,default:"all"}},computed:{component:function(){return"all"===this.type?p:"lazy"===this.type?_:"div"}},render:function(t){var e=this,o=[this.$slots.default];return this.$slots.control&&o.push(t("template",{slot:"control"},[this.$slots.control])),t("div",{},[t(this.component,{ref:"category",props:Object(a["a"])({checkedKeys:this.value},this.$attrs),on:{confirm:function(t){e.$emit("input",t),e.$refs.category.visible=!1}}},o)])}},O=k,j=Object(f["a"])(O,n,r,!1,null,null,null);e["default"]=j.exports},c54e:function(t,e,o){"use strict";o.d(e,"a",(function(){return i})),o.d(e,"f",(function(){return s})),o.d(e,"b",(function(){return c})),o.d(e,"c",(function(){return l})),o.d(e,"d",(function(){return d})),o.d(e,"g",(function(){return u})),o.d(e,"e",(function(){return f}));var n=o("5530"),r=o("bc07"),a="/v1/goods_category";function i(t){return Object(r["a"])({url:a,method:"post",data:Object(n["a"])({method:"add.goods.category.item"},t)})}function s(t){return Object(r["a"])({url:a,method:"post",data:Object(n["a"])({method:"set.goods.category.item"},t)})}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(r["a"])({url:a,method:"post",data:{method:"del.goods.category.list",goods_category_id:t,not_empty:e}})}function l(t){return Object(r["a"])({url:a,method:"post",data:{method:"get.goods.category.item",goods_category_id:t}})}function d(t){return Object(r["a"])({url:a,method:"post",data:Object(n["a"])({method:"get.goods.category.list"},t)})}function u(t,e){return Object(r["a"])({url:a,method:"post",data:{method:"set.goods.category.status",goods_category_id:t,status:e}})}function f(t){return Object(r["a"])({url:a,method:"post",data:{method:"set.goods.category.index",goods_category_id:t}})}},e32a:function(t,e,o){"use strict";var n=o("e59f"),r=o.n(n);r.a},e59f:function(t,e,o){}}]);
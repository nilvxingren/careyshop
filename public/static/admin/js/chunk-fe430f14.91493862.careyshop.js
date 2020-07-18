(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe430f14"],{"067e":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[t.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.loading},on:{click:t.handleCreate}},[t._v("新增用户组")])],1):t._e(),a("el-form-item",[a("el-button-group",[t.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:t.loading},on:{click:function(e){return t.handleState(1)}}},[t._v("启用")]):t._e(),t.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:t.loading},on:{click:function(e){return t.handleState(0)}}},[t._v("禁用")]):t._e()],1)],1),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:t.$route.path}})],1),a("el-table",{attrs:{data:t.currentTableData,"highlight-current-row":!0,"row-class-name":t.tableRowClassName},on:{"selection-change":t.handleSelectionChange,"sort-change":t.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55",selectable:function(t){return!t.system}}}),a("el-table-column",{attrs:{label:"名称",prop:"name",sortable:"custom","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"描述",prop:"description","min-width":"200","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"所属类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.system?"系统保留":"用户添加")+" ")]}}])}),a("el-table-column",{attrs:{label:"模块"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.module[e.row.module])+" ")]}}])}),a("el-table-column",{attrs:{label:"排序值",prop:"sort",align:"center",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.sort?a("el-input-number",{staticStyle:{width:"88px"},attrs:{size:"mini","controls-position":"right",min:0,max:255},on:{change:function(a){return t.handleSort(e.$index)}},model:{value:e.row.sort,callback:function(a){t.$set(e.row,"sort",a)},expression:"scope.row.sort"}}):a("span",[t._v(" "+t._s(e.row.sort)+" ")])]}}])}),a("el-table-column",{attrs:{label:"状态",prop:"status",align:"center",width:"100",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{style:t.auth.enable||t.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:t.statusMap[e.row.status].type,effect:t.auth.enable||t.auth.disable?"light":"plain"},nativeOn:{click:function(a){return t.switchStatus(e.$index)}}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleUpdate(e.$index)}}},[t._v("编辑")]):t._e(),t.auth.del&&!e.row.system?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleDelete(e.$index)}}},[t._v("删除")]):t._e()]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入名称",clearable:!0},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{attrs:{placeholder:"可输入描述",type:"textarea",rows:5},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),a("el-form-item",{attrs:{label:"模块",prop:"module"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.module,callback:function(e){t.$set(t.form,"module",e)},expression:"form.module"}},t._l(t.module,(function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"排序值",prop:"sort"}},[a("el-input-number",{staticStyle:{width:"120px"},attrs:{"controls-position":"right",min:0,max:255},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"===t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.create}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:function(e){return t.update(t.form.index)}}},[t._v("修改")])],1)],1)],1)},n=[],i=(a("a4d3"),a("e01a"),a("4160"),a("c975"),a("a434"),a("b0c0"),a("d3b7"),a("25f0"),a("159b"),a("5530")),s=a("c784"),r={props:{loading:{default:!1},tableData:{default:function(){return[]}},module:{default:function(){}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!1,del:!1,set:!1,enable:!1,disable:!1,sort:!1},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑用户组",create:"新增用户组"},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},form:{index:void 0,name:void 0,description:void 0,module:void 0,sort:void 0,status:void 0},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:32,message:"长度不能大于 32 个字符",trigger:"blur"}],description:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],module:[{required:!0,message:"至少选择一项",trigger:"change"}],sort:[{type:"number",message:"必须为数字值",trigger:"blur"}],status:[{type:"enum",enum:["0","1"],message:"值的范围必须为 0 或 1",trigger:"change"}]}}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/setting/auth/group/add"),this.auth.del=this.$permission("/setting/auth/group/del"),this.auth.set=this.$permission("/setting/auth/group/set"),this.auth.enable=this.$permission("/setting/auth/group/enable"),this.auth.disable=this.$permission("/setting/auth/group/disable"),this.auth.sort=this.$permission("/setting/auth/group/sort")},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,o=t.order,n={order_type:void 0,order_field:void 0};e&&o&&(n.order_type="ascending"===o?"asc":"desc",n.order_field=a),this.$emit("sort",n)},tableRowClassName:function(t){var e=t.row;return e.system?"warning-row":""},handleCreate:function(){var t=this;this.form={index:void 0,name:"",description:"",module:"",sort:50,status:"1"},this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="create",t.dialogLoading=!1,t.dialogFormVisible=!0}))},create:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(s["a"])(t.form).then((function(e){t.currentTableData.unshift(e.data),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleState:function(t){var e=this,a=[];this.multipleSelection.forEach((function(t){a.push(t.group_id)})),0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(s["f"])(a,t).then((function(){e.currentTableData.forEach((function(o,n){-1!==a.indexOf(o.group_id)&&e.$set(e.currentTableData,n,Object(i["a"])(Object(i["a"])({},o),{},{status:t}))})),e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleUpdate:function(t){var e=this,a=this.currentTableData[t];this.form={index:t,group_id:a.group_id,name:a.name,description:a.description,module:a.module,sort:a.sort,status:a.status.toString()},this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="update",e.dialogLoading=!1,e.dialogFormVisible=!0}))},update:function(t){var e=this;this.$refs.form.validate((function(a){a&&(e.dialogLoading=!0,Object(s["d"])(e.form).then((function(a){e.$set(e.currentTableData,t,Object(i["a"])(Object(i["a"])({},e.currentTableData[t]),a.data)),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},handleDelete:function(t){var e=this;this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(s["b"])(e.currentTableData[t].group_id).then((function(){e.currentTableData.splice(t,1),e.$message.success("操作成功")}))})).catch((function(){}))},handleSort:function(t){Object(s["e"])(this.currentTableData[t].group_id,this.currentTableData[t].sort)},switchStatus:function(t){var e=this,a=this.currentTableData[t],o=a.status?0:1;(0!==o||this.auth.disable)&&(1!==o||this.auth.enable)&&(this.$set(this.currentTableData,t,Object(i["a"])(Object(i["a"])({},a),{},{status:2})),Object(s["f"])([a.group_id],o).then((function(){e.$message.success("操作成功"),e.$set(e.currentTableData,t,Object(i["a"])(Object(i["a"])({},a),{},{status:o}))})).catch((function(){e.$set(e.currentTableData,t,a)})))}}},l=r,u=(a("2356"),a("2877")),c=Object(u["a"])(l,o,n,!1,null,"7713e18d",null);e["default"]=c.exports},2356:function(t,e,a){"use strict";var o=a("d3d8"),n=a.n(o);n.a},d3d8:function(t,e,a){}}]);
webpackJsonp([23],{102:function(e,t,a){function o(e){a(771)}var n=a(29)(a(616),a(868),o,null,null);e.exports=n.exports},616:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(832),n=a.n(o);t.default={name:"goodsClassify",data:function(){return{formInline:{name:""},loading:!0,tableData:[],currentPage:1,pageSize:10,dialogTitle:"",dialogVisible:!1,params:{type:"add",data:{typeName:"",desc:"",sortNo:""}}}},mounted:function(){this.loadData()},components:{"v-EditeDialog":n.a},methods:{loadData:function(){var e=this;this.loading=!0,this.tableData=[{id:1,name:"手机",desc:"该客户租期一年，占用库区为二楼东南。",type:"一级分类",sortNo:1,createdate:"2017-05-26 14：21：23",create_person:"陈凯",edite_date:"2017-05-26 14：21：23",edite_person:"陈凯"},{id:2,name:"水果",desc:"该客户租期一年，占用库区为二楼东南。",type:"一级分类",sortNo:2,createdate:"2017-05-26 14：21：23",create_person:"陈凯",edite_date:"2017-05-26 14：21：23",edite_person:"陈凯"},{id:3,name:"水果",desc:"该客户租期一年，占用库区为二楼东南。",type:"一级分类",sortNo:3,createdate:"2017-05-26 14：21：23",create_person:"陈凯",edite_date:"2017-05-26 14：21：23",edite_person:"陈凯"},{id:4,name:"水果",desc:"该客户租期一年，占用库区为二楼东南。",type:"一级分类",sortNo:4,createdate:"2017-05-26 14：21：23",create_person:"陈凯",edite_date:"2017-05-26 14：21：23",edite_person:"陈凯"},{id:5,name:"水果",desc:"该客户租期一年，占用库区为二楼东南。",type:"一级分类",sortNo:5,createdate:"2017-05-26 14：21：23",create_person:"陈凯",edite_date:"2017-05-26 14：21：23",edite_person:"陈凯"},{id:6,name:"水果",desc:"该客户租期一年，占用库区为二楼东南。",type:"一级分类",sortNo:6,createdate:"2017-05-26 14：21：23",create_person:"陈凯",edite_date:"2017-05-26 14：21：23",edite_person:"陈凯"},{id:7,name:"水果",desc:"该客户租期一年，占用库区为二楼东南。",type:"一级分类",sortNo:7,createdate:"2017-05-26 14：21：23",create_person:"陈凯",edite_date:"2017-05-26 14：21：23",edite_person:"陈凯"},{id:8,name:"水果",desc:"该客户租期一年，占用库区为二楼东南。",type:"一级分类",sortNo:8,createdate:"2017-05-26 14：21：23",create_person:"陈凯",edite_date:"2017-05-26 14：21：23",edite_person:"陈凯"}],setTimeout(function(){e.loading=!1},800)},doSeach:function(){this.currentPage=1,console.log("submit!"),this.loadData()},doClear:function(){this.formInline={name:""}},deleteRow:function(e,t){var a=this;this.$confirm("确定删除该该条记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.splice(e,1),a.$message({type:"success",message:"删除成功!"})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},handleSizeChange:function(e){this.pageSize=e,console.log("每页 "+e+" 条"),this.loadData()},handleCurrentChange:function(e){this.currentPage=e,this.loadData(),console.log("当前页: "+e)},add:function(){this.dialogTitle="新增分类",this.params={type:"add",data:{typeName:"",desc:"",sortNo:""}},this.dialogVisible=!0},edite:function(e){this.dialogTitle="编辑分类",this.params={type:"edite",data:{typeName:e.name,desc:e.desc,sortNo:e.sortNo}},this.dialogVisible=!0},showDetail:function(e){this.$router.push({path:"/baseinfo/goods_classify_manage/sub1/"+e.id})},doSend:function(e){this.dialogVisible=!1,console.log(e.desc),console.log(e.sortNo),console.log(e.typeName)},doClose:function(){this.dialogVisible=!1}}}},617:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{ruleForm:{typeName:"",desc:"",sortNo:""},rules:{typeName:[{required:!0,message:"请输入分类名称",trigger:"blur"},{min:1,max:10,message:"长度在 1 到 10 个字符",trigger:"blur"}],desc:[{min:0,max:20,message:"长度在 20 个字符以内",trigger:"change"}],sortNo:[{validator:function(e,t,a){""!=t?Number.isInteger(t)?t<0?a(new Error("输入不能为负数")):a():a(new Error("请输入数字值")):a()},trigger:"change"}]}}},props:["params"],watch:{params:function(e,t){this.ruleForm=e.data}},mounted:function(){"edite"==this.params.type&&(this.ruleForm=this.params.data)},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$emit("doSend",t.ruleForm)})},resetForm:function(e){this.$refs[e].resetFields(),this.$emit("doClose")}}}},704:function(e,t,a){t=e.exports=a(95)(!0),t.push([e.i,".grid-container{height:auto;overflow:hidden}.grid-container .action-column{text-align:right}.grid-container .color-gred{color:#999}.el-dialog--dl-small{width:400px}","",{version:3,sources:["D:/wmsAdmin/src/components/baseinfo/goods/goodsClassify.vue"],names:[],mappings:"AACA,gBACE,YAAa,AACb,eAAiB,CAClB,AACD,+BACE,gBAAkB,CACnB,AACD,4BACE,UAAY,CACb,AACD,qBACE,WAAa,CACd",file:"goodsClassify.vue",sourcesContent:["\n.grid-container {\n  height: auto;\n  overflow: hidden;\n}\n.grid-container .action-column {\n  text-align: right;\n}\n.grid-container .color-gred {\n  color: #999;\n}\n.el-dialog--dl-small {\n  width: 400px;\n}\n"],sourceRoot:""}])},771:function(e,t,a){var o=a(704);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(96)("12211664",o,!0)},832:function(e,t,a){var o=a(29)(a(617),a(899),null,null,null);e.exports=o.exports},868:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid-container"},[a("div",{staticClass:"search-form"},[a("el-form",{attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"分类名称"}},[a("el-input",{attrs:{placeholder:"分类名称"},model:{value:e.formInline.name,callback:function(t){e.formInline.name=t},expression:"formInline.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.doSeach}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:e.doClear}},[e._v("清空")])],1)],1)],1),e._v(" "),a("div",{staticClass:"grid-toolbar"},[a("button",{staticClass:"tool-btn btn-add",on:{click:e.add}},[e._v("新增一级分类")])]),e._v(" "),a("div",{staticClass:"grid-content"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"分类名称",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"描述",width:"400"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sortNo",label:"排序",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建日期",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"color-gred"},[e._v(e._s(t.row.createdate))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"create_person",label:"创建人",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"最后修改时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"color-gred"},[e._v(e._s(t.row.edite_date))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"edite_person",label:"最后修改人",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200","class-name":"action-column"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"action-column"},[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.showDetail(t.row)}}},[e._v("\n\t\t\t          \t\t查看二级分类\n\t\t\t        \t")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.edite(t.row)}}},[e._v("\n\t\t\t          \t\t编辑\n\t\t\t        \t")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.deleteRow(t.$index,e.tableData)}}},[e._v("\n\t\t\t          \t\t删除\n\t\t\t        \t")])],1)]}}])})],1)],1),e._v(" "),a("div",{staticClass:"grid-page"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":e.pageSize,layout:"total,->, prev, pager, next, jumper, sizes",total:e.tableData.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,size:"dl-small","modal-append-to-body":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("v-EditeDialog",{attrs:{params:e.params},on:{doSend:e.doSend,doClose:e.doClose}})],1)],1)},staticRenderFns:[]}},899:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"85px"}},[a("el-form-item",{attrs:{label:"分类名称",prop:"typeName"}},[a("el-input",{model:{value:e.ruleForm.typeName,callback:function(t){e.ruleForm.typeName=t},expression:"ruleForm.typeName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(t){e.ruleForm.desc=t},expression:"ruleForm.desc"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sortNo"}},[a("el-input",{model:{value:e.ruleForm.sortNo,callback:function(t){e.ruleForm.sortNo=e._n(t)},expression:"ruleForm.sortNo"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=23.844904ec47a3f175e522.js.map
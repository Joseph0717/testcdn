(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5bc7e774"],{16091:function(e,t,r){"use strict";r.r(t),r("4de4"),r("d3b7"),r("25f0");var n=r("5e3b"),a=r("a701"),o={name:"EditQueryReportConfig",data:function(){return{ID:this.$route.query.id,TYPE:this.$route.query.type,minHeight:window.innerHeight-219-180,businessTypes:[],reportTypes:[],controlTypess:[],operators:[],lineList:[],form:{status:1,bqConfigCode:"",bqConfigName:"",bussinessType:"",reportType:"",remark:"",lineList:[]},rules:{bqConfigCode:[{required:!0,message:"请输入报表代码",trigger:"change"}],bqConfigName:[{required:!0,message:"请输入报表名称",trigger:"change"}],bussinessType:[{required:!0,message:"请选择业务类型",trigger:"change"}],reportType:[{required:!0,message:"请选择报表类型",trigger:"change"}]},loading:!1,disabled:!1}},created:function(){"0"!==this.ID&&"2"==this.TYPE&&this.getQueryReportConfig(),this.getDictionary()},methods:{getDictionary:function(){var e=this;Object(a.d)(["BusinessType","ReportType","ControlTypes","Operator"]).then((function(t){1===t.data.code&&(t=t.data.data,e.businessTypes=t.filter((function(e){return"BusinessType"===e.code}))[0].data,e.reportTypes=t.filter((function(e){return"ReportType"===e.code}))[0].data,e.controlTypess=t.filter((function(e){return"ControlTypes"===e.code}))[0].data,e.operators=t.filter((function(e){return"Operator"===e.code}))[0].data)}))},change:function(e){var t=this;this.lineList=[],Object(n.d)(e).then((function(e){1===e.data.code&&(t.lineList=e.data.data)}))},getQueryReportConfig:function(){var e=this;this.disabled=!0,Object(n.b)(this.ID).then((function(t){1===t.data.code&&(e.form=t.data.data,e.lineList=e.form.lineList,e.disabled=!1)}))},save:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.loading=!0,e.form.lineList=e.$refs.xTable.getTableData().fullData,"0"==e.ID?Object(n.a)(e.form).then((function(t){1===t.data.code?(e.ID=t.data.data.toString(),e.loading=!1,e.$message.success("保存成功!"),e.getQueryReportConfig()):(e.loading=!1,e.$message.error(t.data.msg))})).catch((function(t){e.loading=!1,e.$message.error("系统内部错误!")})):Object(n.f)(e.form).then((function(t){1===t.data.code?(e.loading=!1,e.$message.success("保存成功!"),e.getQueryReportConfig()):(e.loading=!1,e.$message.error(t.data.msg))})).catch((function(t){e.loading=!1,e.$message.error("系统内部错误!")})))}))}}};r("e530"),r=r("2877"),o=Object(r.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"EditQueryReportConfig"},[r("a-spin",{attrs:{spinning:e.disabled}},[r("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end","margin-bottom":"10px"}},[r("a-space",[r("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:billing:add",expression:"`api:admin:billing:add`",arg:"permission"}],attrs:{type:"primary",loading:e.loading,disabled:e.disabled},on:{click:e.save}},[e._v("保存")])],1)],1),r("a-card",{attrs:{size:"small",title:"基本信息"}},[r("a-form-model",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"报表代码",prop:"bqConfigCode"}},[r("a-input",{attrs:{"max-length":20},model:{value:e.form.bqConfigCode,callback:function(t){e.$set(e.form,"bqConfigCode",t)},expression:"form.bqConfigCode"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"报表名称",prop:"bqConfigName"}},[r("a-input",{attrs:{"max-length":20},model:{value:e.form.bqConfigName,callback:function(t){e.$set(e.form,"bqConfigName",t)},expression:"form.bqConfigName"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"业务类型",prop:"bussinessType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:""},on:{change:e.change},model:{value:e.form.bussinessType,callback:function(t){e.$set(e.form,"bussinessType",t)},expression:"form.bussinessType"}},e._l(e.businessTypes,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.code}})})),1)],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"报表类型",prop:"reportType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:""},model:{value:e.form.reportType,callback:function(t){e.$set(e.form,"reportType",t)},expression:"form.reportType"}},e._l(e.reportTypes,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"状态",prop:"status"}},[r("a-switch",{attrs:{size:"small",checked:0!==e.form.status},on:{click:function(t){e.form.status=0===e.form.status?1:0}}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"备注",prop:"remark"}},[r("a-input",{attrs:{"max-length":200},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1)],1),r("a-card",{attrs:{size:"small",title:"字段表"}},[r("vxe-table",{ref:"xTable",attrs:{"keep-source":"",data:e.lineList,loading:e.loading,"print-config":{},"show-overflow":"",resizable:"",border:"","highlight-hover-row":"",height:e.minHeight,"edit-config":{trigger:"click",mode:"row",showStatus:!0}}},[r("vxe-column",{attrs:{field:"sysCol",title:"字段名称",filters:[{data:""}],"filter-method":function(e){var t=e.option;return-1!=e.row.sysCol.indexOf(t.data)}},scopedSlots:e._u([{key:"filter",fn:function(t){var n=t.$panel;t=t.column;return e._l(t.filters,(function(t,a){return r("a-input",{key:a,staticStyle:{margin:"10px",width:"fit-content"},attrs:{placeholder:"按回车确认筛选"},on:{input:function(e){return n.changeOption(e,!!t.data,t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:n.confirmFilter()}},model:{value:t.data,callback:function(r){e.$set(t,"data",r)},expression:"option.data"}})}))}}])}),r("vxe-column",{attrs:{field:"colAlias",title:"字段别名"}}),r("vxe-column",{attrs:{field:"sysColName",title:"系统字段"}}),r("vxe-column",{attrs:{field:"tableName",title:"表名称"}}),r("vxe-column",{attrs:{field:"tableAlias",title:"表别名"}}),r("vxe-column",{attrs:{field:"status",title:"是否显示","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(e){var t=e.row;return[r("a-switch",{attrs:{size:"small",checked:0!==t.status},on:{click:function(e){t.status=0===t.status?1:0}}})]}},{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(0===t.status?"否":"是"))])]}}])}),r("vxe-column",{attrs:{field:"controlTypes",title:"控件类型","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(t){var n=t.row;return[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:""},model:{value:n.controlTypes,callback:function(t){e.$set(n,"controlTypes",t)},expression:"row.controlTypes"}},e._l(e.controlTypess,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)]}},{key:"default",fn:function(t){var n=t.row;return[e._l(e.controlTypess,(function(t){return[n.controlTypes==t.value?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))]}}])}),r("vxe-column",{attrs:{field:"operator",title:"运算符","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(t){var n=t.row;return[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:""},model:{value:n.operator,callback:function(t){e.$set(n,"operator",t)},expression:"row.operator"}},e._l(e.operators,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.code}})})),1)]}},{key:"default",fn:function(t){var n=t.row;return[e._l(e.operators,(function(t){return[n.operator==t.code?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))]}}])}),r("vxe-column",{attrs:{field:"remark",title:"备注","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(t){var n=t.row;return[r("a-input",{attrs:{"max-length":200},model:{value:n.remark,callback:function(t){e.$set(n,"remark",t)},expression:"row.remark"}})]}}])})],1)],1)],1)],1)}),[],!1,null,"55afd49e",null);t.default=o.exports},"5e3b":function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c})),r.d(t,"f",(function(){return p})),r.d(t,"e",(function(){return m})),r.d(t,"d",(function(){return b}));t=r("96cf");var n=r("1da1"),a=r("7424"),o=r("b775");function i(e,t,r){return s.apply(this,arguments)}function s(){return(s=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.e)(a.QUERYREPORTCONFIGGETPAGE,o.a.POST,{currentPage:t,pageSize:r,dynamicFilter:n}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return u.apply(this,arguments)}function u(){return(u=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.e)(a.QUERYREPORTCONFIGADD,o.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return f.apply(this,arguments)}function f(){return(f=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.e)(a.QUERYREPORTCONFIGGET,o.a.GET,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.e)(a.QUERYREPORTCONFIGUPDATE,o.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.e)(a.QUERYREPORTCONFIGSOFTDELETE,o.a.DELETE,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return(y=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.e)(a.QUERYREPORTCONFIGGETQUERYREPORTBYBUSTABLE,o.a.GET,{bustype:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},c42f:function(e,t,r){},e530:function(e,t,r){"use strict";r("c42f")}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2415c298"],{"195b":function(e,t,n){},"207c":function(e,t,n){"use strict";n("4de4"),n("a9e3"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("ddb0"),n("2b3d");var i=n("682e"),a=n("7943"),r=n("2716"),o=n("046f"),s=n("3205"),c=n("cebe"),l=n.n(c);c={name:"Export",props:{TYPE:{type:Number,default:0},pagination:{type:Object,default:function(){}},dynamicFilter:{type:Object,default:function(){}},filter:{type:Object,default:function(){}}},data:function(){return{visible:!1,spinning:!1,fields:[],showColType:0,showCols:[],loading:!1,loading1:!1,loading2:!1,loading3:!1}},created:function(){},methods:{change:function(e){this.showCols=e},getHAirwayBillField:function(){var e=this;this.spinning=!0,Object(i.g)().then((function(t){1===t.data.code&&(e.fields=t.data.data,e.spinning=!1)}))},getMAirwayBillField:function(){var e=this;this.spinning=!0,Object(a.f)().then((function(t){1===t.data.code&&(e.fields=t.data.data,e.spinning=!1)}))},getAirImportHAirwayBillField:function(){var e=this;this.spinning=!0,Object(r.e)().then((function(t){1===t.data.code&&(e.fields=t.data.data,e.spinning=!1)}))},getAirImportMAirwayBillField:function(){var e=this;this.spinning=!0,Object(o.f)().then((function(t){1===t.data.code&&(e.fields=t.data.data,e.spinning=!1)}))},getHAirwayTempField:function(){var e=this;this.loading1=!0,Object(s.d)("AirExportHawbColumns").then((function(t){1===t.data.code&&(t=t.data.data.list[0].paramValue,e.showCols=""==t?[]:t.split(","),e.showColType=0,e.export())}))},getMAirwayTempField:function(){var e=this;this.loading1=!0,Object(s.d)("AirExportMawbColumns").then((function(t){1===t.data.code&&(t=t.data.data.list[0].paramValue,e.showCols=""==t?[]:t.split(","),e.showColType=0,e.export())}))},getAirImportHAirwayTempField:function(){var e=this;this.loading1=!0,Object(s.d)("AirImportHawbColumns").then((function(t){1===t.data.code&&(t=t.data.data.list[0].paramValue,e.showCols=""==t?[]:t.split(","),e.showColType=0,e.export())}))},getAirImportMAirwayTempField:function(){var e=this;this.loading1=!0,Object(s.d)("AirImportMawbColumns").then((function(t){1===t.data.code&&(t=t.data.data.list[0].paramValue,e.showCols=""==t?[]:t.split(","),e.showColType=0,e.export())}))},export:function(){var e=this,t={currentPage:this.pagination.currentPage,pageSize:this.pagination.pageSize,dynamicFilter:this.dynamicFilter,filter:this.filter,showColType:this.showColType,showCols:this.showCols};l.a.defaults.timeout="",l.a.defaults.responseType="blob",1==this.TYPE&&Object(i.f)(t).then((function(t){var n=window.URL.createObjectURL(new Blob([t.data]));t=document.createElement("a");t.style.display="none",t.href=n,t.setAttribute("download","download.xlsx"),document.body.appendChild(t),t.click(),l.a.defaults.timeout=5e3,l.a.defaults.responseType="",e.visible=!1,e.loading=!1,e.loading1=!1,e.loading2=!1})).catch((function(t){l.a.defaults.timeout=5e3,l.a.defaults.responseType="",e.$message.error("导出失败!"),e.loading=!1,e.loading1=!1,e.loading2=!1})),2==this.TYPE&&Object(a.d)(t).then((function(t){var n=window.URL.createObjectURL(new Blob([t.data]));t=document.createElement("a");t.style.display="none",t.href=n,t.setAttribute("download","download.xlsx"),document.body.appendChild(t),t.click(),l.a.defaults.timeout=5e3,l.a.defaults.responseType="",e.visible=!1,e.loading=!1,e.loading1=!1,e.loading2=!1})).catch((function(t){l.a.defaults.timeout=5e3,l.a.defaults.responseType="",e.$message.error("导出失败!"),e.loading=!1,e.loading1=!1,e.loading2=!1})),3==this.TYPE&&Object(r.d)(t).then((function(t){var n=window.URL.createObjectURL(new Blob([t.data]));t=document.createElement("a");t.style.display="none",t.href=n,t.setAttribute("download","download.xlsx"),document.body.appendChild(t),t.click(),l.a.defaults.timeout=5e3,l.a.defaults.responseType="",e.visible=!1,e.loading=!1,e.loading1=!1,e.loading2=!1})).catch((function(t){l.a.defaults.timeout=5e3,l.a.defaults.responseType="",e.$message.error("导出失败!"),e.loading=!1,e.loading1=!1,e.loading2=!1})),4==this.TYPE&&Object(o.d)(t).then((function(t){var n=window.URL.createObjectURL(new Blob([t.data]));t=document.createElement("a");t.style.display="none",t.href=n,t.setAttribute("download","download.xlsx"),document.body.appendChild(t),t.click(),l.a.defaults.timeout=5e3,l.a.defaults.responseType="",e.visible=!1,e.loading=!1,e.loading1=!1,e.loading2=!1})).catch((function(t){l.a.defaults.timeout=5e3,l.a.defaults.responseType="",e.$message.error("导出失败!"),e.loading=!1,e.loading1=!1,e.loading2=!1}))},handelOk:function(){this.loading2=!0,this.showColType=0,this.export()},menuHandel:function(e){switch(this.TYPE){case 1:0==e.key?(this.loading=!0,this.showColType=1,this.export()):1==e.key?this.getHAirwayTempField():2==e.key&&(this.visible=!0,this.getHAirwayBillField());break;case 2:0==e.key?(this.loading=!0,this.showColType=1,this.export()):1==e.key&&this.getMAirwayTempField(),2==e.key&&(this.visible=!0,this.getMAirwayBillField());break;case 3:0==e.key?(this.loading=!0,this.showColType=1,this.export()):1==e.key&&this.getAirImportHAirwayTempField(),2==e.key&&(this.visible=!0,this.getAirImportHAirwayBillField());break;case 4:0==e.key?(this.loading=!0,this.showColType=1,this.export()):1==e.key&&this.getAirImportMAirwayTempField(),2==e.key&&(this.visible=!0,this.getAirImportMAirwayBillField())}}}},n=n("2877"),c=Object(n.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Export"},[n("a-dropdown",{attrs:{placement:"bottomCenter"}},[n("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:downpageasync",expression:"`api:admin:hairwaybill:downpageasync`",arg:"permission"}],attrs:{type:"primary"}},[e._v("导出")]),n("a-menu",{attrs:{slot:"overlay"},on:{click:e.menuHandel},slot:"overlay"},[n("a-menu-item",{key:0},[n("a-button",{attrs:{type:"primary",block:"",loading:e.loading}},[e._v("导出全部字段")])],1),n("a-menu-item",{key:1},[n("a-button",{attrs:{type:"primary",block:"",loading:e.loading1}},[e._v("导出部分字段")])],1),n("a-menu-item",{key:2},[n("a-button",{attrs:{type:"primary",block:""}},[e._v("导出所选字段")])],1)],1)],1),n("a-modal",{attrs:{width:800,visible:e.visible,title:"分单字段",maskClosable:!1,destroyOnClose:!0,"confirm-loading":e.loading2,centered:""},on:{cancel:function(t){e.visible=!1},ok:e.handelOk}},[n("template",{slot:"closeIcon"},[n("a-button",{attrs:{type:"danger",size:"small",shape:"circle",icon:"close-circle"}})],1),n("a-spin",{attrs:{spinning:e.spinning}},[n("a-checkbox-group",{on:{change:e.change}},[n("a-row",{staticClass:"beauty-scroll",staticStyle:{"max-height":"400px",overflow:"auto"}},[e._l(e.fields,(function(t){return[n("a-col",{key:t,attrs:{span:8}},[n("a-checkbox",{attrs:{value:t}},[e._v(e._s(t))])],1)]}))],2)],1)],1)],2)],1)}),[],!1,null,null,null);t.a=c.exports},2716:function(e,t,n){"use strict";n.d(t,"h",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"b",(function(){return p})),n.d(t,"f",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return y})),n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return T}));t=n("96cf");var i=n("1da1"),a=n("7424"),r=n("b775");function o(e,t,n,i){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(regeneratorRuntime.mark((function e(t,n,i,o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.HAIRWAYBILLIMPORTGETPAGE,r.a.POST,{currentPage:t,pageSize:n,dynamicFilter:i,filter:o}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.HAIRWAYBILLIMPORTADD,r.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.HAIRWAYBILLIMPORTUPDATE,r.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.HAIRWAYBILLIMPORTBATCHSOFTDELETE,r.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.HAIRWAYBILLIMPORTGETHEDERANDDETAILASYNC,r.a.GET,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.HAIRWAYBILLIMPORTCHANGESTATUSASYNC,r.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.HAIRWAYBILLIMPORTGETMOREHAWBTOMAWBASYNC,r.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.HAIRWAYBILLIMPORTGETHAWBCOLLISTASYNC,r.a.GET));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.HAIRWAYBILLIMPORTDOWNPAGEASYNC,r.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},e385:function(e,t,n){"use strict";n("195b")},f910:function(e,t,n){"use strict";n("99af"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("fb6a"),n("a434"),n("b0c0"),n("159b"),n("96cf");var i=n("1da1"),a=n("2909"),r=n("b2b6"),o=n("a701"),s={i18n:n("9225"),props:{ID:{type:String,default:"0"}},data:function(){return{fileTypes:[],fileList:[],myFileList:[],uploadFileList:[],visible:!1,title:"已选文件",confirmLoading:!1,validRules:{fileType:[{required:!0,message:"请选择文件类型"}]}}},created:function(){this.getDictionary(),"0"!==this.ID&&this.getUploadFileList()},methods:{getDictionary:function(){var e=this;Object(o.d)(["FileType"]).then((function(t){1===t.data.code&&(t=t.data.data,e.fileTypes=t.filter((function(e){return"FileType"===e.code}))[0].data)}))},getUploadFileList:function(){var e=this;Object(r.c)(0,0,{referenceID:this.ID}).then((function(t){1===t.data.code&&(e.uploadFileList=t.data.data.list)}))},beforeUpload:function(e){var t=this;return this.fileList=[].concat(Object(a.a)(this.fileList),[e]),this.myFileList=[],this.fileList.map((function(e){t.myFileList.push({status:0,fileName:e.name,filePath:"",referenceID:t.ID,fileType:e.fileType,remark:e.remark})})),!1},fileChange:function(e){this.visible=!0,e.file.size/1024/1024<20||(this.$message.error(e.file.name+":超出限制大小20M!"),this.handleRemove(e.file))},handleRemove:function(e){var t=this.fileList.indexOf(e);e=this.fileList.slice();e.splice(t,1),this.fileList=e},cancel:function(){this.visible=!1,this.fileList=[],this.myFileList=[]},upload:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var n,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0==e.fileList.length)return t.abrupt("return");t.next=2;break;case 2:return n=e.$refs.xTableFileList,i=n.getRecordset(),i.insertRecords,i.removeRecords,i.updateRecords,t.next=6,n.validate(!0).catch((function(e){return e}));case 6:if(t.sent)return t.abrupt("return",!1);t.next=9;break;case 9:e.confirmLoading=!0,a=new FormData,e.fileList.forEach((function(e){a.append("file",e)})),a.append("filetypelistjson",JSON.stringify(e.myFileList)),Object(r.d)(a).then((function(t){1===t.data.code?(e.fileList=[],e.confirmLoading=!1,e.visible=!1,e.$message.success(t.data.msg),e.getUploadFileList()):(e.confirmLoading=!1,e.$message.error(t.data.msg))})).catch((function(t){e.confirmLoading=!1,e.$message.error("系统内部错误!")}));case 14:case"end":return t.stop()}}),t)})))()},batchDelete:function(){var e=this,t=this.$refs.xTableFile.getCheckboxRecords();if(0==t.length)return!1;t=t.map((function(e){return e.id})),Object(r.a)(t).then((function(t){1===t.data.code&&e.getUploadFileList()}))},downloadFile:function(e){Object(r.b)(this,e.id,e.fileName)}}};n("e385"),n=n("2877"),s=Object(n.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"AttachedFiles"},[n("a-card",{attrs:{size:"small",title:"随附文件",id:"AttachedFiles"}},[0<e.uploadFileList.length&&0<e.$refs.xTableFile.getCheckboxRecords().length?n("a-popconfirm",{attrs:{slot:"extra",title:e.$t("47")},on:{confirm:e.batchDelete},slot:"extra"},[n("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:file:batchsoftdelete",expression:"`api:admin:file:batchsoftdelete`",arg:"permission"}],attrs:{type:"danger",size:"small",icon:"delete"}},[e._v("删除文件")])],1):e._e(),n("a-upload-dragger",{attrs:{"file-list":e.fileList,showUploadList:!1,directory:!1,multiple:!0,"before-upload":e.beforeUpload,remove:e.handleRemove},on:{change:e.fileChange}},[n("p",{staticClass:"ant-upload-drag-icon"},[n("a-icon",{attrs:{type:"inbox"}})],1),n("p",{staticClass:"ant-upload-text"},[e._v("单击或拖动文件到此区域")])]),n("vxe-table",{ref:"xTableFile",attrs:{"keep-source":"",data:e.uploadFileList,"show-overflow":"",resizable:"",border:"","highlight-hover-row":""}},[n("vxe-column",{attrs:{type:"checkbox",width:"50"},scopedSlots:e._u([{key:"header",fn:function(t){var i=t.checked;t=t.indeterminate;return[n("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTableFile.toggleAllCheckboxRow()}}},[n("span",t?[n("a-checkbox",{attrs:{indeterminate:!0}})]:i?[n("a-checkbox",{attrs:{checked:!0}})]:[n("a-checkbox")],1)])]}},{key:"checkbox",fn:function(t){var i=t.row,a=t.checked;t=t.indeterminate;return[n("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTableFile.toggleCheckboxRow(i)}}},[n("span",t?[n("a-checkbox",{attrs:{indeterminate:!0}})]:a?[n("a-checkbox",{attrs:{checked:!0}})]:[n("a-checkbox")],1)])]}}])}),n("vxe-column",{attrs:{field:"fileName",title:"文件名"}}),n("vxe-column",{attrs:{field:"fileType",title:"文件类型"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[e._l(e.fileTypes,(function(t){return[t.value==i.fileType?n("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))]}}])}),n("vxe-column",{attrs:{field:"remark",title:"备注"}}),n("vxe-column",{attrs:{width:"60",fixed:"right",title:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("a-space",[n("a-tooltip",{attrs:{placement:"top",title:"下载"}},[n("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:file:filedownload",expression:"`api:admin:file:filedownload`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"download"},on:{click:function(t){return e.downloadFile(i)}}})],1)],1)]}}])})],1)],1),n("a-modal",{attrs:{width:800,visible:e.visible,title:e.title,"confirm-loading":e.confirmLoading,maskClosable:!1,destroyOnClose:!0,centered:""},on:{cancel:e.cancel,ok:e.upload}},[n("template",{slot:"closeIcon"},[n("a-button",{attrs:{type:"danger",size:"small",shape:"circle",icon:"close-circle"}})],1),n("vxe-table",{ref:"xTableFileList",attrs:{height:600,"keep-source":"",data:e.myFileList,"show-overflow":"",resizable:"",border:"","highlight-hover-row":"","edit-config":{trigger:"click",mode:"row",showStatus:!0},"edit-rules":e.validRules}},[n("vxe-column",{attrs:{type:"checkbox",width:"50"},scopedSlots:e._u([{key:"header",fn:function(t){var i=t.checked;t=t.indeterminate;return[n("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTableFileList.toggleAllCheckboxRow()}}},[n("span",t?[n("a-checkbox",{attrs:{indeterminate:!0}})]:i?[n("a-checkbox",{attrs:{checked:!0}})]:[n("a-checkbox")],1)])]}},{key:"checkbox",fn:function(t){var i=t.row,a=t.checked;t=t.indeterminate;return[n("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTableFileList.toggleCheckboxRow(i)}}},[n("span",t?[n("a-checkbox",{attrs:{indeterminate:!0}})]:a?[n("a-checkbox",{attrs:{checked:!0}})]:[n("a-checkbox")],1)])]}}])}),n("vxe-column",{attrs:{field:"fileName",title:"文件名"}}),n("vxe-column",{attrs:{field:"fileType",title:"文件类型","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(t){var i=t.row;return[n("a-select",{staticStyle:{width:"100%"},model:{value:i.fileType,callback:function(t){e.$set(i,"fileType",t)},expression:"row.fileType"}},e._l(e.fileTypes,(function(t,i){return n("a-select-option",{key:i,attrs:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),1)]}},{key:"default",fn:function(t){var i=t.row;return[e._l(e.fileTypes,(function(t){return[t.value==i.fileType?n("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))]}}])}),n("vxe-column",{attrs:{field:"remark",title:"备注","edit-render":{name:"$input",defaultValue:"",props:{maxlength:200}}}}),n("vxe-column",{attrs:{width:"60",fixed:"right",title:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("a-space",[n("a-popconfirm",{attrs:{title:e.$t("47")},on:{confirm:function(t){return e.handleRemove(i)}}},[n("a-tooltip",{attrs:{placement:"top",title:"删除"}},[n("a-button",{attrs:{type:"danger",size:"small",icon:"delete"}})],1)],1)],1)]}}])})],1)],2)],1)}),[],!1,null,"556f690b",null);t.a=s.exports},fbf24:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return h}));t=n("96cf");var i=n("1da1"),a=n("7424"),r=n("b775");function o(e){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.USERLAYOUTADD,r.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.USERLAYOUTGET,r.a.GET,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.USERLAYOUTUPDATE,r.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.USERLAYOUTSOFTDELETE,r.a.DELETE,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(r.e)(a.USERLAYOUTGETUILAYOUTBYUSERASYNC,r.a.GET,{usercode:t,frameuiid:n}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
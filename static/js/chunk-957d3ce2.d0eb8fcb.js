(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-957d3ce2"],{"18e3":function(e,t,a){"use strict";a("4970")},"207c":function(e,t,a){"use strict";a("4de4"),a("a9e3"),a("d3b7"),a("ac1f"),a("3ca3"),a("1276"),a("ddb0"),a("2b3d");var i=a("682e"),n=a("7943"),o=a("2716"),s=a("046f"),r=a("597e"),l=a("c408"),c=a("f221"),d=a("bfdf"),p=a("3205"),u=a("cebe"),h=a.n(u);u={name:"Export",props:{TYPE:{type:Number,default:0},pagination:{type:Object,default:function(){}},dynamicFilter:{type:Object,default:function(){}},filter:{type:Object,default:function(){}}},data:function(){return{visible:!1,spinning:!1,fields:[],showColType:0,showCols:[],loading:!1,loading1:!1,loading2:!1,loading3:!1}},created:function(){},methods:{change:function(e){this.showCols=e},getHAirwayBillField:function(){var e=this;this.spinning=!0,Object(i.g)().then((function(t){1===t.data.code&&(e.fields=t.data.data,e.spinning=!1)}))},getMAirwayBillField:function(){var e=this;this.spinning=!0,Object(n.f)().then((function(t){1===t.data.code&&(e.fields=t.data.data,e.spinning=!1)}))},getAirImportHAirwayBillField:function(){var e=this;this.spinning=!0,Object(o.f)().then((function(t){1===t.data.code&&(e.fields=t.data.data,e.spinning=!1)}))},getAirImportMAirwayBillField:function(){var e=this;this.spinning=!0,Object(s.e)().then((function(t){1===t.data.code&&(e.fields=t.data.data,e.spinning=!1)}))},getHAirwayTempField:function(){var e=this;this.loading1=!0,Object(p.d)("AirExportHawbColumns").then((function(t){1===t.data.code&&(t=t.data.data.list[0].paramValue,e.showCols=""==t?[]:t.split(","),e.showColType=0,e.export())}))},getMAirwayTempField:function(){var e=this;this.loading1=!0,Object(p.d)("AirExportMawbColumns").then((function(t){1===t.data.code&&(t=t.data.data.list[0].paramValue,e.showCols=""==t?[]:t.split(","),e.showColType=0,e.export())}))},getAirImportHAirwayTempField:function(){var e=this;this.loading1=!0,Object(p.d)("AirImportHawbColumns").then((function(t){1===t.data.code&&(t=t.data.data.list[0].paramValue,e.showCols=""==t?[]:t.split(","),e.showColType=0,e.export())}))},getAirImportMAirwayTempField:function(){var e=this;this.loading1=!0,Object(p.d)("AirImportMawbColumns").then((function(t){1===t.data.code&&(t=t.data.data.list[0].paramValue,e.showCols=""==t?[]:t.split(","),e.showColType=0,e.export())}))},getSeaExportHawbField:function(){var e=this;this.spinning=!0,Object(r.g)().then((function(t){1===t.data.code&&(e.fields=t.data.data,e.spinning=!1)}))},getSeaExportHawbTempField:function(){var e=this;this.loading1=!0,Object(p.d)("SeaExportHawbColumns").then((function(t){1===t.data.code&&(t=t.data.data.list[0].paramValue,e.showCols=""==t?[]:t.split(","),e.showColType=0,e.export())}))},getSeaImportHawbField:function(){var e=this;this.spinning=!0,Object(l.f)().then((function(t){1===t.data.code&&(e.fields=t.data.data,e.spinning=!1)}))},getSeaImportHawbTempField:function(){var e=this;this.loading1=!0,Object(p.d)("SeaImportHawbColumns").then((function(t){1===t.data.code&&(t=t.data.data.list[0].paramValue,e.showCols=""==t?[]:t.split(","),e.showColType=0,e.export())}))},getSeaExportMawbField:function(){var e=this;this.spinning=!0,Object(c.d)().then((function(t){1===t.data.code&&(e.fields=t.data.data,e.spinning=!1)}))},getSeaExportMawbTempField:function(){var e=this;this.loading1=!0,Object(p.d)("SeaExportMawbColumns").then((function(t){1===t.data.code&&(t=t.data.data.list[0].paramValue,e.showCols=""==t?[]:t.split(","),e.showColType=0,e.export())}))},getSeaImportMawbField:function(){var e=this;this.spinning=!0,Object(d.e)().then((function(t){1===t.data.code&&(e.fields=t.data.data,e.spinning=!1)}))},getSeaImportMawbTempField:function(){var e=this;this.loading1=!0,Object(p.d)("SeaImportMawbColumns").then((function(t){1===t.data.code&&(t=t.data.data.list[0].paramValue,e.showCols=""==t?[]:t.split(","),e.showColType=0,e.export())}))},export:function(){var e=this,t={currentPage:this.pagination.currentPage,pageSize:this.pagination.pageSize,dynamicFilter:this.dynamicFilter,filter:this.filter,showColType:this.showColType,showCols:this.showCols};h.a.defaults.timeout="",h.a.defaults.responseType="blob",1==this.TYPE&&Object(i.f)(t).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data]));t=document.createElement("a");t.style.display="none",t.href=a,t.setAttribute("download","download.xlsx"),document.body.appendChild(t),t.click(),h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.visible=!1,e.loading=!1,e.loading1=!1,e.loading2=!1})).catch((function(t){h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.$message.error("系统内部错误!"),e.loading=!1,e.loading1=!1,e.loading2=!1})),2==this.TYPE&&Object(n.d)(t).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data]));t=document.createElement("a");t.style.display="none",t.href=a,t.setAttribute("download","download.xlsx"),document.body.appendChild(t),t.click(),h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.visible=!1,e.loading=!1,e.loading1=!1,e.loading2=!1})).catch((function(t){h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.$message.error("系统内部错误!"),e.loading=!1,e.loading1=!1,e.loading2=!1})),3==this.TYPE&&Object(o.e)(t).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data]));t=document.createElement("a");t.style.display="none",t.href=a,t.setAttribute("download","download.xlsx"),document.body.appendChild(t),t.click(),h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.visible=!1,e.loading=!1,e.loading1=!1,e.loading2=!1})).catch((function(t){h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.$message.error("系统内部错误!"),e.loading=!1,e.loading1=!1,e.loading2=!1})),4==this.TYPE&&Object(s.c)(t).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data]));t=document.createElement("a");t.style.display="none",t.href=a,t.setAttribute("download","download.xlsx"),document.body.appendChild(t),t.click(),h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.visible=!1,e.loading=!1,e.loading1=!1,e.loading2=!1})).catch((function(t){h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.$message.error("系统内部错误!"),e.loading=!1,e.loading1=!1,e.loading2=!1})),5==this.TYPE&&Object(r.f)(t).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data]));t=document.createElement("a");t.style.display="none",t.href=a,t.setAttribute("download","download.xlsx"),document.body.appendChild(t),t.click(),h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.visible=!1,e.loading=!1,e.loading1=!1,e.loading2=!1})).catch((function(t){h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.$message.error("系统内部错误!"),e.loading=!1,e.loading1=!1,e.loading2=!1})),6==this.TYPE&&Object(l.e)(t).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data]));t=document.createElement("a");t.style.display="none",t.href=a,t.setAttribute("download","download.xlsx"),document.body.appendChild(t),t.click(),h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.visible=!1,e.loading=!1,e.loading1=!1,e.loading2=!1})).catch((function(t){h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.$message.error("系统内部错误!"),e.loading=!1,e.loading1=!1,e.loading2=!1})),7==this.TYPE&&Object(c.c)(t).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data]));t=document.createElement("a");t.style.display="none",t.href=a,t.setAttribute("download","download.xlsx"),document.body.appendChild(t),t.click(),h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.visible=!1,e.loading=!1,e.loading1=!1,e.loading2=!1})).catch((function(t){h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.$message.error("系统内部错误!"),e.loading=!1,e.loading1=!1,e.loading2=!1})),8==this.TYPE&&Object(d.d)(t).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data]));t=document.createElement("a");t.style.display="none",t.href=a,t.setAttribute("download","download.xlsx"),document.body.appendChild(t),t.click(),h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.visible=!1,e.loading=!1,e.loading1=!1,e.loading2=!1})).catch((function(t){h.a.defaults.timeout=5e3,h.a.defaults.responseType="",e.$message.error("系统内部错误!"),e.loading=!1,e.loading1=!1,e.loading2=!1}))},handelOk:function(){this.loading2=!0,this.showColType=0,this.export()},menuHandel:function(e){switch(this.TYPE){case 1:0==e.key?(this.loading=!0,this.showColType=1,this.export()):1==e.key?this.getHAirwayTempField():2==e.key&&(this.visible=!0,this.getHAirwayBillField());break;case 2:0==e.key?(this.loading=!0,this.showColType=1,this.export()):1==e.key&&this.getMAirwayTempField(),2==e.key&&(this.visible=!0,this.getMAirwayBillField());break;case 3:0==e.key?(this.loading=!0,this.showColType=1,this.export()):1==e.key&&this.getAirImportHAirwayTempField(),2==e.key&&(this.visible=!0,this.getAirImportHAirwayBillField());break;case 4:0==e.key?(this.loading=!0,this.showColType=1,this.export()):1==e.key&&this.getAirImportMAirwayTempField(),2==e.key&&(this.visible=!0,this.getAirImportMAirwayBillField());break;case 5:0==e.key?(this.loading=!0,this.showColType=1,this.export()):1==e.key&&this.getSeaExportHawbTempField(),2==e.key&&(this.visible=!0,this.getSeaExportHawbField());break;case 6:0==e.key?(this.loading=!0,this.showColType=1,this.export()):1==e.key&&this.getSeaImportHawbTempField(),2==e.key&&(this.visible=!0,this.getSeaImportHawbField());break;case 7:0==e.key?(this.loading=!0,this.showColType=1,this.export()):1==e.key&&this.getSeaExportMawbTempField(),2==e.key&&(this.visible=!0,this.getSeaExportMawbField());break;case 8:0==e.key?(this.loading=!0,this.showColType=1,this.export()):1==e.key&&this.getSeaImportMawbTempField(),2==e.key&&(this.visible=!0,this.getSeaImportMawbField())}}}},a=a("2877"),u=Object(a.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Export"},[a("a-dropdown",{attrs:{placement:"bottomCenter"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:downpageasync",expression:"`api:admin:hairwaybill:downpageasync`",arg:"permission"}],attrs:{type:"primary",icon:"export"}},[e._v("导出")]),a("a-menu",{attrs:{slot:"overlay"},on:{click:e.menuHandel},slot:"overlay"},[a("a-menu-item",{key:0},[a("a-button",{attrs:{type:"primary",block:"",loading:e.loading}},[e._v("导出全部字段")])],1),a("a-menu-item",{key:1},[a("a-button",{attrs:{type:"primary",block:"",loading:e.loading1}},[e._v("导出部分字段")])],1),a("a-menu-item",{key:2},[a("a-button",{attrs:{type:"primary",block:""}},[e._v("导出所选字段")])],1)],1)],1),a("a-modal",{attrs:{width:800,visible:e.visible,title:"分单字段",maskClosable:!1,destroyOnClose:!0,"confirm-loading":e.loading2,centered:""},on:{cancel:function(t){e.visible=!1},ok:e.handelOk}},[a("template",{slot:"closeIcon"},[a("a-button",{attrs:{type:"danger",size:"small",shape:"circle",icon:"close-circle"}})],1),a("a-spin",{attrs:{spinning:e.spinning}},[a("a-checkbox-group",{on:{change:e.change}},[a("a-row",{staticClass:"beauty-scroll",staticStyle:{"max-height":"400px",overflow:"auto"}},[e._l(e.fields,(function(t){return[a("a-col",{key:t,attrs:{span:8}},[a("a-checkbox",{attrs:{value:t}},[e._v(e._s(t))])],1)]}))],2)],1)],1)],2)],1)}),[],!1,null,null,null);t.a=u.exports},"293f":function(e,t,a){"use strict";a.r(t),a("99af"),a("4de4"),a("d81d"),a("b0c0"),a("d3b7"),a("25f0");var i=a("5530"),n=a("bfdf"),o=a("fbf24"),s=a("a701"),r=a("2fc4"),l=a("0559"),c=a("5880"),d=a("c32d"),p=a.n(d),u=a("f910");d=a("207c"),p={name:"SeaImportMawbNew",i18n:a("9225"),components:{MySearch:r.a,MySearchWindow:l.a,AttachedFiles:u.a,Export:d.a},computed:Object(i.a)(Object(i.a)({},Object(c.mapGetters)("account",["user"])),{},{fields:function(){return[{value:"orderNo",label:"业务编号",type:"string"},{value:"mawb",label:"主单号",type:"string"}]}}),data:function(){return{minHeight:window.innerHeight-219,menuID:this.$route.meta.id,layoutList:[],seaMAirwayBillImportList:[],loading:!1,pagination:{currentPage:1,pageSize:100,totalResult:0},dynamicFilter:{},filter:{},searchWindowVisible:!1,footerData:[],mergeFooterItems:[{row:0,col:1,rowspan:1,colspan:1},{row:1,col:4,rowspan:1,colspan:8},{row:2,col:4,rowspan:1,colspan:8}],ID:"0",visible:!1}},created:function(){0xe9abb22cc045==this.menuID&&this.getLayoutList(),this.getMAirwayBillList(),this.getDictionary()},methods:{moment:p.a,getDictionary:function(){Object(s.d)([]).then((function(e){1===e.data.code&&e.data.data}))},getLayoutList:function(){var e=this;Object(o.c)(this.user.name,this.menuID).then((function(t){1===t.data.code&&(e.layoutList=t.data.data)}))},getMAirwayBillList:function(){var e=this;switch(this.loading=!0,this.menuID){case 0xe9abb22cc045:this.filter={mAirwayStatus:0};break;case 0xe9abbc3f6045:this.filter={mAirwayStatus:1};break;case 0xe9abc67e9045:this.filter={mAirwayStatus:2};break;case 0xe9abcf3bf045:this.filter={mAirwayStatus:3};break;case 0xe9abd7a7b045:this.filter={mAirwayStatus:4}}Object(n.g)(this.pagination.currentPage,this.pagination.pageSize,this.dynamicFilter,this.filter).then((function(t){1===t.data.code&&(e.seaMAirwayBillImportList=t.data.data.list,e.pagination.totalResult=t.data.data.total,e.loading=!1)}))},handlePageChange:function(e){var t=e.currentPage;e=e.pageSize;this.pagination.currentPage=t,this.pagination.pageSize=e,this.getMAirwayBillList()},onSearch:function(e){this.dynamicFilter=e,this.pagination.currentPage=1,this.getMAirwayBillList()},onSearchFilter:function(e){this.dynamicFilter=e,this.pagination.currentPage=1,this.searchWindowVisible=!1,this.getMAirwayBillList()},footerMethod:function(){return this.footerData},change:function(){},batchDelete:function(){var e=this,t=this.$refs.xTable.getCheckboxRecords();if(0==t.length)return!1;t=t.map((function(e){return e.id})),Object(n.c)(t).then((function(t){1===t.data.code&&e.getMAirwayBillList()}))},insert:function(){this.$router.push("/EditSeaImportMawb?time=".concat(Date.now(),"&id=0&tempID=0&type=1"))},edit:function(e){this.$router.push("/EditSeaImportMawb?id=".concat(e.id,"&tempID=0&type=1"))},review:function(e){this.$router.push({path:"/ReviewSeaImportMawb",query:{id:e.id,menuID:this.menuID}})},handleMenuClick:function(e){this.$router.push("/EditSeaImportMawb?time=".concat(Date.now(),"&id=0&tempID=").concat(e.key,"&type=1"))},insertTemp:function(){this.$router.push("/EditSeaImportMawb?time=".concat(Date.now(),"&id=0&tempID=0&menuID=").concat(this.menuID,"&type=2"))},editTemp:function(e){this.$router.push("/EditSeaImportMawb?id=0&tempID=".concat(e.id,"&menuID=").concat(this.menuID,"&type=2"))},deleteTemp:function(e){var t=this;Object(o.d)(e.id).then((function(e){1===e.data.code&&(t.getLayoutList(),t.$message.success("模板删除成功!"))}))},changeStatus:function(){var e=this,t=this.$refs.xTable.getCheckboxRecords();if(0==t.length)return!1;var a=[],i=[],o=[];if(t.map((function(e){0==e.pieces&&a.push("1"),0==e.weight&&i.push("1"),0==e.volume&&o.push("1")})),0<a.length||0<i.length||0<o.length)return this.$message.error("件数，重量， 体积不能为0!"),!1;t={idlist:t.map((function(e){return{id:e.id}})),mAirwayStatus:1},Object(n.i)(t).then((function(t){1===t.data.code?(e.$message.success("审核成功!"),e.getMAirwayBillList()):e.$message.error("审核失败!")}))},printAirwayBill:function(e){var t=[];this.$refs.xTable.getCheckboxRecords().map((function(e){t.push(e.id)})),this.$router.push("/PrintAirwayBill?time=".concat(Date.now(),"&ids=").concat(t,"&type=").concat(e.key))},openFile:function(){var e=[];if(this.$refs.xTable.getCheckboxRecords().map((function(t){e.push(t.id)})),1<e.length)return this.$message.error("不支持多选!"),!1;this.ID=e[0].toString(),this.visible=!0}}},a("18e3"),a=a("2877"),p=Object(a.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"SeaImportMawbNew"},[a("vxe-toolbar",{attrs:{custom:"",print:""},scopedSlots:e._u([{key:"tools",fn:function(){return[a("a-space",[0xe9abb22cc045==e.menuID?a("a-dropdown",{attrs:{placement:"bottomCenter",type:"primary"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seamairwaybillimport:add",expression:"`api:admin:seamairwaybillimport:add`",arg:"permission"}],attrs:{type:"primary",icon:"plus-circle"},on:{click:e.insert}},[e._v("新建主单"),a("a-icon",{attrs:{type:"ellipsis"}})],1),a("a-menu",{attrs:{slot:"overlay"},on:{click:e.handleMenuClick},slot:"overlay"},[a("a-menu-item",{attrs:{disabled:""}},[a("a-button",{attrs:{type:"primary",block:""},on:{click:function(t){return t.stopPropagation(),e.insertTemp(t)}}},[e._v("新建模板")])],1),e._l(e.layoutList,(function(t){return a("a-menu-item",{key:t.id},[a("a-space",[a("a-button",{attrs:{type:"primary"}},[a("a-tooltip",{attrs:{placement:"top",title:t.layoutName}},[a("div",{staticStyle:{width:"100px","max-width":"100px",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[e._v(e._s(t.layoutName))])])],1),a("a-tooltip",{attrs:{placement:"top",title:"编辑模板"}},[a("a-icon",{attrs:{type:"edit"},on:{click:function(a){return a.stopPropagation(),e.editTemp(t)}}})],1),a("a-popconfirm",{attrs:{title:e.$t("47"),overlayStyle:{zIndex:1051}},on:{confirm:function(a){return a.stopPropagation(),e.deleteTemp(t)}}},[a("a-tooltip",{attrs:{placement:"top",title:"删除模板"}},[a("a-icon",{attrs:{type:"delete"},on:{click:function(e){e.stopPropagation()}}})],1)],1)],1)],1)}))],2)],1):e._e(),!e.loading&&0<e.$refs.xTable.getCheckboxRecords().length&&0xe9abb22cc045==e.menuID?a("a-popconfirm",{attrs:{title:e.$t("47")},on:{confirm:e.batchDelete}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seamairwaybillimport:batchsoftdelete",expression:"`api:admin:seamairwaybillimport:batchsoftdelete`",arg:"permission"}],attrs:{type:"danger",icon:"delete"}},[e._v("删除")])],1):e._e(),!e.loading&&0<e.$refs.xTable.getCheckboxRecords().length&&0xe9abb22cc045==e.menuID?a("a-popconfirm",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seamairwaybillimport:mawbchangestatusasync",expression:"`api:admin:seamairwaybillimport:mawbchangestatusasync`",arg:"permission"}],attrs:{title:"确认通过审核吗?"},on:{confirm:e.changeStatus}},[a("a-button",{attrs:{type:"primary",icon:"check-circle"}},[e._v("审核")])],1):e._e(),!e.loading&&0<e.$refs.xTable.getCheckboxRecords().length?a("a-dropdown",{attrs:{placement:"bottomCenter"}},[a("a-menu",{attrs:{slot:"overlay"},on:{click:e.printAirwayBill},slot:"overlay"},[a("a-menu-item",{key:2},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seamairwaybillimport:getmoremawbreportasync",expression:"`api:admin:seamairwaybillimport:getmoremawbreportasync`",arg:"permission"}],attrs:{type:"primary",block:""}},[e._v("打印主单")])],1),a("a-menu-item",{key:3},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seamairwaybillimport:getmorecargomfreportasync",expression:"`api:admin:seamairwaybillimport:getmorecargomfreportasync`",arg:"permission"}],attrs:{type:"primary",block:""}},[e._v("打印订舱单")])],1),a("a-menu-item",{key:4},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seamairwaybillimport:getmoremawbreportasync",expression:"`api:admin:seamairwaybillimport:getmoremawbreportasync`",arg:"permission"}],attrs:{type:"primary",block:""}},[e._v("打印DL-888D")])],1)],1),a("a-button",{attrs:{type:"primary",icon:"printer"}},[e._v("打印")])],1):e._e(),!e.loading&&0<e.$refs.xTable.getCheckboxRecords().length?a("a-button",{attrs:{type:"primary",icon:"file"},on:{click:e.openFile}},[e._v("随附文件")]):e._e(),0<e.seaMAirwayBillImportList.length?a("Export",{attrs:{TYPE:8,pagination:e.pagination,dynamicFilter:e.dynamicFilter,filter:e.filter}}):e._e(),a("my-search",{attrs:{fields:e.fields},on:{click:e.onSearch}}),a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(t){e.searchWindowVisible=!0}}},[e._v("高级查询")]),a("my-search-window",{attrs:{visible:e.searchWindowVisible,fields:e.fields,menuID:e.menuID},on:{"update:visible":function(t){e.searchWindowVisible=t},click:e.onSearchFilter}})],1)]},proxy:!0}])}),a("vxe-table",{ref:"xTable",attrs:{"keep-source":"",data:e.seaMAirwayBillImportList,loading:e.loading,"print-config":{},"show-overflow":"",resizable:"",border:"","highlight-hover-row":"",height:e.minHeight,"show-footer":0xe9abbc3f6045==e.menuID,"footer-method":e.footerMethod,"merge-footer-items":e.mergeFooterItems}},[a("vxe-column",{attrs:{type:"checkbox",width:"50",fixed:"left"},scopedSlots:e._u([{key:"header",fn:function(t){var i=t.checked;t=t.indeterminate;return[a("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTable.toggleAllCheckboxRow()}}},[a("span",t?[a("a-checkbox",{attrs:{indeterminate:!0},on:{change:e.change}})]:i?[a("a-checkbox",{attrs:{checked:!0},on:{change:e.change}})]:[a("a-checkbox",{on:{change:e.change}})],1)])]}},{key:"checkbox",fn:function(t){var i=t.row,n=t.checked;t=t.indeterminate;return[a("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTable.toggleCheckboxRow(i)}}},[a("span",t?[a("a-checkbox",{attrs:{indeterminate:!0},on:{change:e.change}})]:n?[a("a-checkbox",{attrs:{checked:!0},on:{change:e.change}})]:[a("a-checkbox",{on:{change:e.change}})],1)])]}}])}),a("vxe-column",{attrs:{field:"orderNo",title:"业务编号"}}),a("vxe-column",{attrs:{field:"mawb",title:"主单号"}}),a("vxe-column",{attrs:{field:"pieces",title:"订舱件数"}}),a("vxe-column",{attrs:{field:"weight",title:"订舱重量"}}),a("vxe-column",{attrs:{field:"volume",title:"订舱体积"}}),a("vxe-column",{attrs:{field:"loadingPort",title:"起运港"}}),a("vxe-column",{attrs:{field:"transferPort",title:"中转港"}}),a("vxe-column",{attrs:{field:"destinationPort",title:"目的港"}}),a("vxe-column",{attrs:{field:"bookingCarrier",title:"订舱代理"}}),a("vxe-column",{attrs:{field:"bookingContact",title:"联系人"}}),a("vxe-column",{attrs:{field:"bookingContactPhone",title:"电话"}}),a("vxe-column",{attrs:{width:"130",title:"操作",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("a-space",[0xe9abb22cc045==e.menuID?a("a-tooltip",{attrs:{placement:"top",title:"编辑"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seamairwaybillimport:update",expression:"`api:admin:seamairwaybillimport:update`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"edit"},on:{click:function(t){return e.edit(i)}}})],1):e._e(),a("a-tooltip",{attrs:{placement:"top",title:"查看主单"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seamairwaybillimport:gethederanddetailasync",expression:"`api:admin:seamairwaybillimport:gethederanddetailasync`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"eye"},on:{click:function(t){return e.review(i)}}})],1)],1)]}}])})],1),a("vxe-pager",{attrs:{"current-page":e.pagination.currentPage,"page-size":e.pagination.pageSize,total:e.pagination.totalResult,"page-sizes":[20,50,100,200],layouts:["PrevPage","JumpNumber","NextPage","Sizes","Total"]},on:{"page-change":e.handlePageChange}}),a("a-modal",{attrs:{width:800,visible:e.visible,title:"随附文件",maskClosable:!1,destroyOnClose:!0,footer:null,centered:""},on:{cancel:function(t){e.visible=!1}}},[a("template",{slot:"closeIcon"},[a("a-button",{attrs:{type:"danger",size:"small",shape:"circle",icon:"close-circle"}})],1),a("AttachedFiles",{attrs:{ID:e.ID}})],2)],1)}),[],!1,null,"ba322ab4",null).exports;t.default=p},4970:function(e,t,a){}}]);
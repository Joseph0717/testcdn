(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6a2e9c68"],{"0ada":function(t,e,a){"use strict";a.r(e),a("99af"),a("4de4"),a("d81d"),a("b0c0"),a("d3b7"),a("25f0");var i=a("5530"),n=a("c408"),r=a("fbf24"),o=a("cdc0"),s=a("a701"),c=a("2fc4"),u=a("0559"),l=a("5880"),p=a("c32d"),d=a.n(p),h=a("7bda"),m=a("12a2"),f=a("f910");p=a("207c"),d={name:"SeaImportHawbNew",i18n:a("9225"),components:{MySearch:c.a,MySearchWindow:u.a,UpdateSingleMilestone:h.a,UpdateMoreMilestone:m.a,AttachedFiles:f.a,Export:p.a},computed:Object(i.a)(Object(i.a)({},Object(l.mapGetters)("account",["user"])),{},{fields:function(){return[{value:"orderNo",label:"业务编号",type:"string"},{value:"hawb",label:"分单号",type:"string"},{value:"mawb",label:"主单号",type:"string"}]}}),data:function(){return{minHeight:window.innerHeight-219,menuID:this.$route.meta.id,layoutList:[],mawbLyoutList:[],seaHAirwayBillImportList:[],consignorList:[],tradeClauses:[],loading:!1,pagination:{currentPage:1,pageSize:100,totalResult:0},dynamicFilter:{},filter:{},searchWindowVisible:!1,ID:"0",visible:!1}},created:function(){this.getDictionary(),0xe9ab80eff045==this.menuID&&this.getLayoutList(),0xe9ab8b07c045==this.menuID&&this.getMawbLayoutList(),this.getHAirwayBillList()},methods:{moment:d.a,getDictionary:function(){var t=this;Object(o.f)(["Consignor"]).then((function(e){1===e.data.code&&(e=e.data.data,t.consignorList=e.filter((function(t){return"Consignor"===t.corporationtype}))[0].data)})),Object(s.d)(["TradeClause"]).then((function(e){1===e.data.code&&(e=e.data.data,t.tradeClauses=e.filter((function(t){return"TradeClause"===t.code}))[0].data)}))},getLayoutList:function(){var t=this;Object(r.c)(this.user.name,this.menuID).then((function(e){1===e.data.code&&(t.layoutList=e.data.data)}))},getMawbLayoutList:function(){var t=this;Object(r.c)(this.user.name,0xe9aaef989045).then((function(e){1===e.data.code&&(t.mawbLyoutList=e.data.data)}))},getHAirwayBillList:function(){var t=this;switch(this.loading=!0,this.menuID){case 0xe9ab80eff045:this.filter={hAirwayStatus:0};break;case 0xe9ab8b07c045:this.filter={hAirwayStatus:1};break;case 0xe9ab95702045:this.filter={hAirwayStatus:2};break;case 0xe9ab9e76b045:this.filter={hAirwayStatus:3};break;case 0xe9aba6d1e045:this.filter={hAirwayStatus:4}}Object(n.h)(this.pagination.currentPage,this.pagination.pageSize,this.dynamicFilter,this.filter).then((function(e){1===e.data.code&&(t.seaHAirwayBillImportList=e.data.data.list,t.pagination.totalResult=e.data.data.total,t.loading=!1)}))},handlePageChange:function(t){var e=t.currentPage;t=t.pageSize;this.pagination.currentPage=e,this.pagination.pageSize=t,this.getHAirwayBillList()},onSearch:function(t){this.dynamicFilter=t,this.pagination.currentPage=1,this.getHAirwayBillList()},onSearchFilter:function(t){this.dynamicFilter=t,this.pagination.currentPage=1,this.searchWindowVisible=!1,this.getHAirwayBillList()},batchDelete:function(){var t=this,e=this.$refs.xTable.getCheckboxRecords();if(0==e.length)return!1;e=e.map((function(t){return t.id})),Object(n.b)(e).then((function(e){1===e.data.code&&t.getHAirwayBillList()}))},insert:function(){this.$router.push("/EditSeaImportHawb?time=".concat(Date.now(),"&id=0&tempID=0&type=1"))},edit:function(t){this.$router.push("/EditSeaImportHawb?id=".concat(t.id,"&tempID=0&type=1"))},review:function(t){this.$router.push({path:"/ReviewSeaImportHawb",query:{id:t.id,menuID:this.menuID}})},handleMenuClick:function(t){this.$router.push("/EditSeaImportHawb?time=".concat(Date.now(),"&id=0&tempID=").concat(t.key,"&type=1"))},insertTemp:function(){this.$router.push("/EditSeaImportHawb?time=".concat(Date.now(),"&id=0&tempID=0&menuID=").concat(this.menuID,"&type=2"))},editTemp:function(t){this.$router.push("/EditSeaImportHawb?id=0&tempID=".concat(t.id,"&menuID=").concat(this.menuID,"&type=2"))},deleteTemp:function(t){var e=this;Object(r.d)(t.id).then((function(t){1===t.data.code&&(e.getLayoutList(),e.$message.success("模板删除成功!"))}))},changeStatus:function(){var t=this,e=this.$refs.xTable.getCheckboxRecords();if(0==e.length)return!1;var a=[],i=[],r=[];if(e.map((function(t){0==t.actualPieces&&a.push("1"),0==t.actualWeight&&i.push("1"),0==t.actualVolume&&r.push("1")})),0<a.length||0<i.length||0<r.length)return this.$message.error("件数，重量， 体积不能为0!"),!1;e={idlist:e.map((function(t){return{id:t.id}})),hAirwayStatus:1},Object(n.c)(e).then((function(e){1===e.data.code?(t.$message.success("审核成功!"),t.getHAirwayBillList()):t.$message.error("审核失败!")}))},generateMAirwayBill:function(t){var e=[],a=[];if(this.$refs.xTable.getCheckboxRecords().map((function(t){e.push(t.id),0<t.mawb.length&&a.push(t.mawb)})),0<a.length)return this.$message.error("选择的主单号应该为空!"),!1;this.$router.push("/EditSeaExportMawb?time=".concat(Date.now(),"&id=0&tempID=").concat(t,"&HAirwayBillIds=").concat(e,"&type=3"))},showUpdateMilestone:function(){var t=[],e=this.$refs.xTable.getCheckboxRecords();e.map((function(e){t.push(e.id)})),1==t.length?this.$refs.UpdateSingleMilestone.show(t[0]):1<e.length&&this.$refs.UpdateMoreMilestone.show(t)},printAirwayBill:function(){var t=[];this.$refs.xTable.getCheckboxRecords().map((function(e){t.push(e.id)})),this.$router.push("/PrintAirwayBill?time=".concat(Date.now(),"&ids=").concat(t,"&type=1"))},openFile:function(){var t=[];if(this.$refs.xTable.getCheckboxRecords().map((function(e){t.push(e.id)})),1<t.length)return this.$message.error("不支持多选!"),!1;this.ID=t[0].toString(),this.visible=!0}}},a("a84e"),a=a("2877"),d=Object(a.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"SeaImportHawbNew"},[a("vxe-toolbar",{attrs:{custom:"",print:""},scopedSlots:t._u([{key:"tools",fn:function(){return[a("a-space",[0xe9ab80eff045==t.menuID?a("a-dropdown",{attrs:{placement:"bottomCenter",type:"primary"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seahairwaybillimport:add",expression:"`api:admin:seahairwaybillimport:add`",arg:"permission"}],attrs:{type:"primary",icon:"plus-circle"},on:{click:t.insert}},[t._v("新建分单"),a("a-icon",{attrs:{type:"ellipsis"}})],1),a("a-menu",{attrs:{slot:"overlay"},on:{click:t.handleMenuClick},slot:"overlay"},[a("a-menu-item",{attrs:{disabled:""}},[a("a-button",{attrs:{type:"primary",block:""},on:{click:function(e){return e.stopPropagation(),t.insertTemp(e)}}},[t._v("新建模板")])],1),t._l(t.layoutList,(function(e){return a("a-menu-item",{key:e.id},[a("a-space",[a("a-button",{attrs:{type:"primary"}},[a("a-tooltip",{attrs:{placement:"top",title:e.layoutName}},[a("div",{staticStyle:{width:"100px","max-width":"100px",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(e.layoutName))])])],1),a("a-tooltip",{attrs:{placement:"top",title:"编辑模板"}},[a("a-icon",{attrs:{type:"edit"},on:{click:function(a){return a.stopPropagation(),t.editTemp(e)}}})],1),a("a-popconfirm",{attrs:{title:t.$t("47"),overlayStyle:{zIndex:1051}},on:{confirm:function(a){return a.stopPropagation(),t.deleteTemp(e)}}},[a("a-tooltip",{attrs:{placement:"top",title:"删除模板"}},[a("a-icon",{attrs:{type:"delete"},on:{click:function(t){t.stopPropagation()}}})],1)],1)],1)],1)}))],2)],1):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length&&0xe9ab80eff045==t.menuID?a("a-popconfirm",{attrs:{title:t.$t("47")},on:{confirm:t.batchDelete}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seahairwaybillimport:batchsoftdelete",expression:"`api:admin:seahairwaybillimport:batchsoftdelete`",arg:"permission"}],attrs:{type:"danger",icon:"delete"}},[t._v("删除")])],1):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length&&0xe9ab80eff045==t.menuID?a("a-popconfirm",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seahairwaybillimport:changestatusasync",expression:"`api:admin:seahairwaybillimport:changestatusasync`",arg:"permission"}],attrs:{title:"确认通过审核吗?"},on:{confirm:t.changeStatus}},[a("a-button",{attrs:{type:"primary",icon:"check-circle"}},[t._v("审核")])],1):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length&&0xe9ab8b07c045==t.menuID?a("a-dropdown",{attrs:{placement:"bottomCenter",type:"primary"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seahairwaybillimport:getmorehawbtomawbasync",expression:"`api:admin:seahairwaybillimport:getmorehawbtomawbasync`",arg:"permission"}],attrs:{type:"primary",icon:"snippets"},on:{click:function(e){return t.generateMAirwayBill(0)}}},[t._v("生成主单")]),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},t._l(t.mawbLyoutList,(function(e){return a("a-menu-item",{key:e.id},[a("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.generateMAirwayBill(e.id)}}},[a("a-tooltip",{attrs:{placement:"top",title:e.layoutName}},[a("div",{staticStyle:{width:"100px","max-width":"100px",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(e.layoutName))])])],1)],1)})),1)],1):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length?a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:ordermilestonesolution:update",expression:"`api:admin:ordermilestonesolution:update`",arg:"permission"}],attrs:{type:"primary",icon:"edit"},on:{click:t.showUpdateMilestone}},[t._v("编辑节点")]):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length?a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seahairwaybillimport:getmorehawbreportasync",expression:"`api:admin:seahairwaybillimport:getmorehawbreportasync`",arg:"permission"}],attrs:{type:"primary",icon:"printer"},on:{click:t.printAirwayBill}},[t._v("打印")]):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length?a("a-button",{attrs:{type:"primary",icon:"file"},on:{click:t.openFile}},[t._v("随附文件")]):t._e(),0<t.seaHAirwayBillImportList.length?a("Export",{attrs:{TYPE:6,pagination:t.pagination,dynamicFilter:t.dynamicFilter,filter:t.filter}}):t._e(),a("my-search",{attrs:{fields:t.fields},on:{click:t.onSearch}}),a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){t.searchWindowVisible=!0}}},[t._v("高级查询")]),a("my-search-window",{attrs:{visible:t.searchWindowVisible,fields:t.fields,menuID:t.menuID},on:{"update:visible":function(e){t.searchWindowVisible=e},click:t.onSearchFilter}})],1)]},proxy:!0}])}),a("vxe-table",{ref:"xTable",attrs:{"keep-source":"",data:t.seaHAirwayBillImportList,loading:t.loading,"print-config":{},"show-overflow":"",resizable:"",border:"","highlight-hover-row":"",height:t.minHeight}},[a("vxe-column",{attrs:{type:"checkbox",width:"50",fixed:"left"},scopedSlots:t._u([{key:"header",fn:function(e){var i=e.checked;e=e.indeterminate;return[a("span",{staticClass:"custom-checkbox",on:{click:function(e){return e.stopPropagation(),t.$refs.xTable.toggleAllCheckboxRow()}}},[a("span",e?[a("a-checkbox",{attrs:{indeterminate:!0}})]:i?[a("a-checkbox",{attrs:{checked:!0}})]:[a("a-checkbox")],1)])]}},{key:"checkbox",fn:function(e){var i=e.row,n=e.checked;e=e.indeterminate;return[a("span",{staticClass:"custom-checkbox",on:{click:function(e){return e.stopPropagation(),t.$refs.xTable.toggleCheckboxRow(i)}}},[a("span",e?[a("a-checkbox",{attrs:{indeterminate:!0}})]:n?[a("a-checkbox",{attrs:{checked:!0}})]:[a("a-checkbox")],1)])]}}])}),a("vxe-column",{attrs:{field:"orderNo",title:"业务编号"}}),a("vxe-column",{attrs:{field:"hawb",title:"分单号"}}),a("vxe-column",{attrs:{field:"mawb",title:"主单号"}}),a("vxe-column",{attrs:{field:"entrustCode",title:"委托人"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t._l(t.consignorList,(function(e){return[e.corporationCode==i.entrustCode?a("span",{key:e.corporationCode},[t._v(t._s(e.corporationName))]):t._e()]}))]}}])}),a("vxe-column",{attrs:{field:"loadingPort",title:"起运港"}}),a("vxe-column",{attrs:{field:"destinationPort",title:"目的港"}}),a("vxe-column",{attrs:{field:"tradeTerms",title:"贸易条款"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t._l(t.tradeClauses,(function(e){return[e.value==i.tradeTerms?a("span",{key:e.value},[t._v(t._s(e.name))]):t._e()]}))]}}])}),a("vxe-column",{attrs:{field:"actualPieces",title:"实际件数"}}),a("vxe-column",{attrs:{field:"actualWeight",title:"实际重量"}}),a("vxe-column",{attrs:{field:"actualVolume",title:"实际体积"}}),a("vxe-column",{attrs:{width:"130",title:"操作",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("a-space",[0xe9ab80eff045==t.menuID?a("a-tooltip",{attrs:{placement:"top",title:"编辑"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seahairwaybillimport:update",expression:"`api:admin:seahairwaybillimport:update`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"edit"},on:{click:function(e){return t.edit(i)}}})],1):t._e(),a("a-tooltip",{attrs:{placement:"top",title:"查看分单"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:seahairwaybillimport:gethederanddetailasync",expression:"`api:admin:seahairwaybillimport:gethederanddetailasync`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"eye"},on:{click:function(e){return t.review(i)}}})],1)],1)]}}])})],1),a("vxe-pager",{attrs:{"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,total:t.pagination.totalResult,"page-sizes":[20,50,100,200],layouts:["PrevPage","JumpNumber","NextPage","Sizes","Total"]},on:{"page-change":t.handlePageChange}}),a("UpdateSingleMilestone",{ref:"UpdateSingleMilestone"}),a("UpdateMoreMilestone",{ref:"UpdateMoreMilestone",attrs:{type:"sea"}}),a("a-modal",{attrs:{width:800,visible:t.visible,title:"随附文件",maskClosable:!1,destroyOnClose:!0,footer:null,centered:""},on:{cancel:function(e){t.visible=!1}}},[a("template",{slot:"closeIcon"},[a("a-button",{attrs:{type:"danger",size:"small",shape:"circle",icon:"close-circle"}})],1),a("AttachedFiles",{attrs:{ID:t.ID}})],2)],1)}),[],!1,null,"6ac7fd10",null).exports;e.default=d},5076:function(t,e,a){},a84e:function(t,e,a){"use strict";a("5076")},cdc0:function(t,e,a){"use strict";a.d(e,"h",(function(){return o})),a.d(e,"a",(function(){return c})),a.d(e,"e",(function(){return l})),a.d(e,"i",(function(){return d})),a.d(e,"c",(function(){return m})),a.d(e,"b",(function(){return b})),a.d(e,"j",(function(){return y})),a.d(e,"d",(function(){return v})),a.d(e,"g",(function(){return k})),a.d(e,"f",(function(){return T}));e=a("96cf");var i=a("1da1"),n=a("7424"),r=a("b775");function o(t,e,a,i){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(regeneratorRuntime.mark((function t(e,a,i,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONGETPAGE,r.a.POST,{currentPage:e,pageSize:a,dynamicFilter:i,filter:o}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(t){return u.apply(this,arguments)}function u(){return(u=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONADD,r.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONGET,r.a.GET,{id:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONUPDATE,r.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONBATCHSOFTDELETE,r.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONADDCONTACT,r.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONUPDATECONTACT,r.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONBATCHSOFTDELETECONTACT,r.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONGETHEDERANDDETAILASYNC,r.a.GET,{id:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(t){return R.apply(this,arguments)}function R(){return(R=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONGETCACHECORPORATIONBYTYPE,r.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
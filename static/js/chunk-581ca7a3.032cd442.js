(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-581ca7a3"],{"1ad0":function(t,e,i){"use strict";i.r(e),i("99af"),i("4de4"),i("d81d"),i("b0c0"),i("d3b7"),i("25f0");var a=i("5530"),n=i("682e"),r=i("fbf24"),o=i("cdc0"),s=i("a701"),c=i("2fc4"),u=i("0559"),l=i("5880"),p=i("c32d"),d=i.n(p),h=i("7bda"),m=i("12a2"),f=i("f910");p=i("207c"),d={name:"HAirwayBillNew",i18n:i("9225"),components:{MySearch:c.a,MySearchWindow:u.a,UpdateSingleMilestone:h.a,UpdateMoreMilestone:m.a,AttachedFiles:f.a,Export:p.a},computed:Object(a.a)(Object(a.a)({},Object(l.mapGetters)("account",["user"])),{},{fields:function(){return[{value:"orderNo",label:"业务编号",type:"string"},{value:"hawb",label:"分单号",type:"string"},{value:"mawb",label:"主单号",type:"string"}]}}),data:function(){return{minHeight:window.innerHeight-219,menuID:this.$route.meta.id,layoutList:[],mawbLyoutList:[],hAirwayBillList:[],consignorList:[],tradeClauses:[],loading:!1,pagination:{currentPage:1,pageSize:100,totalResult:0},dynamicFilter:{},filter:{},searchWindowVisible:!1,ID:"0",visible:!1}},created:function(){this.getDictionary(),0xd379c2959045==this.menuID&&this.getLayoutList(),0xd51617e56045==this.menuID&&this.getMawbLayoutList(),this.getHAirwayBillList()},methods:{moment:d.a,getDictionary:function(){var t=this;Object(o.f)(["Consignor"]).then((function(e){1===e.data.code&&(e=e.data.data,t.consignorList=e.filter((function(t){return"Consignor"===t.corporationtype}))[0].data)})),Object(s.d)(["TradeClause"]).then((function(e){1===e.data.code&&(e=e.data.data,t.tradeClauses=e.filter((function(t){return"TradeClause"===t.code}))[0].data)}))},getLayoutList:function(){var t=this;Object(r.c)(this.user.name,this.menuID).then((function(e){1===e.data.code&&(t.layoutList=e.data.data)}))},getMawbLayoutList:function(){var t=this;Object(r.c)(this.user.name,0xd516507f5045).then((function(e){1===e.data.code&&(t.mawbLyoutList=e.data.data)}))},getHAirwayBillList:function(){var t=this;switch(this.loading=!0,this.menuID){case 0xd379c2959045:this.filter={hAirwayStatus:0};break;case 0xd51617e56045:this.filter={hAirwayStatus:1};break;case 0xd51623c17045:this.filter={hAirwayStatus:2};break;case 0xd5162a8ac045:this.filter={hAirwayStatus:3};break;case 0xd51632b68045:this.filter={hAirwayStatus:4}}Object(n.l)(this.pagination.currentPage,this.pagination.pageSize,this.dynamicFilter,this.filter).then((function(e){1===e.data.code&&(t.hAirwayBillList=e.data.data.list,t.pagination.totalResult=e.data.data.total,t.loading=!1)}))},handlePageChange:function(t){var e=t.currentPage;t=t.pageSize;this.pagination.currentPage=e,this.pagination.pageSize=t,this.getHAirwayBillList()},onSearch:function(t){this.dynamicFilter=t,this.pagination.currentPage=1,this.getHAirwayBillList()},onSearchFilter:function(t){this.dynamicFilter=t,this.pagination.currentPage=1,this.searchWindowVisible=!1,this.getHAirwayBillList()},batchDelete:function(){var t=this,e=this.$refs.xTable.getCheckboxRecords();if(0==e.length)return!1;e=e.map((function(t){return t.id})),Object(n.c)(e).then((function(e){1===e.data.code&&t.getHAirwayBillList()}))},insert:function(){this.$router.push("/EditAirExportHAirwayBill?time=".concat(Date.now(),"&id=0&tempID=0&type=1"))},edit:function(t){this.$router.push("/EditAirExportHAirwayBill?id=".concat(t.id,"&tempID=0&type=1"))},review:function(t){this.$router.push({path:"/ReviewAirExportHAirwayBill",query:{id:t.id,menuID:this.menuID}})},handleMenuClick:function(t){this.$router.push("/EditAirExportHAirwayBill?time=".concat(Date.now(),"&id=0&tempID=").concat(t.key,"&type=1"))},insertTemp:function(){this.$router.push("/EditAirExportHAirwayBill?time=".concat(Date.now(),"&id=0&tempID=0&menuID=").concat(this.menuID,"&type=2"))},editTemp:function(t){this.$router.push("/EditAirExportHAirwayBill?id=0&tempID=".concat(t.id,"&menuID=").concat(this.menuID,"&type=2"))},deleteTemp:function(t){var e=this;Object(r.d)(t.id).then((function(t){1===t.data.code&&(e.getLayoutList(),e.$message.success("模板删除成功!"))}))},changeStatus:function(){var t=this,e=this.$refs.xTable.getCheckboxRecords();if(0==e.length)return!1;var i=[],a=[],r=[];if(e.map((function(t){0==t.pieces&&i.push("1"),0==t.weight&&a.push("1"),0==t.volume&&r.push("1")})),0<i.length||0<a.length||0<r.length)return this.$message.error("件数，重量， 体积不能为0!"),!1;e={idlist:e.map((function(t){return{id:t.id}})),hAirwayStatus:1},Object(n.d)(e).then((function(e){1===e.data.code?(t.$message.success("审核成功!"),t.getHAirwayBillList()):t.$message.error("审核失败!")}))},generateMAirwayBill:function(t){var e=[],i=[];if(this.$refs.xTable.getCheckboxRecords().map((function(t){e.push(t.id),0<t.mawb.length&&i.push(t.mawb)})),0<i.length)return this.$message.error("选择的主单号应该为空!"),!1;this.$router.push("/EditAirExportMAirwayBill?time=".concat(Date.now(),"&id=0&tempID=").concat(t,"&HAirwayBillIds=").concat(e,"&type=3"))},showUpdateMilestone:function(){var t=[],e=this.$refs.xTable.getCheckboxRecords();e.map((function(e){t.push(e.id)})),1==t.length?this.$refs.UpdateSingleMilestone.show(t[0]):1<e.length&&this.$refs.UpdateMoreMilestone.show(t)},printAirwayBill:function(){var t=[];this.$refs.xTable.getCheckboxRecords().map((function(e){t.push(e.id)})),this.$router.push("/PrintAirwayBill?time=".concat(Date.now(),"&ids=").concat(t,"&type=1"))},editPDF:function(t){this.$router.push("/EditPDF?id=".concat(t.id,"&type=1"))},openFile:function(){var t=[];if(this.$refs.xTable.getCheckboxRecords().map((function(e){t.push(e.id)})),1<t.length)return this.$message.error("不支持多选!"),!1;this.ID=t[0].toString(),this.visible=!0}}},i("7c1d"),i=i("2877"),d=Object(i.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"HAirwayBillNew"},[i("vxe-toolbar",{attrs:{custom:"",print:""},scopedSlots:t._u([{key:"tools",fn:function(){return[i("a-space",[0xd379c2959045==t.menuID?i("a-dropdown",{attrs:{placement:"bottomCenter",type:"primary"}},[i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:add",expression:"`api:admin:hairwaybill:add`",arg:"permission"}],attrs:{type:"primary"},on:{click:t.insert}},[t._v("新建分单"),i("a-icon",{attrs:{type:"ellipsis"}})],1),i("a-menu",{attrs:{slot:"overlay"},on:{click:t.handleMenuClick},slot:"overlay"},[i("a-menu-item",{attrs:{disabled:""}},[i("a-button",{attrs:{type:"primary",block:""},on:{click:function(e){return e.stopPropagation(),t.insertTemp(e)}}},[t._v("新建模板")])],1),t._l(t.layoutList,(function(e){return i("a-menu-item",{key:e.id},[i("a-space",[i("a-button",{attrs:{type:"primary"}},[i("a-tooltip",{attrs:{placement:"top",title:e.layoutName}},[i("div",{staticStyle:{width:"100px","max-width":"100px",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(e.layoutName))])])],1),i("a-tooltip",{attrs:{placement:"top",title:"编辑模板"}},[i("a-icon",{attrs:{type:"edit"},on:{click:function(i){return i.stopPropagation(),t.editTemp(e)}}})],1),i("a-popconfirm",{attrs:{title:t.$t("47"),overlayStyle:{zIndex:1051}},on:{confirm:function(i){return i.stopPropagation(),t.deleteTemp(e)}}},[i("a-tooltip",{attrs:{placement:"top",title:"删除模板"}},[i("a-icon",{attrs:{type:"delete"},on:{click:function(t){t.stopPropagation()}}})],1)],1)],1)],1)}))],2)],1):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length&&0xd379c2959045==t.menuID?i("a-popconfirm",{attrs:{title:t.$t("47")},on:{confirm:t.batchDelete}},[i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:batchsoftdelete",expression:"`api:admin:hairwaybill:batchsoftdelete`",arg:"permission"}],attrs:{type:"danger",icon:"delete"}},[t._v("删除")])],1):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length&&0xd379c2959045==t.menuID?i("a-popconfirm",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:changestatusasync",expression:"`api:admin:hairwaybill:changestatusasync`",arg:"permission"}],attrs:{title:"确认通过审核吗?"},on:{confirm:t.changeStatus}},[i("a-button",{attrs:{type:"primary"}},[t._v("审核")])],1):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length&&0xd51617e56045==t.menuID?i("a-dropdown",{attrs:{placement:"bottomCenter",type:"primary"}},[i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:getmorehawbtomawbasync",expression:"`api:admin:hairwaybill:getmorehawbtomawbasync`",arg:"permission"}],attrs:{type:"primary"},on:{click:function(e){return t.generateMAirwayBill(0)}}},[t._v("生成主单")]),i("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},t._l(t.mawbLyoutList,(function(e){return i("a-menu-item",{key:e.id},[i("a-button",{attrs:{type:"primary"},on:{click:function(i){return t.generateMAirwayBill(e.id)}}},[i("a-tooltip",{attrs:{placement:"top",title:e.layoutName}},[i("div",{staticStyle:{width:"100px","max-width":"100px",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(e.layoutName))])])],1)],1)})),1)],1):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length?i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:ordermilestonesolution:update",expression:"`api:admin:ordermilestonesolution:update`",arg:"permission"}],attrs:{type:"primary"},on:{click:t.showUpdateMilestone}},[t._v("编辑节点")]):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length?i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:getmorehawbreportasync",expression:"`api:admin:hairwaybill:getmorehawbreportasync`",arg:"permission"}],attrs:{type:"primary"},on:{click:t.printAirwayBill}},[t._v("打印")]):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length?i("a-button",{attrs:{type:"primary"},on:{click:t.openFile}},[t._v("随附文件")]):t._e(),0<t.hAirwayBillList.length?i("Export",{attrs:{TYPE:1,pagination:t.pagination,dynamicFilter:t.dynamicFilter,filter:t.filter}}):t._e(),i("my-search",{attrs:{fields:t.fields},on:{click:t.onSearch}}),i("a-button",{attrs:{type:"primary"},on:{click:function(e){t.searchWindowVisible=!0}}},[t._v("高级查询")]),i("my-search-window",{attrs:{visible:t.searchWindowVisible,fields:t.fields,menuID:t.menuID},on:{"update:visible":function(e){t.searchWindowVisible=e},click:t.onSearchFilter}})],1)]},proxy:!0}])}),i("vxe-table",{ref:"xTable",attrs:{"keep-source":"",data:t.hAirwayBillList,loading:t.loading,"print-config":{},"show-overflow":"",resizable:"",border:"","highlight-hover-row":"",height:t.minHeight}},[i("vxe-column",{attrs:{type:"checkbox",width:"50",fixed:"left"},scopedSlots:t._u([{key:"header",fn:function(e){var a=e.checked;e=e.indeterminate;return[i("span",{staticClass:"custom-checkbox",on:{click:function(e){return e.stopPropagation(),t.$refs.xTable.toggleAllCheckboxRow()}}},[i("span",e?[i("a-checkbox",{attrs:{indeterminate:!0}})]:a?[i("a-checkbox",{attrs:{checked:!0}})]:[i("a-checkbox")],1)])]}},{key:"checkbox",fn:function(e){var a=e.row,n=e.checked;e=e.indeterminate;return[i("span",{staticClass:"custom-checkbox",on:{click:function(e){return e.stopPropagation(),t.$refs.xTable.toggleCheckboxRow(a)}}},[i("span",e?[i("a-checkbox",{attrs:{indeterminate:!0}})]:n?[i("a-checkbox",{attrs:{checked:!0}})]:[i("a-checkbox")],1)])]}}])}),i("vxe-column",{attrs:{width:"100",field:"orderNo",title:"业务编号"}}),i("vxe-column",{attrs:{width:"100",field:"hawb",title:"分单号"}}),i("vxe-column",{attrs:{width:"100",field:"mawb",title:"主单号"}}),i("vxe-column",{attrs:{width:"100",field:"entrustCode",title:"委托人"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._l(t.consignorList,(function(e){return[e.corporationCode==a.entrustCode?i("span",{key:e.corporationCode},[t._v(t._s(e.corporationName))]):t._e()]}))]}}])}),i("vxe-column",{attrs:{width:"100",field:"loadingPort",title:"起运港"}}),i("vxe-column",{attrs:{width:"100",field:"destinationPort",title:"目的港"}}),i("vxe-column",{attrs:{width:"100",field:"tradeTerms",title:"贸易条款"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._l(t.tradeClauses,(function(e){return[e.value==a.tradeTerms?i("span",{key:e.value},[t._v(t._s(e.name))]):t._e()]}))]}}])}),i("vxe-column",{attrs:{width:"100",field:"pieces",title:"件数"}}),i("vxe-column",{attrs:{width:"100",field:"weight",title:"重量"}}),i("vxe-column",{attrs:{width:"100",field:"volume",title:"体积"}}),i("vxe-column",{attrs:{width:"100",title:"EQ"},scopedSlots:t._u([{key:"default",fn:function(e){return e=e.row,[i("span",[t._v(t._s(Math.round(e.volume/.006)))])]}}])}),i("vxe-column",{attrs:{width:"100",field:"airPortInboundNo",title:"进仓编号"}}),i("vxe-column",{attrs:{width:"100",field:"estimatedInboundDate",title:"预进仓时间"},scopedSlots:t._u([{key:"default",fn:function(e){return e=e.row,[t._v(" "+t._s(e.estimatedInboundDate?t.moment(e.estimatedInboundDate).format("YYYY-MM-DD"):"")+" ")]}}])}),i("vxe-column",{attrs:{width:"100",field:"specialRequest",title:"特殊要求"}}),i("vxe-column",{attrs:{width:"100",field:"poNumber",title:"客户单号"}}),i("vxe-column",{attrs:{width:"130",title:"操作",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[i("a-space",[0xd379c2959045==t.menuID?i("a-tooltip",{attrs:{placement:"top",title:"编辑"}},[i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:update",expression:"`api:admin:hairwaybill:update`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"edit"},on:{click:function(e){return t.edit(a)}}})],1):t._e(),i("a-tooltip",{attrs:{placement:"top",title:"查看分单"}},[i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:gethederanddetailasync",expression:"`api:admin:hairwaybill:gethederanddetailasync`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"eye"},on:{click:function(e){return t.review(a)}}})],1),0xd5c3b88e0045!==t.menuID?i("a-tooltip",{attrs:{placement:"top",title:"制单"}},[i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:updatehawbreportasync",expression:"`api:admin:hairwaybill:updatehawbreportasync`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"form"},on:{click:function(e){return t.editPDF(a)}}})],1):t._e()],1)]}}])})],1),i("vxe-pager",{attrs:{"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,total:t.pagination.totalResult,"page-sizes":[20,50,100,200],layouts:["PrevPage","JumpNumber","NextPage","Sizes","Total"]},on:{"page-change":t.handlePageChange}}),i("UpdateSingleMilestone",{ref:"UpdateSingleMilestone"}),i("UpdateMoreMilestone",{ref:"UpdateMoreMilestone"}),i("a-modal",{attrs:{width:800,visible:t.visible,title:"随附文件",maskClosable:!1,destroyOnClose:!0,footer:null,centered:""},on:{cancel:function(e){t.visible=!1}}},[i("template",{slot:"closeIcon"},[i("a-button",{attrs:{type:"danger",size:"small",shape:"circle",icon:"close-circle"}})],1),i("AttachedFiles",{attrs:{ID:t.ID}})],2)],1)}),[],!1,null,"646ecfbd",null).exports;e.default=d},"55fd":function(t,e,i){},"7c1d":function(t,e,i){"use strict";i("55fd")},cdc0:function(t,e,i){"use strict";i.d(e,"h",(function(){return o})),i.d(e,"a",(function(){return c})),i.d(e,"e",(function(){return l})),i.d(e,"i",(function(){return d})),i.d(e,"c",(function(){return m})),i.d(e,"b",(function(){return y})),i.d(e,"j",(function(){return g})),i.d(e,"d",(function(){return v})),i.d(e,"g",(function(){return k})),i.d(e,"f",(function(){return A}));e=i("96cf");var a=i("1da1"),n=i("7424"),r=i("b775");function o(t,e,i,a){return s.apply(this,arguments)}function s(){return(s=Object(a.a)(regeneratorRuntime.mark((function t(e,i,a,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONGETPAGE,r.a.POST,{currentPage:e,pageSize:i,dynamicFilter:a,filter:o}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(t){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONADD,r.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONGET,r.a.GET,{id:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONUPDATE,r.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONBATCHSOFTDELETE,r.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return b.apply(this,arguments)}function b(){return(b=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONADDCONTACT,r.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONUPDATECONTACT,r.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONBATCHSOFTDELETECONTACT,r.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return O.apply(this,arguments)}function O(){return(O=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONGETHEDERANDDETAILASYNC,r.a.GET,{id:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(t){return T.apply(this,arguments)}function T(){return(T=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.e)(n.CORPORATIONGETCACHECORPORATIONBYTYPE,r.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5bf842ea"],{"03bf":function(t,e,n){"use strict";n("9b95")},"2fc4":function(t,e,n){"use strict";n("4de4");var r={name:"MySearch",props:{fields:{type:Array,default:function(){return[]}}},data:function(){return{filter:{field:"",value:"",operator:"Contains"}}},created:function(){this.filter.field=this.fields[0].value},methods:{change:function(t){this.filter.field=t},onSearch:function(t){this.filter.value=t,t=this.filter,this.$emit("click",t)}}};n=n("2877"),r=Object(n.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-input-search",{attrs:{allowClear:""},on:{search:t.onSearch}},[n("a-select",{staticStyle:{"min-width":"100px"},attrs:{slot:"addonBefore"},on:{change:t.change},slot:"addonBefore",model:{value:t.filter.field,callback:function(e){t.$set(t.filter,"field",e)},expression:"filter.field"}},[t._l(t.fields,(function(e){return["string"==e.type?n("a-select-option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")]):t._e()]}))],2),n("a-button",{attrs:{slot:"enterButton",icon:"search"},slot:"enterButton"})],1)],1)}),[],!1,null,null,null);e.a=r.exports},7943:function(t,e,n){"use strict";n.d(e,"k",(function(){return u})),n.d(e,"a",(function(){return o})),n.d(e,"r",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"q",(function(){return g})),n.d(e,"p",(function(){return y})),n.d(e,"i",(function(){return v})),n.d(e,"m",(function(){return R})),n.d(e,"h",(function(){return S})),n.d(e,"j",(function(){return k})),n.d(e,"f",(function(){return T})),n.d(e,"d",(function(){return M})),n.d(e,"g",(function(){return j})),n.d(e,"s",(function(){return B})),n.d(e,"n",(function(){return _})),n.d(e,"o",(function(){return Y})),n.d(e,"l",(function(){return D})),n.d(e,"b",(function(){return $}));e=n("96cf");var r=n("1da1"),a=n("7424"),i=n("b775");function u(t,e,n,r){return c.apply(this,arguments)}function c(){return(c=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r,u){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLGETPAGE,i.a.POST,{currentPage:e,pageSize:n,dynamicFilter:r,filter:u}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return s.apply(this,arguments)}function s(){return(s=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLADD,i.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return(p=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLUPDATE,i.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLBATCHSOFTDELETE,i.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLGETHEDERANDDETAILASYNC,i.a.GET,{id:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return b.apply(this,arguments)}function b(){return(b=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLSELECTHAIRWAYBILLLISTASYNC,i.a.GET,{bussinesstype:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLREMOVEHAWBASYNC+"?hairwaybillid="+e,i.a.PUT));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return A.apply(this,arguments)}function A(){return(A=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLGETMOREMAWBCALCASYNC,i.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t){return x.apply(this,arguments)}function x(){return(x=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLMAWBCHANGESTATUSASYNC,i.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLGETMORECARGOMFREPORTASYNC,i.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return L.apply(this,arguments)}function L(){return(L=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLGETMOREMAWBREPORTASYNC,i.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return C.apply(this,arguments)}function C(){return(C=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLGETMAWBCOLLISTASYNC,i.a.GET));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(t){return I.apply(this,arguments)}function I(){return(I=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLDOWNPAGEASYNC,i.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t){return E.apply(this,arguments)}function E(){return(E=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLGETMAWBREPORTASYNC,i.a.GET,{id:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(t){return P.apply(this,arguments)}function P(){return(P=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLUPDATEMAWBREPORTASYNC,i.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t,e,n,r){return W.apply(this,arguments)}function W(){return(W=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r,u){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLMAWBCHARGEPAGEASYNC,i.a.POST,{currentPage:e,pageSize:n,dynamicFilter:r,filter:u}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Y(t){return N.apply(this,arguments)}function N(){return(N=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLMAWBINSERTSELECTEDSETOCODE,i.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(t){return G.apply(this,arguments)}function G(){return(G=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLMAWBCHANGECHARGESTATUS,i.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(t,e,n,r){return z.apply(this,arguments)}function z(){return(z=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r,u){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.e)(a.MAIRWAYBILLBMSMAWBCHARGEPAGEASYNC,i.a.POST,{currentPage:e,pageSize:n,dynamicFilter:r,filter:u}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},97352:function(t,e,n){"use strict";n.r(e),n("99af"),n("4de4"),n("d81d"),n("d3b7");var r=n("5530"),a=n("7943"),i=n("91f0"),u=n("cdc0"),c=n("9056"),o=n("a701"),s=n("2fc4"),l=n("5880"),p=n("c32d"),f=n.n(p),d=(p=n("2ef0"),n.n(p));p=n("a6ea"),f={name:"AirWayBillMawb",i18n:n("9225"),components:{MySearch:s.a,ExpendTable:p.a},computed:Object(r.a)(Object(r.a)({},Object(l.mapGetters)("account",["user"])),{},{fields:function(){return[{value:"orderNo",label:"业务编号",type:"string"},{value:"hawb",label:"分单号",type:"string"},{value:"mawb",label:"主单号",type:"string"}]}}),data:function(){return{minHeight:window.innerHeight-219,menuID:this.$route.meta.id,mAirwayBillList:[],carrierList:[],settlementpeopleList:[],costMainStatuss:[],taskTypes:[],chargeList:[],loading:!1,pagination:{currentPage:1,pageSize:100,totalResult:0},dynamicFilter:{},filter:{}}},created:function(){this.getDictionary(),this.getMAirwayBillList()},methods:{moment:f.a,getDictionary:function(){var t=this;Object(c.c)().then((function(e){1===e.data.code&&(t.chargeList=e.data.data)})),Object(u.f)(["Carrier","Settlementpeople"]).then((function(e){1===e.data.code&&(e=e.data.data,t.carrierList=e.filter((function(t){return"Carrier"===t.corporationtype}))[0].data,t.settlementpeopleList=e.filter((function(t){return"Settlementpeople"===t.corporationtype}))[0].data)})),Object(o.d)(["CostMainStatus","TaskType"]).then((function(e){1===e.data.code&&(e=e.data.data,t.costMainStatuss=e.filter((function(t){return"CostMainStatus"===t.code}))[0].data,t.taskTypes=e.filter((function(t){return"TaskType"===t.code}))[0].data)}))},getMAirwayBillList:function(){var t=this;switch(this.loading=!0,this.menuID){case 0xd5180f6bc045:this.filter={costStatus:2};break;case 0xe19cce247045:this.filter={costStatus:3}}Object(a.b)(this.pagination.currentPage,this.pagination.pageSize,this.dynamicFilter,this.filter).then((function(e){1===e.data.code&&(t.mAirwayBillList=e.data.data.list,t.pagination.totalResult=e.data.data.total,t.loading=!1)}))},loadContentMethod:function(t){var e=t.row;return new Promise((function(t){Object(i.e)(e.id).then((function(n){var r,a;1===n.data.code&&(e.arlist=n.data.data.arlist,e.aplist=n.data.data.aplist,a=r=0,e.arlist&&e.arlist.map((function(t){r+=t.chargeAmount})),e.aplist&&e.aplist.map((function(t){a+=t.chargeAmount})),e.arCount=r,e.apCount=a,e.headCount=e.arCount-e.apCount,t())}))}))},handlePageChange:function(t){var e=t.currentPage;t=t.pageSize;this.pagination.currentPage=e,this.pagination.pageSize=t,this.getMAirwayBillList()},onSearch:function(t){this.dynamicFilter=t,this.pagination.currentPage=1,this.getMAirwayBillList()},review:function(t){"1002"==t.bussinessType&&this.$router.push({path:"/ReviewAirExportMawb",query:{id:t.id,menuID:this.menuID}}),"1001"==t.bussinessType&&this.$router.push({path:"/ReviewAirImportMawb",query:{id:t.id,menuID:this.menuID}})},changeStatus:function(t){var e=this,n=this.$refs.xTable.getCheckboxRecords().map((function(t){return t.id}));0!=n.length?(t={idlist:n,chargeStatus:t},Object(a.l)(t).then((function(t){1===t.data.code?(e.$message.success("操作成功!"),e.getMAirwayBillList()):e.$message.error(t.data.msg)})).catch((function(t){e.$message.error("系统内部错误!")}))):this.$message.error("请选择订单!")},changeChargeLineStatus:function(t){var e=this,n=this.$refs.xTable.getRowExpandRecords(),r=[],a=[];n.map((function(t){e.$refs["expend"+t.id].getxTableAR().getCheckboxRecords().map((function(t){r.push(t.id)})),e.$refs["expend"+t.id].getxTableAP().getCheckboxRecords().map((function(t){a.push(t.id)}))})),n=d.a.concat(r,a),0!=n.length?(t={iDlist:n,chargeStatus:t},Object(i.g)(t).then((function(t){1===t.data.code?(e.$message.success("操作成功!"),e.getMAirwayBillList()):e.$message.error(t.data.msg)})).catch((function(t){e.$message.error("系统内部错误!")}))):this.$message.error("请选择费用!")}}},n("03bf"),n=n("2877"),f=Object(n.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AirWayBillMawb"},[n("vxe-toolbar",{attrs:{custom:"",print:""},scopedSlots:t._u([{key:"tools",fn:function(){return[n("a-space",[t.loading||0xd5180f6bc045!=t.menuID?t._e():n("a-popconfirm",{attrs:{title:"确认通过吗?"},on:{confirm:function(e){return t.changeStatus(3)}}},[n("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:mairwaybill:mawbchangechargestatus",expression:"`api:admin:mairwaybill:mawbchangechargestatus`",arg:"permission"}],attrs:{type:"primary",icon:"check-circle"}},[t._v("订单通过")])],1),t.loading||0xd5180f6bc045!=t.menuID?t._e():n("a-popconfirm",{attrs:{title:"确认驳回吗?"},on:{confirm:function(e){return t.changeStatus(1)}}},[n("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:mairwaybill:mawbchangechargestatus",expression:"`api:admin:mairwaybill:mawbchangechargestatus`",arg:"permission"}],attrs:{type:"danger",icon:"rollback"}},[t._v("订单驳回")])],1),t.loading||0xd5180f6bc045!=t.menuID?t._e():n("a-popconfirm",{attrs:{title:"确认通过吗?"},on:{confirm:function(e){return t.changeChargeLineStatus(3)}}},[n("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:chargedline:mawbchangechargelinestatus",expression:"`api:admin:chargedline:mawbchangechargelinestatus`",arg:"permission"}],attrs:{type:"primary",icon:"check-circle"}},[t._v("费用通过")])],1),t.loading||0xd5180f6bc045!=t.menuID?t._e():n("a-popconfirm",{attrs:{title:"确认驳回吗?"},on:{confirm:function(e){return t.changeChargeLineStatus(1)}}},[n("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:chargedline:mawbchangechargelinestatus",expression:"`api:admin:chargedline:mawbchangechargelinestatus`",arg:"permission"}],attrs:{type:"danger",icon:"rollback"}},[t._v("费用驳回")])],1),n("my-search",{attrs:{fields:t.fields},on:{click:t.onSearch}})],1)]},proxy:!0}])}),n("vxe-table",{ref:"xTable",attrs:{"keep-source":"",data:t.mAirwayBillList,loading:t.loading,"print-config":{},"show-overflow":"",resizable:"",border:"","highlight-hover-row":"",height:t.minHeight,"expand-config":{lazy:!0,loadMethod:t.loadContentMethod}}},[n("vxe-column",{attrs:{type:"checkbox",width:"50",fixed:"left"},scopedSlots:t._u([{key:"header",fn:function(e){var r=e.checked;e=e.indeterminate;return[n("span",{staticClass:"custom-checkbox",on:{click:function(e){return e.stopPropagation(),t.$refs.xTable.toggleAllCheckboxRow()}}},[n("span",e?[n("a-checkbox",{attrs:{indeterminate:!0}})]:r?[n("a-checkbox",{attrs:{checked:!0}})]:[n("a-checkbox")],1)])]}},{key:"checkbox",fn:function(e){var r=e.row,a=e.checked;e=e.indeterminate;return[n("span",{staticClass:"custom-checkbox",on:{click:function(e){return e.stopPropagation(),t.$refs.xTable.toggleCheckboxRow(r)}}},[n("span",e?[n("a-checkbox",{attrs:{indeterminate:!0}})]:a?[n("a-checkbox",{attrs:{checked:!0}})]:[n("a-checkbox")],1)])]}}])}),n("vxe-column",{attrs:{type:"expand",width:"50",fixed:"left"},scopedSlots:t._u([{key:"content",fn:function(e){return e=e.row,[n("ExpendTable",{ref:"expend"+e.id,attrs:{arlist:e.arlist,aplist:e.aplist,arCount:e.arCount,apCount:e.apCount,taskTypes:t.taskTypes,settlementpeopleList:t.settlementpeopleList,chargeList:t.chargeList,costMainStatuss:t.costMainStatuss}})]}}])}),n("vxe-column",{attrs:{field:"orderNo",title:"业务编号"}}),n("vxe-column",{attrs:{field:"mawb",title:"主单号"}}),n("vxe-column",{attrs:{field:"airlineCarrier",title:"航空承运人"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[t._l(t.carrierList,(function(e){return[e.corporationCode==r.airlineCarrier?n("span",{key:e.corporationCode},[t._v(t._s(e.corporationName))]):t._e()]}))]}}])}),n("vxe-column",{attrs:{field:"loadingPort",title:"起运港"}}),n("vxe-column",{attrs:{field:"destinationPort",title:"目的港"}}),n("vxe-column",{attrs:{field:"pieces",title:"件数"}}),n("vxe-column",{attrs:{field:"weight",title:"重量"}}),n("vxe-column",{attrs:{field:"volume",title:"体积"}}),n("vxe-column",{attrs:{field:"arStatus",title:"应收状态"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[t._l(t.costMainStatuss,(function(e){return[e.value==r.arStatus?n("span",{key:e.value},[t._v(t._s(e.name))]):t._e()]}))]}}])}),n("vxe-column",{attrs:{field:"apStatus",title:"应付状态"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[t._l(t.costMainStatuss,(function(e){return[e.value==r.apStatus?n("span",{key:e.value},[t._v(t._s(e.name))]):t._e()]}))]}}])}),n("vxe-column",{attrs:{field:"headCount",title:"毛利"},scopedSlots:t._u([{key:"default",fn:function(e){return e=e.row,[e.headCount?n("span",{staticStyle:{"font-weight":"bold",color:"#f50","font-size":"14px"}},[t._v(t._s(e.headCount))]):t._e()]}}])}),n("vxe-column",{attrs:{width:"50",title:"操作",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("a-space",[n("a-tooltip",{attrs:{placement:"top",title:"查看详情"}},[n("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:mairwaybill:gethederanddetailasync",expression:"`api:admin:mairwaybill:gethederanddetailasync`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"account-book"},on:{click:function(e){return t.review(r)}}})],1)],1)]}}])})],1),n("vxe-pager",{attrs:{"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,total:t.pagination.totalResult,"page-sizes":[20,50,100,200],layouts:["PrevPage","JumpNumber","NextPage","Sizes","Total"]},on:{"page-change":t.handlePageChange}})],1)}),[],!1,null,"fb0d9e30",null).exports;e.default=f},"9b95":function(t,e,n){}}]);
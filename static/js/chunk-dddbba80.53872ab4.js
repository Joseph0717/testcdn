(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dddbba80"],{"2e70":function(t,e,i){},3378:function(t,e,i){"use strict";i("41c6")},"41c6":function(t,e,i){},"43e6":function(t,e,i){"use strict";i("2e70")},"786d":function(t,e,i){"use strict";i.d(e,"d",(function(){return r})),i.d(e,"a",(function(){return c})),i.d(e,"g",(function(){return u})),i.d(e,"b",(function(){return p})),i.d(e,"c",(function(){return f})),i.d(e,"e",(function(){return g})),i.d(e,"f",(function(){return v}));e=i("96cf");var n=i("1da1"),a=i("7424"),s=i("b775");function r(t,e,i){return o.apply(this,arguments)}function o(){return(o=Object(n.a)(regeneratorRuntime.mark((function t(e,i,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(s.e)(a.SETTLEMENTOBJECTGETPAGE,s.a.POST,{currentPage:e,pageSize:i,dynamicFilter:n}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(t){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(s.e)(a.SETTLEMENTOBJECTADD,s.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(s.e)(a.SETTLEMENTOBJECTUPDATE,s.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(s.e)(a.SETTLEMENTOBJECTBATCHSOFTDELETE,s.a.PUT,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return m.apply(this,arguments)}function m(){return(m=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(s.e)(a.SETTLEMENTOBJECTGETHEDERANDDETAILASYNC,s.a.GET,{id:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return b.apply(this,arguments)}function b(){return(b=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(s.e)(a.SETTLEMENTOBJECTGETSELECTSETTLEMENTOBJECT,s.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(s.e)(a.SETTLEMENTOBJECTGETSELECTSETTLEMENTOBJECTBYMAWB,s.a.POST,e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9985:function(t,e,i){"use strict";i.r(e),i("99af"),i("4de4"),i("d81d"),i("d3b7");var n=i("5530"),a=i("2716"),s=i("682e"),r=i("cdc0"),o=i("a701"),c=i("91f0"),l=i("9056"),u=i("2fc4"),d=i("0559"),p=i("5880"),h=i("c32d"),f=i.n(h),m=i("2ef0"),g=i.n(m);h=i("dc7e"),m=i("a6ea"),f={name:"AirExportHAirwayBillMaintenance",i18n:i("9225"),components:{MySearch:u.a,MySearchWindow:d.a,SelectSettlement:h.a,ExpendTable:m.a},computed:Object(n.a)(Object(n.a)({},Object(p.mapGetters)("account",["user"])),{},{fields:function(){return[{value:"orderNo",label:"业务编号",type:"string"},{value:"hawb",label:"分单号",type:"string"},{value:"mawb",label:"主单号",type:"string"}]}}),data:function(){return{minHeight:window.innerHeight-219,menuID:this.$route.meta.id,hAirwayBillList:[],consignorList:[],tradeClauses:[],costMainStatuss:[],taskTypes:[],settlementpeopleList:[],chargeList:[],loading:!1,pagination:{currentPage:1,pageSize:100,totalResult:0},dynamicFilter:{},filter:{},searchWindowVisible:!1,activeFilter:0,filterList:[{label:"未提交",value:0},{label:"全部",value:99}]}},created:function(){this.getDictionary(),this.getHAirwayBillList()},methods:{moment:f.a,getDictionary:function(){var t=this;Object(l.c)().then((function(e){1===e.data.code&&(t.chargeList=e.data.data)})),Object(r.f)(["Consignor","Settlementpeople"]).then((function(e){1===e.data.code&&(e=e.data.data,t.consignorList=e.filter((function(t){return"Consignor"===t.corporationtype}))[0].data,t.settlementpeopleList=e.filter((function(t){return"Settlementpeople"===t.corporationtype}))[0].data)})),Object(o.d)(["TradeClause","CostMainStatus","TaskType"]).then((function(e){1===e.data.code&&(e=e.data.data,t.tradeClauses=e.filter((function(t){return"TradeClause"===t.code}))[0].data,t.costMainStatuss=e.filter((function(t){return"CostMainStatus"===t.code}))[0].data,t.taskTypes=e.filter((function(t){return"TaskType"===t.code}))[0].data)}))},change:function(){this.getHAirwayBillList()},getHAirwayBillList:function(){var t=this;this.loading=!0,this.filter={costStatus:this.activeFilter},Object(a.d)(this.pagination.currentPage,this.pagination.pageSize,this.dynamicFilter,this.filter).then((function(e){1===e.data.code&&(t.hAirwayBillList=e.data.data.list,t.pagination.totalResult=e.data.data.total,t.loading=!1)}))},loadContentMethod:function(t){var e=t.row;return new Promise((function(t){Object(c.e)(e.id).then((function(i){var n,a;1===i.data.code&&(e.arlist=i.data.data.arlist,e.aplist=i.data.data.aplist,a=n=0,e.arlist&&e.arlist.map((function(t){n+=t.chargeAmount})),e.aplist&&e.aplist.map((function(t){a+=t.chargeAmount})),e.arCount=n,e.apCount=a,e.headCount=e.arCount-e.apCount,t())}))}))},handlePageChange:function(t){var e=t.currentPage;t=t.pageSize;this.pagination.currentPage=e,this.pagination.pageSize=t,this.getHAirwayBillList()},onSearch:function(t){this.dynamicFilter=t,this.pagination.currentPage=1,this.getHAirwayBillList()},onSearchFilter:function(t){this.dynamicFilter=t,this.pagination.currentPage=1,this.searchWindowVisible=!1,this.getHAirwayBillList()},review:function(t){this.$router.push({path:"/ReviewAirImportHAirwayBill",query:{id:t.id,menuID:this.menuID}})},changeStatus:function(){var t=this,e=this.$refs.xTable.getCheckboxRecords().map((function(t){return t.id}));0!=e.length?(e={idlist:e,chargeStatus:2},Object(s.m)(e).then((function(e){1===e.data.code?(t.$message.success("提交成功!"),t.getHAirwayBillList()):t.$message.error(e.data.msg)})).catch((function(e){t.$message.error("系统内部错误!")}))):this.$message.error("请选择订单!")},changeChargeLineStatus:function(){var t=this,e=this.$refs.xTable.getRowExpandRecords(),i=[],n=[];e.map((function(e){t.$refs["expend"+e.id].getxTableAR().getCheckboxRecords().map((function(t){i.push(t.id)})),t.$refs["expend"+e.id].getxTableAP().getCheckboxRecords().map((function(t){n.push(t.id)}))})),e=g.a.concat(i,n),0!=e.length?(e={iDlist:e,chargeStatus:2},Object(c.f)(e).then((function(e){1===e.data.code?(t.$message.success("提交成功!"),t.getHAirwayBillList()):t.$message.error(e.data.msg)})).catch((function(e){t.$message.error("系统内部错误!")}))):this.$message.error("请选择费用!")}}},i("43e6"),i=i("2877"),f=Object(i.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"AirExportHAirwayBillMaintenance"},[i("vxe-toolbar",{attrs:{custom:"",print:""},scopedSlots:t._u([{key:"tools",fn:function(){return[i("a-space",[t.loading?t._e():i("a-popconfirm",{attrs:{title:"确认提交吗?"},on:{confirm:t.changeStatus}},[i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:hawbchangechargestatus",expression:"`api:admin:hairwaybill:hawbchangechargestatus`",arg:"permission"}],attrs:{type:"primary"}},[t._v("提交订单")])],1),t.loading?t._e():i("a-popconfirm",{attrs:{title:"确认提交吗?"},on:{confirm:t.changeChargeLineStatus}},[i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:chargedline:hawbchangechargelinestatus",expression:"`api:admin:chargedline:hawbchangechargelinestatus`",arg:"permission"}],attrs:{type:"primary"}},[t._v("提交费用")])],1),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length?i("SelectSettlement",{attrs:{table:t.$refs.xTable,businessType:1001,bindingDoc:0}}):t._e(),i("a-radio-group",{attrs:{"button-style":"solid"},on:{change:t.change},model:{value:t.activeFilter,callback:function(e){t.activeFilter=e},expression:"activeFilter"}},t._l(t.filterList,(function(e){return i("a-radio-button",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])})),1),i("my-search",{attrs:{fields:t.fields},on:{click:t.onSearch}}),i("a-button",{attrs:{type:"primary"},on:{click:function(e){t.searchWindowVisible=!0}}},[t._v("高级查询")]),i("my-search-window",{attrs:{visible:t.searchWindowVisible,fields:t.fields,menuID:t.menuID},on:{"update:visible":function(e){t.searchWindowVisible=e},click:t.onSearchFilter}})],1)]},proxy:!0}])}),i("vxe-table",{ref:"xTable",attrs:{"keep-source":"",data:t.hAirwayBillList,loading:t.loading,"print-config":{},"show-overflow":"",resizable:"",border:"","highlight-hover-row":"",height:t.minHeight,"expand-config":{lazy:!0,loadMethod:t.loadContentMethod}}},[i("vxe-column",{attrs:{type:"checkbox",width:"50",fixed:"left"},scopedSlots:t._u([{key:"header",fn:function(e){var n=e.checked;e=e.indeterminate;return[i("span",{staticClass:"custom-checkbox",on:{click:function(e){return e.stopPropagation(),t.$refs.xTable.toggleAllCheckboxRow()}}},[i("span",e?[i("a-checkbox",{attrs:{indeterminate:!0}})]:n?[i("a-checkbox",{attrs:{checked:!0}})]:[i("a-checkbox")],1)])]}},{key:"checkbox",fn:function(e){var n=e.row,a=e.checked;e=e.indeterminate;return[i("span",{staticClass:"custom-checkbox",on:{click:function(e){return e.stopPropagation(),t.$refs.xTable.toggleCheckboxRow(n)}}},[i("span",e?[i("a-checkbox",{attrs:{indeterminate:!0}})]:a?[i("a-checkbox",{attrs:{checked:!0}})]:[i("a-checkbox")],1)])]}}])}),i("vxe-column",{attrs:{type:"expand",width:"50",fixed:"left"},scopedSlots:t._u([{key:"content",fn:function(e){return e=e.row,[i("ExpendTable",{ref:"expend"+e.id,attrs:{arlist:e.arlist,aplist:e.aplist,arCount:e.arCount,apCount:e.apCount,taskTypes:t.taskTypes,settlementpeopleList:t.settlementpeopleList,chargeList:t.chargeList,costMainStatuss:t.costMainStatuss}})]}}])}),i("vxe-column",{attrs:{field:"orderNo",title:"业务编号"}}),i("vxe-column",{attrs:{field:"hawb",title:"分单号"}}),i("vxe-column",{attrs:{field:"mawb",title:"主单号"}}),i("vxe-column",{attrs:{field:"entrustCode",title:"委托人"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._l(t.consignorList,(function(e){return[e.corporationCode==n.entrustCode?i("span",{key:e.corporationCode},[t._v(t._s(e.corporationName))]):t._e()]}))]}}])}),i("vxe-column",{attrs:{field:"loadingPort",title:"起运港"}}),i("vxe-column",{attrs:{field:"destinationPort",title:"目的港"}}),i("vxe-column",{attrs:{field:"tradeTerms",title:"贸易条款"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._l(t.tradeClauses,(function(e){return[e.value==n.tradeTerms?i("span",{key:e.value},[t._v(t._s(e.name))]):t._e()]}))]}}])}),i("vxe-column",{attrs:{field:"pieces",title:"件数"}}),i("vxe-column",{attrs:{field:"weight",title:"重量"}}),i("vxe-column",{attrs:{field:"volume",title:"体积"}}),i("vxe-column",{attrs:{field:"arStatus",title:"应收状态"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._l(t.costMainStatuss,(function(e){return[e.value==n.arStatus?i("span",{key:e.value},[t._v(t._s(e.name))]):t._e()]}))]}}])}),i("vxe-column",{attrs:{field:"apStatus",title:"应付状态"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._l(t.costMainStatuss,(function(e){return[e.value==n.apStatus?i("span",{key:e.value},[t._v(t._s(e.name))]):t._e()]}))]}}])}),i("vxe-column",{attrs:{field:"headCount",title:"毛利"},scopedSlots:t._u([{key:"default",fn:function(e){return e=e.row,[e.headCount?i("span",{staticStyle:{"font-weight":"bold",color:"#f50","font-size":"14px"}},[t._v(t._s(e.headCount))]):t._e()]}}])}),i("vxe-column",{attrs:{width:"50",title:"操作",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[i("a-space",[i("a-tooltip",{attrs:{placement:"top",title:"费用维护"}},[i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybillimport:gethederanddetailasync",expression:"`api:admin:hairwaybillimport:gethederanddetailasync`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"account-book"},on:{click:function(e){return t.review(n)}}})],1)],1)]}}])})],1),i("vxe-pager",{attrs:{"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,total:t.pagination.totalResult,"page-sizes":[20,50,100,200],layouts:["PrevPage","JumpNumber","NextPage","Sizes","Total"]},on:{"page-change":t.handlePageChange}})],1)}),[],!1,null,"4ae3c5bf",null).exports;e.default=f},dc7e:function(t,e,i){"use strict";i("d81d"),i("45fc"),i("a9e3");var n=i("786d"),a=i("682e"),s=i("7943"),r=i("046f"),o=i("2716"),c={name:"SelectSettlement",props:{table:{type:Object,default:function(){}},businessType:{type:Number,default:0},bindingDoc:{type:Number,default:0}},data:function(){return{tableList:[],settlementObjectList:[],form:{},rules:{setOCode:[{required:!0,message:"请选择计费规则",trigger:"change"}]},visible:!1,confirmLoading:!1,spinning:!1,disabled:!1}},methods:{isAllEqual:function(t,e){return!(0<t.length)||!t.some((function(i,n){return i[e]!==t[0][e]}))},open:function(){if(this.tableList=this.table.getCheckboxRecords(),(1002==this.businessType||1001==this.businessType)&&0==this.bindingDoc){if(!(this.isAllEqual(this.tableList,"entrustCode")&&this.isAllEqual(this.tableList,"loadingPort")&&this.isAllEqual(this.tableList,"destinationPort")&&this.isAllEqual(this.tableList,"tradeTerms")))return this.$message.error("请选择相同 委托人,起运港,目的港,贸易条款 的订单!"),!1;this.getSelectSettlementObject()}if((1002==this.businessType||1001==this.businessType)&&1==this.bindingDoc){if(!(this.isAllEqual(this.tableList,"airlineCarrier")&&this.isAllEqual(this.tableList,"loadingPort")&&this.isAllEqual(this.tableList,"destinationPort")))return this.$message.error("请选择相同 航空承运人,起运港,目的港 的订单!"),!1;this.getSelectSettlementObjectMawb()}},getSelectSettlementObject:function(){var t=this;this.form={idlist:[],setOCode:"",bussinessType:this.businessType,entrustCode:this.tableList[0].entrustCode,loadingPort:this.tableList[0].loadingPort,destinationPort:this.tableList[0].destinationPort,tradeTerms:this.tableList[0].tradeTerms},this.visible=!0,this.spinning=!0,this.disabled=!0;var e={businessType:this.businessType,bindingDoc:this.bindingDoc,entrustCode:this.tableList[0].entrustCode,loadingPort:this.tableList[0].loadingPort,destinationPort:this.tableList[0].destinationPort,trade:this.tableList[0].tradeTerms};Object(n.e)(e).then((function(e){1===e.data.code&&(t.settlementObjectList=e.data.data,t.spinning=!1,t.disabled=!1)}))},getSelectSettlementObjectMawb:function(){var t=this;this.form={idlist:[],setOCode:"",bussinessType:this.businessType,airlineCarrier:this.tableList[0].airlineCarrier,loadingPort:this.tableList[0].loadingPort,destinationPort:this.tableList[0].destinationPort},this.visible=!0,this.spinning=!0,this.disabled=!0;var e={businessType:this.businessType,bindingDoc:this.bindingDoc,entrustCode:this.tableList[0].airlineCarrier,loadingPort:this.tableList[0].loadingPort,destinationPort:this.tableList[0].destinationPort};Object(n.f)(e).then((function(e){1===e.data.code&&(t.settlementObjectList=e.data.data,t.spinning=!1,t.disabled=!1)}))},handelOk:function(){var t=this;0<this.settlementObjectList.length&&(this.form.idlist=[],this.$refs.form.validate((function(e){e&&(t.confirmLoading=!0,t.tableList.map((function(e){t.form.idlist.push(e.id)})),1002==t.businessType&&0==t.bindingDoc&&Object(a.n)(t.form).then((function(e){1===e.data.code?(t.confirmLoading=!1,t.visible=!1,t.$message.success("保存成功!")):(t.confirmLoading=!1,t.$message.error(e.data.msg))})).catch((function(e){t.confirmLoading=!1,t.$message.error("系统内部错误!")})),1002==t.businessType&&1==t.bindingDoc&&Object(s.o)(t.form).then((function(e){1===e.data.code?(t.confirmLoading=!1,t.visible=!1,t.$message.success("保存成功!")):(t.confirmLoading=!1,t.$message.error(e.data.msg))})).catch((function(e){t.confirmLoading=!1,t.$message.error("系统内部错误!")})),1001==t.businessType&&0==t.bindingDoc&&Object(o.j)(t.form).then((function(e){1===e.data.code?(t.confirmLoading=!1,t.visible=!1,t.$message.success("保存成功!")):(t.confirmLoading=!1,t.$message.error(e.data.msg))})).catch((function(e){t.confirmLoading=!1,t.$message.error("系统内部错误!")})),1001==t.businessType&&1==t.bindingDoc&&Object(r.j)(t.form).then((function(e){1===e.data.code?(t.confirmLoading=!1,t.visible=!1,t.$message.success("保存成功!")):(t.confirmLoading=!1,t.$message.error(e.data.msg))})).catch((function(e){t.confirmLoading=!1,t.$message.error("系统内部错误!")})))})))}}};i("3378"),i=i("2877"),c=Object(i.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"SelectSettlement"},[0==t.bindingDoc?i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:settlementobject:getselectsettlementobject",expression:"`api:admin:settlementobject:getselectsettlementobject`",arg:"permission"}],attrs:{type:"primary"},on:{click:t.open}},[t._v("选择计费规则")]):t._e(),1==t.bindingDoc?i("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:settlementobject:getselectsettlementobjectbymawb",expression:"`api:admin:settlementobject:getselectsettlementobjectbymawb`",arg:"permission"}],attrs:{type:"primary"},on:{click:t.open}},[t._v("选择计费规则")]):t._e(),i("a-modal",{attrs:{destroyOnClose:!0,title:"选择计费规则",centered:"",visible:t.visible,"confirm-loading":t.confirmLoading,maskClosable:!1,"ok-button-props":{props:{disabled:t.disabled}}},on:{ok:t.handelOk,cancel:function(e){t.visible=!1}}},[i("template",{slot:"closeIcon"},[i("a-button",{attrs:{type:"danger",size:"small",shape:"circle",icon:"close-circle"}})],1),i("a-spin",{attrs:{spinning:t.spinning}},[i("a-form-model",{ref:"form",attrs:{model:t.form,rules:t.rules}},[0<t.settlementObjectList.length?i("a-form-model-item",{attrs:{prop:"setOCode"}},[i("a-radio-group",{model:{value:t.form.setOCode,callback:function(e){t.$set(t.form,"setOCode",e)},expression:"form.setOCode"}},t._l(t.settlementObjectList,(function(e,n){return i("a-radio",{key:n,staticStyle:{display:"block",height:"30px"},attrs:{value:e.setOCode}},[t._v(" "+t._s(e.setOCode)+" - "+t._s(e.setOName)+" ")])})),1)],1):i("div",[t._v(" 暂无数据 ")])],1)],1)],2)],1)}),[],!1,null,"9553053c",null);e.a=c.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-688b1340"],{"0665":function(t,e,a){},"602b":function(t,e,a){"use strict";a.r(e),a("99af"),a("4de4"),a("d81d"),a("d3b7");var i=a("5530"),n=a("682e"),r=a("cdc0"),o=a("a701"),s=a("91f0"),c=a("9056"),l=a("2fc4"),u=a("0559"),d=a("5880"),h=a("c32d"),p=a.n(h),f=a("2ef0"),g=a.n(f);h=a("dc7e"),f=a("a6ea"),p={name:"AirExportHAirwayBillMaintenance",i18n:a("9225"),components:{MySearch:l.a,MySearchWindow:u.a,SelectSettlement:h.a,ExpendTable:f.a},computed:Object(i.a)(Object(i.a)({},Object(d.mapGetters)("account",["user"])),{},{fields:function(){return[{value:"orderNo",label:"业务编号",type:"string"},{value:"hawb",label:"分单号",type:"string"},{value:"mawb",label:"主单号",type:"string"}]}}),data:function(){return{minHeight:window.innerHeight-219,menuID:this.$route.meta.id,hAirwayBillList:[],consignorList:[],tradeClauses:[],costMainStatuss:[],taskTypes:[],settlementpeopleList:[],chargeList:[],loading:!1,pagination:{currentPage:1,pageSize:100,totalResult:0},dynamicFilter:{},filter:{},searchWindowVisible:!1,activeFilter:0,filterList:[{label:"未提交",value:0},{label:"全部",value:99}]}},created:function(){this.getDictionary(),this.getHAirwayBillList()},methods:{moment:p.a,getDictionary:function(){var t=this;Object(c.c)().then((function(e){1===e.data.code&&(t.chargeList=e.data.data)})),Object(r.f)(["Consignor","Settlementpeople"]).then((function(e){1===e.data.code&&(e=e.data.data,t.consignorList=e.filter((function(t){return"Consignor"===t.corporationtype}))[0].data,t.settlementpeopleList=e.filter((function(t){return"Settlementpeople"===t.corporationtype}))[0].data)})),Object(o.d)(["TradeClause","CostMainStatus","TaskType"]).then((function(e){1===e.data.code&&(e=e.data.data,t.tradeClauses=e.filter((function(t){return"TradeClause"===t.code}))[0].data,t.costMainStatuss=e.filter((function(t){return"CostMainStatus"===t.code}))[0].data,t.taskTypes=e.filter((function(t){return"TaskType"===t.code}))[0].data)}))},change:function(){this.getHAirwayBillList()},getHAirwayBillList:function(){var t=this;this.loading=!0,this.filter={costStatus:this.activeFilter},Object(n.e)(this.pagination.currentPage,this.pagination.pageSize,this.dynamicFilter,this.filter).then((function(e){1===e.data.code&&(t.hAirwayBillList=e.data.data.list,t.pagination.totalResult=e.data.data.total,t.loading=!1)}))},loadContentMethod:function(t){var e=t.row;return new Promise((function(t){Object(s.e)(e.id).then((function(a){var i,n;1===a.data.code&&(e.arlist=a.data.data.arlist,e.aplist=a.data.data.aplist,n=i=0,e.arlist&&e.arlist.map((function(t){i+=t.chargeAmount})),e.aplist&&e.aplist.map((function(t){n+=t.chargeAmount})),e.arCount=i,e.apCount=n,e.headCount=e.arCount-e.apCount,t())}))}))},handlePageChange:function(t){var e=t.currentPage;t=t.pageSize;this.pagination.currentPage=e,this.pagination.pageSize=t,this.getHAirwayBillList()},onSearch:function(t){this.dynamicFilter=t,this.pagination.currentPage=1,this.getHAirwayBillList()},onSearchFilter:function(t){this.dynamicFilter=t,this.pagination.currentPage=1,this.searchWindowVisible=!1,this.getHAirwayBillList()},review:function(t){this.$router.push({path:"/ReviewAirExportHAirwayBill",query:{id:t.id,menuID:this.menuID}})},changeStatus:function(){var t=this,e=this.$refs.xTable.getCheckboxRecords().map((function(t){return t.id}));0!=e.length?(e={idlist:e,chargeStatus:2},Object(n.m)(e).then((function(e){1===e.data.code?(t.$message.success("提交成功!"),t.getHAirwayBillList()):t.$message.error(e.data.msg)})).catch((function(e){t.$message.error("系统内部错误!")}))):this.$message.error("请选择订单!")},changeChargeLineStatus:function(){var t=this,e=this.$refs.xTable.getRowExpandRecords(),a=[],i=[];e.map((function(e){t.$refs["expend"+e.id].getxTableAR().getCheckboxRecords().map((function(t){a.push(t.id)})),t.$refs["expend"+e.id].getxTableAP().getCheckboxRecords().map((function(t){i.push(t.id)}))})),e=g.a.concat(a,i),0!=e.length?(e={iDlist:e,chargeStatus:2},Object(s.f)(e).then((function(e){1===e.data.code?(t.$message.success("提交成功!"),t.getHAirwayBillList()):t.$message.error(e.data.msg)})).catch((function(e){t.$message.error("系统内部错误!")}))):this.$message.error("请选择费用!")}}},a("b55f"),a=a("2877"),p=Object(a.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"AirExportHAirwayBillMaintenance"},[a("vxe-toolbar",{attrs:{custom:"",print:""},scopedSlots:t._u([{key:"tools",fn:function(){return[a("a-space",[t.loading?t._e():a("a-popconfirm",{attrs:{title:"确认提交吗?"},on:{confirm:t.changeStatus}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:hawbchangechargestatus",expression:"`api:admin:hairwaybill:hawbchangechargestatus`",arg:"permission"}],attrs:{type:"primary",icon:"check-circle"}},[t._v("提交订单")])],1),t.loading?t._e():a("a-popconfirm",{attrs:{title:"确认提交吗?"},on:{confirm:t.changeChargeLineStatus}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:chargedline:hawbchangechargelinestatus",expression:"`api:admin:chargedline:hawbchangechargelinestatus`",arg:"permission"}],attrs:{type:"primary",icon:"check-circle"}},[t._v("提交费用")])],1),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length?a("SelectSettlement",{attrs:{table:t.$refs.xTable,businessType:1002,bindingDoc:0}}):t._e(),a("a-radio-group",{attrs:{"button-style":"solid"},on:{change:t.change},model:{value:t.activeFilter,callback:function(e){t.activeFilter=e},expression:"activeFilter"}},t._l(t.filterList,(function(e){return a("a-radio-button",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])})),1),a("my-search",{attrs:{fields:t.fields},on:{click:t.onSearch}}),a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){t.searchWindowVisible=!0}}},[t._v("高级查询")]),a("my-search-window",{attrs:{visible:t.searchWindowVisible,fields:t.fields,menuID:t.menuID},on:{"update:visible":function(e){t.searchWindowVisible=e},click:t.onSearchFilter}})],1)]},proxy:!0}])}),a("vxe-table",{ref:"xTable",attrs:{"keep-source":"",data:t.hAirwayBillList,loading:t.loading,"print-config":{},"show-overflow":"",resizable:"",border:"","highlight-hover-row":"",height:t.minHeight,"expand-config":{lazy:!0,loadMethod:t.loadContentMethod}}},[a("vxe-column",{attrs:{type:"checkbox",width:"50",fixed:"left"},scopedSlots:t._u([{key:"header",fn:function(e){var i=e.checked;e=e.indeterminate;return[a("span",{staticClass:"custom-checkbox",on:{click:function(e){return e.stopPropagation(),t.$refs.xTable.toggleAllCheckboxRow()}}},[a("span",e?[a("a-checkbox",{attrs:{indeterminate:!0}})]:i?[a("a-checkbox",{attrs:{checked:!0}})]:[a("a-checkbox")],1)])]}},{key:"checkbox",fn:function(e){var i=e.row,n=e.checked;e=e.indeterminate;return[a("span",{staticClass:"custom-checkbox",on:{click:function(e){return e.stopPropagation(),t.$refs.xTable.toggleCheckboxRow(i)}}},[a("span",e?[a("a-checkbox",{attrs:{indeterminate:!0}})]:n?[a("a-checkbox",{attrs:{checked:!0}})]:[a("a-checkbox")],1)])]}}])}),a("vxe-column",{attrs:{type:"expand",width:"50",fixed:"left"},scopedSlots:t._u([{key:"content",fn:function(e){return e=e.row,[a("ExpendTable",{ref:"expend"+e.id,attrs:{arlist:e.arlist,aplist:e.aplist,arCount:e.arCount,apCount:e.apCount,taskTypes:t.taskTypes,settlementpeopleList:t.settlementpeopleList,chargeList:t.chargeList,costMainStatuss:t.costMainStatuss}})]}}])}),a("vxe-column",{attrs:{field:"orderNo",title:"业务编号"}}),a("vxe-column",{attrs:{field:"hawb",title:"分单号"}}),a("vxe-column",{attrs:{field:"mawb",title:"主单号"}}),a("vxe-column",{attrs:{field:"entrustCode",title:"委托人"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t._l(t.consignorList,(function(e){return[e.corporationCode==i.entrustCode?a("span",{key:e.corporationCode},[t._v(t._s(e.corporationName))]):t._e()]}))]}}])}),a("vxe-column",{attrs:{field:"loadingPort",title:"起运港"}}),a("vxe-column",{attrs:{field:"destinationPort",title:"目的港"}}),a("vxe-column",{attrs:{field:"tradeTerms",title:"贸易条款"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t._l(t.tradeClauses,(function(e){return[e.value==i.tradeTerms?a("span",{key:e.value},[t._v(t._s(e.name))]):t._e()]}))]}}])}),a("vxe-column",{attrs:{field:"pieces",title:"件数"}}),a("vxe-column",{attrs:{field:"weight",title:"重量"}}),a("vxe-column",{attrs:{field:"volume",title:"体积"}}),a("vxe-column",{attrs:{field:"arStatus",title:"应收状态"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t._l(t.costMainStatuss,(function(e){return[e.value==i.arStatus?a("span",{key:e.value},[t._v(t._s(e.name))]):t._e()]}))]}}])}),a("vxe-column",{attrs:{field:"apStatus",title:"应付状态"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t._l(t.costMainStatuss,(function(e){return[e.value==i.apStatus?a("span",{key:e.value},[t._v(t._s(e.name))]):t._e()]}))]}}])}),a("vxe-column",{attrs:{field:"headCount",title:"毛利"},scopedSlots:t._u([{key:"default",fn:function(e){return e=e.row,[e.headCount?a("span",{staticStyle:{"font-weight":"bold",color:"#f50","font-size":"14px"}},[t._v(t._s(e.headCount))]):t._e()]}}])}),a("vxe-column",{attrs:{width:"50",title:"操作",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("a-space",[a("a-tooltip",{attrs:{placement:"top",title:"费用维护"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:hairwaybill:gethederanddetailasync",expression:"`api:admin:hairwaybill:gethederanddetailasync`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"account-book"},on:{click:function(e){return t.review(i)}}})],1)],1)]}}])})],1),a("vxe-pager",{attrs:{"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,total:t.pagination.totalResult,"page-sizes":[20,50,100,200],layouts:["PrevPage","JumpNumber","NextPage","Sizes","Total"]},on:{"page-change":t.handlePageChange}})],1)}),[],!1,null,"29289ea5",null).exports;e.default=p},b55f:function(t,e,a){"use strict";a("0665")}}]);
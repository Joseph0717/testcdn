(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dd8dd994"],{"63f6":function(t,e,a){},ba0d:function(t,e,a){"use strict";a("63f6")},df6a:function(t,e,a){"use strict";a.r(e),a("99af"),a("4de4"),a("d81d"),a("b0c0"),a("d3b7"),a("25f0");var i=a("5530"),n=a("7943"),r=a("fbf24"),o=a("a701"),s=a("2fc4"),l=a("0559"),c=a("5880"),d=a("c32d"),u=a.n(d),p=a("f910");d=a("207c"),u={name:"MAirwayBillNew",i18n:a("9225"),components:{MySearch:s.a,MySearchWindow:l.a,AttachedFiles:p.a,Export:d.a},computed:Object(i.a)(Object(i.a)({},Object(c.mapGetters)("account",["user"])),{},{fields:function(){return[{value:"orderNo",label:"业务编号",type:"string"},{value:"mawb",label:"主单号",type:"string"}]}}),data:function(){return{minHeight:window.innerHeight-219,menuID:this.$route.meta.id,bookingTypes:[],serviceLevels:[],layoutList:[],mAirwayBillList:[],loading:!1,pagination:{currentPage:1,pageSize:100,totalResult:0},dynamicFilter:{},filter:{},searchWindowVisible:!1,footerData:[["合计","","","","","",""]],mergeFooterItems:[{row:0,col:1,rowspan:1,colspan:1},{row:1,col:4,rowspan:1,colspan:8},{row:2,col:4,rowspan:1,colspan:8}],ID:"0",visible:!1}},created:function(){0xd516507f5045==this.menuID&&this.getLayoutList(),this.getMAirwayBillList(),this.getDictionary()},methods:{moment:u.a,getDictionary:function(){var t=this;Object(o.d)(["BookingType","ServiceLevel"]).then((function(e){1===e.data.code&&(e=e.data.data,t.bookingTypes=e.filter((function(t){return"BookingType"===t.code}))[0].data,t.serviceLevels=e.filter((function(t){return"ServiceLevel"===t.code}))[0].data)}))},getLayoutList:function(){var t=this;Object(r.c)(this.user.name,this.menuID).then((function(e){1===e.data.code&&(t.layoutList=e.data.data)}))},getMAirwayBillList:function(){var t=this;switch(this.loading=!0,this.menuID){case 0xd516507f5045:this.filter={mAirwayStatus:0};break;case 0xd516582e2045:this.filter={mAirwayStatus:1};break;case 0xd5165ed18045:this.filter={mAirwayStatus:2};break;case 0xd5166738c045:this.filter={mAirwayStatus:3};break;case 0xd5166f61a045:this.filter={mAirwayStatus:4}}Object(n.k)(this.pagination.currentPage,this.pagination.pageSize,this.dynamicFilter,this.filter).then((function(e){1===e.data.code&&(t.mAirwayBillList=e.data.data.list,t.pagination.totalResult=e.data.data.total,t.footerData=[["合计","","","","","",""]],t.mergeFooterItems=[{row:0,col:1,rowspan:1,colspan:1},{row:1,col:4,rowspan:1,colspan:8},{row:2,col:4,rowspan:1,colspan:8}],t.$refs.xTable.updateFooter(),t.loading=!1)}))},handlePageChange:function(t){var e=t.currentPage;t=t.pageSize;this.pagination.currentPage=e,this.pagination.pageSize=t,this.getMAirwayBillList()},onSearch:function(t){this.dynamicFilter=t,this.pagination.currentPage=1,this.getMAirwayBillList()},onSearchFilter:function(t){this.dynamicFilter=t,this.pagination.currentPage=1,this.searchWindowVisible=!1,this.getMAirwayBillList()},footerMethod:function(){return this.footerData},change:function(){var t=this;if(0xd516582e2045!==this.menuID)return!1;var e,a,i,r,o,s,l,c=this.$refs.xTable.getCheckboxRecords();0==c.length?(this.footerData=[["合计","","","","","",""]],this.$refs.xTable.updateFooter()):(this.loading=!0,e=[],o=r=i=a=0,l=s="",c.map((function(t){e.push(t.id)})),Object(n.i)(e).then((function(e){1===e.data.code&&(a=e.data.data.pieces,i=e.data.data.weight,r=e.data.data.volume,o=e.data.data.eq,s=e.data.data.solutions747,l=e.data.data.solutions777,t.footerData=[["合计","","","",a,i,r,o],["747","","","",s],["777","","","",l]],t.loading=!1,t.$refs.xTable.updateFooter())})))},batchDelete:function(){var t=this,e=this.$refs.xTable.getCheckboxRecords();if(0==e.length)return!1;e=e.map((function(t){return t.id})),Object(n.c)(e).then((function(e){1===e.data.code&&t.getMAirwayBillList()}))},insert:function(){this.$router.push("/EditAirExportMAirwayBill?time=".concat(Date.now(),"&id=0&tempID=0&type=1"))},edit:function(t){this.$router.push("/EditAirExportMAirwayBill?id=".concat(t.id,"&tempID=0&type=1"))},review:function(t){this.$router.push({path:"/ReviewAirExportMAirwayBill",query:{id:t.id,menuID:this.menuID}})},handleMenuClick:function(t){this.$router.push("/EditAirExportMAirwayBill?time=".concat(Date.now(),"&id=0&tempID=").concat(t.key,"&type=1"))},insertTemp:function(){this.$router.push("/EditAirExportMAirwayBill?time=".concat(Date.now(),"&id=0&tempID=0&menuID=").concat(this.menuID,"&type=2"))},editTemp:function(t){this.$router.push("/EditAirExportMAirwayBill?id=0&tempID=".concat(t.id,"&menuID=").concat(this.menuID,"&type=2"))},deleteTemp:function(t){var e=this;Object(r.d)(t.id).then((function(t){1===t.data.code&&(e.getLayoutList(),e.$message.success("模板删除成功!"))}))},changeStatus:function(){var t=this,e=this.$refs.xTable.getCheckboxRecords();if(0==e.length)return!1;var a=[],i=[],r=[];if(e.map((function(t){0==t.pieces&&a.push("1"),0==t.weight&&i.push("1"),0==t.volume&&r.push("1")})),0<a.length||0<i.length||0<r.length)return this.$message.error("件数，重量， 体积不能为0!"),!1;e={idlist:e.map((function(t){return{id:t.id}})),mAirwayStatus:1},Object(n.m)(e).then((function(e){1===e.data.code?(t.$message.success("审核成功!"),t.getMAirwayBillList()):t.$message.error("审核失败!")}))},printAirwayBill:function(t){var e=[];this.$refs.xTable.getCheckboxRecords().map((function(t){e.push(t.id)})),this.$router.push("/PrintAirwayBill?time=".concat(Date.now(),"&ids=").concat(e,"&type=").concat(t.key))},editPDF:function(t){this.$router.push("/EditPDF?id=".concat(t.id,"&type=2"))},openFile:function(){var t=[];if(this.$refs.xTable.getCheckboxRecords().map((function(e){t.push(e.id)})),1<t.length)return this.$message.error("不支持多选!"),!1;this.ID=t[0].toString(),this.visible=!0}}},a("ba0d"),a=a("2877"),u=Object(a.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"MAirwayBillNew"},[a("vxe-toolbar",{attrs:{custom:"",print:""},scopedSlots:t._u([{key:"tools",fn:function(){return[a("a-space",[0xd516507f5045==t.menuID?a("a-dropdown",{attrs:{placement:"bottomCenter",type:"primary"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:mairwaybill:add",expression:"`api:admin:mairwaybill:add`",arg:"permission"}],attrs:{type:"primary"},on:{click:t.insert}},[t._v("新建主单"),a("a-icon",{attrs:{type:"ellipsis"}})],1),a("a-menu",{attrs:{slot:"overlay"},on:{click:t.handleMenuClick},slot:"overlay"},[a("a-menu-item",{attrs:{disabled:""}},[a("a-button",{attrs:{type:"primary",block:""},on:{click:function(e){return e.stopPropagation(),t.insertTemp(e)}}},[t._v("新建模板")])],1),t._l(t.layoutList,(function(e){return a("a-menu-item",{key:e.id},[a("a-space",[a("a-button",{attrs:{type:"primary"}},[a("a-tooltip",{attrs:{placement:"top",title:e.layoutName}},[a("div",{staticStyle:{width:"100px","max-width":"100px",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(e.layoutName))])])],1),a("a-tooltip",{attrs:{placement:"top",title:"编辑模板"}},[a("a-icon",{attrs:{type:"edit"},on:{click:function(a){return a.stopPropagation(),t.editTemp(e)}}})],1),a("a-popconfirm",{attrs:{title:t.$t("47"),overlayStyle:{zIndex:1051}},on:{confirm:function(a){return a.stopPropagation(),t.deleteTemp(e)}}},[a("a-tooltip",{attrs:{placement:"top",title:"删除模板"}},[a("a-icon",{attrs:{type:"delete"},on:{click:function(t){t.stopPropagation()}}})],1)],1)],1)],1)}))],2)],1):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length&&0xd516507f5045==t.menuID?a("a-popconfirm",{attrs:{title:t.$t("47")},on:{confirm:t.batchDelete}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:mairwaybill:batchsoftdelete",expression:"`api:admin:mairwaybill:batchsoftdelete`",arg:"permission"}],attrs:{type:"danger",icon:"delete"}},[t._v("删除")])],1):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length&&0xd516507f5045==t.menuID?a("a-popconfirm",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:mairwaybill:mawbchangestatusasync",expression:"`api:admin:mairwaybill:mawbchangestatusasync`",arg:"permission"}],attrs:{title:"确认通过审核吗?"},on:{confirm:t.changeStatus}},[a("a-button",{attrs:{type:"primary"}},[t._v("审核")])],1):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length?a("a-dropdown",{attrs:{placement:"bottomCenter"}},[a("a-menu",{attrs:{slot:"overlay"},on:{click:t.printAirwayBill},slot:"overlay"},[a("a-menu-item",{key:2},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:mairwaybill:getmoremawbreportasync",expression:"`api:admin:mairwaybill:getmoremawbreportasync`",arg:"permission"}],attrs:{type:"primary",block:""}},[t._v("打印主单")])],1),a("a-menu-item",{key:3},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:mairwaybill:getmorecargomfreportasync",expression:"`api:admin:mairwaybill:getmorecargomfreportasync`",arg:"permission"}],attrs:{type:"primary",block:""}},[t._v("打印订舱单")])],1),a("a-menu-item",{key:4},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:mairwaybill:getmoremawbreportasync",expression:"`api:admin:mairwaybill:getmoremawbreportasync`",arg:"permission"}],attrs:{type:"primary",block:""}},[t._v("打印DL-888D")])],1)],1),a("a-button",{attrs:{type:"primary"}},[t._v("打印")])],1):t._e(),!t.loading&&0<t.$refs.xTable.getCheckboxRecords().length?a("a-button",{attrs:{type:"primary"},on:{click:t.openFile}},[t._v("随附文件")]):t._e(),0<t.mAirwayBillList.length?a("Export",{attrs:{TYPE:2,pagination:t.pagination,dynamicFilter:t.dynamicFilter,filter:t.filter}}):t._e(),a("my-search",{attrs:{fields:t.fields},on:{click:t.onSearch}}),a("a-button",{attrs:{type:"primary"},on:{click:function(e){t.searchWindowVisible=!0}}},[t._v("高级查询")]),a("my-search-window",{attrs:{visible:t.searchWindowVisible,fields:t.fields,menuID:t.menuID},on:{"update:visible":function(e){t.searchWindowVisible=e},click:t.onSearchFilter}})],1)]},proxy:!0}])}),a("vxe-table",{ref:"xTable",attrs:{"keep-source":"",data:t.mAirwayBillList,loading:t.loading,"print-config":{},"show-overflow":"",resizable:"",border:"","highlight-hover-row":"",height:t.minHeight,"show-footer":0xd516582e2045==t.menuID,"footer-method":t.footerMethod,"merge-footer-items":t.mergeFooterItems}},[a("vxe-column",{attrs:{type:"checkbox",width:"50",fixed:"left"},scopedSlots:t._u([{key:"header",fn:function(e){var i=e.checked;e=e.indeterminate;return[a("span",{staticClass:"custom-checkbox",on:{click:function(e){return e.stopPropagation(),t.$refs.xTable.toggleAllCheckboxRow()}}},[a("span",e?[a("a-checkbox",{attrs:{indeterminate:!0},on:{change:t.change}})]:i?[a("a-checkbox",{attrs:{checked:!0},on:{change:t.change}})]:[a("a-checkbox",{on:{change:t.change}})],1)])]}},{key:"checkbox",fn:function(e){var i=e.row,n=e.checked;e=e.indeterminate;return[a("span",{staticClass:"custom-checkbox",on:{click:function(e){return e.stopPropagation(),t.$refs.xTable.toggleCheckboxRow(i)}}},[a("span",e?[a("a-checkbox",{attrs:{indeterminate:!0},on:{change:t.change}})]:n?[a("a-checkbox",{attrs:{checked:!0},on:{change:t.change}})]:[a("a-checkbox",{on:{change:t.change}})],1)])]}}])}),a("vxe-column",{attrs:{width:"100",field:"orderNo",title:"业务编号"}}),a("vxe-column",{attrs:{width:"100",field:"bookingType",title:"订舱类型"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t._l(t.bookingTypes,(function(e){return[e.value==i.bookingType?a("span",{key:e.value},[t._v(t._s(e.name))]):t._e()]}))]}}])}),a("vxe-column",{attrs:{width:"100",field:"mawb",title:"主单号"}}),a("vxe-column",{attrs:{width:"100",field:"pieces",title:"订舱件数"}}),a("vxe-column",{attrs:{width:"100",field:"weight",title:"订舱重量"}}),a("vxe-column",{attrs:{width:"100",field:"volume",title:"订舱体积"}}),a("vxe-column",{attrs:{width:"100",field:"loadingPort",title:"起运港"}}),a("vxe-column",{attrs:{width:"100",field:"transferPort",title:"中转港"}}),a("vxe-column",{attrs:{width:"100",field:"destinationPort",title:"目的港"}}),a("vxe-column",{attrs:{width:"100",field:"serviceLevel",title:"运输时效"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t._l(t.serviceLevels,(function(e){return[e.value==i.serviceLevel?a("span",{key:e.value},[t._v(t._s(e.name))]):t._e()]}))]}}])}),a("vxe-column",{attrs:{width:"100",field:"bookingCarrier",title:"订舱代理"}}),a("vxe-column",{attrs:{width:"100",field:"bookingContact",title:"联系人"}}),a("vxe-column",{attrs:{width:"100",field:"bookingContactPhone",title:"电话"}}),a("vxe-column",{attrs:{width:"100",field:"airlineCarrier",title:"航空承运人"}}),a("vxe-column",{attrs:{width:"100",field:"flightNo",title:"头程航班号"}}),a("vxe-column",{attrs:{width:"100",field:"flightDate",title:"航班日期"},scopedSlots:t._u([{key:"default",fn:function(e){return e=e.row,[t._v(" "+t._s(e.flightDate?t.moment(e.flightDate).format("YYYY-MM-DD"):"")+" ")]}}])}),a("vxe-column",{attrs:{width:"100",field:"flightRoute",title:"航线"}}),a("vxe-column",{attrs:{width:"100",field:"flightOwner",title:"航线负责人"}}),a("vxe-column",{attrs:{width:"130",title:"操作",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("a-space",[0xd516507f5045==t.menuID?a("a-tooltip",{attrs:{placement:"top",title:"编辑"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:mairwaybill:update",expression:"`api:admin:mairwaybill:update`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"edit"},on:{click:function(e){return t.edit(i)}}})],1):t._e(),a("a-tooltip",{attrs:{placement:"top",title:"查看主单"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:mairwaybill:gethederanddetailasync",expression:"`api:admin:mairwaybill:gethederanddetailasync`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"eye"},on:{click:function(e){return t.review(i)}}})],1),a("a-tooltip",{attrs:{placement:"top",title:"制单"}},[a("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:mairwaybill:updatemawbreportasync",expression:"`api:admin:mairwaybill:updatemawbreportasync`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"form"},on:{click:function(e){return t.editPDF(i)}}})],1)],1)]}}])})],1),a("vxe-pager",{attrs:{"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,total:t.pagination.totalResult,"page-sizes":[20,50,100,200],layouts:["PrevPage","JumpNumber","NextPage","Sizes","Total"]},on:{"page-change":t.handlePageChange}}),a("a-modal",{attrs:{width:800,visible:t.visible,title:"随附文件",maskClosable:!1,destroyOnClose:!0,footer:null,centered:""},on:{cancel:function(e){t.visible=!1}}},[a("template",{slot:"closeIcon"},[a("a-button",{attrs:{type:"danger",size:"small",shape:"circle",icon:"close-circle"}})],1),a("AttachedFiles",{attrs:{ID:t.ID}})],2)],1)}),[],!1,null,"04b45936",null).exports;e.default=u}}]);
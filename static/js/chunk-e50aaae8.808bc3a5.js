(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e50aaae8"],{a043:function(e,t,r){},c408:function(e,t,r){"use strict";r.d(t,"h",(function(){return n})),r.d(t,"a",(function(){return c})),r.d(t,"k",(function(){return m})),r.d(t,"b",(function(){return u})),r.d(t,"g",(function(){return f})),r.d(t,"c",(function(){return v})),r.d(t,"f",(function(){return h})),r.d(t,"e",(function(){return y})),r.d(t,"d",(function(){return T})),r.d(t,"j",(function(){return S})),r.d(t,"i",(function(){return I}));var a=r("1da1"),i=(r("96cf"),r("7424")),s=r("b775");function n(e,t,r,a){return o.apply(this,arguments)}function o(){return(o=Object(a.a)(regeneratorRuntime.mark((function e(t,r,a,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.SEAHAIRWAYBILLIMPORTGETPAGE,s.a.POST,{currentPage:t,pageSize:r,dynamicFilter:a,filter:n}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.SEAHAIRWAYBILLIMPORTADD,s.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.SEAHAIRWAYBILLIMPORTUPDATE,s.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.SEAHAIRWAYBILLIMPORTBATCHSOFTDELETE,s.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return _.apply(this,arguments)}function _(){return(_=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.SEAHAIRWAYBILLIMPORTGETHEDERANDDETAILASYNC,s.a.GET,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return b.apply(this,arguments)}function b(){return(b=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.SEAHAIRWAYBILLIMPORTCHANGESTATUSASYNC,s.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return g.apply(this,arguments)}function g(){return(g=Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.SEAHAIRWAYBILLIMPORTGETHAWBCOLLISTASYNC,s.a.GET));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.SEAHAIRWAYBILLIMPORTDOWNPAGEASYNC,s.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,r,a){return C.apply(this,arguments)}function C(){return(C=Object(a.a)(regeneratorRuntime.mark((function e(t,r,a,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.SEAHAIRWAYBILLIMPORTCHARGEPAGEASYNC,s.a.POST,{currentPage:t,pageSize:r,dynamicFilter:a,filter:n}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return O.apply(this,arguments)}function O(){return(O=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.SEAHAIRWAYBILLIMPORTINSERTSELECTEDSETOCODE,s.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return D.apply(this,arguments)}function D(){return(D=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.SEAHAIRWAYBILLIMPORTHAWBCHANGECHARGESTATUS,s.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},c4ba:function(e,t,r){"use strict";r.r(t),r("4de4"),r("d3b7"),r("4e82");var a=r("c408"),i=r("a701"),s=r("cdc0"),n=r("9056"),o=r("fddf"),c=r("d6bb"),l=r("b2b6"),m=r("d882"),d=r("c32d"),u=(d=r.n(d),r("ca00")),p=r("13ab"),f=r("ed0a"),_=r("7b6d"),v=r("64a6");p={name:"ReviewSeaImportHawb",components:{FlightInformation:p.a,SeaContainer:f.a,QuestionsAnswers:_.a,ChargedLine:v.a},i18n:r("9225"),data:function(){return{clientWidth:0,ID:this.$route.query.id,menuID:this.$route.query.menuID,spinning:!1,form:{},goodsTypes:[],packagingTypes:[],tradeClauses:[],transportations:[],customsTypes:[],issuanceStates:[],customsWays:[],clearanceTypes:[],fileTypes:[],consignorList:[],paymentMethods:[],shipperList:[],consigneeList:[],notifierList:[],settlementpeopleList:[],chargeList:[],chargeBasiss:[],currencyList:[],taskTypes:[],ARAPs:[],costMainStatuss:[],loadingPortAreas:[],packingModes:[],releaseOrderModes:[],cargoCanvassingModes:[],containerSizeList:[],docks:[],milestoneList:[],uploadFileList:[]}},created:function(){this.getDictionary(),this.getHederAndDetailAsync(),this.getOrderMilestoneSolution(),this.getUploadFileList()},mounted:function(){var e=this;setTimeout((function(){e.clientWidth=document.getElementById("top").clientWidth}),500),window.addEventListener("resize",this.resize)},destroyed:function(){window.removeEventListener("resize",this.resize,!1)},methods:{moment:d.a,resize:function(){this.clientWidth=document.getElementById("top").clientWidth},change:function(e){window.scrollTo(0,document.getElementById(e.target.value).offsetTop-62)},getDictionary:function(){var e=this;Object(n.c)().then((function(t){1===t.data.code&&(e.chargeList=t.data.data)})),Object(o.c)().then((function(t){1===t.data.code&&(e.currencyList=t.data.data)})),Object(c.c)().then((function(t){1===t.data.code&&(e.containerSizeList=t.data.data)})),Object(s.f)(["Shipper","Consignee","Notifier","Consignor","Settlementpeople","Dock"]).then((function(t){1===t.data.code&&(t=t.data.data,e.shipperList=t.filter((function(e){return"Shipper"===e.corporationtype}))[0].data,e.consigneeList=t.filter((function(e){return"Consignee"===e.corporationtype}))[0].data,e.notifierList=t.filter((function(e){return"Notifier"===e.corporationtype}))[0].data,e.consignorList=t.filter((function(e){return"Consignor"===e.corporationtype}))[0].data,e.settlementpeopleList=t.filter((function(e){return"Settlementpeople"===e.corporationtype}))[0].data,e.docks=t.filter((function(e){return"Dock"===e.corporationtype}))[0].data)})),Object(i.d)(["GoodsType","PackagingType","TradeClause","Transportation","CustomsType","IssuanceState","CustomsWay","ClearanceType","FileType","PaymentMethod","ChargeBasis","TaskType","ARAP","CostMainStatus","LoadingPortArea","PackingMode","ReleaseOrderMode","CargoCanvassingMode"]).then((function(t){1===t.data.code&&(t=t.data.data,e.goodsTypes=t.filter((function(e){return"GoodsType"===e.code}))[0].data,e.packagingTypes=t.filter((function(e){return"PackagingType"===e.code}))[0].data,e.tradeClauses=t.filter((function(e){return"TradeClause"===e.code}))[0].data,e.transportations=t.filter((function(e){return"Transportation"===e.code}))[0].data,e.customsTypes=t.filter((function(e){return"CustomsType"===e.code}))[0].data,e.issuanceStates=t.filter((function(e){return"IssuanceState"===e.code}))[0].data,e.customsWays=t.filter((function(e){return"CustomsWay"===e.code}))[0].data,e.clearanceTypes=t.filter((function(e){return"ClearanceType"===e.code}))[0].data,e.fileTypes=t.filter((function(e){return"FileType"===e.code}))[0].data,e.paymentMethods=t.filter((function(e){return"PaymentMethod"===e.code}))[0].data,e.chargeBasiss=t.filter((function(e){return"ChargeBasis"===e.code}))[0].data,e.taskTypes=t.filter((function(e){return"TaskType"===e.code}))[0].data,e.ARAPs=t.filter((function(e){return"ARAP"===e.code}))[0].data,e.costMainStatuss=t.filter((function(e){return"CostMainStatus"===e.code}))[0].data,e.loadingPortAreas=t.filter((function(e){return"LoadingPortArea"===e.code}))[0].data,e.packingModes=t.filter((function(e){return"PackingMode"===e.code}))[0].data,e.releaseOrderModes=t.filter((function(e){return"ReleaseOrderMode"===e.code}))[0].data,e.cargoCanvassingModes=t.filter((function(e){return"CargoCanvassingMode"===e.code}))[0].data)}))},getHederAndDetailAsync:function(){var e=this;this.spinning=!0,Object(a.g)(this.ID).then((function(t){1===t.data.code&&(e.form=t.data.data,e.spinning=!1)}))},getOrderMilestoneSolution:function(){var e=this;Object(m.b)(this.ID).then((function(t){1===t.data.code&&(e.milestoneList=t.data.data,e.milestoneList.sort(Object(u.a)("sort",!0)))}))},getUploadFileList:function(){var e=this;Object(l.c)(0,0,{referenceID:this.ID}).then((function(t){1===t.data.code&&(e.uploadFileList=t.data.data.list)}))},downloadFile:function(e){Object(l.b)(this,e.id,e.fileName)}}},r("f600"),f=r("2877"),_=Object(f.a)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ReviewSeaImportHawb"},[r("div",{staticClass:"top",attrs:{id:"top"}},[e.clientWidth&&!e.spinning?r("div",{staticClass:"top-content",style:"width:"+e.clientWidth+"px;"},[r("a-radio-group",{attrs:{"default-value":"BasicInformation","button-style":"solid"},on:{change:e.change}},[r("a-radio-button",{attrs:{value:"BasicInformation"}},[e._v("基本信息")]),r("a-radio-button",{attrs:{value:"FlightInformation"}},[e._v("航程信息")]),r("a-radio-button",{attrs:{value:"Consignor"}},[e._v("收发货人")]),r("a-radio-button",{attrs:{value:"PickupInformation",disabled:0==e.form.lsPickup}},[e._v("提货信息")]),r("a-radio-button",{attrs:{value:"CustomsDeclarationService",disabled:0==e.form.lsDeclare}},[e._v("报关服务")]),r("a-radio-button",{attrs:{value:"CustomsClearanceService",disabled:0==e.form.lsClearance}},[e._v("清关服务")]),r("a-radio-button",{attrs:{value:"DeliveryService",disabled:0==e.form.lsDelivery}},[e._v("派送服务")]),r("a-radio-button",{attrs:{value:"AttachedFiles"}},[e._v("随附文件")]),r("a-radio-button",{attrs:{value:"ChargedLine",disabled:0xeab3c0f4e045!=e.menuID&&0xebaae1200045!=e.menuID&&0xebab2eed0045!=e.menuID}},[e._v("费用")]),r("a-radio-button",{attrs:{value:"QuestionsAnswers"}},[e._v("问答")])],1)],1):e._e()]),r("a-spin",{attrs:{spinning:e.spinning}},[r("div",{staticClass:"container"},[r("div",{staticClass:"left"},[r("a-card",{attrs:{size:"small",title:"基本信息",id:"BasicInformation"}},[r("a-descriptions",{attrs:{title:"",column:4}},[r("a-descriptions-item",{attrs:{label:"业务编号"}},[e._v(" "+e._s(e.form.orderNo)+" ")]),r("a-descriptions-item",{attrs:{label:"分单号"}},[e._v(" "+e._s(e.form.hawb)+" ")]),r("a-descriptions-item",{attrs:{label:"主单号"}},[e._v(" "+e._s(e.form.mawb)+" ")]),r("a-descriptions-item",{attrs:{label:"分公司(组织)"}},[e._v(" "+e._s(e.form.orgId)+" ")]),r("a-descriptions-item",{attrs:{label:"操作员"}},[e._v(" "+e._s(e.form.operator)+" ")]),r("a-descriptions-item",{attrs:{label:"单证员"}},[e._v(" "+e._s(e.form.docSpecialist)+" ")]),r("a-descriptions-item",{attrs:{label:"操作日期"}},[e._v(" "+e._s(e.form.operationDate?e.moment(e.form.operationDate).format("YYYY-MM-DD"):"")+" ")]),r("a-descriptions-item",{attrs:{label:"完成日期"}},[e._v(" "+e._s(e.form.fnishDate?e.moment(e.form.fnishDate).format("YYYY-MM-DD"):"")+" ")]),r("a-descriptions-item",{attrs:{label:"取消委托"}},[r("a-checkbox",{attrs:{checked:0!=e.form.isCancelOrder}})],1),r("a-descriptions-item",{attrs:{label:"海关退关"}},[r("a-checkbox",{attrs:{checked:0!=e.form.isShutCustoms}})],1),r("a-descriptions-item",{attrs:{label:"HB/L"}},[r("a-checkbox",{attrs:{checked:0!=e.form.isHBL}})],1),r("a-descriptions-item",{attrs:{label:"AMS/EMS申报"}},[r("a-checkbox",{attrs:{checked:0!=e.form.isAMSEMS}})],1),r("a-descriptions-item",{attrs:{label:"起运港"}},[e._v(" "+e._s(e.form.loadingPort)+" ")]),r("a-descriptions-item",{attrs:{label:"港区"}},[e._l(e.loadingPortAreas,(function(t){return[t.code==e.form.loadingPortArea?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"中转港代码"}},[e._v(" "+e._s(e.form.transferPortCode)+" ")]),r("a-descriptions-item",{attrs:{label:"中转港"}},[e._v(" "+e._s(e.form.transferPort)+" ")]),r("a-descriptions-item",{attrs:{label:"目的港"}},[e._v(" "+e._s(e.form.destinationPort)+" ")]),r("a-descriptions-item",{attrs:{label:"国家"}},[e._v(" "+e._s(e.form.destinationCountry)+" ")]),r("a-descriptions-item",{attrs:{label:"目的地"}},[e._v(" "+e._s(e.form.destination)+" ")]),r("a-descriptions-item",{attrs:{label:"唛头"}},[e._v(" "+e._s(e.form.shippingMarks)+" ")]),r("a-descriptions-item",{attrs:{label:"英文品名"}},[e._v(" "+e._s(e.form.cargoName)+" ")]),r("a-descriptions-item",{attrs:{label:"中文品名"}},[e._v(" "+e._s(e.form.cargoNameEN)+" ")]),r("a-descriptions-item",{attrs:{label:"装箱方式"}},[e._l(e.packingModes,(function(t){return[t.value==e.form.packingMode?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"付款方式"}},[e._l(e.paymentMethods,(function(t){return[t.code==e.form.paymentMethod?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"运输条款"}},[e._l(e.tradeClauses,(function(t){return[t.value==e.form.transitClause?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"贸易条款"}},[e._l(e.tradeClauses,(function(t){return[t.value==e.form.tradeTerms?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"货物类型"}},[e._l(e.goodsTypes,(function(t){return[t.value==e.form.cargoType?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"实际件数"}},[e._v(" "+e._s(e.form.actualPieces)+" ")]),r("a-descriptions-item",{attrs:{label:"实际重量"}},[e._v(" "+e._s(e.form.actualWeight)+" ")]),r("a-descriptions-item",{attrs:{label:"实际体积"}},[e._v(" "+e._s(e.form.actualVolume)+" ")]),r("a-descriptions-item",{attrs:{label:"包装类型"}},[e._l(e.packagingTypes,(function(t){return[t.value==e.form.actualVolumeUnit?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"客户自拼号"}},[e._v(" "+e._s(e.form.customerOwnNumber)+" ")]),r("a-descriptions-item",{attrs:{label:"委托单位"}},[e._v(" "+e._s(e.form.entrustName)+" ")]),r("a-descriptions-item",{attrs:{label:"委托联系人"}},[e._v(" "+e._s(e.form.entrustContact)+" ")]),r("a-descriptions-item",{attrs:{label:"委托电话"}},[e._v(" "+e._s(e.form.entrustContactPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"委托邮编"}},[e._v(" "+e._s(e.form.entrustZipCode)+" ")]),r("a-descriptions-item",{attrs:{label:"委托传真"}},[e._v(" "+e._s(e.form.entrustFax)+" ")]),r("a-descriptions-item",{attrs:{label:"委托件数"}},[e._v(" "+e._s(e.form.entrustPieces)+" ")]),r("a-descriptions-item",{attrs:{label:"委托重量"}},[e._v(" "+e._s(e.form.entrustWeight)+" ")]),r("a-descriptions-item",{attrs:{label:"委托体积"}},[e._v(" "+e._s(e.form.entrustVolume)+" ")]),r("a-descriptions-item",{attrs:{label:"提单放单方式"}},[e._l(e.releaseOrderModes,(function(t){return[t.value==e.form.releaseOrderMode?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"客户编号"}},[e._v(" "+e._s(e.form.customerNO)+" ")]),r("a-descriptions-item",{attrs:{label:"外运编号"}},[e._v(" "+e._s(e.form.outwardTransportNO)+" ")]),r("a-descriptions-item",{attrs:{label:"合同号"}},[e._v(" "+e._s(e.form.contractNO)+" ")]),r("a-descriptions-item",{attrs:{label:"客服"}},[e._v(" "+e._s(e.form.owner)+" ")]),r("a-descriptions-item",{attrs:{label:"揽货"}},[e._l(e.cargoCanvassingModes,(function(t){return[t.value==e.form.cargoCanvassingMode?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"业务员",span:2}},[e._v(" "+e._s(e.form.salesman)+" ")]),r("a-descriptions-item",{attrs:{label:"国内服务",span:2}},[r("a-checkbox",{attrs:{checked:0!=e.form.lsPickup}},[e._v("提货服务")]),r("a-checkbox",{attrs:{checked:0!=e.form.lsDeclare}},[e._v("报关服务")]),r("a-checkbox",{attrs:{checked:0!=e.form.lsBooking}},[e._v("订舱服务")])],1),r("a-descriptions-item",{attrs:{label:"国外服务",span:2}},[r("a-checkbox",{attrs:{checked:0!=e.form.lsClearance}},[e._v("清关服务")]),r("a-checkbox",{attrs:{checked:0!=e.form.lsDelivery}},[e._v("派送服务")])],1)],1)],1),r("a-tabs",{attrs:{id:"FlightInformation"}},[r("a-tab-pane",{key:1,attrs:{tab:"航程信息","force-render":""}},[r("FlightInformation",{attrs:{order:e.form,docks:e.docks,isReview:!0}})],1),r("a-tab-pane",{key:2,attrs:{tab:"柜子信息","force-render":""}},[r("SeaContainer",{ref:"SeaContainer",attrs:{order:e.form,containerSizeList:e.containerSizeList,packagingTypes:e.packagingTypes,isReview:!0}})],1)],1),r("a-card",{attrs:{size:"small",title:"收发货人",id:"Consignor"}},[r("a-descriptions",{attrs:{title:"",column:4}},[r("a-descriptions-item",{attrs:{label:"发货人"}},[e._l(e.shipperList,(function(t){return[t.corporationCode==e.form.consignorCode?r("span",{key:t.corporationCode},[e._v(e._s(t.corporationName))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"英文抬头"}},[e._v(" "+e._s(e.form.consignorName)+" ")]),r("a-descriptions-item",{attrs:{label:"地址"}},[e._v(" "+e._s(e.form.consignorAddress)+" ")]),r("a-descriptions-item",{attrs:{label:"邮编"}},[e._v(" "+e._s(e.form.consignorZipCode)+" ")]),r("a-descriptions-item",{attrs:{label:"联系人"}},[e._v(" "+e._s(e.form.consignorContact)+" ")]),r("a-descriptions-item",{attrs:{label:"联系电话",span:3}},[e._v(" "+e._s(e.form.consignorContactPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"收货人"}},[e._l(e.consigneeList,(function(t){return[t.corporationCode==e.form.consigneeCode?r("span",{key:t.corporationCode},[e._v(e._s(t.corporationName))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"英文抬头"}},[e._v(" "+e._s(e.form.consigneeName)+" ")]),r("a-descriptions-item",{attrs:{label:"地址"}},[e._v(" "+e._s(e.form.consigneeAddress)+" ")]),r("a-descriptions-item",{attrs:{label:"邮编"}},[e._v(" "+e._s(e.form.consigneeZipCode)+" ")]),r("a-descriptions-item",{attrs:{label:"联系人"}},[e._v(" "+e._s(e.form.consigneeContact)+" ")]),r("a-descriptions-item",{attrs:{label:"联系电话",span:3}},[e._v(" "+e._s(e.form.consigneeContactPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"通知人"}},[e._l(e.notifierList,(function(t){return[t.corporationCode==e.form.notifierCode?r("span",{key:t.corporationCode},[e._v(e._s(t.corporationName))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"英文抬头"}},[e._v(" "+e._s(e.form.notifierName)+" ")]),r("a-descriptions-item",{attrs:{label:"地址"}},[e._v(" "+e._s(e.form.notifierAddress)+" ")]),r("a-descriptions-item",{attrs:{label:"邮编"}},[e._v(" "+e._s(e.form.notifierZipCode)+" ")]),r("a-descriptions-item",{attrs:{label:"联系人"}},[e._v(" "+e._s(e.form.notifierContact)+" ")]),r("a-descriptions-item",{attrs:{label:"联系电话",span:3}},[e._v(" "+e._s(e.form.notifierContactPhone)+" ")])],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:12}},[r("a-card",{attrs:{size:"small",title:"委托尺寸"}},[r("vxe-table",{ref:"xTableLeft",attrs:{"keep-source":"",data:e.form.entrustSizeList,"show-overflow":"",resizable:"",border:"","highlight-hover-row":""}},[r("vxe-column",{attrs:{field:"combinationSize",title:"尺寸"}}),r("vxe-column",{attrs:{field:"pieces",title:"件数"}}),r("vxe-column",{attrs:{field:"remark",title:"备注"}})],1)],1)],1),r("a-col",{attrs:{span:12}},[r("a-card",{attrs:{size:"small",title:"实际尺寸"}},[r("vxe-table",{ref:"xTableRight",attrs:{"keep-source":"",data:e.form.seaActualSizeList,"show-overflow":"",resizable:"",border:"","highlight-hover-row":""}},[r("vxe-column",{attrs:{field:"combinationSize",title:"尺寸"}}),r("vxe-column",{attrs:{field:"pieces",title:"件数"}}),r("vxe-column",{attrs:{field:"remark",title:"备注"}})],1)],1)],1)],1),e.form.lsPickup?r("a-card",{attrs:{size:"small",title:"提货信息",id:"PickupInformation"}},[r("a-descriptions",{attrs:{title:"",column:4}},[r("a-descriptions-item",{attrs:{label:"提单号"}},[e._v(" "+e._s(e.form.pickSONO)+" ")]),r("a-descriptions-item",{attrs:{label:"提柜号"}},[e._v(" "+e._s(e.form.pickContainerNO)+" ")]),r("a-descriptions-item",{attrs:{label:"实际提货时间"}},[e._v(" "+e._s(e.form.pickActualPickUpTime?e.moment(e.form.pickActualPickUpTime).format("YYYY-MM-DD"):"")+" ")]),r("a-descriptions-item",{attrs:{label:"实际还柜时间"}},[e._v(" "+e._s(e.form.pickActualReturnContainerTime?e.moment(e.form.pickActualReturnContainerTime).format("YYYY-MM-DD"):"")+" ")]),r("a-descriptions-item",{attrs:{label:"提货运输方式"}},[e._l(e.transportations,(function(t){return[t.value==e.form.pickTransferType?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"提货车型"}},[e._v(" "+e._s(e.form.pickTruckType)+" ")]),r("a-descriptions-item",{attrs:{label:"提货车牌号"}},[e._v(" "+e._s(e.form.pickTruckNO)+" ")]),r("a-descriptions-item",{attrs:{label:"提货司机姓名"}},[e._v(" "+e._s(e.form.pickDriver)+" ")]),r("a-descriptions-item",{attrs:{label:"提货司机电话"}},[e._v(" "+e._s(e.form.pickDriverPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"装货地点"}},[e._v(" "+e._s(e.form.pickLoadingPlace)+" ")]),r("a-descriptions-item",{attrs:{label:"装货单位联系人"}},[e._v(" "+e._s(e.form.pickLoadingContact)+" ")]),r("a-descriptions-item",{attrs:{label:"装货单位联系人电话"}},[e._v(" "+e._s(e.form.pickLoadingContactPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"卸货地点"}},[e._v(" "+e._s(e.form.pickUnLoadingPlace)+" ")]),r("a-descriptions-item",{attrs:{label:"卸货单位联系人"}},[e._v(" "+e._s(e.form.pickUnLoadingContact)+" ")]),r("a-descriptions-item",{attrs:{label:"卸货单位联系人电话"}},[e._v(" "+e._s(e.form.pickUnLoadingContactPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"进仓编号"}},[e._v(" "+e._s(e.form.pickInboundNo)+" ")]),r("a-descriptions-item",{attrs:{label:"运输公司"}},[e._v(" "+e._s(e.form.pickCarrier)+" ")]),r("a-descriptions-item",{attrs:{label:"运输公司联系人"}},[e._v(" "+e._s(e.form.pickCarrierContact)+" ")]),r("a-descriptions-item",{attrs:{label:"运输公司联系电话"}},[e._v(" "+e._s(e.form.pickCarrierContactPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"预计提货日期"}},[e._v(" "+e._s(e.form.pickEstimatedTime?e.moment(e.form.pickEstimatedTime).format("YYYY-MM-DD"):"")+" ")]),r("a-descriptions-item",{attrs:{label:"预计到货日期"}},[e._v(" "+e._s(e.form.pickEstimatedDeliveryTime?e.moment(e.form.pickEstimatedDeliveryTime).format("YYYY-MM-DD"):"")+" ")]),r("a-descriptions-item",{attrs:{label:"备注"}},[e._v(" "+e._s(e.form.pickRemark)+" ")]),r("a-descriptions-item",{attrs:{label:"是否提货完成"}},[e._v(" "+e._s(0==e.form.lsPickupComplete?"否":"是")+" ")])],1)],1):e._e(),e.form.lsDeclare?r("a-card",{attrs:{size:"small",title:"报关服务",id:"CustomsDeclarationService"}},[r("a-descriptions",{attrs:{title:"",column:4}},[r("a-descriptions-item",{attrs:{label:"报关类型"}},[e._l(e.customsTypes,(function(t){return[t.value==e.form.declareType?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"是否复核"}},[r("a-checkbox",{attrs:{checked:0!=e.form.declareIsDocReview}})],1),r("a-descriptions-item",{attrs:{label:"是否预录入"}},[r("a-checkbox",{attrs:{checked:0!=e.form.declareIsPreInput}})],1),r("a-descriptions-item",{attrs:{label:"发单状态"}},[e._l(e.issuanceStates,(function(t){return[t.value==e.form.declarePostStatus?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"是否查验"}},[r("a-checkbox",{attrs:{checked:0!=e.form.declareIsCheck}})],1),r("a-descriptions-item",{attrs:{label:"是否放行"}},[r("a-checkbox",{attrs:{checked:0!=e.form.declareIsRelease}})],1),r("a-descriptions-item",{attrs:{label:"是否删单"}},[r("a-checkbox",{attrs:{checked:0!=e.form.declareIsDelete}})],1),r("a-descriptions-item",{attrs:{label:"是否改单"}},[r("a-checkbox",{attrs:{checked:0!=e.form.declareIsEdit}})],1),r("a-descriptions-item",{attrs:{label:"报关抬头"}},[e._v(" "+e._s(e.form.declareTitle)+" ")]),r("a-descriptions-item",{attrs:{label:"报关公司"}},[e._v(" "+e._s(e.form.declareCarrier)+" ")]),r("a-descriptions-item",{attrs:{label:"联系人"}},[e._v(" "+e._s(e.form.declareContact)+" ")]),r("a-descriptions-item",{attrs:{label:"联系电话"}},[e._v(" "+e._s(e.form.declareContactPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"备注"}},[e._v(" "+e._s(e.form.declarePortRemark)+" ")]),r("a-descriptions-item",{attrs:{label:"报关方式"}},[e._l(e.customsWays,(function(t){return[t.value==e.form.declareCustomsType?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"是否报关完成"}},[e._v(" "+e._s(0==e.form.lsDeclareComplete?"否":"是")+" ")])],1)],1):e._e(),e.form.lsClearance?r("a-card",{attrs:{size:"small",title:"清关服务",id:"CustomsClearanceService"}},[r("a-descriptions",{attrs:{title:"",column:4}},[r("a-descriptions-item",{attrs:{label:"清关类型"}},[e._l(e.clearanceTypes,(function(t){return[t.value==e.form.clearanceType?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"单证复核"}},[e._v(" "+e._s(e.form.clearanceDocReview)+" ")]),r("a-descriptions-item",{attrs:{label:"发单状态"}},[e._l(e.issuanceStates,(function(t){return[t.value==e.form.clearanceStatus?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"是否查验"}},[r("a-checkbox",{attrs:{checked:0!=e.form.clearanceIsCheck}})],1),r("a-descriptions-item",{attrs:{label:"是否放行"}},[r("a-checkbox",{attrs:{checked:0!=e.form.clearanceIsRelease}})],1),r("a-descriptions-item",{attrs:{label:"是否删单"}},[r("a-checkbox",{attrs:{checked:0!=e.form.clearanceIsDelete}})],1),r("a-descriptions-item",{attrs:{label:"是否改单"}},[r("a-checkbox",{attrs:{checked:0!=e.form.clearanceIsEdit}})],1),r("a-descriptions-item",{attrs:{label:"报关抬头"}},[e._v(" "+e._s(e.form.clearanceTitle)+" ")]),r("a-descriptions-item",{attrs:{label:"清关公司"}},[e._v(" "+e._s(e.form.clearanceCarrier)+" ")]),r("a-descriptions-item",{attrs:{label:"联系人"}},[e._v(" "+e._s(e.form.clearanceContact)+" ")]),r("a-descriptions-item",{attrs:{label:"联系电话"}},[e._v(" "+e._s(e.form.clearanceContactPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"备注"}},[e._v(" "+e._s(e.form.clearanceRemark)+" ")]),r("a-descriptions-item",{attrs:{label:"是否清关完成"}},[e._v(" "+e._s(0==e.form.lsClearanceComplete?"否":"是")+" ")])],1)],1):e._e(),e.form.lsDelivery?r("a-card",{attrs:{size:"small",title:"派送服务",id:"DeliveryService"}},[r("a-descriptions",{attrs:{title:"",column:4}},[r("a-descriptions-item",{attrs:{label:"派送运输方式"}},[e._l(e.transportations,(function(t){return[t.value==e.form.deliveryTransferType?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))],2),r("a-descriptions-item",{attrs:{label:"派送车型"}},[e._v(" "+e._s(e.form.deliveryTruckType)+" ")]),r("a-descriptions-item",{attrs:{label:"派送车牌号"}},[e._v(" "+e._s(e.form.deliveryTruckNO)+" ")]),r("a-descriptions-item",{attrs:{label:"派送司机姓名"}},[e._v(" "+e._s(e.form.deliveryDriver)+" ")]),r("a-descriptions-item",{attrs:{label:"派送司机电话"}},[e._v(" "+e._s(e.form.deliveryDriverPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"装货地点"}},[e._v(" "+e._s(e.form.deliveryLoadingPlace)+" ")]),r("a-descriptions-item",{attrs:{label:"装货单位联系人"}},[e._v(" "+e._s(e.form.deliveryLoadingContact)+" ")]),r("a-descriptions-item",{attrs:{label:"装货单位联系人电话"}},[e._v(" "+e._s(e.form.deliveryLoadingContactPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"卸货地点"}},[e._v(" "+e._s(e.form.deliveryUnLoadingPlace)+" ")]),r("a-descriptions-item",{attrs:{label:"卸货单位联系人"}},[e._v(" "+e._s(e.form.deliveryUnLoadingContact)+" ")]),r("a-descriptions-item",{attrs:{label:"卸货单位联系人电话"}},[e._v(" "+e._s(e.form.deliveryUnLoadingContactPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"进仓编号"}},[e._v(" "+e._s(e.form.deliveryInboundNo)+" ")]),r("a-descriptions-item",{attrs:{label:"运输公司"}},[e._v(" "+e._s(e.form.deliveryCarrier)+" ")]),r("a-descriptions-item",{attrs:{label:"运输公司联系人"}},[e._v(" "+e._s(e.form.deliveryCarrierContact)+" ")]),r("a-descriptions-item",{attrs:{label:"运输公司联系电话"}},[e._v(" "+e._s(e.form.deliveryCarrierContactPhone)+" ")]),r("a-descriptions-item",{attrs:{label:"预计派送日期"}},[e._v(" "+e._s(e.form.deliveryEstimatedTime?e.moment(e.form.deliveryEstimatedTime).format("YYYY-MM-DD"):"")+" ")]),r("a-descriptions-item",{attrs:{label:"预计到货日期"}},[e._v(" "+e._s(e.form.deliveryEstimatedDeliveryTime?e.moment(e.form.deliveryEstimatedDeliveryTime).format("YYYY-MM-DD"):"")+" ")]),r("a-descriptions-item",{attrs:{label:"备注"}},[e._v(" "+e._s(e.form.deliveryRemark)+" ")]),r("a-descriptions-item",{attrs:{label:"是否派送完成"}},[e._v(" "+e._s(0==e.form.lsDeliveryComplete?"否":"是")+" ")])],1)],1):e._e(),r("a-card",{attrs:{size:"small",title:"随附文件",id:"AttachedFiles"}},[r("vxe-table",{ref:"xTableFile",attrs:{"keep-source":"",data:e.uploadFileList,"show-overflow":"",resizable:"",border:"","highlight-hover-row":""}},[r("vxe-column",{attrs:{field:"fileName",title:"文件名"}}),r("vxe-column",{attrs:{field:"fileType",title:"文件类型"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._l(e.fileTypes,(function(t){return[t.value==a.fileType?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))]}}])}),r("vxe-column",{attrs:{field:"remark",title:"备注"}}),r("vxe-column",{attrs:{width:"60",fixed:"right",title:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("a-space",[r("a-tooltip",{attrs:{placement:"top",title:"下载"}},[r("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:file:filedownload",expression:"`api:admin:file:filedownload`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"download"},on:{click:function(t){return e.downloadFile(a)}}})],1)],1)]}}])})],1)],1),0xeab3c0f4e045==e.menuID||0xebaae1200045==e.menuID||0xebab2eed0045==e.menuID?r("ChargedLine",{attrs:{ID:e.ID,menuID:e.menuID,order:e.form,settlementpeopleList:e.settlementpeopleList,chargeList:e.chargeList,chargeBasiss:e.chargeBasiss,currencyList:e.currencyList,taskTypes:e.taskTypes,ARAPs:e.ARAPs,bindingDoc:3,costMainStatuss:e.costMainStatuss}}):e._e(),r("QuestionsAnswers",{attrs:{ID:e.ID}})],1),r("div",{staticClass:"right"},[r("a-timeline",[e._l(e.milestoneList,(function(t,a){return[0==t.mStatus?r("a-timeline-item",{key:a},[r("i",{class:"iconfont "+t.icon,staticStyle:{"font-size":"16px",color:"#333333"},attrs:{slot:"dot"},slot:"dot"}),r("p",{staticStyle:{"font-size":"12px","margin-bottom":"5px","font-weight":"bold",color:"#333333"}},[e._v(e._s(t.milestoneCode))]),r("p",{staticStyle:{"font-size":"12px","margin-bottom":"5px",color:"#333333"}},[e._v(e._s(t.milestoneName))])]):e._e(),1==t.mStatus?r("a-timeline-item",{key:a},[r("i",{class:"iconfont "+t.icon,staticStyle:{"font-size":"16px",color:"#87d068"},attrs:{slot:"dot"},slot:"dot"}),r("p",{staticStyle:{"font-size":"12px","margin-bottom":"5px","font-weight":"bold",color:"#87d068"}},[e._v(e._s(t.milestoneCode))]),r("p",{staticStyle:{"font-size":"12px","margin-bottom":"5px",color:"#87d068"}},[e._v(e._s(t.milestoneName))]),r("p",{staticStyle:{"font-size":"12px","margin-bottom":"5px",color:"#87d068"}},[e._v(e._s(t.actualDateTime?e.moment(t.actualDateTime).format("YYYY-MM-DD HH:mm"):""))]),r("p",{staticStyle:{"font-size":"12px","margin-bottom":"5px",color:"#87d068"}},[e._v(e._s(t.remark))])]):e._e(),2==t.mStatus?r("a-timeline-item",{key:a},[r("i",{class:"iconfont "+t.icon,staticStyle:{"font-size":"16px",color:"#f50"},attrs:{slot:"dot"},slot:"dot"}),r("p",{staticStyle:{"font-size":"12px","margin-bottom":"5px","font-weight":"bold",color:"#f50"}},[e._v(e._s(t.milestoneCode))]),r("p",{staticStyle:{"font-size":"12px","margin-bottom":"5px",color:"#f50"}},[e._v(e._s(t.milestoneName))]),r("p",{staticStyle:{"font-size":"12px","margin-bottom":"5px",color:"#f50"}},[e._v(e._s(t.actualDateTime?e.moment(t.actualDateTime).format("YYYY-MM-DD HH:mm"):""))]),r("p",{staticStyle:{"font-size":"12px","margin-bottom":"5px",color:"#f50"}},[e._v(e._s(t.remark))])]):e._e()]}))],2)],1)])]),r("a-back-top",[r("a-tooltip",{attrs:{placement:"top",title:"回到顶部"}},[r("a-button",{attrs:{type:"primary",shape:"circle",icon:"rocket"}})],1)],1)],1)}),[],!1,null,"161c92e3",null).exports;t.default=_},d882:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return m})),r.d(t,"e",(function(){return u})),r.d(t,"c",(function(){return f}));var a=r("1da1"),i=(r("96cf"),r("7424")),s=r("b775");function n(e){return o.apply(this,arguments)}function o(){return(o=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.ORDERMILESTONESOLUTIONGETBORDERIDASYNC,s.a.GET,{orderid:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.ORDERMILESTONESOLUTIONUPDATE,s.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.ORDERMILESTONESOLUTIONGETBYORDERIDANDMILESTIONASYNC,s.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.ORDERMILESTONESOLUTIONUPDATEMILESTIONSASYNC,s.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return _.apply(this,arguments)}function _(){return(_=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.e)(i.ORDERMILESTONESOLUTIONGETSEABYORDERIDANDMILESTIONASYNC,s.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},f600:function(e,t,r){"use strict";r("a043")}}]);
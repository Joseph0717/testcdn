(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ff44fa12"],{"0bf8":function(e,t,r){"use strict";r("8853")},"2fc4":function(e,t,r){"use strict";r("4de4");var a={name:"MySearch",props:{fields:{type:Array,default:function(){return[]}}},data:function(){return{filter:{field:"",value:"",operator:"Contains"}}},created:function(){this.filter.field=this.fields[0].value},methods:{change:function(e){this.filter.field=e},onSearch:function(e){this.filter.value=e,e=this.filter,this.$emit("click",e)}}};r=r("2877"),a=Object(r.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-input-search",{attrs:{allowClear:""},on:{search:e.onSearch}},[r("a-select",{staticStyle:{"min-width":"100px"},attrs:{slot:"addonBefore"},on:{change:e.change},slot:"addonBefore",model:{value:e.filter.field,callback:function(t){e.$set(e.filter,"field",t)},expression:"filter.field"}},[e._l(e.fields,(function(t){return["string"==t.type?r("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")]):e._e()]}))],2),r("a-button",{attrs:{slot:"enterButton",icon:"search"},slot:"enterButton"})],1)],1)}),[],!1,null,null,null);t.a=a.exports},"4c2d":function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return p}));t=r("96cf");var a=r("1da1"),i=r("7424"),n=r("b775");function o(e,t,r){return s.apply(this,arguments)}function s(){return(s=Object(a.a)(regeneratorRuntime.mark((function e(t,r,a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n.e)(i.SEQUENCERULEGETPAGE,n.a.POST,{currentPage:t,pageSize:r,dynamicFilter:a}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n.e)(i.SEQUENCERULEADD,n.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n.e)(i.SEQUENCERULEUPDATE,n.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n.e)(i.SEQUENCERULEBATCHSOFTDELETE,n.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n.e)(i.SEQUENCERULEGETAUTORULECODE,n.a.GET,{autorulecode:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},8853:function(e,t,r){},f68b:function(e,t,r){"use strict";r.r(t),r("99af"),r("d81d"),r("96cf");var a=r("1da1"),i=r("7424"),n=r("b775");function o(e,t,r){return s.apply(this,arguments)}function s(){return(s=Object(a.a)(regeneratorRuntime.mark((function e(t,r,a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n.e)(i.REQUESTQUOTATIONGETPAGE,n.a.POST,{currentPage:t,pageSize:r,dynamicFilter:a}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n.e)(i.REQUESTQUOTATIONADD,n.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n.e)(i.REQUESTQUOTATIONUPDATE,n.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n.e)(i.REQUESTQUOTATIONBATCHSOFTDELETE,n.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n.e)(i.REQUESTQUOTATIONGETHEDERANDDETAILASYNC,n.a.GET,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return(v=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n.e)(i.CARGOSIZEBATCHSOFTDELETE,n.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=r("a701"),k=r("4c2d"),x=r("2fc4"),y=r("c32d"),w=r.n(y),S=(y=r("2ef0"),r.n(y));x={name:"RequestQuotation",i18n:r("9225"),components:{MySearch:x.a},computed:{fields:function(){return[{value:"requestQuotationNo",label:"询价单号",type:"string"}]}},data:function(){return{minHeight:window.innerHeight-219,orderStatuss:[],requestQuotationList:[],cargoSizeList:[],loading:!1,pagination:{currentPage:1,pageSize:100,totalResult:0},dynamicFilter:{},visible:!1,title:"",type:"",confirmLoading:!1,spinning:!1,disabled:!1,form:{},rules:{orderStatus:[{required:!0,message:"请选择订单状态",trigger:"change"}],requestQuotationNo:[{required:!0,message:"请输入询价单号",trigger:"change"}],destination:[{required:!0,message:"请输入目的地",trigger:"change"}],deliveryDate:[{required:!0,message:"请选择交货日期",trigger:"change"}],deliveryPlace:[{required:!0,message:"请输入交货地点",trigger:"change"}],partNo:[{required:!0,message:"请输入品名",trigger:"change"}]},validRules:{combinationSize:[{required:!0,message:"请输入组合尺寸"},{pattern:/^\d+(\.\d+)*\*\d+(\.\d+)*\*\d+(\.\d+)?$/,message:"格式不正确"}]}}},created:function(){this.getDictionary(),this.getRequestQuotationList()},methods:{moment:w.a,getDictionary:function(){var e=this;Object(b.c)("OrderStatus").then((function(t){1===t.data.code&&(e.orderStatuss=t.data.data)}))},getRequestQuotationList:function(){var e=this;this.loading=!0,o(this.pagination.currentPage,this.pagination.pageSize,this.dynamicFilter).then((function(t){1===t.data.code&&(e.requestQuotationList=t.data.data.list,e.pagination.totalResult=t.data.data.total,e.loading=!1)}))},handlePageChange:function(e){var t=e.currentPage;e=e.pageSize;this.pagination.currentPage=t,this.pagination.pageSize=e,this.getRequestQuotationList()},onSearch:function(e){this.dynamicFilter=e,this.pagination.currentPage=1,this.getRequestQuotationList()},dateChange:function(e,t){this.form.deliveryDate=this.form.deliveryDate?w()(new Date(t),"YYYY-MM-DD"):""},dateChange1:function(e,t){this.form.inquirerDate=this.form.inquirerDate?w()(new Date(t),"YYYY-MM-DD"):""},insert:function(){var e=this;this.title="新增",this.type="add",this.visible=!0,this.cargoSizeList=[],this.form={status:0,orderStatus:"1",requestQuotationNo:"",destination:"",deliveryDate:"",deliveryPlace:"",partNo:"",isBattery:0,isDangerous:0,isChemicals:0,eaQty:0,weight:0,volume:0,specialRequirements:"",inquirer:"",inquirerDate:w()(new Date,"YYYY-MM-DD"),isDeliveryService:0,isCustomsService:0,isGroundService:0,isForeignService:0,remark:"",cargoSizeDetail:[]},Object(k.c)("RequestQuotationRule").then((function(t){1===t.data.code&&(e.form.requestQuotationNo=t.data.data.rtRuleCode)}))},insertDetail:function(){this.$refs.xTableDetail.insert({lineID:0,dataRowState:0})},edit:function(e){var t=this;this.title="编辑",this.type="edit",this.visible=!0,this.spinning=!0,this.disabled=!0,this.cargoSizeList=[],p(e.id).then((function(e){1===e.data.code&&(t.form=e.data.data,t.form.deliveryDate=t.form.deliveryDate?w()(new Date(t.form.deliveryDate),"YYYY-MM-DD"):"",t.form.inquirerDate=t.form.inquirerDate?w()(new Date(t.form.inquirerDate),"YYYY-MM-DD"):w()(new Date,"YYYY-MM-DD"),t.cargoSizeList=t.form.airRouteDetail,t.spinning=!1,t.disabled=!1)}))},handleOk:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var r,a,i,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$refs.xTableDetail,a=r.getRecordset(),i=a.insertRecords,a.removeRecords,n=a.updateRecords,t.next=4,r.validate(!0).catch((function(e){return e}));case 4:o=t.sent,e.$refs.form.validate((function(t){t&&!o&&(e.confirmLoading=!0,"add"==e.type?(e.form.cargoSizeDetail=i,c(e.form).then((function(t){1===t.data.code?(e.visible=!1,e.confirmLoading=!1,e.getRequestQuotationList()):(e.$message.error(t.data.msg),e.confirmLoading=!1)}))):(0<n.length&&n.map((function(e){e.lineID=e.id,e.dataRowState=1})),e.form.cargoSizeDetail=S.a.concat(i,n),l(e.form).then((function(t){1===t.data.code?(e.visible=!1,e.confirmLoading=!1,e.getRequestQuotationList()):(e.$message.error(t.data.msg),e.confirmLoading=!1)}))))}));case 6:case"end":return t.stop()}}),t)})))()},cancel:function(){this.visible=!1},batchDelete:function(){var e=this,t=this.$refs.xTable.getCheckboxRecords();if(0==t.length)return!1;f(t.map((function(e){return e.id}))).then((function(t){1===t.data.code&&e.getRequestQuotationList()}))},batchDeleteDetail:function(){var e=this,t=this.$refs.xTableDetail.getCheckboxRecords();if(0==t.length)return!1;g(t.map((function(e){return e.id}))).then((function(t){1===t.data.code&&e.$refs.xTableDetail.removeCheckboxRow()}))}}},r("0bf8"),r=r("2877"),x=Object(r.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"RequestQuotation"},[r("vxe-toolbar",{attrs:{custom:"",print:""},scopedSlots:e._u([{key:"tools",fn:function(){return[r("a-space",[r("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:requestquotation:add",expression:"`api:admin:requestquotation:add`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"plus-circle"},on:{click:e.insert}},[e._v(e._s(e.$t("37")))]),!e.loading&&0<e.$refs.xTable.getCheckboxRecords().length?r("a-popconfirm",{attrs:{title:e.$t("47")},on:{confirm:e.batchDelete}},[r("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:requestquotation:batchsoftdelete",expression:"`api:admin:requestquotation:batchsoftdelete`",arg:"permission"}],attrs:{type:"danger",size:"small",icon:"delete"}},[e._v("删除")])],1):e._e(),r("my-search",{attrs:{fields:e.fields},on:{click:e.onSearch}})],1)]},proxy:!0}])}),r("vxe-table",{ref:"xTable",attrs:{"keep-source":"",data:e.requestQuotationList,loading:e.loading,"print-config":{},"show-overflow":"",resizable:"",border:"","highlight-hover-row":"",height:e.minHeight}},[r("vxe-column",{attrs:{type:"checkbox",width:"50"},scopedSlots:e._u([{key:"header",fn:function(t){var a=t.checked;t=t.indeterminate;return[r("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTable.toggleAllCheckboxRow()}}},[r("span",t?[r("a-checkbox",{attrs:{indeterminate:!0}})]:a?[r("a-checkbox",{attrs:{checked:!0}})]:[r("a-checkbox")],1)])]}},{key:"checkbox",fn:function(t){var a=t.row,i=t.checked;t=t.indeterminate;return[r("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTable.toggleCheckboxRow(a)}}},[r("span",t?[r("a-checkbox",{attrs:{indeterminate:!0}})]:i?[r("a-checkbox",{attrs:{checked:!0}})]:[r("a-checkbox")],1)])]}}])}),r("vxe-column",{attrs:{width:"100",field:"orderStatus",title:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._l(e.orderStatuss,(function(t){return[a.orderStatus==t.value?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))]}}])}),r("vxe-column",{attrs:{width:"100",field:"requestQuotationNo",title:"询价单号"}}),r("vxe-column",{attrs:{width:"100",field:"destination",title:"目的地"}}),r("vxe-column",{attrs:{width:"100",field:"deliveryDate",title:"交货日期"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(t.deliveryDate?e.moment(t.deliveryDate).format("YYYY-MM-DD"):""))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"deliveryPlace",title:"交货地点"}}),r("vxe-column",{attrs:{width:"100",field:"partNo",title:"品名"}}),r("vxe-column",{attrs:{width:"100",field:"isBattery",title:"是否电池"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(1==t.isBattery?"是":"否"))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"isDangerous",title:"是否危险品"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(1==t.isDangerous?"是":"否"))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"isChemicals",title:"是否化学品"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(1==t.isChemicals?"是":"否"))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"eaQty",title:"件数"}}),r("vxe-column",{attrs:{width:"100",field:"weight",title:"重量"}}),r("vxe-column",{attrs:{width:"100",field:"volume",title:"体积"}}),r("vxe-column",{attrs:{width:"100",field:"specialRequirements",title:"特殊要求"}}),r("vxe-column",{attrs:{width:"100",field:"inquirer",title:"询价人"}}),r("vxe-column",{attrs:{width:"100",field:"inquirerDate",title:"询价日期"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(t.inquirerDate?e.moment(t.inquirerDate).format("YYYY-MM-DD"):""))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"isDeliveryService",title:"国内提货服务"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(1==t.isDeliveryService?"是":"否"))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"isCustomsService",title:"国内报关服务"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(1==t.isCustomsService?"是":"否"))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"isGroundService",title:"国内地面服务"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(1==t.isGroundService?"是":"否"))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"isForeignService",title:"国外段服务"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(1==t.isForeignService?"是":"否"))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"remark",title:"备注"}}),r("vxe-column",{attrs:{width:"60",fixed:"right",title:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("a-space",[r("a-tooltip",{attrs:{placement:"top",title:"编辑"}},[r("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:requestquotation:update",expression:"`api:admin:requestquotation:update`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"edit"},on:{click:function(t){return e.edit(a)}}})],1)],1)]}}])})],1),r("vxe-pager",{attrs:{"current-page":e.pagination.currentPage,"page-size":e.pagination.pageSize,total:e.pagination.totalResult,"page-sizes":[20,50,100,200],layouts:["PrevPage","JumpNumber","NextPage","Sizes","Total"]},on:{"page-change":e.handlePageChange}}),r("a-modal",{attrs:{width:900,visible:e.visible,title:e.title,"confirm-loading":e.confirmLoading,maskClosable:!1,destroyOnClose:!0,"ok-button-props":{props:{disabled:e.disabled}},centered:""},on:{cancel:e.cancel,ok:e.handleOk}},[r("template",{slot:"closeIcon"},[r("a-button",{attrs:{type:"danger",size:"small",shape:"circle",icon:"close-circle"}})],1),r("a-spin",{attrs:{spinning:e.spinning}},[r("a-form-model",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"订单状态",prop:"orderStatus"}},[r("a-select",{attrs:{disabled:""},model:{value:e.form.orderStatus,callback:function(t){e.$set(e.form,"orderStatus",t)},expression:"form.orderStatus"}},e._l(e.orderStatuss,(function(t,a){return r("a-select-option",{key:a,attrs:{value:t.value.toString(),disabled:!t.enabled}},[e._v(" "+e._s(t.name)+" ")])})),1)],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"询价单号",prop:"requestQuotationNo"}},[r("a-input",{attrs:{"max-length":20,disabled:""},model:{value:e.form.requestQuotationNo,callback:function(t){e.$set(e.form,"requestQuotationNo",t)},expression:"form.requestQuotationNo"}})],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"目的地",prop:"destination"}},[r("a-input",{attrs:{"max-length":50},model:{value:e.form.destination,callback:function(t){e.$set(e.form,"destination",t)},expression:"form.destination"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"交货日期",prop:"deliveryDate"}},[r("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"},on:{change:e.dateChange},model:{value:e.form.deliveryDate,callback:function(t){e.$set(e.form,"deliveryDate",t)},expression:"form.deliveryDate"}})],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"交货地点",prop:"deliveryPlace"}},[r("a-input",{attrs:{"max-length":50},model:{value:e.form.deliveryPlace,callback:function(t){e.$set(e.form,"deliveryPlace",t)},expression:"form.deliveryPlace"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"品名",prop:"partNo"}},[r("a-input",{attrs:{"max-length":50},model:{value:e.form.partNo,callback:function(t){e.$set(e.form,"partNo",t)},expression:"form.partNo"}})],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"货物类型"}},[r("a-checkbox",{attrs:{checked:0!=e.form.isBattery},on:{click:function(t){e.form.isBattery=0==e.form.isBattery?1:0}}},[e._v("电池")]),r("a-checkbox",{attrs:{checked:0!=e.form.isDangerous},on:{click:function(t){e.form.isDangerous=0==e.form.isDangerous?1:0}}},[e._v("危险品")]),r("a-checkbox",{attrs:{checked:0!=e.form.isChemicals},on:{click:function(t){e.form.isChemicals=0==e.form.isChemicals?1:0}}},[e._v("化学品")])],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"件数",prop:"eaQty"}},[r("a-input-number",{staticStyle:{width:"100%"},model:{value:e.form.eaQty,callback:function(t){e.$set(e.form,"eaQty",t)},expression:"form.eaQty"}})],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"重量",prop:"weight"}},[r("a-input-number",{staticStyle:{width:"100%"},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"体积",prop:"volume"}},[r("a-input-number",{staticStyle:{width:"100%"},model:{value:e.form.volume,callback:function(t){e.$set(e.form,"volume",t)},expression:"form.volume"}})],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"询价人",prop:"inquirer"}},[r("a-input",{attrs:{"max-length":30},model:{value:e.form.inquirer,callback:function(t){e.$set(e.form,"inquirer",t)},expression:"form.inquirer"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"询价日期",prop:"inquirerDate"}},[r("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"},on:{change:e.dateChange1},model:{value:e.form.inquirerDate,callback:function(t){e.$set(e.form,"inquirerDate",t)},expression:"form.inquirerDate"}})],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"国内服务"}},[r("a-checkbox",{attrs:{checked:0!=e.form.isDeliveryService},on:{click:function(t){e.form.isDeliveryService=0==e.form.isDeliveryService?1:0}}},[e._v("提货")]),r("a-checkbox",{attrs:{checked:0!=e.form.isCustomsService},on:{click:function(t){e.form.isCustomsService=0==e.form.isCustomsService?1:0}}},[e._v("报关")]),r("a-checkbox",{attrs:{checked:0!=e.form.isGroundService},on:{click:function(t){e.form.isGroundService=0==e.form.isGroundService?1:0}}},[e._v("地面")])],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"国外服务"}},[r("a-checkbox",{attrs:{checked:0!=e.form.isForeignService},on:{click:function(t){e.form.isForeignService=0==e.form.isForeignService?1:0}}})],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"特殊要求",prop:"specialRequirements"}},[r("a-textarea",{attrs:{"max-length":200,"auto-size":{minRows:2,maxRows:6}},model:{value:e.form.specialRequirements,callback:function(t){e.$set(e.form,"specialRequirements",t)},expression:"form.specialRequirements"}})],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"备注",prop:"remark"}},[r("a-input",{attrs:{"max-length":200},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),r("div",{staticStyle:{display:"flex","justify-content":"flex-end","margin-bottom":"10px",width:"100%"}},[r("a-space",[r("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:cargosize:add",expression:"`api:admin:cargosize:add`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"plus-circle"},on:{click:e.insertDetail}},[e._v(e._s(e.$t("37")))]),"edit"==e.type?r("a-popconfirm",{attrs:{title:e.$t("47")},on:{confirm:e.batchDeleteDetail}},[r("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:cargosize:batchsoftdelete",expression:"`api:admin:cargosize:batchsoftdelete`",arg:"permission"}],attrs:{type:"danger",size:"small",icon:"delete"}},[e._v("删除")])],1):e._e()],1)],1),r("vxe-table",{ref:"xTableDetail",attrs:{"keep-source":"",data:e.cargoSizeList,"show-overflow":"",resizable:"",border:"","highlight-hover-row":"","edit-config":{trigger:"click",mode:"row",showStatus:!0},"edit-rules":e.validRules}},[r("vxe-column",{attrs:{type:"checkbox",width:"50"},scopedSlots:e._u([{key:"header",fn:function(t){var a=t.checked;t=t.indeterminate;return[r("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTableDetail.toggleAllCheckboxRow()}}},[r("span",t?[r("a-checkbox",{attrs:{indeterminate:!0}})]:a?[r("a-checkbox",{attrs:{checked:!0}})]:[r("a-checkbox")],1)])]}},{key:"checkbox",fn:function(t){var a=t.row,i=t.checked;t=t.indeterminate;return[r("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTableDetail.toggleCheckboxRow(a)}}},[r("span",t?[r("a-checkbox",{attrs:{indeterminate:!0}})]:i?[r("a-checkbox",{attrs:{checked:!0}})]:[r("a-checkbox")],1)])]}}])}),r("vxe-column",{attrs:{field:"combinationSize",title:"组合尺寸","edit-render":{name:"$input",defaultValue:"",props:{maxlength:20}}}}),r("vxe-column",{attrs:{width:"60",fixed:"right",title:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("a-space",[0==a.lineID?r("a-popconfirm",{attrs:{title:e.$t("47")},on:{confirm:function(t){return e.$refs.xTableDetail.remove(a)}}},[r("a-tooltip",{attrs:{placement:"top",title:"删除"}},[r("a-button",{attrs:{type:"danger",size:"small",icon:"delete"}})],1)],1):e._e()],1)]}}])})],1)],1)],2)],1)}),[],!1,null,"675a2d02",null).exports;t.default=x}}]);
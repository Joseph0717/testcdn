(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-025da67e"],{"0e44":function(e,t,r){"use strict";r("f907")},3786:function(e,t,r){"use strict";r.r(t),r("4de4"),r("d3b7"),r("25f0"),r("d81d");var n=r("fb04"),a=r("a701"),i=r("cdc0"),o=r("9056"),c=r("fddf"),u=r("91f0"),s=r("c32d"),l=r.n(s),p=(s={name:"SelectChargeLine",props:{billingID:{type:String,default:"0"},billingType:{type:String,default:"0"},chargeList:{type:Array,default:function(){return[]}},ARAPs:{type:Array,default:function(){return[]}},taskTypes:{type:Array,default:function(){return[]}},settlementpeopleList:{type:Array,default:function(){return[]}},businessType:{type:String,default:""},partnerCode:{type:String,default:""}},data:function(){return{chargedLineList:[],loading:!1,visible:!1,confirmLoading:!1,disabled:!1}},created:function(){},methods:{moment:l.a,getARList:function(){var e=this,t=(this.loading=!0,this.disabled=!0,{settlementObject:this.partnerCode,bussinessType:this.businessType});Object(u.d)(t).then((function(t){1===t.data.code?(e.chargedLineList=t.data.data,e.loading=!1,e.disabled=!1):(e.loading=!1,e.$message.error(t.data.msg))}))},getAPList:function(){var e=this,t=(this.loading=!0,this.disabled=!0,{settlementObject:this.partnerCode,bussinessType:this.businessType});Object(u.c)(t).then((function(t){1===t.data.code?(e.chargedLineList=t.data.data,e.loading=!1,e.disabled=!1):(e.loading=!1,e.$message.error(t.data.msg))}))},open:function(){""!=this.partnerCode?""!=this.businessType?(this.chargedLineList=[],this.visible=!0,1==this.billingType&&this.getARList(),2==this.billingType&&this.getAPList()):this.$message.error("请选择业务类型!"):this.$message.error("请选择结算对象!")},handleOk:function(){var e=this,t=this.$refs.xTable.getCheckboxRecords().map((function(e){return e.id}));0!=t.length?(this.confirmLoading=!0,t={billingID:this.billingID,billingType:this.billingType,chargeLineIds:t},Object(n.b)(t).then((function(t){1===t.data.code?(e.confirmLoading=!1,e.visible=!1,e.$parent.$parent.getBilling()):(e.confirmLoading=!1,e.$message.error(t.data.msg))})).catch((function(t){e.confirmLoading=!1,e.$message.error("系统内部错误!")}))):this.$message.error("请选择费用!")}}},r("2877"));s={name:"EditBilling",components:{SelectChargeLine:Object(p.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"SelectChargeLine"},["0"!==e.billingID&&"1"==e.billingType?r("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:chargedline:getchargelinebyarasync",expression:"`api:admin:chargedline:getchargelinebyarasync`",arg:"permission"}],attrs:{type:"primary"},on:{click:e.open}},[e._v("选择费用")]):e._e(),"0"!==e.billingID&&"2"==e.billingType?r("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:chargedline:getchargelinebyapasync",expression:"`api:admin:chargedline:getchargelinebyapasync`",arg:"permission"}],attrs:{type:"primary"},on:{click:e.open}},[e._v("选择费用")]):e._e(),r("a-modal",{attrs:{width:900,visible:e.visible,title:"选择费用","confirm-loading":e.confirmLoading,maskClosable:!1,destroyOnClose:!0,"ok-button-props":{props:{disabled:e.disabled}},centered:""},on:{cancel:function(t){e.visible=!1},ok:e.handleOk}},[r("template",{slot:"closeIcon"},[r("a-button",{attrs:{type:"danger",size:"small",shape:"circle",icon:"close-circle"}})],1),r("vxe-table",{ref:"xTable",attrs:{"keep-source":"",data:e.chargedLineList,loading:e.loading,"show-overflow":"",resizable:"",border:"","highlight-hover-row":"",height:600}},[r("vxe-column",{attrs:{type:"checkbox",width:"50",fixed:"left"},scopedSlots:e._u([{key:"header",fn:function(t){var n=t.checked;t=t.indeterminate;return[r("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTable.toggleAllCheckboxRow()}}},[r("span",t?[r("a-checkbox",{attrs:{indeterminate:!0}})]:n?[r("a-checkbox",{attrs:{checked:!0}})]:[r("a-checkbox")],1)])]}},{key:"checkbox",fn:function(t){var n=t.row,a=t.checked;t=t.indeterminate;return[r("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTable.toggleCheckboxRow(n)}}},[r("span",t?[r("a-checkbox",{attrs:{indeterminate:!0}})]:a?[r("a-checkbox",{attrs:{checked:!0}})]:[r("a-checkbox")],1)])]}}])}),r("vxe-column",{attrs:{width:"100",field:"taskType",title:"服务类型"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._l(e.taskTypes,(function(t){return[t.code==n.taskType?r("span",{key:t.code},[e._v(e._s(t.name))]):e._e()]}))]}}])}),r("vxe-column",{attrs:{width:"100",field:"settlementObject",title:"结算对象"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._l(e.settlementpeopleList,(function(t){return[t.corporationCode==n.settlementObject?r("span",{key:t.corporationCode},[e._v(e._s(t.corporationName))]):e._e()]}))]}}])}),r("vxe-column",{attrs:{width:"100",field:"arap",title:"ARAP"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._l(e.ARAPs,(function(t){return[t.value==n.arap?r("span",{key:t.value},[e._v(e._s(t.name))]):e._e()]}))]}}])}),r("vxe-column",{attrs:{width:"100",field:"chargeCode",title:"费用代码"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._l(e.chargeList,(function(t){return[t.chargeCode==n.chargeCode?r("span",{key:t.chargeCode},[e._v(e._s(t.chargeCode)+" - "+e._s(t.chargeCNName))]):e._e()]}))]}}])}),r("vxe-column",{attrs:{width:"100",field:"chargeQtyUnit",title:"计费单位"}}),r("vxe-column",{attrs:{width:"100",field:"chargeOrigQty",title:"原始数量"}}),r("vxe-column",{attrs:{width:"100",field:"chargePrice",title:"单价"}}),r("vxe-column",{attrs:{width:"100",field:"chargeAmount",title:"金额"}}),r("vxe-column",{attrs:{width:"100",field:"chargeCurrency",title:"币值"}}),r("vxe-column",{attrs:{width:"100",field:"vatRate",title:"税金汇率"}}),r("vxe-column",{attrs:{width:"100",field:"vatAmount",title:"税金"}}),r("vxe-column",{attrs:{width:"100",field:"exchangeRateDate",title:"汇率日期"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[e._v(" "+e._s(t.exchangeRateDate?e.moment(t.exchangeRateDate).format("YYYY-MM-DD"):"")+" ")]}}])}),r("vxe-column",{attrs:{width:"100",field:"isAP",title:"是否代付"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(0==t.isAP?"否":"是"))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"isAR",title:"是否代收"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(0==t.isAR?"否":"是"))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"remark",title:"备注"}}),r("vxe-column",{attrs:{width:"100",field:"additionalRemark",title:"附加说明"}})],1)],2)],1)}),[],!1,null,null,null).exports},data:function(){return{ID:this.$route.query.id,TYPE:this.$route.query.type,minHeight:window.innerHeight-219-273,chargedLineList:[],settlementpeopleList:[],ARAPs:[],taskTypes:[],chargeList:[],businessTypes:[],rateSources:[],rateRelevances:[],currencyList:[],form:{billingNO:"",billingMonth:"",billingDate:"",projectCode:"",billingType:"",partnerCode:"",partnerName:"",businessType:"",status:0,busOwner:"",settlOwner:"",billingCurrency:"",billingAmount:0,paidCurrency:"",paidAmount:0,invCurrency:"",invAmount:0,invNO:"",taxRate:0,taxAmount:0,orgId:localStorage.getItem("currentOrg"),remark:"",chargeLineIds:[],rateSource:"",rateRelevance:""},rules:{billingNO:[{required:!0,message:"请输入账单号",trigger:"change"}],billingMonth:[{required:!0,message:"请选择账单月",trigger:"change"}],billingDate:[{required:!0,message:"请选择账单日期",trigger:"change"}],billingType:[{required:!0,message:"请选择账单类型",trigger:"change"}],partnerCode:[{required:!0,message:"请选择结算对象",trigger:"change"}],businessType:[{required:!0,message:"请选择业务类型",trigger:"change"}],rateSource:[{required:!0,message:"请选择汇率来源",trigger:"change"}],rateRelevance:[{required:!0,message:"请选择汇率关联",trigger:"change"}]},loading:!1,disabled:!1}},created:function(){"0"!==this.ID&&"2"==this.TYPE&&this.getBilling(),this.getDictionary()},methods:{moment:l.a,getDictionary:function(){var e=this;Object(o.c)().then((function(t){1===t.data.code&&(e.chargeList=t.data.data)})),Object(c.c)().then((function(t){1===t.data.code&&(e.currencyList=t.data.data)})),Object(i.f)(["Settlementpeople"]).then((function(t){1===t.data.code&&(t=t.data.data,e.settlementpeopleList=t.filter((function(e){return"Settlementpeople"===e.corporationtype}))[0].data)})),Object(a.d)(["ARAP","TaskType","BusinessType","RateSource","RateRelevance"]).then((function(t){1===t.data.code&&(t=t.data.data,e.ARAPs=t.filter((function(e){return"ARAP"===e.code}))[0].data,e.taskTypes=t.filter((function(e){return"TaskType"===e.code}))[0].data,e.businessTypes=t.filter((function(e){return"BusinessType"===e.code}))[0].data,e.rateSources=t.filter((function(e){return"RateSource"===e.code}))[0].data,e.rateRelevances=t.filter((function(e){return"RateRelevance"===e.code}))[0].data)}))},getBilling:function(){var e=this;this.disabled=!0,Object(n.d)(this.ID).then((function(t){1===t.data.code&&(e.form=t.data.data,e.form.billingMonth=e.form.billingMonth?l()(new Date(e.form.billingMonth),"YYYY-MM"):"",e.form.billingDate=e.form.billingDate?l()(new Date(e.form.billingDate),"YYYY-MM-DD"):"",e.chargedLineList=e.form.chargelinelist||[],e.disabled=!1)}))},save:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.loading=!0,"0"==e.ID?Object(n.a)(e.form).then((function(t){1===t.data.code?(e.ID=t.data.data.toString(),e.loading=!1,e.$message.success("保存成功!"),e.getBilling()):(e.loading=!1,e.$message.error(t.data.msg))})):Object(n.g)(e.form).then((function(t){1===t.data.code?(e.loading=!1,e.$message.success("保存成功!"),e.getBilling()):(e.loading=!1,e.$message.error(t.data.msg))})))}))},removeChargeLine:function(){var e=this,t=this.$refs.xTable.getCheckboxRecords().map((function(e){return e.id}));0!=t.length?(t={billingID:this.ID,billingType:this.form.billingType,chargeLineIds:t},Object(n.c)(t).then((function(t){1===t.data.code?e.getBilling():e.$message.error(t.data.msg)}))):this.$message.error("请选择费用!")}}},r("0e44"),r=Object(p.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"EditBilling"},[r("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end","margin-bottom":"10px"}},[r("a-space",[r("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:billing:add",expression:"`api:admin:billing:add`",arg:"permission"}],attrs:{type:"primary",loading:e.loading,disabled:e.disabled},on:{click:e.save}},[e._v("保存")])],1)],1),r("a-form-model",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"账单号",prop:"billingNO"}},[r("a-input",{attrs:{"max-length":20},model:{value:e.form.billingNO,callback:function(t){e.$set(e.form,"billingNO",t)},expression:"form.billingNO"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"账单月",prop:"billingMonth"}},[r("a-month-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM"},model:{value:e.form.billingMonth,callback:function(t){e.$set(e.form,"billingMonth",t)},expression:"form.billingMonth"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"账单日期",prop:"billingDate"}},[r("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"},model:{value:e.form.billingDate,callback:function(t){e.$set(e.form,"billingDate",t)},expression:"form.billingDate"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"账单类型",prop:"billingType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:""},model:{value:e.form.billingType,callback:function(t){e.$set(e.form,"billingType",t)},expression:"form.billingType"}},e._l(e.ARAPs,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"结算对象",prop:"partnerCode"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:""},model:{value:e.form.partnerCode,callback:function(t){e.$set(e.form,"partnerCode",t)},expression:"form.partnerCode"}},e._l(e.settlementpeopleList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.corporationName,value:e.corporationCode}})})),1)],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"业务类型",prop:"businessType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:""},model:{value:e.form.businessType,callback:function(t){e.$set(e.form,"businessType",t)},expression:"form.businessType"}},e._l(e.businessTypes,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.code}})})),1)],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"汇率来源",prop:"rateSource"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:""},model:{value:e.form.rateSource,callback:function(t){e.$set(e.form,"rateSource",t)},expression:"form.rateSource"}},e._l(e.rateSources,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"汇率关联",prop:"rateRelevance"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:""},model:{value:e.form.rateRelevance,callback:function(t){e.$set(e.form,"rateRelevance",t)},expression:"form.rateRelevance"}},e._l(e.rateRelevances,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"项目代码",prop:"projectCode"}},[r("a-input",{attrs:{"max-length":20},model:{value:e.form.projectCode,callback:function(t){e.$set(e.form,"projectCode",t)},expression:"form.projectCode"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"业务负责人",prop:"busOwner"}},[r("a-input",{attrs:{"max-length":20},model:{value:e.form.busOwner,callback:function(t){e.$set(e.form,"busOwner",t)},expression:"form.busOwner"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"付款负责人",prop:"settlOwner"}},[r("a-input",{attrs:{"max-length":20},model:{value:e.form.settlOwner,callback:function(t){e.$set(e.form,"settlOwner",t)},expression:"form.settlOwner"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"账单金额",prop:"billingAmount"}},[r("a-input-number",{staticStyle:{width:"100%"},model:{value:e.form.billingAmount,callback:function(t){e.$set(e.form,"billingAmount",t)},expression:"form.billingAmount"}})],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"账单币值",prop:"billingCurrency"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:""},model:{value:e.form.billingCurrency,callback:function(t){e.$set(e.form,"billingCurrency",t)},expression:"form.billingCurrency"}},e._l(e.currencyList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.currencyCode,value:e.currencyCode}})})),1)],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"付款金额",prop:"paidAmount"}},[r("a-input-number",{staticStyle:{width:"100%"},model:{value:e.form.paidAmount,callback:function(t){e.$set(e.form,"paidAmount",t)},expression:"form.paidAmount"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"付款币值",prop:"paidCurrency"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:""},model:{value:e.form.paidCurrency,callback:function(t){e.$set(e.form,"paidCurrency",t)},expression:"form.paidCurrency"}},e._l(e.currencyList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.currencyCode,value:e.currencyCode}})})),1)],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"发票金额",prop:"invAmount"}},[r("a-input-number",{staticStyle:{width:"100%"},model:{value:e.form.invAmount,callback:function(t){e.$set(e.form,"invAmount",t)},expression:"form.invAmount"}})],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"发票币值",prop:"invCurrency"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:""},model:{value:e.form.invCurrency,callback:function(t){e.$set(e.form,"invCurrency",t)},expression:"form.invCurrency"}},e._l(e.currencyList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.currencyCode,value:e.currencyCode}})})),1)],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"发票号",prop:"invNO"}},[r("a-input",{attrs:{"max-length":20},model:{value:e.form.invNO,callback:function(t){e.$set(e.form,"invNO",t)},expression:"form.invNO"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"税率",prop:"taxRate"}},[r("a-input-number",{staticStyle:{width:"100%"},model:{value:e.form.taxRate,callback:function(t){e.$set(e.form,"taxRate",t)},expression:"form.taxRate"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{label:"税金",prop:"taxAmount"}},[r("a-input-number",{staticStyle:{width:"100%"},model:{value:e.form.taxAmount,callback:function(t){e.$set(e.form,"taxAmount",t)},expression:"form.taxAmount"}})],1)],1)],1),r("a-row",{attrs:{gutter:[0,0]}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{attrs:{label:"描述",prop:"remark"}},[r("a-input",{attrs:{"max-length":200},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),r("a-card",{attrs:{size:"small",title:"费用"}},[r("a-space",{attrs:{slot:"extra"},slot:"extra"},[r("a-popconfirm",{attrs:{title:"确认删除吗?"},on:{confirm:e.removeChargeLine}},[!e.disabled&&0<e.chargedLineList.length?r("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:billing:delchargeline",expression:"`api:admin:billing:delchargeline`",arg:"permission"}],attrs:{type:"danger"}},[e._v("删除费用")]):e._e()],1),r("SelectChargeLine",{ref:"SelectChargeLine",attrs:{billingID:e.ID,billingType:e.form.billingType.toString(),ARAPs:e.ARAPs,taskTypes:e.taskTypes,chargeList:e.chargeList,settlementpeopleList:e.settlementpeopleList,businessType:e.form.businessType,partnerCode:e.form.partnerCode}})],1),r("vxe-table",{ref:"xTable",attrs:{"keep-source":"",data:e.chargedLineList,loading:e.disabled,"show-overflow":"",resizable:"",border:"","highlight-hover-row":"",height:e.minHeight}},[r("vxe-column",{attrs:{type:"checkbox",width:"50",fixed:"left"},scopedSlots:e._u([{key:"header",fn:function(t){var n=t.checked;t=t.indeterminate;return[r("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTable.toggleAllCheckboxRow()}}},[r("span",t?[r("a-checkbox",{attrs:{indeterminate:!0}})]:n?[r("a-checkbox",{attrs:{checked:!0}})]:[r("a-checkbox")],1)])]}},{key:"checkbox",fn:function(t){var n=t.row,a=t.checked;t=t.indeterminate;return[r("span",{staticClass:"custom-checkbox",on:{click:function(t){return t.stopPropagation(),e.$refs.xTable.toggleCheckboxRow(n)}}},[r("span",t?[r("a-checkbox",{attrs:{indeterminate:!0}})]:a?[r("a-checkbox",{attrs:{checked:!0}})]:[r("a-checkbox")],1)])]}}])}),r("vxe-column",{attrs:{width:"100",field:"taskType",title:"服务类型"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._l(e.taskTypes,(function(t){return[t.code==n.taskType?r("span",{key:t.code},[e._v(e._s(t.name))]):e._e()]}))]}}])}),r("vxe-column",{attrs:{width:"100",field:"settlementObject",title:"结算对象"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._l(e.settlementpeopleList,(function(t){return[t.corporationCode==n.settlementObject?r("span",{key:t.corporationCode},[e._v(e._s(t.corporationName))]):e._e()]}))]}}])}),r("vxe-column",{attrs:{width:"100",field:"chargeCode",title:"费用代码"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._l(e.chargeList,(function(t){return[t.chargeCode==n.chargeCode?r("span",{key:t.chargeCode},[e._v(e._s(t.chargeCode)+" - "+e._s(t.chargeCNName))]):e._e()]}))]}}])}),r("vxe-column",{attrs:{width:"100",field:"chargeQtyUnit",title:"计费单位"}}),r("vxe-column",{attrs:{width:"100",field:"chargeOrigQty",title:"原始数量"}}),r("vxe-column",{attrs:{width:"100",field:"chargePrice",title:"单价"}}),r("vxe-column",{attrs:{width:"100",field:"chargeAmount",title:"金额"}}),r("vxe-column",{attrs:{width:"100",field:"chargeCurrency",title:"币值"}}),r("vxe-column",{attrs:{width:"100",field:"vatRate",title:"税金汇率"}}),r("vxe-column",{attrs:{width:"100",field:"vatAmount",title:"税金"}}),r("vxe-column",{attrs:{width:"100",field:"exchangeRateDate",title:"汇率日期"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[e._v(" "+e._s(t.exchangeRateDate?e.moment(t.exchangeRateDate).format("YYYY-MM-DD"):"")+" ")]}}])}),r("vxe-column",{attrs:{width:"100",field:"isAP",title:"是否代付"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(0==t.isAP?"否":"是"))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"isAR",title:"是否代收"},scopedSlots:e._u([{key:"default",fn:function(t){return t=t.row,[r("span",[e._v(e._s(0==t.isAR?"否":"是"))])]}}])}),r("vxe-column",{attrs:{width:"100",field:"remark",title:"备注"}}),r("vxe-column",{attrs:{width:"100",field:"additionalRemark",title:"附加说明"}})],1)],1)],1)}),[],!1,null,"4721bde0",null).exports;t.default=r},9056:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return u})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return m}));var n=r("1da1"),a=(r("96cf"),r("7424")),i=r("b775");function o(e,t,r){return c.apply(this,arguments)}function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGEGETPAGE,i.a.POST,{currentPage:t,pageSize:r,dynamicFilter:n}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return s.apply(this,arguments)}function s(){return(s=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGEADD,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGEUPDATE,i.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGEBATCHSOFTDELETE,i.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGEGETCHARGECACHEASYNC,i.a.GET));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},"91f0":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return u})),r.d(t,"k",(function(){return l})),r.d(t,"j",(function(){return f})),r.d(t,"e",(function(){return m})),r.d(t,"f",(function(){return g})),r.d(t,"g",(function(){return y})),r.d(t,"d",(function(){return R})),r.d(t,"c",(function(){return w})),r.d(t,"h",(function(){return x})),r.d(t,"i",(function(){return C}));var n=r("1da1"),a=(r("96cf"),r("7424")),i=r("b775");function o(e){return c.apply(this,arguments)}function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGELINEADD,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return s.apply(this,arguments)}function s(){return(s=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGELINEGET,i.a.GET,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGELINEUPDATE,i.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGELINESOFTDELETE,i.a.DELETE,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGELINEGETCHARGELINEBYRELEVANCEIDASYNC,i.a.GET,{relevanceid:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return b.apply(this,arguments)}function b(){return(b=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGELINEHAWBCHANGECHARGELINESTATUS,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGELINEMAWBCHANGECHARGELINESTATUS,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return O.apply(this,arguments)}function O(){return(O=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGELINEGETCHARGELINEBYARASYNC,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return(k=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGELINEGETCHARGELINEBYAPASYNC,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return T.apply(this,arguments)}function T(){return(T=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGELINESEAHAWBCHANGECHARGELINESTATUS,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return A.apply(this,arguments)}function A(){return(A=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CHARGELINESEAMAWBCHANGECHARGELINESTATUS,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},cdc0:function(e,t,r){"use strict";r.d(t,"h",(function(){return o})),r.d(t,"a",(function(){return u})),r.d(t,"e",(function(){return l})),r.d(t,"i",(function(){return f})),r.d(t,"c",(function(){return m})),r.d(t,"b",(function(){return g})),r.d(t,"j",(function(){return y})),r.d(t,"d",(function(){return R})),r.d(t,"g",(function(){return w})),r.d(t,"f",(function(){return x}));var n=r("1da1"),a=(r("96cf"),r("7424")),i=r("b775");function o(e,t,r,n){return c.apply(this,arguments)}function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n,o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CORPORATIONGETPAGE,i.a.POST,{currentPage:t,pageSize:r,dynamicFilter:n,filter:o}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return s.apply(this,arguments)}function s(){return(s=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CORPORATIONADD,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CORPORATIONGET,i.a.GET,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CORPORATIONUPDATE,i.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CORPORATIONBATCHSOFTDELETE,i.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return b.apply(this,arguments)}function b(){return(b=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CORPORATIONADDCONTACT,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CORPORATIONUPDATECONTACT,i.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return O.apply(this,arguments)}function O(){return(O=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CORPORATIONBATCHSOFTDELETECONTACT,i.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return(k=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CORPORATIONGETHEDERANDDETAILASYNC,i.a.GET,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return T.apply(this,arguments)}function T(){return(T=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CORPORATIONGETCACHECORPORATIONBYTYPE,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},f907:function(e,t,r){},fb04:function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"a",(function(){return u})),r.d(t,"g",(function(){return l})),r.d(t,"f",(function(){return f})),r.d(t,"d",(function(){return m})),r.d(t,"b",(function(){return g})),r.d(t,"c",(function(){return y}));var n=r("1da1"),a=(r("96cf"),r("7424")),i=r("b775");function o(e,t,r){return c.apply(this,arguments)}function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.BILLINGGETPAGE,i.a.POST,{currentPage:t,pageSize:r,dynamicFilter:n}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return s.apply(this,arguments)}function s(){return(s=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.BILLINGADD,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.BILLINGUPDATE,i.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.BILLINGSOFTDELETE,i.a.DELETE,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.BILLINGGETBILLINGDETAILASYNC,i.a.GET,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return b.apply(this,arguments)}function b(){return(b=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.BILLINGADDCHARGELINE,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.BILLINGDELCHARGELINE,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},fddf:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return u})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return m}));var n=r("1da1"),a=(r("96cf"),r("7424")),i=r("b775");function o(e,t,r){return c.apply(this,arguments)}function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CURRENCYGETPAGE,i.a.POST,{currentPage:t,pageSize:r,dynamicFilter:n}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return s.apply(this,arguments)}function s(){return(s=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CURRENCYADD,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CURRENCYUPDATE,i.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CURRENCYBATCHSOFTDELETE,i.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.CURRENCYGETCACHECURRENCY,i.a.GET));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
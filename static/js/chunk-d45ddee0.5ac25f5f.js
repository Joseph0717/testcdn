(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d45ddee0"],{"3ec8":function(e,t,n){},"683d":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return f}));t=n("96cf");var r=n("1da1"),a=n("7424"),i=n("b775");function o(e,t,n){return s.apply(this,arguments)}function s(){return(s=Object(r.a)(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.HELPCENTERGETPAGE,i.a.POST,{currentPage:t,pageSize:n,dynamicFilter:r}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return u.apply(this,arguments)}function u(){return(u=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.HELPCENTERADD,i.a.POST,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.HELPCENTERGET,i.a.GET,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.HELPCENTERUPDATE,i.a.PUT,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.e)(a.HELPCENTERSOFTDELETE,i.a.DELETE,{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},bd2c:function(e,t,n){"use strict";n.r(t);var r=n("683d"),a=n("672c");a={name:"HelpCenter",i18n:n("9225"),components:{AdvanceTable:a.a},computed:{columns:function(){return[{title:this.$t("236"),dataIndex:"title",scopedSlots:{customRender:"title"},ellipsis:!0},{title:this.$t("398"),dataIndex:"helpType",scopedSlots:{customRender:"helpType"}},{title:this.$t("399"),dataIndex:"isTop",scopedSlots:{customRender:"isTop"}},{title:this.$t("34"),dataIndex:"remark",scopedSlots:{customRender:"remark"}},{title:this.$t("35"),dataIndex:"status",scopedSlots:{customRender:"status"}},{title:this.$t("36"),scopedSlots:{customRender:"operation"}}]}},data:function(){return{helpCenterList:[],loading:!1,pagination:{current:1,pageSize:20,total:0},minHeight:window.innerHeight-200}},created:function(){this.getHelpCenterList()},methods:{getHelpCenterList:function(e){var t=this;this.loading=!0,Object(r.c)(this.pagination.current,this.pagination.pageSize,e).then((function(e){1===e.data.code&&(t.helpCenterList=e.data.data.list,t.pagination.total=e.data.data.total,t.loading=!1)}))},handelPage:function(e){this.pagination.current=e.current,this.getHelpCenterList()},showModalAdd:function(){this.$router.push("/HelpCenterAddEdit?type=add&time=".concat((new Date).getTime()))},showModalEdit:function(e){this.$router.push("/HelpCenterAddEdit?type=edit&id=".concat(e.id))},confirmDelete:function(e){var t=this;Object(r.d)(e.id).then((function(e){1===e.data.code&&t.getHelpCenterList()}))}}},n("f663"),n=n("2877"),a=Object(n.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"HelpCenter"},[n("a-page-header",[n("template",{slot:"extra"},[n("a-space",[n("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:helpcenter:add",expression:"`api:admin:helpcenter:add`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"plus-circle"},on:{click:e.showModalAdd}},[e._v(e._s(e.$t("37")))])],1)],1)],2),n("advance-table",{style:"height:"+e.minHeight+"px;",attrs:{title:" ",scroll:{y:e.minHeight-120},columns:e.columns,"data-source":e.helpCenterList,pagination:e.pagination,loading:e.loading,rowKey:"id",bordered:"",size:"small"},on:{change:e.handelPage},scopedSlots:e._u([{key:"isTop",fn:function(t){return n("span",{},[n("a-tag",{attrs:{color:1==t.record.isTop?"#108ee9":"#f50"}},[e._v(" "+e._s(1==t.record.isTop?e.$t("198"):e.$t("199"))+" ")])],1)}},{key:"status",fn:function(t){return n("span",{},[n("a-tag",{attrs:{color:1==t.record.status?"#108ee9":"#f50"}},[e._v(" "+e._s(1==t.record.status?e.$t("200"):e.$t("201"))+" ")])],1)}},{key:"operation",fn:function(t){return n("span",{},[n("a-space",[n("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:helpcenter:update",expression:"`api:admin:helpcenter:update`",arg:"permission"}],attrs:{type:"primary",size:"small",icon:"edit"},on:{click:function(n){return e.showModalEdit(t.record)}}},[e._v(e._s(e.$t("78")))]),n("a-popconfirm",{attrs:{title:e.$t("47")},on:{confirm:function(n){return e.confirmDelete(t.record)}}},[n("a-button",{directives:[{name:"auth",rawName:"v-auth:permission",value:"api:admin:helpcenter:softdelete",expression:"`api:admin:helpcenter:softdelete`",arg:"permission"}],attrs:{type:"danger",size:"small",icon:"delete"}},[e._v(e._s(e.$t("46")))])],1)],1)],1)}}])})],1)}),[],!1,null,"730e3888",null).exports;t.default=a},f663:function(e,t,n){"use strict";n("3ec8")}}]);
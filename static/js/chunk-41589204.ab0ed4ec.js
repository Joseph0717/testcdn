(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-41589204"],{"1a94":function(t,e,n){"use strict";n.r(e),n("96cf");var a=n("1da1"),r=n("7424"),c=n("b775");function i(){return o.apply(this,arguments)}function o(){return(o=Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(c.e)(r.CACHELIST,c.a.GET));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(c.e)(r.CACHECLEAR,c.a.DELETE,{cacheKey:e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d={name:"Cache",i18n:n("9225"),computed:{columns:function(){return[{title:this.$t("380"),dataIndex:"name",scopedSlots:{customRender:"name"}},{title:this.$t("381"),dataIndex:"value",scopedSlots:{customRender:"value"}},{title:this.$t("382"),dataIndex:"description",scopedSlots:{customRender:"description"}},{title:this.$t("36"),scopedSlots:{customRender:"operation"}}]}},data:function(){return{minHeight:window.innerHeight-137,cacheData:[],loading:!1}},created:function(){this.getCacheList()},methods:{getCacheList:function(){var t=this;this.loading=!0,i().then((function(e){1===e.data.code&&(t.cacheData=e.data.data,t.loading=!1)}))},confirm:function(t){var e=this;s(t.value).then((function(t){1===t.data.code&&e.$message.success(e.$t("383"))}))}}};n("d90b"),n=n("2877"),d=Object(n.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Cache"},[n("a-table",{style:"minHeight:"+t.minHeight+"px;",attrs:{columns:t.columns,"data-source":t.cacheData,loading:t.loading,rowKey:"name",bordered:"",size:"small"},scopedSlots:t._u([{key:"operation",fn:function(e){return n("span",{},[n("a-popconfirm",{attrs:{title:t.$t("379")},on:{confirm:function(n){return t.confirm(e)}}},[n("a-button",{attrs:{type:"danger",icon:"delete",size:"small"}},[t._v(t._s(t.$t("378")))])],1)],1)}}])})],1)}),[],!1,null,"5c281669",null);e.default=d.exports},4539:function(t,e,n){},d90b:function(t,e,n){"use strict";n("4539")}}]);
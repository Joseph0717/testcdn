(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7268b492"],{"442c":function(t,e,i){},7832:function(t,e,i){"use strict";var s={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}},c={name:"ExceptionPage",props:["type","homeRoute"],data:function(){return{config:s}},methods:{backHome:function(){this.homeRoute&&this.$router.push(this.homeRoute),this.$emit("backHome",this.type)}}};i("c650"),i=i("2877"),c=Object(i.a)(c,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",{staticClass:"exception-page"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.config[t.type].img}})]),e("div",{staticClass:"content"},[e("h1",[t._v(t._s(t.config[t.type].title))]),e("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),e("div",{staticClass:"action"},[e("a-button",{attrs:{type:"primary"},on:{click:t.backHome}},[t._v("返回")])],1)])])}),[],!1,null,"1bb9218a",null);e.a=c.exports},a42a:function(t,e,i){"use strict";i.r(e);var s=i("5530"),c=i("7832"),a=i("5880");a={name:"Exp404",components:{ExceptionPage:c.a},computed:Object(s.a)(Object(s.a)({},Object(a.mapState)("setting",["pageMinHeight"])),{},{minHeight:function(){return this.pageMinHeight?this.pageMinHeight+"px":"100vh"}})},i=i("2877"),a=Object(i.a)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("exception-page",{style:"min-height: "+t.minHeight,attrs:{"home-route":"/Dashboard",type:"404"}})}),[],!1,null,"6a37f5b0",null);e.default=a.exports},c650:function(t,e,i){"use strict";i("442c")}}]);
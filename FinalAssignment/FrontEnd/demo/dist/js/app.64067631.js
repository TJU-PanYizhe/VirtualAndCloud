(function(){"use strict";var e={9010:function(e,t,n){var o=n(8935),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("IndexPage")],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"IndexPage"}},[n("div",{attrs:{id:"siteBackground"}}),n("div",{attrs:{id:"index"}},[n("div",{attrs:{id:"navigation"}},[n("div",{attrs:{id:"menu"}},[n("div",{attrs:{id:"menuList"}},[n("div",{staticClass:"menuChild",attrs:{onclick:"window.scroll({top:0,left:0,behavior:'instant'})"}},[n("router-link",{attrs:{to:"/index","active-class":"menuActive"}},[n("i",{staticClass:"el-icon-s-home"}),n("span",[e._v("主页")])])],1),n("div",{staticClass:"menuChild",attrs:{onclick:"window.scroll({top:0,left:0,behavior:'instant'})"}},[n("router-link",{attrs:{to:"/Code","active-class":"menuActive"}},[n("i",{staticClass:"el-icon-s-tools"}),n("span",[e._v("代码")])])],1),n("div",{staticClass:"menuChild",attrs:{onclick:"window.scroll({top:0,left:0,behavior:'instant'})"}},[n("router-link",{attrs:{to:"/Document","active-class":"menuActive"}},[n("i",{staticClass:"el-icon-s-management"}),n("span",[e._v("文档")])])],1),n("div",{staticClass:"menuChild",attrs:{onclick:"window.scroll({top:0,left:0,behavior:'instant'})"}},[n("router-link",{attrs:{to:"/About","active-class":"menuActive"}},[n("i",{staticClass:"el-icon-s-custom"}),n("span",[e._v("关于")])])],1)])])])]),n("h1",{staticStyle:{"margin-top":"70px"}},[e._v("虚拟化技术与云计算 - 基于Serverless的数据预处理服务")]),n("router-view")],1)},l=[],s={name:"IndexPage",methods:{},data(){return{}}},c=s,u=n(1001),d=(0,u.Z)(c,a,l,!1,null,null,null),p=d.exports,f={name:"App",components:{IndexPage:p}},m=f,v=(0,u.Z)(m,i,r,!1,null,null,null),h=v.exports,y=n(2809),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Home"}},[n("el-select",{staticStyle:{"margin-right":"17px"},attrs:{placeholder:"请选择云函数",filterable:"","default-first-option":!0},on:{change:function(t){return e.selectionChange()}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return n("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})})),1),n("el-button",{staticStyle:{"margin-left":"17px"},attrs:{type:"primary",plain:""},on:{click:function(t){return e.input()}}},[e._v("代码测试 RUN")]),n("div",{attrs:{id:"IO"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:21,maxRows:21},placeholder:e.example,size:"large"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),n("el-input",{attrs:{type:"textarea",autosize:{minRows:21,maxRows:21},placeholder:e.expected,size:"large"},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}})],1)],1)},g=[];const b='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n    print(" - - - - - - - ")\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody)\n    decodedBody = decodedBody.decode()\n    dBody = decodedBody[1:-1]\n\n    print(decodedBody)\n    print(dBody)\n    list = []\n    numList = dBody.split(",")\n    print(numList)\n    # for n in numList:\n        # list.append(float(n))\n        # print(n, " - ", float(n))\n    # result = np.mean(list)\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": True,\n        "body": encodedBody,\n        "headers": {"Content-Type": "application/json"},\n    }\n',k="[1,2,3,4,5,6,7]",w="4";var C,_,O={code:b,example:k,result:w},S=O,B=(0,u.Z)(S,C,_,!1,null,null,null),E=B.exports;const j="# Please select a function first",T={code:E.code,example:E.example,result:E.result};var L,P,Z={code:j,code1:T},D=Z,I=(0,u.Z)(D,L,P,!1,null,null,null),A=I.exports;const R=[{key:"1",value:"A"},{key:"2",value:"B"},{key:"3",value:"C"},{key:"4",value:"D"},{key:"5",value:"E"},{key:"6",value:"F"},{key:"7",value:"G"}];var F,N,$={FunctionList:R},z=$,J=(0,u.Z)(z,F,N,!1,null,null,null),M=J.exports,H={name:"Home",components:{},methods:{selectionChange(){switch(this.value){case"1":this.example="请以JSON格式输入函数所需参数\nExample: "+A.code1.example,this.expected="Expected Result: "+A.code1.result;break;default:this.example="请以JSON格式输入函数所需参数",this.expected="云函数执行结果, 非必要请勿修改";break}},input(){""!=this.text?(this.result="Loading...",console.log(new Date),this.Test(JSON.parse(this.text))):(this.result="Empty Input",console.log("empty"))},Test(e){var t=n(6166);const o=this;var i={method:"post",url:"https://api.cheeseburgerim.space/Test",headers:{"Content-Type":"application/json"},data:e};t(i).then((function(e){let t=e.data;console.log(t),o.result=new Date+"\nCloud Function Result: \n"+JSON.stringify(t,null,"\t")})).catch((function(e){console.log(e)}))}},data(){return{options:M.FunctionList,value:"",text:"",result:"",example:"请以JSON格式输入函数所需参数",expected:"云函数执行结果, 非必要请勿修改"}}},G=H,U=(0,u.Z)(G,x,g,!1,null,null,null),q=U.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Code"}},[n("el-menu",{staticClass:"hoverEffect",attrs:{mode:"vertical"}},e._l(e.itemList,(function(t){return n("el-menu-item",{key:t.key,on:{click:function(n){return e.itemChange(t.key)}}},[e._v(e._s(t.value))])})),1),n("editor",{staticClass:"hoverEffect",staticStyle:{"margin-right":"17px"},attrs:{lang:"python",theme:"chrome",width:"87%",height:"77vh",options:e.options},on:{init:e.editorInit},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)},Q=[],V={name:"Code",components:{editor:n(1190)},methods:{editorInit:function(){n(6932),n(803),n(3277),n(3139)},itemChange(e){switch(this.item=e,this.item){case"1":this.content=A.code1.code;break;default:this.content=A.code;break}}},data(){return{options:{fontSize:18,showPrintMargin:!1},itemList:M.FunctionList,content:A.code,item:""}}},W=V,X=(0,u.Z)(W,K,Q,!1,null,null,null),Y=X.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Document"}})},te=[],ne={name:"Document"},oe=ne,ie=(0,u.Z)(oe,ee,te,!1,null,null,null),re=ie.exports,ae=new y.Z({routes:[{path:"/",redirect:"/index"},{path:"/index",component:q},{path:"/Code",component:Y},{path:"/Document",component:re}]}),le=n(4549),se=n.n(le);o["default"].use(y.Z),o["default"].use(se()),o["default"].config.productionTip=!1,new o["default"]({render:e=>e(h),router:ae}).$mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,r<a&&(a=r));if(l){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],l=o[1],s=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var u=s(n)}for(t&&t(o);c<a.length;c++)r=a[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9010)}));o=n.O(o)})();
//# sourceMappingURL=app.64067631.js.map
(function(){"use strict";var e={7233:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var o,i,a,l,r,s,c=n(8935),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("IndexPage")],1)},d=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"IndexPage"}},[n("div",{attrs:{id:"siteBackground"}}),n("div",{attrs:{id:"index"}},[n("div",{attrs:{id:"navigation"}},[n("div",{attrs:{id:"menu"}},[n("div",{attrs:{id:"menuList"}},[n("div",{staticClass:"menuChild",attrs:{onclick:"window.scroll({top:0,left:0,behavior:'instant'})"}},[n("router-link",{attrs:{to:"/index","active-class":"menuActive"}},[n("i",{staticClass:"el-icon-s-home"}),n("span",[e._v("主页")])])],1),n("div",{staticClass:"menuChild",attrs:{onclick:"window.scroll({top:0,left:0,behavior:'instant'})"}},[n("router-link",{attrs:{to:"/Code","active-class":"menuActive"}},[n("i",{staticClass:"el-icon-s-tools"}),n("span",[e._v("代码")])])],1),n("div",{staticClass:"menuChild",attrs:{onclick:"window.scroll({top:0,left:0,behavior:'instant'})"}},[n("router-link",{attrs:{to:"/Document","active-class":"menuActive"}},[n("i",{staticClass:"el-icon-s-management"}),n("span",[e._v("文档")])])],1),n("div",{staticClass:"menuChild",attrs:{onclick:"window.scroll({top:0,left:0,behavior:'instant'})"}},[n("router-link",{attrs:{to:"/About","active-class":"menuActive"}},[n("i",{staticClass:"el-icon-s-custom"}),n("span",[e._v("关于")])])],1)])])])]),n("h1",{staticStyle:{"margin-top":"70px"}},[e._v("虚拟化技术与云计算 - 基于Serverless的数据预处理服务")]),n("keep-alive",[n("router-view")],1)],1)},f=[],m={name:"IndexPage",methods:{},mounted:function(){},data:function(){return{}}},v=m,h=n(1001),x=(0,h.Z)(v,p,f,!1,null,null,null),y=x.exports,b={name:"App",components:{IndexPage:y}},g=b,k=(0,h.Z)(g,u,d,!1,null,null,null),w=k.exports,C=n(2809),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Home"}},[n("el-select",{staticStyle:{"margin-right":"17px"},attrs:{placeholder:"请选择云函数",filterable:"","default-first-option":!0},on:{change:function(t){return e.selectionChange()}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return n("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})})),1),n("el-button",{staticStyle:{"margin-left":"17px"},attrs:{type:"primary",plain:""},on:{click:function(t){return e.input()}}},[e._v("代码测试 RUN")]),n("div",{attrs:{id:"IO"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:21,maxRows:21},placeholder:e.example,size:"large"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),n("el-input",{attrs:{type:"textarea",autosize:{minRows:21,maxRows:21},placeholder:e.expected,size:"large"},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}})],1)],1)},O=[],j='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody)\n    jsonBody = json.loads(decodedBody)\n    print(jsonBody)\n    decodedBody = decodedBody.decode()\n\n    print(np.mean(jsonBody))\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(np.mean(jsonBody)),\n        "headers": {"Content-Type": "application/json"},\n    }\n',E="[1,2,3,4,5,6,7]",S="4",B={code:j,example:E,result:S},P=B,Z=(0,h.Z)(P,o,i,!1,null,null,null),F=Z.exports,I="# Please select a function first",D={code:F.code,example:F.example,result:F.result},L={code:I,code1:D},T=L,A=(0,h.Z)(T,a,l,!1,null,null,null),R=A.exports,$=[{key:"1",value:"平均值"},{key:"2",value:"B"},{key:"3",value:"C"},{key:"4",value:"D"},{key:"5",value:"E"},{key:"6",value:"F"},{key:"7",value:"G"}],z={FunctionList:$},M=z,N=(0,h.Z)(M,r,s,!1,null,null,null),J=N.exports,H={name:"Home",components:{},methods:{selectionChange:function(){switch(this.value){case"1":this.example="请以JSON格式输入函数所需参数\nExample: "+R.code1.example,this.expected="Expected Result: "+R.code1.result;break;default:this.example="请以JSON格式输入函数所需参数",this.expected="云函数执行结果, 非必要请勿修改";break}},input:function(){if(""!=this.text)switch(this.result="Loading...",console.log(new Date),this.value){case"1":this.callCloudFunction(this.text,"Test");break;default:break}else this.result="Empty Input",console.log("empty")},callCloudFunction:function(e,t){var o=this,i=n(6166),a={method:"post",url:"https://api.cheeseburgerim.space/"+t,data:e};i(a).then((function(e){var t=e.data;console.log(t),o.result=t})).catch((function(e){console.log(e)}))}},data:function(){return{options:J.FunctionList,value:"",text:"",result:"",example:"请以JSON格式输入函数所需参数",expected:"云函数执行结果, 非必要请勿修改"}}},G=H,U=(0,h.Z)(G,_,O,!1,null,null,null),q=U.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Code"}},[n("el-menu",{staticClass:"hoverEffect",attrs:{mode:"vertical"}},e._l(e.itemList,(function(t){return n("el-menu-item",{key:t.key,on:{click:function(n){return e.itemChange(t.key)}}},[e._v(e._s(t.value))])})),1),n("editor",{staticClass:"hoverEffect",staticStyle:{"margin-right":"17px"},attrs:{lang:"python",theme:"chrome",width:"87%",height:"77vh",options:e.options},on:{init:e.editorInit},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)},Q=[],V={name:"Code",components:{editor:n(1190)},methods:{editorInit:function(){n(6932),n(803),n(3277),n(3139)},itemChange:function(e){switch(this.item=e,this.item){case"1":this.content=R.code1.code;break;default:this.content=R.code;break}}},data:function(){return{options:{fontSize:18,showPrintMargin:!1},itemList:J.FunctionList,content:R.code,item:""}}},W=V,X=(0,h.Z)(W,K,Q,!1,null,null,null),Y=X.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Document"}})},te=[],ne={name:"Document"},oe=ne,ie=(0,h.Z)(oe,ee,te,!1,null,null,null),ae=ie.exports,le=new C.Z({routes:[{path:"/",redirect:"/index"},{path:"/index",component:q},{path:"/Code",component:Y},{path:"/Document",component:ae}]}),re=n(4549),se=n.n(re);c["default"].use(C.Z),c["default"].use(se()),c["default"].config.productionTip=!1,new c["default"]({render:function(e){return e(w)},router:le}).$mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){var e=[];n.O=function(t,o,i,a){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],a=e[u][2];for(var r=!0,s=0;s<o.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(r=!1,a<l&&(l=a));if(r){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,l=o[0],r=o[1],s=o[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(s)var u=s(n)}for(t&&t(o);c<l.length;c++)a=l[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7233)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.28e8829d.js.map
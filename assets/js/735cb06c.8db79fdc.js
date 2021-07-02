(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9834],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(a,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,u(u({ref:t},s),{},{components:r})):n.createElement(d,u({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<i;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8111:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return l},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),u={id:"contribution",title:"\u8d21\u732e\u6307\u5357",description:"\u8d21\u732e\u6307\u5357",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},c=void 0,a={unversionedId:"community/contribution",id:"community/contribution",isDocsHomePage:!1,title:"\u8d21\u732e\u6307\u5357",description:"\u8d21\u732e\u6307\u5357",source:"@site/docs/community/contribution.md",sourceDirName:"community",slug:"/community/contribution",permalink:"/docs/community/contribution",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/community/contribution.md",version:"current",frontMatter:{id:"contribution",title:"\u8d21\u732e\u6307\u5357",description:"\u8d21\u732e\u6307\u5357",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Docker",permalink:"/docs/devops/docker"},next:{title:"\u6587\u6863\u7ef4\u62a4",permalink:"/docs/community/documentation"}},l=[{value:"Bug\u4fee\u590d",id:"bug\u4fee\u590d",children:[]},{value:"\u529f\u80fd\u65b0\u589e",id:"\u529f\u80fd\u65b0\u589e",children:[]},{value:"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801",id:"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801",children:[]}],s={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"kratos\u793e\u533a\u5e0c\u671b\u80fd\u591f\u5f97\u5230\u5e7f\u5927\u5f00\u53d1\u8005\u7684\u5e2e\u52a9\uff0c\u6240\u4ee5\u5e0c\u671b\u60a8\u5728\u8981\u63d0 issue \u6216\u8005 pull request \u4e4b\u524d\u82b1\u51e0\u5206\u949f\u6765\u9605\u8bfb\u4e00\u904d\u8fd9\u7bc7\u6307\u5357\u3002"),(0,i.kt)("h2",{id:"bug\u4fee\u590d"},"Bug\u4fee\u590d"),(0,i.kt)("p",null,"kratos \u4f7f\u7528 github issue \u6765\u7ba1\u7406\u95ee\u9898\u3002 \u5982\u679c\u60a8\u5e0c\u671b\u63d0\u4ea4 bug \u62a5\u544a\u6216\u5e2e\u5fd9\u4fee\u590dbug\u65f6\uff0c\u8bf7\u5148\u786e\u4fdd\u5df2\u7ecf\u641c\u7d22\u8fc7\u5df2\u6709\u7684 issues \u548c pull requests \u5e76\u4e14\u9605\u8bfb\u4e86\u6211\u4eec\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://go-kratos.dev/docs/intro/faq"},"\u5e38\u89c1\u95ee\u9898"),"\u3002"),(0,i.kt)("p",null,"\u63d0\u4ea4 bug \u62a5\u544a\u65f6\uff0c\u8bf7\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684 issue \u6a21\u677f\uff0c\u6e05\u695a\u5730\u63cf\u8ff0\u9047\u5230\u7684\u95ee\u9898\u548c\u590d\u73b0\u65b9\u5f0f\uff0c\u5982\u679c\u65b9\u4fbf\u6700\u597d\u662f\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u6700\u5c0f\u590d\u73b0\u4ed3\u5e93\u3002"),(0,i.kt)("h2",{id:"\u529f\u80fd\u65b0\u589e"},"\u529f\u80fd\u65b0\u589e"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u6539\u8fdb\u6216\u65b0\u589e\u529f\u80fd\uff0c\u63a8\u8350\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 issue \u6a21\u677f \u6765\u65b0\u5efa\u4e00\u4e2a\u529f\u80fd\u7684 issue\uff0c\u5e76\u5728 issue \u4e2d\u6e05\u6670\u7684\u63cf\u8ff0\u529f\u80fd\u7684\u9700\u6c42\u3002"),(0,i.kt)("h2",{id:"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801"},"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u4ece\u672a\u5728 github \u4e0a\u63d0\u4ea4\u8fc7\u4ee3\u7801\uff0c\u8bf7\u8ddf\u968f\u5982\u4e0b\u6b65\u9aa4\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9996\u5148\u8bf7 fork \u9879\u76ee\u5230\u81ea\u5df1\u7684 github \u8d26\u6237\u4e2d"),(0,i.kt)("li",{parentName:"ul"},"\u7136\u540e\u57fa\u4e8e main \u5206\u652f \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u529f\u80fd\u5206\u652f\uff0c\u5e76\u4ee5\u529f\u80fd\u547d\u540d\u5982  feature-log "),(0,i.kt)("li",{parentName:"ul"},"\u7f16\u5199\u4ee3\u7801"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7aef\u5206\u652f"),(0,i.kt)("li",{parentName:"ul"},"\u5728 github \u4e2d\u63d0\u4ea4 PR \u8bf7\u6c42"),(0,i.kt)("li",{parentName:"ul"},"\u7b49\u5f85 review \u540e\u5408\u5e76\u5230 main \u5206\u652f")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u5728\u60a8\u63d0\u4ea4 PR \u8bf7\u6c42\u65f6\u9996\u5148\u4fdd\u8bc1\u4ee3\u7801\u4f7f\u7528\u4e86\u6b63\u786e\u7684\u7f16\u7801\u89c4\u8303\uff0c\u5e76\u6709\u5b8c\u6574\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u63d0\u4ea4 PR \u7684\u4fe1\u606f\u4e2d\u6700\u597d\u5173\u8054\u76f8\u5173\u7684 issue\uff0c\u4ee5\u51cf\u8f7b\u5ba1\u6838\u4eba\u5458\u7684\u5de5\u4f5c\u8d1f\u62c5\u3002")))}p.isMDXComponent=!0}}]);
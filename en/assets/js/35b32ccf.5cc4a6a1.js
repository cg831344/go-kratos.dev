(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3035],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?t.createElement(m,c(c({ref:r},s),{},{components:n})):t.createElement(m,c({ref:r},s))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2949:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var t=n(2122),o=n(9756),i=(n(7294),n(3905)),c={id:"docker",title:"Docker",description:"Docker",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},a=void 0,u={unversionedId:"devops/docker",id:"devops/docker",isDocsHomePage:!1,title:"Docker",description:"Docker",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/devops/docker.md",sourceDirName:"devops",slug:"/devops/docker",permalink:"/en/docs/devops/docker",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/devops/docker.md",version:"current",frontMatter:{id:"docker",title:"Docker",description:"Docker",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Ent",permalink:"/en/docs/guide/ent"},next:{title:"Contribution Guide",permalink:"/en/docs/community/contribution"}},l=[{value:"Dockerfile",id:"dockerfile",children:[]},{value:"Build Image",id:"build-image",children:[]},{value:"Run Container",id:"run-container",children:[]}],s={toc:l};function d(e){var r=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"kratos-layout")," Dockerfile is provided by default, and multiple stages build is recommended to get the smallest size of container images."),(0,i.kt)("h3",{id:"dockerfile"},"Dockerfile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM golang:1.15 AS builder\n\nCOPY . /src\nWORKDIR /src\n\nRUN GOPROXY=https://goproxy.cn make build\n\nFROM debian:stable-slim\n\nRUN apt-get update && apt-get install -y --no-install-recommends \\\n        ca-certificates  \\\n        netbase \\\n        && rm -rf /var/lib/apt/lists/ \\\n        && apt-get autoremove -y && apt-get autoclean -y\n\nCOPY --from=builder /src/bin /app\n\nWORKDIR /app\n\nEXPOSE 8000\nEXPOSE 9000\nVOLUME /data/conf\n\nCMD ["./server", "-conf", "/data/conf"]\n')),(0,i.kt)("h3",{id:"build-image"},"Build Image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker build -t <your-docker-image-name> .\n")),(0,i.kt)("h3",{id:"run-container"},"Run Container"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -p 8000:8000 -p 9000:9000 -v </path/to/your/configs>:/data/conf <your-docker-image-name>\n")))}d.isMDXComponent=!0}}]);
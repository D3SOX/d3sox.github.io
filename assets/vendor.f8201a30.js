function ct(F){return F&&F.__esModule&&Object.prototype.hasOwnProperty.call(F,"default")?F.default:F}var Ve={};/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under Apache 2.0 or GPL 2.0 at your option.
* If derivative product is not compatible with one of licenses, you can pick one of licenses.
*
* @license Apache 2.0
* @license GPL 2.0
*/(function(F){var he=function(){function x(o,e,n){return o(n={path:e,exports:{},require:function(a,i){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(i==null&&n.path)}},n.exports),n.exports}var C=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.fullIcon=e.iconDefaults=e.minifyProps=e.matchName=void 0,e.matchName=/^[a-z0-9]+(-[a-z0-9]+)*$/,e.minifyProps=["width","height","top","left"],e.iconDefaults=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1}),e.fullIcon=function(n){return Object.assign({},e.iconDefaults,n)}}),ge=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.mergeIconData=void 0,e.mergeIconData=function(n,a){var i=Object.assign({},n);for(var c in C.iconDefaults){var t=c;if(a[t]!==void 0){var r=a[t];if(i[t]===void 0){i[t]=r;continue}switch(t){case"rotate":i[t]=(i[t]+r)%4;break;case"hFlip":case"vFlip":i[t]=r!==i[t];break;default:i[t]=r}}}return i}}),me=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.parseIconSet=void 0;var n=Object.keys(C.iconDefaults);function a(i,c,t,r){r===void 0&&(r=0);var u=i.parent;if(c[u]!==void 0)return ge.mergeIconData(c[u],i);if(t[u]!==void 0){if(r>2)return null;var s=a(t[u],c,t,r+1);if(s)return ge.mergeIconData(s,i)}return null}e.parseIconSet=function(i,c,t){t===void 0&&(t="none");var r=[];if(typeof i!="object"||(i.not_found instanceof Array&&i.not_found.forEach(function(f){c(f,null),t==="all"&&r.push(f)}),typeof i.icons!="object"))return t!=="none"&&r;var u=Object.create(null);n.forEach(function(f){i[f]!==void 0&&typeof i[f]!="object"&&(u[f]=i[f])});var s=i.icons;if(Object.keys(s).forEach(function(f){var l=s[f];typeof l.body=="string"&&(c(f,Object.freeze(Object.assign({},C.iconDefaults,u,l))),r.push(f))}),typeof i.aliases=="object"){var d=i.aliases;Object.keys(d).forEach(function(f){var l=a(d[f],s,d,1);l&&(c(f,Object.freeze(Object.assign({},C.iconDefaults,u,l))),r.push(f))})}return t==="none"?r.length>0:r}}),T=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateIcon=e.stringToIcon=void 0,e.stringToIcon=function(n,a,i,c){c===void 0&&(c="");var t=n.split(":");if(n.slice(0,1)==="@"){if(t.length<2||t.length>3)return null;c=t.shift().slice(1)}if(t.length>3||!t.length)return null;if(t.length>1){var r=t.pop(),u=t.pop(),s={provider:t.length>0?t[0]:c,prefix:u,name:r};return a&&!e.validateIcon(s)?null:s}var d=t[0],f=d.split("-");if(f.length>1){var l={provider:c,prefix:f.shift(),name:f.join("-")};return a&&!e.validateIcon(l)?null:l}if(i&&c===""){var p={provider:c,prefix:"",name:d};return a&&!e.validateIcon(p,i)?null:p}return null},e.validateIcon=function(n,a){return!!n&&!(n.provider!==""&&!n.provider.match(C.matchName)||!(a&&n.prefix===""||n.prefix.match(C.matchName))||!n.name.match(C.matchName))}}),S=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.listIcons=e.getIcon=e.iconExists=e.addIcon=e.addIconSet=e.getStorage=e.newStorage=void 0;var n=Object.create(null);function a(c,t){return{provider:c,prefix:t,icons:Object.create(null),missing:Object.create(null)}}function i(c,t){n[c]===void 0&&(n[c]=Object.create(null));var r=n[c];return r[t]===void 0&&(r[t]=a(c,t)),r[t]}e.newStorage=a,e.getStorage=i,e.addIconSet=function(c,t,r){r===void 0&&(r="none");var u=Date.now();return me.parseIconSet(t,function(s,d){d===null?c.missing[s]=u:c.icons[s]=d},r)},e.addIcon=function(c,t,r){try{if(typeof r.body=="string")return c.icons[t]=Object.freeze(C.fullIcon(r)),!0}catch(u){}return!1},e.iconExists=function(c,t){return c.icons[t]!==void 0},e.getIcon=function(c,t){var r=c.icons[t];return r===void 0?null:r},e.listIcons=function(c,t){var r=[];return(typeof c=="string"?[c]:Object.keys(n)).forEach(function(u){(typeof u=="string"&&typeof t=="string"?[t]:n[u]===void 0?[]:Object.keys(n[u])).forEach(function(s){var d=i(u,s),f=Object.keys(d.icons).map(function(l){return(u!==""?"@"+u+":":"")+s+":"+l});r=r.concat(f)})}),r}}),V=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.storageFunctions=e.addCollection=e.addIcon=e.getIconData=e.allowSimpleNames=void 0;var n=!1;function a(t){var r=typeof t=="string"?T.stringToIcon(t,!0,n):t;return r?S.getIcon(S.getStorage(r.provider,r.prefix),r.name):null}function i(t,r){var u=T.stringToIcon(t,!0,n);if(!u)return!1;var s=S.getStorage(u.provider,u.prefix);return S.addIcon(s,u.name,r)}function c(t,r){if(typeof t!="object")return!1;if(typeof r!="string"&&(r=typeof t.provider=="string"?t.provider:""),n&&r===""&&(typeof t.prefix!="string"||t.prefix==="")){var u=!1;return me.parseIconSet(t,function(d,f){f!==null&&i(d,f)&&(u=!0)}),u}if(typeof t.prefix!="string"||!T.validateIcon({provider:r,prefix:t.prefix,name:"a"}))return!1;var s=S.getStorage(r,t.prefix);return!!S.addIconSet(s,t)}e.allowSimpleNames=function(t){return typeof t=="boolean"&&(n=t),n},e.getIconData=a,e.addIcon=i,e.addCollection=c,e.storageFunctions={iconExists:function(t){return a(t)!==null},getIcon:function(t){var r=a(t);return r?Object.assign({},r):null},listIcons:S.listIcons,addIcon:i,addCollection:c}}),be=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.replaceIDs=void 0;var n=/\sid="(\S+)"/g,a="([^A-Za-z0-9_-])",i="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-",c=0;e.replaceIDs=function(t,r){r===void 0&&(r=i);for(var u,s=[];u=n.exec(t);)s.push(u[1]);return s.length&&s.forEach(function(d){var f=typeof r=="function"?r():r+c++;t=t.replace(new RegExp(a+"("+(d.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")")+a,"g"),"$1"+f+"$3")}),t}}),te=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateSize=void 0;var n=/(-?[0-9.]*[0-9]+[0-9.]*)/g,a=/^-?[0-9.]*[0-9]+[0-9.]*$/g;e.calculateSize=function(i,c,t){if(c===1)return i;if(t=t===void 0?100:t,typeof i=="number")return Math.ceil(i*c*t)/t;if(typeof i!="string")return i;var r=i.split(n);if(r===null||!r.length)return i;for(var u=[],s=r.shift(),d=a.test(s);;){if(d){var f=parseFloat(s);isNaN(f)?u.push(s):u.push(Math.ceil(f*c*t)/t)}else u.push(s);if((s=r.shift())===void 0)return u.join("");d=!d}}}),D=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.mergeCustomisations=e.defaults=void 0,e.defaults=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0}),e.mergeCustomisations=function(n,a){var i={};for(var c in n){var t=c;if(i[t]=n[t],a[t]!==void 0){var r=a[t];switch(t){case"inline":case"slice":typeof r=="boolean"&&(i[t]=r);break;case"hFlip":case"vFlip":r===!0&&(i[t]=!i[t]);break;case"hAlign":case"vAlign":typeof r=="string"&&r!==""&&(i[t]=r);break;case"width":case"height":(typeof r=="string"&&r!==""||typeof r=="number"&&r||r===null)&&(i[t]=r);break;case"rotate":typeof r=="number"&&(i[t]+=r)}}}return i}}),ae=x(function(o,e){function n(a){var i="";switch(a.hAlign){case"left":i+="xMin";break;case"right":i+="xMax";break;default:i+="xMid"}switch(a.vAlign){case"top":i+="YMin";break;case"bottom":i+="YMax";break;default:i+="YMid"}return i+=a.slice?" slice":" meet"}Object.defineProperty(e,"__esModule",{value:!0}),e.iconToSVG=void 0,e.iconToSVG=function(a,i){var c,t,r={left:a.left,top:a.top,width:a.width,height:a.height},u=a.body;[a,i].forEach(function(d){var f,l=[],p=d.hFlip,v=d.vFlip,h=d.rotate;switch(p?v?h+=2:(l.push("translate("+(r.width+r.left)+" "+(0-r.top)+")"),l.push("scale(-1 1)"),r.top=r.left=0):v&&(l.push("translate("+(0-r.left)+" "+(r.height+r.top)+")"),l.push("scale(1 -1)"),r.top=r.left=0),h<0&&(h-=4*Math.floor(h/4)),h%=4){case 1:f=r.height/2+r.top,l.unshift("rotate(90 "+f+" "+f+")");break;case 2:l.unshift("rotate(180 "+(r.width/2+r.left)+" "+(r.height/2+r.top)+")");break;case 3:f=r.width/2+r.left,l.unshift("rotate(-90 "+f+" "+f+")")}h%2==1&&(r.left===0&&r.top===0||(f=r.left,r.left=r.top,r.top=f),r.width!==r.height&&(f=r.width,r.width=r.height,r.height=f)),l.length&&(u='<g transform="'+l.join(" ")+'">'+u+"</g>")}),i.width===null&&i.height===null?(t="1em",c=te.calculateSize(t,r.width/r.height)):i.width!==null&&i.height!==null?(c=i.width,t=i.height):i.height!==null?(t=i.height,c=te.calculateSize(t,r.width/r.height)):(c=i.width,t=te.calculateSize(c,r.height/r.width)),c==="auto"&&(c=r.width),t==="auto"&&(t=r.height);var s={attributes:{width:c=typeof c=="string"?c:c+"",height:t=typeof t=="string"?t:t+"",preserveAspectRatio:n(i),viewBox:r.left+" "+r.top+" "+r.width+" "+r.height},body:u};return i.inline&&(s.inline=!0),s}}),Ge=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.builderFunctions=void 0,e.builderFunctions={replaceIDs:be.replaceIDs,calculateSize:te.calculateSize,buildIcon:function(n,a){return ae.iconToSVG(C.fullIcon(n),D.mergeCustomisations(D.defaults,a))}}}),E=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.coreModules=void 0,e.coreModules={}}),G=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.storeCache=e.loadCache=e.mock=e.emptyList=e.count=e.config=void 0;var n="iconify2",a="iconify",i="iconify-count",c="iconify-version",t=36e5;e.config={local:!0,session:!0};var r=!1;e.count={local:0,session:0},e.emptyList={local:[],session:[]};var u=typeof window=="undefined"?{}:window;function s(l){var p=l+"Storage";try{if(u&&u[p]&&typeof u[p].length=="number")return u[p]}catch(v){}return e.config[l]=!1,null}function d(l,p,v){try{return l.setItem(i,v+""),e.count[p]=v,!0}catch(h){return!1}}function f(l){var p=l.getItem(i);if(p){var v=parseInt(p);return v||0}return 0}e.mock=function(l){r=!1,u=l},e.loadCache=function(){if(!r){r=!0;var l=Math.floor(Date.now()/t)-168;for(var p in e.config)v(p)}function v(h){var g=s(h);if(g){var m=function(O){var y=a+O,I=g.getItem(y);if(typeof I!="string")return!1;var M=!0;try{var w=JSON.parse(I);if(typeof w!="object"||typeof w.cached!="number"||w.cached<l||typeof w.provider!="string"||typeof w.data!="object"||typeof w.data.prefix!="string")M=!1;else{var A=w.provider,k=w.data.prefix,X=S.getStorage(A,k);M=S.addIconSet(X,w.data)}}catch(_){M=!1}return M||g.removeItem(y),M};try{var b=g.getItem(c);if(b!==n)return b&&function(O){try{for(var y=f(O),I=0;I<y;I++)O.removeItem(a+I)}catch(M){}}(g),void function(O,y){try{O.setItem(c,n)}catch(I){}d(O,y,0)}(g,h);for(var j=f(g),P=j-1;P>=0;P--)m(P)||(P===j-1?j--:e.emptyList[h].push(P));d(g,h,j)}catch(O){}}}},e.storeCache=function(l,p){function v(h){if(!e.config[h])return!1;var g=s(h);if(!g)return!1;var m=e.emptyList[h].shift();if(m===void 0&&!d(g,h,(m=e.count[h])+1))return!1;try{var b={cached:Math.floor(Date.now()/t),provider:l,data:p};g.setItem(a+m,JSON.stringify(b))}catch(j){return!1}return!0}r||e.loadCache(),v("local")||v("session")}}),ye=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.toggleBrowserCache=void 0,e.toggleBrowserCache=function(n,a){switch(n){case"local":case"session":G.config[n]=a;break;case"all":for(var i in G.config)G.config[i]=a}}}),Ie=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.defaultConfig=void 0,e.defaultConfig={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1}}),$e=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.sendQuery=void 0,e.sendQuery=function(n,a,i,c,t){var r,u=n.resources.length,s=n.random?Math.floor(Math.random()*u):n.index;if(n.random){var d=n.resources.slice(0);for(r=[];d.length>1;){var f=Math.floor(Math.random()*d.length);r.push(d[f]),d=d.slice(0,f).concat(d.slice(f+1))}r=r.concat(d)}else r=n.resources.slice(s).concat(n.resources.slice(0,s));var l=Date.now(),p="pending",v=0,h=void 0,g=null,m=[],b=[];function j(){g&&(clearTimeout(g),g=null)}function P(){p==="pending"&&(p="aborted"),j(),m.forEach(function(A){A.abort&&A.abort(),A.status==="pending"&&(A.status="aborted")}),m=[]}function O(A,k){k&&(b=[]),typeof A=="function"&&b.push(A)}function y(){return{startTime:l,payload:a,status:p,queriesSent:v,queriesPending:m.length,subscribe:O,abort:P}}function I(){p="failed",b.forEach(function(A){A(void 0,h)})}function M(){m=m.filter(function(A){return A.status==="pending"&&(A.status="aborted"),A.abort&&A.abort(),!1})}function w(){if(p==="pending"){j();var A=r.shift();if(A!==void 0){var k={getQueryStatus:y,status:"pending",resource:A,done:function(U,ee){(function(ze,Re,qe){var Ue=Re===void 0;switch(m=m.filter(function(pe){return pe!==ze}),p){case"pending":break;case"failed":if(Ue||!n.dataAfterTimeout)return;break;default:return}if(Ue)return qe!==void 0&&(h=qe),void(m.length||(r.length?w():I()));if(j(),M(),t&&!n.random){var ve=n.resources.indexOf(ze.resource);ve!==-1&&ve!==n.index&&t(ve)}p="completed",b.forEach(function(pe){pe(Re)})})(k,U,ee)}};m.push(k),v++;var X=typeof n.rotate=="function"?n.rotate(v,l):n.rotate;g=setTimeout(w,X),i(A,a,k)}else{if(m.length){var _=typeof n.timeout=="function"?n.timeout(l):n.timeout;if(_)return void(g=setTimeout(function(){j(),p==="pending"&&(M(),I())},_))}I()}}}return typeof c=="function"&&b.push(c),setTimeout(w),y}}),Be=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.initRedundancy=void 0,e.initRedundancy=function(n){var a=function(t){if(!(typeof t=="object"&&typeof t.resources=="object"&&t.resources instanceof Array&&t.resources.length))throw new Error("Invalid Reduncancy configuration");var r,u=Object.create(null);for(r in Ie.defaultConfig)t[r]!==void 0?u[r]=t[r]:u[r]=Ie.defaultConfig[r];return u}(n),i=[];function c(){i=i.filter(function(t){return t().status==="pending"})}return{query:function(t,r,u){var s=$e.sendQuery(a,t,r,function(d,f){c(),u&&u(d,f)},function(d){a.index=d});return i.push(s),s},find:function(t){var r=i.find(function(u){return t(u)});return r!==void 0?r:null},setIndex:function(t){a.index=t},getIndex:function(){return a.index},cleanup:c}}}),Qe=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.sortIcons=void 0,e.sortIcons=function(n){var a={loaded:[],missing:[],pending:[]},i=Object.create(null);n.sort(function(t,r){return t.provider!==r.provider?t.provider.localeCompare(r.provider):t.prefix!==r.prefix?t.prefix.localeCompare(r.prefix):t.name.localeCompare(r.name)});var c={provider:"",prefix:"",name:""};return n.forEach(function(t){if(c.name!==t.name||c.prefix!==t.prefix||c.provider!==t.provider){c=t;var r=t.provider,u=t.prefix,s=t.name;i[r]===void 0&&(i[r]=Object.create(null));var d=i[r];d[u]===void 0&&(d[u]=S.getStorage(r,u));var f=d[u],l={provider:r,prefix:u,name:s};(f.icons[s]!==void 0?a.loaded:u===""||f.missing[s]!==void 0?a.missing:a.pending).push(l)}}),a}}),je=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.storeCallback=e.updateCallbacks=e.callbacks=void 0,e.callbacks=Object.create(null);var n=Object.create(null);function a(c,t){c.forEach(function(r){var u=r.provider;if(e.callbacks[u]!==void 0){var s=e.callbacks[u],d=r.prefix,f=s[d];f&&(s[d]=f.filter(function(l){return l.id!==t}))}})}e.updateCallbacks=function(c,t){n[c]===void 0&&(n[c]=Object.create(null));var r=n[c];r[t]||(r[t]=!0,setTimeout(function(){if(r[t]=!1,e.callbacks[c]!==void 0&&e.callbacks[c][t]!==void 0){var u=e.callbacks[c][t].slice(0);if(u.length){var s=S.getStorage(c,t),d=!1;u.forEach(function(f){var l=f.icons,p=l.pending.length;l.pending=l.pending.filter(function(v){if(v.prefix!==t)return!0;var h=v.name;if(s.icons[h]!==void 0)l.loaded.push({provider:c,prefix:t,name:h});else{if(s.missing[h]===void 0)return d=!0,!0;l.missing.push({provider:c,prefix:t,name:h})}return!1}),l.pending.length!==p&&(d||a([{provider:c,prefix:t}],f.id),f.callback(l.loaded.slice(0),l.missing.slice(0),l.pending.slice(0),f.abort))})}}}))};var i=0;e.storeCallback=function(c,t,r){var u=i++,s=a.bind(null,r,u);if(!t.pending.length)return s;var d={id:u,icons:t,callback:c,abort:s};return r.forEach(function(f){var l=f.provider,p=f.prefix;e.callbacks[l]===void 0&&(e.callbacks[l]=Object.create(null));var v=e.callbacks[l];v[p]===void 0&&(v[p]=[]),v[p].push(d)}),s}}),re=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.getAPIModule=e.setAPIModule=void 0;var n=Object.create(null);e.setAPIModule=function(a,i){n[a]=i},e.getAPIModule=function(a){return n[a]===void 0?n[""]:n[a]}}),L=x(function(o,e){function n(t){var r;if(typeof t.resources=="string")r=[t.resources];else if(!((r=t.resources)instanceof Array&&r.length))return null;return{resources:r,path:t.path===void 0?"/":t.path,maxURL:t.maxURL?t.maxURL:500,rotate:t.rotate?t.rotate:750,timeout:t.timeout?t.timeout:5e3,random:t.random===!0,index:t.index?t.index:0,dataAfterTimeout:t.dataAfterTimeout!==!1}}Object.defineProperty(e,"__esModule",{value:!0}),e.getAPIConfig=e.setAPIConfig=void 0;for(var a=Object.create(null),i=["https://api.simplesvg.com","https://api.unisvg.com"],c=[];i.length>0;)i.length===1||Math.random()>.5?c.push(i.shift()):c.push(i.pop());a[""]=n({resources:["https://api.iconify.design"].concat(c)}),e.setAPIConfig=function(t,r){var u=n(r);return u!==null&&(a[t]=u,!0)},e.getAPIConfig=function(t){return a[t]}}),He=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.getProviders=e.listToIcons=void 0,e.listToIcons=function(n,a,i){a===void 0&&(a=!0),i===void 0&&(i=!1);var c=[];return n.forEach(function(t){var r=typeof t=="string"?T.stringToIcon(t,!1,i):t;a&&!T.validateIcon(r,i)||c.push({provider:r.provider,prefix:r.prefix,name:r.name})}),c},e.getProviders=function(n){var a=Object.create(null);return n.forEach(function(i){a[i.provider]=!0}),Object.keys(a)}}),ce=x(function(o,e){function n(){}Object.defineProperty(e,"__esModule",{value:!0}),e.API=e.getRedundancyCache=void 0;var a=Object.create(null),i=Object.create(null),c=Object.create(null),t=Object.create(null),r=Object.create(null);function u(f){if(r[f]===void 0){var l=L.getAPIConfig(f);if(!l)return;var p={config:l,redundancy:Be.initRedundancy(l)};r[f]=p}return r[f]}e.getRedundancyCache=u;var s=Object.create(null);function d(f,l,p){function v(){var j=(f===""?"":"@"+f+":")+l,P=Math.floor(Date.now()/6e4);s[j]<P&&(s[j]=P,console.error('Unable to retrieve icons for "'+j+'" because API is not configured properly.'))}i[f]===void 0&&(i[f]=Object.create(null));var h=i[f];t[f]===void 0&&(t[f]=Object.create(null));var g=t[f];a[f]===void 0&&(a[f]=Object.create(null));var m,b=a[f];h[l]===void 0?h[l]=p:h[l]=h[l].concat(p).sort(),g[l]||(g[l]=!0,setTimeout(function(){g[l]=!1;var j=h[l];delete h[l];var P=re.getAPIModule(f);if(P){if(m===void 0){var O=u(f);if(O===void 0)return void v();m=O}P.prepare(f,l,j).forEach(function(y){m.redundancy.query(y,P.send,function(I,M){var w=S.getStorage(f,l);if(typeof I!="object"){if(M!==404)return;var A=Date.now();y.icons.forEach(function(_){w.missing[_]=A})}else try{var k=S.addIconSet(w,I,"all");if(typeof k=="boolean")return;var X=b[l];k.forEach(function(_){delete X[_]}),E.coreModules.cache&&E.coreModules.cache(f,I)}catch(_){console.error(_)}(function(_,U){c[_]===void 0&&(c[_]=Object.create(null));var ee=c[_];ee[U]||(ee[U]=!0,setTimeout(function(){ee[U]=!1,je.updateCallbacks(_,U)}))})(f,l)})})}else v()}))}e.API={isPending:function(f){return a[f.provider]!==void 0&&a[f.provider][f.prefix]!==void 0&&a[f.provider][f.prefix][f.name]!==void 0},loadIcons:function(f,l){var p=He.listToIcons(f,!0,V.allowSimpleNames()),v=Qe.sortIcons(p);if(!v.pending.length){var h=!0;return l&&setTimeout(function(){h&&l(v.loaded,v.missing,v.pending,n)}),function(){h=!1}}var g,m,b=Object.create(null),j=[];v.pending.forEach(function(O){var y=O.provider,I=O.prefix;if(I!==m||y!==g){g=y,m=I,j.push({provider:y,prefix:I}),a[y]===void 0&&(a[y]=Object.create(null));var M=a[y];M[I]===void 0&&(M[I]=Object.create(null)),b[y]===void 0&&(b[y]=Object.create(null));var w=b[y];w[I]===void 0&&(w[I]=[])}});var P=Date.now();return v.pending.forEach(function(O){var y=O.provider,I=O.prefix,M=O.name,w=a[y][I];w[M]===void 0&&(w[M]=P,b[y][I].push(M))}),j.forEach(function(O){var y=O.provider,I=O.prefix;b[y][I].length&&d(y,I,b[y][I])}),l?je.storeCallback(l,v,j):n}}}),Oe=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.APIInternalFunctions=e.APIFunctions=void 0,e.APIFunctions={loadIcons:ce.API.loadIcons,addAPIProvider:L.setAPIConfig},e.APIInternalFunctions={getAPI:ce.getRedundancyCache,getAPIConfig:L.getAPIConfig,setAPIModule:re.setAPIModule}}),Je=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.getAPIModule=void 0;var n=null,a="{prefix}.js?icons={icons}&callback={callback}",i=Object.create(null),c=Object.create(null);function t(){if(n===null){var r=self,u="Iconify",s=".cb";if(r[u]===void 0)s="",r[u="IconifyJSONP"]===void 0&&(r[u]=Object.create(null)),n=r[u];else{var d=r[u];d.cb===void 0&&(d.cb=Object.create(null)),n=d.cb}a=a.replace("{callback}",u+s+".{cb}")}return n}e.getAPIModule=function(r){return{prepare:function(u,s,d){var f=[],l=i[u+":"+s];l===void 0&&(l=function(h,g){var m,b=r(h);if(!b)return 0;if(b.maxURL){var j=0;b.resources.forEach(function(O){var y=O;j=Math.max(j,y.length)}),t(),m=b.maxURL-j-b.path.length-a.replace("{provider}",h).replace("{prefix}",g).replace("{icons}","").length-3}else m=0;var P=h+":"+g;return c[P]=b.path,i[P]=m,m}(u,s));var p={provider:u,prefix:s,icons:[]},v=0;return d.forEach(function(h,g){(v+=h.length+1)>=l&&g>0&&(f.push(p),p={provider:u,prefix:s,icons:[]},v=h.length),p.icons.push(h)}),f.push(p),f},send:function(u,s,d){for(var f=s.provider,l=s.prefix,p=s.icons.join(","),v=f+":"+l,h=l.split("-").shift().slice(0,3),g=t(),m=function(y){var I,M=0;for(I=y.length-1;I>=0;I--)M+=y.charCodeAt(I);return M%999}(f+":"+u+":"+l+":"+p);g[h+m]!==void 0;)m++;var b=h+m,j=c[v]+a.replace("{provider}",f).replace("{prefix}",l).replace("{icons}",p).replace("{cb}",b);g[b]=function(y){delete g[b],d.done(y)};var P=u+j,O=document.createElement("script");O.type="text/javascript",O.async=!0,O.src=P,document.head.appendChild(O)}}}}),$=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.getAPIModule=e.setFetch=void 0;var n="{prefix}.json?icons={icons}",a=Object.create(null),i=Object.create(null),c=null;try{c=fetch}catch(t){}e.setFetch=function(t){c=t},e.getAPIModule=function(t){return{prepare:function(r,u,s){var d=[],f=a[u];f===void 0&&(f=function(v,h){var g,m=t(v);if(!m)return 0;if(m.maxURL){var b=0;m.resources.forEach(function(P){var O=P;b=Math.max(b,O.length)}),g=m.maxURL-b-m.path.length-n.replace("{provider}",v).replace("{prefix}",h).replace("{icons}","").length}else g=0;var j=v+":"+h;return i[j]=m.path,a[j]=g,g}(r,u));var l={provider:r,prefix:u,icons:[]},p=0;return s.forEach(function(v,h){(p+=v.length+1)>=f&&h>0&&(d.push(l),l={provider:r,prefix:u,icons:[]},p=v.length),l.icons.push(v)}),d.push(l),d},send:function(r,u,s){var d=u.provider,f=u.prefix,l=u.icons.join(","),p=i[d+":"+f]+n.replace("{provider}",d).replace("{prefix}",f).replace("{icons}",l);c?c(r+p).then(function(v){if(v.status===200)return v.json();s.done(void 0,v.status)}).then(function(v){typeof v=="object"&&v!==null&&s.done(v)}).catch(function(v){s.done(void 0,v.errno)}):s.done(void 0,424)}}}}),z="iconifyFinder"+Date.now(),B="iconifyData"+Date.now();function xe(o,e,n,a){var i;try{i=document.createElement("span")}catch(M){return a?"":null}var c=ae.iconToSVG(n,D.mergeCustomisations(D.defaults,e)),t=o.element,r=o.finder,u=o.name,s=t?t.getAttribute("class"):"",d=r?r.classFilter(s?s.split(/\s+/):[]):[],f='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="'+("iconify iconify--"+u.prefix+(u.provider===""?"":" iconify--"+u.provider)+(d.length?" "+d.join(" "):""))+'">'+be.replaceIDs(c.body)+"</svg>";i.innerHTML=f;var l=i.childNodes[0],p=l.style,v=c.attributes;if(Object.keys(v).forEach(function(M){l.setAttribute(M,v[M])}),c.inline&&(p.verticalAlign="-0.125em"),t){for(var h=t.attributes,g=0;g<h.length;g++){var m=h.item(g);if(m){var b=m.name;if(b!=="class"&&b!=="style"&&v[b]===void 0)try{l.setAttribute(b,m.value)}catch(M){}}}for(var j=t.style,P=0;P<j.length;P++){var O=j[P];p[O]=j[O]}}if(r){var y={name:u,status:"loaded",customisations:e};l[B]=y,l[z]=r}var I=a?i.innerHTML:l;return t&&t.parentNode?t.parentNode.replaceChild(l,t):i.removeChild(l),I}var N=[];function Q(o){for(var e=0;e<N.length;e++){var n=N[e];if((typeof n.node=="function"?n.node():n.node)===o)return n}}function Pe(o,e){e===void 0&&(e=!1);var n=Q(o);return n?(n.temporary&&(n.temporary=e),n):(n={node:o,temporary:e},N.push(n),n)}function H(){return N}var J=null,Ye={childList:!0,subtree:!0,attributes:!0};function Me(o){if(o.observer){var e=o.observer;e.pendingScan||(e.pendingScan=setTimeout(function(){delete e.pendingScan,J&&J(o)}))}}function Ze(o,e){if(o.observer){var n=o.observer;if(!n.pendingScan)for(var a=0;a<e.length;a++){var i=e[a];if(i.addedNodes&&i.addedNodes.length>0||i.type==="attributes"&&i.target[z]!==void 0)return void(n.paused||Me(o))}}}function we(o,e){o.observer.instance.observe(e,Ye)}function ne(o){var e=o.observer;if(!e||!e.instance){var n=typeof o.node=="function"?o.node():o.node;n&&(e||(e={paused:0},o.observer=e),e.instance=new MutationObserver(Ze.bind(null,o)),we(o,n),e.paused||Me(o))}}function Ae(){H().forEach(ne)}function Se(o){if(o.observer){var e=o.observer;e.pendingScan&&(clearTimeout(e.pendingScan),delete e.pendingScan),e.instance&&(e.instance.disconnect(),delete e.instance)}}function Ke(o){var e=J!==null;J!==o&&(J=o,e&&H().forEach(Se)),e?Ae():function(n){var a=document;a.readyState==="complete"||a.readyState!=="loading"&&!a.documentElement.doScroll?n():(a.addEventListener("DOMContentLoaded",n),window.addEventListener("load",n))}(Ae)}function ue(o){(o?[o]:H()).forEach(function(e){if(e.observer){var n=e.observer;n.paused++,!(n.paused>1)&&n.instance&&n.instance.disconnect()}else e.observer={paused:1}})}function fe(o){(o?[o]:H()).forEach(function(e){if(e.observer){var n=e.observer;if(n.paused&&(n.paused--,!n.paused)){var a=typeof e.node=="function"?e.node():e.node;if(!a)return;n.instance?we(e,a):ne(e)}}else ne(e)})}function _e(o,e){e===void 0&&(e=!1);var n=Pe(o,e);return ne(n),n}function Ee(o){var e=Q(o);e&&(Se(e),function(n){N=N.filter(function(a){var i=typeof a.node=="function"?a.node():a.node;return n!==i})}(o))}var le=[];function ke(o){return typeof o=="string"&&(o=T.stringToIcon(o)),o!==null&&T.validateIcon(o)?o:null}function We(o){var e=[];le.forEach(function(a){var i=a.find(o);Array.prototype.forEach.call(i,function(c){var t=c;if(t[z]===void 0||t[z]===a){var r=ke(a.name(t));if(r!==null){t[z]=a;var u={element:t,finder:a,name:r};e.push(u)}}})});var n=o.querySelectorAll("svg.iconify");return Array.prototype.forEach.call(n,function(a){var i=a,c=i[z],t=i[B];if(c&&t){var r=ke(c.name(i));if(r!==null){var u,s=!1;if(r.prefix!==t.name.prefix||r.name!==t.name.name?s=!0:(u=c.customisations(i),function(f,l){var p=Object.keys(f),v=Object.keys(l);if(p.length!==v.length)return!1;for(var h=0;h<p.length;h++){var g=p[h];if(l[g]!==f[g])return!1}return!0}(t.customisations,u)||(s=!0)),s){var d={element:i,finder:c,name:r,customisations:u};e.push(d)}}}}),e}var Y=!1;function Xe(){Y||(Y=!0,setTimeout(function(){Y&&(Y=!1,R())}))}function R(o,e){e===void 0&&(e=!1),Y=!1;var n=Object.create(null);if((o?[o]:H()).forEach(function(i){var c=typeof i.node=="function"?i.node():i.node;if(c&&c.querySelectorAll){var t=!1,r=!1;We(c).forEach(function(u){var s,d,f=u.element,l=u.name,p=l.provider,v=l.prefix,h=l.name,g=f[B];if(g!==void 0&&(s=g.name,d=l,s!==null&&d!==null&&s.name===d.name&&s.prefix===d.prefix))switch(g.status){case"missing":return;case"loading":if(E.coreModules.api&&E.coreModules.api.isPending({provider:p,prefix:v,name:h}))return void(t=!0)}var m=S.getStorage(p,v);if(m.icons[h]===void 0){if(m.missing[h])return g={name:l,status:"missing",customisations:{}},void(f[B]=g);if(E.coreModules.api&&!E.coreModules.api.isPending({provider:p,prefix:v,name:h})){n[p]===void 0&&(n[p]=Object.create(null));var b=n[p];b[v]===void 0&&(b[v]=Object.create(null)),b[v][h]=!0}g={name:l,status:"loading",customisations:{}},f[B]=g,t=!0}else{!r&&i.observer&&(ue(i),r=!0);var j=u.customisations!==void 0?u.customisations:u.finder.customisations(f);xe(u,j,S.getIcon(m,h))}}),i.temporary&&!t?Ee(c):e&&t?_e(c,!0):r&&i.observer&&fe(i)}}),E.coreModules.api){var a=E.coreModules.api;Object.keys(n).forEach(function(i){var c=n[i];Object.keys(c).forEach(function(t){a.loadIcons(Object.keys(c[t]).map(function(r){return{provider:i,prefix:t,name:r}}),Xe)})})}}var et=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.rotateFromString=void 0,e.rotateFromString=function(n){var a=n.replace(/^-?[0-9.]*/,"");function i(u){for(;u<0;)u+=4;return u%4}if(a===""){var c=parseInt(n);return isNaN(c)?0:i(c)}if(a!==n){var t=0;switch(a){case"%":t=25;break;case"deg":t=90}if(t){var r=parseFloat(n.slice(0,n.length-a.length));return isNaN(r)?0:(r/=t)%1==0?i(r):0}}return 0}}),Ce=x(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.alignmentFromString=e.flipFromString=void 0;var n=/[\s,]+/;e.flipFromString=function(a,i){i.split(n).forEach(function(c){switch(c.trim()){case"horizontal":a.hFlip=!0;break;case"vertical":a.vFlip=!0}})},e.alignmentFromString=function(a,i){i.split(n).forEach(function(c){var t=c.trim();switch(t){case"left":case"center":case"right":a.hAlign=t;break;case"top":case"middle":case"bottom":a.vAlign=t;break;case"slice":case"crop":a.slice=!0;break;case"meet":a.slice=!1}})}});function q(o,e){return o.hasAttribute(e)}function Z(o,e){return o.getAttribute(e)}var tt=["inline","hFlip","vFlip"],rt=["width","height"],nt="iconify-inline",it={find:function(o){return o.querySelectorAll("i.iconify, span.iconify, i.iconify-inline, span.iconify-inline")},name:function(o){return q(o,"data-icon")?Z(o,"data-icon"):null},customisations:function(o,e){e===void 0&&(e={inline:!1});var n=e,a=o.getAttribute("class");if((a?a.split(/\s+/):[]).indexOf(nt)!==-1&&(n.inline=!0),q(o,"data-rotate")){var i=et.rotateFromString(Z(o,"data-rotate"));i&&(n.rotate=i)}return q(o,"data-flip")&&Ce.flipFromString(n,Z(o,"data-flip")),q(o,"data-align")&&Ce.alignmentFromString(n,Z(o,"data-align")),tt.forEach(function(c){if(q(o,"data-"+c)){var t=function(r,u){var s=r.getAttribute(u);return s===u||s==="true"||s!==""&&s!=="false"&&null}(o,"data-"+c);typeof t=="boolean"&&(n[c]=t)}}),rt.forEach(function(c){if(q(o,"data-"+c)){var t=Z(o,"data-"+c);t!==""&&(n[c]=t)}}),n},classFilter:function(o){var e=[];return o.forEach(function(n){n!=="iconify"&&n!==""&&n.slice(0,9)!=="iconify--"&&e.push(n)}),e}};function Fe(o,e,n){var a=V.getIconData(o);return a?xe({name:T.stringToIcon(o)},D.mergeCustomisations(D.defaults,typeof e=="object"?e:{}),a,n):null}var ot={getVersion:function(){return"2.0.4"},renderSVG:function(o,e){return Fe(o,e,!1)},renderHTML:function(o,e){return Fe(o,e,!0)},renderIcon:function(o,e){var n=V.getIconData(o);if(!n)return null;var a=D.mergeCustomisations(D.defaults,typeof e=="object"?e:{});return ae.iconToSVG(n,a)},scan:function(o){o?function(e){var n=Q(e);n?R(n):R({node:e,temporary:!0},!0)}(o):R()},observe:function(o){_e(o)},stopObserving:function(o){Ee(o)},pauseObserver:function(o){if(o){var e=Q(o);e&&ue(e)}else ue()},resumeObserver:function(o){if(o){var e=Q(o);e&&fe(e)}else fe()}};if(typeof document!="undefined"&&typeof window!="undefined"){(function(){if(document.documentElement)return Pe(document.documentElement);N.push({node:function(){return document.documentElement}})})(),function(o){le.indexOf(o)===-1&&le.push(o)}(it);var Te=window;if(Te.IconifyPreload!==void 0){var K=Te.IconifyPreload,De="Invalid IconifyPreload syntax.";typeof K=="object"&&K!==null&&(K instanceof Array?K:[K]).forEach(function(o){try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!V.storageFunctions.addCollection(o))&&console.error(De)}catch(e){console.error(De)}})}setTimeout(function(){Ke(R),R()})}var at={enableCache:function(o,e){return ye.toggleBrowserCache(o,e!==!1)},disableCache:function(o){return ye.toggleBrowserCache(o,!0)}},se={_api:Oe.APIInternalFunctions};[V.storageFunctions,Ge.builderFunctions,ot,at,Oe.APIFunctions].forEach(function(o){for(var e in o)se[e]=o[e]}),E.coreModules.api=ce.API;var W=$.getAPIModule;try{typeof document!="undefined"&&typeof window!="undefined"&&(W=typeof fetch=="function"&&typeof Promise=="function"?$.getAPIModule:Je.getAPIModule)}catch(o){}if(re.setAPIModule("",W(L.getAPIConfig)),se._api.setFetch=function(o){$.setFetch(o),W!==$.getAPIModule&&(W=$.getAPIModule,re.setAPIModule("",W(L.getAPIConfig)))},typeof document!="undefined"&&typeof window!="undefined"){E.coreModules.cache=G.storeCache,G.loadCache();var Ne=window;if(Ne.IconifyProviders!==void 0){var ie=Ne.IconifyProviders;if(typeof ie=="object"&&ie!==null)for(var de in ie){var Le="IconifyProviders["+de+"] is invalid.";try{var oe=ie[de];if(typeof oe!="object"||!oe||oe.resources===void 0)continue;L.setAPIConfig(de,oe)||console.error(Le)}catch(o){console.error(Le)}}}}return se}();try{self.Iconify===void 0&&(self.Iconify=he)}catch(x){}try{F.__esModule=!0,F.default=he}catch(x){}})(Ve);var ut=ct(Ve);export{ut as I};

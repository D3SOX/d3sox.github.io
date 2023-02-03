(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.1.0
*/const kt=Object.freeze({left:0,top:0,width:16,height:16}),U=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),F=Object.freeze({...kt,...U}),nt=Object.freeze({...F,body:"",hidden:!1});function ae(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function bt(t,e){const n=ae(t,e);for(const r in nt)r in U?r in t&&!(r in n)&&(n[r]=U[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function le(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,u=c&&s(c);u&&(o[i]=[c].concat(u))}return o[i]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function de(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let s={};function i(c){s=bt(r[c]||o[c],s)}return i(e),n.forEach(i),bt(t,s)}function Pt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=le(t);for(const o in r){const s=r[o];s&&(e(o,de(t,o,s)),n.push(o))}return n}const A=/^[a-z0-9]+(-[a-z0-9]+)*$/,T=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),u=o.pop(),f={provider:o.length>0?o[0]:r,prefix:u,name:c};return e&&!H(f)?null:f}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return e&&!H(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return e&&!H(c,n)?null:c}return null},H=(t,e)=>t?!!((t.provider===""||t.provider.match(A))&&(e&&t.prefix===""||t.prefix.match(A))&&t.name.match(A)):!1,pe={provider:"",aliases:{},not_found:{},...kt};function Z(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function At(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Z(t,pe))return null;const n=e.icons;for(const o in n){const s=n[o];if(!o.match(A)||typeof s.body!="string"||!Z(s,nt))return null}const r=e.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(A)||typeof i!="string"||!n[i]&&!r[i]||!Z(s,nt))return null}return e}const _=Object.create(null);function he(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function S(t,e){const n=_[t]||(_[t]=Object.create(null));return n[e]||(n[e]=he(t,e))}function pt(t,e){return At(e)?Pt(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function ge(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}function me(t,e){let n=[];return(typeof t=="string"?[t]:Object.keys(_)).forEach(o=>{(typeof o=="string"&&typeof e=="string"?[e]:Object.keys(_[o]||{})).forEach(i=>{const c=S(o,i);n=n.concat(Object.keys(c.icons).map(u=>(o!==""?"@"+o+":":"")+i+":"+u))})}),n}let j=!1;function ye(t){return typeof t=="boolean"&&(j=t),j}function N(t){const e=typeof t=="string"?T(t,!0,j):t;if(e){const n=S(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Lt(t,e){const n=T(t,!0,j);if(!n)return!1;const r=S(n.provider,n.prefix);return ge(r,n.name,e)}function jt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),j&&!e&&!t.prefix){let o=!1;return At(t)&&(t.prefix="",Pt(t,(s,i)=>{i&&Lt(s,i)&&(o=!0)})),o}const n=t.prefix;if(!H({provider:e,prefix:n,name:"a"}))return!1;const r=S(e,n);return!!pt(r,t)}function be(t){return!!N(t)}function we(t){const e=N(t);return e?{...F,...e}:null}const Mt=Object.freeze({width:null,height:null}),Ft=Object.freeze({...Mt,...U}),Se=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ve=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ot(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(Se);if(r===null||!r.length)return t;const o=[];let s=r.shift(),i=ve.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*e*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const xe=t=>t==="unset"||t==="undefined"||t==="none";function K(t,e){const n={...F,...t},r={...Ft,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(g=>{const m=[],x=g.hFlip,B=g.vFlip;let y=g.rotate;x?B?y+=2:(m.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),m.push("scale(-1 1)"),o.top=o.left=0):B&&(m.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),m.push("scale(1 -1)"),o.top=o.left=0);let b;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:b=o.height/2+o.top,m.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:m.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,m.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}y%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),m.length&&(s='<g transform="'+m.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,u=o.width,f=o.height;let a,l;i===null?(l=c===null?"1em":c==="auto"?f:c,a=ot(l,u/f)):(a=i==="auto"?u:i,l=c===null?ot(a,f/u):c==="auto"?f:c);const d={},h=(g,m)=>{xe(m)||(d[g]=m.toString())};return h("width",a),h("height",l),d.viewBox=o.left.toString()+" "+o.top.toString()+" "+u.toString()+" "+f.toString(),{attributes:d,body:s}}const Ie=/\sid="(\S+)"/g,Ce="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ee=0;function Nt(t,e=Ce){const n=[];let r;for(;r=Ie.exec(t);)n.push(r[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof e=="function"?e(s):e+(Ee++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const C={local:!0,session:!0},Dt={local:new Set,session:new Set};let ht=!1;function Oe(t){ht=t}const wt="iconify2",M="iconify",Rt=M+"-count",St=M+"-version",Bt=36e5,Te=168;function rt(t,e){try{return t.getItem(e)}catch{}}function gt(t,e,n){try{return t.setItem(e,n),!0}catch{}}function vt(t,e){try{t.removeItem(e)}catch{}}function st(t,e){return gt(t,Rt,e.toString())}function it(t){return parseInt(rt(t,Rt))||0}let V=typeof window>"u"?{}:window;function qt(t){const e=t+"Storage";try{if(V&&V[e]&&typeof V[e].length=="number")return V[e]}catch{}C[t]=!1}function Vt(t,e){const n=qt(t);if(!n)return;const r=rt(n,St);if(r!==wt){if(r){const c=it(n);for(let u=0;u<c;u++)vt(n,M+u.toString())}gt(n,St,wt),st(n,0);return}const o=Math.floor(Date.now()/Bt)-Te,s=c=>{const u=M+c.toString(),f=rt(n,u);if(typeof f=="string"){try{const a=JSON.parse(f);if(typeof a=="object"&&typeof a.cached=="number"&&a.cached>o&&typeof a.provider=="string"&&typeof a.data=="object"&&typeof a.data.prefix=="string"&&e(a,c))return!0}catch{}vt(n,u)}};let i=it(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,st(n,i)):Dt[t].add(c))}function zt(){if(!ht){Oe(!0);for(const t in C)Vt(t,e=>{const n=e.data,r=e.provider,o=n.prefix,s=S(r,o);if(!pt(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Ht(t,e){switch(t){case"local":case"session":C[t]=e;break;case"all":for(const n in C)C[n]=e;break}}const ct=Object.create(null);function Qt(t,e){ct[t]=e}function ut(t){return ct[t]||ct[""]}function mt(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const J=Object.create(null),P=["https://api.simplesvg.com","https://api.unisvg.com"],Q=[];for(;P.length>0;)P.length===1||Math.random()>.5?Q.push(P.shift()):Q.push(P.pop());J[""]=mt({resources:["https://api.iconify.design"].concat(Q)});function Ut(t,e){const n=mt(e);return n===null?!1:(J[t]=n,!0)}function W(t){return J[t]}function ke(){return Object.keys(J)}const Pe=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let $=Pe();function Ae(t){$=t}function Le(){return $}function je(t,e){const n=W(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=e+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Me(t){return t===404}const Fe=(t,e,n)=>{const r=[],o=je(t,e),s="icons";let i={type:s,provider:t,prefix:e,icons:[]},c=0;return n.forEach((u,f)=>{c+=u.length+1,c>=o&&f>0&&(r.push(i),i={type:s,provider:t,prefix:e,icons:[]},c=u.length),i.icons.push(u)}),r.push(i),r};function Ne(t){if(typeof t=="string"){const e=W(t);if(e)return e.path}return"/"}const De=(t,e,n)=>{if(!$){n("abort",424);return}let r=Ne(e.provider);switch(e.type){case"icons":{const s=e.prefix,c=e.icons.join(","),u=new URLSearchParams({icons:c});r+=s+".json?"+u.toString();break}case"custom":{const s=e.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;$(t+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Me(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Re={prepare:Fe,send:De};function Be(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,u=n[s]||(n[s]=Object.create(null)),f=u[i]||(u[i]=S(s,i));let a;c in f.icons?a=e.loaded:i===""||f.missing.has(c)?a=e.missing:a=e.pending;const l={provider:s,prefix:i,name:c};a.push(l)}),e}function _t(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function qe(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(u=>{if(u.prefix!==o)return!0;const f=u.name;if(t.icons[f])i.loaded.push({provider:r,prefix:o,name:f});else if(t.missing.has(f))i.missing.push({provider:r,prefix:o,name:f});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||_t([t],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Ve=0;function ze(t,e,n){const r=Ve++,o=_t.bind(null,n,r);if(!e.pending.length)return o;const s={id:r,icons:e,callback:t,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function He(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const s=typeof o=="string"?T(o,e,n):o;s&&r.push(s)}),r}var Qe={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ue(t,e,n,r){const o=t.resources.length,s=t.random?Math.floor(Math.random()*o):t.index;let i;if(t.random){let p=t.resources.slice(0);for(i=[];p.length>1;){const w=Math.floor(Math.random()*p.length);i.push(p[w]),p=p.slice(0,w).concat(p.slice(w+1))}i=i.concat(p)}else i=t.resources.slice(s).concat(t.resources.slice(0,s));const c=Date.now();let u="pending",f=0,a,l=null,d=[],h=[];typeof r=="function"&&h.push(r);function g(){l&&(clearTimeout(l),l=null)}function m(){u==="pending"&&(u="aborted"),g(),d.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),d=[]}function x(p,w){w&&(h=[]),typeof p=="function"&&h.push(p)}function B(){return{startTime:c,payload:e,status:u,queriesSent:f,queriesPending:d.length,subscribe:x,abort:m}}function y(){u="failed",h.forEach(p=>{p(void 0,a)})}function b(){d.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),d=[]}function fe(p,w,k){const q=w!=="success";switch(d=d.filter(I=>I!==p),u){case"pending":break;case"failed":if(q||!t.dataAfterTimeout)return;break;default:return}if(w==="abort"){a=k,y();return}if(q){a=k,d.length||(i.length?Y():y());return}if(g(),b(),!t.random){const I=t.resources.indexOf(p.resource);I!==-1&&I!==t.index&&(t.index=I)}u="completed",h.forEach(I=>{I(k)})}function Y(){if(u!=="pending")return;g();const p=i.shift();if(p===void 0){if(d.length){l=setTimeout(()=>{g(),u==="pending"&&(b(),y())},t.timeout);return}y();return}const w={status:"pending",resource:p,callback:(k,q)=>{fe(w,k,q)}};d.push(w),f++,l=setTimeout(Y,t.rotate),n(p,e,w.callback)}return setTimeout(Y),B}function $t(t){const e={...Qe,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,u,f){const a=Ue(e,c,u,(l,d)=>{r(),f&&f(l,d)});return n.push(a),a}function s(c){return n.find(u=>c(u))||null}return{query:o,find:s,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function xt(){}const tt=Object.create(null);function _e(t){if(!tt[t]){const e=W(t);if(!e)return;const n=$t(e),r={config:e,redundancy:n};tt[t]=r}return tt[t]}function Gt(t,e,n){let r,o;if(typeof t=="string"){const s=ut(t);if(!s)return n(void 0,424),xt;o=s.send;const i=_e(t);i&&(r=i.redundancy)}else{const s=mt(t);if(s){r=$t(s);const i=t.resources?t.resources[0]:"",c=ut(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),xt):r.query(e,o,n)().abort}function $e(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in C)Vt(r,o=>{const s=o.data;return o.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function Ge(t,e){ht||zt();function n(r){let o;if(!C[r]||!(o=qt(r)))return;const s=Dt[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=it(o),!st(o,i+1))return;const c={cached:Math.floor(Date.now()/Bt),provider:t.provider,data:e};return gt(o,M+i.toString(),JSON.stringify(c))}e.lastModified&&!$e(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function It(){}function Ke(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,qe(t)}))}function Je(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let s;if(!o||!(s=ut(n)))return;s.prepare(n,r,o).forEach(c=>{Gt(n,c,u=>{if(typeof u!="object")c.icons.forEach(f=>{t.missing.add(f)});else try{const f=pt(t,u);if(!f.length)return;const a=t.pendingIcons;a&&f.forEach(l=>{a.delete(l)}),Ge(t,u)}catch(f){console.error(f)}Ke(t)})})}))}const We=t=>{const n=S(t.provider,t.prefix).pendingIcons;return!!(n&&n.has(t.name))},yt=(t,e)=>{const n=He(t,!0,ye()),r=Be(n);if(!r.pending.length){let u=!0;return e&&setTimeout(()=>{u&&e(r.loaded,r.missing,r.pending,It)}),()=>{u=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(u=>{const{provider:f,prefix:a}=u;if(a===c&&f===i)return;i=f,c=a,s.push(S(f,a));const l=o[f]||(o[f]=Object.create(null));l[a]||(l[a]=[])}),r.pending.forEach(u=>{const{provider:f,prefix:a,name:l}=u,d=S(f,a),h=d.pendingIcons||(d.pendingIcons=new Set);h.has(l)||(h.add(l),o[f][a].push(l))}),s.forEach(u=>{const{provider:f,prefix:a}=u;o[f][a].length&&Je(u,o[f][a])}),e?ze(e,r,s):It},Xe=t=>new Promise((e,n)=>{const r=typeof t=="string"?T(t,!0):t;if(!r){n(t);return}yt([r||t],o=>{if(o.length&&r){const s=N(r);if(s){e({...F,...s});return}}n(t)})});function Kt(t,e){const n={...t};for(const r in e){const o=e[r],s=typeof o;r in Mt?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const X={...Ft,inline:!1},et="iconify",ft="iconify-inline",v="iconifyData"+Date.now();let E=[];function D(t){for(let e=0;e<E.length;e++){const n=E[e];if((typeof n.node=="function"?n.node():n.node)===t)return n}}function Jt(t,e=!1){let n=D(t);return n?(n.temporary&&(n.temporary=e),n):(n={node:t,temporary:e},E.push(n),n)}function Ye(){if(document.documentElement)return Jt(document.documentElement);E.push({node:()=>document.documentElement})}function Ze(t){E=E.filter(e=>t!==e&&t!==(typeof e.node=="function"?e.node():e.node))}function R(){return E}function tn(t){const e=document;e.readyState&&e.readyState!=="loading"?t():e.addEventListener("DOMContentLoaded",t)}let L=null;const en={childList:!0,subtree:!0,attributes:!0};function Wt(t){if(!t.observer)return;const e=t.observer;e.pendingScan||(e.pendingScan=setTimeout(()=>{delete e.pendingScan,L&&L(t)}))}function nn(t,e){if(!t.observer)return;const n=t.observer;if(!n.pendingScan)for(let r=0;r<e.length;r++){const o=e[r];if(o.addedNodes&&o.addedNodes.length>0||o.type==="attributes"&&o.target[v]!==void 0){n.paused||Wt(t);return}}}function Xt(t,e){t.observer.instance.observe(e,en)}function G(t){let e=t.observer;if(e&&e.instance)return;const n=typeof t.node=="function"?t.node():t.node;!n||!window||(e||(e={paused:0},t.observer=e),e.instance=new window.MutationObserver(nn.bind(null,t)),Xt(t,n),e.paused||Wt(t))}function Ct(){R().forEach(G)}function Yt(t){if(!t.observer)return;const e=t.observer;e.pendingScan&&(clearTimeout(e.pendingScan),delete e.pendingScan),e.instance&&(e.instance.disconnect(),delete e.instance)}function on(t){const e=L!==null;if(L!==t&&(L=t,e&&R().forEach(Yt)),e){Ct();return}tn(Ct)}function at(t){(t?[t]:R()).forEach(e=>{if(!e.observer){e.observer={paused:1};return}const n=e.observer;if(n.paused++,n.paused>1||!n.instance)return;n.instance.disconnect()})}function rn(t){if(t){const e=D(t);e&&at(e)}else at()}function lt(t){(t?[t]:R()).forEach(e=>{if(!e.observer){G(e);return}const n=e.observer;if(n.paused&&(n.paused--,!n.paused)){const r=typeof e.node=="function"?e.node():e.node;if(r)n.instance?Xt(e,r):G(e);else return}})}function sn(t){if(t){const e=D(t);e&&lt(e)}else lt()}function Zt(t,e=!1){const n=Jt(t,e);return G(n),n}function te(t){const e=D(t);e&&(Yt(e),Ze(t))}function cn(t,e){if(t.name!==e.name||t.mode!==e.mode)return!0;const n=t.customisations,r=e.customisations;for(const o in X)if(n[o]!==r[o])return!0;return!1}function un(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return e}const fn=/[\s,]+/;function an(t,e){e.split(fn).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}const ln=["width","height"],dn=["inline","hFlip","vFlip"];function pn(t,e){return t===e||t==="true"?!0:t===""||t==="false"?!1:null}function hn(t){const e=t.getAttribute("data-icon"),n=typeof e=="string"&&T(e,!0);if(!n)return null;const r={...X,inline:t.classList&&t.classList.contains(ft)};ln.forEach(c=>{const u=t.getAttribute("data-"+c);u&&(r[c]=u)});const o=t.getAttribute("data-rotate");typeof o=="string"&&(r.rotate=un(o));const s=t.getAttribute("data-flip");typeof s=="string"&&an(r,s),dn.forEach(c=>{const u="data-"+c,f=pn(t.getAttribute(u),u);typeof f=="boolean"&&(r[c]=f)});const i=t.getAttribute("data-mode");return{name:e,icon:n,customisations:r,mode:i}}const gn="svg."+et+", i."+et+", span."+et+", i."+ft+", span."+ft;function mn(t){const e=[];return t.querySelectorAll(gn).forEach(n=>{const r=n[v]||n.tagName.toLowerCase()!=="svg"?hn(n):null;r&&e.push({node:n,props:r})}),e}function ee(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function ne(t){const e=new Set(["iconify"]);return["provider","prefix"].forEach(n=>{t[n]&&e.add("iconify--"+t[n])}),e}function oe(t,e,n,r){const o=t.classList;if(r){const i=r.classList;Array.from(i).forEach(c=>{o.add(c)})}const s=[];return e.forEach(i=>{o.contains(i)?n.has(i)&&s.push(i):(o.add(i),s.push(i))}),n.forEach(i=>{e.has(i)||o.remove(i)}),s}function re(t,e,n){const r=t.style;(n||[]).forEach(s=>{r.removeProperty(s)});const o=[];for(const s in e)r.getPropertyValue(s)||(o.push(s),r.setProperty(s,e[s]));return o}function se(t,e,n){let r;try{r=document.createElement("span")}catch{return t}const o=e.customisations,s=K(n,o),i=t[v],c=ee(Nt(s.body),{"aria-hidden":"true",role:"img",...s.attributes});r.innerHTML=c;const u=r.childNodes[0],f=t.attributes;for(let g=0;g<f.length;g++){const m=f.item(g),x=m.name;x!=="class"&&!u.hasAttribute(x)&&u.setAttribute(x,m.value)}const a=ne(e.icon),l=oe(u,a,new Set(i&&i.addedClasses),t),d=re(u,o.inline?{"vertical-align":"-0.125em"}:{},i&&i.addedStyles),h={...e,status:"loaded",addedClasses:l,addedStyles:d};return u[v]=h,t.parentNode&&t.parentNode.replaceChild(u,t),u}function yn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function bn(t){return'url("data:image/svg+xml,'+yn(t)+'")'}const wn={display:"inline-block"},dt={"background-color":"currentColor"},ie={"background-color":"transparent"},Et={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ot={"-webkit-mask":dt,mask:dt,background:ie};for(const t in Ot){const e=Ot[t];for(const n in Et)e[t+"-"+n]=Et[n]}function Tt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function Sn(t,e,n,r){const o=e.customisations,s=K(n,o),i=s.attributes,c=t[v],u=ee(s.body,{...i,width:n.width+"",height:n.height+""}),f=ne(e.icon),a=oe(t,f,new Set(c&&c.addedClasses)),d={"--svg":bn(u),width:Tt(i.width),height:Tt(i.height),...wn,...r?dt:ie};o.inline&&(d["vertical-align"]="-0.125em");const h=re(t,d,c&&c.addedStyles),g={...e,status:"loaded",addedClasses:a,addedStyles:h};return t[v]=g,t}let z=!1;function vn(){z||(z=!0,setTimeout(()=>{z&&(z=!1,O())}))}function O(t,e=!1){const n=Object.create(null);function r(o,s){const{provider:i,prefix:c,name:u}=o,f=S(i,c),a=f.icons[u];if(a)return{status:"loaded",icon:a};if(f.missing.has(u))return{status:"missing"};if(s&&!We(o)){const l=n[i]||(n[i]=Object.create(null));(l[c]||(l[c]=new Set)).add(u)}return{status:"loading"}}(t?[t]:R()).forEach(o=>{const s=typeof o.node=="function"?o.node():o.node;if(!s||!s.querySelectorAll)return;let i=!1,c=!1;function u(f,a,l){if(c||(c=!0,at(o)),f.tagName.toUpperCase()!=="SVG"){const d=a.mode,h=d==="mask"||(d==="bg"?!1:d==="style"?l.body.indexOf("currentColor")!==-1:null);if(typeof h=="boolean"){Sn(f,a,{...F,...l},h);return}}se(f,a,l)}mn(s).forEach(({node:f,props:a})=>{const l=f[v];if(!l){const{status:h,icon:g}=r(a.icon,!0);if(g){u(f,a,g);return}i=i||h==="loading",f[v]={...a,status:h};return}let d;if(cn(l,a)){if(d=r(a.icon,l.name!==a.name),!d.icon){i=i||d.status==="loading",Object.assign(l,{...a,status:d.status});return}}else{if(l.status!=="loading")return;if(d=r(a.icon,!1),!d.icon){l.status=d.status;return}}u(f,a,d.icon)}),o.temporary&&!i?te(s):e&&i?Zt(s,!0):c&&o.observer&&lt(o)});for(const o in n){const s=n[o];for(const i in s){const c=s[i];yt(Array.from(c).map(u=>({provider:o,prefix:i,name:u})),vn)}}}function xn(t){const e=D(t);e?O(e):O({node:t,temporary:!0},!0)}function ce(t,e,n=!1){const r=N(t);if(!r)return null;const o=T(t),s=Kt(X,e||{}),i=se(document.createElement("span"),{name:t,icon:o,customisations:s},r);return n?i.outerHTML:i}function In(){return"3.1.0"}function Cn(t,e){return ce(t,e,!1)}function En(t,e){return ce(t,e,!0)}function On(t,e){const n=N(t);if(!n)return null;const r=Kt(X,e||{});return K(n,r)}function Tn(t){t?xn(t):O()}if(typeof document<"u"&&typeof window<"u"){Ye();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!jt(r))&&console.error(n)}catch{console.error(n)}})}setTimeout(()=>{on(O),O()})}function kn(t,e){Ht(t,e!==!1)}function Pn(t){Ht(t,!0)}Qt("",Re);if(typeof document<"u"&&typeof window<"u"){zt();const t=window;if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(const n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Ut(n,o)||console.error(r)}catch{console.error(r)}}}}const An={getAPIConfig:W,setAPIModule:Qt,sendAPIQuery:Gt,setFetch:Ae,getFetch:Le,listAPIProviders:ke},ue={_api:An,addAPIProvider:Ut,loadIcons:yt,loadIcon:Xe,iconExists:be,getIcon:we,listIcons:me,addIcon:Lt,addCollection:jt,replaceIDs:Nt,calculateSize:ot,buildIcon:K,getVersion:In,renderSVG:Cn,renderHTML:En,renderIcon:On,scan:Tn,observe:Zt,stopObserving:te,pauseObserver:rn,resumeObserver:sn,enableCache:kn,disableCache:Pn};try{self.Iconify===void 0&&(self.Iconify=ue)}catch{}ue.scan();const Ln=document.querySelectorAll(".tooltip");for(const t of Array.from(Ln)){const e=t.firstElementChild.innerHTML;t.addEventListener("click",async()=>{await navigator.clipboard.writeText(e)})}

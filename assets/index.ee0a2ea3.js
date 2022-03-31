var kt=Object.defineProperty;var Fe=Object.getOwnPropertySymbols;var At=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable;var Me=(e,t,n)=>t in e?kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,q=(e,t)=>{for(var n in t||(t={}))At.call(t,n)&&Me(e,n,t[n]);if(Fe)for(var n of Fe(t))Ct.call(t,n)&&Me(e,n,t[n]);return e};const St=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};St();/**
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
* @version 2.1.2
*/var C=/^[a-z0-9]+(-[a-z0-9]+)*$/,$=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function Oe(e){return q(q({},$),e)}function Pt(e,t){const n=q({},e);for(const i in $){const o=i;if(t[o]!==void 0){const r=t[o];if(n[o]===void 0){n[o]=r;continue}switch(o){case"rotate":n[o]=(n[o]+r)%4;break;case"hFlip":case"vFlip":n[o]=r!==n[o];break;default:n[o]=r}}}return n}function Ne(e,t,n=!1){function i(r,s){var c,l,a,f;if(e.icons[r]!==void 0)return Object.assign({},e.icons[r]);if(s>5)return null;if(((c=e.aliases)==null?void 0:c[r])!==void 0){const u=(l=e.aliases)==null?void 0:l[r],d=i(u.parent,s+1);return d&&Pt(d,u)}return s===0&&((a=e.chars)==null?void 0:a[r])!==void 0?i((f=e.chars)==null?void 0:f[r],s+1):null}const o=i(t,0);if(o)for(const r in $)o[r]===void 0&&e[r]!==void 0&&(o[r]=e[r]);return o&&n?Oe(o):o}var Lt=/^[a-f0-9]+(-[a-f0-9]+)*$/;function $e(e,t){for(const n in e){const i=n,r=typeof e[i];if(r==="undefined"){delete e[i];continue}switch(n){case"body":case"parent":if(r!=="string")return n;break;case"hFlip":case"vFlip":case"hidden":if(r!=="boolean")if(t)delete e[i];else return n;break;case"width":case"height":case"left":case"top":case"rotate":case"inlineHeight":case"inlineTop":case"verticalAlign":if(r!=="number")if(t)delete e[i];else return n;break;default:if(r==="object")if(t)delete e[i];else return n}}return null}function Tt(e,t){const n=!!(t!=null&&t.fix);if(typeof e!="object"||e===null||typeof e.icons!="object"||!e.icons)throw new Error("Bad icon set");const i=e;if(typeof(t==null?void 0:t.prefix)=="string")i.prefix=t.prefix;else if(typeof i.prefix!="string"||!i.prefix.match(C))throw new Error("Invalid prefix");if(typeof(t==null?void 0:t.provider)=="string")i.provider=t.provider;else if(i.provider!==void 0){const r=i.provider;if(typeof r!="string"||r!==""&&!r.match(C))if(n)delete i.provider;else throw new Error("Invalid provider")}const o=i.icons;if(Object.keys(o).forEach(r=>{if(!r.match(C)){if(n){delete o[r];return}throw new Error(`Invalid icon name: "${r}"`)}const s=o[r];if(typeof s!="object"||s===null||typeof s.body!="string"){if(n){delete o[r];return}throw new Error(`Invalid icon: "${r}"`)}const c=typeof s.parent=="string"?"parent":$e(s,n);if(c!==null){if(n){delete o[r];return}throw new Error(`Invalid property "${c}" in icon "${r}"`)}}),!Object.keys(i.icons).length)throw new Error("Icon set is empty");if(i.aliases!==void 0&&(typeof i.aliases!="object"||i.aliases===null))if(n)delete i.aliases;else throw new Error("Invalid aliases list");if(typeof i.aliases=="object"){let r=function(a,f){if(c.has(a))return!l.has(a);const u=s[a];if(f>5||typeof u!="object"||u===null||typeof u.parent!="string"||!a.match(C)){if(n)return delete s[a],l.add(a),!1;throw new Error(`Invalid icon alias: "${a}"`)}const d=u.parent;if(i.icons[d]===void 0&&(s[d]===void 0||!r(d,f+1))){if(n)return delete s[a],l.add(a),!1;throw new Error(`Missing parent icon for alias "${a}`)}n&&u.body!==void 0&&delete u.body;const h=u.body!==void 0?"body":$e(u,n);if(h!==null){if(n)return delete s[a],l.add(a),!1;throw new Error(`Invalid property "${h}" in alias "${a}"`)}return c.add(a),!0};const s=i.aliases,c=new Set,l=new Set;Object.keys(s).forEach(a=>{r(a,0)}),n&&!Object.keys(i.aliases).length&&delete i.aliases}if(Object.keys($).forEach(r=>{const s=typeof $[r],c=typeof i[r];if(c!=="undefined"&&c!==s)throw new Error(`Invalid value type for "${r}"`)}),i.chars!==void 0&&(typeof i.chars!="object"||i.chars===null))if(n)delete i.chars;else throw new Error("Invalid characters map");if(typeof i.chars=="object"){const r=i.chars;Object.keys(r).forEach(s=>{var c;if(!s.match(Lt)||typeof r[s]!="string"){if(n){delete r[s];return}throw new Error(`Invalid character "${s}"`)}const l=r[s];if(i.icons[l]===void 0&&((c=i.aliases)==null?void 0:c[l])===void 0){if(n){delete r[s];return}throw new Error(`Character "${s}" points to missing icon "${l}"`)}}),n&&!Object.keys(i.chars).length&&delete i.chars}return i}function Ft(e){for(const t in $)if(e[t]!==void 0)return!0;return!1}function He(e,t,n){n=n||{};const i=[];if(typeof e!="object"||typeof e.icons!="object")return i;const o=n.validate;if(o!==!1)try{Tt(e,typeof o=="object"?o:{fix:!0})}catch{return i}e.not_found instanceof Array&&e.not_found.forEach(c=>{t(c,null),i.push(c)});const r=e.icons;Object.keys(r).forEach(c=>{const l=Ne(e,c,!0);l&&(t(c,l),i.push(c))});const s=n.aliases||"all";if(s!=="none"&&typeof e.aliases=="object"){const c=e.aliases;Object.keys(c).forEach(l=>{if(s==="variations"&&Ft(c[l]))return;const a=Ne(e,l,!0);a&&(t(l,a),i.push(l))})}return i}var R=(e,t,n,i="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;i=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:i,prefix:l,name:c};return t&&!M(a)?null:a}const r=o[0],s=r.split("-");if(s.length>1){const c={provider:i,prefix:s.shift(),name:s.join("-")};return t&&!M(c)?null:c}if(n&&i===""){const c={provider:i,prefix:"",name:r};return t&&!M(c,n)?null:c}return null},M=(e,t)=>e?!!((e.provider===""||e.provider.match(C))&&(t&&e.prefix===""||e.prefix.match(C))&&e.name.match(C)):!1,Ge=1,O=Object.create(null);try{const e=window||self;(e==null?void 0:e._iconifyStorage.version)===Ge&&(O=e._iconifyStorage.storage)}catch{}function Mt(){try{const e=window||self;e&&!e._iconifyStorage&&(e._iconifyStorage={version:Ge,storage:O})}catch{}}function Nt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:Object.create(null)}}function I(e,t){O[e]===void 0&&(O[e]=Object.create(null));const n=O[e];return n[t]===void 0&&(n[t]=Nt(e,t)),n[t]}function Ee(e,t){const n=Date.now();return He(t,(i,o)=>{o?e.icons[i]=o:e.missing[i]=n})}function $t(e,t,n){try{if(typeof n.body=="string")return e.icons[t]=Object.freeze(Oe(n)),!0}catch{}return!1}function ke(e,t){const n=e.icons[t];return n===void 0?null:n}function Dt(e,t){let n=[],i;return typeof e=="string"?i=[e]:i=Object.keys(O),i.forEach(o=>{let r;typeof o=="string"&&typeof t=="string"?r=[t]:r=O[o]===void 0?[]:Object.keys(O[o]),r.forEach(s=>{const c=I(o,s),l=Object.keys(c.icons).map(a=>(o!==""?"@"+o+":":"")+s+":"+a);n=n.concat(l)})}),n}var B=!1;function Rt(e){return typeof e=="boolean"&&(B=e),B}function ce(e){const t=typeof e=="string"?R(e,!0,B):e;return t?ke(I(t.provider,t.prefix),t.name):null}function Je(e,t){const n=R(e,!0,B);if(!n)return!1;const i=I(n.provider,n.prefix);return $t(i,n.name,t)}function Ye(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=typeof e.provider=="string"?e.provider:""),B&&t===""&&(typeof e.prefix!="string"||e.prefix==="")){let i=!1;return He(e,(o,r)=>{r&&Je(o,r)&&(i=!0)},{validate:{fix:!0,prefix:""}}),i}if(typeof e.prefix!="string"||!M({provider:t,prefix:e.prefix,name:"a"}))return!1;const n=I(t,e.prefix);return!!Ee(n,e)}function qt(e){return ce(e)!==null}function _t(e){const t=ce(e);return t?q({},t):null}var H=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function ae(e,t){const n={};for(const i in e){const o=i;if(n[o]=e[o],t[o]===void 0)continue;const r=t[o];switch(o){case"inline":case"slice":typeof r=="boolean"&&(n[o]=r);break;case"hFlip":case"vFlip":r===!0&&(n[o]=!n[o]);break;case"hAlign":case"vAlign":typeof r=="string"&&r!==""&&(n[o]=r);break;case"width":case"height":(typeof r=="string"&&r!==""||typeof r=="number"&&r||r===null)&&(n[o]=r);break;case"rotate":typeof r=="number"&&(n[o]+=r);break}}return n}var Ut=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Qt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ne(e,t,n){if(t===1)return e;if(n=n===void 0?100:n,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const i=e.split(Ut);if(i===null||!i.length)return e;const o=[];let r=i.shift(),s=Qt.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?o.push(r):o.push(Math.ceil(c*t*n)/n)}else o.push(r);if(r=i.shift(),r===void 0)return o.join("");s=!s}}function Vt(e){let t="";switch(e.hAlign){case"left":t+="xMin";break;case"right":t+="xMax";break;default:t+="xMid"}switch(e.vAlign){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet",t}function Ae(e,t){const n={left:e.left,top:e.top,width:e.width,height:e.height};let i=e.body;[e,t].forEach(c=>{const l=[],a=c.hFlip,f=c.vFlip;let u=c.rotate;a?f?u+=2:(l.push("translate("+(n.width+n.left)+" "+(0-n.top)+")"),l.push("scale(-1 1)"),n.top=n.left=0):f&&(l.push("translate("+(0-n.left)+" "+(n.height+n.top)+")"),l.push("scale(1 -1)"),n.top=n.left=0);let d;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:d=n.height/2+n.top,l.unshift("rotate(90 "+d+" "+d+")");break;case 2:l.unshift("rotate(180 "+(n.width/2+n.left)+" "+(n.height/2+n.top)+")");break;case 3:d=n.width/2+n.left,l.unshift("rotate(-90 "+d+" "+d+")");break}u%2===1&&((n.left!==0||n.top!==0)&&(d=n.left,n.left=n.top,n.top=d),n.width!==n.height&&(d=n.width,n.width=n.height,n.height=d)),l.length&&(i='<g transform="'+l.join(" ")+'">'+i+"</g>")});let o,r;t.width===null&&t.height===null?(r="1em",o=ne(r,n.width/n.height)):t.width!==null&&t.height!==null?(o=t.width,r=t.height):t.height!==null?(r=t.height,o=ne(r,n.width/n.height)):(o=t.width,r=ne(o,n.height/n.width)),o==="auto"&&(o=n.width),r==="auto"&&(r=n.height),o=typeof o=="string"?o:o+"",r=typeof r=="string"?r:r+"";const s={attributes:{width:o,height:r,preserveAspectRatio:Vt(t),viewBox:n.left+" "+n.top+" "+n.width+" "+n.height},body:i};return t.inline&&(s.inline=!0),s}function Kt(e,t){return Ae(Oe(e),t?ae(H,t):H)}var Bt=/\sid="(\S+)"/g,Ht="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16),Gt=0;function ze(e,t=Ht){const n=[];let i;for(;i=Bt.exec(e);)n.push(i[1]);return n.length&&n.forEach(o=>{const r=typeof t=="function"?t(o):t+Gt++,s=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),e}var We="iconify2",G="iconify",Xe=G+"-count",Ze=G+"-version",et=36e5,Jt=168,N={local:!0,session:!0},ve=!1,tt={local:0,session:0},nt={local:[],session:[]},ee=typeof window=="undefined"?{}:window;function rt(e){const t=e+"Storage";try{if(ee&&ee[t]&&typeof ee[t].length=="number")return ee[t]}catch{}return N[e]=!1,null}function Ce(e,t,n){try{return e.setItem(Xe,n+""),tt[t]=n,!0}catch{return!1}}function ot(e){const t=e.getItem(Xe);if(t){const n=parseInt(t);return n||0}return 0}function Yt(e,t){try{e.setItem(Ze,We)}catch{}Ce(e,t,0)}function zt(e){try{const t=ot(e);for(let n=0;n<t;n++)e.removeItem(G+n)}catch{}}var it=()=>{if(ve)return;ve=!0;const e=Math.floor(Date.now()/et)-Jt;function t(n){const i=rt(n);if(!i)return;const o=r=>{const s=G+r,c=i.getItem(s);if(typeof c!="string")return!1;let l=!0;try{const a=JSON.parse(c);if(typeof a!="object"||typeof a.cached!="number"||a.cached<e||typeof a.provider!="string"||typeof a.data!="object"||typeof a.data.prefix!="string")l=!1;else{const f=a.provider,u=a.data.prefix,d=I(f,u);l=Ee(d,a.data).length>0}}catch{l=!1}return l||i.removeItem(s),l};try{const r=i.getItem(Ze);if(r!==We){r&&zt(i),Yt(i,n);return}let s=ot(i);for(let c=s-1;c>=0;c--)o(c)||(c===s-1?s--:nt[n].push(c));Ce(i,n,s)}catch{}}for(const n in N)t(n)},Wt=(e,t)=>{ve||it();function n(i){if(!N[i])return!1;const o=rt(i);if(!o)return!1;let r=nt[i].shift();if(r===void 0&&(r=tt[i],!Ce(o,i,r+1)))return!1;try{const s={cached:Math.floor(Date.now()/et),provider:e,data:t};o.setItem(G+r,JSON.stringify(s))}catch{return!1}return!0}n("local")||n("session")},ye={};function st(e,t){switch(e){case"local":case"session":N[e]=t;break;case"all":for(const n in N)N[n]=t;break}}var be=Object.create(null);function Se(e,t){be[e]=t}function me(e){return be[e]||be[""]}function Pe(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path===void 0?"/":e.path,maxURL:e.maxURL?e.maxURL:500,rotate:e.rotate?e.rotate:750,timeout:e.timeout?e.timeout:5e3,random:e.random===!0,index:e.index?e.index:0,dataAfterTimeout:e.dataAfterTimeout!==!1}}var le=Object.create(null),_=["https://api.simplesvg.com","https://api.unisvg.com"],re=[];for(;_.length>0;)_.length===1||Math.random()>.5?re.push(_.shift()):re.push(_.pop());le[""]=Pe({resources:["https://api.iconify.design"].concat(re)});function ct(e,t){const n=Pe(t);return n===null?!1:(le[e]=n,!0)}function J(e){return le[e]}function Xt(){return Object.keys(le)}var Y=(e,t)=>{let n=e,i=n.indexOf("?")!==-1;function o(r){switch(typeof r){case"boolean":return r?"true":"false";case"number":return encodeURIComponent(r);case"string":return encodeURIComponent(r);default:throw new Error("Invalid parameter")}}return Object.keys(t).forEach(r=>{let s;try{s=o(t[r])}catch{return}n+=(i?"&":"?")+encodeURIComponent(r)+"="+s,i=!0}),n},te=null,Le=null,at=Object.create(null),lt=Object.create(null);function Zt(e){let t=0,n;for(n=e.length-1;n>=0;n--)t+=e.charCodeAt(n);return t%999}function ft(){if(te===null){const e=self;let t="Iconify",n=".cb";if(e[t]===void 0)t="IconifyJSONP",n="",e[t]===void 0&&(e[t]=Object.create(null)),te=e[t];else{const i=e[t];i.cb===void 0&&(i.cb=Object.create(null)),te=i.cb}Le=t+n+".{cb}"}return te}function en(e,t){const n=J(e);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(c=>{r=Math.max(r,c.length)}),ft();const s=Y(t+".js",{icons:"",callback:Le});i=n.maxURL-r-n.path.length-s.length}const o=e+":"+t;return lt[o]=n.path,at[o]=i,i}var tn=(e,t,n)=>{const i=[],o=e+":"+t;let r=at[o];r===void 0&&(r=en(e,t));const s="icons";let c={type:s,provider:e,prefix:t,icons:[]},l=0;return n.forEach((a,f)=>{l+=a.length+1,l>=r&&f>0&&(i.push(c),c={type:s,provider:e,prefix:t,icons:[]},l=a.length),c.icons.push(a)}),i.push(c),i},nn=(e,t,n)=>{if(t.type!=="icons"){n.done(void 0,400);return}const i=t.provider,o=t.prefix,s=t.icons.join(","),c=i+":"+o,l=o.split("-").shift().slice(0,3),a=ft();let f=Zt(i+":"+e+":"+o+":"+s);for(;a[l+f]!==void 0;)f++;const u=l+f,d=Y(o+".js",{icons:s,callback:Le.replace("{cb}",u)}),h=lt[c]+d;a[u]=k=>{delete a[u],n.done(k)};const v=e+h,g=document.createElement("script");g.type="text/javascript",g.async=!0,g.src=v,document.head.appendChild(g)},rn={prepare:tn,send:nn},ut=Object.create(null),oe=Object.create(null),on=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}try{const t=String.fromCharCode(114)+String.fromCharCode(101);if(e=global[t+"qui"+t]("cross-fetch"),typeof e=="function")return e}catch{}return null},ie=on();function sn(e){ie=e}function cn(){return ie}function an(e,t){const n=J(e);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(c=>{r=Math.max(r,c.length)});const s=Y(t+".json",{icons:""});i=n.maxURL-r-n.path.length-s.length}const o=e+":"+t;return oe[e]=n.path,ut[o]=i,i}var ln=(e,t,n)=>{const i=[];let o=ut[t];o===void 0&&(o=an(e,t));const r="icons";let s={type:r,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(i.push(s),s={type:r,provider:e,prefix:t,icons:[]},c=l.length),s.icons.push(l)}),i.push(s),i};function fn(e){if(typeof e=="string"){if(oe[e]===void 0){const t=J(e);if(!t)return"/";oe[e]=t.path}return oe[e]}return"/"}var un=(e,t,n)=>{if(!ie){n.done(void 0,424);return}let i=fn(t.provider);switch(t.type){case"icons":{const r=t.prefix,c=t.icons.join(",");i+=Y(r+".json",{icons:c});break}case"custom":{const r=t.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n.done(void 0,400);return}let o=503;ie(e+i).then(r=>{if(r.status!==200){setTimeout(()=>{n.done(void 0,r.status)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{n.done(void 0,o)});return}setTimeout(()=>{n.done(r)})}).catch(()=>{n.done(void 0,o)})},dt={prepare:ln,send:un};function dn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return e.forEach(o=>{if(i.name===o.name&&i.prefix===o.prefix&&i.provider===o.provider)return;i=o;const r=o.provider,s=o.prefix,c=o.name;n[r]===void 0&&(n[r]=Object.create(null));const l=n[r];l[s]===void 0&&(l[s]=I(r,s));const a=l[s];let f;a.icons[c]!==void 0?f=t.loaded:s===""||a.missing[c]!==void 0?f=t.missing:f=t.pending;const u={provider:r,prefix:s,name:c};f.push(u)}),t}var E=Object.create(null),fe=Object.create(null);function ht(e,t){e.forEach(n=>{const i=n.provider;if(E[i]===void 0)return;const o=E[i],r=n.prefix,s=o[r];s&&(o[r]=s.filter(c=>c.id!==t))})}function hn(e,t){fe[e]===void 0&&(fe[e]=Object.create(null));const n=fe[e];n[t]||(n[t]=!0,setTimeout(()=>{if(n[t]=!1,E[e]===void 0||E[e][t]===void 0)return;const i=E[e][t].slice(0);if(!i.length)return;const o=I(e,t);let r=!1;i.forEach(s=>{const c=s.icons,l=c.pending.length;c.pending=c.pending.filter(a=>{if(a.prefix!==t)return!0;const f=a.name;if(o.icons[f]!==void 0)c.loaded.push({provider:e,prefix:t,name:f});else if(o.missing[f]!==void 0)c.missing.push({provider:e,prefix:t,name:f});else return r=!0,!0;return!1}),c.pending.length!==l&&(r||ht([{provider:e,prefix:t}],s.id),s.callback(c.loaded.slice(0),c.missing.slice(0),c.pending.slice(0),s.abort))})}))}var pn=0;function gn(e,t,n){const i=pn++,o=ht.bind(null,n,i);if(!t.pending.length)return o;const r={id:i,icons:t,callback:e,abort:o};return n.forEach(s=>{const c=s.provider,l=s.prefix;E[c]===void 0&&(E[c]=Object.create(null));const a=E[c];a[l]===void 0&&(a[l]=[]),a[l].push(r)}),o}function vn(e,t=!0,n=!1){const i=[];return e.forEach(o=>{const r=typeof o=="string"?R(o,!1,n):o;(!t||M(r,n))&&i.push({provider:r.provider,prefix:r.prefix,name:r.name})}),i}var De={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function yn(e,t,n,i,o){const r=e.resources.length,s=e.random?Math.floor(Math.random()*r):e.index;let c;if(e.random){let p=e.resources.slice(0);for(c=[];p.length>1;){const y=Math.floor(Math.random()*p.length);c.push(p[y]),p=p.slice(0,y).concat(p.slice(y+1))}c=c.concat(p)}else c=e.resources.slice(s).concat(e.resources.slice(0,s));const l=Date.now();let a="pending",f=0,u,d=null,h=[],v=[];typeof i=="function"&&v.push(i);function g(){d&&(clearTimeout(d),d=null)}function k(){a==="pending"&&(a="aborted"),g(),h.forEach(p=>{p.abort&&p.abort(),p.status==="pending"&&(p.status="aborted")}),h=[]}function m(p,y){y&&(v=[]),typeof p=="function"&&v.push(p)}function P(){return{startTime:l,payload:t,status:a,queriesSent:f,queriesPending:h.length,subscribe:m,abort:k}}function b(){a="failed",v.forEach(p=>{p(void 0,u)})}function j(){h=h.filter(p=>(p.status==="pending"&&(p.status="aborted"),p.abort&&p.abort(),!1))}function L(p,y,Z){const A=y===void 0;switch(h=h.filter(x=>x!==p),a){case"pending":break;case"failed":if(A||!e.dataAfterTimeout)return;break;default:return}if(A){Z!==void 0&&(u=Z),h.length||(c.length?X():b());return}if(g(),j(),o&&!e.random){const x=e.resources.indexOf(p.resource);x!==-1&&x!==e.index&&o(x)}a="completed",v.forEach(x=>{x(y)})}function X(){if(a!=="pending")return;g();const p=c.shift();if(p===void 0){if(h.length){const A=typeof e.timeout=="function"?e.timeout(l):e.timeout;if(A){d=setTimeout(()=>{g(),a==="pending"&&(j(),b())},A);return}}b();return}const y={getQueryStatus:P,status:"pending",resource:p,done:(A,x)=>{L(y,A,x)}};h.push(y),f++;const Z=typeof e.rotate=="function"?e.rotate(f,l):e.rotate;d=setTimeout(X,Z),n(p,t,y)}return setTimeout(X),P}function bn(e){if(typeof e!="object"||typeof e.resources!="object"||!(e.resources instanceof Array)||!e.resources.length)throw new Error("Invalid Reduncancy configuration");const t=Object.create(null);let n;for(n in De)e[n]!==void 0?t[n]=e[n]:t[n]=De[n];return t}function pt(e){const t=bn(e);let n=[];function i(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const f=yn(t,c,l,(u,d)=>{i(),a&&a(u,d)},u=>{t.index=u});return n.push(f),f}function r(c){const l=n.find(a=>c(a));return l!==void 0?l:null}return{query:o,find:r,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:i}}function Re(){}var ue=Object.create(null);function mn(e){if(ue[e]===void 0){const t=J(e);if(!t)return;const n=pt(t),i={config:t,redundancy:n};ue[e]=i}return ue[e]}function gt(e,t,n){let i,o;if(typeof e=="string"){const r=me(e);if(!r)return n(void 0,424),Re;o=r.send;const s=mn(e);s&&(i=s.redundancy)}else{const r=Pe(e);if(r){i=pt(r);const s=e.resources?e.resources[0]:"",c=me(s);c&&(o=c.send)}}return!i||!o?(n(void 0,424),Re):i.query(t,o,n)().abort}function qe(){}var w=Object.create(null),de=Object.create(null),he=Object.create(null),pe=Object.create(null);function wn(e,t){he[e]===void 0&&(he[e]=Object.create(null));const n=he[e];n[t]||(n[t]=!0,setTimeout(()=>{n[t]=!1,hn(e,t)}))}var _e=Object.create(null);function In(e,t,n){function i(){const c=(e===""?"":"@"+e+":")+t,l=Math.floor(Date.now()/6e4);_e[c]<l&&(_e[c]=l,console.error('Unable to retrieve icons for "'+c+'" because API is not configured properly.'))}de[e]===void 0&&(de[e]=Object.create(null));const o=de[e];pe[e]===void 0&&(pe[e]=Object.create(null));const r=pe[e];w[e]===void 0&&(w[e]=Object.create(null));const s=w[e];o[t]===void 0?o[t]=n:o[t]=o[t].concat(n).sort(),r[t]||(r[t]=!0,setTimeout(()=>{r[t]=!1;const c=o[t];delete o[t];const l=me(e);if(!l){i();return}l.prepare(e,t,c).forEach(f=>{gt(e,f,(u,d)=>{const h=I(e,t);if(typeof u!="object"){if(d!==404)return;const v=Date.now();f.icons.forEach(g=>{h.missing[g]=v})}else try{const v=Ee(h,u);if(!v.length)return;const g=s[t];v.forEach(k=>{delete g[k]}),ye.store&&ye.store(e,u)}catch(v){console.error(v)}wn(e,t)})})}))}var Ue=e=>{const t=e.provider,n=e.prefix;return w[t]&&w[t][n]&&w[t][n][e.name]!==void 0},Te=(e,t)=>{const n=vn(e,!0,Rt()),i=dn(n);if(!i.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(i.loaded,i.missing,i.pending,qe)}),()=>{a=!1}}const o=Object.create(null),r=[];let s,c;i.pending.forEach(a=>{const f=a.provider,u=a.prefix;if(u===c&&f===s)return;s=f,c=u,r.push({provider:f,prefix:u}),w[f]===void 0&&(w[f]=Object.create(null));const d=w[f];d[u]===void 0&&(d[u]=Object.create(null)),o[f]===void 0&&(o[f]=Object.create(null));const h=o[f];h[u]===void 0&&(h[u]=[])});const l=Date.now();return i.pending.forEach(a=>{const f=a.provider,u=a.prefix,d=a.name,h=w[f][u];h[d]===void 0&&(h[d]=l,o[f][u].push(d))}),r.forEach(a=>{const f=a.provider,u=a.prefix;o[f][u].length&&In(f,u,o[f][u])}),t?gn(t,i,r):qe},ge=Object.create(null),jn=e=>{if(typeof e=="string"&&ge[e])return ge[e];const t=new Promise((n,i)=>{const o=typeof e=="string"?R(e):e;Te([o||e],r=>{if(r.length&&o){const s=I(o.provider,o.prefix),c=ke(s,o.name);if(c){n(c);return}}i(e)})});return typeof e=="string"&&(ge[e]=t),t};const F="iconifyFinder"+Date.now(),V="iconifyData"+Date.now();function vt(e,t,n,i){let o;try{o=document.createElement("span")}catch{return i?"":null}const r=Ae(n,ae(H,t)),s=e.element,c=e.finder,l=e.name,a=s?s.getAttribute("class"):"",f=c?c.classFilter(a?a.split(/\s+/):[]):[],u="iconify iconify--"+l.prefix+(l.provider===""?"":" iconify--"+l.provider)+(f.length?" "+f.join(" "):""),d='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="'+u+'">'+ze(r.body)+"</svg>";o.innerHTML=d;const h=o.childNodes[0],v=h.style,g=r.attributes;if(Object.keys(g).forEach(m=>{h.setAttribute(m,g[m])}),r.inline&&(v.verticalAlign="-0.125em"),s){const m=s.attributes;for(let b=0;b<m.length;b++){const j=m.item(b);if(j){const L=j.name;if(L!=="class"&&L!=="style"&&g[L]===void 0)try{h.setAttribute(L,j.value)}catch{}}}const P=s.style;for(let b=0;b<P.length;b++){const j=P[b];v[j]=P[j]}}if(c){const m={name:l,status:"loaded",customisations:t};h[V]=m,h[F]=c}const k=i?o.innerHTML:h;return s&&s.parentNode?s.parentNode.replaceChild(h,s):o.removeChild(h),k}let S=[];function z(e){for(let t=0;t<S.length;t++){const n=S[t];if((typeof n.node=="function"?n.node():n.node)===e)return n}}function yt(e,t=!1){let n=z(e);return n?(n.temporary&&(n.temporary=t),n):(n={node:e,temporary:t},S.push(n),n)}function xn(){if(document.documentElement)return yt(document.documentElement);S.push({node:()=>document.documentElement})}function On(e){S=S.filter(t=>{const n=typeof t.node=="function"?t.node():t.node;return e!==n})}function W(){return S}function En(e){const t=document;t.readyState==="complete"||t.readyState!=="loading"&&!t.documentElement.doScroll?e():(t.addEventListener("DOMContentLoaded",e),window.addEventListener("load",e))}let K=null;const kn={childList:!0,subtree:!0,attributes:!0};function bt(e){if(!e.observer)return;const t=e.observer;t.pendingScan||(t.pendingScan=setTimeout(()=>{delete t.pendingScan,K&&K(e)}))}function An(e,t){if(!e.observer)return;const n=e.observer;if(!n.pendingScan)for(let i=0;i<t.length;i++){const o=t[i];if(o.addedNodes&&o.addedNodes.length>0||o.type==="attributes"&&o.target[F]!==void 0){n.paused||bt(e);return}}}function mt(e,t){e.observer.instance.observe(t,kn)}function se(e){let t=e.observer;if(t&&t.instance)return;const n=typeof e.node=="function"?e.node():e.node;!n||(t||(t={paused:0},e.observer=t),t.instance=new MutationObserver(An.bind(null,e)),mt(e,n),t.paused||bt(e))}function Qe(){W().forEach(se)}function wt(e){if(!e.observer)return;const t=e.observer;t.pendingScan&&(clearTimeout(t.pendingScan),delete t.pendingScan),t.instance&&(t.instance.disconnect(),delete t.instance)}function Cn(e){const t=K!==null;if(K!==e&&(K=e,t&&W().forEach(wt)),t){Qe();return}En(Qe)}function we(e){(e?[e]:W()).forEach(t=>{if(!t.observer){t.observer={paused:1};return}const n=t.observer;if(n.paused++,n.paused>1||!n.instance)return;n.instance.disconnect()})}function Sn(e){if(e){const t=z(e);t&&we(t)}else we()}function Ie(e){(e?[e]:W()).forEach(t=>{if(!t.observer){se(t);return}const n=t.observer;if(n.paused&&(n.paused--,!n.paused)){const i=typeof t.node=="function"?t.node():t.node;if(i)n.instance?mt(t,i):se(t);else return}})}function Pn(e){if(e){const t=z(e);t&&Ie(t)}else Ie()}function It(e,t=!1){const n=yt(e,t);return se(n),n}function jt(e){const t=z(e);t&&(wt(t),On(e))}const je=[];function Ln(e){je.indexOf(e)===-1&&je.push(e)}function Ve(e){return typeof e=="string"&&(e=R(e)),e===null||!M(e)?null:e}function Tn(e,t){const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let o=0;o<n.length;o++){const r=n[o];if(t[r]!==e[r])return!1}return!0}function Fn(e){const t=[];je.forEach(i=>{const o=i.find(e);Array.prototype.forEach.call(o,r=>{const s=r;if(s[F]!==void 0&&s[F]!==i)return;const c=Ve(i.name(s));if(c===null)return;s[F]=i;const l={element:s,finder:i,name:c};t.push(l)})});const n=e.querySelectorAll("svg.iconify");return Array.prototype.forEach.call(n,i=>{const o=i,r=o[F],s=o[V];if(!r||!s)return;const c=Ve(r.name(o));if(c===null)return;let l=!1,a;if(c.prefix!==s.name.prefix||c.name!==s.name.name?l=!0:(a=r.customisations(o),Tn(s.customisations,a)||(l=!0)),l){const f={element:o,finder:r,name:c,customisations:a};t.push(f)}}),t}let Q=!1;function Mn(){Q||(Q=!0,setTimeout(()=>{Q&&(Q=!1,D())}))}const Nn=(e,t)=>e!==null&&t!==null&&e.name===t.name&&e.prefix===t.prefix;function $n(e){const t=z(e);t?D(t):D({node:e,temporary:!0},!0)}function D(e,t=!1){Q=!1;const n=Object.create(null);(e?[e]:W()).forEach(i=>{const o=typeof i.node=="function"?i.node():i.node;if(!o||!o.querySelectorAll)return;let r=!1,s=!1;Fn(o).forEach(c=>{const l=c.element,a=c.name,f=a.provider,u=a.prefix,d=a.name;let h=l[V];if(h!==void 0&&Nn(h.name,a))switch(h.status){case"missing":return;case"loading":if(Ue({provider:f,prefix:u,name:d})){r=!0;return}}const v=I(f,u);if(v.icons[d]!==void 0){!s&&i.observer&&(we(i),s=!0);const g=c.customisations!==void 0?c.customisations:c.finder.customisations(l);vt(c,g,ke(v,d));return}if(v.missing[d]){h={name:a,status:"missing",customisations:{}},l[V]=h;return}if(!Ue({provider:f,prefix:u,name:d})){n[f]===void 0&&(n[f]=Object.create(null));const g=n[f];g[u]===void 0&&(g[u]=Object.create(null)),g[u][d]=!0}h={name:a,status:"loading",customisations:{}},l[V]=h,r=!0}),i.temporary&&!r?jt(o):t&&r?It(o,!0):s&&i.observer&&Ie(i)}),Object.keys(n).forEach(i=>{const o=n[i];Object.keys(o).forEach(r=>{Te(Object.keys(o[r]).map(s=>({provider:i,prefix:r,name:s})),Mn)})})}function Dn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function i(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:i(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r=r/o,r%1===0?i(r):0)}}return t}var xt=/[\s,]+/;function Rn(e,t){t.split(xt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function qn(e,t){t.split(xt).forEach(n=>{const i=n.trim();switch(i){case"left":case"center":case"right":e.hAlign=i;break;case"top":case"middle":case"bottom":e.vAlign=i;break;case"slice":case"crop":e.slice=!0;break;case"meet":e.slice=!1}})}function T(e,t){return e.hasAttribute(t)}function U(e,t){return e.getAttribute(t)}function _n(e,t){const n=e.getAttribute(t);return n===t||n==="true"?!0:n===""||n==="false"?!1:null}const Un=["inline","hFlip","vFlip"],Qn=["width","height"],Ke="iconify",xe="iconify-inline",Vn="i."+Ke+", span."+Ke+", i."+xe+", span."+xe,Kn={find:e=>e.querySelectorAll(Vn),name:e=>T(e,"data-icon")?U(e,"data-icon"):null,customisations:(e,t={inline:!1})=>{const n=t,i=e.getAttribute("class");if((i?i.split(/\s+/):[]).indexOf(xe)!==-1&&(n.inline=!0),T(e,"data-rotate")){const r=Dn(U(e,"data-rotate"));r&&(n.rotate=r)}return T(e,"data-flip")&&Rn(n,U(e,"data-flip")),T(e,"data-align")&&qn(n,U(e,"data-align")),Un.forEach(r=>{if(T(e,"data-"+r)){const s=_n(e,"data-"+r);typeof s=="boolean"&&(n[r]=s)}}),Qn.forEach(r=>{if(T(e,"data-"+r)){const s=U(e,"data-"+r);s!==""&&(n[r]=s)}}),n},classFilter:e=>{const t=[];return e.forEach(n=>{n!=="iconify"&&n!==""&&n.slice(0,9)!=="iconify--"&&t.push(n)}),t}};function Ot(e,t,n){const i=ce(e);if(!i)return null;const o=R(e),r=ae(H,typeof t=="object"?t:{});return vt({name:o},r,i,n)}function Bn(){return"2.1.2"}function Hn(e,t){return Ot(e,t,!1)}function Gn(e,t){return Ot(e,t,!0)}function Jn(e,t){const n=ce(e);if(!n)return null;const i=ae(H,typeof t=="object"?t:{});return Ae(n,i)}function Yn(e){e?$n(e):D()}if(typeof document!="undefined"&&typeof window!="undefined"){xn(),Ln(Kn);const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Ye(i))&&console.error(n)}catch{console.error(n)}})}setTimeout(()=>{Cn(D),D()})}function zn(e,t){st(e,t!==!1)}function Wn(e){st(e,!0)}Se("",cn()?dt:rn);function Xn(e){sn(e),Se("",dt)}if(typeof document!="undefined"&&typeof window!="undefined"){ye.store=Wt,it();const e=window;if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const n in t){const i="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;ct(n,o)||console.error(i)}catch{console.error(i)}}}}const Zn={getAPIConfig:J,setAPIModule:Se,sendAPIQuery:gt,setFetch:Xn,listAPIProviders:Xt,mergeParams:Y},Et={_api:Zn,addAPIProvider:ct,loadIcons:Te,loadIcon:jn,iconExists:qt,getIcon:_t,listIcons:Dt,addIcon:Je,addCollection:Ye,shareStorage:Mt,replaceIDs:ze,calculateSize:ne,buildIcon:Kt,getVersion:Bn,renderSVG:Hn,renderHTML:Gn,renderIcon:Jn,scan:Yn,observe:It,stopObserving:jt,pauseObserver:Sn,resumeObserver:Pn,enableCache:zn,disableCache:Wn};try{self.Iconify===void 0&&(self.Iconify=Et)}catch{}Et.scan();const Be=document.querySelectorAll(".tooltip");for(let e=0;e<Be.length;e++){const t=Be.item(e),n=t.firstElementChild.innerHTML;t.addEventListener("click",async()=>{await navigator.clipboard.writeText(n)})}

import{I as N,D as P}from"./DYmvtetA.js";import{q as z,s as L,R as V,Y as R,aO as $,aP as j,e as v,m as w,a5 as U,a6 as F,al as H,am as W,d as O,S as M,c as C,D as u,aw as X,as as Y,at as Z,au as q,a as T,o as m,u as h,L as A,b as E,r as S,_ as I,g as y,F as D,j as G,ah as K,K as Q}from"./x1L-Fu08.js";import{j as J,r as ee,t as te,v as ae,a as oe,w as se,b as ne,d as le,x as ie,g as re,M as ce,V as ue}from"./CMfAinVc.js";import{u as de}from"./DxFvQR9l.js";const fe=L({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:F,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...re(),...ie({location:"top end"}),...le(),...ne(),...U(),...se({transition:"scale-rotate-transition"})},"VBadge"),me=z()({name:"VBadge",inheritAttrs:!1,props:fe(),setup(e,i){const{backgroundColorClasses:c,backgroundColorStyles:g}=J(V(e,"color")),{roundedClasses:n}=ee(e),{t:s}=R(),{textColorClasses:a,textColorStyles:r}=te(V(e,"textColor")),{themeClasses:l}=$(),{locationStyles:d}=ae(e,!0,t=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(t)?+(e.offsetY??0):["left","right"].includes(t)?+(e.offsetX??0):0));return oe(()=>{const t=Number(e.content),o=!e.max||isNaN(t)?e.content:t<=+e.max?t:`${e.max}+`,[f,b]=j(i.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return v(e.tag,w({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},b,{style:e.style}),{default:()=>{var _,p;return[v("div",{class:"v-badge__wrapper"},[(p=(_=i.slots).default)==null?void 0:p.call(_),v(ce,{transition:e.transition},{default:()=>{var x,B;return[H(v("span",w({class:["v-badge__badge",l.value,c.value,n.value,a.value],style:[g.value,r.value,e.inline?{}:d.value],"aria-atomic":"true","aria-label":s(e.label,t),"aria-live":"polite",role:"status"},f),[e.dot?void 0:i.slots.badge?(B=(x=i.slots).badge)==null?void 0:B.call(x):e.icon?v(ue,{icon:e.icon},null):o]),[[W,e.modelValue]])]}})])]}})}),{}}}),ge=O({__name:"DetailsWrapper",props:{item:{},hideDot:{type:Boolean,default:!1}},setup(e){const i=M("detailsSet"),c=C(()=>{var s;if(!i)return!1;if(N)return!0;const n=u(e.item);return X(n)?Array("units","upgrades","spells").some(a=>{var r;return a in n&&!!((r=n[a])!=null&&r.length)}):Y(n)||Z(n)?!0:q(n)?!!((s=n.spells)!=null&&s.length):!1}),g=()=>{c.value&&(i==null||i(u(e.item)))};return(n,s)=>(m(),T(me,{dot:"",color:"primary",location:"left top",class:A(["details-badge",{"cursor-pointer":h(c)}]),"model-value":n.hideDot?!1:h(c),onClick:g},{default:E(()=>[S(n.$slots,"default",{},void 0,!0)]),_:3},8,["model-value","class"]))}}),be=I(ge,[["__scopeId","data-v-365bd456"]]),k=["Q","W","E","R","A","S","D","F","Z","X","C","V"],ve=O({__name:"WarGrid",props:{items:{},size:{default:1},skipHotkey:{type:Boolean,default:!1},restrictedSlots:{default:()=>[]},disableDetails:{type:Boolean,default:!1},showEmpty:{type:Boolean,default:!1}},setup(e){const i=de("iconSize",P),c=C(()=>{const s=Number(i.value);return(isNaN(s)?52:s)*u(e.size)}),g=C(()=>{if(e.skipHotkey)return u(e.items);const s=u(e.items).slice(),a=Array(k.length).fill(void 0);e.restrictedSlots.map(t=>t.toLocaleUpperCase()).forEach(t=>{const o=k.indexOf(t);o>=0&&(a[o]=null)});const r=Array(),l=Array();for(;s.length;){const t=s.shift();if(!t)continue;if(!t.hotkey){r.push(t);continue}let o=k.indexOf(t.hotkey.toLocaleUpperCase());if(o<0){r.push(t);continue}if(a[o]!==void 0){l.push(t);continue}a[o]=t}l.forEach(t=>{let o=k.indexOf(t.hotkey)%4;for(;a[o]!==void 0;)o+=4;a[o]=t}),r.forEach(t=>{const o=a.findIndex(f=>f===void 0);o<0?a.push(t):a[o]=t});let d=Math.ceil(a.length/4);for(let t=0;t<d;t++){const o=t*4,f=[0,1,2,3].map(b=>b+o);f.every(b=>!a[b])&&(--d,--t,a.splice(f[0],4))}return a}),n=C(()=>({gridTemplateColumns:`repeat(4, ${u(c.value)}px)`,gridTemplateRows:`repeat(auto-fill, ${u(c.value)}px)`}));return(s,a)=>{const r=be;return m(),y("div",{class:"container",style:Q(h(n))},[(m(!0),y(D,null,G(h(g),(l,d)=>(m(),y("div",{class:A(["grid-item",{"empty-item":s.showEmpty&&!l}]),key:(l==null?void 0:l.id)??d},[l?(m(),y(D,{key:0},[!s.disableDetails||h(N)?(m(),T(r,{key:0,item:l},{default:E(()=>[S(s.$slots,"default",{item:l},void 0,!0)]),_:2},1032,["item"])):S(s.$slots,"default",{key:1,item:l},void 0,!0)],64)):K("",!0)],2))),128))],4)}}}),Se=I(ve,[["__scopeId","data-v-8c3b78df"]]);export{Se as _,be as a,k as h};

import{q as $,s as I,a0 as ne,e as l,a1 as ve,a5 as me,R as oe,C as A,c as y,a3 as Ie,a9 as G,B as U,X as He,w as O,ax as Ae,aD as $e,v as se,b3 as Ne,m as D,O as Me,b4 as Re,x as Le,y as Ue,F as j,d as W,ak as De,b1 as F,p as Ee,b5 as ze,n as le,a as x,o as h,u as m,J as X,b as d,g as R,f as k,j as Y,i as T,t as L,b6 as Fe,ah as ie,ap as K,_ as fe,ay as Oe,b7 as je}from"./BKVwyF26.js";import{u as q}from"./BXR-zTup.js";import{V as qe,a as E,b as ge,c as We}from"./BGURkpZy.js";import{d as pe,e as Ze,V as B}from"./DK0vIMHG.js";import{_ as ye,V as Ge,a as Je}from"./CrpMfmkf.js";import{V as Xe,b as Ye,M as be,D as Ke,a as Qe}from"./ROpKKxJa.js";import{u as he,a as et}from"./BXeOSTaW.js";import{c as tt,m as at,u as lt,a as ot,b as st,V as nt}from"./ynKbcfCC.js";/* empty css        */import{n as _e,a as N,b as Q,p as Ve,g as Z,y as it,j as rt,A as ut,q as ct,r as dt,H as vt,o as J,d as mt,e as ft,h as gt,i as pt,V as yt,L as bt,u as ht}from"./DzMKgPA8.js";import{f as _t,g as Vt,h as St}from"./4n3_aWnG.js";import{u as kt,V as ue,c as ce,d as xt,m as Tt}from"./CzKv0wwb.js";const Ct=I({fluid:{type:Boolean,default:!1},...Z(),...Ve(),...Q()},"VContainer"),wt=$()({name:"VContainer",props:Ct(),setup(e,r){let{slots:t}=r;const{rtlClasses:o}=ne(),{dimensionStyles:s}=_e(e);return N(()=>l(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},o.value,e.class],style:[s.value,e.style]},t)),{}}}),Bt=it("v-spacer","div","VSpacer"),Pt=I({...Z(),...at({fullHeight:!0}),...me()},"VApp"),It=$()({name:"VApp",props:Pt(),setup(e,r){let{slots:t}=r;const o=ve(e),{layoutClasses:s,getLayoutItem:a,items:u,layoutRef:n}=tt(e),{rtlClasses:p}=ne();return N(()=>{var c;return l("div",{ref:n,class:["v-application",o.themeClasses.value,s.value,p.value,e.class],style:[e.style]},[l("div",{class:"v-application__wrap"},[(c=t.default)==null?void 0:c.call(t)])])}),{getLayoutItem:a,items:u,theme:o}}}),Ht=I({text:String,...Z(),...Q()},"VToolbarTitle"),At=$()({name:"VToolbarTitle",props:Ht(),setup(e,r){let{slots:t}=r;return N(()=>{const o=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[o&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),$t=[null,"prominent","default","comfortable","compact"],Se=I({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>$t.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...gt(),...Z(),...ft(),...mt(),...Q({tag:"header"}),...me()},"VToolbar"),de=$()({name:"VToolbar",props:Se(),setup(e,r){var V;let{slots:t}=r;const{backgroundColorClasses:o,backgroundColorStyles:s}=rt(oe(e,"color")),{borderClasses:a}=ut(e),{elevationClasses:u}=ct(e),{roundedClasses:n}=dt(e),{themeClasses:p}=ve(e),{rtlClasses:c}=ne(),i=A(!!(e.extended||(V=t.extension)!=null&&V.call(t))),f=y(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=y(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ie({VBtn:{variant:"text"}}),N(()=>{var w;const b=!!(e.title||t.title),S=!!(t.image||e.image),C=(w=t.extension)==null?void 0:w.call(t);return i.value=!!(e.extended||C),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,a.value,u.value,n.value,p.value,c.value,e.class],style:[s.value,e.style]},{default:()=>[S&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(J,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(vt,{key:"image-img",cover:!0,src:e.image},null)]),l(J,{defaults:{VTabs:{height:G(f.value)}}},{default:()=>{var v,_,H;return[l("div",{class:"v-toolbar__content",style:{height:G(f.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(v=t.prepend)==null?void 0:v.call(t)]),b&&l(At,{key:"title",text:e.title},{text:t.title}),(_=t.default)==null?void 0:_.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(H=t.append)==null?void 0:H.call(t)])])]}}),l(J,{defaults:{VTabs:{height:G(g.value)}}},{default:()=>[l(Xe,null,{default:()=>[i.value&&l("div",{class:"v-toolbar__extension",style:{height:G(g.value)}},[C])]})]})]})}),{contentHeight:f,extensionHeight:g}}}),Nt=I({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Mt(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=r;let o=0,s=0;const a=U(null),u=A(0),n=A(0),p=A(0),c=A(!1),i=A(!1),f=y(()=>Number(e.scrollThreshold)),g=y(()=>He((f.value-u.value)/f.value||0)),V=()=>{const b=a.value;if(!b||t&&!t.value)return;o=u.value,u.value="window"in b?b.pageYOffset:b.scrollTop;const S=b instanceof Window?document.documentElement.scrollHeight:b.scrollHeight;if(s!==S){s=S;return}i.value=u.value<o,p.value=Math.abs(u.value-f.value)};return O(i,()=>{n.value=n.value||u.value}),O(c,()=>{n.value=0}),Ae(()=>{O(()=>e.scrollTarget,b=>{var C;const S=b?document.querySelector(b):window;S&&S!==a.value&&((C=a.value)==null||C.removeEventListener("scroll",V),a.value=S,a.value.addEventListener("scroll",V,{passive:!0}))},{immediate:!0})}),$e(()=>{var b;(b=a.value)==null||b.removeEventListener("scroll",V)}),t&&O(t,V,{immediate:!0}),{scrollThreshold:f,currentScroll:u,currentThreshold:p,isScrollActive:c,scrollRatio:g,isScrollingUp:i,savedScroll:n}}const Rt=I({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Se(),...ot(),...Nt(),height:{type:[Number,String],default:64}},"VAppBar"),Lt=$()({name:"VAppBar",props:Rt(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:t}=r;const o=U(),s=se(e,"modelValue"),a=y(()=>{var _;const v=new Set(((_=e.scrollBehavior)==null?void 0:_.split(" "))??[]);return{hide:v.has("hide"),fullyHide:v.has("fully-hide"),inverted:v.has("inverted"),collapse:v.has("collapse"),elevate:v.has("elevate"),fadeImage:v.has("fade-image")}}),u=y(()=>{const v=a.value;return v.hide||v.fullyHide||v.inverted||v.collapse||v.elevate||v.fadeImage||!s.value}),{currentScroll:n,scrollThreshold:p,isScrollingUp:c,scrollRatio:i}=Mt(e,{canScroll:u}),f=y(()=>a.value.hide||a.value.fullyHide),g=y(()=>e.collapse||a.value.collapse&&(a.value.inverted?i.value>0:i.value===0)),V=y(()=>e.flat||a.value.fullyHide&&!s.value||a.value.elevate&&(a.value.inverted?n.value>0:n.value===0)),b=y(()=>a.value.fadeImage?a.value.inverted?1-i.value:i.value:void 0),S=y(()=>{var H,M;if(a.value.hide&&a.value.inverted)return 0;const v=((H=o.value)==null?void 0:H.contentHeight)??0,_=((M=o.value)==null?void 0:M.extensionHeight)??0;return f.value?n.value<p.value||a.value.fullyHide?v+_:v:v+_});Ne(y(()=>!!e.scrollBehavior),()=>{Me(()=>{f.value?a.value.inverted?s.value=n.value>p.value:s.value=c.value||n.value<p.value:s.value=!0})});const{ssrBootStyles:C}=he(),{layoutItemStyles:w}=lt({id:e.name,order:y(()=>parseInt(e.order,10)),position:oe(e,"location"),layoutSize:S,elementSize:A(void 0),active:s,absolute:oe(e,"absolute")});return N(()=>{const v=de.filterProps(e);return l(de,D({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...w.value,"--v-toolbar-image-opacity":b.value,height:void 0,...C.value},e.style]},v,{collapse:g.value,flat:V.value}),t)}),{}}}),Ut=I({scrollable:Boolean,...Z(),...Ve(),...Q({tag:"main"})},"VMain"),Dt=$()({name:"VMain",props:Ut(),setup(e,r){let{slots:t}=r;const{dimensionStyles:o}=_e(e),{mainStyles:s}=st(),{ssrBootStyles:a}=he();return N(()=>l(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,a.value,o.value,e.style]},{default:()=>{var u,n;return[e.scrollable?l("div",{class:"v-main__scroller"},[(u=t.default)==null?void 0:u.call(t)]):(n=t.default)==null?void 0:n.call(t)]}})),{}}}),Et=I({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Tt(),...xt()},"VSwitch"),zt=$()({name:"VSwitch",inheritAttrs:!1,props:Et(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{attrs:t,slots:o}=r;const s=se(e,"indeterminate"),a=se(e,"modelValue"),{loaderClasses:u}=pt(e),{isFocused:n,focus:p,blur:c}=kt(e),i=U(),f=Re&&window.matchMedia("(forced-colors: active)").matches,g=y(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),V=Le(),b=y(()=>e.id||`switch-${V}`);function S(){s.value&&(s.value=!1)}function C(w){var v,_;w.stopPropagation(),w.preventDefault(),(_=(v=i.value)==null?void 0:v.input)==null||_.click()}return N(()=>{const[w,v]=Ue(t),_=ue.filterProps(e),H=ce.filterProps(e);return l(ue,D({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":s.value},u.value,e.class]},w,_,{modelValue:a.value,"onUpdate:modelValue":M=>a.value=M,id:b.value,focused:n.value,style:e.style}),{...o,default:M=>{let{id:xe,messagesId:Te,isDisabled:Ce,isReadonly:we,isValid:re}=M;const ee={model:a,isValid:re};return l(ce,D({ref:i},H,{modelValue:a.value,"onUpdate:modelValue":[z=>a.value=z,S],id:xe.value,"aria-describedby":Te.value,type:"checkbox","aria-checked":s.value?"mixed":void 0,disabled:Ce.value,readonly:we.value,onFocus:p,onBlur:c},v),{...o,default:z=>{let{backgroundColorClasses:te,backgroundColorStyles:P}=z;return l("div",{class:["v-switch__track",f?void 0:te.value],style:P.value,onClick:C},[o["track-true"]&&l("div",{key:"prepend",class:"v-switch__track-true"},[o["track-true"](ee)]),o["track-false"]&&l("div",{key:"append",class:"v-switch__track-false"},[o["track-false"](ee)])])},input:z=>{let{inputNode:te,icon:P,backgroundColorClasses:Be,backgroundColorStyles:Pe}=z;return l(j,null,[te,l("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":P||e.loading},e.inset||f?void 0:Be.value],style:e.inset?void 0:Pe.value},[o.thumb?l(J,{defaults:{VIcon:{icon:P,size:"x-small"}}},{default:()=>[o.thumb({...ee,icon:P})]}):l(Ye,null,{default:()=>[e.loading?l(bt,{name:"v-switch",active:!0,color:re.value===!1?void 0:g.value},{default:ae=>o.loader?o.loader(ae):l(pe,{active:ae.isActive,color:ae.color,indeterminate:!0,size:"16",width:"2"},null)}):P&&l(yt,{key:String(P),icon:P,size:"x-small"},null)]})])])}})}})}),{}}}),Ft={class:"full-width d-flex my-1"},ke=W({__name:"VersionSelector",setup(e){const r=q("preferredVersion"),t={og:"Original",oz:"OZGame"},o=De(),s=y(()=>[o.params.versionType].flat()[0]),a=U("");O(()=>s.value,()=>{a.value=s.value},{immediate:!0});const u=c=>{c||(a.value=s.value)},n=y({get:()=>{const[c]=[o.params.versionType].flat();let[i]=[o.params.version].flat();return(!i||i==="latest")&&(i=F[c]),{type:c,value:i,title:`${t[c]} v${i}`}},set:({value:c,type:i})=>{let f=c;(c==="latest"||c===F[i])&&(f=void 0),r.value=i;const g=o.name==="RaceIndex"?"RaceSelection":o.name;Ee({name:g,params:{versionType:i,version:f}},{replace:!0})}}),p=y(()=>ze(Object.keys(le[a.value]??{})).map(c=>({value:c,type:a.value,title:`v${c}`})).filter(({value:c})=>c!==F[a.value]));return(c,i)=>(h(),x(qe,{modelValue:m(n),"onUpdate:modelValue":i[1]||(i[1]=f=>X(n)?n.value=f:null),items:m(p),"return-object":"",density:"compact",variant:"solo",label:"Version","hide-details":"","list-props":{density:"comfortable"},"bg-color":"transparent",flat:"","min-width":"min-content","onUpdate:menu":u,key:m(o).path},{"prepend-item":d(()=>[(h(!0),R(j,null,Y(m(le),(f,g)=>(h(),x(E,{onClick:V=>n.value={type:g,value:"",title:""},density:"compact",active:m(n).type===g&&m(n).value===m(F)[g]},{default:d(()=>[T(L(t[g])+" latest (v"+L(m(F)[g])+") ",1)]),_:2},1032,["onClick","active"]))),256)),k("div",Ft,[l(Ze,{class:"mx-auto",density:"compact",size:"small",modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=f=>X(a)?a.value=f:null)},{default:d(()=>[(h(!0),R(j,null,Y(m(le),(f,g)=>(h(),x(B,{density:"compact",size:"small",value:g,key:g},{default:d(()=>[T(L(t[g]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])]),item:d(({props:f,item:g})=>[l(E,D(f,{density:"compact"}),null,16)]),_:1},8,["modelValue","items"]))}}),Ot={class:"fill-height d-flex flex-column"},jt={class:"mt-auto py-2"},qt=W({__name:"AppHeaderMobile",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(e){const r=q("preferredVersion"),t=Fe(e,"modelValue");return(o,s)=>{const a=ke,u=ye;return h(),x(u,null,{default:d(()=>[l(nt,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=n=>t.value=n),location:"left",temporary:"",elevation:"4"},{default:d(()=>[k("div",Ot,[m(r)?(h(),x(ge,{key:0},{default:d(()=>[(h(!0),R(j,null,Y(m(be),(n,p)=>(h(),x(E,{key:p,to:{name:p,params:{versionType:m(r),version:(o._.provides[K]||o.$route).params.version}}},{default:d(()=>[T(L(n),1)]),_:2},1032,["to"]))),128)),l(et),l(E,{to:{name:"CreditsPage"}},{default:d(()=>s[1]||(s[1]=[T(" Credits ")])),_:1})]),_:1})):ie("",!0),k("div",jt,[l(a)])])]),_:1},8,["modelValue"])]),_:1})}}}),Wt={class:"d-none d-md-flex align-center flex-grow-1"},Zt={class:"d-flex"},Gt={key:0},Jt=W({__name:"AppHeader",setup(e){const r=q("preferredVersion","og");return(t,o)=>{const s=ke;return h(),R("div",Wt,[k("div",Zt,[m(r)?(h(!0),R(j,{key:1},Y(m(be),(a,u)=>(h(),x(B,{key:u,variant:"text",to:{name:u,params:{versionType:m(r),version:(t._.provides[K]||t.$route).params.version}},density:"comfortable",class:"mx-1"},{default:d(()=>[T(L(a),1)]),_:2},1032,["to"]))),128)):(h(),x(B,{key:0,variant:"text",to:"/",density:"comfortable",class:"mx-1"},{default:d(()=>o[0]||(o[0]=[T(" Home ")])),_:1}))]),l(Bt),l(B,{variant:"text",density:"comfortable",class:"mx-1",to:{name:"CreditsPage"}},{default:d(()=>o[1]||(o[1]=[T(" Credits ")])),_:1}),(t._.provides[K]||t.$route).params.versionType?(h(),R("div",Gt,[l(s)])):ie("",!0)])}}}),Xt={class:"float-button d-flex flex-column align-end"},Yt={class:"d-flex justify-space-between mt-1"},Kt={class:"d-flex align-center pr-2"},Qt=W({__name:"FloatButtons",setup(e){const r=q("tooltipsDisabled","false"),t=q("iconSize",Ke),o=y({get(){return isNaN(Number(t.value))?52:Number(t.value)},set(s){t.value=String(s)}});return(s,a)=>{const u=ye;return h(),x(We,{"close-on-content-click":!1},{activator:d(({props:n})=>[k("div",Xt,[l(B,D(n,{icon:m(_t),color:"primary",density:"comfortable"}),null,16,["icon"]),l(u,null,{default:d(()=>[l(Ge,null,{activator:d(({props:p})=>[l(B,D(p,{class:"mt-4 donate-button",color:"orange",icon:m(Vt),dark:!0,density:"comfortable",rel:"nofollow",target:"_blank",href:"https://boosty.to/fastowldiedie/donate"}),null,16,["icon"])]),default:d(()=>[a[3]||(a[3]=T(" Donate author "))]),_:1})]),_:1})])]),default:d(()=>[l(ge,{density:"comfortable"},{default:d(()=>[l(E,null,{default:d(()=>[a[6]||(a[6]=k("div",{"text-subtitle-2":""},"Icons size",-1)),k("div",Yt,[l(B,{icon:"",density:"compact",flat:"",disabled:m(o)<=32,onClick:a[0]||(a[0]=n=>o.value-=4)},{default:d(()=>a[4]||(a[4]=[T("-")])),_:1},8,["disabled"]),k("div",null,L(m(o)),1),l(B,{icon:"",density:"compact",flat:"",disabled:m(o)>=96,onClick:a[1]||(a[1]=n=>o.value+=4)},{default:d(()=>a[5]||(a[5]=[T("+")])),_:1},8,["disabled"])])]),_:1}),l(E,null,{default:d(()=>[k("div",Kt,[a[7]||(a[7]=k("span",{class:"mr-2 text-subtitle-2"},"Tooltips:",-1)),l(zt,{"true-value":"false","false-value":"true",modelValue:m(r),"onUpdate:modelValue":a[2]||(a[2]=n=>X(r)?r.value=n:null),"hide-details":"",density:"comfortable",color:"primary"},null,8,["modelValue"])])]),_:1})]),_:1})]),_:1})}}}),ea=fe(Qt,[["__scopeId","data-v-5a79ee84"]]),ta={class:"overflow-y-scroll fill-height scroll-offset position-relative"},aa=W({__name:"default",setup(e){const r=Oe(),t=U(!1),o=U(!1);return r.hook("page:start",()=>{t.value=!0}),r.hook("page:finish",()=>{t.value=!1}),ht({keywords:"survival chaos, ozgame, w3champions, warcraft 3, surv, sc",ogImageUrl:"/favicon.png"}),(s,a)=>{const u=qt,n=Jt,p=je,c=ea;return h(),x(It,{class:"app"},{default:d(()=>[l(u,{modelValue:m(o),"onUpdate:modelValue":a[0]||(a[0]=i=>X(o)?o.value=i:null)},null,8,["modelValue"]),l(Lt,{density:"compact",class:"patched-bg",floating:!1,"scroll-behavior":"elevate"},{default:d(()=>[(s._.provides[K]||s.$route).params.versionType?(h(),x(B,{key:0,onClick:a[1]||(a[1]=i=>o.value=!m(o)),icon:m(St),class:"d-md-none"},null,8,["icon"])):ie("",!0),l(n)]),_:1}),l(Dt,null,{default:d(()=>[k("div",ta,[l(wt,{fluid:""},{default:d(()=>[l(Qe,{"leave-absolute":""},{default:d(()=>[l(p,{"page-key":i=>i.path},null,8,["page-key"])]),_:1})]),_:1}),l(Je,{absolute:"","model-value":m(t),"content-class":"fill-height d-flex align-center justify-center flex-grow-1",class:"loading-overlay","close-on-content-click":!1,"close-on-back":!1,disabled:"",offset:[48,0,0,0],width:"100%",scrim:"black","location-strategy":"connected"},{default:d(()=>[l(pe,{size:"100",width:"6",indeterminate:""})]),_:1},8,["model-value"])])]),_:1}),l(c)]),_:1})}}}),ga=fe(aa,[["__scopeId","data-v-0917a65e"]]);export{ga as default};

import{by as qe,d as A,G as Xe,w as H,aQ as ae,h as Ye,bk as Ge,aA as Je,bz as Ke,bA as Qe,bB as Y,p as y,g as T,a2 as Ze,ac as ke,bq as et,N as K,a8 as tt,W as nt,c as v,a1 as h,b as u,z as V,bu as we,bC as de,bD as at,bE as st,bF as rt,bi as E,bp as it,b4 as xe,m as Te,bG as se,J as G,s as R,aB as ot,n as Ee,ag as ve,ai as lt,F as Pe,ah as ut,y as fe,U as re,bH as ct,Y as ie,Z as Le,bI as dt,bJ as vt,T as Be,u as ft,P as me,b1 as $e,aJ as mt,bK as ge,r as he,O as gt,aD as ht,bL as bt,bM as be}from"./DNsqdH4M.js";function yt(e,t={}){const n=t.head||qe();if(n)return n.ssr?n.push(e,t):_t(n,e,t)}function _t(e,t,n={}){const a=A(!1),r=A({});Xe(()=>{r.value=a.value?{}:Ke(t)});const s=e.push(r.value,n);return H(r,o=>{s.patch(o)}),Je()&&(ae(()=>{s.dispose()}),Ye(()=>{a.value=!0}),Ge(()=>{a.value=!1})),s}function sn(e,t){const{title:n,titleTemplate:a,...r}=e;return yt({title:n,titleTemplate:a,_flatMeta:r},{...t,transform(s){const i=Qe({...s._flatMeta});return delete s._flatMeta,{...s,meta:i}}})}const ze=["top","bottom"],St=["start","end","left","right"];function Ct(e,t){let[n,a]=e.split(" ");return a||(a=Y(ze,n)?"start":Y(St,n)?"top":"center"),{side:ye(n,t),align:ye(a,t)}}function ye(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function rn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function on(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function ln(e){return{side:e.align,align:e.side}}function un(e){return Y(ze,e.side)?"y":"x"}const N=y({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return T()({name:n??Ze(et(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...N()},setup(a,r){let{slots:s}=r;return()=>{var i;return ke(a.tag,{class:[e,a.class],style:a.style},(i=s.default)==null?void 0:i.call(s))}}})}function F(e){const t=K("useRender");t.render=e}const oe=y({tag:{type:String,default:"div"}},"tag"),pt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),kt=T(!1)({name:"VDefaultsProvider",props:pt(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:r,reset:s,root:i,scoped:o}=tt(e);return nt(a,{reset:s,root:i,scoped:o,disabled:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),wt=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function xt(e){return{dimensionStyles:v(()=>{const n={},a=h(e.height),r=h(e.maxHeight),s=h(e.maxWidth),i=h(e.minHeight),o=h(e.minWidth),l=h(e.width);return a!=null&&(n.height=a),r!=null&&(n.maxHeight=r),s!=null&&(n.maxWidth=s),i!=null&&(n.minHeight=i),o!=null&&(n.minWidth=o),l!=null&&(n.width=l),n})}}function Tt(e){return{aspectStyles:v(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Re=y({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...N(),...wt()},"VResponsive"),_e=T()({name:"VResponsive",props:Re(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=Tt(e),{dimensionStyles:r}=xt(e);return F(()=>{var s;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[u("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&u("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function le(e){return we(()=>{const t=[],n={};if(e.value.background)if(de(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&at(e.value.background)){const a=st(e.value.background);if(a.a==null||a.a===1){const r=rt(a);n.color=r,n.caretColor=r}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(de(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Ve(e,t){const n=v(()=>({text:V(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=le(n);return{textColorClasses:a,textColorStyles:r}}function X(e,t){const n=v(()=>({background:V(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=le(n);return{backgroundColorClasses:a,backgroundColorStyles:r}}const ue=y({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ce(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{roundedClasses:v(()=>{const a=V(e)?e.value:e.rounded,r=V(e)?e.value:e.tile,s=[];if(a===!0||a==="")s.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const i of String(a).split(" "))s.push(`rounded-${i}`);else(r||a===!1)&&s.push("rounded-0");return s})}}const Et=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),q=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:r,group:s,...i}=e,{component:o=s?it:xe,...l}=typeof a=="object"?a:{};return ke(o,Te(typeof a=="string"?{name:r?"":a}:l,typeof a=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:s}).filter(c=>{let[d,g]=c;return g!==void 0})),i),n)};function Pt(e,t){if(!se)return;const n=t.modifiers||{},a=t.value,{handler:r,options:s}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var g;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(g=e._observe)==null?void 0:g[t.instance.$.uid];if(!c)return;const d=o.some(b=>b.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||d||c.init)&&r(d,o,l),d&&n.once?Ne(e,t):c.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Ne(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Lt={mounted:Pt,unmounted:Ne},Bt=y({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Re(),...N(),...ue(),...Et()},"VImg"),$t=T()({name:"VImg",directives:{intersect:Lt},props:Bt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:r,backgroundColorStyles:s}=X(G(e,"color")),{roundedClasses:i}=ce(e),o=K("VImg"),l=R(""),c=A(),d=R(e.eager?"loading":"idle"),g=R(),b=R(),f=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=v(()=>f.value.aspect||g.value/b.value||0);H(()=>e.src,()=>{w(d.value!=="idle")}),H(S,(m,_)=>{!m&&_&&c.value&&p(c.value)}),ot(()=>w());function w(m){if(!(e.eager&&m)&&!(se&&!m&&!e.eager)){if(d.value="loading",f.value.lazySrc){const _=new Image;_.src=f.value.lazySrc,p(_,null)}f.value.src&&Ee(()=>{var _;n("loadstart",((_=c.value)==null?void 0:_.currentSrc)||f.value.src),setTimeout(()=>{var k;if(!o.isUnmounted)if((k=c.value)!=null&&k.complete){if(c.value.naturalWidth||P(),d.value==="error")return;S.value||p(c.value,null),d.value==="loading"&&j()}else S.value||p(c.value),M()})})}}function j(){var m;o.isUnmounted||(M(),p(c.value),d.value="loaded",n("load",((m=c.value)==null?void 0:m.currentSrc)||f.value.src))}function P(){var m;o.isUnmounted||(d.value="error",n("error",((m=c.value)==null?void 0:m.currentSrc)||f.value.src))}function M(){const m=c.value;m&&(l.value=m.currentSrc||m.src)}let x=-1;ae(()=>{clearTimeout(x)});function p(m){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const k=()=>{if(clearTimeout(x),o.isUnmounted)return;const{naturalHeight:z,naturalWidth:U}=m;z||U?(g.value=U,b.value=z):!m.complete&&d.value==="loading"&&_!=null?x=window.setTimeout(k,_):(m.currentSrc.endsWith(".svg")||m.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,b.value=1)};k()}const L=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),I=()=>{var k;if(!f.value.src||d.value==="idle")return null;const m=u("img",{class:["v-img__img",L.value],style:{objectPosition:e.position},src:f.value.src,srcset:f.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:j,onError:P},null),_=(k=a.sources)==null?void 0:k.call(a);return u(q,{transition:e.transition,appear:!0},{default:()=>[ve(_?u("picture",{class:"v-img__picture"},[_,m]):m,[[ut,d.value==="loaded"]])]})},B=()=>u(q,{transition:e.transition},{default:()=>[f.value.lazySrc&&d.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",L.value],style:{objectPosition:e.position},src:f.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Q=()=>a.placeholder?u(q,{transition:e.transition,appear:!0},{default:()=>[(d.value==="loading"||d.value==="error"&&!a.error)&&u("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,$=()=>a.error?u(q,{transition:e.transition,appear:!0},{default:()=>[d.value==="error"&&u("div",{class:"v-img__error"},[a.error()])]}):null,Z=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,O=R(!1);{const m=H(S,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.value=!0})}),m())})}return F(()=>{const m=_e.filterProps(e);return ve(u(_e,Te({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!O.value},r.value,i.value,e.class],style:[{width:h(e.width==="auto"?g.value:e.width)},s.value,e.style]},m,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(Pe,null,[u(I,null,null),u(B,null,null),u(Z,null,null),u(Q,null,null),u($,null,null)]),default:a.default}),[[lt("intersect"),{handler:w,options:e.options},null,{once:!0}]])}),{currentSrc:l,image:c,state:d,naturalWidth:g,naturalHeight:b}}}),zt=y({border:[Boolean,Number,String]},"border");function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{borderClasses:v(()=>{const a=V(e)?e.value:e.border,r=[];if(a===!0||a==="")r.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`border-${s}`);return r})}}const dn=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function vn(e){return{elevationClasses:v(()=>{const n=V(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const Vt=[null,"default","comfortable","compact"],Nt=y({density:{type:String,default:"default",validator:e=>Vt.includes(e)}},"density");function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{densityClasses:v(()=>`${t}--density-${e.density}`)}}const Ot=["elevated","flat","tonal","outlined","text","plain"];function Ht(e,t){return u(Pe,null,[e&&u("span",{key:"overlay",class:`${t}__overlay`},null),u("span",{key:"underlay",class:`${t}__underlay`},null)])}const At=y({color:String,variant:{type:String,default:"elevated",validator:e=>Ot.includes(e)}},"variant");function Dt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const n=v(()=>{const{variant:s}=fe(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:r}=le(v(()=>{const{variant:s,color:i}=fe(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:r,variantClasses:n}}const Wt=["x-small","small","default","large","x-large"],Ie=y({size:{type:[String,Number],default:"default"}},"size");function Oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return we(()=>{let n,a;return Y(Wt,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:h(e.size),height:h(e.size)}),{sizeClasses:n,sizeStyles:a}})}const Ft=y({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Le,...N(),...Ie(),...oe({tag:"i"}),...ie()},"VIcon"),jt=T()({name:"VIcon",props:Ft(),setup(e,t){let{attrs:n,slots:a}=t;const r=A(),{themeClasses:s}=re(e),{iconData:i}=ct(v(()=>r.value||e.icon)),{sizeClasses:o}=Oe(e),{textColorClasses:l,textColorStyles:c}=Ve(G(e,"color"));return F(()=>{var b,f;const d=(b=a.default)==null?void 0:b.call(a);d&&(r.value=(f=dt(d).filter(S=>S.type===vt&&S.children&&typeof S.children=="string")[0])==null?void 0:f.children);const g=!!(n.onClick||n.onClickOnce);return u(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,o.value,l.value,{"v-icon--clickable":g,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},c.value,e.style],role:g?"button":void 0,"aria-hidden":!g,tabindex:g?e.disabled?-1:0:void 0},{default:()=>[d]})}),{}}});function Mt(e,t){const n=A(),a=R(!1);if(se){const r=new IntersectionObserver(s=>{a.value=!!s.find(i=>i.isIntersecting)},t);ae(()=>{r.disconnect()}),H(n,(s,i)=>{i&&(r.unobserve(i),a.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const Se={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ut=y({location:String},"location");function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=Be();return{locationStyles:v(()=>{if(!e.location)return{};const{side:s,align:i}=Ct(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(c){return n?n(c):0}const l={};return s!=="center"&&(t?l[Se[s]]=`calc(100% - ${o(s)}px)`:l[s]=0),i!=="center"?t?l[Se[i]]=`calc(100% - ${o(i)}px)`:l[i]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const Xt=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...N(),...Ut({location:"top"}),...ue(),...oe(),...ie()},"VProgressLinear"),Yt=T()({name:"VProgressLinear",props:Xt(),emits:{"update:modelValue":e=>!0},setup(e,t){var O;let{slots:n}=t;const a=ft(e,"modelValue"),{isRtl:r,rtlClasses:s}=Be(),{themeClasses:i}=re(e),{locationStyles:o}=qt(e),{textColorClasses:l,textColorStyles:c}=Ve(e,"color"),{backgroundColorClasses:d,backgroundColorStyles:g}=X(v(()=>e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:f}=X(v(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:S,backgroundColorStyles:w}=X(e,"color"),{roundedClasses:j}=ce(e),{intersectionRef:P,isIntersecting:M}=Mt(),x=v(()=>parseFloat(e.max)),p=v(()=>parseFloat(e.height)),L=v(()=>me(parseFloat(e.bufferValue)/x.value*100,0,100)),I=v(()=>me(parseFloat(a.value)/x.value*100,0,100)),B=v(()=>r.value!==e.reverse),Q=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),$=$e&&((O=window.matchMedia)==null?void 0:O.call(window,"(forced-colors: active)").matches);function Z(m){if(!P.value)return;const{left:_,right:k,width:z}=P.value.getBoundingClientRect(),U=B.value?z-m.clientX+(k-z):m.clientX-_;a.value=Math.round(U/z*x.value)}return F(()=>u(e.tag,{ref:P,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&M.value,"v-progress-linear--reverse":B.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},j.value,i.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(p.value):0,"--v-progress-linear-height":h(p.value),...e.absolute?o.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:I.value,onClick:e.clickable&&Z},{default:()=>[e.stream&&u("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[B.value?"left":"right"]:h(-p.value),borderTop:`${h(p.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${h(p.value/4)})`,width:h(100-L.value,"%"),"--v-progress-linear-stream-to":h(p.value*(B.value?1:-1))}},null),u("div",{class:["v-progress-linear__background",$?void 0:d.value],style:[g.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),u("div",{class:["v-progress-linear__buffer",$?void 0:b.value],style:[f.value,{opacity:parseFloat(e.bufferOpacity),width:h(L.value,"%")}]},null),u(xe,{name:Q.value},{default:()=>[e.indeterminate?u("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(m=>u("div",{key:m,class:["v-progress-linear__indeterminate",m,$?void 0:S.value],style:w.value},null))]):u("div",{class:["v-progress-linear__determinate",$?void 0:S.value],style:[w.value,{width:h(I.value,"%")}]},null)]}),n.default&&u("div",{class:"v-progress-linear__content"},[n.default({value:I.value,buffer:L.value})])]})),{}}}),fn=y({loading:[Boolean,String]},"loader");function mn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{loaderClasses:v(()=>({[`${t}--loading`]:e.loading}))}}function gn(e,t){var a;let{slots:n}=t;return u("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||u(Yt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Gt=["static","relative","fixed","absolute","sticky"],hn=y({position:{type:String,validator:e=>Gt.includes(e)}},"position");function bn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{positionClasses:v(()=>e.position?`${t}--${e.position}`:void 0)}}function Jt(){const e=K("useRoute");return v(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function yn(){var e,t;return(t=(e=K("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function _n(e,t){var g,b;const n=mt("RouterLink"),a=v(()=>!!(e.href||e.to)),r=v(()=>(a==null?void 0:a.value)||ge(t,"click")||ge(e,"click"));if(typeof n=="string"||!("useLink"in n)){const f=G(e,"href");return{isLink:a,isClickable:r,href:f,linkProps:he({href:f})}}const s=v(()=>({...e,to:G(()=>e.to||"")})),i=n.useLink(s.value),o=v(()=>e.to?i:void 0),l=Jt(),c=v(()=>{var f,S,w;return o.value?e.exact?l.value?((w=o.value.isExactActive)==null?void 0:w.value)&&gt(o.value.route.value.query,l.value.query):((S=o.value.isExactActive)==null?void 0:S.value)??!1:((f=o.value.isActive)==null?void 0:f.value)??!1:!1}),d=v(()=>{var f;return e.to?(f=o.value)==null?void 0:f.route.value.href:e.href});return{isLink:a,isClickable:r,isActive:c,route:(g=o.value)==null?void 0:g.route,navigate:(b=o.value)==null?void 0:b.navigate,href:d,linkProps:he({href:d,"aria-current":v(()=>c.value?"page":void 0)})}}const Sn=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ee=!1;function Cn(e,t){let n=!1,a,r;$e&&(Ee(()=>{window.addEventListener("popstate",s),a=e==null?void 0:e.beforeEach((i,o,l)=>{ee?n?t(l):l():setTimeout(()=>n?t(l):l()),ee=!0}),r=e==null?void 0:e.afterEach(()=>{ee=!1})}),ht(()=>{window.removeEventListener("popstate",s),a==null||a(),r==null||r()}));function s(i){var o;(o=i.state)!=null&&o.replaced||(n=!0,setTimeout(()=>n=!1))}}const te=Symbol("rippleStop"),Kt=80;function Ce(e,t){e.style.transform=t,e.style.webkitTransform=t}function ne(e){return e.constructor.name==="TouchEvent"}function He(e){return e.constructor.name==="KeyboardEvent"}const Qt=function(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,r=0;if(!He(e)){const b=t.getBoundingClientRect(),f=ne(e)?e.touches[e.touches.length-1]:e;a=f.clientX-b.left,r=f.clientY-b.top}let s=0,i=.3;(g=t._ripple)!=null&&g.circle?(i=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-s*2)/2}px`,l=`${(t.clientHeight-s*2)/2}px`,c=n.center?o:`${a-s}px`,d=n.center?l:`${r-s}px`;return{radius:s,scale:i,x:c,y:d,centerX:o,centerY:l}},J={show(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=t==null?void 0:t._ripple)!=null&&f.enabled))return;const a=document.createElement("span"),r=document.createElement("span");a.appendChild(r),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:i,x:o,y:l,centerX:c,centerY:d}=Qt(e,t,n),g=`${s*2}px`;r.className="v-ripple__animation",r.style.width=g,r.style.height=g,t.appendChild(a);const b=window.getComputedStyle(t);b&&b.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),Ce(r,`translate(${o}, ${l}) scale3d(${i},${i},${i})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),Ce(r,`translate(${c}, ${d}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),r=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function Ae(e){return typeof e>"u"||!!e}function D(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[te])){if(e[te]=!0,ne(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||He(e),n._ripple.class&&(t.class=n._ripple.class),ne(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{J.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Kt)}else J.show(e,n,t)}}function pe(e){e[te]=!0}function C(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{C(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),J.hide(t)}}function De(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let W=!1;function We(e){!W&&(e.keyCode===be.enter||e.keyCode===be.space)&&(W=!0,D(e))}function Fe(e){W=!1,C(e)}function je(e){W&&(W=!1,C(e))}function Me(e,t,n){const{value:a,modifiers:r}=t,s=Ae(a);if(s||J.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=r.center,e._ripple.circle=r.circle,bt(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(r.stop){e.addEventListener("touchstart",pe,{passive:!0}),e.addEventListener("mousedown",pe);return}e.addEventListener("touchstart",D,{passive:!0}),e.addEventListener("touchend",C,{passive:!0}),e.addEventListener("touchmove",De,{passive:!0}),e.addEventListener("touchcancel",C),e.addEventListener("mousedown",D),e.addEventListener("mouseup",C),e.addEventListener("mouseleave",C),e.addEventListener("keydown",We),e.addEventListener("keyup",Fe),e.addEventListener("blur",je),e.addEventListener("dragstart",C,{passive:!0})}else!s&&n&&Ue(e)}function Ue(e){e.removeEventListener("mousedown",D),e.removeEventListener("touchstart",D),e.removeEventListener("touchend",C),e.removeEventListener("touchmove",De),e.removeEventListener("touchcancel",C),e.removeEventListener("mouseup",C),e.removeEventListener("mouseleave",C),e.removeEventListener("keydown",We),e.removeEventListener("keyup",Fe),e.removeEventListener("dragstart",C),e.removeEventListener("blur",je)}function Zt(e,t){Me(e,t,!1)}function en(e){delete e._ripple,Ue(e)}function tn(e,t){if(t.value===t.oldValue)return;const n=Ae(t.oldValue);Me(e,t,n)}const pn={mounted:Zt,unmounted:en,updated:tn},nn=y({start:Boolean,end:Boolean,icon:Le,image:String,text:String,...zt(),...N(),...Nt(),...ue(),...Ie(),...oe(),...ie(),...At({variant:"flat"})},"VAvatar"),kn=T()({name:"VAvatar",props:nn(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=re(e),{borderClasses:r}=Rt(e),{colorClasses:s,colorStyles:i,variantClasses:o}=Dt(e),{densityClasses:l}=It(e),{roundedClasses:c}=ce(e),{sizeClasses:d,sizeStyles:g}=Oe(e);return F(()=>u(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,r.value,s.value,l.value,c.value,d.value,o.value,e.class],style:[i.value,g.value,e.style]},{default:()=>[n.default?u(kt,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?u($t,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?u(jt,{key:"icon",icon:e.icon},null):e.text,Ht(!1,"v-avatar")]})),{}}});export{Rt as A,Dt as B,bn as C,_n as D,Sn as E,hn as F,Ht as G,$t as H,Lt as I,yn as J,ye as K,gn as L,q as M,Oe as N,Mt as O,Ct as P,rn as Q,pn as R,on as S,ln as T,un as U,jt as V,Cn as W,sn as a,oe as b,Ie as c,ue as d,dn as e,Nt as f,N as g,zt as h,mn as i,X as j,fn as k,It as l,At as m,xt as n,kt as o,wt as p,vn as q,ce as r,yt as s,Ve as t,F as u,qt as v,Et as w,Ut as x,cn as y,kn as z};

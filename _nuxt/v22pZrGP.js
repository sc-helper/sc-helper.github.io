import{p as l,a2 as W,e as n,q as g,F as P,a5 as p,a0 as X,c as S,a4 as Y,ak as Z,am as ee,m as ae,d as te,b1 as ne,a as se,b as C,o as V,g as x,ag as B,r as y,a_ as de,a$ as le,f as ie,_ as re}from"./BFk4i7z6.js";import{g as i,a as r,b as I,y as ce,z as T,V as L,o as h,f as H,R as ue,A as oe,B as ve,l as me,n as ye,q as pe,i as ge,v as ke,C as be,r as fe,D as Ce,m as Ve,E as he,d as Ie,F as _e,x as Ae,k as Pe,e as Se,p as xe,h as Be,G as Te,H as Le,L as He}from"./CwsPMnIk.js";const Ne=l()({name:"VCardActions",props:i(),setup(e,s){let{slots:t}=s;return W({VBtn:{slim:!0,variant:"text"}}),r(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),De=g({opacity:[Number,String],...i(),...I()},"VCardSubtitle"),Re=l()({name:"VCardSubtitle",props:De(),setup(e,s){let{slots:t}=s;return r(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),N=ce("v-card-title"),$e=g({appendAvatar:String,appendIcon:p,prependAvatar:String,prependIcon:p,subtitle:[String,Number],title:[String,Number],...i(),...H()},"VCardItem"),Fe=l()({name:"VCardItem",props:$e(),setup(e,s){let{slots:t}=s;return r(()=>{var o;const a=!!(e.prependAvatar||e.prependIcon),c=!!(a||t.prepend),u=!!(e.appendAvatar||e.appendIcon),k=!!(u||t.append),b=!!(e.title!=null||t.title),f=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[c&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(h,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(P,null,[e.prependAvatar&&n(T,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(L,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[b&&n(N,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),f&&n(Re,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(o=t.default)==null?void 0:o.call(t)]),k&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(h,{key:"append-defaults",disabled:!u,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(P,null,[e.appendIcon&&n(L,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(T,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Ee=g({opacity:[Number,String],...i(),...I()},"VCardText"),D=l()({name:"VCardText",props:Ee(),setup(e,s){let{slots:t}=s;return r(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Me=g({appendAvatar:String,appendIcon:p,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:p,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Be(),...i(),...H(),...xe(),...Se(),...Pe(),...Ae(),..._e(),...Ie(),...he(),...I(),...Y(),...Ve({variant:"elevated"})},"VCard"),qe=l()({name:"VCard",directives:{Ripple:ue},props:Me(),setup(e,s){let{attrs:t,slots:a}=s;const{themeClasses:c}=X(e),{borderClasses:u}=oe(e),{colorClasses:k,colorStyles:b,variantClasses:f}=ve(e),{densityClasses:o}=me(e),{dimensionStyles:d}=ye(e),{elevationClasses:R}=pe(e),{loaderClasses:$}=ge(e),{locationStyles:F}=ke(e),{positionClasses:E}=be(e),{roundedClasses:M}=fe(e),v=Ce(e,t),q=S(()=>e.link!==!1&&v.isLink.value),m=S(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return r(()=>{const w=q.value?"a":e.tag,z=!!(a.title||e.title!=null),O=!!(a.subtitle||e.subtitle!=null),j=z||O,G=!!(a.append||e.appendAvatar||e.appendIcon),J=!!(a.prepend||e.prependAvatar||e.prependIcon),K=!!(a.image||e.image),Q=j||J||G,U=!!(a.text||e.text!=null);return Z(n(w,ae({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":m.value},c.value,u.value,k.value,o.value,R.value,$.value,E.value,M.value,f.value,e.class],style:[b.value,d.value,F.value,e.style],onClick:m.value&&v.navigate,tabindex:e.disabled?-1:void 0},v.linkProps),{default:()=>{var _;return[K&&n("div",{key:"image",class:"v-card__image"},[a.image?n(h,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(Le,{key:"image-img",cover:!0,src:e.image},null)]),n(He,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),Q&&n(Fe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),U&&n(D,{key:"text"},{default:()=>{var A;return[((A=a.text)==null?void 0:A.call(a))??e.text]}}),(_=a.default)==null?void 0:_.call(a),a.actions&&n(Ne,null,{default:a.actions}),Te(m.value,"v-card")]}}),[[ee("ripple"),m.value&&e.ripple]])}),{}}}),we=["innerHTML"],ze={key:0,class:"append"},Oe={key:1,class:"prepend"},je=te({__name:"CCard",props:{title:{},fullHeight:{type:Boolean,default:!0}},setup(e){const{appendHead:s,prependHead:t}=ne();return(a,c)=>(V(),se(qe,{class:"patched-bg position-relative",height:a.fullHeight?"100%":void 0},{default:C(()=>[n(N,{class:"title"},{default:C(()=>[y(a.$slots,"title",{},()=>[ie("div",{innerHTML:a.title},null,8,we)],!0)]),_:3}),s?(V(),x("div",ze,[y(a.$slots,"appendHead",{},void 0,!0)])):B("",!0),t?(V(),x("div",Oe,[y(a.$slots,"prependHead",{},void 0,!0)])):B("",!0),n(D,de(le(a.$attrs)),{default:C(()=>[y(a.$slots,"default",{},void 0,!0)]),_:3},16)]),_:3},8,["height"]))}}),Ke=re(je,[["__scopeId","data-v-d16def0a"]]);export{Ke as _};

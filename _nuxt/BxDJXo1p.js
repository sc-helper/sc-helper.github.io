import{B as A,k as Se,c as g,bp as Ce,q as H,p as q,ab as Ve,a5 as D,$ as xe,a1 as Ie,bq as Pe,b3 as ne,w as ze,e as s,bb as _e,a4 as ee,V as Ae,a0 as te,a2 as we,Q as F,m as Z,X as Be,s as Re,ak as se,am as Ee,ad as ie,al as Te,F as oe,a8 as re}from"./BFk4i7z6.js";import{a as ce,d as Fe}from"./CD1f0noL.js";import{b as le,g as N,a as ae,V as w,m as he,R as De,A as Ge,B as Oe,l as Me,q as We,r as Le,N as He,D as qe,c as Ne,E as $e,d as Ke,e as Ue,f as Qe,h as Xe,G as je,o as L,z as ue,t as Je}from"./CwsPMnIk.js";import{c as pe,b as me,u as de,a as Ye,m as Ze}from"./DdOML45U.js";function dt(){const e=A(!1);return Se(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:g(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ce(e)}}function et(e){let{selectedElement:n,containerElement:a,isRtl:r,isHorizontal:i}=e;const h=G(i,a),c=ye(i,r,a),p=G(i,n),u=ge(i,n),k=p*.4;return c>u?u-k:c+h<u+p?u-h+p+k:c}function tt(e){let{selectedElement:n,containerElement:a,isHorizontal:r}=e;const i=G(r,a),h=ge(r,n),c=G(r,n);return h-i/2+c/2}function ve(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function lt(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function ye(e,n,a){if(!a)return 0;const{scrollLeft:r,offsetWidth:i,scrollWidth:h}=a;return e?n?h-i+r:r:a.scrollTop}function G(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function ge(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const at=Symbol.for("vuetify:v-slide-group"),ke=H({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:at},nextIcon:{type:D,default:"$next"},prevIcon:{type:D,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...N(),...Ve({mobile:null}),...le(),...pe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),fe=q()({name:"VSlideGroup",props:ke(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:r}=xe(),{displayClasses:i,mobile:h}=Ie(e),c=me(e,e.symbol),p=A(!1),u=A(0),k=A(0),V=A(0),v=g(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:B}=de(),{resizeRef:m,contentRect:I}=de(),o=Pe(),b=g(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),$=g(()=>c.selected.value.length?c.items.value.findIndex(t=>t.id===c.selected.value[0]):-1),S=g(()=>c.selected.value.length?c.items.value.findIndex(t=>t.id===c.selected.value[c.selected.value.length-1]):-1);if(ne){let t=-1;ze(()=>[c.selected.value,B.value,I.value,v.value],()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{if(B.value&&I.value){const l=v.value?"width":"height";k.value=B.value[l],V.value=I.value[l],p.value=k.value+1<V.value}if($.value>=0&&m.el){const l=m.el.children[S.value];R(l,e.centerActive)}})})}const P=A(!1);function R(t,l){let d=0;l?d=tt({containerElement:f.el,isHorizontal:v.value,selectedElement:t}):d=et({containerElement:f.el,isHorizontal:v.value,isRtl:r.value,selectedElement:t}),O(d)}function O(t){if(!ne||!f.el)return;const l=G(v.value,f.el),d=ye(v.value,r.value,f.el);if(!(ve(v.value,f.el)<=l||Math.abs(t-d)<16)){if(v.value&&r.value&&f.el){const{scrollWidth:W,offsetWidth:Y}=f.el;t=W-Y-t}v.value?o.horizontal(t,b.value):o(t,b.value)}}function y(t){const{scrollTop:l,scrollLeft:d}=t.target;u.value=v.value?d:l}function x(t){if(P.value=!0,!(!p.value||!m.el)){for(const l of t.composedPath())for(const d of m.el.children)if(d===l){R(d);return}}}function K(t){P.value=!1}let E=!1;function M(t){var l;!E&&!P.value&&!(t.relatedTarget&&((l=m.el)!=null&&l.contains(t.relatedTarget)))&&C(),E=!1}function T(){E=!0}function U(t){if(!m.el)return;function l(d){t.preventDefault(),C(d)}v.value?t.key==="ArrowRight"?l(r.value?"prev":"next"):t.key==="ArrowLeft"&&l(r.value?"next":"prev"):t.key==="ArrowDown"?l("next"):t.key==="ArrowUp"&&l("prev"),t.key==="Home"?l("first"):t.key==="End"&&l("last")}function C(t){var d,_;if(!m.el)return;let l;if(!t)l=_e(m.el)[0];else if(t==="next"){if(l=(d=m.el.querySelector(":focus"))==null?void 0:d.nextElementSibling,!l)return C("first")}else if(t==="prev"){if(l=(_=m.el.querySelector(":focus"))==null?void 0:_.previousElementSibling,!l)return C("last")}else t==="first"?l=m.el.firstElementChild:t==="last"&&(l=m.el.lastElementChild);l&&l.focus({preventScroll:!0})}function z(t){const l=v.value&&r.value?-1:1,d=(t==="prev"?-l:l)*k.value;let _=u.value+d;if(v.value&&r.value&&f.el){const{scrollWidth:W,offsetWidth:Y}=f.el;_+=W-Y}O(_)}const Q=g(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),X=g(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!h.value;case!0:return p.value||Math.abs(u.value)>0;case"mobile":return h.value||p.value||Math.abs(u.value)>0;default:return!h.value&&(p.value||Math.abs(u.value)>0)}}),j=g(()=>Math.abs(u.value)>1),J=g(()=>{if(!f.value)return!1;const t=ve(v.value,f.el),l=lt(v.value,f.el);return t-l-Math.abs(u.value)>1});return ae(()=>s(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":X.value,"v-slide-group--is-overflowing":p.value},i.value,e.class],style:e.style,tabindex:P.value||c.selected.value.length?-1:0,onFocus:M},{default:()=>{var t,l,d;return[X.value&&s("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!j.value}],onMousedown:T,onClick:()=>j.value&&z("prev")},[((t=a.prev)==null?void 0:t.call(a,Q.value))??s(ce,null,{default:()=>[s(w,{icon:r.value?e.nextIcon:e.prevIcon},null)]})]),s("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:y},[s("div",{ref:m,class:"v-slide-group__content",onFocusin:x,onFocusout:K,onKeydown:U},[(l=a.default)==null?void 0:l.call(a,Q.value)])]),X.value&&s("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!J.value}],onMousedown:T,onClick:()=>J.value&&z("next")},[((d=a.next)==null?void 0:d.call(a,Q.value))??s(ce,null,{default:()=>[s(w,{icon:r.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:z,scrollOffset:u,focus:C,hasPrev:j,hasNext:J}}}),be=Symbol.for("vuetify:v-chip-group"),nt=H({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ae},...ke(),...N(),...pe({selectedClass:"v-chip--selected"}),...le(),...ee(),...he({variant:"tonal"})},"VChipGroup");q()({name:"VChipGroup",props:nt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:r}=te(e),{isSelected:i,select:h,next:c,prev:p,selected:u}=me(e,be);return we({VChip:{color:F(e,"color"),disabled:F(e,"disabled"),filter:F(e,"filter"),variant:F(e,"variant")}}),ae(()=>{const k=fe.filterProps(e);return s(fe,Z(k,{class:["v-chip-group",{"v-chip-group--column":e.column},r.value,e.class],style:e.style}),{default:()=>{var V;return[(V=a.default)==null?void 0:V.call(a,{isSelected:i,select:h,next:c,prev:p,selected:u.value})]}})}),{}}});const st=H({activeClass:String,appendAvatar:String,appendIcon:D,closable:Boolean,closeIcon:{type:D,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:D,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ie(),onClickOnce:ie(),...Xe(),...N(),...Qe(),...Ue(),...Ze(),...Ke(),...$e(),...Ne(),...le({tag:"span"}),...ee(),...he({variant:"tonal"})},"VChip"),vt=q()({name:"VChip",directives:{Ripple:De},props:st(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:a,emit:r,slots:i}=n;const{t:h}=Be(),{borderClasses:c}=Ge(e),{colorClasses:p,colorStyles:u,variantClasses:k}=Oe(e),{densityClasses:V}=Me(e),{elevationClasses:v}=We(e),{roundedClasses:f}=Le(e),{sizeClasses:B}=He(e),{themeClasses:m}=te(e),I=Re(e,"modelValue"),o=Ye(e,be,!1),b=qe(e,a),$=g(()=>e.link!==!1&&b.isLink.value),S=g(()=>!e.disabled&&e.link!==!1&&(!!o||e.link||b.isClickable.value)),P=g(()=>({"aria-label":h(e.closeLabel),onClick(y){y.preventDefault(),y.stopPropagation(),I.value=!1,r("click:close",y)}}));function R(y){var x;r("click",y),S.value&&((x=b.navigate)==null||x.call(b,y),o==null||o.toggle())}function O(y){(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),R(y))}return()=>{const y=b.isLink.value?"a":e.tag,x=!!(e.appendIcon||e.appendAvatar),K=!!(x||i.append),E=!!(i.close||e.closable),M=!!(i.filter||e.filter)&&o,T=!!(e.prependIcon||e.prependAvatar),U=!!(T||i.prepend),C=!o||o.isSelected.value;return I.value&&se(s(y,Z({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":M,"v-chip--pill":e.pill},m.value,c.value,C?p.value:void 0,V.value,v.value,f.value,B.value,k.value,o==null?void 0:o.selectedClass.value,e.class],style:[C?u.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:S.value?0:void 0,onClick:R,onKeydown:S.value&&!$.value&&O},b.linkProps),{default:()=>{var z;return[je(S.value,"v-chip"),M&&s(Fe,{key:"filter"},{default:()=>[se(s("div",{class:"v-chip__filter"},[i.filter?s(L,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},i.filter):s(w,{key:"filter-icon",icon:e.filterIcon},null)]),[[Te,o.isSelected.value]])]}),U&&s("div",{key:"prepend",class:"v-chip__prepend"},[i.prepend?s(L,{key:"prepend-defaults",disabled:!T,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},i.prepend):s(oe,null,[e.prependIcon&&s(w,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&s(ue,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),s("div",{class:"v-chip__content","data-no-activator":""},[((z=i.default)==null?void 0:z.call(i,{isSelected:o==null?void 0:o.isSelected.value,selectedClass:o==null?void 0:o.selectedClass.value,select:o==null?void 0:o.select,toggle:o==null?void 0:o.toggle,value:o==null?void 0:o.value.value,disabled:e.disabled}))??e.text]),K&&s("div",{key:"append",class:"v-chip__append"},[i.append?s(L,{key:"append-defaults",disabled:!x,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},i.append):s(oe,null,[e.appendIcon&&s(w,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&s(ue,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),E&&s("button",Z({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},P.value),[i.close?s(L,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},i.close):s(w,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ee("ripple"),S.value&&e.ripple,null]])}}}),it=H({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...N(),...ee()},"VDivider"),ft=q()({name:"VDivider",props:it(),setup(e,n){let{attrs:a,slots:r}=n;const{themeClasses:i}=te(e),{textColorClasses:h,textColorStyles:c}=Je(F(e,"color")),p=g(()=>{const u={};return e.length&&(u[e.vertical?"height":"width"]=re(e.length)),e.thickness&&(u[e.vertical?"borderRightWidth":"borderTopWidth"]=re(e.thickness)),u});return ae(()=>{const u=s("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},i.value,h.value,e.class],style:[p.value,c.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!a.role||a.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${a.role||"separator"}`},null);return r.default?s("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[u,s("div",{class:"v-divider__content"},[r.default()]),u]):u}),{}}});export{vt as V,ft as a,at as b,fe as c,dt as u};

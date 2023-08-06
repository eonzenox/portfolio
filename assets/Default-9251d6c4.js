import{u as de,m as ve,a as M,b as fe,c as me,d as ee,e as ye,f as ge,g as he,h as pe,i as L,j as Fe,_ as Oe,V as De,k as Me,l as X,n as je,o as qe}from"./VImg-881afb73.js";import{p as T,i as be,c,r as Ke,a as F,g as _e,s as G,o as Ge,b as xe,d as I,f as Ue,e as Ze,h as Je,j as We,k as Xe,m as te,l as C,n as ae,t as O,q as s,u as P,v as D,w as x,x as Ve,F as Se,y as Ie,z as ne,A as q,B as Y,C as Te,T as Ye,D as ke,E as we,G as Qe,H as Ce,I as et,J as re,K as tt}from"./index-7495cade.js";import{V as oe,m as at}from"./VBtn-c21b8161.js";import{V as K}from"./VDivider-5c1cf255.js";const Q=Symbol.for("vuetify:layout"),Be=Symbol.for("vuetify:layout-item"),ue=1e3,nt=T({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),ot=T({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function st(e){const i=be(Q);if(!i)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Ze()}`,o=_e("useLayoutItem");xe(Be,{id:t});const l=G(!1);Je(()=>l.value=!0),We(()=>l.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:a}=i.register(o,{...e,active:c(()=>l.value?!1:e.active.value),id:t});return Xe(()=>i.unregister(t)),{layoutItemStyles:r,layoutRect:i.layoutRect,layoutItemScrimStyles:a}}const lt=(e,i,t,o)=>{let l={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...l}}];for(const a of e){const n=i.get(a),v=t.get(a),y=o.get(a);if(!n||!v||!y)continue;const f={...l,[n.value]:parseInt(l[n.value],10)+(y.value?parseInt(v.value,10):0)};r.push({id:a,layer:f}),l=f}return r};function it(e){const i=be(Q,null),t=c(()=>i?i.rootZIndex.value-100:ue),o=Ke([]),l=F(new Map),r=F(new Map),a=F(new Map),n=F(new Map),v=F(new Map),{resizeRef:y,contentRect:f}=de(),b=c(()=>{const d=new Map,_=e.overlaps??[];for(const u of _.filter(g=>g.includes(":"))){const[g,m]=u.split(":");if(!o.value.includes(g)||!o.value.includes(m))continue;const S=l.get(g),$=l.get(m),H=r.get(g),R=r.get(m);!S||!$||!H||!R||(d.set(m,{position:S.value,amount:parseInt(H.value,10)}),d.set(g,{position:$.value,amount:-parseInt(R.value,10)}))}return d}),h=c(()=>{const d=[...new Set([...a.values()].map(u=>u.value))].sort((u,g)=>u-g),_=[];for(const u of d){const g=o.value.filter(m=>{var S;return((S=a.get(m))==null?void 0:S.value)===u});_.push(...g)}return lt(_,l,r,n)}),k=c(()=>!Array.from(v.values()).some(d=>d.value)),B=c(()=>h.value[h.value.length-1].layer),U=c(()=>({"--v-layout-left":I(B.value.left),"--v-layout-right":I(B.value.right),"--v-layout-top":I(B.value.top),"--v-layout-bottom":I(B.value.bottom),...k.value?void 0:{transition:"none"}})),w=c(()=>h.value.slice(1).map((d,_)=>{let{id:u}=d;const{layer:g}=h.value[_],m=r.get(u),S=l.get(u);return{id:u,...g,size:Number(m.value),position:S.value}})),z=d=>w.value.find(_=>_.id===d),A=_e("createLayout"),N=G(!1);Ge(()=>{N.value=!0}),xe(Q,{register:(d,_)=>{let{id:u,order:g,position:m,layoutSize:S,elementSize:$,active:H,disableTransitions:R,absolute:Ne}=_;a.set(u,g),l.set(u,m),r.set(u,S),n.set(u,H),R&&v.set(u,R);const se=Ue(Be,A==null?void 0:A.vnode).indexOf(d);se>-1?o.value.splice(se,0,u):o.value.push(u);const le=c(()=>w.value.findIndex(E=>E.id===u)),Z=c(()=>t.value+h.value.length*2-le.value*2),He=c(()=>{const E=m.value==="left"||m.value==="right",J=m.value==="right",Ee=m.value==="bottom",ie={[m.value]:0,zIndex:Z.value,transform:`translate${E?"X":"Y"}(${(H.value?0:-110)*(J||Ee?-1:1)}%)`,position:Ne.value||t.value!==ue?"absolute":"fixed",...k.value?void 0:{transition:"none"}};if(!N.value)return ie;const V=w.value[le.value];if(!V)throw new Error(`[Vuetify] Could not find layout item "${u}"`);const W=b.value.get(u);return W&&(V[W.position]+=W.amount),{...ie,height:E?`calc(100% - ${V.top}px - ${V.bottom}px)`:$.value?`${$.value}px`:void 0,left:J?void 0:`${V.left}px`,right:J?`${V.right}px`:void 0,top:m.value!=="bottom"?`${V.top}px`:void 0,bottom:m.value!=="top"?`${V.bottom}px`:void 0,width:E?$.value?`${$.value}px`:void 0:`calc(100% - ${V.left}px - ${V.right}px)`}}),Re=c(()=>({zIndex:Z.value-1}));return{layoutItemStyles:He,layoutItemScrimStyles:Re,zIndex:Z}},unregister:d=>{a.delete(d),l.delete(d),r.delete(d),n.delete(d),v.delete(d),o.value=o.value.filter(_=>_!==d)},mainRect:B,mainStyles:U,getLayoutItem:z,items:w,layoutRect:f,rootZIndex:t});const j=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ze=c(()=>({zIndex:t.value,position:i?"relative":void 0,overflow:i?"hidden":void 0}));return{layoutClasses:j,layoutStyles:ze,getLayoutItem:z,items:w,layoutRect:f,layoutRef:y}}const rt="/assets/logo1-cf326c87.png";const ut=T({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ve(),...M(),...fe(),...ot(),...me(),...ee({tag:"footer"}),...te()},"VFooter"),ct=C()({name:"VFooter",props:ut(),setup(e,i){let{slots:t}=i;const{themeClasses:o}=ae(e),{backgroundColorClasses:l,backgroundColorStyles:r}=ye(O(e,"color")),{borderClasses:a}=ge(e),{elevationClasses:n}=he(e),{roundedClasses:v}=pe(e),y=G(32),{resizeRef:f}=de(k=>{k.length&&(y.value=k[0].target.clientHeight)}),b=c(()=>e.height==="auto"?y.value:parseInt(e.height,10)),{layoutItemStyles:h}=st({id:e.name,order:c(()=>parseInt(e.order,10)),position:c(()=>"bottom"),layoutSize:b,elementSize:c(()=>e.height==="auto"?void 0:b.value),active:c(()=>e.app),absolute:O(e,"absolute")});return L(()=>s(e.tag,{ref:f,class:["v-footer",o.value,l.value,a.value,n.value,v.value,e.class],style:[r.value,e.app?h.value:{height:I(e.height)},e.style]},t)),{}}}),ce=Fe("flex-grow-1","div","VSpacer"),dt={data:()=>({icons:["mdi-email-outline","mdi-linkedin"]})},vt=ne("strong",null,"Andreas",-1);function ft(e,i,t,o,l,r){return P(),D(ct,{color:"primary",class:"text-center d-flex flex-column"},{default:x(()=>[s(De,{cols:"auto"},{default:x(()=>[(P(!0),Ve(Se,null,Ie(e.icons,a=>(P(),D(oe,{key:a,class:"mx-4",size:"x-large",icon:a},null,8,["icon"]))),128))]),_:1}),s(K),ne("div",null,[q(Y(new Date().getFullYear())+" — ",1),vt])]),_:1})}const mt=Oe(dt,[["render",ft]]);const yt=T({...M(),...nt({fullHeight:!0}),...te()},"VApp"),$e=C()({name:"VApp",props:yt(),setup(e,i){let{slots:t}=i;const o=ae(e),{layoutClasses:l,layoutStyles:r,getLayoutItem:a,items:n,layoutRef:v}=it(e),{rtlClasses:y}=Te();return L(()=>{var f;return s("div",{ref:v,class:["v-application",o.themeClasses.value,l.value,y.value,e.class],style:[r.value,e.style]},[s("div",{class:"v-application__wrap"},[(f=t.default)==null?void 0:f.call(t)])])}),{getLayoutItem:a,items:n,theme:o}}});const gt=T({text:String,...M(),...ee()},"VToolbarTitle"),Pe=C()({name:"VToolbarTitle",props:gt(),setup(e,i){let{slots:t}=i;return L(()=>{const o=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[o&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),ht=T({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function p(e,i,t){return C()({name:e,props:ht({mode:t,origin:i}),setup(o,l){let{slots:r}=l;const a={onBeforeEnter(n){o.origin&&(n.style.transformOrigin=o.origin)},onLeave(n){if(o.leaveAbsolute){const{offsetTop:v,offsetLeft:y,offsetWidth:f,offsetHeight:b}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${v}px`,n.style.left=`${y}px`,n.style.width=`${f}px`,n.style.height=`${b}px`}o.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(o.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:v,top:y,left:f,width:b,height:h}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=v||"",n.style.top=y||"",n.style.left=f||"",n.style.width=b||"",n.style.height=h||""}}};return()=>{const n=o.group?Ye:ke;return we(n,{name:o.disabled?"":e,css:!o.disabled,...o.group?void 0:{mode:o.mode},...o.disabled?{}:a},r.default)}}})}function Ae(e,i){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return C()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(o,l){let{slots:r}=l;return()=>we(ke,{name:o.disabled?"":e,css:!o.disabled,...o.disabled?{}:i},r.default)}})}function Le(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=Qe(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const n=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const v=`${a[o]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=n.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=v})},onAfterEnter:r,onEnterCancelled:r,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[o]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:l,onLeaveCancelled:l};function l(a){e&&a._parent&&a._parent.classList.remove(e),r(a)}function r(a){const n=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,n!=null&&(a.style[t]=n),delete a._initialStyle}}p("fab-transition","center center","out-in");p("dialog-bottom-transition");p("dialog-top-transition");p("fade-transition");p("scale-transition");p("scroll-x-transition");p("scroll-x-reverse-transition");p("scroll-y-transition");p("scroll-y-reverse-transition");p("slide-x-transition");p("slide-x-reverse-transition");p("slide-y-transition");p("slide-y-reverse-transition");const pt=Ae("expand-transition",Le());Ae("expand-x-transition",Le("",!0));const bt=[null,"prominent","default","comfortable","compact"],_t=T({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>bt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ve(),...M(),...fe(),...me(),...ee({tag:"header"}),...te()},"VToolbar"),xt=C()({name:"VToolbar",props:_t(),setup(e,i){var k;let{slots:t}=i;const{backgroundColorClasses:o,backgroundColorStyles:l}=ye(O(e,"color")),{borderClasses:r}=ge(e),{elevationClasses:a}=he(e),{roundedClasses:n}=pe(e),{themeClasses:v}=ae(e),{rtlClasses:y}=Te(),f=G(!!(e.extended||(k=t.extension)!=null&&k.call(t))),b=c(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=c(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ce({VBtn:{variant:"text"}}),L(()=>{var z;const B=!!(e.title||t.title),U=!!(t.image||e.image),w=(z=t.extension)==null?void 0:z.call(t);return f.value=!!(e.extended||w),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,r.value,a.value,n.value,v.value,y.value,e.class],style:[l.value,e.style]},{default:()=>[U&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(X,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(Me,{key:"image-img",cover:!0,src:e.image},null)]),s(X,{defaults:{VTabs:{height:I(b.value)}}},{default:()=>{var A,N,j;return[s("div",{class:"v-toolbar__content",style:{height:I(b.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(A=t.prepend)==null?void 0:A.call(t)]),B&&s(Pe,{key:"title",text:e.title},{text:t.title}),(N=t.default)==null?void 0:N.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(j=t.append)==null?void 0:j.call(t)])])]}}),s(X,{defaults:{VTabs:{height:I(h.value)}}},{default:()=>[s(pt,null,{default:()=>[f.value&&s("div",{class:"v-toolbar__extension",style:{height:I(h.value)}},[w])]})]})]})}),{contentHeight:b,extensionHeight:h}}}),Vt=T({...at({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),St=C()({name:"VAppBarNavIcon",props:Vt(),setup(e,i){let{slots:t}=i;return L(()=>s(oe,et(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),It=T({...M(),...je({variant:"text"})},"VToolbarItems"),Tt=C()({name:"VToolbarItems",props:It(),setup(e,i){let{slots:t}=i;return Ce({VBtn:{color:O(e,"color"),height:"inherit",variant:O(e,"variant")}}),L(()=>{var o;return s("div",{class:["v-toolbar-items",e.class],style:e.style},[(o=t.default)==null?void 0:o.call(t)])}),{}}}),kt=ne("img",{src:rt,width:"50"},null,-1),wt={setup(){const e=tt();return{theme:e,toggleTheme:()=>e.global.name.value=e.global.current.value.dark?"light":"dark"}},data(){return{appTitle:"Andreas van der Merwe",sidebar:!1,menuItems:[{title:"Home",path:"/home",icon:"mdi-home"},{title:"My Skills",path:"/skills",icon:"mdi-list-status"},{title:"Portfolio",path:"/my_portfolio",icon:"mdi-application-parentheses-outline"},{title:"Contact",path:"/contact",icon:"mdi-card-account-mail"}]}}},Ct=Object.assign(wt,{__name:"AppBar",setup(e){return(i,t)=>{const o=re("router-view"),l=re("v-content");return P(),D($e,null,{default:x(()=>[s(xt,{color:"#ac6328"},{prepend:x(()=>[kt]),default:x(()=>[s(K,{class:"ms-3",inset:"",vertical:""}),s(Pe,{class:"grow"},{default:x(()=>[q("Andreas || Online Portfolio")]),_:1}),s(ce),s(ce),s(Tt,{class:"hidden-sm-only"},{default:x(()=>[(P(!0),Ve(Se,null,Ie(i.menuItems,r=>(P(),D(oe,{size:"small",flat:"",key:r.title,to:r.path},{default:x(()=>[s(qe,{class:"hidden-sm",left:"",dark:""},{default:x(()=>[q(Y(r.icon),1)]),_:2},1024),q("   "+Y(r.title),1)]),_:2},1032,["to"]))),128)),s(K,{vertical:""})]),_:1}),s(K,{vertical:""}),s(St,{class:"ms-2"})]),_:1}),s(l,null,{default:x(()=>[s(o),s(mt)]),_:1})]),_:1})}}}),zt={__name:"Default",setup(e){return(i,t)=>(P(),D($e,null,{default:x(()=>[s(Ct)]),_:1}))}};export{zt as default};

import{i as k,x as D,L,N as T,w as x,_ as H,V as u}from"./VAvatar-be5d31c4.js";import{V as N}from"./VParallax-95ab966e.js";import{a as c,b as m,d as _,V as A,c as f}from"./VCard-1ed90f9a.js";import{m as X,V as B,b as $,a as F}from"./VWindowItem-e6788fab.js";import{p as M,a6 as W,q as U,L as O,al as Q,r as E,x as y,o as q,v as e,Q as J,F as I,f as G,U as z,V as K,W as l,$ as o,aj as Y,ak as Z,X as t}from"./index-96b3f6d3.js";import{V as tt}from"./VBtn-31f005df.js";import"./getScrollParent-6bb6c202.js";import"./ssrBoot-32601b12.js";const et="/assets/bg20-0ae2bd93.jpg",lt="/assets/img_b00-5ff44d68.jpg",st="/assets/img_b01-0e4f9456.jpg",at="/assets/img_b02-5c383036.jpg",ot="/assets/img_b03-7c3e460c.jpg",nt="/assets/img_b04-27fd8839.jpg",it="/assets/img_y00-c97cd2f5.jpg",ct="/assets/img_y01-b61ef199.jpg",dt="/assets/img_y02-92e05056.jpg",rt="/assets/img_y03-e2c87d5a.jpg",ut="/assets/img_s01-cc411c7f.jpg",mt="/assets/img_s03-bc9b636b.jpg",_t="/assets/img_s04-08e590a6.jpg",gt="/assets/img_s05-43c2bde7.jpg",ft="/assets/img_s06-b4dd0036.jpg",ht="/assets/img_eoh1-3eba581a.jpg",pt="/assets/img_eoh2-b2f9d941.jpg",bt="/assets/img_eoh3-82a2260e.jpg",vt="/assets/img_pf10-67eaeb6e.jpg",It="/assets/img_pf12-c273d1e9.jpg",Vt="/assets/img_pf06-b142c701.jpg",St="/assets/img_pf07-3c867b27.jpg",wt="/assets/img_pf08-8fda7f87.jpg",Ct="/assets/img_pf09-c5b73a15.jpg";const yt=M({color:String,cycle:Boolean,delimiterIcon:{type:W,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:s=>Number(s)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...X({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),h=U()({name:"VCarousel",props:yt(),emits:{"update:modelValue":s=>!0},setup(s,b){let{slots:i}=b;const d=O(s,"modelValue"),{t:v}=Q(),g=E();let V=-1;y(d,S),y(()=>s.interval,S),y(()=>s.cycle,w=>{w?S():window.clearTimeout(V)}),q(P);function P(){!s.cycle||!g.value||(V=window.setTimeout(g.value.group.next,+s.interval>0?+s.interval:6e3))}function S(){window.clearTimeout(V),window.requestAnimationFrame(P)}return k(()=>{const[w]=B.filterProps(s);return e(B,I({ref:g},w,{modelValue:d.value,"onUpdate:modelValue":C=>d.value=C,class:["v-carousel",{"v-carousel--hide-delimiter-background":s.hideDelimiterBackground,"v-carousel--vertical-delimiters":s.verticalDelimiters},s.class],style:[{height:G(s.height)},s.style]}),{default:i.default,additional:C=>{let{group:r}=C;return e(J,null,[!s.hideDelimiters&&e("div",{class:"v-carousel__controls",style:{left:s.verticalDelimiters==="left"&&s.verticalDelimiters?0:"auto",right:s.verticalDelimiters==="right"?0:"auto"}},[r.items.value.length>0&&e(D,{defaults:{VBtn:{color:s.color,icon:s.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[r.items.value.map((p,R)=>{const j={id:`carousel-item-${p.id}`,"aria-label":v("$vuetify.carousel.ariaLabel.delimiter",R+1,r.items.value.length),class:[r.isSelected(p.id)&&"v-btn--active"],onClick:()=>r.select(p.id,!0)};return i.item?i.item({props:j,item:p}):e(tt,I(p,j),null)})]})]),s.progress&&e(L,{class:"v-carousel__progress",color:typeof s.progress=="string"?s.progress:void 0,modelValue:(r.getItemIndex(d.value)+1)/r.items.value.length*100},null)])},prev:i.prev,next:i.next})}),{}}}),Pt=M({...T(),...$()},"VCarouselItem"),n=U()({name:"VCarouselItem",inheritAttrs:!1,props:Pt(),setup(s,b){let{slots:i,attrs:d}=b;k(()=>{const[v]=x.filterProps(s),[g]=F.filterProps(s);return e(F,I({class:"v-carousel-item"},g),{default:()=>[e(x,I(d,v),i)]})})}}),jt={data(){return{refreshKey:!1}}},a=s=>(Y("data-v-c9d03e91"),s=s(),Z(),s),xt=a(()=>t("img",{class:"fit-content-height",src:lt,alt:"Image"},null,-1)),At=a(()=>t("img",{class:"fit-content-height",src:st,alt:"Image"},null,-1)),Bt=a(()=>t("img",{class:"fit-content-height",src:at,alt:"Image"},null,-1)),Ft=a(()=>t("img",{class:"fit-content-height",src:ot,alt:"Image"},null,-1)),kt=a(()=>t("img",{class:"fit-content-height",src:nt,alt:"Image"},null,-1)),Mt=a(()=>t("dl",{class:"content"},[t("dt",null,"Company:"),t("dd",null,"EOH"),t("dt",null,"Frameworks:"),t("dd",null,"SQL, MS Reporting Services, C# MVC"),t("dt",null,"UI:"),t("dd",null,"Custom JavaScript, HTML, Sass"),t("dt",null,"UX:"),t("dd",null,"Balsamiq"),t("dt",null,"Special Features:"),t("dd",null,"Role/Permission Based Application, Translation Editor for translators, CMS customisation")],-1)),Ut=a(()=>t("img",{class:"fit-content-height",src:it,alt:"Image"},null,-1)),Rt=a(()=>t("img",{class:"fit-content-height",src:ct,alt:"Image"},null,-1)),Dt=a(()=>t("img",{class:"fit-content-height",src:dt,alt:"Image"},null,-1)),Lt=a(()=>t("img",{class:"fit-content-height",src:rt,alt:"Image"},null,-1)),Tt=a(()=>t("dl",{class:"content"},[t("dt",null,"Company:"),t("dd",null,"EOH"),t("dt",null,"Frameworks:"),t("dd",null,"SQL,C# MVC"),t("dt",null,"UI:"),t("dd",null,"Angular Material"),t("dt",null,"UX:"),t("dd",null,"N/A"),t("dt",null,"Special Features:"),t("dd",null,[o("Role/Permission Based Application, "),t("br"),o("Invoicing, Sales")])],-1)),Ht=a(()=>t("img",{class:"fit-content-height",src:ut,alt:"Image"},null,-1)),Nt=a(()=>t("img",{class:"fit-content-height",src:mt,alt:"Image"},null,-1)),Xt=a(()=>t("img",{class:"fit-content-height",src:_t,alt:"Image"},null,-1)),$t=a(()=>t("img",{class:"fit-content-height",src:gt,alt:"Image"},null,-1)),Wt=a(()=>t("img",{class:"fit-content-height",src:ft,alt:"Image"},null,-1)),Ot=a(()=>t("dl",{class:"content"},[t("dt",null,"Company:"),t("dd",null,"EOH"),t("dt",null,"Frameworks:"),t("dd",null,"SQL, C# MVC"),t("dt",null,"UI:"),t("dd",null,"Angular"),t("dt",null,"UX:"),t("dd",null,"Figma"),t("dt",null,"Special Features:"),t("dd",null,[o("Role/Permission Customer Application,"),t("br"),o(" SARS system integration")])],-1)),Qt=a(()=>t("img",{class:"fit-content-height",src:ht,alt:"Image"},null,-1)),Et=a(()=>t("img",{class:"fit-content-height",src:pt,alt:"Image"},null,-1)),qt=a(()=>t("img",{class:"fit-content-height",src:bt,alt:"Image"},null,-1)),Jt=a(()=>t("dl",{class:"content"},[t("dt",null,"Company:"),t("dd",null,"EOH"),t("dt",null,"Frameworks:"),t("dd",null,"SQL, C# MVC"),t("dt",null,"UI:"),t("dd",null,"AngularJS"),t("dt",null,"UX:"),t("dd",null,"Balsamiq"),t("dt",null,"Special Features:"),t("dd",null,[o("Role/Permission Based Application,"),t("br"),o(" CMS customisation")])],-1)),Gt=a(()=>t("img",{class:"fit-content-height",src:vt,alt:"Image"},null,-1)),zt=a(()=>t("img",{class:"fit-content-height",src:It,alt:"Image"},null,-1)),Kt=a(()=>t("dl",{class:"content"},[t("dt",null,"Company:"),t("dd",null,"FGX Studios"),t("dt",null,"Frameworks:"),t("dd",null,"MySQL, PHP, Laravel"),t("dt",null,"UI:"),t("dd",null,"Bootstrap Responsive, JavaScript"),t("dt",null,"UX:"),t("dd",null,"Photoshop from Design Team"),t("dt",null,"Special Features:"),t("dd",null,[o("Role/Permission Based Application, "),t("br"),o(" CMS customisation")])],-1)),Yt=a(()=>t("img",{class:"fit-content-height",src:Vt,alt:"Image"},null,-1)),Zt=a(()=>t("img",{class:"fit-content-height",src:St,alt:"Image"},null,-1)),te=a(()=>t("img",{class:"fit-content-height",src:wt,alt:"Image"},null,-1)),ee=a(()=>t("img",{class:"fit-content-height",src:Ct,alt:"Image"},null,-1)),le=a(()=>t("dl",{class:"content"},[t("dt",null,"Company:"),t("dd",null,"FGX Studios"),t("dt",null,"Frameworks:"),t("dd",null,"PHP, MySQL, C++"),t("dt",null,"UI:"),t("dd",null,"Custom JavaScript, Jquery, Bootstrap"),t("dt",null,"UX:"),t("dd",null,"Photoshop"),t("dt",null,"Special Features:"),t("dd",null,[o("Specialised for clients,"),t("br"),o(" Promotional data collection")])],-1));function se(s,b,i,d,v,g){return z(),K(N,{src:et},{default:l(()=>[e(A,{class:""},{default:l(()=>[e(u,{cols:"12"},{default:l(()=>[e(c,{class:""},{default:l(()=>[e(m,{class:"text-h3 py-6"},{default:l(()=>[o("Portfolio")]),_:1}),e(_,null,{default:l(()=>[o(" Recent projects limited to NDA company agreements. Please contact me for more details. ")]),_:1})]),_:1})]),_:1})]),_:1}),e(A,{fluid:"",class:"mx-auto mb-1"},{default:l(()=>[e(u,{cols:"12",lg:"4",md:"6"},{default:l(()=>[e(c,{class:"mx-auto bg6"},{default:l(()=>[e(m,null,{default:l(()=>[o(" BIOS International ")]),_:1}),e(f,{class:"pb-5"},{default:l(()=>[o(" MVC Razor Web Application ")]),_:1})]),_:1}),e(h,{cycle:"",height:"fit-content","hide-delimiters":"","show-arrows":"hover"},{default:l(()=>[e(n,null,{default:l(()=>[xt]),_:1}),e(n,null,{default:l(()=>[At]),_:1}),e(n,null,{default:l(()=>[Bt]),_:1}),e(n,null,{default:l(()=>[Ft]),_:1}),e(n,null,{default:l(()=>[kt]),_:1})]),_:1}),e(c,null,{default:l(()=>[e(_,{class:"b-color"},{default:l(()=>[Mt]),_:1})]),_:1})]),_:1}),e(u,{cols:"12",lg:"4",md:"6"},{default:l(()=>[e(c,{class:"mx-auto bg6"},{default:l(()=>[e(m,null,{default:l(()=>[o(" YAMAHA ")]),_:1}),e(f,{class:"pb-5"},{default:l(()=>[o(" Point of sale (POS) Application ")]),_:1}),e(h,{cycle:"",height:"fit-content","hide-delimiters":"","show-arrows":"hover"},{default:l(()=>[e(n,null,{default:l(()=>[Ut]),_:1}),e(n,null,{default:l(()=>[Rt]),_:1}),e(n,null,{default:l(()=>[Dt]),_:1}),e(n,null,{default:l(()=>[Lt]),_:1})]),_:1}),e(_,{class:"b-color"},{default:l(()=>[Tt]),_:1})]),_:1})]),_:1}),e(u,{cols:"12",lg:"4",md:"6"},{default:l(()=>[e(c,{class:"mx-auto bg6"},{default:l(()=>[e(m,null,{default:l(()=>[o(" SARS: ePermits ")]),_:1}),e(f,{class:"pb-5"},{default:l(()=>[o(" Web Application ")]),_:1}),e(h,{cycle:"",height:"fit-content","hide-delimiters":"","show-arrows":"hover"},{default:l(()=>[e(n,null,{default:l(()=>[Ht]),_:1}),e(n,null,{default:l(()=>[Nt]),_:1}),e(n,null,{default:l(()=>[Xt]),_:1}),e(n,null,{default:l(()=>[$t]),_:1}),e(n,null,{default:l(()=>[Wt]),_:1})]),_:1}),e(_,{class:"b-color"},{default:l(()=>[Ot]),_:1})]),_:1})]),_:1}),e(u,{cols:"12",lg:"4",md:"6"},{default:l(()=>[e(c,{class:"mx-auto bg6"},{default:l(()=>[e(m,null,{default:l(()=>[o(" EOH Call Centre App ")]),_:1}),e(f,{class:"pb-5"},{default:l(()=>[o(" Web Application ")]),_:1}),e(h,{cycle:"",height:"fit-content","hide-delimiters":"","show-arrows":"hover"},{default:l(()=>[e(n,null,{default:l(()=>[Qt]),_:1}),e(n,null,{default:l(()=>[Et]),_:1}),e(n,null,{default:l(()=>[qt]),_:1})]),_:1}),e(_,{class:"b-color"},{default:l(()=>[Jt]),_:1})]),_:1})]),_:1}),e(u,{cols:"12",lg:"4",md:"6"},{default:l(()=>[e(c,{class:"mx-auto bg6"},{default:l(()=>[e(m,null,{default:l(()=>[o(" SA Airports ")]),_:1}),e(f,{class:"pb-5"},{default:l(()=>[o(" Internal CMS driven Data ")]),_:1}),e(h,{cycle:"",height:"fit-content","hide-delimiters":"","show-arrows":"hover"},{default:l(()=>[e(n,null,{default:l(()=>[Gt]),_:1}),e(n,null,{default:l(()=>[zt]),_:1})]),_:1}),e(_,{class:"b-color"},{default:l(()=>[Kt]),_:1})]),_:1})]),_:1}),e(u,{cols:"12",lg:"4",md:"6"},{default:l(()=>[e(c,{class:"mx-auto bg6"},{default:l(()=>[e(m,null,{default:l(()=>[o(" Promotional Campaigns | Games ")]),_:1}),e(f,{class:"pb-5"},{default:l(()=>[o(" Miscellaneous ")]),_:1}),e(h,{cycle:"",height:"fit-content","hide-delimiters":"","show-arrows":"hover"},{default:l(()=>[e(n,null,{default:l(()=>[Yt]),_:1}),e(n,null,{default:l(()=>[Zt]),_:1}),e(n,null,{default:l(()=>[te]),_:1}),e(n,null,{default:l(()=>[ee]),_:1})]),_:1}),e(_,{class:"b-color"},{default:l(()=>[le]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const me=H(jt,[["render",se],["__scopeId","data-v-c9d03e91"]]);export{me as default};

var it=Object.defineProperty;var nt=(p,c,e)=>c in p?it(p,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):p[c]=e;var d=(p,c,e)=>(nt(p,typeof c!="symbol"?c+"":c,e),e);import{c as rt,g as et}from"./_commonjsHelpers-725317a4.js";const ht=p=>new Promise(c=>{WebFont.load({typekit:{id:p},active:c})}),X=(p,c)=>Math.floor(Math.random()*(c-p+1))+p;var H={exports:{}};(function(p,c){(function(e,f){p.exports=f()})(rt,function(){var e=document,f=e.createTextNode.bind(e);function n(o,s,i){o.style.setProperty(s,i)}function t(o,s){return o.appendChild(s)}function r(o,s,i,a){var l=e.createElement("span");return s&&(l.className=s),i&&(!a&&l.setAttribute("data-"+s,i),l.textContent=i),o&&t(o,l)||l}function T(o,s){return o.getAttribute("data-"+s)}function M(o,s){return!o||o.length==0?[]:o.nodeName?[o]:[].slice.call(o[0].nodeName?o:(s||e).querySelectorAll(o))}function O(o){for(var s=[];o--;)s[o]=[];return s}function A(o,s){o&&o.some(s)}function R(o){return function(s){return o[s]}}function j(o,s,i){var a="--"+s,l=a+"-index";A(i,function(u,h){Array.isArray(u)?A(u,function(m){n(m,l,h)}):n(u,l,h)}),n(o,a+"-total",i.length)}var x={};function w(o,s,i){var a=i.indexOf(o);if(a==-1)i.unshift(o),A(x[o].depends,function(u){w(u,o,i)});else{var l=i.indexOf(s);i.splice(a,1),i.splice(l,0,o)}return i}function C(o,s,i,a){return{by:o,depends:s,key:i,split:a}}function G(o){return w(o,0,[]).map(R(x))}function v(o){x[o.by]=o}function y(o,s,i,a,l){o.normalize();var u=[],h=document.createDocumentFragment();a&&u.push(o.previousSibling);var m=[];return M(o.childNodes).some(function(g){if(g.tagName&&!g.hasChildNodes()){m.push(g);return}if(g.childNodes&&g.childNodes.length){m.push(g),u.push.apply(u,y(g,s,i,a,l));return}var E=g.wholeText||"",P=E.trim();P.length&&(E[0]===" "&&m.push(f(" ")),A(P.split(i),function(ot,st){st&&l&&m.push(r(h,"whitespace"," ",l));var D=r(h,s,ot);u.push(D),m.push(D)}),E[E.length-1]===" "&&m.push(f(" ")))}),A(m,function(g){t(h,g)}),o.innerHTML="",t(o,h),u}var L=0;function V(o,s){for(var i in s)o[i]=s[i];return o}var I="words",$=C(I,L,"word",function(o){return y(o,"word",/\s+/,0,1)}),b="chars",k=C(b,[I],"char",function(o,s,i){var a=[];return A(i[I],function(l,u){a.push.apply(a,y(l,"char","",s.whitespace&&u))}),a});function S(o){o=o||{};var s=o.key;return M(o.target||"[data-splitting]").map(function(i){var a=i["🍌"];if(!o.force&&a)return a;a=i["🍌"]={el:i};var l=G(o.by||T(i,"splitting")||b),u=V({},o);return A(l,function(h){if(h.split){var m=h.by,g=(s?"-"+s:"")+h.key,E=h.split(i,u,a);g&&j(i,g,E),a[m]=E,i.classList.add(m)}}),i.classList.add("splitting"),a})}function q(o){o=o||{};var s=o.target=r();return s.innerHTML=o.content,S(o),s.outerHTML}S.html=q,S.add=v;function N(o,s,i){var a=M(s.matching||o.children,o),l={};return A(a,function(u){var h=Math.round(u[i]);(l[h]||(l[h]=[])).push(u)}),Object.keys(l).map(Number).sort(U).map(R(l))}function U(o,s){return o-s}var Y=C("lines",[I],"line",function(o,s,i){return N(o,{matching:i[I]},"offsetTop")}),z=C("items",L,"item",function(o,s){return M(s.matching||o.children,o)}),J=C("rows",L,"row",function(o,s){return N(o,s,"offsetTop")}),K=C("cols",L,"col",function(o,s){return N(o,s,"offsetLeft")}),Q=C("grid",["rows","cols"]),_="layout",W=C(_,L,L,function(o,s){var i=s.rows=+(s.rows||T(o,"rows")||1),a=s.columns=+(s.columns||T(o,"columns")||1);if(s.image=s.image||T(o,"image")||o.currentSrc||o.src,s.image){var l=M("img",o)[0];s.image=l&&(l.currentSrc||l.src)}s.image&&n(o,"background-image","url("+s.image+")");for(var u=i*a,h=[],m=r(L,"cell-grid");u--;){var g=r(m,"cell");r(g,"cell-inner"),h.push(g)}return t(o,m),h}),Z=C("cellRows",[_],"row",function(o,s,i){var a=s.rows,l=O(a);return A(i[_],function(u,h,m){l[Math.floor(h/(m.length/a))].push(u)}),l}),B=C("cellColumns",[_],"col",function(o,s,i){var a=s.columns,l=O(a);return A(i[_],function(u,h){l[h%a].push(u)}),l}),tt=C("cells",["cellRows","cellColumns"],"cell",function(o,s,i){return i[_]});return v($),v(k),v(Y),v(z),v(J),v(K),v(Q),v(W),v(Z),v(B),v(tt),S})})(H);var at=H.exports;const F=et(at);class lt{constructor(c){d(this,"position",-1);d(this,"cells",[]);this.position=c}}class ct{constructor(c,{position:e,previousCellPosition:f}={}){d(this,"DOM",{el:null});d(this,"position",-1);d(this,"previousCellPosition",-1);d(this,"original");d(this,"state");d(this,"color");d(this,"originalColor");d(this,"cache");this.DOM.el=c,this.original=this.DOM.el.innerHTML,this.state=this.original,this.color=this.originalColor=getComputedStyle(document.documentElement).getPropertyValue("--color-text"),this.position=e,this.previousCellPosition=f}set(c){this.state=c,this.DOM.el.innerHTML=this.state}}class mt{constructor(c){d(this,"DOM",{el:null});d(this,"lines",[]);d(this,"lettersAndSymbols",["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"]);d(this,"effects",{fx1:()=>this.fx1(),fx2:()=>this.fx2(),fx3:()=>this.fx3(),fx4:()=>this.fx4(),fx5:()=>this.fx5(),fx6:()=>this.fx6()});d(this,"totalChars",0);this.DOM.el=c;const e=F({target:this.DOM.el,by:"lines"});e.forEach(f=>F({target:f.words}));for(const[f,n]of e[0].lines.entries()){const t=new lt(f);let r=[],T=0;for(const M of n)for(const O of[...M.querySelectorAll(".char")])r.push(new ct(O,{position:T,previousCellPosition:T===0?-1:T-1})),++T;t.cells=r,this.lines.push(t),this.totalChars+=T}}clearCells(){for(const c of this.lines)for(const e of c.cells)e.set("&nbsp;")}getRandomChar(){return this.lettersAndSymbols[Math.floor(Math.random()*this.lettersAndSymbols.length)]}fx1(){let e=0;this.clearCells();const f=(n,t,r=0)=>{t.cache=t.state,r===45-1?(t.set(t.original),++e,e===this.totalChars&&(this.isAnimating=!1)):t.position===0?t.set(r<9?["*","-","'",'"'][Math.floor(Math.random()*4)]:this.getRandomChar()):t.set(n.cells[t.previousCellPosition].cache),t.cache!="&nbsp;"&&++r,r<45&&setTimeout(()=>f(n,t,r),15)};for(const n of this.lines)for(const t of n.cells)setTimeout(()=>f(n,t),(n.position+1)*200)}fx2(){let e=0;const f=(n,t,r=0)=>{r===20-1?(t.set(t.original),t.DOM.el.style.opacity=0,setTimeout(()=>{t.DOM.el.style.opacity=1},300),++e,e===this.totalChars&&(this.isAnimating=!1)):t.set(this.getRandomChar()),++r,r<20&&setTimeout(()=>f(n,t,r),40)};for(const n of this.lines)for(const t of n.cells)setTimeout(()=>f(n,t),(t.position+1)*30)}fx3(){let e=0;this.clearCells();const f=(n,t,r=0)=>{r===10-1?(t.set(t.original),++e,e===this.totalChars&&(this.isAnimating=!1)):t.set(this.getRandomChar()),++r,r<10&&setTimeout(()=>f(n,t,r),80)};for(const n of this.lines)for(const t of n.cells)setTimeout(()=>f(n,t),X(0,2e3))}fx4(){let e=0;this.clearCells();const f=(n,t,r=0)=>{t.cache=t.state,r===30-1?(t.set(t.original),++e,e===this.totalChars&&(this.isAnimating=!1)):t.position===0?t.set(["*",":"][Math.floor(Math.random()*2)]):t.set(n.cells[t.previousCellPosition].cache),t.cache!="&nbsp;"&&++r,r<30&&setTimeout(()=>f(n,t,r),15)};for(const n of this.lines)for(const t of n.cells)setTimeout(()=>f(n,t),Math.abs(this.lines.length/2-n.position)*400)}fx5(){let e=0;this.clearCells();const f=(n,t,r=0)=>{t.cache={state:t.state,color:t.color},r===30-1?(t.color=t.originalColor,t.DOM.el.style.color=t.color,t.set(t.original),++e,e===this.totalChars&&(this.isAnimating=!1)):t.position===0?(t.color=["#3e775d","#61dca3","#61b3dc"][Math.floor(Math.random()*3)],t.DOM.el.style.color=t.color,t.set(r<9?["*","-","'",'"'][Math.floor(Math.random()*4)]:this.getRandomChar())):(t.set(n.cells[t.previousCellPosition].cache.state),t.color=n.cells[t.previousCellPosition].cache.color,t.DOM.el.style.color=t.color),t.cache.state!="&nbsp;"&&++r,r<30&&setTimeout(()=>f(n,t,r),10)};for(const n of this.lines)for(const t of n.cells)setTimeout(()=>f(n,t),(n.position+1)*200)}fx6(){let e=0;const f=(n,t,r=0)=>{t.cache={state:t.state,color:t.color},r===15-1?(t.set(t.original),t.color=t.originalColor,t.DOM.el.style.color=t.color,++e,e===this.totalChars&&(this.isAnimating=!1)):(t.set(this.getRandomChar()),t.color=["#2b4539","#61dca3","#61b3dc"][Math.floor(Math.random()*3)],t.DOM.el.style.color=t.color),++r,r<15&&setTimeout(()=>f(n,t,r),X(30,110))};for(const n of this.lines)for(const t of n.cells)setTimeout(()=>f(n,t),(n.position+1)*80)}trigger(c="fx1"){!(c in this.effects)||this.isAnimating||(this.isAnimating=!0,this.effects[c]())}}export{mt as T,ht as p};

import{u as U,g as te,h as le,i as Y,j as ae,P as se,t as re,k as ie,l as F,m as k,n as ue,w as M,p as l,q as oe,R as T,s as ne,v as ce,x as me,C as he,y as ve,z as pe,A as de,B as ye,D as ge,E as B,F as fe,G as Ee,H as He,I as $,J as j,K as we}from"./app-BBcJBvqp.js";const Re=["/","/blog.html","/about/contribute.html","/about/credits.html","/about/license.html","/about/links.html","/about/version.html","/article/2.0.0.html","/article/2.2.0.html","/article/2.2.1.html","/article/2.2.2.html","/article/2.2.3.html","/article/2.3.0-a1.html","/article/2.3.0-a2.html","/article/2.3.0-a3.html","/article/2.3.0-a4.html","/article/2.3.0-a5.html","/article/2.3.0.html","/article/images.html","/article/sa0.11.0.html","/article/sa0.12.0.html","/article/sc1.0.0.html","/article/sc1.0.1.html","/article/sc1.1.0.html","/article/sc1.1.1.html","/dev/","/dev/publish-version.html","/tutorials/","/tutorials/manual-import.html","/tutorials/start.html","/tutorials/article/beginning.html","/tutorials/article/main.html","/tutorials/article/sprite.html","/tutorials/article/undead_history.html","/tutorials/gameplay/article.html","/tutorials/gameplay/quest-list.html","/tutorials/gameplay/quest.html","/tutorials/item/chocolate.html","/tutorials/item/copper_food.html","/tutorials/item/fuel_metal.html","/tutorials/item/honey_candy.html","/tutorials/item/marshallow.html","/tutorials/item/medicine.html","/tutorials/item/mineral_fuel.html","/tutorials/item/syrup.html","/tutorials/materials/amethyst.html","/tutorials/materials/bone.html","/tutorials/materials/copper.html","/tutorials/materials/corrosion.html","/tutorials/materials/diamond.html","/tutorials/materials/flash_copper.html","/tutorials/materials/flash_metal.html","/tutorials/materials/golden.html","/tutorials/materials/imitations.html","/tutorials/materials/","/tutorials/materials/iron.html","/tutorials/materials/netherite.html","/tutorials/materials/over_metal.html","/tutorials/materials/smaragdus.html","/tutorials/materials/steel.html","/tutorials/materials/stone.html","/tutorials/materials/wooden.html","/tutorials/tools/awl.html","/tutorials/tools/boardsword.html","/tutorials/tools/crowbar.html","/tutorials/tools/dagger.html","/tutorials/tools/hammer.html","/tutorials/tools/","/tutorials/tools/knife.html","/404.html","/about/","/article/","/tutorials/article/","/tutorials/gameplay/","/tutorials/item/","/category/","/category/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97/","/category/%E6%B5%8B%E8%AF%95%E7%89%88%E6%97%A5%E5%BF%97/","/category/%E5%AE%A3%E4%BC%A0%E5%9B%BE/","/category/%E7%A3%90%E7%9F%B3%E4%B9%8B%E6%97%85/","/category/%E7%9F%B3%E5%A4%B4%E5%B7%A5%E8%89%BA/","/tag/","/star/","/timeline/"],be="SEARCH_PRO_QUERY_HISTORY",g=U(be,[]),ke=()=>{const{queryHistoryCount:a}=B,s=a>0;return{enabled:s,queryHistory:g,addQueryHistory:r=>{s&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},D=a=>Re[a.id]+("anchor"in a?`#${a.anchor}`:""),Be="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=B,f=U(Be,[]),Ae=()=>{const a=I>0;return{enabled:a,resultHistory:f,addResultHistory:s=>{if(a){const r={link:D(s),display:s.display};"header"in s&&(r.header=s.header),f.value=[r,...f.value.slice(0,I-1)]}},removeResultHistory:s=>{f.value=[...f.value.slice(0,s),...f.value.slice(s+1)]}}},qe=a=>{const s=he(),r=Y(),A=ve(),u=F(0),w=k(()=>u.value>0),p=pe([]);return de(()=>{const{search:d,terminate:q}=ye(),E=ge(c=>{const H=c.join(" "),{searchFilter:Q=v=>v,splitWord:x,suggestionsFilter:L,...y}=s.value;H?(u.value+=1,d(c.join(" "),r.value,y).then(v=>Q(v,H,r.value,A.value)).then(v=>{u.value-=1,p.value=v}).catch(v=>{console.warn(v),u.value-=1,u.value||(p.value=[])})):p.value=[]},B.searchDelay-B.suggestDelay);M([a,r],([c])=>E(c),{immediate:!0}),fe(()=>{q()})}),{isSearching:w,results:p}};var xe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:s}){const r=le(),A=Y(),u=ae(se),{enabled:w,addQueryHistory:p,queryHistory:d,removeQueryHistory:q}=ke(),{enabled:E,resultHistory:c,addResultHistory:H,removeResultHistory:Q}=Ae(),x=w||E,L=re(a,"queries"),{results:y,isSearching:v}=qe(L),i=ie({isQuery:!0,index:0}),m=F(0),h=F(0),P=k(()=>x&&(d.value.length>0||c.value.length>0)),C=k(()=>y.value.length>0),S=k(()=>y.value[m.value]||null),z=()=>{const{isQuery:e,index:t}=i;t===0?(i.isQuery=!e,i.index=e?c.value.length-1:d.value.length-1):i.index=t-1},G=()=>{const{isQuery:e,index:t}=i;t===(e?d.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=t+1},J=()=>{m.value=m.value>0?m.value-1:y.value.length-1,h.value=S.value.contents.length-1},K=()=>{m.value=m.value<y.value.length-1?m.value+1:0,h.value=0},V=()=>{h.value<S.value.contents.length-1?h.value+=1:K()},N=()=>{h.value>0?h.value-=1:J()},_=e=>e.map(t=>we(t)?t:l(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=Ee[e.index]||"$content",[o,b=""]=He(t)?t[A.value].split("$content"):t.split("$content");return e.display.map(n=>l("div",_([o,...n,b])))}return e.display.map(t=>l("div",_(t)))},R=()=>{m.value=0,h.value=0,s("updateQuery",""),s("close")},X=()=>w?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.queryHistory),d.value.map((e,t)=>l("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===t}],onClick:()=>{s("updateQuery",e)}},[l($,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),q(t)}})]))])):null,Z=()=>E?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>l(T,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===t}],onClick:()=>{R()}},()=>[l($,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(o=>_(o)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(t)}})]))])):null;return ue("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=S.value.contents[h.value];p(a.queries.join(" ")),H(t),r.push(D(t)),R()}}else if(E){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=i;i.isQuery?(s("updateQuery",d.value[t]),e.preventDefault()):(r.push(c.value[t].link),R())}}}}),M([m,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!C.value:!P.value}],id:"search-pro-results"},a.queries.length?v.value?l(oe,{hint:u.value.searching}):C.value?l("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:t},o)=>{const b=m.value===o;return l("li",{class:["search-pro-result-list-item",{active:b}]},[l("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((n,ee)=>{const O=b&&h.value===ee;return l(T,{to:D(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{p(a.queries.join(" ")),H(n),R()}},()=>[n.type==="text"?null:l(n.type==="title"?ne:n.type==="heading"?ce:me,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?l("div",{class:"content-header"},n.header):null,l("div",W(n))])])})])})):u.value.emptyResult:x?P.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{xe as default};

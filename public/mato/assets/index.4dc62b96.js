import{c as p,o as _,p as f,a as m,b as c,t as y,d as u,e as g,f as b,g as i,w as d,r as v,T as x,h as k,i as w,j as C,R as I}from"./vendor.52ba9f14.js";const N=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};N();var l=(t,s)=>{const n=t.__vccOpts||t;for(const[r,e]of s)n[r]=e;return n};const S={},B=t=>(f("data-v-69620cfa"),t=t(),m(),t),L={class:"component-1"},O=B(()=>c("div",{class:"pink"},"mato is the best",-1)),A=[O];function P(t,s,n,r,e,o){return _(),p("div",L,A)}var j=l(S,[["render",P],["__scopeId","data-v-69620cfa"]]);const R={},T={class:"component-2"},V={class:"appricot"};function D(t,s,n,r,e,o){return _(),p("div",T,[c("div",V,y(t.$mato("is the best guy ever")),1)])}var E=l(R,[["render",D],["__scopeId","data-v-6e2dfaca"]]);const q={},F=t=>(f("data-v-0d94d0eb"),t=t(),m(),t),H={class:"component-3"},K=F(()=>c("div",{class:"pink"},[u(" mato is very romantic guy "),c("a",{href:"#"},"see what other guys says about mato")],-1)),M=[K];function W(t,s,n,r,e,o){return _(),p("div",H,M)}var z=l(q,[["render",W],["__scopeId","data-v-0d94d0eb"]]);const G=g({history:b(),routes:[{path:"/1",component:j},{path:"/2",component:E},{path:"/3",component:z}]});const J={},Q={class:"container"},U={class:"navigation"},X=u("component 1"),Y=u("component 2"),Z=u("component 3"),ee={class:"router-view-container"};function te(t,s,n,r,e,o){const a=v("router-link"),h=v("router-view");return _(),p("div",Q,[c("div",U,[i(a,{to:"/1"},{default:d(()=>[X]),_:1}),i(a,{to:"/2"},{default:d(()=>[Y]),_:1}),i(a,{to:"/3"},{default:d(()=>[Z]),_:1})]),c("div",ee,[i(h,null,{default:d(({Component:$})=>[i(x,{name:"fade",mode:"out-in"},{default:d(()=>[(_(),k(w($),{key:t.$route.path}))]),_:2},1024)]),_:1})])])}var oe=l(J,[["render",te]]),ne={install:(t,s)=>{t.config.globalProperties.$mato=n=>"mato "+(n||"default")}};C(oe).use(G).use(ne,{greetings:{hello:"Bonjour!"}}).component("vue-easy-lightbox",I).mount("#app");

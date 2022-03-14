var Q=Object.defineProperty,R=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var j=(e,t,o)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))Z.call(t,o)&&j(e,o,t[o]);if(A)for(var o of A(t))ee.call(t,o)&&j(e,o,t[o]);return e},I=(e,t)=>R(e,X(t));import{c as d,o as c,a as te,b as _,l as se,m as M,d as F,e as m,f as a,t as u,F as y,r as x,w as S,v as E,g as v,h as g,n as H,i as k,p as L,j as B,k as N,T as O,q as T,s as P,u as z,x as G,y as oe,z as q,_ as ae,A as ne}from"./vendor.0c089875.js";const re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};re();var w=(e,t)=>{const o=e.__vccOpts||e;for(const[n,s]of t)o[n]=s;return o};const le={},ce={class:"close-icon"};function de(e,t,o,n,s,r){return c(),d("div",ce)}var Y=w(le,[["render",de],["__scopeId","data-v-2eb9cc04"]]);const ue="http://houseweb.herokuapp.com/";var C={host:ue},W=te({state:{schedule:{},username:"",messages:{},chatUsername:null,showMessages:!1},getters:{getSchedule:e=>e.schedule,getScheduleById:e=>t=>{let o=null;return Object.entries(e.schedule).forEach(([n,s])=>{s.forEach(r=>{r._id===t&&(o=r)})}),o},getUsername:e=>e.username,getMessages:e=>e.messages,getChatUsername:e=>e.chatUsername,getShowMessages:e=>e.showMessages},actions:{async fetchSchedule({commit:e}){try{const t=await _.get(`${C.host}api/schedule`);e("addSchedule",t.data)}catch(t){console.log(t.message)}},async addToSchedule({commit:e},t){try{t.date.setHours(0,0,0,0);const o=I(h({},t),{username:this.state.username}),n=await _.post(`${C.host}api/schedule`,o);e("addToSchedule",n.data)}catch(o){console.log("addToSchedule Error -> "+o)}},async editNote({commit:e},t){try{const o=await _.put(`${C.host}api/schedule`,t)}catch(o){console.log("editSchedule Error -> "+o)}},async deleteFromSchedule({commit:e},t){if(confirm("are you shure?"))try{const o=await _.delete(`${C.host}api/schedule/${t}`);e("deleteFromSchedule",t)}catch(o){console.log(`deleteFromSchedule error -> ${o}`)}},async login({commit:e,dispatch:t},o){try{const n=await _.post(`${C.host}api/auth`,o);console.log(`user ${n.data.username} is logged in`);const s=n.headers["x-auth-token"];localStorage.setItem("x-auth-token",s),localStorage.setItem("username",n.data.username),_.defaults.headers.post["x-auth-token"]=s,_.defaults.headers.delete["x-auth-token"]=s,_.defaults.headers.put["x-auth-token"]=s,e("setUsername",n.data.username),$.auth.token=s,$.connect()}catch(n){if(n.request!=null)throw n;console.log(n)}},logout({commit:e}){e("setUsername",""),e("addMessages",null),e("setShowMessages",!1),e("setChatUsername",null),localStorage.removeItem("x-auth-token"),delete _.defaults.headers.post["x-auth-token"],delete _.defaults.headers.delete["x-auth-token"],$.auth.token=null,$.close()}},mutations:{addSchedule(e,t){const o=(n,s)=>n.reduce((r,l)=>I(h({},r),{[l[s]]:[...r[l[s]]||[],l]}),{});e.schedule=o(t,"date")},addToSchedule(e,t){Object.keys(e.schedule).includes(t.date)?e.schedule[t.date].push(t):e.schedule[t.date]=[t]},setUsername(e,t){e.username=t},editSchedule(e,t){let o=this.getScheduleById(t.id);o.text=t.tex},deleteFromSchedule(e,t){Object.entries(e.schedule).forEach(([o,n])=>{n.forEach(s=>{s._id===t&&(e.schedule[o].splice(n.indexOf(s),1),e.schedule[o].length===0&&delete e.schedule[o])})})},addMessages(e,t){e.messages=t},addMessage(e,t){t.from===e.username?e.messages[t.to]?e.messages[t.to].push(t):e.messages[t.to]=[t]:e.messages[t.from]?e.messages[t.from].push(t):e.messages[t.from]=[t]},setChatUsername(e,t){e.chatUsername=t,e.chatUsername!=null&&(e.showSchedule=!1)},setShowMessages(e,t){e.showMessages=t,e.showMessages==!0&&(e.showSchedule=!1)}}});const ie=(e,t)=>{const o={};return e.map(n=>{n.from!=t?o[n.from]=[...o[n.from]||[],n]:o[n.to]=[...o[n.to]||[],n]}),o},$=se(C.host,{auth:{token:localStorage.getItem("x-auth-token")}});$.on("connect_error",e=>{console.log(e.message)});$.on("messages",e=>{W.commit("addMessages",ie(e,W.state.username))});$.on("message",e=>{W.commit("addMessage",e)});const he={data(){return{messageText:""}},components:{CloseIcon:Y},computed:h({},M(["getMessages","getUsername","getChatUsername"])),methods:I(h({},F(["setChatUsername"])),{sendMessage(){$.emit("postMessage",{to:this.getChatUsername,text:this.messageText}),this.messageText=""}})},_e={key:0,class:"chat-container"},me={class:"username"},pe={class:"chat"},ge={class:"chat-input-form"};function fe(e,t,o,n,s,r){const l=g("close-icon");return e.getChatUsername?(c(),d("div",_e,[m(l,{onClick:t[0]||(t[0]=i=>e.setChatUsername(null))}),a("div",me,u(e.getChatUsername),1),a("div",pe,[(c(!0),d(y,null,x(e.getMessages[e.getChatUsername],i=>(c(),d("div",{class:H(["chat-message",i.from===e.getUsername?"chat-message-left":"chat-message-right"])},u(i.text),3))),256))]),a("div",ge,[S(a("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=i=>s.messageText=i)},null,512),[[E,s.messageText]]),a("button",{onClick:t[2]||(t[2]=(...i)=>r.sendMessage&&r.sendMessage(...i))},"send")])])):v("",!0)}var ve=w(he,[["render",fe],["__scopeId","data-v-6c185fb8"]]);const we={name:"Forecast",props:{forecast:Array},methods:{calcTemp(e){return Math.round(Number(e)-273.15)},getIconUrl(e){return`http://openweathermap.org/img/w/${e}.png`}}},ye=e=>(L("data-v-0e0d6b16"),e=e(),B(),e),Se={class:"forecast"},ke=k(" \xA0 5 day forecast "),$e=ye(()=>a("hr",null,null,-1)),be={key:"day.dt"},Ie={key:"day.dt"},xe={key:"day.dt"},Ce=["src"],Ue={key:"day.dt"};function Me(e,t,o,n,s,r){return c(),d("div",Se,[ke,$e,a("table",null,[a("tr",null,[(c(!0),d(y,null,x(o.forecast,l=>(c(),d("th",be,u(l.day),1))),128))]),a("tr",null,[(c(!0),d(y,null,x(o.forecast,l=>(c(),d("td",Ie,u(r.calcTemp(l.main.temp))+"\xB0 ",1))),128))]),a("tr",null,[(c(!0),d(y,null,x(o.forecast,l=>(c(),d("td",xe,[a("img",{src:r.getIconUrl(l.weather[0].icon),alt:""},null,8,Ce)]))),128))]),a("tr",null,[(c(!0),d(y,null,x(o.forecast,l=>(c(),d("td",Ue,u(l.weather[0].main),1))),128))])])])}var Fe=w(we,[["render",Me],["__scopeId","data-v-0e0d6b16"]]);const Te={name:"WeatherCard",components:{Forecast:Fe},data(){return{weather:{},showForecast:!1}},methods:{calcTemp(e){return Math.round(Number(e)-273.15)},calcWindSpeed(e){return Math.round(e*3.6*10)/10},getIconUrl(e){return`http://openweathermap.org/img/w/${e}.png`},calcWindDirection(e){var t=Math.floor(e/22.5+.5),o=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];return o[t%16]},toggleShowForecast(){this.weather.forecast||this.fetchForecast().catch(e=>console.log(e)),this.showForecast=!this.showForecast},async fetchWeather(){try{const e=await _.get("https://api.openweathermap.org/data/2.5/weather/?q=gudovac&appid=524464013431281f7aabe3e488765d52");this.weather=await e.data}catch(e){console.log(e)}},async fetchForecast(){const e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],t=[];try{const n=await(await _.get("https://api.openweathermap.org/data/2.5/forecast/?q=gudovac&appid=524464013431281f7aabe3e488765d52")).data;if(typeof n!="undefined"){for(let s=7;s<=n.list.length;s+=8){let r=new Date(n.list[s].dt_txt);n.list[s].day=e[r.getDay()],t.push(n.list[s])}this.weather.forecast=t}else throw"problem with fetching forecast"}catch(o){console.log(o)}}},created(){this.fetchWeather()}},D=e=>(L("data-v-95b21f6c"),e=e(),B(),e),De={key:0,class:"card"},Ee={class:"header-left"},Ne={class:"header-right"},Pe=["src"],We=D(()=>a("div",{style:{clear:"both"}},null,-1)),Ve={class:"weather-main"},Le={class:"main-temp"},Be={class:"main-right"},Oe=D(()=>a("br",null,null,-1)),qe=D(()=>a("br",null,null,-1)),Ae=D(()=>a("br",null,null,-1)),je=D(()=>a("div",{style:{clear:"both"}},null,-1));function He(e,t,o,n,s,r){const l=g("forecast");return s.weather.name?(c(),d("div",De,[a("div",Ee,[a("b",null,u(s.weather.name),1),k(" , "+u(s.weather.weather[0].description),1)]),a("div",Ne,[a("img",{src:r.getIconUrl(s.weather.weather[0].icon),alt:""},null,8,Pe)]),We,a("div",Ve,[a("div",Le,u(r.calcTemp(s.weather.main.temp))+"\xB0",1),a("div",Be,[k(" Feels Like: "+u(r.calcTemp(s.weather.main.feels_like))+" \xB0C ",1),Oe,k(" Pressure:"+u(s.weather.main.pressure)+" hPa ",1),qe,k(" Humidity: "+u(s.weather.main.humidity)+" % ",1),Ae,k(" Wind: "+u(r.calcWindSpeed(s.weather.wind.speed))+" km/h, "+u(r.calcWindDirection(s.weather.wind.deg)),1)])]),a("div",{class:"show-forecast-btn",onClick:t[0]||(t[0]=(...i)=>r.toggleShowForecast&&r.toggleShowForecast(...i))},[a("div",{class:H(s.showForecast?"forecast-icon-minus":"forecast-icon")},null,2)]),je,m(O,null,{default:N(()=>[S(m(l,{forecast:s.weather.forecast},null,8,["forecast"]),[[T,s.showForecast]])]),_:1})])):v("",!0)}var ze=w(Te,[["render",He],["__scopeId","data-v-95b21f6c"]]);const Ge={props:{text:String}},Ye={class:"show-btn"};function Ke(e,t,o,n,s,r){return c(),d("div",Ye,u(o.text),1)}var K=w(Ge,[["render",Ke],["__scopeId","data-v-7fab9b97"]]);const Je={data(){return{text:""}},props:{date:Date},methods:I(h({},P(["addToSchedule"])),{save(e){this.text!=""&&(this.addToSchedule({date:this.date,text:this.text}),this.text="",this.$emit("close-form"))}})},Qe={class:"input"},Re={action:""},Xe={key:0,class:"form-date"};function Ze(e,t,o,n,s,r){return c(),d("div",Qe,[a("form",Re,[o.date?(c(),d("div",Xe,u(String(o.date.getDate()).padStart(2,"0"))+" "+u(String(o.date.getMonth()+1).padStart(2,"0"))+" "+u(o.date.getFullYear()),1)):v("",!0),S(a("textarea",{name:"form-text","onUpdate:modelValue":t[0]||(t[0]=l=>s.text=l),class:"form-text"},null,512),[[E,s.text]]),a("button",{class:"form-btn",onClick:t[1]||(t[1]=z(l=>r.save(),["prevent"]))},"Save"),a("button",{onClick:t[2]||(t[2]=z(l=>e.$emit("close-form"),["prevent"]))},"Close")])])}var J=w(Je,[["render",Ze],["__scopeId","data-v-222c3a69"]]);const et={name:"Schedule",components:{DatePicker:G,ButtonNormal:K,ScheduleInputForm:J},data(){return{date:null,show:!1,showDatePicker:!1,editableId:null,oldText:""}},computed:h({},M(["getSchedule","getUsername","getShowSchedule"])),methods:I(h(h({},P(["deleteFromSchedule","editNote"])),F(["setShowSchedule"])),{editInSchedule(e){const t=document.getElementById(e);t.contentEditable=!0,t.classList.add("note-text-edit"),this.editableId=e,this.oldText=t.innerHTML},save(e){const t=document.getElementById(e),o=t.innerHTML.replace(/\u00a0/g," ");t.contentEditable=!1,t.classList.remove("note-text-edit"),this.editableId=null,this.oldText="";try{this.editNote({id:e,text:o})}catch(n){console.log(n)}},cancel(e){const t=document.getElementById(e);t.innerHTML=this.oldText,t.contentEditable=!1,t.classList.remove("note-text-edit"),this.editableId=null,this.oldText=""}})},tt={class:"schedule",id:"schedule"},st={class:"notes",key:"notes"},ot={class:"day"},at={class:"day-date"},nt={class:"note"},rt={class:"note-header"},lt={class:"note-username"},ct={class:"note-icons"},dt=["onClick"],ut=["onClick"],it=["onClick"],ht=["onClick"],_t=["id"];function mt(e,t,o,n,s,r){const l=g("button-normal"),i=g("DatePicker"),b=g("ScheduleInputForm");return c(),d("div",tt,[m(oe,null,{default:N(()=>[e.getUsername?(c(),q(l,{key:"buttonNormal",text:"Pick a Date",onClick:t[0]||(t[0]=f=>s.showDatePicker=!s.showDatePicker)})):v("",!0),s.showDatePicker&&e.getUsername?(c(),q(i,{key:"datePicker",modelValue:s.date,"onUpdate:modelValue":t[1]||(t[1]=f=>s.date=f),color:"blue","is-dark":""},null,8,["modelValue"])):v("",!0),s.date&&e.getUsername?(c(),q(b,{key:"scheduleInputForm",date:s.date,onCloseForm:t[2]||(t[2]=f=>s.date=null)},null,8,["date"])):v("",!0),a("div",st,[(c(!0),d(y,null,x(e.getSchedule,(f,U)=>(c(),d("div",ot,[a("div",at,u(new Date(U).getDate())+". "+u(new Date(U).getMonth()+1)+". "+u(new Date(U).getFullYear())+". ",1),(c(!0),d(y,null,x(f,p=>(c(),d("div",nt,[a("div",rt,[a("span",lt,u(p.username)+" :",1),a("span",ct,[e.getUsername===p.username&&s.editableId===p._id?(c(),d("i",{key:0,onClick:V=>r.save(p._id),class:"fa fa-save"},null,8,dt)):v("",!0),e.getUsername===p.username&&s.editableId===p._id?(c(),d("i",{key:1,onClick:V=>r.cancel(p._id),class:"fa fa-times"},null,8,ut)):v("",!0),e.getUsername===p.username&&s.editableId!=p._id?(c(),d("i",{key:2,onClick:V=>r.editInSchedule(p._id),class:"fa fa-edit"},null,8,it)):v("",!0),e.getUsername===p.username?(c(),d("i",{key:3,onClick:V=>e.deleteFromSchedule(p._id),class:"fa fa-trash"},null,8,ht)):v("",!0)])]),a("span",{class:"note-text",id:p._id},u(p.text.replace(/ /g," ")),9,_t)]))),256))]))),256))])]),_:1})])}var pt=w(et,[["render",mt],["__scopeId","data-v-3ce58e56"]]);const gt={components:{DatePicker:G,ButtonNormal:K,ScheduleInputForm:J},data(){return{date:null,showDatePicker:!1}},computed:h({},M(["getUsername"])),watch:{showDatePicker(e){e||(this.date=null)}}};function ft(e,t,o,n,s,r){const l=g("button-normal"),i=g("DatePicker",!0),b=g("ScheduleInputForm");return c(),d(y,null,[m(l,{text:"Pick a Date",onClick:t[0]||(t[0]=f=>s.showDatePicker=!s.showDatePicker)}),m(O,null,{default:N(()=>[S(m(i,{modelValue:s.date,"onUpdate:modelValue":t[1]||(t[1]=f=>s.date=f),color:"blue","is-dark":""},null,8,["modelValue"]),[[T,s.showDatePicker]])]),_:1}),m(O,null,{default:N(()=>[S(m(b,{date:s.date,onCloseForm:t[2]||(t[2]=f=>s.date=null)},null,8,["date"]),[[T,s.date]])]),_:1})],64)}var vt=w(gt,[["render",ft],["__scopeId","data-v-29be3a9e"]]);const wt={name:"Login",data(){return{username:"",password:""}},computed:h({},M(["getUsername"])),methods:I(h(h({},P(["login","logout"])),F(["setShowMessages"])),{async loginForm(e){e.preventDefault();const t=document.getElementById("username"),o=document.getElementById("password");try{await this.login({username:this.username,password:this.password}),this.username="",this.password=""}catch(n){t.setCustomValidity(n.request.response),t.reportValidity(),t.setCustomValidity(""),o.setCustomValidity("")}}})},yt=e=>(L("data-v-9527a942"),e=e(),B(),e),St={class:"login"},kt=yt(()=>a("button",{type:"submit"},"log in",-1)),$t={class:"user"};function bt(e,t,o,n,s,r){return c(),d("div",St,[S(a("form",{onSubmit:t[2]||(t[2]=(...l)=>r.loginForm&&r.loginForm(...l))},[S(a("input",{type:"text",name:"username",id:"username",required:"","onUpdate:modelValue":t[0]||(t[0]=l=>s.username=l),placeholder:"username"},null,512),[[E,s.username]]),S(a("input",{type:"text",name:"password",id:"password",required:"","onUpdate:modelValue":t[1]||(t[1]=l=>s.password=l),placeholder:"password"},null,512),[[E,s.password]]),kt],544),[[T,e.getUsername===""]]),S(a("div",$t,[a("p",{onClick:t[3]||(t[3]=l=>e.setShowMessages(!0))},u(e.getUsername),1),a("button",{onClick:t[4]||(t[4]=(...l)=>e.logout&&e.logout(...l))},"Log Out")],512),[[T,e.getUsername!=""]])])}var It=w(wt,[["render",bt],["__scopeId","data-v-9527a942"]]);const xt={name:"Messages",components:{CloseIcon:Y},data(){return{messageText:""}},computed:I(h({},M(["getMessages","getUsername","getShowMessages"])),{messagesIsEmpty(){return ae.isEmpty(this.getMessages)}}),methods:h({},F(["setChatUsername","setShowMessages"])),created(){}},Ct={key:0,class:"message-container"},Ut=["onClick"],Mt={key:0};function Ft(e,t,o,n,s,r){const l=g("close-icon");return e.getShowMessages?(c(),d("div",Ct,[m(l,{onClick:t[0]||(t[0]=i=>e.setShowMessages(!1))}),(c(!0),d(y,null,x(e.getMessages,(i,b)=>(c(),d("div",{class:"message",onClick:f=>e.setChatUsername(b)},[a("b",null,u(b)+":",1),k(" "+u(i[i.length-1].text),1)],8,Ut))),256)),r.messagesIsEmpty?(c(),d("div",Mt,"no messages")):v("",!0)])):v("",!0)}var Tt=w(xt,[["render",Ft],["__scopeId","data-v-6dd56b55"]]);const Dt={components:{WeatherCard:ze,DatePicker:vt,Schedule:pt,Login:It,Messages:Tt,Chat:ve},methods:h(h({},P(["fetchSchedule"])),F(["setUsername"])),created(){this.fetchSchedule();const e=localStorage.getItem("x-auth-token"),t=localStorage.getItem("username");e&&t&&(this.setUsername(t),_.defaults.headers.post["x-auth-token"]=e,_.defaults.headers.delete["x-auth-token"]=e,_.defaults.headers.put["x-auth-token"]=e)}},Et={class:"container"},Nt={class:"showcase"},Pt=a("h1",null,"house web",-1),Wt=a("div",null,[a("a",{href:"#schedule"},[a("div",{class:"scroll-to-schedule-icon"})])],-1),Vt=a("div",{class:"footer"},[k(" Copyright \xA9 2022 by mato "),a("br"),k(" All rights reserved ")],-1);function Lt(e,t,o,n,s,r){const l=g("login"),i=g("WeatherCard"),b=g("messages"),f=g("chat"),U=g("schedule");return c(),d("div",Et,[m(l),a("div",Nt,[Pt,m(i),Wt]),m(b),m(f),m(U),Vt])}var Bt=w(Dt,[["render",Lt]]);ne(Bt).use(W,$).mount("#app");

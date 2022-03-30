var z=Object.defineProperty,R=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var H=(e,s,o)=>s in e?z(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,u=(e,s)=>{for(var o in s||(s={}))Q.call(s,o)&&H(e,o,s[o]);if(j)for(var o of j(s))X.call(s,o)&&H(e,o,s[o]);return e},v=(e,s)=>R(e,J(s));import{m as U,a as D,b as I,c,w as b,v as F,d as n,e as W,t as i,p as B,f as V,o as d,F as w,r as S,g as $,h,n as O,i as y,j as q,T as G,k as p,l as g,_ as Z,q as ee,s as se,u as A,x as P,y as te,z as oe,A as ne}from"./vendor.f4dcd3d7.js";const ae=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};ae();var _=(e,s)=>{const o=e.__vccOpts||e;for(const[l,t]of s)o[l]=t;return o};const re={name:"Login",data(){return{inputUsername:"",inputPassword:""}},computed:u({},U(["username"])),methods:v(u(u({},D(["login","logout"])),I(["setShowMessages"])),{async loginFormSubmit(e){e.preventDefault();const s=document.getElementById("username"),o=document.getElementById("password");try{await this.login({username:this.inputUsername,password:this.inputPassword}),this.inputUsername="",this.inputPassword=""}catch(l){s.setCustomValidity(l.request.response),s.reportValidity(),s.setCustomValidity(""),o.setCustomValidity("")}}})},le=e=>(B("data-v-ddaf6682"),e=e(),V(),e),de={class:"login"},ce=le(()=>n("button",{type:"submit"},"log in",-1)),ie={class:"user"};function ue(e,s,o,l,t,r){return d(),c("div",de,[b(n("form",{onSubmit:s[2]||(s[2]=(...a)=>r.loginFormSubmit&&r.loginFormSubmit(...a))},[b(n("input",{type:"text",name:"username",id:"username",required:"","onUpdate:modelValue":s[0]||(s[0]=a=>t.inputUsername=a),placeholder:"username"},null,512),[[W,t.inputUsername]]),b(n("input",{type:"password",name:"password",id:"password",required:"","onUpdate:modelValue":s[1]||(s[1]=a=>t.inputPassword=a),placeholder:"password"},null,512),[[W,t.inputPassword]]),ce],544),[[F,e.username===""]]),b(n("div",ie,[n("p",{onClick:s[3]||(s[3]=a=>e.setShowMessages(!0))},i(e.username),1),n("button",{onClick:s[4]||(s[4]=(...a)=>e.logout&&e.logout(...a))},"Log Out")],512),[[F,e.username!=""]])])}var he=_(re,[["render",ue],["__scopeId","data-v-ddaf6682"]]);const me={name:"Forecast",props:{forecast:Array},methods:{calcTemp(e){return Math.round(Number(e)-273.15)},getIconUrl(e){return`http://openweathermap.org/img/w/${e}.png`}}},_e=e=>(B("data-v-0e0d6b16"),e=e(),V(),e),pe={class:"forecast"},ge=$(" \xA0 5 day forecast "),fe=_e(()=>n("hr",null,null,-1)),ve={key:"day.dt"},we={key:"day.dt"},ye={key:"day.dt"},xe=["src"],be={key:"day.dt"};function Se(e,s,o,l,t,r){return d(),c("div",pe,[ge,fe,n("table",null,[n("tr",null,[(d(!0),c(w,null,S(o.forecast,a=>(d(),c("th",ve,i(a.day),1))),128))]),n("tr",null,[(d(!0),c(w,null,S(o.forecast,a=>(d(),c("td",we,i(r.calcTemp(a.main.temp))+"\xB0 ",1))),128))]),n("tr",null,[(d(!0),c(w,null,S(o.forecast,a=>(d(),c("td",ye,[n("img",{src:r.getIconUrl(a.weather[0].icon),alt:""},null,8,xe)]))),128))]),n("tr",null,[(d(!0),c(w,null,S(o.forecast,a=>(d(),c("td",be,i(a.weather[0].main),1))),128))])])])}var $e=_(me,[["render",Se],["__scopeId","data-v-0e0d6b16"]]);const ke={name:"WeatherCard",components:{Forecast:$e},data(){return{weather:{},showForecast:!1}},methods:{calcTemp(e){return Math.round(Number(e)-273.15)},calcWindSpeed(e){return Math.round(e*3.6*10)/10},getIconUrl(e){return`http://openweathermap.org/img/w/${e}.png`},calcWindDirection(e){var s=Math.floor(e/22.5+.5),o=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];return o[s%16]},toggleShowForecast(){this.weather.forecast||this.fetchForecast().catch(e=>console.log(e)),this.showForecast=!this.showForecast},async fetchWeather(){try{const e=await h.get("https://api.openweathermap.org/data/2.5/weather/?q=gudovac&appid=524464013431281f7aabe3e488765d52");this.weather=await e.data}catch(e){console.log(e)}},async fetchForecast(){const e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=[];try{const l=await(await h.get("https://api.openweathermap.org/data/2.5/forecast/?q=gudovac&appid=524464013431281f7aabe3e488765d52")).data;if(typeof l!="undefined"){for(let t=7;t<=l.list.length;t+=8){let r=new Date(l.list[t].dt_txt);l.list[t].day=e[r.getDay()],s.push(l.list[t])}this.weather.forecast=s}else throw"problem with fetching forecast"}catch(o){console.log(o)}}},created(){this.fetchWeather()}},N=e=>(B("data-v-95b21f6c"),e=e(),V(),e),Ie={key:0,class:"card"},Ce={class:"header-left"},Ue={class:"header-right"},Le=["src"],Me=N(()=>n("div",{style:{clear:"both"}},null,-1)),Fe={class:"weather-main"},Te={class:"main-temp"},Ee={class:"main-right"},Pe=N(()=>n("br",null,null,-1)),Ne=N(()=>n("br",null,null,-1)),De=N(()=>n("br",null,null,-1)),We=N(()=>n("div",{style:{clear:"both"}},null,-1));function Be(e,s,o,l,t,r){const a=g("forecast");return t.weather.name?(d(),c("div",Ie,[n("div",Ce,[n("b",null,i(t.weather.name),1),$(" , "+i(t.weather.weather[0].description),1)]),n("div",Ue,[n("img",{src:r.getIconUrl(t.weather.weather[0].icon),alt:""},null,8,Le)]),Me,n("div",Fe,[n("div",Te,i(r.calcTemp(t.weather.main.temp))+"\xB0",1),n("div",Ee,[$(" Feels Like: "+i(r.calcTemp(t.weather.main.feels_like))+" \xB0C ",1),Pe,$(" Pressure:"+i(t.weather.main.pressure)+" hPa ",1),Ne,$(" Humidity: "+i(t.weather.main.humidity)+" % ",1),De,$(" Wind: "+i(r.calcWindSpeed(t.weather.wind.speed))+" km/h, "+i(r.calcWindDirection(t.weather.wind.deg)),1)])]),n("div",{class:"show-forecast-btn",onClick:s[0]||(s[0]=(...f)=>r.toggleShowForecast&&r.toggleShowForecast(...f))},[n("div",{class:O(t.showForecast?"forecast-icon-minus":"forecast-icon")},null,2)]),We,y(G,null,{default:q(()=>[b(y(a,{forecast:t.weather.forecast},null,8,["forecast"]),[[F,t.showForecast]])]),_:1})])):p("",!0)}var Ve=_(ke,[["render",Be],["__scopeId","data-v-95b21f6c"]]);const Ae={},Oe={class:"close-icon"};function qe(e,s,o,l,t,r){return d(),c("div",Oe)}var K=_(Ae,[["render",qe],["__scopeId","data-v-2eb9cc04"]]);const je={name:"Messages",components:{CloseIcon:K},data(){return{messageText:""}},computed:v(u({},U(["messages","username","showMessages"])),{messagesIsEmpty(){return Z.isEmpty(this.messages)}}),methods:u({},I(["setChatUsername","setShowMessages","setShowUsers"])),created(){}},He={key:0,class:"message-container"},Ge={class:"messages-header"},Ke=$(" messages "),Ye=["onClick"],ze={class:"username"},Re={class:"text"},Je={key:0};function Qe(e,s,o,l,t,r){return e.showMessages?(d(),c("div",He,[n("div",Ge,[Ke,n("i",{class:"fa fa-close",onClick:s[0]||(s[0]=a=>e.setShowMessages(!1))})]),(d(!0),c(w,null,S(e.messages,(a,f)=>(d(),c("div",{class:"message",onClick:M=>e.setChatUsername(f)},[n("span",ze,[n("b",null,i(f)+":",1)]),n("span",Re,i(a[a.length-1].text),1)],8,Ye))),256)),r.messagesIsEmpty?(d(),c("div",Je,"no messages")):p("",!0),n("i",{class:"start-chat fa fa-plus",onClick:s[1]||(s[1]=a=>e.setShowUsers(!0))})])):p("",!0)}var Xe=_(je,[["render",Qe],["__scopeId","data-v-bb59dc2c"]]);const Ze="http://houseweb.herokuapp.com/",es="http://localhost:5000/";var C={host:Ze,host1:es},L=ee({state:{schedule:{},username:"",messages:{},chatUsername:null,showMessages:!1,showUsers:!1,showLightbox:!1,lightboxIndex:0,scrollPosition:0,users:{},images:[]},getters:{schedule:e=>e.schedule,scheduleById:e=>s=>{let o=null;return Object.entries(e.schedule).forEach(([l,t])=>{t.forEach(r=>{r._id===s&&(o=r)})}),o},username:e=>e.username,messages:e=>e.messages,chatUsername:e=>e.chatUsername,showMessages:e=>e.showMessages,users:e=>e.users,showUsers:e=>e.showUsers,showLightbox:e=>e.showLightbox,scrollPosition:e=>e.scrollPosition,lightboxIndex:e=>e.lightboxIndex,images:e=>e.images},actions:{async fetchSchedule({commit:e}){try{const s=await h.get(`${C.host}api/schedule`);e("addSchedule",s.data)}catch(s){console.log(s.message)}},async fetchImages({commit:e}){try{const s=await h.get(`${C.host}api/images`);e("addImages",s.data)}catch(s){console.log("fetchImage error -> "+s.message)}},async addToSchedule({commit:e},s){try{s.date.setHours(0,0,0,0);const o=v(u({},s),{username:this.state.username}),l=await h.post(`${C.host}api/schedule`,o);e("addToSchedule",l.data)}catch(o){console.log("addToSchedule error -> "+o.message)}},async editNote({commit:e},s){try{const o=await h.put(`${C.host}api/schedule`,s)}catch(o){console.log("editNote error -> "+o)}},async deleteFromSchedule({commit:e},s){if(confirm("are you shure?"))try{const o=await h.delete(`${C.host}api/schedule/${s}`);e("deleteFromSchedule",s)}catch(o){console.log(`deleteFromSchedule error -> ${o.message}`)}},async login({commit:e,dispatch:s},o){try{const l=await h.post(`${C.host}api/auth`,o),t=l.headers["x-auth-token"];localStorage.setItem("x-auth-token",t),localStorage.setItem("username",l.data.username),h.defaults.headers.post["x-auth-token"]=t,h.defaults.headers.delete["x-auth-token"]=t,h.defaults.headers.put["x-auth-token"]=t,e("setUsername",l.data.username),x.auth.token=t,x.connect()}catch(l){if(l.request!=null)throw console.log("response :"+l.request.response),l;console.log(l)}},logout({commit:e}){e("setUsername",""),e("addMessages",null),e("setShowMessages",!1),e("setChatUsername",null),localStorage.removeItem("x-auth-token"),delete h.defaults.headers.post["x-auth-token"],delete h.defaults.headers.delete["x-auth-token"],delete h.defaults.headers.put["x-auth-token"],x.auth.token=null,x.close()}},mutations:{addSchedule(e,s){const o=(l,t)=>l.reduce((r,a)=>v(u({},r),{[a[t]]:[...r[a[t]]||[],a]}),{});e.schedule=o(s,"date")},addToSchedule(e,s){Object.keys(e.schedule).includes(s.date)?e.schedule[s.date].push(s):e.schedule[s.date]=[s]},addImages(e,s){s.forEach(o=>{let l=String(o).slice(-9);e.images.push(`${C.host}${l}`)})},setUsername(e,s){e.username=s},editSchedule(e,s){let o=this.scheduleById(s.id);o.text=s.tex},deleteFromSchedule(e,s){Object.entries(e.schedule).forEach(([o,l])=>{l.forEach(t=>{t._id===s&&(e.schedule[o].splice(l.indexOf(t),1),e.schedule[o].length===0&&delete e.schedule[o])})})},addMessages(e,s){e.messages=s},addMessage(e,s){s.from===e.username?e.messages[s.to]?e.messages[s.to].push(s):e.messages[s.to]=[s]:e.messages[s.from]?e.messages[s.from].push(s):e.messages[s.from]=[s]},setChatUsername(e,s){e.chatUsername=s,e.chatUsername!=null&&(e.showSchedule=!1)},setShowMessages(e,s){e.showMessages=s,e.showMessages==!0&&(e.showSchedule=!1)},addUsers(e,s){e.users=s},updateUserStatus(e,s){try{console.log("update status 4 "+s.username+" : "+s.status);const o=e.users.findIndex(l=>l.username===s.username);e.users[o].isConnected=s.status}catch(o){console.log(o.message)}},setShowUsers(e,s){e.showUsers=s},setShowLightbox(e,s){e.showLightbox=s},setscrollPosition(e,s){e.scrollPosition=s},setLightboxIndex(e,s){e.lightboxIndex=s}}});const ss=(e,s)=>{const o={};return e.map(l=>{l.from!=s?o[l.from]=[...o[l.from]||[],l]:o[l.to]=[...o[l.to]||[],l]}),o},x=se(C.host,{auth:{token:localStorage.getItem("x-auth-token")}});x.on("connect_error",e=>{console.log(e.message)});x.on("connected",e=>{L.commit("addMessages",ss(e.messages,L.state.username)),L.commit("addUsers",e.users)});x.on("message",e=>{L.commit("addMessage",e)});x.on("newUserConnected",e=>{L.commit("updateUserStatus",{username:e,status:!0})});x.on("disconnected",e=>{L.commit("updateUserStatus",{username:e,status:!1}),console.log(e+" disconnected")});const ts={data(){return{messageText:""}},components:{CloseIcon:K},computed:u({},U(["messages","username","chatUsername"])),methods:v(u({},I(["setChatUsername"])),{sendMessage(){x.emit("postMessage",{to:this.chatUsername,text:this.messageText}),this.messageText=""}})},os={key:0,class:"chat-container"},ns={class:"chat-header"},as={class:"chat"},rs={class:"chat-input-form"};function ls(e,s,o,l,t,r){return e.chatUsername?(d(),c("div",os,[n("div",ns,[n("span",null,i(e.username)+"\xA0\u2190\u2192\xA0"+i(e.chatUsername),1),n("i",{class:"fa fa-close",onClick:s[0]||(s[0]=a=>e.setChatUsername(null))})]),n("div",as,[(d(!0),c(w,null,S(e.messages[e.chatUsername],a=>(d(),c("div",{class:O(["chat-message",a.from===e.username?"chat-message-left":"chat-message-right"])},i(a.text),3))),256))]),n("div",rs,[b(n("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=a=>t.messageText=a)},null,512),[[W,t.messageText]]),n("button",{onClick:s[2]||(s[2]=(...a)=>r.sendMessage&&r.sendMessage(...a))},"send")])])):p("",!0)}var ds=_(ts,[["render",ls],["__scopeId","data-v-f1ecb23c"]]);const cs={computed:u({},U(["users","username","showUsers"])),methods:u({},I(["setShowUsers","setChatUsername"]))},is={key:0,class:"users-container"},us={class:"users"},hs=["onClick"];function ms(e,s,o,l,t,r){return d(),A(G,null,{default:q(()=>[e.username&&e.showUsers?(d(),c("div",is,[n("div",us,[n("i",{class:"fa fa-close",onClick:s[0]||(s[0]=a=>e.setShowUsers(!1))}),(d(!0),c(w,null,S(e.users,a=>(d(),c("div",{class:O(["user",a.isConnected?"user-online":""]),onClick:f=>e.setChatUsername(a.username)},i(a.username),11,hs))),256))])])):p("",!0)]),_:1})}var _s=_(cs,[["render",ms],["__scopeId","data-v-f3ae8f14"]]);const ps={props:{text:String}},gs={class:"show-btn"};function fs(e,s,o,l,t,r){return d(),c("div",gs,i(o.text),1)}var vs=_(ps,[["render",fs],["__scopeId","data-v-7fab9b97"]]);const ws={data(){return{text:""}},props:{date:{type:Date,required:!0}},methods:v(u({},D(["addToSchedule"])),{save(e){this.text!=""&&(this.addToSchedule({date:this.date,text:this.text}),this.text="",this.$emit("close-form"))}})},ys={class:"input"},xs={action:""},bs={class:"form-date"};function Ss(e,s,o,l,t,r){return d(),c("div",ys,[n("form",xs,[n("div",bs,i(String(o.date.getDate()).padStart(2,"0"))+" "+i(String(o.date.getMonth()+1).padStart(2,"0"))+" "+i(o.date.getFullYear()),1),b(n("textarea",{name:"form-text","onUpdate:modelValue":s[0]||(s[0]=a=>t.text=a),class:"form-text"},null,512),[[W,t.text]]),n("button",{class:"form-btn",onClick:s[1]||(s[1]=P(a=>r.save(),["prevent"]))},"Save"),n("button",{onClick:s[2]||(s[2]=P(a=>e.$emit("close-form"),["prevent"]))},"Close")])])}var $s=_(ws,[["render",Ss],["__scopeId","data-v-af6a1cdc"]]);const ks={name:"Schedule",components:{DatePicker:te,ButtonNormal:vs,ScheduleInputForm:$s},data(){return{date:null,show:!1,showDatePicker:!1,editableId:null,oldText:""}},computed:u({},U(["schedule","username","getShowSchedule"])),methods:v(u(u({},D(["deleteFromSchedule","editNote"])),I(["setShowSchedule"])),{editInSchedule(e){const s=document.getElementById(e);s.contentEditable=!0,s.classList.add("note-text-edit"),this.editableId=e,this.oldText=s.innerHTML},save(e){const s=document.getElementById(e),o=s.innerHTML.replace(/\u00a0/g," ");s.contentEditable=!1,s.classList.remove("note-text-edit"),this.editableId=null,this.oldText="";try{this.editNote({id:e,text:o})}catch(l){console.log(l)}},cancel(e){const s=document.getElementById(e);s.innerHTML=this.oldText,s.contentEditable=!1,s.classList.remove("note-text-edit"),this.editableId=null,this.oldText=""}})},Is={class:"schedule",id:"schedule"},Cs={class:"notes",key:"notes"},Us={class:"day"},Ls={class:"day-date"},Ms={class:"note"},Fs={class:"note-header"},Ts={class:"note-username"},Es={class:"note-icons"},Ps=["onClick"],Ns=["onClick"],Ds=["onClick"],Ws=["onClick"],Bs=["id"];function Vs(e,s,o,l,t,r){const a=g("button-normal"),f=g("DatePicker"),M=g("ScheduleInputForm");return d(),c("div",Is,[y(oe,null,{default:q(()=>[e.username?(d(),A(a,{key:"buttonNormal",text:"Pick a Date",onClick:s[0]||(s[0]=k=>t.showDatePicker=!t.showDatePicker)})):p("",!0),t.showDatePicker&&e.username?(d(),A(f,{key:"datePicker",modelValue:t.date,"onUpdate:modelValue":s[1]||(s[1]=k=>t.date=k),color:"blue","is-dark":""},null,8,["modelValue"])):p("",!0),t.date&&e.username?(d(),A(M,{key:"scheduleInputForm",date:t.date,onCloseForm:s[2]||(s[2]=k=>t.date=null)},null,8,["date"])):p("",!0),n("div",Cs,[(d(!0),c(w,null,S(e.schedule,(k,T)=>(d(),c("div",Us,[n("div",Ls,i(new Date(T).getDate())+". "+i(new Date(T).getMonth()+1)+". "+i(new Date(T).getFullYear())+". ",1),(d(!0),c(w,null,S(k,m=>(d(),c("div",Ms,[n("div",Fs,[n("span",Ts,i(m.username)+" :",1),n("span",Es,[e.username===m.username&&t.editableId===m._id?(d(),c("i",{key:0,onClick:E=>r.save(m._id),class:"fa fa-save"},null,8,Ps)):p("",!0),e.username===m.username&&t.editableId===m._id?(d(),c("i",{key:1,onClick:E=>r.cancel(m._id),class:"fa fa-times"},null,8,Ns)):p("",!0),e.username===m.username&&t.editableId!=m._id?(d(),c("i",{key:2,onClick:E=>r.editInSchedule(m._id),class:"fa fa-edit"},null,8,Ds)):p("",!0),e.username===m.username?(d(),c("i",{key:3,onClick:E=>e.deleteFromSchedule(m._id),class:"fa fa-trash"},null,8,Ws)):p("",!0)])]),n("span",{class:"note-text",id:m._id},i(m.text.replace(/ /g," ")),9,Bs)]))),256))]))),256))])]),_:1})])}var As=_(ks,[["render",Vs],["__scopeId","data-v-ca57d37a"]]);const Os={props:{images:{type:Array,required:!0}},computed:v(u({},U(["showLightbox","scrollPosition","lightboxIndex"])),{hasNext(){return this.lightboxIndex+1<this.images.length},hasPrev(){return this.lightboxIndex-1>=0}}),watch:{showLightbox(e){document.getElementById("lightbox").style.top=this.scrollPosition+"px",e?this.preventScrolling():this.enableScrolling()}},methods:v(u({},I(["setShowLightbox","setLightboxIndex"])),{preventScroll(e){return e.preventDefault(),e.stopPropagation(),!1},preventScrolling(){document.getElementsByTagName("BODY")[0].addEventListener("wheel",this.preventScroll,{passive:!1})},enableScrolling(){document.getElementsByTagName("BODY")[0].removeEventListener("wheel",this.preventScroll)},show(e){this.setLightboxIndex(e)},hide(){this.setShowLightbox(!1),this.setLightboxIndex(0)},next(){this.hasNext&&this.setLightboxIndex(this.lightboxIndex+1)},prev(){this.hasPrev&&this.setLightboxIndex(this.lightboxIndex-1)},onKeydown(e){if(this.showLightbox)switch(e.key){case"ArrowRight":this.next();break;case"ArrowLeft":this.prev();break;case"ArrowUp":case"ArrowDown":case" ":e.preventDefault();break;case"Escape":this.hide();break}}}),mounted(){window.addEventListener("keydown",this.onKeydown)},destroyed(){window.removeEventListener("keydown",this.onKeydown)}},qs={class:"image-container"},js={class:"prev"},Hs=["src"],Gs={class:"next"};function Ks(e,s,o,l,t,r){return b((d(),c("div",{class:"lightbox",id:"lightbox",onClick:s[4]||(s[4]=(...a)=>r.hide&&r.hide(...a))},[n("div",qs,[n("div",{class:"close",onClick:s[0]||(s[0]=(...a)=>r.hide&&r.hide(...a))},"\xD7"),n("div",js,[b(n("span",{onClick:s[1]||(s[1]=P((...a)=>r.prev&&r.prev(...a),["stop"]))},"\u276E",512),[[F,r.hasPrev]])]),n("img",{class:"image",src:o.images[e.lightboxIndex],alt:"",onClick:s[2]||(s[2]=P(()=>{},["stop"]))},null,8,Hs),n("div",Gs,[b(n("span",{onClick:s[3]||(s[3]=P((...a)=>r.next&&r.next(...a),["stop"]))},"\u276F",512),[[F,r.hasNext]])])])],512)),[[F,e.showLightbox]])}var Ys=_(Os,[["render",Ks],["__scopeId","data-v-fb61a11e"]]);const zs={components:{Lightbox:Ys},computed:u({},U(["images"])),methods:v(u({},I(["setShowLightbox","setscrollPosition","setLightboxIndex"])),{show(e){this.setLightboxIndex(e),this.setShowLightbox(!0),this.setscrollPosition(document.documentElement.scrollTop||document.body.scrollTop)}})},Y=e=>(B("data-v-4eeec204"),e=e(),V(),e),Rs=Y(()=>n("div",{class:"images-header"},"images",-1)),Js={class:"image-container"},Qs=["onClick","src"],Xs=Y(()=>n("div",{class:"images-footer"},null,-1));function Zs(e,s,o,l,t,r){const a=g("lightbox");return d(),c(w,null,[Rs,n("div",Js,[(d(!0),c(w,null,S(e.images,(f,M)=>(d(),c("img",{onClick:k=>r.show(M),class:"image",src:f,alt:""},null,8,Qs))),256))]),Xs,y(a,{images:e.images},null,8,["images"])],64)}var et=_(zs,[["render",Zs],["__scopeId","data-v-4eeec204"]]);const st={components:{WeatherCard:Ve,Login:he,Messages:Xe,Chat:ds,Users:_s,Schedule:As,ImageGallery:et},methods:u(u({},D(["fetchSchedule","fetchImages"])),I(["setUsername"])),created(){this.fetchSchedule(),this.fetchImages();const e=localStorage.getItem("x-auth-token"),s=localStorage.getItem("username");e&&s&&(this.setUsername(s),h.defaults.headers.post["x-auth-token"]=e,h.defaults.headers.delete["x-auth-token"]=e,h.defaults.headers.put["x-auth-token"]=e)}},tt={class:"container"},ot={class:"showcase"},nt=n("h1",null,"house web",-1),at=n("a",{href:"#schedule"},[n("div",{class:"scroll-to-schedule-icon"})],-1),rt=n("div",{class:"footer"},[$(" Copyright \xA9 2022 by mato "),n("br"),$(" All rights reserved ")],-1);function lt(e,s,o,l,t,r){const a=g("login"),f=g("WeatherCard"),M=g("users"),k=g("messages"),T=g("chat"),m=g("schedule"),E=g("image-gallery");return d(),c("div",tt,[y(a),n("div",ot,[nt,y(f),at,y(M)]),y(k),y(T),y(m),y(E),rt])}var dt=_(st,[["render",lt]]);ne(dt).use(L,x).mount("#app");

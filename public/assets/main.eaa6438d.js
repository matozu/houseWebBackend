var K=Object.defineProperty,R=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var j=(e,s,t)=>s in e?K(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,u=(e,s)=>{for(var t in s||(s={}))Q.call(s,t)&&j(e,t,s[t]);if(H)for(var t of H(s))X.call(s,t)&&j(e,t,s[t]);return e},w=(e,s)=>R(e,J(s));import{_}from"./plugin-vue_export-helper.ddefbfc0.js";import{m as U,a as P,b as $,c as d,d as n,w as y,v as L,e as B,f as p,n as W,t as c,F as g,o as i,p as V,g as A,r as S,h as k,i as h,j as b,k as O,T as Y,l as f,_ as Z,q as ee,s as se,u as q,x as D,y as te,z as oe,A as ne}from"./vendor.a4b8ffa9.js";const ae={name:"Login",data(){return{inputUsername:"",inputPassword:"",showLoginInput:!1}},computed:u({},U(["username"])),watch:{showLoginInput(e){e&&window.innerWidth<=500?this.preventScrolling():this.enableScrolling()}},methods:w(u(u({},P(["login","logout"])),$(["setShowMessages"])),{async loginFormSubmit(e){e.preventDefault();const s=document.getElementById("username"),t=document.getElementById("password");try{await this.login({username:this.inputUsername,password:this.inputPassword}),this.inputUsername="",this.inputPassword="",this.showLoginInput=!1}catch(r){s.setCustomValidity(r.request.response),s.reportValidity(),s.setCustomValidity(""),t.setCustomValidity("")}},preventScroll(e){return e.preventDefault(),e.stopPropagation(),!1},preventScrolling(){document.getElementsByTagName("BODY")[0].addEventListener("wheel",this.preventScroll,{passive:!1})},enableScrolling(){document.getElementsByTagName("BODY")[0].removeEventListener("wheel",this.preventScroll)}})},re=e=>(V("data-v-727b0724"),e=e(),A(),e),le={key:0,type:"submit"},ie=re(()=>n("span",{class:"fa fa-times"},null,-1)),de=[ie],ce={class:"user"};function ue(e,s,t,r,o,l){return i(),d(g,null,[n("div",{class:W({login:!0,loginHide:!o.showLoginInput})},[y(n("form",{onSubmit:s[3]||(s[3]=(...a)=>l.loginFormSubmit&&l.loginFormSubmit(...a))},[y(n("input",{type:"text",name:"username",id:"username",required:"","onUpdate:modelValue":s[0]||(s[0]=a=>o.inputUsername=a),placeholder:"username"},null,512),[[B,o.inputUsername]]),y(n("input",{type:"password",name:"password",id:"password",required:"","onUpdate:modelValue":s[1]||(s[1]=a=>o.inputPassword=a),placeholder:"password"},null,512),[[B,o.inputPassword]]),o.showLoginInput?(i(),d("button",le,"login")):(i(),d("button",{key:1,class:"show-login-btn desktop",onClick:s[2]||(s[2]=a=>o.showLoginInput=!0)}," login "))],544),[[L,e.username===""]]),o.showLoginInput&&e.username===""?(i(),d("button",{key:0,class:"close",onClick:s[4]||(s[4]=a=>o.showLoginInput=!1)},de)):p("",!0)],2),!o.showLoginInput&&e.username===""?(i(),d("button",{key:0,class:"show-login-btn mobile",onClick:s[5]||(s[5]=a=>o.showLoginInput=!0)}," login ")):p("",!0),y(n("div",ce,[n("p",{onClick:s[6]||(s[6]=a=>e.setShowMessages(!0))},c(e.username),1),n("button",{onClick:s[7]||(s[7]=a=>{e.logout(),o.showLoginInput=!1})}," Log Out ")],512),[[L,e.username!=""]])],64)}var he=_(ae,[["render",ue],["__scopeId","data-v-727b0724"]]);const me={name:"Forecast",props:{forecast:Array},methods:{calcTemp(e){return Math.round(Number(e)-273.15)},getIconUrl(e){return`http://openweathermap.org/img/w/${e}.png`}}},_e=e=>(V("data-v-0e0d6b16"),e=e(),A(),e),pe={class:"forecast"},ge=k(" \xA0 5 day forecast "),fe=_e(()=>n("hr",null,null,-1)),ve={key:"day.dt"},we={key:"day.dt"},ye={key:"day.dt"},be=["src"],xe={key:"day.dt"};function Se(e,s,t,r,o,l){return i(),d("div",pe,[ge,fe,n("table",null,[n("tr",null,[(i(!0),d(g,null,S(t.forecast,a=>(i(),d("th",ve,c(a.day),1))),128))]),n("tr",null,[(i(!0),d(g,null,S(t.forecast,a=>(i(),d("td",we,c(l.calcTemp(a.main.temp))+"\xB0 ",1))),128))]),n("tr",null,[(i(!0),d(g,null,S(t.forecast,a=>(i(),d("td",ye,[n("img",{src:l.getIconUrl(a.weather[0].icon),alt:""},null,8,be)]))),128))]),n("tr",null,[(i(!0),d(g,null,S(t.forecast,a=>(i(),d("td",xe,c(a.weather[0].main),1))),128))])])])}var ke=_(me,[["render",Se],["__scopeId","data-v-0e0d6b16"]]);const Ie={name:"WeatherCard",components:{Forecast:ke},data(){return{weather:{},showForecast:!1}},methods:{calcTemp(e){return Math.round(Number(e)-273.15)},calcWindSpeed(e){return Math.round(e*3.6*10)/10},getIconUrl(e){return`http://openweathermap.org/img/w/${e}.png`},calcWindDirection(e){var s=Math.floor(e/22.5+.5),t=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];return t[s%16]},toggleShowForecast(){this.weather.forecast||this.fetchForecast().catch(e=>console.log(e)),this.showForecast=!this.showForecast},async fetchWeather(){try{const e=await h.get("https://api.openweathermap.org/data/2.5/weather/?q=gudovac&appid=524464013431281f7aabe3e488765d52");this.weather=await e.data}catch(e){console.log(e)}},async fetchForecast(){const e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=[];try{const r=await(await h.get("https://api.openweathermap.org/data/2.5/forecast/?q=gudovac&appid=524464013431281f7aabe3e488765d52")).data;if(typeof r!="undefined"){for(let o=7;o<=r.list.length;o+=8){let l=new Date(r.list[o].dt_txt);r.list[o].day=e[l.getDay()],s.push(r.list[o])}this.weather.forecast=s}else throw"problem with fetching forecast"}catch(t){console.log(t)}}},created(){this.fetchWeather()}},N=e=>(V("data-v-95b21f6c"),e=e(),A(),e),$e={key:0,class:"card"},Ce={class:"header-left"},Ue={class:"header-right"},Le=["src"],Ee=N(()=>n("div",{style:{clear:"both"}},null,-1)),Me={class:"weather-main"},Te={class:"main-temp"},Fe={class:"main-right"},De=N(()=>n("br",null,null,-1)),Ne=N(()=>n("br",null,null,-1)),Pe=N(()=>n("br",null,null,-1)),Be=N(()=>n("div",{style:{clear:"both"}},null,-1));function We(e,s,t,r,o,l){const a=f("forecast");return o.weather.name?(i(),d("div",$e,[n("div",Ce,[n("b",null,c(o.weather.name),1),k(" , "+c(o.weather.weather[0].description),1)]),n("div",Ue,[n("img",{src:l.getIconUrl(o.weather.weather[0].icon),alt:""},null,8,Le)]),Ee,n("div",Me,[n("div",Te,c(l.calcTemp(o.weather.main.temp))+"\xB0",1),n("div",Fe,[k(" Feels Like: "+c(l.calcTemp(o.weather.main.feels_like))+" \xB0C ",1),De,k(" Pressure:"+c(o.weather.main.pressure)+" hPa ",1),Ne,k(" Humidity: "+c(o.weather.main.humidity)+" % ",1),Pe,k(" Wind: "+c(l.calcWindSpeed(o.weather.wind.speed))+" km/h, "+c(l.calcWindDirection(o.weather.wind.deg)),1)])]),n("div",{class:"show-forecast-btn",onClick:s[0]||(s[0]=(...v)=>l.toggleShowForecast&&l.toggleShowForecast(...v))},[n("div",{class:W(o.showForecast?"forecast-icon-minus":"forecast-icon")},null,2)]),Be,b(Y,null,{default:O(()=>[y(b(a,{forecast:o.weather.forecast},null,8,["forecast"]),[[L,o.showForecast]])]),_:1})])):p("",!0)}var Ve=_(Ie,[["render",We],["__scopeId","data-v-95b21f6c"]]);const Ae={},qe={class:"close-icon"};function Oe(e,s,t,r,o,l){return i(),d("div",qe)}var G=_(Ae,[["render",Oe],["__scopeId","data-v-2eb9cc04"]]);const He={name:"Messages",components:{CloseIcon:G},data(){return{messageText:""}},computed:w(u({},U(["messages","username","showMessages"])),{messagesIsEmpty(){return Z.isEmpty(this.messages)}}),methods:u({},$(["setChatUsername","setShowMessages","setShowUsers"])),created(){}},je={key:0,class:"message-container"},Ye={class:"messages-header"},Ge=k(" messages "),ze=["onClick"],Ke={class:"username"},Re={class:"text"},Je={key:0};function Qe(e,s,t,r,o,l){return e.showMessages?(i(),d("div",je,[n("div",Ye,[Ge,n("i",{class:"fa fa-close",onClick:s[0]||(s[0]=a=>e.setShowMessages(!1))})]),(i(!0),d(g,null,S(e.messages,(a,v)=>(i(),d("div",{class:"message",onClick:M=>e.setChatUsername(v)},[n("span",Ke,[n("b",null,c(v)+":",1)]),n("span",Re,c(a[a.length-1].text),1)],8,ze))),256)),l.messagesIsEmpty?(i(),d("div",Je,"no messages")):p("",!0),n("i",{class:"start-chat fa fa-plus",onClick:s[1]||(s[1]=a=>e.setShowUsers(!0))})])):p("",!0)}var Xe=_(He,[["render",Qe],["__scopeId","data-v-868bafb4"]]);const Ze="https://housewebbackend.onrender.com/",es="http://localhost:5000/";var C={host:Ze,host1:es},ss={state:{showLightbox:!1,lightboxIndex:0,images:[],scrollPosition:0},getters:{showLightbox:e=>e.showLightbox,lightboxIndex:e=>e.lightboxIndex,images:e=>e.images,scrollPosition:e=>e.scrollPosition},actions:{async fetchImages({commit:e}){try{const s=await h.get(`${C.host}api/images`);e("addImages",s.data)}catch(s){console.log("fetchImage error -> "+s.message)}}},mutations:{addImages(e,s){s.forEach(t=>{let r=String(t).slice(-9);e.images.push(`${C.host}${r}`)})},setShowLightbox(e,s){e.showLightbox=s},setLightboxIndex(e,s){e.lightboxIndex=s},setscrollPosition(e,s){e.scrollPosition=s}}},ts={state:{username:"",messages:{},chatUsername:null,showMessages:!1,showUsers:!1,users:{}},getters:{username:e=>e.username,messages:e=>e.messages,chatUsername:e=>e.chatUsername,showMessages:e=>e.showMessages,users:e=>e.users,showUsers:e=>e.showUsers},actions:{async login({commit:e,dispatch:s},t){try{const r=await h.post(`${C.host}api/auth`,t),o=r.headers["x-auth-token"];localStorage.setItem("x-auth-token",o),localStorage.setItem("username",r.data.username),h.defaults.headers.post["x-auth-token"]=o,h.defaults.headers.delete["x-auth-token"]=o,h.defaults.headers.put["x-auth-token"]=o,e("setUsername",r.data.username),x.auth.token=o,x.connect()}catch(r){if(r.request!=null)throw console.log("response :"+r.request.response),r;console.log(r)}},logout({commit:e}){e("setUsername",""),e("addMessages",null),e("setShowMessages",!1),e("setChatUsername",null),localStorage.removeItem("x-auth-token"),delete h.defaults.headers.post["x-auth-token"],delete h.defaults.headers.delete["x-auth-token"],delete h.defaults.headers.put["x-auth-token"],x.auth.token=null,x.close()}},mutations:{setUsername(e,s){e.username=s},addMessages(e,s){e.messages=s},addMessage(e,s){s.from===e.username?e.messages[s.to]?e.messages[s.to].push(s):e.messages[s.to]=[s]:e.messages[s.from]?e.messages[s.from].push(s):e.messages[s.from]=[s]},setChatUsername(e,s){e.chatUsername=s,e.chatUsername!=null&&(e.showSchedule=!1)},setShowMessages(e,s){e.showMessages=s,e.showMessages==!0&&(e.showSchedule=!1)},addUsers(e,s){e.users=s},updateUserStatus(e,s){try{console.log("update status 4 "+s.username+" : "+s.status);const t=e.users.findIndex(r=>r.username===s.username);e.users[t].isConnected=s.status}catch(t){console.log(t.message)}},setShowUsers(e,s){e.showUsers=s}}},os={state:{schedule:{}},getters:{schedule:e=>e.schedule,scheduleById:e=>s=>{let t=null;return Object.entries(e.schedule).forEach(([r,o])=>{o.forEach(l=>{l._id===s&&(t=l)})}),t}},actions:{async fetchSchedule({commit:e}){try{const s=await h.get(`${C.host}api/schedule`);e("addSchedule",s.data)}catch(s){console.log(s.message)}},async addToSchedule({commit:e},s){try{s.date.setHours(0,0,0,0);const t=w(u({},s),{username:this.state.username}),r=await h.post(`${C.host}api/schedule`,t);e("addToSchedule",r.data)}catch(t){console.log("addToSchedule error -> "+t.message)}},async editNote({commit:e},s){try{const t=await h.put(`${C.host}api/schedule`,s)}catch(t){console.log("editNote error -> "+t)}},async deleteFromSchedule({commit:e},s){if(confirm("are you shure?"))try{const t=await h.delete(`${C.host}api/schedule/${s}`);e("deleteFromSchedule",s)}catch(t){console.log(`deleteFromSchedule error -> ${t.message}`)}}},mutations:{addSchedule(e,s){const t=(r,o)=>r.reduce((l,a)=>w(u({},l),{[a[o]]:[...l[a[o]]||[],a]}),{});e.schedule=t(s,"date")},addToSchedule(e,s){Object.keys(e.schedule).includes(s.date)?e.schedule[s.date].push(s):e.schedule[s.date]=[s]},editSchedule(e,s){let t=this.scheduleById(s.id);t.text=s.tex},deleteFromSchedule(e,s){Object.entries(e.schedule).forEach(([t,r])=>{r.forEach(o=>{o._id===s&&(e.schedule[t].splice(r.indexOf(o),1),e.schedule[t].length===0&&delete e.schedule[t])})})}}},E=ee({modules:{scheduleStore:os,lightboxStore:ss,usersAndMessagesStore:ts}});const ns=(e,s)=>{const t={};return e.map(r=>{r.from!=s?t[r.from]=[...t[r.from]||[],r]:t[r.to]=[...t[r.to]||[],r]}),t},x=se(C.host,{auth:{token:localStorage.getItem("x-auth-token")}});x.on("connect_error",e=>{console.log(e.message)});x.on("connected",e=>{E.commit("addMessages",ns(e.messages,E.state.username)),E.commit("addUsers",e.users)});x.on("message",e=>{E.commit("addMessage",e)});x.on("newUserConnected",e=>{E.commit("updateUserStatus",{username:e,status:!0})});x.on("disconnected",e=>{E.commit("updateUserStatus",{username:e,status:!1}),console.log(e+" disconnected")});const as={data(){return{messageText:""}},components:{CloseIcon:G},computed:u({},U(["messages","username","chatUsername"])),methods:w(u({},$(["setChatUsername"])),{sendMessage(){x.emit("postMessage",{to:this.chatUsername,text:this.messageText}),this.messageText=""}}),watch:{chatUsername(){const e=document.getElementById("chatDiv");e&&(e.scrollTop=e.scrollHeight)}},mounted(){var e=this;this.$refs.chatInputField.addEventListener("keyup",function(s){(s.code==="Enter"||s.code==="NumpadEnter")&&e.sendMessage()})},updated(){const e=document.getElementById("chatDiv");e&&(e.scrollTop=e.scrollHeight)}},rs={class:"chat-container"},ls={class:"chat-header"},is={class:"chat",id:"chatDiv"},ds={class:"chat-input-form"};function cs(e,s,t,r,o,l){return y((i(),d("div",rs,[n("div",ls,[n("span",null,c(e.username)+"\xA0\u2190\u2192\xA0"+c(e.chatUsername),1),n("i",{class:"fa fa-close",onClick:s[0]||(s[0]=a=>e.setChatUsername(null))})]),n("div",is,[(i(!0),d(g,null,S(e.messages[e.chatUsername],a=>(i(),d("div",{class:W(["chat-message",a.from===e.username?"chat-message-left":"chat-message-right"])},c(a.text),3))),256))]),n("div",ds,[y(n("input",{type:"text",ref:"chatInputField","onUpdate:modelValue":s[1]||(s[1]=a=>o.messageText=a)},null,512),[[B,o.messageText]]),n("button",{onClick:s[2]||(s[2]=(...a)=>l.sendMessage&&l.sendMessage(...a)),ref:"sendBtn"},"send",512)])],512)),[[L,e.chatUsername]])}var us=_(as,[["render",cs],["__scopeId","data-v-3032688b"]]);const hs={computed:u({},U(["users","username","showUsers"])),methods:u({},$(["setShowUsers","setChatUsername"]))},ms={key:0,class:"users-container"},_s={class:"users"},ps=["onClick"];function gs(e,s,t,r,o,l){return i(),q(Y,null,{default:O(()=>[e.username&&e.showUsers?(i(),d("div",ms,[n("div",_s,[n("i",{class:"fa fa-close",onClick:s[0]||(s[0]=a=>e.setShowUsers(!1))}),(i(!0),d(g,null,S(e.users,a=>(i(),d("div",{class:W(["user",a.isConnected?"user-online":""]),onClick:v=>e.setChatUsername(a.username)},c(a.username),11,ps))),256))])])):p("",!0)]),_:1})}var fs=_(hs,[["render",gs],["__scopeId","data-v-5d25e1ac"]]);const vs={props:{text:String}},ws={class:"show-btn"};function ys(e,s,t,r,o,l){return i(),d("div",ws,c(t.text),1)}var bs=_(vs,[["render",ys],["__scopeId","data-v-7fab9b97"]]);const xs={data(){return{text:""}},props:{date:{type:Date,required:!0}},methods:w(u({},P(["addToSchedule"])),{save(e){this.text!=""&&(this.addToSchedule({date:this.date,text:this.text}),this.text="",this.$emit("close-form"))}})},Ss={class:"input"},ks={action:""},Is={class:"form-date"};function $s(e,s,t,r,o,l){return i(),d("div",Ss,[n("form",ks,[n("div",Is,c(String(t.date.getDate()).padStart(2,"0"))+" "+c(String(t.date.getMonth()+1).padStart(2,"0"))+" "+c(t.date.getFullYear()),1),y(n("textarea",{name:"form-text","onUpdate:modelValue":s[0]||(s[0]=a=>o.text=a),class:"form-text"},null,512),[[B,o.text]]),n("button",{class:"form-btn",onClick:s[1]||(s[1]=D(a=>l.save(),["prevent"]))},"Save"),n("button",{onClick:s[2]||(s[2]=D(a=>e.$emit("close-form"),["prevent"]))},"Close")])])}var Cs=_(xs,[["render",$s],["__scopeId","data-v-af6a1cdc"]]);const Us={name:"Schedule",components:{DatePicker:te,ButtonNormal:bs,ScheduleInputForm:Cs},data(){return{date:null,show:!1,showDatePicker:!1,editableId:null,oldText:""}},computed:u({},U(["schedule","username","getShowSchedule"])),methods:w(u(u({},P(["deleteFromSchedule","editNote"])),$(["setShowSchedule"])),{editInSchedule(e){const s=document.getElementById(e);s.contentEditable=!0,s.classList.add("note-text-edit"),this.editableId=e,this.oldText=s.innerHTML},save(e){const s=document.getElementById(e),t=s.innerHTML.replace(/\u00a0/g," ");s.contentEditable=!1,s.classList.remove("note-text-edit"),this.editableId=null,this.oldText="";try{this.editNote({id:e,text:t})}catch(r){console.log(r)}},cancel(e){const s=document.getElementById(e);s.innerHTML=this.oldText,s.contentEditable=!1,s.classList.remove("note-text-edit"),this.editableId=null,this.oldText=""}})},Ls={class:"schedule",id:"schedule"},Es={class:"notes",key:"notes"},Ms={class:"day"},Ts={class:"day-date"},Fs={class:"note"},Ds={class:"note-header"},Ns={class:"note-username"},Ps={class:"note-icons"},Bs=["onClick"],Ws=["onClick"],Vs=["onClick"],As=["onClick"],qs=["id"];function Os(e,s,t,r,o,l){const a=f("button-normal"),v=f("DatePicker"),M=f("ScheduleInputForm");return i(),d("div",Ls,[b(oe,null,{default:O(()=>[e.username?(i(),q(a,{key:"buttonNormal",text:"Pick a Date",onClick:s[0]||(s[0]=I=>o.showDatePicker=!o.showDatePicker)})):p("",!0),o.showDatePicker&&e.username?(i(),q(v,{key:"datePicker",modelValue:o.date,"onUpdate:modelValue":s[1]||(s[1]=I=>o.date=I),color:"blue","is-dark":""},null,8,["modelValue"])):p("",!0),o.date&&e.username?(i(),q(M,{key:"scheduleInputForm",date:o.date,onCloseForm:s[2]||(s[2]=I=>o.date=null)},null,8,["date"])):p("",!0),n("div",Es,[(i(!0),d(g,null,S(e.schedule,(I,T)=>(i(),d("div",Ms,[n("div",Ts,c(new Date(T).getDate())+". "+c(new Date(T).getMonth()+1)+". "+c(new Date(T).getFullYear())+". ",1),(i(!0),d(g,null,S(I,m=>(i(),d("div",Fs,[n("div",Ds,[n("span",Ns,c(m.username)+" :",1),n("span",Ps,[e.username===m.username&&o.editableId===m._id?(i(),d("i",{key:0,onClick:F=>l.save(m._id),class:"fa fa-save"},null,8,Bs)):p("",!0),e.username===m.username&&o.editableId===m._id?(i(),d("i",{key:1,onClick:F=>l.cancel(m._id),class:"fa fa-times"},null,8,Ws)):p("",!0),e.username===m.username&&o.editableId!=m._id?(i(),d("i",{key:2,onClick:F=>l.editInSchedule(m._id),class:"fa fa-edit"},null,8,Vs)):p("",!0),e.username===m.username?(i(),d("i",{key:3,onClick:F=>e.deleteFromSchedule(m._id),class:"fa fa-trash"},null,8,As)):p("",!0)])]),n("span",{class:"note-text",id:m._id},c(m.text.replace(/ /g," ")),9,qs)]))),256))]))),256))])]),_:1})])}var Hs=_(Us,[["render",Os],["__scopeId","data-v-ca57d37a"]]);const js={props:{images:{type:Array,required:!0}},computed:w(u({},U(["showLightbox","scrollPosition","lightboxIndex"])),{hasNext(){return this.lightboxIndex+1<this.images.length},hasPrev(){return this.lightboxIndex-1>=0}}),watch:{showLightbox(e){document.getElementById("lightbox").style.top=this.scrollPosition+"px",e?this.preventScrolling():this.enableScrolling()}},methods:w(u({},$(["setShowLightbox","setLightboxIndex"])),{preventScroll(e){return e.preventDefault(),e.stopPropagation(),!1},preventScrolling(){document.getElementsByTagName("BODY")[0].addEventListener("wheel",this.preventScroll,{passive:!1})},enableScrolling(){document.getElementsByTagName("BODY")[0].removeEventListener("wheel",this.preventScroll)},show(e){this.setLightboxIndex(e)},hide(){this.setShowLightbox(!1),this.setLightboxIndex(0)},next(){this.hasNext&&this.setLightboxIndex(this.lightboxIndex+1)},prev(){this.hasPrev&&this.setLightboxIndex(this.lightboxIndex-1)},onKeydown(e){if(this.showLightbox)switch(e.key){case"ArrowRight":this.next();break;case"ArrowLeft":this.prev();break;case"ArrowUp":case"ArrowDown":case" ":e.preventDefault();break;case"Escape":this.hide();break}}}),mounted(){window.addEventListener("keydown",this.onKeydown)},destroyed(){window.removeEventListener("keydown",this.onKeydown)}},Ys={class:"image-container"},Gs={class:"prev"},zs=["src"],Ks={class:"next"};function Rs(e,s,t,r,o,l){return y((i(),d("div",{class:"lightbox",id:"lightbox",onClick:s[4]||(s[4]=(...a)=>l.hide&&l.hide(...a))},[n("div",Ys,[n("div",{class:"close",onClick:s[0]||(s[0]=(...a)=>l.hide&&l.hide(...a))},"\xD7"),n("div",Gs,[y(n("span",{onClick:s[1]||(s[1]=D((...a)=>l.prev&&l.prev(...a),["stop"]))},"\u276E",512),[[L,l.hasPrev]])]),n("img",{class:"image",src:t.images[e.lightboxIndex],alt:"",onClick:s[2]||(s[2]=D(()=>{},["stop"]))},null,8,zs),n("div",Ks,[y(n("span",{onClick:s[3]||(s[3]=D((...a)=>l.next&&l.next(...a),["stop"]))},"\u276F",512),[[L,l.hasNext]])])])],512)),[[L,e.showLightbox]])}var Js=_(js,[["render",Rs],["__scopeId","data-v-79d60f47"]]);const Qs={components:{Lightbox:Js},computed:u({},U(["images"])),methods:w(u({},$(["setShowLightbox","setscrollPosition","setLightboxIndex"])),{show(e){this.setLightboxIndex(e),this.setShowLightbox(!0),this.setscrollPosition(document.documentElement.scrollTop||document.body.scrollTop)}})},z=e=>(V("data-v-4eeec204"),e=e(),A(),e),Xs=z(()=>n("div",{class:"images-header"},"images",-1)),Zs={class:"image-container"},et=["onClick","src"],st=z(()=>n("div",{class:"images-footer"},null,-1));function tt(e,s,t,r,o,l){const a=f("lightbox");return i(),d(g,null,[Xs,n("div",Zs,[(i(!0),d(g,null,S(e.images,(v,M)=>(i(),d("img",{onClick:I=>l.show(M),class:"image",src:v,alt:""},null,8,et))),256))]),st,b(a,{images:e.images},null,8,["images"])],64)}var ot=_(Qs,[["render",tt],["__scopeId","data-v-4eeec204"]]);const nt={components:{WeatherCard:Ve,Login:he,Messages:Xe,Chat:us,Users:fs,Schedule:Hs,ImageGallery:ot},methods:u(u({},P(["fetchSchedule","fetchImages"])),$(["setUsername"])),created(){this.fetchSchedule(),this.fetchImages();const e=localStorage.getItem("x-auth-token"),s=localStorage.getItem("username");e&&s&&(this.setUsername(s),h.defaults.headers.post["x-auth-token"]=e,h.defaults.headers.delete["x-auth-token"]=e,h.defaults.headers.put["x-auth-token"]=e)}},at={class:"container"},rt={class:"showcase"},lt=n("h1",null,"house web",-1),it=n("a",{href:"#schedule"},[n("div",{class:"scroll-to-schedule-icon"})],-1),dt=n("div",{class:"footer"},[k(" Copyright \xA9 2022 by "),n("a",{href:"https://matozu.github.io"},"mato"),n("br"),k(" All rights reserved ")],-1);function ct(e,s,t,r,o,l){const a=f("login"),v=f("WeatherCard"),M=f("users"),I=f("messages"),T=f("chat"),m=f("schedule"),F=f("image-gallery");return i(),d("div",at,[b(a),n("div",rt,[lt,b(v),it,b(M)]),b(I),b(T),b(m),b(F),dt])}var ut=_(nt,[["render",ct]]);ne(ut).use(E,x).mount("#app");

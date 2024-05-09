var K=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var Y=(e,t,s)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(e,t)=>{for(var s in t||(t={}))Z.call(t,s)&&Y(e,s,t[s]);if(q)for(var s of q(t))ee.call(t,s)&&Y(e,s,t[s]);return e},p=(e,t)=>J(e,Q(t));import{_}from"./plugin-vue_export-helper.ddefbfc0.js";import{m as U,a as N,b as I,c as d,d as n,w as f,v as F,e as E,f as g,n as A,t as c,F as w,o as l,p as T,g as D,r as k,h as $,i as h,j as y,k as H,T as R,l as v,_ as te,q as se,s as oe,u as W,x as O,y as ne,z as ae,A as re,B as ie}from"./vendor.8beb2fb1.js";const le={name:"Login",data(){return{inputUsername:"",inputPassword:"",showLoginInput:!1}},computed:u({},U(["username"])),watch:{showLoginInput(e){e&&window.innerWidth<=500?this.preventScrolling():this.enableScrolling()}},methods:p(u(u({},N(["login","logout"])),I(["setShowMessages","toggleShowRegistration"])),{async loginFormSubmit(e){e.preventDefault();const t=document.getElementById("username"),s=document.getElementById("password");try{await this.login({username:this.inputUsername,password:this.inputPassword}),this.inputUsername="",this.inputPassword="",this.showLoginInput=!1}catch(r){t.setCustomValidity(r.request.response),t.reportValidity(),t.setCustomValidity(""),s.setCustomValidity("")}},preventScroll(e){return e.preventDefault(),e.stopPropagation(),!1},preventScrolling(){document.getElementsByTagName("BODY")[0].addEventListener("wheel",this.preventScroll,{passive:!1})},enableScrolling(){document.getElementsByTagName("BODY")[0].removeEventListener("wheel",this.preventScroll)}})},de=e=>(T("data-v-78e0c8c8"),e=e(),D(),e),ce={key:0,type:"submit"},ue=de(()=>n("span",{class:"fa fa-times"},null,-1)),he=[ue],me={class:"user"};function ge(e,t,s,r,o,i){return l(),d(w,null,[n("div",{class:A({login:!0,loginHide:!o.showLoginInput})},[f(n("form",{onSubmit:t[3]||(t[3]=(...a)=>i.loginFormSubmit&&i.loginFormSubmit(...a))},[f(n("input",{type:"text",name:"username",id:"username",required:"","onUpdate:modelValue":t[0]||(t[0]=a=>o.inputUsername=a),placeholder:"username"},null,512),[[E,o.inputUsername]]),f(n("input",{type:"password",name:"password",id:"password",required:"","onUpdate:modelValue":t[1]||(t[1]=a=>o.inputPassword=a),placeholder:"password"},null,512),[[E,o.inputPassword]]),o.showLoginInput?(l(),d("button",ce,"login")):(l(),d("button",{key:1,class:"show-login-btn desktop",onClick:t[2]||(t[2]=a=>o.showLoginInput=!0)}," login "))],544),[[F,e.username===""]]),o.showLoginInput&&e.username===""?(l(),d("button",{key:0,class:"close",onClick:t[4]||(t[4]=a=>o.showLoginInput=!1)},he)):g("",!0),n("span",{class:"register",onClick:t[5]||(t[5]=a=>{e.toggleShowRegistration(),this.showLoginInput=!1})},"register")],2),!o.showLoginInput&&e.username===""?(l(),d("button",{key:0,class:"show-login-btn mobile",onClick:t[6]||(t[6]=a=>o.showLoginInput=!0)}," login ")):g("",!0),f(n("div",me,[n("p",{onClick:t[7]||(t[7]=a=>e.setShowMessages(!0))},c(e.username),1),n("button",{onClick:t[8]||(t[8]=a=>{e.logout(),o.showLoginInput=!1})}," Log Out ")],512),[[F,e.username!=""]])],64)}var pe=_(le,[["render",ge],["__scopeId","data-v-78e0c8c8"]]);const _e={name:"Forecast",props:{forecast:Array},methods:{calcTemp(e){return Math.round(Number(e)-273.15)},getIconUrl(e){return`http://openweathermap.org/img/w/${e}.png`}}},fe=e=>(T("data-v-0e0d6b16"),e=e(),D(),e),ve={class:"forecast"},we=$(" \xA0 5 day forecast "),ye=fe(()=>n("hr",null,null,-1)),be={key:"day.dt"},Se={key:"day.dt"},ke={key:"day.dt"},xe=["src"],Ie={key:"day.dt"};function $e(e,t,s,r,o,i){return l(),d("div",ve,[we,ye,n("table",null,[n("tr",null,[(l(!0),d(w,null,k(s.forecast,a=>(l(),d("th",be,c(a.day),1))),128))]),n("tr",null,[(l(!0),d(w,null,k(s.forecast,a=>(l(),d("td",Se,c(i.calcTemp(a.main.temp))+"\xB0 ",1))),128))]),n("tr",null,[(l(!0),d(w,null,k(s.forecast,a=>(l(),d("td",ke,[n("img",{src:i.getIconUrl(a.weather[0].icon),alt:""},null,8,xe)]))),128))]),n("tr",null,[(l(!0),d(w,null,k(s.forecast,a=>(l(),d("td",Ie,c(a.weather[0].main),1))),128))])])])}var Ce=_(_e,[["render",$e],["__scopeId","data-v-0e0d6b16"]]);const Ue={name:"WeatherCard",components:{Forecast:Ce},data(){return{weather:{},showForecast:!1}},methods:{calcTemp(e){return Math.round(Number(e)-273.15)},calcWindSpeed(e){return Math.round(e*3.6*10)/10},getIconUrl(e){return`http://openweathermap.org/img/w/${e}.png`},calcWindDirection(e){var t=Math.floor(e/22.5+.5),s=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];return s[t%16]},toggleShowForecast(){this.weather.forecast||this.fetchForecast().catch(e=>console.log(e)),this.showForecast=!this.showForecast},async fetchWeather(){try{const e=await h.get("https://api.openweathermap.org/data/2.5/weather/?q=gudovac&appid=524464013431281f7aabe3e488765d52");this.weather=await e.data}catch(e){console.log(e)}},async fetchForecast(){const e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],t=[];try{const r=await(await h.get("https://api.openweathermap.org/data/2.5/forecast/?q=gudovac&appid=524464013431281f7aabe3e488765d52")).data;if(typeof r!="undefined"){for(let o=7;o<=r.list.length;o+=8){let i=new Date(r.list[o].dt_txt);r.list[o].day=e[i.getDay()],t.push(r.list[o])}this.weather.forecast=t}else throw"problem with fetching forecast"}catch(s){console.log(s)}}},created(){this.fetchWeather()}},V=e=>(T("data-v-95b21f6c"),e=e(),D(),e),Le={key:0,class:"card"},Ee={class:"header-left"},Me={class:"header-right"},Fe=["src"],Te=V(()=>n("div",{style:{clear:"both"}},null,-1)),De={class:"weather-main"},Pe={class:"main-temp"},Be={class:"main-right"},Ne=V(()=>n("br",null,null,-1)),We=V(()=>n("br",null,null,-1)),Oe=V(()=>n("br",null,null,-1)),Ve=V(()=>n("div",{style:{clear:"both"}},null,-1));function Ae(e,t,s,r,o,i){const a=v("forecast");return o.weather.name?(l(),d("div",Le,[n("div",Ee,[n("b",null,c(o.weather.name),1),$(" , "+c(o.weather.weather[0].description),1)]),n("div",Me,[n("img",{src:i.getIconUrl(o.weather.weather[0].icon),alt:""},null,8,Fe)]),Te,n("div",De,[n("div",Pe,c(i.calcTemp(o.weather.main.temp))+"\xB0",1),n("div",Be,[$(" Feels Like: "+c(i.calcTemp(o.weather.main.feels_like))+" \xB0C ",1),Ne,$(" Pressure:"+c(o.weather.main.pressure)+" hPa ",1),We,$(" Humidity: "+c(o.weather.main.humidity)+" % ",1),Oe,$(" Wind: "+c(i.calcWindSpeed(o.weather.wind.speed))+" km/h, "+c(i.calcWindDirection(o.weather.wind.deg)),1)])]),n("div",{class:"show-forecast-btn",onClick:t[0]||(t[0]=(...b)=>i.toggleShowForecast&&i.toggleShowForecast(...b))},[n("div",{class:A(o.showForecast?"forecast-icon-minus":"forecast-icon")},null,2)]),Ve,y(R,null,{default:H(()=>[f(y(a,{forecast:o.weather.forecast},null,8,["forecast"]),[[F,o.showForecast]])]),_:1})])):g("",!0)}var He=_(Ue,[["render",Ae],["__scopeId","data-v-95b21f6c"]]);const Re={},qe={class:"close-icon"};function Ye(e,t,s,r,o,i){return l(),d("div",qe)}var j=_(Re,[["render",Ye],["__scopeId","data-v-2eb9cc04"]]);const je={name:"Messages",components:{CloseIcon:j},data(){return{messageText:""}},computed:p(u({},U(["messages","username","showMessages"])),{messagesIsEmpty(){return te.isEmpty(this.messages)}}),methods:u({},I(["setChatUsername","setShowMessages","setShowUsers"])),created(){}},Xe={key:0,class:"message-container"},ze={class:"messages-header"},Ge=$(" messages "),Ke=["onClick"],Je={class:"username"},Qe={class:"text"},Ze={key:0,class:"no-message"};function et(e,t,s,r,o,i){return e.showMessages?(l(),d("div",Xe,[n("div",ze,[Ge,n("i",{class:"fa fa-close",onClick:t[0]||(t[0]=a=>e.setShowMessages(!1))})]),(l(!0),d(w,null,k(e.messages,(a,b)=>(l(),d("div",{class:"message",onClick:L=>e.setChatUsername(b)},[n("span",Je,[n("b",null,c(b)+":",1)]),n("span",Qe,c(a[a.length-1].text),1)],8,Ke))),256)),i.messagesIsEmpty?(l(),d("div",Ze,"no messages")):g("",!0),n("i",{class:"start-chat fa fa-plus",onClick:t[1]||(t[1]=a=>e.setShowUsers(!0))})])):g("",!0)}var tt=_(je,[["render",et],["__scopeId","data-v-f8da0dd4"]]);const st="https://housewebbackend.onrender.com/",ot="http://localhost:5000/";var C={host:st,host1:ot},nt={state:{showLightbox:!1,lightboxIndex:0,images:[],scrollPosition:0},getters:{showLightbox:e=>e.showLightbox,lightboxIndex:e=>e.lightboxIndex,images:e=>e.images,scrollPosition:e=>e.scrollPosition},actions:{async fetchImages({commit:e}){try{const t=await h.get(`${C.host}api/images`);e("addImages",t.data)}catch(t){console.log("fetchImage error -> "+t.message)}}},mutations:{addImages(e,t){t.forEach(s=>{let r=String(s).slice(-9);e.images.push(`${C.host}${r}`)})},setShowLightbox(e,t){e.showLightbox=t},setLightboxIndex(e,t){e.lightboxIndex=t},setscrollPosition(e,t){e.scrollPosition=t}}},at={state:{username:"",messages:{},chatUsername:null,showMessages:!1,showUsers:!1,users:{},showRegistration:!1},getters:{username:e=>e.username,messages:e=>e.messages,chatUsername:e=>e.chatUsername,showMessages:e=>e.showMessages,users:e=>e.users,showUsers:e=>e.showUsers,showRegistration:e=>e.showRegistration},actions:{async register({commit:e},t){try{const s=await h.post(`${C.host}api/register`,t)}catch(s){throw s}},async login({commit:e,dispatch:t},s){try{const r=await h.post(`${C.host}api/auth`,s);console.log(r);const o=r.headers["x-auth-token"];localStorage.setItem("x-auth-token",o),localStorage.setItem("username",r.data.username),h.defaults.headers.post["x-auth-token"]=o,h.defaults.headers.delete["x-auth-token"]=o,h.defaults.headers.put["x-auth-token"]=o,e("setUsername",r.data.username),S.auth.token=o,S.connect()}catch(r){if(r.request!=null)throw console.log("response :"+r.request.response),r;console.log(r)}},logout({commit:e}){e("setUsername",""),e("addMessages",null),e("setShowMessages",!1),e("setChatUsername",null),localStorage.removeItem("x-auth-token"),delete h.defaults.headers.post["x-auth-token"],delete h.defaults.headers.delete["x-auth-token"],delete h.defaults.headers.put["x-auth-token"],S.auth.token=null,S.close()}},mutations:{setUsername(e,t){e.username=t},addMessages(e,t){e.messages=t},addMessage(e,t){t.from===e.username?e.messages[t.to]?e.messages[t.to].push(t):e.messages[t.to]=[t]:e.messages[t.from]?e.messages[t.from].push(t):e.messages[t.from]=[t]},setChatUsername(e,t){e.chatUsername=t,e.chatUsername!=null&&(e.showSchedule=!1)},setShowMessages(e,t){e.showMessages=t,e.showMessages==!0&&(e.showSchedule=!1)},addUsers(e,t){e.users=t},updateUserStatus(e,t){try{const s=e.users.findIndex(r=>r.username===t.username);e.users[s].isConnected=t.status}catch(s){console.log(s.message)}},setShowUsers(e,t){e.showUsers=t},toggleShowRegistration(e){e.showRegistration=!e.showRegistration}}},rt={state:{schedule:{}},getters:{schedule:e=>e.schedule,scheduleById:e=>t=>{let s=null;return Object.entries(e.schedule).forEach(([r,o])=>{o.forEach(i=>{i._id===t&&(s=i)})}),s}},actions:{async fetchSchedule({commit:e}){try{const t=await h.get(`${C.host}api/schedule`);e("addSchedule",t.data)}catch(t){console.log(t.message)}},async addToSchedule({commit:e},t){try{t.date.setHours(0,0,0,0);const s=p(u({},t),{username:this.state.usersAndMessagesStore.username}),r=await h.post(`${C.host}api/schedule`,s);e("addToSchedule",r.data)}catch(s){console.log("addToSchedule error -> "+s.message)}},async editNote({commit:e},t){try{const s=await h.put(`${C.host}api/schedule`,t)}catch(s){console.log("editNote error -> "+s)}},async deleteFromSchedule({commit:e},t){if(confirm("are you sure?"))try{const s=await h.delete(`${C.host}api/schedule/${t}`);e("deleteFromSchedule",t)}catch(s){console.log(`deleteFromSchedule error -> ${s.message}`)}}},mutations:{addSchedule(e,t){const s=(r,o)=>r.reduce((i,a)=>p(u({},i),{[a[o]]:[...i[a[o]]||[],a]}),{});e.schedule=s(t,"date")},addToSchedule(e,t){Object.keys(e.schedule).includes(t.date)?e.schedule[t.date].push(t):e.schedule[t.date]=[t]},editSchedule(e,t){let s=this.scheduleById(t.id);s.text=t.tex},deleteFromSchedule(e,t){Object.entries(e.schedule).forEach(([s,r])=>{r.forEach(o=>{o._id===t&&(e.schedule[s].splice(r.indexOf(o),1),e.schedule[s].length===0&&delete e.schedule[s])})})}}},P=se({modules:{scheduleStore:rt,lightboxStore:nt,usersAndMessagesStore:at}});const it=(e,t)=>{const s={};return e.map(r=>{r.from!=t?s[r.from]=[...s[r.from]||[],r]:s[r.to]=[...s[r.to]||[],r]}),s},S=oe(C.host,{auth:{token:localStorage.getItem("x-auth-token")}});S.on("connect_error",e=>{console.log(e.message)});S.on("connected",e=>{P.commit("addMessages",it(e.messages,localStorage.getItem("username"))),P.commit("addUsers",e.users)});S.on("message",e=>{P.commit("addMessage",e)});S.on("newUserConnected",e=>{P.commit("updateUserStatus",{username:e,status:!0})});S.on("disconnected",e=>{P.commit("updateUserStatus",{username:e,status:!1}),console.log(e+" disconnected")});const lt={data(){return{messageText:""}},components:{CloseIcon:j},computed:u({},U(["messages","username","chatUsername"])),methods:p(u({},I(["setChatUsername"])),{sendMessage(){S.emit("postMessage",{to:this.chatUsername,text:this.messageText}),this.messageText=""}}),watch:{chatUsername(){const e=document.getElementById("chatDiv");e&&(e.scrollTop=e.scrollHeight)}},mounted(){var e=this;this.chatUsername&&this.$refs.chatInputField.addEventListener("keyup",function(t){(t.code==="Enter"||t.code==="NumpadEnter")&&e.sendMessage()})},updated(){const e=document.getElementById("chatDiv");e&&(e.scrollTop=e.scrollHeight)}},dt={key:0,class:"chat-container"},ct={class:"chat-header"},ut={class:"chat",id:"chatDiv"},ht={class:"chat-input-form"};function mt(e,t,s,r,o,i){return e.chatUsername?(l(),d("div",dt,[n("div",ct,[n("span",null,c(e.username)+"\xA0\u2190\u2192\xA0"+c(e.chatUsername),1),n("i",{class:"fa fa-close",onClick:t[0]||(t[0]=a=>e.setChatUsername(null))})]),n("div",ut,[(l(!0),d(w,null,k(e.messages[e.chatUsername],a=>(l(),d("div",{class:A(["chat-message",a.from===e.username?"chat-message-left":"chat-message-right"])},c(a.text),3))),256))]),n("div",ht,[f(n("input",{type:"text",ref:"chatInputField","onUpdate:modelValue":t[1]||(t[1]=a=>o.messageText=a)},null,512),[[E,o.messageText]]),n("button",{onClick:t[2]||(t[2]=(...a)=>i.sendMessage&&i.sendMessage(...a)),ref:"sendBtn"},"send",512)])])):g("",!0)}var gt=_(lt,[["render",mt],["__scopeId","data-v-cd174252"]]);const pt={computed:u({},U(["users","username","showUsers"])),methods:u({},I(["setShowUsers","setChatUsername"]))},_t={key:0,class:"users-container"},ft={class:"users"},vt=["onClick"];function wt(e,t,s,r,o,i){return l(),W(R,null,{default:H(()=>[e.username&&e.showUsers?(l(),d("div",_t,[n("div",ft,[n("i",{class:"fa fa-close",onClick:t[0]||(t[0]=a=>e.setShowUsers(!1))}),(l(!0),d(w,null,k(e.users,a=>(l(),d("div",{class:A(["user",a.isConnected?"user-online":""]),onClick:b=>{e.setChatUsername(a.username),e.setShowUsers(!1)}},c(a.username),11,vt))),256))])])):g("",!0)]),_:1})}var yt=_(pt,[["render",wt],["__scopeId","data-v-26714132"]]);const bt={props:{text:String}},St={class:"show-btn"};function kt(e,t,s,r,o,i){return l(),d("div",St,c(s.text),1)}var xt=_(bt,[["render",kt],["__scopeId","data-v-7fab9b97"]]);const It={data(){return{text:""}},props:{date:{type:Date,required:!0}},methods:p(u({},N(["addToSchedule"])),{save(e){this.text!=""&&(this.addToSchedule({date:this.date,text:this.text}),this.text="",this.$emit("close-form"))}})},$t={class:"input"},Ct={action:""},Ut={class:"form-date"};function Lt(e,t,s,r,o,i){return l(),d("div",$t,[n("form",Ct,[n("div",Ut,c(String(s.date.getDate()).padStart(2,"0"))+" "+c(String(s.date.getMonth()+1).padStart(2,"0"))+" "+c(s.date.getFullYear()),1),f(n("textarea",{name:"form-text","onUpdate:modelValue":t[0]||(t[0]=a=>o.text=a),class:"form-text"},null,512),[[E,o.text]]),n("button",{class:"form-btn",onClick:t[1]||(t[1]=O(a=>i.save(),["prevent"]))},"Save"),n("button",{onClick:t[2]||(t[2]=O(a=>e.$emit("close-form"),["prevent"]))},"Close")])])}var Et=_(It,[["render",Lt],["__scopeId","data-v-af6a1cdc"]]);const Mt={name:"Schedule",components:{DatePicker:ne,ButtonNormal:xt,ScheduleInputForm:Et},data(){return{date:null,show:!1,showDatePicker:!1,editableId:null,oldText:""}},computed:p(u({},U(["schedule","username","getShowSchedule"])),{notesArray(){return Array.from(document.querySelectorAll(".note"))}}),methods:p(u(u({},N(["deleteFromSchedule","editNote"])),I(["setShowSchedule"])),{emitNoteHovered(e){const t=this.notesArray.findIndex(s=>s.querySelector(".note-text").id===e);this.$emit("noteHovered",t)},editInSchedule(e){const t=document.getElementById(e);t.contentEditable=!0,t.classList.add("note-text-edit"),this.editableId=e,this.oldText=t.innerHTML},save(e){const t=document.getElementById(e),s=t.innerHTML.replace(/\u00a0/g," ");t.contentEditable=!1,t.classList.remove("note-text-edit"),this.editableId=null,this.oldText="";try{this.editNote({id:e,text:s})}catch(r){console.log(r)}},cancel(e){const t=document.getElementById(e);t.innerHTML=this.oldText,t.contentEditable=!1,t.classList.remove("note-text-edit"),this.editableId=null,this.oldText=""}})},Ft={class:"schedule",id:"schedule",ref:"schedule"},Tt={class:"notes",key:"notes"},Dt={class:"day"},Pt={class:"day-date"},Bt=["onMouseenter"],Nt={class:"note-header"},Wt={class:"note-username"},Ot={class:"note-icons"},Vt=["onClick"],At=["onClick"],Ht=["onClick"],Rt=["onClick"],qt=["id"];function Yt(e,t,s,r,o,i){const a=v("button-normal"),b=v("DatePicker"),L=v("ScheduleInputForm");return l(),d("div",Ft,[y(ae,null,{default:H(()=>[e.username?(l(),W(a,{key:"buttonNormal",text:"Pick a Date",onClick:t[0]||(t[0]=x=>o.showDatePicker=!o.showDatePicker)})):g("",!0),o.showDatePicker&&e.username?(l(),W(b,{key:"datePicker",modelValue:o.date,"onUpdate:modelValue":t[1]||(t[1]=x=>o.date=x),color:"blue","is-dark":""},null,8,["modelValue"])):g("",!0),o.date&&e.username?(l(),W(L,{key:"scheduleInputForm",date:o.date,onCloseForm:t[2]||(t[2]=x=>o.date=null)},null,8,["date"])):g("",!0),n("div",Tt,[(l(!0),d(w,null,k(e.schedule,(x,B)=>(l(),d("div",Dt,[n("div",Pt,c(new Date(B).getDate())+". "+c(new Date(B).getMonth()+1)+". "+c(new Date(B).getFullYear())+". ",1),(l(!0),d(w,null,k(x,m=>(l(),d("div",{class:"note",onMouseenter:M=>i.emitNoteHovered(m._id)},[n("div",Nt,[n("span",Wt,c(m.username)+" :",1),n("span",Ot,[e.username===m.username&&o.editableId===m._id?(l(),d("i",{key:0,onClick:M=>i.save(m._id),class:"fa fa-save"},null,8,Vt)):g("",!0),e.username===m.username&&o.editableId===m._id?(l(),d("i",{key:1,onClick:M=>i.cancel(m._id),class:"fa fa-times"},null,8,At)):g("",!0),e.username===m.username&&o.editableId!=m._id?(l(),d("i",{key:2,onClick:M=>i.editInSchedule(m._id),class:"fa fa-edit"},null,8,Ht)):g("",!0),e.username===m.username?(l(),d("i",{key:3,onClick:M=>e.deleteFromSchedule(m._id),class:"fa fa-trash"},null,8,Rt)):g("",!0)])]),n("span",{class:"note-text",id:m._id},c(m.text.replace(/ /g," ")),9,qt)],40,Bt))),256))]))),256))])]),_:1})],512)}var jt=_(Mt,[["render",Yt],["__scopeId","data-v-2ec0af42"]]);const Xt={props:{images:{type:Array,required:!0}},computed:p(u({},U(["showLightbox","scrollPosition","lightboxIndex"])),{hasNext(){return this.lightboxIndex+1<this.images.length},hasPrev(){return this.lightboxIndex-1>=0}}),watch:{showLightbox(e){document.getElementById("lightbox").style.top=this.scrollPosition+"px",e?this.preventScrolling():this.enableScrolling()}},methods:p(u({},I(["setShowLightbox","setLightboxIndex"])),{preventScroll(e){return e.preventDefault(),e.stopPropagation(),!1},preventScrolling(){document.getElementsByTagName("BODY")[0].addEventListener("wheel",this.preventScroll,{passive:!1})},enableScrolling(){document.getElementsByTagName("BODY")[0].removeEventListener("wheel",this.preventScroll)},show(e){this.setLightboxIndex(e)},hide(){this.setShowLightbox(!1),this.setLightboxIndex(0)},next(){this.hasNext&&this.setLightboxIndex(this.lightboxIndex+1)},prev(){this.hasPrev&&this.setLightboxIndex(this.lightboxIndex-1)},onKeydown(e){if(this.showLightbox)switch(e.key){case"ArrowRight":this.next();break;case"ArrowLeft":this.prev();break;case"ArrowUp":case"ArrowDown":case" ":e.preventDefault();break;case"Escape":this.hide();break}}}),mounted(){window.addEventListener("keydown",this.onKeydown)},destroyed(){window.removeEventListener("keydown",this.onKeydown)}},X=e=>(T("data-v-d2bacb94"),e=e(),D(),e),zt={class:"image-container"},Gt=X(()=>n("span",null,"\u276E",-1)),Kt=[Gt],Jt=["src"],Qt=X(()=>n("span",null,"\u276F",-1)),Zt=[Qt];function es(e,t,s,r,o,i){return f((l(),d("div",{class:"lightbox",id:"lightbox",onClick:t[4]||(t[4]=(...a)=>i.hide&&i.hide(...a))},[n("div",zt,[n("div",{class:"close",onClick:t[0]||(t[0]=(...a)=>i.hide&&i.hide(...a))},"\xD7"),f(n("div",{class:"prev",onClick:t[1]||(t[1]=O((...a)=>i.prev&&i.prev(...a),["stop"]))},Kt,512),[[F,i.hasPrev]]),n("img",{class:"image",src:s.images[e.lightboxIndex],alt:"",onClick:t[2]||(t[2]=O(()=>{},["stop"]))},null,8,Jt),f(n("div",{class:"next",onClick:t[3]||(t[3]=O((...a)=>i.next&&i.next(...a),["stop"]))},Zt,512),[[F,i.hasNext]])])],512)),[[F,e.showLightbox]])}var ts=_(Xt,[["render",es],["__scopeId","data-v-d2bacb94"]]);const ss={components:{Lightbox:ts},emits:["imageHovered"],computed:u({},U(["images"])),methods:p(u({},I(["setShowLightbox","setscrollPosition","setLightboxIndex"])),{show(e){this.setLightboxIndex(e),this.setShowLightbox(!0),this.setscrollPosition(document.documentElement.scrollTop||document.body.scrollTop)},emitImageHovered(e){this.$emit("imageHovered",e)}})},z=e=>(T("data-v-3f1644bc"),e=e(),D(),e),os=z(()=>n("div",{class:"images-header"},"images",-1)),ns={class:"image-container"},as=["onClick","src","onMouseenter"],rs=z(()=>n("div",{class:"images-footer"},null,-1));function is(e,t,s,r,o,i){const a=v("lightbox");return l(),d(w,null,[os,n("div",ns,[(l(!0),d(w,null,k(e.images,(b,L)=>(l(),d("img",{onClick:x=>i.show(L),class:"image",src:b,alt:"",onMouseenter:x=>i.emitImageHovered(L)},null,40,as))),256))]),rs,y(a,{images:e.images},null,8,["images"])],64)}var ls=_(ss,[["render",is],["__scopeId","data-v-3f1644bc"]]);const ds={data(){return{inputUsername:"",inputPassword:"",inputEmail:""}},computed:u({},U(["showRegistration"])),methods:p(u(u({},N(["register"])),I(["toggleShowRegistration"])),{async submitForm(e){var s;e.preventDefault();const t=document.getElementById("username-input");document.getElementById("password-input"),document.getElementById("email-input");try{await this.register({username:this.inputUsername,password:this.inputPassword,email:this.inputEmail}),this.toggleShowRegistration(),alert("Activation link sent to email: "+this.inputEmail)}catch(r){if(((s=r.response)==null?void 0:s.status)===400){const o=r.response.data;t.setCustomValidity(o),t.reportValidity(),t.setCustomValidity("")}else alert("Server error occurred. Please try again later."),console.log(r)}}})},cs=e=>(T("data-v-5bb240e4"),e=e(),D(),e),us={key:0,class:"registration-container"},hs=cs(()=>n("button",{type:"submit"},"Register",-1));function ms(e,t,s,r,o,i){return l(),W(R,null,{default:H(()=>[e.showRegistration?(l(),d("div",us,[n("i",{class:"fa fa-close",onClick:t[0]||(t[0]=a=>e.toggleShowRegistration())}),n("form",{onSubmit:t[4]||(t[4]=(...a)=>i.submitForm&&i.submitForm(...a)),class:"registration-form"},[f(n("input",{type:"text",name:"username-input",id:"username-input","onUpdate:modelValue":t[1]||(t[1]=a=>o.inputUsername=a),placeholder:"username",required:""},null,512),[[E,o.inputUsername]]),f(n("input",{type:"password",name:"password-input",id:"password-input","onUpdate:modelValue":t[2]||(t[2]=a=>o.inputPassword=a),placeholder:"password",required:""},null,512),[[E,o.inputPassword]]),f(n("input",{type:"email",name:"email-input",id:"email-input","onUpdate:modelValue":t[3]||(t[3]=a=>o.inputEmail=a),placeholder:"email",required:""},null,512),[[E,o.inputEmail]]),hs],32)])):g("",!0)]),_:1})}var gs=_(ds,[["render",ms],["__scopeId","data-v-5bb240e4"]]);const ps={components:{WeatherCard:He,Login:pe,Messages:tt,Chat:gt,Users:yt,Schedule:jt,ImageGallery:ls,Registration:gs},data(){return{backgroundOffsetX:0,backgroundOffsetY:0}},methods:p(u(u({},N(["fetchSchedule","fetchImages"])),I(["setUsername"])),{setBackgroundOffsetX(e){this.backgroundOffsetX=e},setBackgroundOffsetY(e){this.backgroundOffsetY=e}}),created(){this.fetchSchedule(),this.fetchImages();const e=localStorage.getItem("x-auth-token"),t=localStorage.getItem("username");e&&t&&(this.setUsername(t),h.defaults.headers.post["x-auth-token"]=e,h.defaults.headers.delete["x-auth-token"]=e,h.defaults.headers.put["x-auth-token"]=e)}},_s={class:"showcase"},fs=n("h1",null,"house web",-1),vs=n("a",{href:"#schedule"},[n("div",{class:"scroll-to-schedule-icon"})],-1),ws=n("div",{class:"footer"},[$(" Copyright \xA9 2022 by "),n("a",{href:"https://github.com/matozu",target:"_blank"},"mato"),n("br"),$(" All rights reserved ")],-1);function ys(e,t,s,r,o,i){const a=v("login"),b=v("WeatherCard"),L=v("users"),x=v("registration"),B=v("messages"),m=v("chat"),M=v("schedule"),G=v("image-gallery");return l(),d("div",{class:"container",ref:"container",style:re({"--backgroundOffsetX":o.backgroundOffsetX,"--backgroundOffsetY":o.backgroundOffsetY})},[y(a),n("div",_s,[fs,y(b),vs,y(L),y(x)]),y(B),y(m),y(M,{onNoteHovered:i.setBackgroundOffsetX},null,8,["onNoteHovered"]),y(G,{onImageHovered:i.setBackgroundOffsetY},null,8,["onImageHovered"]),ws],4)}var bs=_(ps,[["render",ys]]);ie(bs).use(P,S).mount("#app");

(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{131:function(e,a,t){e.exports=t(143)},136:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),o=t.n(r),c=t(75),s=t(44),i=t(12),m=(t(136),t(174)),u=t(191),d=t(194),p=t(196),E=t(192),b=t(169),h=Object(b.a)((function(e){return{speedDial:{position:"absolute",left:"calc(50% - 240px/2)",top:"45%","& .MuiFab-label":{width:"max-content",padding:2},width:240},button:{"&:hover":{background:"#EA2027",color:"white"},background:"#EA2027",color:"white",size:"large"},terms:{background:"none",color:"white",width:"max-content",borderRadius:0,boxShadow:"none","&:hover":{background:"none"}}}})),f=Object(b.a)((function(e){return{tooltip:{display:"none"}}})),v=[{name:" SIGN IN / SIGN UP ",href:"/signin"},{name:" CONTINUE AS GUEST ",href:"/onboard"}];var g=function(e){var a=h(),t=f(),n=l.a.useState(!1),r=Object(i.a)(n,2),o=r[0],c=r[1],s=l.a.useState(!1),b=Object(i.a)(s,2),g=b[0];return b[1],l.a.createElement("div",{className:"App container"},l.a.createElement("h1",{className:"title"}," FIGHT COVID-19 PUT YOUR STORY ON THE MAP"),l.a.createElement("div",null,l.a.createElement(d.a,{ariaLabel:"SpeedDial tooltip example",className:a.speedDial,hidden:g,icon:l.a.createElement(p.a,null),onClose:function(){c(!1)},onOpen:function(){c(!0)},open:o,FabProps:{className:a.button}},l.a.createElement(E.a,{key:"terms",className:a.terms,tooltipTitle:"Terms and Conditions",icon:l.a.createElement(m.a,{control:l.a.createElement(u.a,{name:"checkedC",style:{color:"white"}}),label:l.a.createElement("a",{href:"#",style:{textDecoration:"underline",color:"white"}},"Terms and Conditions")}),TooltipClasses:t}),v.map((function(a){return l.a.createElement(E.a,{key:a.name,icon:a.name,display:{background:a.color},tooltipTitle:a.name,className:"MuiFab-extended",TooltipClasses:t,onClick:function(){return e.history.push(a.href)}})})))))},N=t(197),y=t(182),k=t(178),S=t(189),w=t(176),O=t(183),I=t(190),x=t(66),C=t.n(x),A=t(55),T=t(177);function P(){return l.a.createElement(A.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",l.a.createElement(w.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var F=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(3),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{maxWidth:"350px",background:"white",padding:"0 2rem",position:"absolute",top:"calc(50% - 490px/2)",left:"calc(50% - 350px/2)",height:"490px"}}})),D={email:"aa",password:"bb"};var j=t(171);var L=t(18),Y=t.n(L);var R=t(184),z=t(4),M=t(69),V=t.n(M),B=t(53),W=t.n(B),H=t(188),U=t(180),q=t(91),G=t.n(q),J=Object(b.a)((function(e){return{popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)}}}));function K(e){var a=J(),t=l.a.useState(null),n=Object(i.a)(t,2),r=n[0],o=n[1],c=function(){o(null)},s=Boolean(r);return l.a.createElement("div",null,l.a.createElement(G.a,{"aria-owns":s?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){o(e.currentTarget)},onMouseLeave:c}),l.a.createElement(U.a,{id:"mouse-over-popover",className:a.popover,classes:{paper:a.paper},open:s,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:c,disableRestoreFocus:!0},l.a.createElement(A.a,null,e.text)))}var Q=[{value:"White",label:"White"},{value:"American Indian or Alaska Native",label:"American Indian or Alaska Native"},{value:"Asian",label:"Asian"},{value:"Black or African American",label:"Black or African American"},{value:"Hispanic or Latino",label:"Hispanic or Latino"},{value:"Native Hawaiian or Other Pacific Islander",label:"Native Hawaiian or Other Pacific Islander"}];var $=Object(z.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"},position:"absolute",width:"90vw",top:"20%;",left:"5vw"},input:{color:"white","&:before":{borderBottom:"1px solid white"}},label:{color:"white",width:"max-content"}}}))((function(e){var a=e.classes,t=Object(n.useState)(""),r=Object(i.a)(t,2),o=r[0],c=r[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),b=E[0],h=E[1],f=Object(n.useState)(null),v=Object(i.a)(f,2),g=v[0],N=v[1],y=Object(n.useState)(0),k=Object(i.a)(y,2),w=k[0],O=k[1],I=Object(n.useState)(0),x=Object(i.a)(I,2),C=x[0],A=x[1],T=l.a.useState(null),P=Object(i.a)(T,2),F=(P[0],P[1]),D=l.a.useState(!1),L=Object(i.a)(D,2),z=(L[0],L[1]),M=l.a.useState([]),B=Object(i.a)(M,2),U=B[0],q=B[1];l.a.useEffect((function(){fetch("https://restcountries.eu/rest/v2/all?fields=name").then((function(e){return e.json()})).then((function(e){z(!0),q(e)}),(function(e){z(!0),F(e)}))}),[]);for(var G=[],J=0;J<w;J+=1)G.push(l.a.createElement("div",{key:J},l.a.createElement(S.a,{label:"Email",InputProps:{className:a.input},InputLabelProps:{className:a.label}}),l.a.createElement(S.a,{label:"Phone Number",InputProps:{className:a.input},InputLabelProps:{className:a.label}})));for(var $=[],X=0;X<C;X+=1)$.push(l.a.createElement("div",{key:X},l.a.createElement(S.a,{label:"Location",InputProps:{className:a.input},InputLabelProps:{className:a.label}}),l.a.createElement(H.a,{autoOk:!0,label:"Date",clearable:!0,disableFuture:!0,value:g,onChange:N,InputProps:{className:a.input},InputLabelProps:{className:a.label}})));var Z,_,ee=l.a.useRef(null),ae=function(){ee.current.scrollIntoView({behavior:"smooth"})};return l.a.useEffect(ae,[$]),l.a.useEffect(ae,[G]),"not sick"==localStorage.isSick?(_="/dashboard",Z="not tested"==localStorage.tested?"hidden":""):(Z="",_="/symptoms"),l.a.createElement("div",{className:"CriticalQuestions"},l.a.createElement("h1",{className:"title"}," MY COVID STORY"),l.a.createElement("div",{className:a.root},l.a.createElement("form",{noValidate:!0},l.a.createElement("div",{className:Z},l.a.createElement(H.a,{autoOk:!0,label:"When did you first start feeling sick?",clearable:!0,disableFuture:!0,value:g,onChange:N,InputProps:{className:a.input},InputLabelProps:{className:a.label}})),l.a.createElement("div",{className:"demographics"},l.a.createElement(S.a,{id:"standard-number",label:"Age",type:"number",InputProps:{className:a.input},InputLabelProps:{className:a.label}}),l.a.createElement(S.a,{id:"standard-select-currency",select:!0,label:"Sex",value:o,onChange:function(e){c(e.target.value)},InputProps:{className:a.input},InputLabelProps:{className:a.label}},l.a.createElement(R.a,{value:"male"},"Male"),l.a.createElement(R.a,{value:"female"},"Female"),l.a.createElement(R.a,{value:"female"},"Non Binary")),l.a.createElement(S.a,{select:!0,label:"Ethnicity",value:u,onChange:function(e){d(e.target.value)},InputProps:{className:a.input},InputLabelProps:{className:a.label}},Q.map((function(e){return l.a.createElement(R.a,{key:e.value,value:e.value},e.label)})))),l.a.createElement("div",{className:"demographics"},l.a.createElement(S.a,{select:!0,label:"Origin",value:b,onChange:function(e){h(e.target.value)},InputProps:{className:a.input},InputLabelProps:{className:a.label}},U.map((function(e){return l.a.createElement(R.a,{key:e.name,value:e.name},e.name)}))),l.a.createElement(S.a,{id:"standard-required",label:"Profession",InputProps:{className:a.input},InputLabelProps:{className:a.label}})),l.a.createElement("div",{className:"form-row"},l.a.createElement(j.a,{style:{background:"#EA2027"},"aria-label":"add",size:"medium",className:"fab",onClick:function(){return O(w+1)}},l.a.createElement(V.a,null)),l.a.createElement("p",null,"Close Contacts"),l.a.createElement(K,{text:"People you spend more than 15 minutes with."})),G,l.a.createElement("div",{className:"form-row"},l.a.createElement(j.a,{style:{background:"#EA2027"},"aria-label":"add",size:"medium",className:"fab",onClick:function(){return A(C+1)}},l.a.createElement(V.a,null)),l.a.createElement("p",null,"Travel History")),$,l.a.createElement("div",{style:{height:"100px"},ref:ee}))),l.a.createElement(j.a,{style:{background:"#EA2027"},"aria-label":"add",href:_,size:"medium",className:"fab next-btn"},l.a.createElement(W.a,null)),l.a.createElement(j.a,{style:{background:"#9206FF"},"aria-label":"add",href:"/confirm",size:"medium",className:"fab back-btn"},l.a.createElement(Y.a,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(70),t(92);var X=t(179),Z=t(185),_=t(94),ee=t.n(_),ae=t(93),te=t.n(ae),ne=["fever","cough","short of breath","chest pain","sore throat","exhaustion","body aches","headache","runny nose","loss of smell","nausea","vomiting","diarrhea"],le=Object(b.a)((function(e){return{root:{position:"absolute",top:"28%",width:"100vw"},group:{"& > *":{margin:e.spacing(1),width:"29%"},"& .MuiTypography-body1":{"font-size":"15px"}},input:{color:"white","&:before":{borderBottom:"1px solid white"}},label:{color:"white",width:"max-content",fontSize:16},numbers:{"& > *":{margin:e.spacing(1),width:"46%"},position:"absolute",top:"77%",width:"100vw",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}}));var re=t(181),oe=t(147),ce=t(186),se=t(187),ie=[{color:"rgba(255, 2, 2, 0.8)",text:"You are in high risk  area of sustained covid transmission."},{color:"rgba(255, 2, 2, 0.8)",text:"Your symptoms of fever, cough, aches, exhaustion and sore throat are similar to 73% of patients with known COVID and 10% of patients who don't have covid."},{color:"rgba(255, 2, 2, 0.8)",text:"You should consider COVID testing."},{color:"#B1B4B7",text:"You should Shelter in place and isolate as if you had COVID."},{color:"#9206FF",text:"Download the HomeBound App to help you stay well at home."},{color:"#08C71B",text:"Join a clinical trial?"},{color:"#0559FD",text:"When you are feeling better you can  donate your blood to help others."}];var me=t(17),ue=t(95),de=t(193),pe=t(97),Ee=t.n(pe),be=Object(b.a)((function(e){return{speedDial:{"& .MuiFab-label":{width:"max-content"}},button:{"&:hover":{background:"#EA2027",color:"white"},background:"#EA2027",color:"white"},label:{width:"max-content"},editicon:{fontSize:"large",marginLeft:"10px"}}})),he={positive:{name:"Tested Positive",color:"red"},sick:{name:"Sick",color:"orange"},negative:{name:"Tested Negative",color:"purple"},recovered:{name:"Recovered",color:"green"},"not sick":{name:"Not Sick",color:"gray"},"not tested":{name:"Not Tested",color:"blue"}},fe=localStorage.isSick,ve=localStorage.tested;"not sick"==fe&&"positive"==ve&&(fe="recovered");var ge=Object(z.a)((function(e){return{root:{position:"absolute",width:"80vw",top:"30%;",left:"calc(10vw - 8px)","& > *":{margin:e.spacing(1),width:"100%"}},input:{color:"white","&:before":{borderBottom:"1px solid white"}},label:{color:"white",width:"max-content"}}}))((function(e){var a=e.classes;return l.a.createElement("div",{className:"HealthMeasurements"},l.a.createElement("h1",{className:"title"}," MY COVID STORY"),l.a.createElement("div",{className:a.root},l.a.createElement(S.a,{id:"HeartRate",label:"Heart Rate (BPM)",type:"number",InputProps:{className:a.input},InputLabelProps:{className:a.label}}),l.a.createElement(S.a,{id:"standard-number",label:"Max Temperature (F)",type:"number",InputProps:{className:a.input},InputLabelProps:{className:a.label}}),l.a.createElement(S.a,{id:"standard-number",label:"Pulse Oxygen (%sp02)",type:"number",InputProps:{className:a.input},InputLabelProps:{className:a.label}})),l.a.createElement(j.a,{style:{background:"#EA2027"},"aria-label":"add",href:"/dashboard",size:"medium",className:"fab next-btn"},l.a.createElement(W.a,null)),l.a.createElement(j.a,{style:{background:"#9206FF"},"aria-label":"add",href:"/symptoms",size:"medium",className:"fab back-btn"},l.a.createElement(Y.a,null)))}));function Ne(){return l.a.createElement(A.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",l.a.createElement(w.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var ye=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(3),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},container:{maxWidth:"350px",background:"white",padding:"0 2rem 2rem 2rem",position:"absolute",top:"calc(50% - 520px/2)",left:"calc(50% - 350px/2)",height:"520px"}}}));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(me.a,{utils:ue.a},l.a.createElement(c.a,null,l.a.createElement(c.b,{to:"/",className:"header"},"OASIS"),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:g}),l.a.createElement(s.a,{path:"/signin",component:function(){var e=F();return fetch("http://13.57.220.143/login",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(D)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)})),l.a.createElement(T.a,{className:e.container,component:"main"},l.a.createElement(k.a,null),l.a.createElement("div",{className:e.paper},l.a.createElement(N.a,{className:e.avatar},l.a.createElement(C.a,null)),l.a.createElement(A.a,{component:"h1",variant:"h5"},"Sign in"),l.a.createElement("form",{className:e.form,noValidate:!0},l.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),l.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),l.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"),l.a.createElement(O.a,{container:!0,justify:"flex-end"},l.a.createElement(O.a,{item:!0},l.a.createElement(w.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))),l.a.createElement(I.a,{mt:8},l.a.createElement(P,null)))}}),l.a.createElement(s.a,{path:"/onboard",component:function(){function e(e){localStorage.setItem("isSick",e)}return l.a.createElement("div",{className:"Onboard"},l.a.createElement("h1",{className:"title"},"MY COVID STORY"),l.a.createElement("div",{className:"btn-group"},l.a.createElement(j.a,{style:{background:"#EA2027"},href:"/alert",variant:"extended",className:"fab sick-btn",onClick:function(){return e("sick")}},l.a.createElement("span",null,"I AM SICK")),l.a.createElement(j.a,{style:{background:"#0559FD"},href:"/confirm",variant:"extended",className:"fab not-sick-btn",onClick:function(){return e("not sick")}},l.a.createElement("span",null,"I AM NOT SICK"))))}}),l.a.createElement(s.a,{path:"/alert",component:function(e){return l.a.createElement("div",{className:"Alert"},l.a.createElement("h2",{className:"title"},"ARE YOU CURRENTLY GASPING FOR AIR OR HAVE SEVERE CHEST PAIN OR WEAKNESS?"),l.a.createElement("div",{className:"btn-group"},l.a.createElement("div",{className:"yes-btn"},l.a.createElement(j.a,{style:{background:"#EA2027"},"aria-label":"add",href:"/emergency",size:"large",className:"fab"},l.a.createElement("span",null,"YES"))),l.a.createElement("div",{className:"no-btn"},l.a.createElement(j.a,{style:{background:"#0559FD"},"aria-label":"add",href:"/confirm",size:"large",className:"fab"},l.a.createElement("span",null,"NO"))),l.a.createElement(j.a,{style:{background:"#9206FF"},"aria-label":"add",href:"/onboard",size:"medium",className:"fab back-btn"},l.a.createElement(Y.a,null))))}}),l.a.createElement(s.a,{path:"/emergency",component:function(){return l.a.createElement("div",{className:"Emergency"},l.a.createElement("h1",{className:"title"},"YOU ARE REALLY SICK AND NEED IMMEDIATE MEDICAL ATTENTION! CALL YOU DOCTOR, GET TO A HOSPITAL, OR CALL 911!"),l.a.createElement(j.a,{style:{background:"#9206FF"},"aria-label":"add",href:"/",size:"medium",className:"back-btn"},l.a.createElement(Y.a,null)))}}),l.a.createElement(s.a,{path:"/questions",component:$}),l.a.createElement(s.a,{path:"/symptoms",component:function(){var e=l.a.useState({}),a=Object(i.a)(e,2),t=(a[0],a[1],le());return l.a.createElement("div",{className:"Symptoms"},l.a.createElement("h1",{className:"title"}," MY COVID STORY"),l.a.createElement("p",{className:"subtitle"}," Are you having now, or did you recently have:"),l.a.createElement(X.a,{className:t.root,component:"fieldset"},l.a.createElement(Z.a,{className:t.group,"aria-label":"position",row:!0},ne.map((function(e){return l.a.createElement(m.a,{value:e,control:l.a.createElement(u.a,{style:{color:"white"},icon:l.a.createElement(te.a,{style:{fontSize:30}}),checkedIcon:l.a.createElement(ee.a,{style:{fontSize:30}})}),label:e,key:e,labelPlacement:"top"})})))),l.a.createElement(j.a,{style:{background:"#EA2027"},"aria-label":"add",href:"/measurements",size:"medium",className:"fab next-btn"},l.a.createElement(W.a,null)),l.a.createElement(j.a,{style:{background:"#9206FF"},"aria-label":"add",href:"/questions",size:"medium",className:"fab back-btn"},l.a.createElement(Y.a,null)))}}),l.a.createElement(s.a,{path:"/dashboard",component:function(e){var a=be(),t=l.a.useState(!1),n=Object(i.a)(t,2),r=(n[0],n[1],l.a.useState(!1)),o=Object(i.a)(r,2),c=(o[0],o[1],l.a.useState(null)),s=Object(i.a)(c,2),m=(s[0],s[1]),u=l.a.useState(!1),d=Object(i.a)(u,2),p=(d[0],d[1]),E=l.a.useState({confirmed:null,deaths:null,recovered:null}),b=Object(i.a)(E,2),h=b[0],f=b[1];l.a.useEffect((function(){fetch("https://covid19api.herokuapp.com/latest").then((function(e){return e.json()})).then((function(e){p(!0),f(e)}),(function(e){p(!0),m(e)}))}),[]);var v=null;v="not sick"==localStorage.isSick&&"positive"==localStorage.tested?l.a.createElement(w.a,{href:"#",style:{color:"#EB5757"}},"Donate your blood to help others"):null;var g=function(e){return e.preventDefault()};return l.a.createElement("div",{className:"Dashboard"},l.a.createElement(de.a,{"aria-label":"breadcrumb",className:"breadcrumbs"},l.a.createElement(w.a,{color:"inherit"},"myTrials"),l.a.createElement(w.a,{color:"inherit"},"myDonations"),l.a.createElement(w.a,{color:"inherit",href:"/questions"},"myRecords")),l.a.createElement("div",{className:"row status-wrapper"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"row"},l.a.createElement("h3",null,"MY STATUS"),l.a.createElement(w.a,{className:"row status-item",style:{color:"white"},href:"/onboard"},l.a.createElement(Ee.a,{className:a.editicon}))),l.a.createElement("div",{className:"status-list"},l.a.createElement("div",{className:"row status-item"},l.a.createElement("span",{className:"dot",style:{background:he[fe].color}}),he[fe].name),l.a.createElement("div",{className:"row status-item"},l.a.createElement("span",{className:"dot",style:{background:he[ve].color}}),he[ve].name),l.a.createElement("div",null))),l.a.createElement("div",{className:"col update-list",style:{textAlign:"right"}},l.a.createElement("h3",null,"LATEST UPDATE"),l.a.createElement("div",null,l.a.createElement("div",null,"COVID-19 Cases: ",h.confirmed),l.a.createElement("div",null,"Total Deaths: ",h.deaths),l.a.createElement("div",null,"Total Recovered: ",h.recovered)))),l.a.createElement("div",{className:"col suggestions-wrapper"},l.a.createElement("h3",null,"SUGGESTIONS"),l.a.createElement(w.a,{href:"#",onClick:g,style:{color:"#FFFFFF"}},"Stay at home"),l.a.createElement(w.a,{href:"#",onClick:g,style:{color:"#2D9CDB"}},"Download HomeBound"),l.a.createElement(w.a,{href:"#",onClick:g,style:{color:"#F2C94C"}},"Join a clinical trial"),v))}}),l.a.createElement(s.a,{path:"/status",component:function(){return l.a.createElement("div",{className:"Status"},l.a.createElement("h1",{className:"title"},"Your Status"),l.a.createElement("div",{className:"status-list"},l.a.createElement(re.a,{component:"nav","aria-label":"main mailbox folders"},ie.map((function(e){return l.a.createElement(oe.a,null,l.a.createElement(ce.a,null,l.a.createElement("span",{className:"dot",style:{background:e.color}})),l.a.createElement(se.a,{primary:e.text}))})))),l.a.createElement(j.a,{style:{background:"#9206FF"},"aria-label":"add",href:"/dashboard",size:"medium",className:"fab back-btn"},l.a.createElement(Y.a,null)))}}),l.a.createElement(s.a,{path:"/confirm",component:function(){var e=localStorage.isSick;function a(e){localStorage.setItem("tested",e)}return l.a.createElement("div",{className:"Confirm"},l.a.createElement("h1",{className:"title"},"HAVE YOUR BEEN TESTED FOR COVID-19?"),l.a.createElement("div",{className:"btn-group"},l.a.createElement("div",{className:"yes-btn"},l.a.createElement(j.a,{style:{background:"#EA2027"},href:"/questions",size:"large",className:"fab",variant:"extended",onClick:function(){return a("positive")}},l.a.createElement("span",null,"YES, TESTED POSITIVE"))),l.a.createElement("div",{className:"yes-btn"},l.a.createElement(j.a,{style:{background:"#9206FF"},href:"/questions",size:"large",className:"fab",variant:"extended",onClick:function(){return a("negative")}},l.a.createElement("span",null,"YES, TESTED NEGATIVE"))),l.a.createElement("div",{className:"no-btn"},l.a.createElement(j.a,{style:{background:"#0559FD"},href:"/questions",size:"large",className:"fab",variant:"extended",onClick:function(){return a("not tested")}},l.a.createElement("span",null,"NO, I HAVE NOT")))),l.a.createElement(j.a,{style:{background:"#9206FF"},href:"sick"===e?"/alert":"/onboard",size:"medium",className:"fab back-btn"},l.a.createElement(Y.a,null)))}}),l.a.createElement(s.a,{path:"/measurements",component:ge}),l.a.createElement(s.a,{path:"/signup",component:function(){var e=ye();return l.a.createElement(T.a,{className:e.container,component:"main"},l.a.createElement(k.a,null),l.a.createElement("div",{className:e.paper},l.a.createElement(N.a,{className:e.avatar},l.a.createElement(C.a,null)),l.a.createElement(A.a,{component:"h1",variant:"h5"},"Sign up"),l.a.createElement("form",{className:e.form,noValidate:!0},l.a.createElement(O.a,{container:!0,spacing:2},l.a.createElement(O.a,{item:!0,xs:12,sm:6},l.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username"})),l.a.createElement(O.a,{item:!0,xs:12},l.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),l.a.createElement(O.a,{item:!0,xs:12},l.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}))),l.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),l.a.createElement(O.a,{container:!0,justify:"flex-end"},l.a.createElement(O.a,{item:!0},l.a.createElement(w.a,{href:"/signin",variant:"body2"},"Already have an account? Sign in"))))),l.a.createElement(I.a,{mt:5},l.a.createElement(Ne,null)))}}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.97e0974c.chunk.js.map
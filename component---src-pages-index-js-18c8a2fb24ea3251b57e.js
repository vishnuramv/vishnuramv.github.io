/*! For license information please see component---src-pages-index-js-18c8a2fb24ea3251b57e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0lPv":function(e,t,n){e.exports=n.p+"static/whatsapp-ea5589b229a7dad5f4ad762704645ef1.png"},"5+Qn":function(e,t,n){e.exports=n.p+"static/covid-99c91571d2ebae589d603c64c7f5135e.png"},BMXg:function(e,t,n){e.exports=n.p+"static/spotify-ddde0f91b9118fab1caa24e88b8dbc99.png"},"K/pR":function(e,t,n){e.exports=n.p+"static/netflix-861da9ae2e0f5e1c7ac5715f76ffe101.png"},RXBc:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),i=n("hukY");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s=new Map,l=new Map,c=0;function d(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(l.has(n)||(c+=1,l.set(n,c.toString())),l.get(n)):"0":e[t]);var n})).toString()}function u(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var o=function(e){var t=d(e),n=s.get(t);if(!n){var o,a=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var n,i=t.isIntersecting&&o.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(n=a.get(t.target))||n.forEach((function(e){e(i,t)}))}))}),e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:a},s.set(t,n)}return n}(n),a=o.id,i=o.observer,r=o.elements,l=r.get(e)||[];return r.has(e)||r.set(e,l),l.push(t),i.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(r.delete(e),i.unobserve(e)),0===r.size&&(i.disconnect(),s.delete(a))}}function m(e){return"function"!=typeof e.children}var p=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),m(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,o=e.rootMargin,a=e.trackVisibility,i=e.delay;this._unobserveCb=u(this.node,this.handleChange,{threshold:t,root:n,rootMargin:o,trackVisibility:a,delay:i})}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!m(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var a=this.props,i=a.children,s=a.as,l=a.tag,c=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(o.createElement)(s||l||"div",r({ref:this.handleNode},c),i)},a}(o.Component);function f(e){var t=void 0===e?{}:e,n=t.threshold,a=t.delay,i=t.trackVisibility,r=t.rootMargin,s=t.root,l=t.triggerOnce,c=t.skip,d=t.initialInView,m=Object(o.useRef)(),p=Object(o.useState)({inView:!!d}),f=p[0],h=p[1],g=Object(o.useCallback)((function(e){void 0!==m.current&&(m.current(),m.current=void 0),c||e&&(m.current=u(e,(function(e,t){h({inView:e,entry:t}),t.isIntersecting&&l&&m.current&&(m.current(),m.current=void 0)}),{root:s,rootMargin:r,threshold:n,trackVisibility:i,delay:a}))}),[Array.isArray(n)?n.toString():n,s,r,l,c,i,a]);Object(o.useEffect)((function(){m.current||!f.entry||l||c||h({inView:!!d})}));var b=[g,f.inView,f.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}p.displayName="InView",p.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var h=n("ZMKu"),g=n("GOVm"),b=n("vOnD"),v=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__BannerContainer",componentId:"sc-4ekvg8-0"})(["background:",";height:100vh;width:100%;position:relative;"],(function(e){return e.theme.background})),w=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__BannerContent",componentId:"sc-4ekvg8-1"})(["height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-around;pointer-events:none;"]),y=Object(b.default)(h.b.h1).withConfig({displayName:"HomeComponents__HeadLine",componentId:"sc-4ekvg8-2"})(["font-size:72px;margin-bottom:0;text-transform:uppercase;font-family:'Libre Baskerville',serif;text-align:center;@media (max-width:770px){font-size:52px;}@media (max-width:420px){font-size:40px;}"]),x=Object(b.default)(h.b.h4).withConfig({displayName:"HomeComponents__SubText",componentId:"sc-4ekvg8-3"})(["font-size:24px;text-align:center;font-family:'Source Sans Pro',sans-serif;@media (max-width:420px){font-size:18px;}"]),C=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__Buttons",componentId:"sc-4ekvg8-4"})(["width:35%;display:flex;justify-content:space-between;@media (max-width:840px){width:50%;}@media (max-width:420px){width:85%;}"]),E=Object(b.default)(h.b.a).withConfig({displayName:"HomeComponents__WorkButton",componentId:"sc-4ekvg8-5"})(["padding:10px;border:3px solid ",";color:",";font-weight:700;letter-spacing:1.5px;pointer-events:initial;"],(function(e){return e.theme.text}),(function(e){return e.theme.red})),k=Object(b.default)(h.b.a).withConfig({displayName:"HomeComponents__ResumeButton",componentId:"sc-4ekvg8-6"})(["padding:10px;background-color:transparent;outline:none;color:"," !important;font-weight:700;letter-spacing:1.5px;border:3px solid ",";pointer-events:initial;"],(function(e){return e.theme.text}),(function(e){return e.theme.red})),j=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__HomeAbout",componentId:"sc-4ekvg8-7"})(["min-height:100vh;width:100%;display:flex;align-items:center;@media (max-width:840px){.AboutFlex{flex-direction:column;}}"]),_=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__AboutContent",componentId:"sc-4ekvg8-8"})(["flex:1;h2{width:90%;font-size:2.3rem;font-weight:400;color:",";font-family:'Libre Baskerville',serif;}p{max-width:70%;font-size:1rem;line-height:1.6rem;color:",";font-family:'Source Sans Pro',sans-serif;i,b{color:",";}}@media (max-width:840px){width:100%;h2{width:100%;font-size:2rem;}p{max-width:100%;}}@media (max-width:420px){h2{font-size:1.4rem;}}"],(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.red})),O=Object(b.default)(h.b.span).withConfig({displayName:"HomeComponents__Span",componentId:"sc-4ekvg8-9"})(["color:",";"],(function(e){return e.theme.red})),I=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__Skills",componentId:"sc-4ekvg8-10"})(["margin-top:20px;h3{font-family:'Libre Baskerville',serif;}@media (max-width:840px){.AccordianCont{display:flex;align-items:flex-start;flex-wrap:wrap;}.Accordian{margin-right:10%;}}"]),H=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__AccordionHeader",componentId:"sc-4ekvg8-11"})(["width:100%;color:",";height:32px;display:flex;align-items:center;font-weight:600;font-size:1.15rem;margin:8px 0;font-family:'Libre Baskerville',serif;"],(function(e){return e.theme.red})),M=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__AccordionIcon",componentId:"sc-4ekvg8-12"})(["display:flex;align-items:center;height:100%;margin-right:8px;span{width:16px;height:4px;background:",";transition:.1 ease-in-out;}"],(function(e){return e.theme.red})),S=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__AccordionContent",componentId:"sc-4ekvg8-13"})(["overflow:hidden;padding-left:40px;span{width:100%;margin:8px 0;font-size:.875rem;color:",";display:block;font-weight:300;font-family:'Source Sans Pro',sans-serif;}"],(function(e){return e.theme.text})),N=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__ProjectContainer",componentId:"sc-4ekvg8-14"})(["min-height:100vh;width:100%;display:flex;align-items:center;justify-content:space-around;flex-direction:column;overflow-x:hidden;"]),V=Object(b.default)(h.b.h1).withConfig({displayName:"HomeComponents__ProjectHead",componentId:"sc-4ekvg8-15"})(["margin:36px 0;color:",";font-size:36px;font-weight:700;font-family:'Libre Baskerville',serif;@media (max-width:420px){font-size:1.8rem;}"],(function(e){return e.theme.red})),B=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__ProjectRow",componentId:"sc-4ekvg8-16"})(["display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:5px;@media (max-width:420px){flex-direction:column;justify-content:space-around;}"]),L=Object(b.default)(h.b.a).withConfig({displayName:"HomeComponents__Project",componentId:"sc-4ekvg8-17"})(["position:relative;overflow:hidden;margin-right:10px;img{height:275px;width:100%;min-width:350px;}"," @media (max-width:390px){img{min-width:unset;}}"],(function(e){return e.flex1&&Object(b.css)(["flex:1;"])})),P=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__ProjectContent",componentId:"sc-4ekvg8-18"})(["position:absolute;top:0;left:0;height:275px;width:100%;display:flex;align-items:center;justify-content:space-around;font-family:'Source Sans Pro',sans-serif;",""],(function(e){return e.dark&&Object(b.css)(["box-shadow:inset 0 0px 100px 40px black;"])})),z=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__ProjectButtons",componentId:"sc-4ekvg8-19"})(["display:flex;align-items:center;justify-content:space-around;width:60%;margin-top:10%;",""],(function(e){return e.small&&Object(b.css)(["width:80%;"])})),D=Object(b.default)(h.b.a).withConfig({displayName:"HomeComponents__ProjectButton",componentId:"sc-4ekvg8-20"})(["padding:10px;font-weight:700;letter-spacing:1.5px;border:3px solid white;color:",";",""],(function(e){return e.theme.red}),(function(e){return e.source&&Object(b.css)(["color:white;border:3px solid ",";"],(function(e){return e.theme.red}))})),T=Object(b.default)(h.b.h2).withConfig({displayName:"HomeComponents__ProjectTitle",componentId:"sc-4ekvg8-21"})(["position:absolute;bottom:10px;color:white"]),R=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__ContactSection",componentId:"sc-4ekvg8-22"})(["height:100vh;width:100%;display:flex;align-items:center;justify-content:space-around;@media (max-width:420px){.ContactFlex{flex-direction:column;}}@media (max-width:840px){.ContactContainer{margin:0 5%;}}"]),A=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__ContactContent",componentId:"sc-4ekvg8-23"})([""]),F=Object(b.default)(h.b.form).withConfig({displayName:"HomeComponents__ContactForm",componentId:"sc-4ekvg8-24"})(["display:flex;flex-direction:column;justify-content:space-around;width:100%;min-height:50vh;input,textarea{min-width:300px;border:none;outline:none;padding:10px;background-color:",";font-family:'Source Sans Pro',sans-serif;color:",";font-size:1.01rem;font-weight:600;}"],(function(e){return e.theme.isDark?"#111":"#eeeeee"}),(function(e){return e.theme.text})),W=Object(b.default)(h.b.h1).withConfig({displayName:"HomeComponents__ContactTitle",componentId:"sc-4ekvg8-25"})(["color:",";font-size:52px;font-weight:700;font-family:'Libre Baskerville',serif;margin-top:0;"],(function(e){return e.theme.red})),J=Object(b.default)(h.b.p).withConfig({displayName:"HomeComponents__ContactText",componentId:"sc-4ekvg8-26"})(["max-width:70%;font-size:1.2rem;line-height:1.6rem;font-weight:600;color:",";font-family:'Source Sans Pro',sans-serif;@media (max-width:770px){max-width:87%;}@media (max-width:420px){max-width:100%;}"],(function(e){return e.theme.text})),Y=Object(b.default)(h.b.button).withConfig({displayName:"HomeComponents__ContactButton",componentId:"sc-4ekvg8-27"})(["width:30%;background-color:",";font-family:'Source Sans Pro',sans-serif;font-size:1.1rem;letter-spacing:1px;font-weight:600;color:white;border-radius:0;border:none;outline:none;padding:10px;"],(function(e){return e.theme.red})),U=Object(b.default)(h.b.div).withConfig({displayName:"HomeComponents__ContactSent",componentId:"sc-4ekvg8-28"})(["display:flex;align-items:center;justify-content:space-between;.MessageClose{font-size:28px;color:",";}.sentMessage{display:flex;align-items:center;}.green{color:green;}.red{color:red;}"],(function(e){return e.theme.text})),X=[{id:0,title:"Web & Mobile App",results:["ReactJs | VanillaJs","Flutter","Django | NodeJs","Material-Ui | Bootstrap"]},{id:1,title:"Database",results:["Firebase","PostgreSQL","SQLite","MongoDB"]},{id:2,title:"Design & Prototype",results:["Figma","AdobeXd","Photoshop","Illustrator"]},{id:3,title:"Programming",results:["Python","JavaScript","C++ & C#","Dart"]}],K=function(e){var t=e.data,n=e.expanded,i=e.setExpanded,r=e.onCursor,s=t.id===n,l=Object(o.useState)(!1),c=l[0],d=l[1];return a.a.createElement("div",{className:"Accordian"},a.a.createElement(H,{onClick:function(){return i(!s&&t.id)},onMouseEnter:function(){return r("cursorTheme")},onMouseLeave:r,onHoverStart:function(){return d(!c)},onHoverEnd:function(){return d(!c)},whileHover:{color:"#ffffff"}},a.a.createElement(M,null,a.a.createElement(h.b.span,{animate:{rotate:s||c?0:45,x:3},transition:{duration:.6,ease:[.6,.05,-.01,.9]}}),a.a.createElement(h.b.span,{animate:{rotate:s||c?0:-45,x:-3},transition:{duration:.6,ease:[.6,.05,-.01,.9]}})),t.title),a.a.createElement(S,{key:"content",animate:{height:s?"100%":"0"},transition:{duration:.6,ease:[.6,.05,-.01,.9]}},t.results.map((function(e,t){return a.a.createElement("span",{key:t},e)}))))},Q=function(e){var t=e.onCursor,n=Object(o.useState)(0),r=n[0],s=n[1],l=Object(h.c)(),c=f({triggerOnce:!0,rootMargin:"-70px"}),d=c[0],u=c[1];return Object(o.useEffect)((function(){u&&l.start("visible")}),[l,u]),a.a.createElement(j,{id:"about",ref:d,animate:l,initial:"hidden",variants:{visible:{opacity:1,y:0,transition:{duration:.6,ease:[.6,.05,-.01,.9]}},hidden:{opacity:0,y:172}}},a.a.createElement(i.a,null,a.a.createElement(i.c,{className:"AboutFlex",alignTop:!0},a.a.createElement(_,null,a.a.createElement("h2",null,"I'm a ",a.a.createElement(O,null,"Rookie Dev")," and",a.a.createElement("br",null)," ",a.a.createElement(O,null,"Passionate Web Developer,")," familiar with a wide range of languages and frameworks."),a.a.createElement("p",null,"I see myself as a collaborative team player with excellent technical abilities like finding solutions to challenges and focused on customer satisfaction. I'm also an undergraduate ",a.a.createElement("b",null,"Computer Science")," student. I learned ",a.a.createElement("i",null,"game development")," and ",a.a.createElement("i",null,"3D modelling")," as a hobby and I also listen to podcasts. ",a.a.createElement("b",null,"Fun fact:")," I'm a dog person without a dog.")),a.a.createElement(I,null,a.a.createElement("h3",null,"What do I know & use?"),a.a.createElement("div",{className:"AccordianCont"},X.map((function(e,n){return a.a.createElement(K,{onCursor:t,key:n,data:e,expanded:r,setExpanded:s})})))))))},G=function(e){var t=e.onCursor,n={initial:{scaleY:0,y:100,opacity:0},animate:{scaleY:1,y:0,opacity:1,transition:{duration:.6,ease:[.6,.05,-.01,.9]}}};return a.a.createElement(v,{onMouseEnter:function(){return t("cursorRed")},onMouseLeave:t},a.a.createElement(w,null,a.a.createElement(i.c,{fColumn:!0,variants:{initial:{scaleY:1},animate:{scaleY:1,transition:{staggerChildren:.2}}},initial:"initial",animate:"animate"},a.a.createElement(y,{variants:n},"Hi",a.a.createElement("span",{role:"img","aria-label":"hand-wave"},"👋")," I'm Vishnu Ram,"),a.a.createElement(x,{variants:n},"I'm a Web Developer. I do Freelance work and I would love to ",a.a.createElement("br",null)," Collaborate with you..."),a.a.createElement(C,{variants:n},a.a.createElement(E,{whileHover:{color:"#ea291e",backgroundColor:"#ffffff"},href:"/#projects"},"See My Work"),a.a.createElement(k,{whileHover:{color:"#ffffff",backgroundColor:"#ea291e"},href:"https://drive.google.com/file/d/1DcOeWxL-S2DuCjMD30zr3aLqzNJ8ZcDX/view?usp=sharing",target:"_blank"},"See My Resume")))))},q=n("zIRd");q.a.registerVersion("firebase","8.1.1","app"),q.a.apps.length||q.a.initializeApp({apiKey:"AIzaSyAD6micc26TN0Gtw_4h-CjAv8-po75C3MI",authDomain:"vishnuram-v.firebaseapp.com",databaseURL:void 0,projectId:"vishnuram-v",storageBucket:"vishnuram-v.appspot.com",messagingSenderId:"77016838732",appId:"1:77016838732:web:9bbcb520ed7df7e7eabae9",measurementId:"G-HJW1D6HBFF"});var Z=q.a,$=function(e){var t=e.onCursor,n=Object(o.useState)(!1),r=n[0],s=n[1],l=Object(o.useState)(!1),c=l[0],d=l[1],u=Object(o.useState)(!1),m=u[0],p=u[1],g=Object(o.useState)(""),b=g[0],v=g[1],w=Object(o.useState)(""),y=w[0],x=w[1],C=Object(o.useState)(""),E=C[0],k=C[1],j=Object(o.useState)(!1),_=j[0],O=j[1],I=Object(o.useState)(!1),H=I[0],M=I[1],S=Object(h.c)(),N=f({triggerOnce:!0,rootMargin:"-70px"}),V=N[0],B=N[1];return Object(o.useEffect)((function(){B&&S.start("visible")}),[S,B]),a.a.createElement(R,{id:"contact",ref:V,animate:S,initial:"hidden",variants:{visible:{opacity:1,y:0,transition:{duration:.6,ease:[.6,.05,-.01,.9]}},hidden:{opacity:0,y:172}}},a.a.createElement(i.a,{className:"ContactContainer"},a.a.createElement(i.c,{className:"ContactFlex",alignTop:!0},a.a.createElement(A,null,a.a.createElement(W,null,"Let's Talk"),a.a.createElement(J,null,"I'm interested in friendly collaborations and freelance opportunities. However, if you have any idea, feedback or wanna say Hi feel free to leave a message or contact me...")),a.a.createElement(F,null,a.a.createElement(h.b.input,{onFocus:function(){return s(!0)},onBlur:function(){return s(!1)},animate:{borderTop:r?"1px solid gray":"none",borderLeft:r?"1px solid gray":"none",borderRight:r?"1px solid gray":"none",transition:{duration:1,ease:[.6,.05,-.01,.9]}},initial:{borderBottom:"1px solid gray"},value:b,onChange:function(e){return v(e.target.value)},type:"text",placeholder:"Name*"}),a.a.createElement(h.b.input,{onFocus:function(){return d(!0)},onBlur:function(){return d(!1)},animate:{borderTop:c?"1px solid gray":"none",borderLeft:c?"1px solid gray":"none",borderRight:c?"1px solid gray":"none",transition:{duration:1,ease:[.6,.05,-.01,.9]}},initial:{borderBottom:"1px solid gray"},value:y,onChange:function(e){return x(e.target.value)},type:"email",name:"Email",id:"Email-Input",placeholder:"Email Id*"}),a.a.createElement(h.b.textarea,{onFocus:function(){return p(!0)},onBlur:function(){return p(!1)},animate:{borderTop:m?"1px solid gray":"none",borderLeft:m?"1px solid gray":"none",borderRight:m?"1px solid gray":"none",transition:{duration:1,ease:[.6,.05,-.01,.9]}},initial:{borderBottom:"1px solid gray"},value:E,onChange:function(e){return k(e.target.value)},name:"Text",id:"Text-Input",cols:"30",rows:"5",placeholder:"Message*"}),a.a.createElement(U,null,a.a.createElement(Y,{type:"submit",onClick:function(e){e.preventDefault(),""!==b&&""!==y&&""!==E?(Z.firestore().collection("messages").add({name:b,email:y,message:E}).then((function(){O(!0),console.log("message sent")})),v(""),x(""),k(""),M(!1)):M(!0)},onMouseEnter:function(){return t("cursorTheme")},onMouseLeave:t},"Send"),_&&a.a.createElement("div",{className:"sentMessage green"},a.a.createElement("p",null,"Message Sent   "),a.a.createElement("span",{className:"MessageClose",onClick:function(){return O(!1)}},"×")),H&&a.a.createElement("div",{className:"sentMessage red"},a.a.createElement("p",null,"Message not filled   "),a.a.createElement("span",{className:"MessageClose",onClick:function(){return M(!1)}},"×")))))))},ee=function(e){var t=e.onCursor,r=Object(h.c)(),s=f({triggerOnce:!0,rootMargin:"-70px"}),l=s[0],c=s[1];Object(o.useEffect)((function(){c&&r.start("visible")}),[r,c]);var d={initial:{backgroundColor:"rgba(0, 0, 0, 0)"},animate:{backgroundColor:"rgba(0, 0, 0, 0.6)",transition:{staggerChildren:.2}}},u={initial:{scaleY:0,y:100,opacity:0},animate:{scaleY:1,y:0,opacity:1,transition:{duration:.6,ease:[.6,.05,-.01,.9]}}};return a.a.createElement(N,{id:"projects",ref:l,animate:r,initial:"hidden",variants:{visible:{opacity:1,y:0,transition:{duration:.6,ease:[.6,.05,-.01,.9]}},hidden:{opacity:0,y:172}}},a.a.createElement(V,null,"What have I done?"),a.a.createElement(i.a,null,a.a.createElement(B,null,a.a.createElement(L,{href:"https://netflix-reactclone.web.app",target:"_blank",flex1:!0},a.a.createElement("img",{src:n("K/pR"),alt:"Netflix Clone"}),a.a.createElement(P,{variants:d,initial:"initial",whileHover:"animate"},a.a.createElement(z,{variants:u},a.a.createElement(D,{whileHover:{color:"red",backgroundColor:"#ffffff"},href:"https://netflix-reactclone.web.app",target:"_blank",onMouseEnter:function(){t("cursorRed")},onMouseLeave:t},"View Demo"),a.a.createElement(D,{source:!0,whileHover:{color:"#ffffff",backgroundColor:"#ea291e"},href:"https://github.com/vishnuramv/netflix-clone",target:"_blank",onMouseEnter:function(){t("cursorTheme")},onMouseLeave:t},"View Source")),a.a.createElement(T,{variants:u},"Netflix Clone"))),a.a.createElement(L,{href:"https://whatsapp-clonereact.web.app",target:"_blank"},a.a.createElement("img",{src:n("0lPv"),alt:"Whatsapp Clone"}),a.a.createElement(P,{variants:d,initial:"initial",whileHover:"animate",dark:!0},a.a.createElement(z,{variants:u,small:!0},a.a.createElement(D,{whileHover:{color:"red",backgroundColor:"#ffffff"},href:"https://whatsapp-clonereact.web.app/",target:"_blank",onMouseEnter:function(){t("cursorRed")},onMouseLeave:t},"View Demo"),a.a.createElement(D,{source:!0,whileHover:{color:"#ffffff",backgroundColor:"#ea291e"},href:"https://github.com/vishnuramv/whatsapp-clone",target:"_blank",onMouseEnter:function(){t("cursorTheme")},onMouseLeave:t},"View Source")),a.a.createElement(T,{variants:u},"Web.Whatsapp.com Clone")))),a.a.createElement(B,null,a.a.createElement(L,{href:"https://track-covid-react.web.app",target:"_blank"},a.a.createElement("img",{src:n("5+Qn"),alt:"Covid Tracker"}),a.a.createElement(P,{variants:d,initial:"initial",whileHover:"animate",dark:!0},a.a.createElement(z,{variants:u,small:!0},a.a.createElement(D,{whileHover:{color:"red",backgroundColor:"#ffffff"},href:"https://track-covid-react.web.app",target:"_blank",onMouseEnter:function(){t("cursorRed")},onMouseLeave:t},"View Demo"),a.a.createElement(D,{source:!0,whileHover:{color:"#ffffff",backgroundColor:"#ea291e"},href:"https://github.com/vishnuramv/covid19-tracker",target:"_blank",onMouseEnter:function(){t("cursorTheme")},onMouseLeave:t},"View Source")),a.a.createElement(T,{variants:u},"Covid Tracker"))),a.a.createElement(L,{href:"https://spotify-reactclone.web.app",target:"_blank",flex1:!0},a.a.createElement("img",{src:n("BMXg"),alt:"Spotify Clone"}),a.a.createElement(P,{variants:d,initial:"initial",whileHover:"animate"},a.a.createElement(z,{variants:u},a.a.createElement(D,{whileHover:{color:"red",backgroundColor:"#ffffff"},href:"https://spotify-reactclone.web.app",target:"_blank",onMouseEnter:function(){t("cursorRed")},onMouseLeave:t},"View Demo"),a.a.createElement(D,{source:!0,whileHover:{color:"#ffffff",backgroundColor:"#ea291e"},href:"https://github.com/vishnuramv/spotify-clone",target:"_blank",onMouseEnter:function(){t("cursorTheme")},onMouseLeave:t},"View Source")),a.a.createElement(T,{variants:u},"Spotify Clone"))))))},te=n("Bl7J"),ne=n("vrFN");t.default=function(){var e=Object(g.c)().cursorStyles,t=Object(g.b)(),n=Object(o.useState)(!1),i=n[0],r=n[1],s=function(n){n=e.includes(n)&&n||null,t({type:"CURSOR_TYPE",cursorType:n})};return a.a.createElement(te.a,{onCursor:s,toggleMenu:i,setToggleMenu:r},a.a.createElement(ne.a,{title:"Home"}),a.a.createElement(G,{onCursor:s}),a.a.createElement(Q,{onCursor:s}),a.a.createElement(ee,{onCursor:s}),a.a.createElement($,{onCursor:s}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-18c8a2fb24ea3251b57e.js.map
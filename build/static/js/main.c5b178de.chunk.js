(this.webpackJsonpmy_blog=this.webpackJsonpmy_blog||[]).push([[0],{27:function(e,a,t){e.exports=t.p+"static/media/Untitled.9a27d7f8.png"},28:function(e,a,t){e.exports=t.p+"static/media/uilaglogo.be6d1f65.png"},50:function(e,a,t){},59:function(e,a,t){e.exports=t.p+"static/media/image-product-desktop.22a90138.jpg"},63:function(e,a,t){e.exports=t(87)},71:function(e,a,t){},72:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){e.exports=t.p+"static/media/icon-cart.ea610941.svg"},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(36),c=t.n(r),s=(t(71),t(26)),i=t(2),m=(t(72),t(54)),o=t.n(m),u=t(113),d=t(114),E=t(115),p=t(116);const g=()=>l.a.createElement("div",{className:"container_downbar"},l.a.createElement("img",{src:"/assets/20240711135509__MG_8632.JPG (1).jpg",alt:"Background",className:"bottom_background-image"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("ul",{className:"menu-options"},l.a.createElement("li",null,"Home"),l.a.createElement("li",null,"Projects"),l.a.createElement("li",null,"About"),l.a.createElement("li",null,"Contact"))));var v=()=>{const e=Object(n.useRef)(null);return Object(n.useEffect)(()=>{const a=new IntersectionObserver(a=>{let[t]=a;t.isIntersecting?e.current.classList.add("in-view"):e.current.classList.remove("in-view")},{threshold:.1});e.current&&a.observe(e.current);const t=()=>{e.current&&(e.current.classList.contains("in-view")?e.current.style.animationPlayState="running":e.current.style.animationPlayState="paused")};return window.addEventListener("scroll",t),()=>{e.current&&a.unobserve(e.current),window.removeEventListener("scroll",t)}},[]),l.a.createElement("div",{className:"downcomponent",ref:e},l.a.createElement(g,null),l.a.createElement("div",{className:"our_socials"},l.a.createElement("div",{className:"modals"},l.a.createElement("div",{className:"goto_top"},l.a.createElement(o.a,{style:{color:"white",fontSize:"30px",margin:"5px"}})))),l.a.createElement("footer",{className:"sunnyside-unique-footer"},l.a.createElement("div",{className:"sunnyside-unique-footer-content"},l.a.createElement("h2",{className:"sunnyside-unique-footer-title"},"kngsley2018@gmail.com"),l.a.createElement("div",{className:"sunnyside-unique-social-icons"},l.a.createElement(u.a,{className:"sunnyside-unique-icon"}),l.a.createElement(d.a,{className:"sunnyside-unique-icon"}),l.a.createElement(E.a,{className:"sunnyside-unique-icon"}),l.a.createElement(p.a,{className:"sunnyside-unique-icon"})))))},f=(t(78),t(27)),b=t.n(f),h=t(28),N=t.n(h),y=t(117);const k=e=>{let{toggle:a}=e;const[t,r]=Object(n.useState)(!1),[c,i]=Object(n.useState)(!1),m=[{img:null,link:"/",name:"Home",classname:"li",id:1},{img:"/img/Screenshot_from_2022-10-09_12-35-09-removebg-preview.png",link:"/articles",name:"Articles",classname:"li",id:2},{img:"/img/doge-removebg-preview.png",link:"/Portfolio",name:"Projects",classname:"li",id:3},{img:"/milo-removebg-preview.png",link:"/services",name:"Services",classname:"li",id:4},{img:"/milo-removebg-preview.png",link:"/about",name:"About Me",classname:"li",id:5}];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"menuebar_alt"},l.a.createElement("div",{className:"logos"},l.a.createElement("img",{src:b.a,alt:b.a}),l.a.createElement("img",{src:N.a,alt:N.a})),l.a.createElement("ul",null,m.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement(s.b,{className:e.classname,key:e.id,to:e.link},e.name))))),l.a.createElement("div",{id:"small_menuebar"},l.a.createElement("div",null,l.a.createElement("div",{onClick:()=>{r(!t)},style:{display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255, 255, 255, 0.3)",background:"transparent"}},l.a.createElement(y.a,{toggled:c,toggle:i})),l.a.createElement("div",{className:"dropdown".concat(t?" open":"")},l.a.createElement("ul",{className:"dropdown_ul"},m.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement(s.b,{className:e.classname,key:e.id,to:e.link},e.name)))),l.a.createElement("div",null,l.a.createElement("img",{src:b.a,alt:b.a}),l.a.createElement("img",{src:N.a,alt:N.a}))))))};var w=t(30),j=t.n(w),O=t(29),x=t.n(O);t(79);var _=()=>{const e=Object(n.useRef)(null),[a,t]=Object(n.useState)(!1),[r,c]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),[m,o]=Object(n.useState)(0),[u,d]=Object(n.useState)(0);Object(n.useEffect)(()=>{const n=a=>{t(!0),c(a.pageX-e.current.offsetLeft),i(a.pageY-e.current.offsetTop),o(e.current.scrollLeft),d(e.current.scrollTop),e.current.style.cursor="grabbing"},l=()=>{a&&(t(!1),e.current.style.cursor="grab")},E=()=>{a&&(t(!1),e.current.style.cursor="grab")},p=t=>{if(!a)return;t.preventDefault();const n=t.pageX-e.current.offsetLeft,l=t.pageY-e.current.offsetTop,c=1*(n-r),i=1*(l-s);e.current.scrollLeft=m-c,e.current.scrollTop=u-i},g=e.current;return g&&(g.addEventListener("mousedown",n),g.addEventListener("mouseleave",l),g.addEventListener("mouseup",E),document.addEventListener("mousemove",p)),()=>{const a=e.current;a&&(a.removeEventListener("mousedown",n),a.removeEventListener("mouseleave",l),a.removeEventListener("mouseup",E)),document.removeEventListener("mousemove",p)}},[a,r,s,m,u]),Object(n.useEffect)(()=>{const a=e.current,t=e=>{};if(a)return a.addEventListener("wheel",t),()=>{a.removeEventListener("wheel",t)}},[]);return l.a.createElement("div",{id:"bank-accounts",className:"bank-accounts",ref:e},l.a.createElement("article",{className:"card"},l.a.createElement("div",{className:"card-background"},l.a.createElement("img",{src:"/projects_images/Oderasbm.png",alt:"oderasbm"})),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Educational Learning Platform"),l.a.createElement("p",null,"Creating a SaaS for Oderasbm, an innovative Nigerian educational service, delivering excellent learning experiences nationwide.",l.a.createElement("a",{href:"#",title:"Squarespace"},"Oderasbm"))),l.a.createElement("div",{className:"action-bottom-bar"},l.a.createElement("a",{href:"#"},"View More information Here",l.a.createElement(x.a,{className:"chevron"}),l.a.createElement(j.a,{className:"arrow"})))),l.a.createElement("article",{className:"card"},l.a.createElement("div",{className:"card-background"},l.a.createElement("img",{src:"projects_images/odomirentals.png",alt:"odomiterentals"})),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Odomite Rentals"),l.a.createElement("p",null,"This top-performing U.S.-based e-commerce service excels in managing client needs and orders. They boast a perfect 5-star rating on Google, driven by their exceptional client onboarding process.",l.a.createElement("a",{href:"#",title:"Squarespace"},"OdomiteRentals"))),l.a.createElement("div",{className:"action-bottom-bar"},l.a.createElement("a",{href:"#"},"View Webste here",l.a.createElement(x.a,{className:"chevron"}),l.a.createElement(j.a,{className:"arrow"})))),l.a.createElement("article",{className:"card"},l.a.createElement("div",{className:"card-background"},l.a.createElement("img",{src:"projects_images/OrionShell.png",alt:"orion shell"})),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Orion Shell"),l.a.createElement("p",null,"I'm developing a custom Linux shell in C and have a functional build available on GitHub. I'm seeking developers to contribute and help make this open-source project a success.")),l.a.createElement("div",{className:"action-bottom-bar"},l.a.createElement("a",{href:"#"},"Get source code on Github",l.a.createElement(x.a,{className:"chevron"}),l.a.createElement(j.a,{className:"arrow"})))),l.a.createElement("article",{className:"card"},l.a.createElement("div",{className:"card-background"},l.a.createElement("img",{src:"projects_images/virtual_learn.png",alt:"virtual_learn"})),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Virtual Learn"),l.a.createElement("p",null,"An AI-powered React learning platform that enhances student learning and integrates a community for content filtering.")),l.a.createElement("div",{className:"action-bottom-bar"},l.a.createElement("a",{href:"#"},"View The mvp here",l.a.createElement(x.a,{className:"chevron"}),l.a.createElement(j.a,{className:"arrow"})))))},S=t(45),L=t.n(S),T=t(56),R=t.n(T),A=t(57),C=t.n(A),M=t(58),q=t.n(M);t(50);var I=e=>{let{image:a}=e;return l.a.createElement("div",{className:"profile-wrapper"},l.a.createElement("div",{className:"profile"},l.a.createElement("div",{className:"profile-image"},l.a.createElement("img",{src:"/assets/".concat(a),alt:"Profile"})),l.a.createElement("ul",{className:"social-icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"#instagram",title:"Instagram"},l.a.createElement(L.a,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"#twitter",title:"Twitter"},l.a.createElement(R.a,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"#threads",title:"Threads"},l.a.createElement(C.a,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"#linkedin",title:"Linkedin"},l.a.createElement(q.a,null)))),l.a.createElement("div",{className:"profile-name"},l.a.createElement("h2",null,"Kingsley Okpo"),l.a.createElement("div",{className:"profile-bio"},"I'm a JavaScript full-stack engineer, love working with ",l.a.createElement("em",null,"React")," and ",l.a.createElement("em",null,"Node.js"),"."))))};var P=()=>l.a.createElement(I,{image:"portrait.jpg"});t(80);var F=e=>{let{direction:a="right",speed:t=.1}=e;const r=Object(n.useRef)(null);Object(n.useEffect)(()=>{const e=r.current;let n=0;const l=()=>{"right"===a?(n+=t,n>=100&&(n=0)):(n-=t,n<=0&&(n=100)),e.style.transform="translate3d(-".concat(n,"%, 0, 0)"),requestAnimationFrame(l)};l()},[a,t]);return l.a.createElement("div",{className:"scroll-container"},l.a.createElement("div",{ref:r,className:"scroll-content"},l.a.createElement("div",{className:"header78_image-list"},[{src:"/img/pythonista.jpeg",alt:"python"},{src:"/img/morereact.png",alt:"react"},{src:"/img/cforweb.png",alt:"c"},{src:"/img/git.png",alt:"git"},{src:"/img/noded.png",alt:"node"},{src:"/img/django.png",alt:"django"},{src:"/img/emacsy.png",alt:"lisp"},{src:"/img/sql.png",alt:"sql"},{src:"/img/puppet.jpg",alt:"puppet"},{src:"/img/nginx.png",alt:"nginx"},{src:"/img/pytho_flask.png",alt:"flask"},{src:"/img/atlacian.png",alt:"atlacian"},{src:"/img/slack.jpg",alt:"slack"},{src:"/img/discord.jpeg",alt:"discord"}].map((e,a)=>l.a.createElement("div",{key:a,className:"header78_image-wrapper"},l.a.createElement("img",{src:e.src,alt:e.alt,className:"header78_image"}))))))},G=(t(81),t(82),t(59)),H=t.n(G);class Y extends n.Component{render(){return l.a.createElement("main",null,l.a.createElement("section",{className:"left"},l.a.createElement("img",{src:H.a,alt:"Parfum image"})),l.a.createElement("section",{className:"right"},l.a.createElement("h1",null,"D  e  v  O  p  s"),l.a.createElement("h2",null,"what happens when www.google.com and hit enter"),l.a.createElement("p",null,"An intricate dive into the working principle behind every web request that has ever been sent."),l.a.createElement("div",{className:"price"},l.a.createElement("p",{className:"discount-price"},"nohup Kingsley"),l.a.createElement("p",{className:"real-price"},"22/04/2024")),l.a.createElement("button",null,"Read Full Article")))}}var W=Y;t(83),t(84);var D=e=>{let{play:a}=e;return l.a.createElement("div",{className:"play-button",onClick:a},l.a.createElement("div",{className:"play-icon"}))};var J=()=>{const e=Object(n.useRef)(null),a=Object(n.useRef)(null),t=Object(n.useRef)(null),r=Object(n.useRef)(null),c=Object(n.useRef)(null),s=Object(n.useRef)(null),i=Object(n.useRef)(null),m=Object(n.useRef)(null),[o,u]=Object(n.useState)(!0),[d,E]=Object(n.useState)(.5),[p,g]=Object(n.useState)(!1),[v,f]=Object(n.useState)(1),[b,h]=Object(n.useState)(!0);let N;Object(n.useEffect)(()=>{const t=()=>{a.current.paused||(N=setTimeout(()=>{u(!1)},3e3))};t();const n=()=>{u(!0),clearTimeout(N),t()},l=e.current;return l.addEventListener("mousemove",n),()=>{l.removeEventListener("mousemove",n)}},[]);const y=e=>{let a=Math.floor(e%60),t=Math.floor(e/60)%60,n=Math.floor(e/3600);return a=a<10?"0".concat(a):a,t=t<10?"0".concat(t):t,n=n<10?"0".concat(n):n,n?"".concat(n,":").concat(t,":").concat(a):"".concat(t,":").concat(a)},k=()=>{a.current.paused?(a.current.play(),t.current.play(),g(!0),h(!1)):(a.current.pause(),t.current.pause(),g(!1),h(!0))};return Object(n.useEffect)(()=>(a.current.volume=d,a.current.playbackRate=v,t.current.playbackRate=v,a.current.addEventListener("loadeddata",()=>{s.current.innerText=y(a.current.duration)}),()=>{clearTimeout(N)}),[d,v]),l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{className:"git-icon",href:"https://github.com/kingsley-sama",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://github.com/fluidicon.png",alt:"GitHub"})),l.a.createElement("video",{ref:t,src:"https://vaibhav1663.github.io/Youtube-Ambient-Mode/demo-video.mp4",poster:"https://vaibhav1663.github.io/Youtube-Ambient-Mode/poster.jpg",id:"blurred",muted:!0,autoPlay:!0,loop:!0}),l.a.createElement("div",{className:"container ".concat(o?"show-controls":""),ref:e},b&&l.a.createElement("div",{className:"thumbnail"},l.a.createElement(D,{onClick:k})),l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"video-timeline",onMouseMove:e=>{const t=e.target.clientWidth,n=e.nativeEvent.offsetX,l=Math.floor(n/t*a.current.duration),r=e.target.querySelector("span"),c=Math.max(20,Math.min(n,t-20));r.style.left="".concat(c,"px"),r.innerText=y(l)},onClick:e=>{const n=e.target.clientWidth,l=e.nativeEvent.offsetX/n*a.current.duration;a.current.currentTime=l,t.current.currentTime=l}},l.a.createElement("div",{className:"progress-area"},l.a.createElement("span",null,"00:00"),l.a.createElement("div",{className:"progress-bar",ref:r}))),l.a.createElement("ul",{className:"video-controls"},l.a.createElement("li",{className:"options left"},l.a.createElement("button",{className:"volume",onClick:()=>E(d?0:.5)},l.a.createElement("i",{className:"fa-solid ".concat(d?"fa-volume-high":"fa-volume-xmark")})),l.a.createElement("input",{type:"range",min:"0",max:"1",step:"any",value:d,onChange:e=>{const t=e.target.value;a.current.volume=t,E(t)},ref:i}),l.a.createElement("div",{className:"video-timer"},l.a.createElement("p",{className:"current-time",ref:c},"00:00"),l.a.createElement("p",{className:"separator"}," / "),l.a.createElement("p",{className:"video-duration",ref:s},"00:00"))),l.a.createElement("li",{className:"options center"},l.a.createElement("button",{className:"skip-backward",onClick:()=>{a.current.currentTime-=5,t.current.currentTime-=5}},l.a.createElement("i",{className:"fas fa-backward"})),l.a.createElement("button",{className:"play-pause",onClick:k},l.a.createElement("i",{className:"fas ".concat(p?"fa-pause":"fa-play")})),l.a.createElement("button",{className:"skip-forward",onClick:()=>{a.current.currentTime+=5,t.current.currentTime+=5}},l.a.createElement("i",{className:"fas fa-forward"}))),l.a.createElement("li",{className:"options right"},l.a.createElement("div",{className:"playback-content"},l.a.createElement("button",{className:"playback-speed",onClick:()=>m.current.classList.toggle("show")},l.a.createElement("span",{className:"material-symbols-rounded"},"slow_motion_video")),l.a.createElement("ul",{className:"speed-options",ref:m},[2,1.5,1,.75,.5].map(e=>l.a.createElement("li",{key:e,"data-speed":e,onClick:()=>(e=>{a.current.playbackRate=e,t.current.playbackRate=e,f(e)})(e),className:v===e?"active":""},e,"x")))),l.a.createElement("button",{className:"fullscreen",onClick:()=>{document.fullscreenElement?document.exitFullscreen():e.current.requestFullscreen()}},l.a.createElement("i",{className:"fa-solid fa-expand"}))))),l.a.createElement("video",{ref:a,src:"https://vaibhav1663.github.io/Youtube-Ambient-Mode/demo-video.mp4",poster:"https://vaibhav1663.github.io/Youtube-Ambient-Mode/poster.jpg",onTimeUpdate:()=>{const{currentTime:e,duration:t}=a.current,n=e/t*100;r.current.style.width="".concat(n,"%"),c.current.innerText=y(e)}})))};var V=function(){const[e,a]=Object(n.useState)(!1);return l.a.createElement("div",{className:"App"},l.a.createElement(s.a,null,l.a.createElement(k,{toggle:e}),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",element:l.a.createElement(X,null)})),l.a.createElement("div",null,l.a.createElement(v,null))))};const X=()=>{const[e,a]=Object(n.useState)("home");return l.a.createElement("div",null,l.a.createElement("div",{className:"parallax-image parallax-image-01"},l.a.createElement("div",{className:"contents"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Kingsley Francis ",l.a.createElement("br",null)," Okpo"),l.a.createElement("h3",null,"Full Stack Web Developer ",l.a.createElement("br",null)," & SE"),l.a.createElement("button",{id:"about"},"About"))),l.a.createElement("button",{className:"explore-button","data-page":"destination",onClick:function(e){a(e.currentTarget.dataset.page)}},l.a.createElement("span",{className:"explore-button__text"},"Explore")))),l.a.createElement("section",{id:"about-us"},l.a.createElement("div",{class:"text-container"},l.a.createElement("h1",null,"Personalizing Performance-Developing What Helps"),l.a.createElement("p",null,"I am A software engineer, A Mathematics Major and and AI enthusiast with key interest in Building full scale softwares and embeding the ability to make decisions based on conclusion from Logical steps. I Love Number theory and how it finds practical application in encryption. This is and area I would love to research someday. If you want to connect with me you can find my socials here. Feel free to tell me the most awesome thing about yourself I will listen ..."),l.a.createElement("p",{class:"learnmore1"},"LEARN MORE")),l.a.createElement("div",{id:"about_image"},l.a.createElement(P,null))),l.a.createElement("div",{className:"videoplayer"},l.a.createElement(J,null)),l.a.createElement("section",null,l.a.createElement("h2",{className:"projects_header"},"Projects"),l.a.createElement(_,null)),l.a.createElement("div",{className:"parallax-image parallax-image-03"},l.a.createElement("div",{className:"our_services"},l.a.createElement("h1",null,"Articles"),l.a.createElement("div",{className:"articles_page"},l.a.createElement(W,null),l.a.createElement(W,null),l.a.createElement(W,null)))),l.a.createElement("section",null,l.a.createElement("h2",{className:"projects_header"},"Tech Stacks"),l.a.createElement(F,{direction:"right",speed:.09}),l.a.createElement(F,{direction:"left",speed:.06})))};t(85);c.a.render(l.a.createElement(V,null),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.c5b178de.chunk.js.map
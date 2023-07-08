(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[6],{49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=n(50);function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=r(a);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?a.useLayoutEffect:a.useEffect;function f(e){var t=a.useRef(e);return p((function(){t.current=e})),a.useCallback((function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.current.apply(void 0,n)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},b=function(e){var t=a.useMemo((function(){return c(c({},h),e)}),[e]),n=t.ref,r=t.startOnMount,s=t.enableReinitialize,o=t.delay,l=t.onEnd,u=t.onStart,p=t.onPauseResume,b=t.onReset,g=t.onUpdate,j=d(t,m),y=a.useRef(),v=a.useRef(),x=a.useRef(!1),w=f((function(){return function(e,t){var n=t.decimal,a=t.decimals,r=t.duration,s=t.easingFn,o=t.end,c=t.formattingFn,l=t.numerals,u=t.prefix,d=t.separator,p=t.start,f=t.suffix,m=t.useEasing;return new i.CountUp(e,o,{startVal:p,duration:r,decimal:n,decimalPlaces:a,easingFn:s,formattingFn:c,numerals:l,separator:d,prefix:u,suffix:f,useEasing:m,useGrouping:!!d})}("string"===typeof n?n:n.current,j)})),O=f((function(e){var t=y.current;if(t&&!e)return t;var n=w();return y.current=n,n})),V=f((function(){var e=function(){return O(!0).start((function(){null===l||void 0===l||l({pauseResume:k,reset:E,start:F,update:N})}))};o&&o>0?v.current=setTimeout(e,1e3*o):e(),null===u||void 0===u||u({pauseResume:k,reset:E,update:N})})),k=f((function(){O().pauseResume(),null===p||void 0===p||p({reset:E,start:F,update:N})})),E=f((function(){v.current&&clearTimeout(v.current),O().reset(),null===b||void 0===b||b({pauseResume:k,start:F,update:N})})),N=f((function(e){O().update(e),null===g||void 0===g||g({pauseResume:k,reset:E,start:F})})),F=f((function(){E(),V()})),P=f((function(e){r&&(e&&E(),V())}));return a.useEffect((function(){x.current?s&&P(!0):(x.current=!0,P())}),[s,x,P,o,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),a.useEffect((function(){return function(){E()}}),[E]),{start:F,pauseResume:k,reset:E,update:N,getCountUp:O}},g=["className","redraw","containerProps","children","style"];t.default=function(e){var t=e.className,n=e.redraw,i=e.containerProps,r=e.children,o=e.style,l=d(e,g),p=s.default.useRef(null),m=s.default.useRef(!1),h=b(c(c({},l),{},{ref:p,startOnMount:"function"!==typeof r||0===e.delay,enableReinitialize:!1})),j=h.start,y=h.reset,v=h.update,x=h.pauseResume,w=h.getCountUp,O=f((function(){j()})),V=f((function(t){e.preserveValue||y(),v(t)})),k=f((function(){"function"!==typeof e.children||p.current instanceof Element?w():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));a.useEffect((function(){k()}),[k]),a.useEffect((function(){m.current&&V(e.end)}),[e.end,V]);var E=n&&e;return a.useEffect((function(){n&&m.current&&O()}),[O,n,E]),a.useEffect((function(){!n&&m.current&&O()}),[O,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),a.useEffect((function(){m.current=!0}),[]),"function"===typeof r?r({countUpRef:p,start:j,reset:y,update:v,pauseResume:x,getCountUp:w}):s.default.createElement("span",u({className:t,ref:p,style:o},i),e.start?w().formattingFn(e.start):"")},t.useCountUp=b},50:function(e,t,n){"use strict";n.r(t),n.d(t,"CountUp",(function(){return i}));var a=function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(){function e(e,t,n){var i=this;this.target=e,this.endVal=t,this.options=n,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(e){i.startTime||(i.startTime=e);var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.frameVal=i.startVal-(i.startVal-i.endVal)*(t/i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration),i.countDown?i.frameVal=i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal=i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(e){var t,n,a,r,s=e<0?"-":"";t=Math.abs(e).toFixed(i.options.decimalPlaces);var o=(t+="").split(".");if(n=o[0],a=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){r="";for(var c=0,l=n.length;c<l;++c)0!==c&&c%3==0&&(r=i.options.separator+r),r=n[l-c-1]+r;n=r}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]}))),s+i.options.prefix+n+a+i.options.suffix},this.easeOutExpo=function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},this.options=a(a({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: "+e,null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},53:function(e,t,n){"use strict";n.r(t);var a=n.p+"static/media/profile.7c340806.jpg",i=n(2),r=n(7),s=[{id:1,bio:"Hi, I'm Omar from Egypt. I enjoy building everything from small business sites to rich interactive web apps if you are a business seeking a web presence or an employee looking to hire, you can get in touch."},{id:2,bio:"As a software developer with over 2 years of experience, I am confident in my ability to make a valuable contribution to the project you want to build."},{id:3,bio:"In my current role, I have gained experience in frontend and backend development using Reactjs, Typescript, JavaScript, Tailwindcss, node js, express js, mongoDB, redux and many other technologies. I have also worked on many different projects with various technologies."}],o=n(3),c=Object(i.createContext)(),l=function(e){var t=e.children,n=Object(i.useState)(s),a=Object(r.a)(n,2),l=a[0],u=a[1];return Object(o.jsx)(c.Provider,{value:{aboutMe:l,setAboutMe:u},children:t})},u=c,d=function(){var e=Object(i.useContext)(u).aboutMe;return Object(o.jsxs)("div",{className:"block sm:flex sm:gap-10 mt-10 sm:mt-20",children:[Object(o.jsx)("div",{className:"w-full sm:w-1/4 mb-7 sm:mb-0",children:Object(o.jsx)("img",{src:a,className:"rounded-lg w-96",alt:""})}),Object(o.jsx)("div",{className:"font-general-regular w-full sm:w-3/4 text-left",children:e.map((function(e){return Object(o.jsx)("p",{className:"mb-4 text-ternary-dark dark:text-ternary-light text-lg",children:e.bio},e.id)}))})]})},p=n(49),f=function(e){var t=e.title,n=e.counter,a=e.measurement;return Object(o.jsxs)("div",{className:"mb-20 sm:mb-0",children:[Object(o.jsxs)("h2",{className:"text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2",children:[n," ",a]}),Object(o.jsx)("span",{className:"font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light",children:t})]})},m=function(){return Object(p.useCountUp)({ref:"experienceCounter",end:2,duration:1}),Object(p.useCountUp)({ref:"freelanceHours",end:79,duration:2}),Object(p.useCountUp)({ref:"feedbackCounter",end:92,duration:2}),Object(p.useCountUp)({ref:"projectsCounter",end:53,duration:2}),Object(o.jsx)("div",{className:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm",children:Object(o.jsxs)("div",{className:"font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center",children:[Object(o.jsx)(f,{title:"Years of experience",counter:Object(o.jsx)("span",{id:"experienceCounter"}),measurement:"+"}),Object(o.jsx)(f,{title:"Freelancing hours",counter:Object(o.jsx)("span",{id:"freelanceHours"}),measurement:"+"}),Object(o.jsx)(f,{title:"Positive feedback",counter:Object(o.jsx)("span",{id:"feedbackCounter"}),measurement:"%"}),Object(o.jsx)(f,{title:"Projects completed",counter:Object(o.jsx)("span",{id:"projectsCounter"}),measurement:""})]})})},h=n(44),b=n.p+"static/media/experience.bf87e3f2.png",g=[{companyName:"Dot.",position:"Frontend Developer",duration:"5/2023 - Present",description:["Dot is a software house for a group of restaurants that builds related software applications.","We build and maintain an ERP system to manage restaurant\u2019s inventory ,cashier , warehouses , etc\u2026"],responsible:{info:"My responsibilities are: ",points:["Building UI for different layouts.","Integrating with backend APIs.","Documenting and debugging the already working system."]},techStack:["Typescript","React","Redux","SASS","MaterialUI"],website:"first release is coming soon"},{companyName:"BMHM Co.",position:"Full-stack Developer",duration:"1/2023 - 5/2023",description:["BMHM provides holistic and culturally sensitive mental healthcare And eradicate stigma services amongst Black communities.","We build and maintain web applications, Troubleshoot and debug many features, and build new layouts and pages."],responsible:{info:"My responsibilities are: ",points:["Handling requests coming from the frontend team (as backend).","Building well-organized and structured backend App (as backend).","Documenting on SwaggerUI (as backend).","Helping in building new layouts (as frontend)."]},techStack:["Typescript","React","Nodejs","Expressjs","MongoDB"],website:"http://bmhm.org/"},{companyName:"Digital Move",position:"Frontend Developer",duration:"8/2022 - 1/2023",description:["Digital move as a small agency which delivers many and various web applications to clients all over the world.","We Write feature documentation and SDD, unit tests for many features, and performed code reviews."],responsible:{info:"Projects we delivered:",points:["Performs"]},techStack:["Typescript","React","MantineUI","Tailwindcss","Azure devOps"],website:"https://www.performs.app/"},{companyName:"Beacon",position:"Frontend Developer",duration:"9/2021 - 8/2022",description:["Beacon is making it incredibly easy to plan your next social event while discovering your local social scene. Throw the best parties and find the coolest events for you and your friends!"],responsible:{info:"I worked along side with two frontend developers and a full-stack developer. I was responsible for:",points:["Creating and updating UI.","Creating Functionality of the pages.","Connecting with the backend using APIs."]},techStack:["Typescript","React","Nextjs","Bootstrap"],website:"https://www.sendbeacon.com/"},{companyName:"Atomic",position:"Frontend Developer",duration:"6/2021 - 9/2021",description:["Atomic is a SaaS platform that lets developers create software orders of magnitude faster than they can now."],responsible:{info:"I worked with large team, been guided by a senior frontend developer. I was responsible for:",points:["Creating new layouts and updating UI.","Hundling Functionality of the pages."]},techStack:["React","JavaScript","Styled Component","Bootstrap"],website:"https://www.atomic.dev/"}],j=function(){return Object(o.jsxs)("div",{className:"block sm:flex sm:gap-10 mt-10 sm:mt-20",children:[Object(o.jsx)("div",{className:"w-full sm:w-1/4 mb-7 sm:mb-0",children:Object(o.jsx)("img",{src:b,className:"rounded-lg w-96",alt:""})}),Object(o.jsx)("div",{className:"card-info font-general-regular w-full sm:w-3/4 text-left",children:g.map((function(e,t){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"work-info mb-4 text-ternary-dark dark:text-ternary-light text-lg border-t-2 border-primary-light dark:border-secondary-dark",children:[Object(o.jsx)("h5",{className:"work-place",children:Object(o.jsx)("a",{href:e.website,target:"_blank",rel:"noreferrer",className:"underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300",children:e.companyName})}),Object(o.jsx)("span",{className:"work-title job-title",children:e.position}),Object(o.jsx)("p",{className:"work-period",children:e.duration}),Object(o.jsx)("p",{className:"work-description",children:e.description}),Object(o.jsx)("p",{children:e.responsible.info}),Object(o.jsx)("p",{children:Object(o.jsx)("ul",{children:e.responsible.points.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))})}),Object(o.jsxs)("ul",{className:"work-stack",children:["Tech stack:",Object(o.jsx)("br",{}),e.techStack.map((function(e,t){return Object(o.jsx)("li",{children:"#".concat(e," ")},t)}))]})]})},t)}))})]})};t.default=function(){return Object(o.jsxs)(l,{children:[Object(o.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto",children:Object(o.jsx)(d,{})}),Object(o.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},children:Object(o.jsx)(m,{})}),Object(o.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto",children:Object(o.jsx)(j,{})})]})}}}]);
//# sourceMappingURL=6.1989162f.chunk.js.map
(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[5],{46:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l}));var a=r(7),c=r(2),s=r(47),n=r(3),i=Object(c.createContext)(),l=function(e){var t=Object(c.useState)(s.a),r=Object(a.a)(t,2),l=r[0],o=r[1],d=Object(c.useState)(""),j=Object(a.a)(d,2),m=j[0],x=j[1],b=Object(c.useState)(""),g=Object(a.a)(b,2),u=g[0],h=g[1],p=l.filter((function(e){return e.title.toLowerCase().includes(m.toLowerCase())||""===m?e:""})),y=l.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(u)}));return Object(n.jsx)(i.Provider,{value:{projects:l,setProjects:o,searchProject:m,setSearchProject:x,searchProjectsByTitle:p,selectProject:u,setSelectProject:h,selectProjectsByCategory:y},children:e.children})}},48:function(e,t,r){"use strict";var a=r(2),c=r(8),s=r(44),n=r(14),i=r(3),l=function(e){var t=e.title,r=e.category,a=e.image,c=e.id;return Object(i.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(i.jsx)(n.b,{to:"/projects/single-project/".concat(c),"aria-label":"Single Project",children:Object(i.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(i.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(i.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(i.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})},o=r(46),d=["Frontend Application","Full-stack Web Application","Mobile Application"],j=function(e){var t=e.setSelectProject;return Object(i.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[Object(i.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return Object(i.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(a.useContext)(o.a),t=e.projects,r=e.searchProject,s=e.setSearchProject,n=e.searchProjectsByTitle,d=e.selectProject,m=e.setSelectProject,x=e.selectProjectsByCategory;return Object(i.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(i.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(i.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),Object(i.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[Object(i.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(i.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:Object(i.jsx)(c.l,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(i.jsx)("input",{onChange:function(e){s(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(i.jsx)(j,{setSelectProject:m})]})]}),Object(i.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:d?x.map((function(e){return Object(i.jsx)(l,{title:e.title,category:e.category,image:e.img,id:e.id},e.id)})):r?n.map((function(e){return Object(i.jsx)(l,{title:e.title,category:e.category,image:e.img,id:e.id},e.id)})):t.map((function(e){return Object(i.jsx)(l,{title:e.title,category:e.category,image:e.img,id:e.id},e.id)}))})]})}},51:function(e,t,r){"use strict";r.r(t);var a=r(48),c=r(46),s=r(3);t.default=function(){return Object(s.jsx)(c.b,{children:Object(s.jsx)("div",{className:"container mx-auto",children:Object(s.jsx)(a.a,{})})})}}}]);
//# sourceMappingURL=5.7c1c377c.chunk.js.map
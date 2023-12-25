(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[8],{54:function(e,t,r){"use strict";r.r(t);var a=r(2),s=r(7),l=r(47),n=r(4),i=r(3),c=Object(a.createContext)(),o=function(e){var t=e.children,r=Object(n.g)(),o=Object(a.useState)(l.a[r.id-1]),d=Object(s.a)(o,2),j=d[0],x=d[1];return console.log(l.a[r.id-1],r),Object(i.jsx)(c.Provider,{value:{singleProjectData:j,setSingleProjectData:x},children:t})},d=c,j=function(){var e=Object(a.useContext)(d).singleProjectData;return Object(i.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12",children:e.ProjectImages.map((function(e){return Object(i.jsx)("div",{className:"mb-10 sm:mb-0",children:Object(i.jsx)("img",{src:e.img,className:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:e.title},e.id)},e.id)}))})},x=r(8),m=function(){var e=Object(a.useContext)(d).singleProjectData;return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7",children:e.ProjectHeader.title}),Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsxs)("div",{className:"flex items-center mr-10",children:[Object(i.jsx)(x.c,{className:"text-lg text-ternary-dark dark:text-ternary-light"}),Object(i.jsx)("span",{className:"font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light",children:e.ProjectHeader.publishDate})]}),Object(i.jsxs)("div",{className:"flex items-center",children:[Object(i.jsx)(x.n,{className:"text-lg text-ternary-dark dark:text-ternary-light"}),Object(i.jsx)("span",{className:"font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light",children:e.ProjectHeader.tags})]})]})]})},b=function(){var e=Object(a.useContext)(d).singleProjectData;return Object(i.jsxs)("div",{className:"block sm:flex gap-0 sm:gap-10 mt-14",children:[Object(i.jsxs)("div",{className:"w-full sm:w-1/3 text-left",children:[Object(i.jsxs)("div",{className:"mb-7",children:[Object(i.jsx)("p",{className:"font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2",children:e.ProjectInfo.ClientHeading}),Object(i.jsx)("ul",{className:"leading-loose",children:e.ProjectInfo.CompanyInfo.map((function(e){return Object(i.jsxs)("li",{className:"font-general-regular text-ternary-dark dark:text-ternary-light",children:[Object(i.jsxs)("span",{children:[e.title,": "]}),Object(i.jsx)("a",{href:"Website"===e.title||"Github repository"===e.title?e.details:"/",target:"_blank",rel:"noreferrer",className:"Website"===e.title||"Github repository"===e.title?"hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300":"","aria-label":"Project Website and Phone",children:e.details})]},e.id)}))})]}),Object(i.jsxs)("div",{className:"mb-7",children:[Object(i.jsx)("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:e.ProjectInfo.ObjectivesHeading}),Object(i.jsx)("p",{className:"font-general-regular text-primary-dark dark:text-ternary-light",children:e.ProjectInfo.ObjectivesDetails})]}),Object(i.jsxs)("div",{className:"mb-7",children:[Object(i.jsx)("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:e.ProjectInfo.Technologies[0].title}),Object(i.jsx)("p",{className:"font-general-regular text-primary-dark dark:text-ternary-light",children:e.ProjectInfo.Technologies[0].techs.join(", ")})]})]}),Object(i.jsxs)("div",{className:"w-full sm:w-2/3 text-left mt-10 sm:mt-0",children:[Object(i.jsx)("p",{className:"font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7",children:e.ProjectInfo.ProjectDetailsHeading}),e.ProjectInfo.ProjectDetails.map((function(e){return Object(i.jsx)("p",{className:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light",children:e.details},e.id)}))]})]})},g=r(44);t.default=function(){return Object(i.jsx)(g.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.6,delay:.15},className:"container mx-auto mt-5 sm:mt-10",children:Object(i.jsxs)(o,{children:[Object(i.jsx)(m,{}),Object(i.jsx)(j,{}),Object(i.jsx)(b,{})]})})}}}]);
//# sourceMappingURL=8.286da0af.chunk.js.map
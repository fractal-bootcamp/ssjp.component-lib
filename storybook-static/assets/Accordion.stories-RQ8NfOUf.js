import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{r as a}from"./index-DJO9vBfz.js";/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j=(...r)=>r.filter((t,e,o)=>!!t&&o.indexOf(t)===e).join(" ");/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=a.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:e=2,absoluteStrokeWidth:o,className:c="",children:s,iconNode:m,...u},b)=>a.createElement("svg",{ref:b,...D,width:t,height:t,stroke:r,strokeWidth:o?Number(e)*24/Number(t):e,className:j("lucide",c),...u},[...m.map(([k,v])=>a.createElement(k,v)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(r,t)=>{const e=a.forwardRef(({className:o,...c},s)=>a.createElement(E,{ref:s,iconNode:t,className:j(`lucide-${C(r)}`,o),...c}));return e.displayName=`${r}`,e};/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=A("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=A("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),O=({title:r,children:t,expanded:e})=>{const[o,c]=a.useState(e),[s,m]=a.useState(e),u=s?n.jsx(L,{}):n.jsx(q,{});return n.jsxs("div",{className:"border border-sky-light rounded-md overflow-hidden w-full",children:[n.jsx("button",{className:"w-full text-left px-4 py-2 bg-sky-light",onClick:()=>{c(!o),m(!s)},children:n.jsxs("div",{className:"flex flex-row justify-between items-center",children:[n.jsx("p",{className:"text-bark-dark",children:r}),n.jsx("span",{className:"text-bark-dark",children:u})]})}),o&&n.jsx("div",{className:"px-4 py-2 text-left",children:t})]})};function p({data:r,expanded:t}){return n.jsx("div",{className:"overflow-hidden w-full",children:r.map((e,o)=>n.jsx("div",{className:"bg-bark-light rounded-md flex flex-row",children:n.jsx(O,{title:e.title,expanded:t,children:Array.isArray(e.content)?n.jsx(p,{data:e.content,expanded:t}):n.jsx("p",{className:"text-cloud",children:e.content})},o)}))})}p.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	title: string;
	content: string | AccordionDataItem[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"union",raw:"string | AccordionDataItem[]",elements:[{name:"string"},{name:"Array",elements:[{name:"AccordionDataItem"}],raw:"AccordionDataItem[]"}],required:!0}}]}}],raw:"AccordionDataItem[]"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""}}};const M={title:"Accordion",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{array:!0},expanded:{control:"boolean"}},args:{data:[{title:"Single Item 1",content:"Single Item 1 content"}],expanded:!0}},i={args:{data:[{title:"Single Item 1",content:"Single Item 1 content"}],expanded:!0}},d={args:{data:[{title:"Single Item",content:"Single Item content"},{title:"Nested Item",content:[{title:"Nested Item 1",content:"Nested Item 1 content"},{title:"Nested Item 2",content:[{title:"Nested Item 2.1",content:"Nested Item 2.1 content"},{title:"Nested Item 2.2",content:"Nested Item 2.2 content"}]},{title:"Nested Item 3",content:"Nested Item 3 content"}]},{title:"Single Item 2",content:"Single Item 2 content"}],expanded:!1}},l={args:{data:[{title:"Single Item 1",content:"Single Item 1 content"},{title:"Single Item 2",content:"Single Item 2 content"}],expanded:!0}};var g,I,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: [{
      title: "Single Item 1",
      content: "Single Item 1 content"
    }],
    expanded: true
  }
}`,...(x=(I=i.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var N,f,h;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data: [{
      title: "Single Item",
      content: "Single Item content"
    }, {
      title: "Nested Item",
      content: [{
        title: "Nested Item 1",
        content: "Nested Item 1 content"
      }, {
        title: "Nested Item 2",
        content: [{
          title: "Nested Item 2.1",
          content: "Nested Item 2.1 content"
        }, {
          title: "Nested Item 2.2",
          content: "Nested Item 2.2 content"
        }]
      }, {
        title: "Nested Item 3",
        content: "Nested Item 3 content"
      }]
    }, {
      title: "Single Item 2",
      content: "Single Item 2 content"
    }],
    expanded: false
  }
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,y,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: [{
      title: "Single Item 1",
      content: "Single Item 1 content"
    }, {
      title: "Single Item 2",
      content: "Single Item 2 content"
    }],
    expanded: true
  }
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const R=["Primary","Nested","Large"];export{l as Large,d as Nested,i as Primary,R as __namedExportsOrder,M as default};

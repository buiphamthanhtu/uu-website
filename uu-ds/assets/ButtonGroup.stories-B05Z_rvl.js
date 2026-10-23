import{j as a}from"./iframe-BYdOfVdF.js";import{B as r}from"./ButtonGroup-DdZgOcXP.js";import{S as p}from"./layout-Bjrrhjus.js";const d={title:"Component/Hành động/ButtonGroup",component:r,args:{layout:"horizontal",primary:{label:"Xác nhận"},secondary:{label:"Huỷ"}},argTypes:{layout:{control:"radio",options:["horizontal","vertical"]}},render:c=>a.jsx("div",{style:{width:352},children:a.jsx(r,{...c})})},o={},t={name:"Horizontal / Vertical / không nút phụ",parameters:{controls:{disable:!0}},render:()=>a.jsxs(p,{style:{width:352},children:[a.jsx(r,{layout:"horizontal",primary:{label:"Xác nhận"},secondary:{label:"Huỷ"}}),a.jsx(r,{layout:"vertical",primary:{label:"Xác nhận"},secondary:{label:"Huỷ"}}),a.jsx(r,{layout:"horizontal",primary:{label:"Đã hiểu"}}),a.jsx(r,{layout:"horizontal",primary:{label:"Đang gửi",state:"loading"},secondary:{label:"Huỷ",state:"disabled"}})]})};var e,l,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var s,i,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Horizontal / Vertical / không nút phụ',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack style={{
    width: 352
  }}>
      <ButtonGroup layout="horizontal" primary={{
      label: 'Xác nhận'
    }} secondary={{
      label: 'Huỷ'
    }} />
      <ButtonGroup layout="vertical" primary={{
      label: 'Xác nhận'
    }} secondary={{
      label: 'Huỷ'
    }} />
      <ButtonGroup layout="horizontal" primary={{
      label: 'Đã hiểu'
    }} />
      <ButtonGroup layout="horizontal" primary={{
      label: 'Đang gửi',
      state: 'loading'
    }} secondary={{
      label: 'Huỷ',
      state: 'disabled'
    }} />
    </Stack>
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const y=["Playground","Layouts"],g=Object.freeze(Object.defineProperty({__proto__:null,Layouts:t,Playground:o,__namedExportsOrder:y,default:d},Symbol.toStringTag,{value:"Module"}));export{o as P,g as S};

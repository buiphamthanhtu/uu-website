import{j as e}from"./iframe-DOXsB9Iw.js";import{P as o}from"./Pagination-DR4Mf4jY.js";import{R as p,C as r}from"./layout-BGqIjpay.js";const m={title:"Component/Điều hướng/Pagination",component:o,args:{position:"begin"},argTypes:{position:{control:"radio",options:["begin","middle","end"]}}},n={},i={name:"Ba vị trí",parameters:{controls:{disable:!0}},render:()=>e.jsxs(p,{children:[e.jsx(r,{label:"Begin",children:e.jsx(o,{position:"begin"})}),e.jsx(r,{label:"Middle",children:e.jsx(o,{position:"middle"})}),e.jsx(r,{label:"End",children:e.jsx(o,{position:"end"})}),e.jsx(r,{label:"Trên ảnh tối — overlay vẫn đọc được",dark:!0,children:e.jsx(o,{position:"middle"})})]})};var a,l,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var t,d,c;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Ba vị trí',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Cell label="Begin"><Pagination position="begin" /></Cell>
      <Cell label="Middle"><Pagination position="middle" /></Cell>
      <Cell label="End"><Pagination position="end" /></Cell>
      <Cell label="Trên ảnh tối — overlay vẫn đọc được" dark><Pagination position="middle" /></Cell>
    </Row>
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const g=["Playground","Positions"],x=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,Positions:i,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{n as P,x as S};

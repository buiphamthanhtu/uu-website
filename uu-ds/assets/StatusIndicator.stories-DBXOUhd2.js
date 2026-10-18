import{j as t}from"./iframe-DqdT0fUx.js";import{S as n}from"./StatusIndicator-BdXNnfQ1.js";import{S as h,R as o}from"./layout-lF1Il3_E.js";const u={title:"Component/Giao tiếp/StatusIndicator",component:n,args:{tone:"neutral",container:"none",children:"Status"},argTypes:{tone:{control:"radio",options:["neutral","success","warning","error","highlight"]},container:{control:"radio",options:["none","filled"]}}},r={},e={name:"Ma trận 5 tone × 2 container",parameters:{controls:{disable:!0}},render:()=>t.jsxs(h,{children:[t.jsxs(o,{children:[t.jsx(n,{tone:"neutral",children:"Đang chờ"}),t.jsx(n,{tone:"success",children:"Đang hoạt động"}),t.jsx(n,{tone:"warning",children:"Sắp hết hạn"}),t.jsx(n,{tone:"error",children:"Đã khoá"}),t.jsx(n,{tone:"highlight",children:"Mới"})]}),t.jsxs(o,{children:[t.jsx(n,{tone:"neutral",container:"filled",children:"Đang chờ"}),t.jsx(n,{tone:"success",container:"filled",children:"Đang hoạt động"}),t.jsx(n,{tone:"warning",container:"filled",children:"Sắp hết hạn"}),t.jsx(n,{tone:"error",container:"filled",children:"Đã khoá"}),t.jsx(n,{tone:"highlight",container:"filled",children:"Mới"})]})]})};var a,i,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Ma trận 5 tone × 2 container',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      <Row>
        <StatusIndicator tone="neutral">Đang chờ</StatusIndicator>
        <StatusIndicator tone="success">Đang hoạt động</StatusIndicator>
        <StatusIndicator tone="warning">Sắp hết hạn</StatusIndicator>
        <StatusIndicator tone="error">Đã khoá</StatusIndicator>
        <StatusIndicator tone="highlight">Mới</StatusIndicator>
      </Row>
      <Row>
        <StatusIndicator tone="neutral" container="filled">Đang chờ</StatusIndicator>
        <StatusIndicator tone="success" container="filled">Đang hoạt động</StatusIndicator>
        <StatusIndicator tone="warning" container="filled">Sắp hết hạn</StatusIndicator>
        <StatusIndicator tone="error" container="filled">Đã khoá</StatusIndicator>
        <StatusIndicator tone="highlight" container="filled">Mới</StatusIndicator>
      </Row>
    </Stack>
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const S=["Playground","Matrix"],I=Object.freeze(Object.defineProperty({__proto__:null,Matrix:e,Playground:r,__namedExportsOrder:S,default:u},Symbol.toStringTag,{value:"Module"}));export{r as P,I as S};

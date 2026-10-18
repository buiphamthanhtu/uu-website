import{j as t}from"./iframe-C4b24c-y.js";import{S as n}from"./StatusIndicator-BH8inLBb.js";import{S as u,R as o}from"./layout-Dr6JVIPl.js";const S={title:"Component/Giao tiếp/StatusIndicator",component:n,args:{tone:"neutral",container:"none",children:"Status"},argTypes:{tone:{control:"radio",options:["neutral","success","warning","error"]},container:{control:"radio",options:["none","filled"]}}},r={},e={name:"Ma trận 4 tone × 2 container",parameters:{controls:{disable:!0}},render:()=>t.jsxs(u,{children:[t.jsxs(o,{children:[t.jsx(n,{tone:"neutral",children:"Đang chờ"}),t.jsx(n,{tone:"success",children:"Đang hoạt động"}),t.jsx(n,{tone:"warning",children:"Sắp hết hạn"}),t.jsx(n,{tone:"error",children:"Đã khoá"})]}),t.jsxs(o,{children:[t.jsx(n,{tone:"neutral",container:"filled",children:"Đang chờ"}),t.jsx(n,{tone:"success",container:"filled",children:"Đang hoạt động"}),t.jsx(n,{tone:"warning",container:"filled",children:"Sắp hết hạn"}),t.jsx(n,{tone:"error",container:"filled",children:"Đã khoá"})]})]})};var a,s,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,d,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Ma trận 4 tone × 2 container',
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
      </Row>
      <Row>
        <StatusIndicator tone="neutral" container="filled">Đang chờ</StatusIndicator>
        <StatusIndicator tone="success" container="filled">Đang hoạt động</StatusIndicator>
        <StatusIndicator tone="warning" container="filled">Sắp hết hạn</StatusIndicator>
        <StatusIndicator tone="error" container="filled">Đã khoá</StatusIndicator>
      </Row>
    </Stack>
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const h=["Playground","Matrix"],I=Object.freeze(Object.defineProperty({__proto__:null,Matrix:e,Playground:r,__namedExportsOrder:h,default:S},Symbol.toStringTag,{value:"Module"}));export{r as P,I as S};

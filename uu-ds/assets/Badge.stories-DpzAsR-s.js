import{j as e}from"./iframe-BYdOfVdF.js";import{B as r}from"./Badge-CvWiVVwO.js";import{R as l}from"./layout-Bjrrhjus.js";const p={title:"Component/Giao tiếp/Badge",component:r,args:{tone:"neutral",children:"Label"},argTypes:{tone:{control:"radio",options:["neutral","success","warning","error"]}}},o={},a={name:"4 tone",parameters:{controls:{disable:!0}},render:()=>e.jsxs(l,{children:[e.jsx(r,{tone:"neutral",children:"Mới"}),e.jsx(r,{tone:"success",children:"Đã giao"}),e.jsx(r,{tone:"warning",children:"Sắp hết hạn"}),e.jsx(r,{tone:"error",children:"Đã huỷ"})]})};var t,n,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,d,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '4 tone',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Badge tone="neutral">Mới</Badge>
      <Badge tone="success">Đã giao</Badge>
      <Badge tone="warning">Sắp hết hạn</Badge>
      <Badge tone="error">Đã huỷ</Badge>
    </Row>
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const m=["Playground","Tones"],B=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,Tones:a,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{o as P,B as S};

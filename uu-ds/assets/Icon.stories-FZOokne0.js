import{I as a,j as e,R as m,C as r}from"./iframe-CcRfAzR2.js";import"./preload-helper-Dp1pzeXC.js";const u={title:"Kiểu/Icon/Icon",component:a,args:{name:"texture",variant:"outline",size:24},argTypes:{variant:{control:"radio",options:["outline","fill"]},size:{control:"radio",options:[16,18,20,24]}}},n={},t={name:"Hộp 16 / 24 và nét thật",parameters:{controls:{disable:!0}},render:()=>e.jsxs(m,{children:[e.jsx(r,{label:"xmark · hộp 24 (nét ≈15px)",children:e.jsx("span",{style:{outline:"1px dashed var(--border)"},children:e.jsx(a,{name:"xmark",size:24})})}),e.jsx(r,{label:"xmark · hộp 16 (nét ≈10px)",children:e.jsx("span",{style:{outline:"1px dashed var(--border)"},children:e.jsx(a,{name:"xmark",size:16})})}),e.jsx(r,{label:"outline",children:e.jsx(a,{name:"texture",variant:"outline"})}),e.jsx(r,{label:"fill = trạng thái bật",children:e.jsx(a,{name:"texture",variant:"fill"})}),e.jsx(r,{label:"màu theo object-interactive",children:e.jsx("span",{style:{color:"var(--object-interactive)"},children:e.jsx(a,{name:"texture",variant:"fill"})})}),e.jsx(r,{label:"tên không có trong thư viện",children:e.jsx(a,{name:"khong-co-icon-nay"})})]})};var l,o,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,c,x;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Hộp 16 / 24 và nét thật',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Cell label="xmark · hộp 24 (nét ≈15px)"><span style={{
        outline: '1px dashed var(--border)'
      }}><Icon name="xmark" size={24} /></span></Cell>
      <Cell label="xmark · hộp 16 (nét ≈10px)"><span style={{
        outline: '1px dashed var(--border)'
      }}><Icon name="xmark" size={16} /></span></Cell>
      <Cell label="outline"><Icon name="texture" variant="outline" /></Cell>
      <Cell label="fill = trạng thái bật"><Icon name="texture" variant="fill" /></Cell>
      <Cell label="màu theo object-interactive"><span style={{
        color: 'var(--object-interactive)'
      }}><Icon name="texture" variant="fill" /></span></Cell>
      <Cell label="tên không có trong thư viện"><Icon name="khong-co-icon-nay" /></Cell>
    </Row>
}`,...(x=(c=t.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};const h=["Playground","Sizes"];export{n as Playground,t as Sizes,h as __namedExportsOrder,u as default};

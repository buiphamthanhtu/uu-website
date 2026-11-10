import{I as a,j as e}from"./iframe-C03HAbOn.js";import{R as p,C as r}from"./layout-ClHXEoeK.js";import"./preload-helper-Dp1pzeXC.js";const h={title:"Kiểu/Icon/Icon",component:a,args:{name:"texture",variant:"outline",size:24},argTypes:{variant:{control:"radio",options:["outline","fill"]},size:{control:"radio",options:[16,18,20,24]}}},t={},n={name:"Hộp 16 / 24 và nét thật",parameters:{controls:{disable:!0}},render:()=>e.jsxs(p,{children:[e.jsx(r,{label:"xmark · hộp 24 (nét ≈15px)",children:e.jsx("span",{style:{outline:"1px dashed var(--border)"},children:e.jsx(a,{name:"xmark",size:24})})}),e.jsx(r,{label:"xmark · hộp 16 (nét ≈10px)",children:e.jsx("span",{style:{outline:"1px dashed var(--border)"},children:e.jsx(a,{name:"xmark",size:16})})}),e.jsx(r,{label:"outline",children:e.jsx(a,{name:"texture",variant:"outline"})}),e.jsx(r,{label:"fill = trạng thái bật",children:e.jsx(a,{name:"texture",variant:"fill"})}),e.jsx(r,{label:"màu theo object-interactive",children:e.jsx("span",{style:{color:"var(--object-interactive)"},children:e.jsx(a,{name:"texture",variant:"fill"})})}),e.jsx(r,{label:"tên không có trong thư viện",children:e.jsx(a,{name:"khong-co-icon-nay"})})]})};var l,o,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const b=["Playground","Sizes"];export{t as Playground,n as Sizes,b as __namedExportsOrder,h as default};

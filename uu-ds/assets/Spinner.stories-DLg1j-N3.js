import{S as a,j as e,T as s,d as v}from"./iframe-6vwN6wb9.js";import{R as y,C as o}from"./layout-nPJ89kCs.js";const S={title:"Component/Giao tiếp/Spinner",component:a},r={render:h=>e.jsx("span",{style:{color:"var(--object-primary)"},children:e.jsx(a,{...h})})},n={name:".loading 18×18",render:()=>e.jsxs(y,{children:[e.jsx(o,{label:"object-primary",children:e.jsx("span",{style:{color:"var(--object-primary)"},children:e.jsx(a,{})})}),e.jsx(o,{label:"object-interactive",children:e.jsx("span",{style:{color:"var(--object-interactive)"},children:e.jsx(a,{})})}),e.jsx(o,{label:"object-on-interactive",dark:!0,children:e.jsx("span",{style:{color:"var(--object-on-dark)"},children:e.jsx(a,{})})})]})},t={name:"Trong nút (State=Loading)",render:()=>e.jsxs(y,{children:[e.jsx(s,{state:"loading",children:"Đang gửi mã"}),e.jsx(s,{type:"outline",state:"loading",children:"Đang lưu"}),e.jsx(v,{type:"ghost",state:"loading",children:"Đang tải"})]})};var l,c,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <span style={{
    color: 'var(--object-primary)'
  }}><Spinner {...args} /></span>
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,p,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '.loading 18×18',
  render: () => <Row>
      <Cell label="object-primary"><span style={{
        color: 'var(--object-primary)'
      }}><Spinner /></span></Cell>
      <Cell label="object-interactive"><span style={{
        color: 'var(--object-interactive)'
      }}><Spinner /></span></Cell>
      <Cell label="object-on-interactive" dark><span style={{
        color: 'var(--object-on-dark)'
      }}><Spinner /></span></Cell>
    </Row>
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,j,x,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Trong nút (State=Loading)',
  render: () => <Row>
      <TextButtonAccent state="loading">Đang gửi mã</TextButtonAccent>
      <TextButtonAccent type="outline" state="loading">Đang lưu</TextButtonAccent>
      <TextButtonNeutral type="ghost" state="loading">Đang tải</TextButtonNeutral>
    </Row>
}`,...(j=(u=t.parameters)==null?void 0:u.docs)==null?void 0:j.source},description:{story:"Chỗ dùng chính: `State=Loading` của button — spinner đứng trước label, khe 8, label vẫn hiện.",...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.description}}};const T=["Playground","Loading","InButton"],R=Object.freeze(Object.defineProperty({__proto__:null,InButton:t,Loading:n,Playground:r,__namedExportsOrder:T,default:S},Symbol.toStringTag,{value:"Module"}));export{t as I,n as L,r as P,R as S};

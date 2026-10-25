import{j as e,r as m,d as w}from"./iframe-6vwN6wb9.js";import{P as l}from"./Popover-BzmQmVHo.js";import{T as A}from"./TextInput-Bbz922PW.js";import{R as E,C as z}from"./layout-nPJ89kCs.js";const N=()=>e.jsx("p",{className:"uu-text-body",style:{margin:0,color:"var(--object-secondary)"},children:"Tên hiển thị trên thẻ và trong lịch sử giao dịch."}),S={primary:{label:"Lưu"},secondary:{label:"Huỷ"}},_={title:"Component/Chứa đựng/Popover",component:l,args:{title:"Đổi tên thẻ",header:!0,footer:S},argTypes:{onClose:{action:"close"},footer:{control:!1},open:{control:!1},anchorRef:{control:!1}},render:r=>e.jsx(l,{...r,children:e.jsx(A,{label:"Tên thẻ",defaultValue:"Thẻ đi chợ"})})},n={},a={name:"Header × Footer",parameters:{controls:{disable:!0}},render:()=>e.jsx(E,{align:"flex-start",style:{flexWrap:"wrap",gap:"var(--gap-6)"},children:[!0,!1].map(r=>[!0,!1].map(t=>e.jsx(z,{label:`Header=${r?"True":"False"}, Footer=${t?"True":"False"}`,children:e.jsx(l,{title:"Đổi tên thẻ",header:r,footer:t?S:!1,children:e.jsx(N,{})})},`${r}-${t}`)))})};function c({label:r}){const[t,p]=m.useState(!1),d=m.useRef(null),i=()=>p(!1);return e.jsxs(e.Fragment,{children:[e.jsx(w,{ref:d,type:"outline",size:"small","aria-expanded":t,"aria-haspopup":"dialog",onClick:()=>p($=>!$),children:r}),e.jsx(l,{open:t,onClose:i,anchorRef:d,title:"Đổi tên thẻ",footer:{primary:{label:"Lưu",onClick:i},secondary:{label:"Huỷ",onClick:i}},children:e.jsx(A,{label:"Tên thẻ",defaultValue:"Thẻ đi chợ"})})]})}const o={name:"Neo vào nút",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{minHeight:"var(--size-80)"},children:e.jsx(c,{label:"Đổi tên"})})},s={name:"Tự lật khi sát mép",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",minHeight:"var(--size-24)"},children:[e.jsx(c,{label:"Mép trái"}),e.jsx(c,{label:"Mép phải"})]})};var u,h,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,x,b,y,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Header × Footer',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start" style={{
    flexWrap: 'wrap',
    gap: 'var(--gap-6)'
  }}>
      {[true, false].map(header => [true, false].map(footer => <Cell key={\`\${header}-\${footer}\`} label={\`Header=\${header ? 'True' : 'False'}, Footer=\${footer ? 'True' : 'False'}\`}>
          <Popover title="Đổi tên thẻ" header={header} footer={footer ? FOOTER : false}><Body /></Popover>
        </Cell>))}
    </Row>
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source},description:{story:"1 variant; `Header` và `Footer` là BOOLEAN — bốn tổ hợp bật / tắt.",...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var j,T,F,C,H;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Neo vào nút',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    minHeight: 'var(--size-80)'
  }}>
      <AnchoredDemo label="Đổi tên" />
    </div>
}`,...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.source},description:{story:"Mở bằng bấm; đóng bằng nút đóng, Esc, hoặc bấm ra ngoài. Khung neo dưới nút, canh mép trái, cách 8.",...(H=(C=o.parameters)==null?void 0:C.docs)==null?void 0:H.description}}};var k,O,P,R,M;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Tự lật khi sát mép',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    minHeight: 'var(--size-24)'
  }}>
      <AnchoredDemo label="Mép trái" />
      <AnchoredDemo label="Mép phải" />
    </div>
}`,...(P=(O=s.parameters)==null?void 0:O.docs)==null?void 0:P.source},description:{story:`Nút sát mép phải: khung canh mép phải với nút. Cuộn trang cho nút xuống sát đáy cửa sổ rồi mở: khung lật lên trên.
Popover đo lại khi cuộn và khi đổi cỡ cửa sổ.`,...(M=(R=s.parameters)==null?void 0:R.docs)==null?void 0:M.description}}};const B=["Playground","Matrix","Anchored","Flip"],W=Object.freeze(Object.defineProperty({__proto__:null,Anchored:o,Flip:s,Matrix:a,Playground:n,__namedExportsOrder:B,default:_},Symbol.toStringTag,{value:"Module"}));export{o as A,s as F,a as M,n as P,W as S};

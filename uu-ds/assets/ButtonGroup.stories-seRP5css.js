import{j as a,S as x,F as f,R as j,C as z,g as S}from"./iframe-B9x1_Cao.js";import{B as r}from"./ButtonGroup-Cai2nt9D.js";const L={parameters:{scrollX:!0},title:"Component/Hành động/ButtonGroup",component:r,args:{layout:"horizontal",tone:"default",primary:{label:"Xác nhận"},secondary:{label:"Huỷ"}},argTypes:{layout:{control:"radio",options:["horizontal","vertical"]},tone:{control:"radio",options:["default","danger"]}},render:e=>a.jsx("div",{style:{width:352,maxWidth:f},children:a.jsx(r,{...e})})},o={},t={name:"Layout × Tone",parameters:{controls:{disable:!0}},render:()=>a.jsx(j,{align:"flex-start",children:["default","danger"].map(e=>a.jsx(x,{children:["horizontal","vertical"].map(l=>a.jsx(z,{label:`Layout=${l==="horizontal"?"Horizontal":"Vertical"} · Tone=${e==="default"?"Default":"Danger"}`,children:a.jsx("div",{style:{width:352,maxWidth:S},children:a.jsx(r,{layout:l,tone:e,primary:{label:e==="danger"?"Xoá đơn":"Xác nhận"},secondary:{label:e==="danger"?"Giữ lại":"Huỷ"}})})},l))},e))})},n={name:"Không nút phụ · đang gửi",parameters:{controls:{disable:!0}},render:()=>a.jsxs(x,{style:{width:352,maxWidth:f},children:[a.jsx(r,{layout:"horizontal",primary:{label:"Đã hiểu"}}),a.jsx(r,{layout:"horizontal",primary:{label:"Đang gửi",state:"loading"},secondary:{label:"Huỷ",state:"disabled"}}),a.jsx(r,{layout:"horizontal",tone:"danger",primary:{label:"Đang xoá",state:"loading"},secondary:{label:"Giữ lại",state:"disabled"}})]})};var s,i,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,c,p,m,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Layout × Tone',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      {(['default', 'danger'] as const).map(tone => <Stack key={tone}>
          {(['horizontal', 'vertical'] as const).map(layout => <Cell key={layout} label={\`Layout=\${layout === 'horizontal' ? 'Horizontal' : 'Vertical'} · Tone=\${tone === 'default' ? 'Default' : 'Danger'}\`}>
              <div style={{
          width: 352,
          maxWidth: FIT_CELL
        }}>
                <ButtonGroup layout={layout} tone={tone} primary={{
            label: tone === 'danger' ? 'Xoá đơn' : 'Xác nhận'
          }} secondary={{
            label: tone === 'danger' ? 'Giữ lại' : 'Huỷ'
          }} />
              </div>
            </Cell>)}
        </Stack>)}
    </Row>
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"Ma trận 4 variant: Layout × Tone (Secondary button bật).",...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.description}}};var g,h,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Không nút phụ · đang gửi',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack style={{
    width: 352,
    maxWidth: FIT
  }}>
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
      <ButtonGroup layout="horizontal" tone="danger" primary={{
      label: 'Đang xoá',
      state: 'loading'
    }} secondary={{
      label: 'Giữ lại',
      state: 'disabled'
    }} />
    </Stack>
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const T=["Playground","Matrix","Layouts"],w=Object.freeze(Object.defineProperty({__proto__:null,Layouts:n,Matrix:t,Playground:o,__namedExportsOrder:T,default:L},Symbol.toStringTag,{value:"Module"}));export{n as L,t as M,o as P,w as S};

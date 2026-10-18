import{r as c,j as e,d as F}from"./iframe-gn_pzB68.js";import{P as s}from"./Popover-BUTVEtR5.js";import{T as C}from"./TextInput-Cl8pq38J.js";import{R as H,C as P}from"./layout-whGn3D85.js";const k=()=>e.jsx("p",{className:"uu-text-body",style:{margin:0,color:"var(--object-secondary)"},children:"Tên hiển thị trên thẻ và trong lịch sử giao dịch."}),O={primary:{label:"Lưu"},secondary:{label:"Huỷ"}},E={title:"Component/Chứa đựng/Popover",component:s,args:{title:"Đổi tên thẻ",header:!0,footer:O},argTypes:{onClose:{action:"close"},footer:{control:!1},open:{control:!1},anchorRef:{control:!1}},render:r=>e.jsx(s,{...r,children:e.jsx(C,{label:"Tên thẻ",defaultValue:"Thẻ đi chợ"})})},n={},t={name:"Header × Footer",parameters:{controls:{disable:!0}},render:()=>e.jsx(H,{align:"flex-start",style:{flexWrap:"wrap",gap:"var(--gap-6)"},children:[!0,!1].map(r=>[!0,!1].map(o=>e.jsx(P,{label:`Header=${r?"True":"False"}, Footer=${o?"True":"False"}`,children:e.jsx(s,{title:"Đổi tên thẻ",header:r,footer:o?O:!1,children:e.jsx(k,{})})},`${r}-${o}`)))})},a={name:"Neo vào nút",parameters:{controls:{disable:!0}},render:()=>{const[r,o]=c.useState(!1),i=c.useRef(null),l=()=>o(!1);return e.jsx("div",{style:{minHeight:"var(--size-72)"},children:e.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[e.jsx(F,{ref:i,type:"outline",size:"small","aria-expanded":r,"aria-haspopup":"dialog",onClick:()=>o(R=>!R),children:"Đổi tên"}),e.jsx("div",{style:{position:"absolute",top:"calc(100% + var(--gap-2))",left:0,zIndex:10},children:e.jsx(s,{open:r,onClose:l,anchorRef:i,title:"Đổi tên thẻ",footer:{primary:{label:"Lưu",onClick:l},secondary:{label:"Huỷ",onClick:l}},children:e.jsx(C,{label:"Tên thẻ",defaultValue:"Thẻ đi chợ"})})})]})})}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,h,f,x,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:"1 variant; `Header` và `Footer` là BOOLEAN — bốn tổ hợp bật / tắt.",...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var b,g,v,T,j;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Neo vào nút',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const anchor = useRef<HTMLButtonElement>(null);
    const close = () => setOpen(false);
    return <div style={{
      minHeight: 'var(--size-72)'
    }}>
        <div style={{
        position: 'relative',
        display: 'inline-block'
      }}>
          <TextButtonNeutral ref={anchor} type="outline" size="small" aria-expanded={open} aria-haspopup="dialog" onClick={() => setOpen(o => !o)}>
            Đổi tên
          </TextButtonNeutral>
          <div style={{
          position: 'absolute',
          top: 'calc(100% + var(--gap-2))',
          left: 0,
          zIndex: 10
        }}>
            <Popover open={open} onClose={close} anchorRef={anchor} title="Đổi tên thẻ" footer={{
            primary: {
              label: 'Lưu',
              onClick: close
            },
            secondary: {
              label: 'Huỷ',
              onClick: close
            }
          }}>
              <TextInput label="Tên thẻ" defaultValue="Thẻ đi chợ" />
            </Popover>
          </div>
        </div>
      </div>;
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:"Mở bằng bấm; đóng bằng nút đóng, Esc, hoặc bấm ra ngoài. Vị trí neo do màn tự đặt.",...(j=(T=a.parameters)==null?void 0:T.docs)==null?void 0:j.description}}};const S=["Playground","Matrix","Anchored"],_=Object.freeze(Object.defineProperty({__proto__:null,Anchored:a,Matrix:t,Playground:n,__namedExportsOrder:S,default:E},Symbol.toStringTag,{value:"Module"}));export{n as P,_ as S};

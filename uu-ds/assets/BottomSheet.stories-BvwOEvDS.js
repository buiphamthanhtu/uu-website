import{r as c,j as e,T as f}from"./iframe-C2B6W1mr.js";import{C as l,B as y}from"./BottomSheet-oQWNz4Rx.js";import{R as j}from"./Radio-BgVOaVOp.js";import{P as N}from"./layout-BwDKuDyv.js";const T={title:"Component/Chứa đựng/BottomSheet",component:l,args:{header:"Header",cta:{primary:{label:"Xác nhận"},secondary:{label:"Huỷ"}}},argTypes:{onClose:{action:"close"},onBack:{action:"back"}},render:o=>e.jsx("div",{style:{width:366},children:e.jsx(l,{...o,children:e.jsx("p",{className:"uu-text-body",style:{margin:0},children:"Nội dung đặt vào Slot."})})})},a={name:"CardSheet · Navigation=Close",args:{onBack:void 0}},n={name:"CardSheet · Navigation=Back",args:{header:"Chọn ngân hàng",onBack:()=>{}}},t={name:"CTA=false",args:{cta:!1,onBack:void 0}},r={name:"Sheet trên màn hình (scrim + blur)",parameters:{controls:{disable:!0}},render:()=>{const[o,s]=c.useState(!0),[B,x]=c.useState("a");return e.jsxs(N,{height:720,children:[e.jsxs("div",{style:{padding:"var(--gap-4)"},children:[e.jsx("p",{className:"uu-text-body",children:"Nền màn hình vẫn đọc được qua scrim đen 10% + blur 16."}),e.jsx(f,{onClick:()=>s(!0),children:"Mở sheet"})]}),e.jsx(y,{open:o,onClose:()=>s(!1),header:"Xoá tài khoản",cta:{primary:{label:"Xoá tài khoản"},secondary:{label:"Huỷ",onClick:()=>s(!1)}},children:e.jsx(j,{"aria-label":"Lý do",value:B,onChange:x,options:[{value:"a",label:"Tôi không còn nhu cầu sử dụng"},{value:"b",label:"Ứng dụng khó dùng"},{value:"c",label:"Lý do khác"}]})})]})}};var i,d,h;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'CardSheet · Navigation=Close',
  args: {
    onBack: undefined
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'CardSheet · Navigation=Back',
  args: {
    header: 'Chọn ngân hàng',
    onBack: () => {}
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,b,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'CTA=false',
  args: {
    cta: false,
    onBack: undefined
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var k,C,S;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Sheet trên màn hình (scrim + blur)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    const [v, setV] = useState('a');
    return <PhoneFrame height={720}>
        <div style={{
        padding: 'var(--gap-4)'
      }}>
          <p className="uu-text-body">Nền màn hình vẫn đọc được qua scrim đen 10% + blur 16.</p>
          <TextButtonAccent onClick={() => setOpen(true)}>Mở sheet</TextButtonAccent>
        </div>
        <BottomSheet open={open} onClose={() => setOpen(false)} header="Xoá tài khoản" cta={{
        primary: {
          label: 'Xoá tài khoản'
        },
        secondary: {
          label: 'Huỷ',
          onClick: () => setOpen(false)
        }
      }}>
          <RadioList aria-label="Lý do" value={v} onChange={setV} options={[{
          value: 'a',
          label: 'Tôi không còn nhu cầu sử dụng'
        }, {
          value: 'b',
          label: 'Ứng dụng khó dùng'
        }, {
          value: 'c',
          label: 'Lý do khác'
        }]} />
        </BottomSheet>
      </PhoneFrame>;
  }
}`,...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const O=["Base","Back","NoCta","InScreen"],X=Object.freeze(Object.defineProperty({__proto__:null,Back:n,Base:a,InScreen:r,NoCta:t,__namedExportsOrder:O,default:T},Symbol.toStringTag,{value:"Module"}));export{a as B,X as S};

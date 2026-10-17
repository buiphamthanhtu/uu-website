import{r as o,j as e,T as S}from"./iframe-B79aK45l.js";import{B as l,a as y}from"./BottomSheet-qWdkID7Z.js";import{R as f}from"./Radio-BAQ9ZMw9.js";import{P as C}from"./layout-DfDgT8VD.js";const k={title:"Component/Chứa đựng/BottomSheet",component:l,args:{header:"Header",cta:{primary:{label:"Xác nhận"},secondary:{label:"Huỷ"}}},argTypes:{onClose:{action:"close"}},render:s=>e.jsx("div",{style:{width:366},children:e.jsx(l,{...s,children:e.jsx("p",{className:"uu-text-body",style:{margin:0},children:"Nội dung đặt vào Slot."})})})},a={name:".base/sheet"},t={name:"CTA=false",args:{cta:!1}},n={name:"Sheet trên màn hình (scrim + blur)",parameters:{controls:{disable:!0}},render:()=>{const[s,r]=o.useState(!0),[v,x]=o.useState("a");return e.jsxs(C,{height:720,children:[e.jsxs("div",{style:{padding:"var(--gap-4)"},children:[e.jsx("p",{className:"uu-text-body",children:"Nền màn hình vẫn đọc được qua scrim đen 10% + blur 16."}),e.jsx(S,{onClick:()=>r(!0),children:"Mở sheet"})]}),e.jsx(y,{open:s,onClose:()=>r(!1),header:"Xoá tài khoản",cta:{primary:{label:"Xoá tài khoản"},secondary:{label:"Huỷ",onClick:()=>r(!1)}},children:e.jsx(f,{"aria-label":"Lý do",value:v,onChange:x,options:[{value:"a",label:"Tôi không còn nhu cầu sử dụng"},{value:"b",label:"Ứng dụng khó dùng"},{value:"c",label:"Lý do khác"}]})})]})}};var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '.base/sheet'
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,m,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'CTA=false',
  args: {
    cta: false
  }
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,b,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const j=["Base","NoCta","InScreen"],L=Object.freeze(Object.defineProperty({__proto__:null,Base:a,InScreen:n,NoCta:t,__namedExportsOrder:j,default:k},Symbol.toStringTag,{value:"Module"}));export{a as B,L as S};

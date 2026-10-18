import{r as j,j as e,T as v}from"./iframe-C4b24c-y.js";import{B as l,D as B}from"./Dialog-CSqWelrq.js";import{P as S}from"./layout-Dr6JVIPl.js";const C=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--gap-2)"},children:[e.jsx("h2",{style:{margin:0,font:"var(--font-weight-semibold) var(--font-size-lg)/var(--font-height-lg) var(--font-family-body)"},children:"Huỷ đơn hàng?"}),e.jsx("p",{className:"uu-text-body",style:{margin:0,color:"var(--object-secondary)"},children:"Đơn hàng đã huỷ không thể khôi phục."})]}),D={title:"Component/Chứa đựng/Dialog",component:l,args:{closeButton:!0,buttonGroup:{primary:{label:"Đã hiểu"}},standalone:!0,"aria-label":"Huỷ đơn hàng"},argTypes:{onClose:{action:"close"}},render:s=>e.jsx(l,{...s,children:e.jsx(C,{})})},n={name:".base/dialog"},a={name:"Có nút phụ",args:{buttonGroup:{primary:{label:"Huỷ đơn"},secondary:{label:"Giữ lại"}}}},r={name:"Close button=false",args:{closeButton:!1}},o={name:"Dialog trên màn hình (căn giữa)",parameters:{controls:{disable:!0}},render:()=>{const[s,t]=j.useState(!0);return e.jsxs(S,{height:720,children:[e.jsx("div",{style:{padding:"var(--gap-4)"},children:e.jsx(v,{onClick:()=>t(!0),children:"Mở dialog"})}),e.jsx(B,{open:s,onClose:()=>t(!1),"aria-label":"Huỷ đơn hàng",buttonGroup:{primary:{label:"Huỷ đơn",onClick:()=>t(!1)},secondary:{label:"Giữ lại",onClick:()=>t(!1)}},children:e.jsx(C,{})})]})}};var i,c,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '.base/dialog'
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Có nút phụ',
  args: {
    buttonGroup: {
      primary: {
        label: 'Huỷ đơn'
      },
      secondary: {
        label: 'Giữ lại'
      }
    }
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,h,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Close button=false',
  args: {
    closeButton: false
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,y,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Dialog trên màn hình (căn giữa)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return <PhoneFrame height={720}>
        <div style={{
        padding: 'var(--gap-4)'
      }}>
          <TextButtonAccent onClick={() => setOpen(true)}>Mở dialog</TextButtonAccent>
        </div>
        <Dialog open={open} onClose={() => setOpen(false)} aria-label="Huỷ đơn hàng" buttonGroup={{
        primary: {
          label: 'Huỷ đơn',
          onClick: () => setOpen(false)
        },
        secondary: {
          label: 'Giữ lại',
          onClick: () => setOpen(false)
        }
      }}>
          <Content />
        </Dialog>
      </PhoneFrame>;
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const G=["Base","TwoButtons","NoClose","InScreen"],T=Object.freeze(Object.defineProperty({__proto__:null,Base:n,InScreen:o,NoClose:r,TwoButtons:a,__namedExportsOrder:G,default:D},Symbol.toStringTag,{value:"Module"}));export{n as B,T as S};

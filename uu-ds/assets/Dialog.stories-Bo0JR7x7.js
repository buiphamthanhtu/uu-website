import{r as E,j as e,T as _}from"./iframe-6vwN6wb9.js";import{C as u,D as q}from"./Dialog-tjliKjBx.js";import{P as F,R as I,C as X}from"./layout-nPJ89kCs.js";const A={src:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9" preserveAspectRatio="none"><rect width="16" height="9" fill-opacity="0.08"/><rect x="5" y="2" width="6" height="5" rx="1" fill-opacity="0.12"/></svg>'),alt:"Hộp quà ưu đãi tháng 10"},p=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--gap-2)"},children:[e.jsx("h2",{style:{margin:0,font:"var(--font-weight-semibold) var(--font-size-lg)/var(--font-height-lg) var(--font-family-body)"},children:"Huỷ đơn hàng?"}),e.jsx("p",{className:"uu-text-body",style:{margin:0,color:"var(--object-secondary)"},children:"Đơn hàng đã huỷ không thể khôi phục."})]}),z={title:"Component/Chứa đựng/Dialog",component:u,args:{closeButton:!0,buttonGroup:{primary:{label:"Đã hiểu"}},standalone:!0,"aria-label":"Huỷ đơn hàng"},argTypes:{onClose:{action:"close"}},render:n=>e.jsx(u,{...n,children:e.jsx(p,{})})},o={name:"CardDialog"},r={name:"Ma trận Banner × Close button",parameters:{controls:{disable:!0}},render:()=>e.jsx(I,{align:"flex-start",children:[!1,!0].map(n=>[!0,!1].map(a=>e.jsx(X,{label:`Banner=${n?"True":"False"}, Close button=${a?"true":"false"}`,children:e.jsx(u,{standalone:!0,banner:n?A:void 0,closeButton:a,"aria-label":"Huỷ đơn hàng",buttonGroup:{primary:{label:"Đã hiểu"}},children:e.jsx(p,{})})},`${n}-${a}`)))})},s={name:"Banner=True",args:{banner:A,"aria-label":"Ưu đãi tháng 10",buttonGroup:{primary:{label:"Nhận quà"}}},render:n=>e.jsx(u,{...n,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--gap-2)"},children:[e.jsx("h2",{className:"text-heading-sm",style:{margin:0,color:"var(--object-primary)"},children:"Bạn có một phần quà"}),e.jsx("p",{className:"text-body",style:{margin:0,color:"var(--object-secondary)"},children:"Nhận ngay mã giảm 50.000 ₫ cho đơn đầu tiên trong tháng."})]})})},l={name:"Có nút phụ",args:{buttonGroup:{primary:{label:"Huỷ đơn"},secondary:{label:"Giữ lại"}}}},i={name:"Close button=false",args:{closeButton:!1}},t={name:"Xác nhận phá huỷ",args:{buttonGroup:{tone:"danger",primary:{label:"Huỷ đơn"},secondary:{label:"Giữ lại"}}}},c={name:"Dialog trên màn hình (căn giữa)",parameters:{controls:{disable:!0}},render:()=>{const[n,a]=E.useState(!0);return e.jsxs(F,{height:720,children:[e.jsx("div",{style:{padding:"var(--gap-4)"},children:e.jsx(_,{onClick:()=>a(!0),children:"Mở dialog"})}),e.jsx(q,{open:n,onClose:()=>a(!1),"aria-label":"Huỷ đơn hàng",buttonGroup:{primary:{label:"Huỷ đơn",onClick:()=>a(!1)},secondary:{label:"Giữ lại",onClick:()=>a(!1)}},children:e.jsx(p,{})})]})}};var d,m,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'CardDialog'
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,b,y,x,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Ma trận Banner × Close button',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      {[false, true].map(banner => [true, false].map(close => <Cell key={\`\${banner}-\${close}\`} label={\`Banner=\${banner ? 'True' : 'False'}, Close button=\${close ? 'true' : 'false'}\`}>
          <CardDialog standalone banner={banner ? BANNER : undefined} closeButton={close} aria-label="Huỷ đơn hàng" buttonGroup={{
        primary: {
          label: 'Đã hiểu'
        }
      }}><Content /></CardDialog>
        </Cell>))}
    </Row>
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"2 variant `Banner` × `Close button`.",...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var C,v,j;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Banner=True',
  args: {
    banner: BANNER,
    'aria-label': 'Ưu đãi tháng 10',
    buttonGroup: {
      primary: {
        label: 'Nhận quà'
      }
    }
  },
  render: args => <CardDialog {...args}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-2)'
    }}>
        <h2 className="text-heading-sm" style={{
        margin: 0,
        color: 'var(--object-primary)'
      }}>Bạn có một phần quà</h2>
        <p className="text-body" style={{
        margin: 0,
        color: 'var(--object-secondary)'
      }}>Nhận ngay mã giảm 50.000 ₫ cho đơn đầu tiên trong tháng.</p>
      </div>
    </CardDialog>
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var B,D,G;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(G=(D=l.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var N,S,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Close button=false',
  args: {
    closeButton: false
  }
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,H,R,k,O;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Xác nhận phá huỷ',
  args: {
    buttonGroup: {
      tone: 'danger',
      primary: {
        label: 'Huỷ đơn'
      },
      secondary: {
        label: 'Giữ lại'
      }
    }
  }
}`,...(R=(H=t.parameters)==null?void 0:H.docs)==null?void 0:R.source},description:{story:"Xác nhận hành động phá huỷ: ButtonGroup `Tone=Danger` — nút chính TextButtonDanger Solid.",...(O=(k=t.parameters)==null?void 0:k.docs)==null?void 0:O.description}}};var M,P,$;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(P=c.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const W=["Playground","Matrix","WithBanner","TwoButtons","NoClose","Danger","InScreen"],L=Object.freeze(Object.defineProperty({__proto__:null,Danger:t,InScreen:c,Matrix:r,NoClose:i,Playground:o,TwoButtons:l,WithBanner:s,__namedExportsOrder:W,default:z},Symbol.toStringTag,{value:"Module"}));export{t as D,c as I,r as M,o as P,L as S};

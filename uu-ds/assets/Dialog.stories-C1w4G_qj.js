import{r as k,j as e,T as O}from"./iframe-PRPlo7RZ.js";import{C as c,D as P}from"./Dialog-sBBlidBm.js";import{P as $,R as A,C as M}from"./layout-C7vjRdIo.js";const R={src:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9" preserveAspectRatio="none"><rect width="16" height="9" fill-opacity="0.08"/><rect x="5" y="2" width="6" height="5" rx="1" fill-opacity="0.12"/></svg>'),alt:"Hộp quà ưu đãi tháng 10"},u=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--gap-2)"},children:[e.jsx("h2",{style:{margin:0,font:"var(--font-weight-semibold) var(--font-size-lg)/var(--font-height-lg) var(--font-family-body)"},children:"Huỷ đơn hàng?"}),e.jsx("p",{className:"uu-text-body",style:{margin:0,color:"var(--object-secondary)"},children:"Đơn hàng đã huỷ không thể khôi phục."})]}),E={title:"Component/Chứa đựng/Dialog",component:c,args:{closeButton:!0,buttonGroup:{primary:{label:"Đã hiểu"}},standalone:!0,"aria-label":"Huỷ đơn hàng"},argTypes:{onClose:{action:"close"}},render:a=>e.jsx(c,{...a,children:e.jsx(u,{})})},t={name:"CardDialog"},r={name:"Ma trận Banner × Close button",parameters:{controls:{disable:!0}},render:()=>e.jsx(A,{align:"flex-start",children:[!1,!0].map(a=>[!0,!1].map(n=>e.jsx(M,{label:`Banner=${a?"True":"False"}, Close button=${n?"true":"false"}`,children:e.jsx(c,{standalone:!0,banner:a?R:void 0,closeButton:n,"aria-label":"Huỷ đơn hàng",buttonGroup:{primary:{label:"Đã hiểu"}},children:e.jsx(u,{})})},`${a}-${n}`)))})},o={name:"Banner=True",args:{banner:R,"aria-label":"Ưu đãi tháng 10",buttonGroup:{primary:{label:"Nhận quà"}}},render:a=>e.jsx(c,{...a,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--gap-2)"},children:[e.jsx("h2",{className:"text-heading-sm",style:{margin:0,color:"var(--object-primary)"},children:"Bạn có một phần quà"}),e.jsx("p",{className:"text-body",style:{margin:0,color:"var(--object-secondary)"},children:"Nhận ngay mã giảm 50.000 ₫ cho đơn đầu tiên trong tháng."})]})})},s={name:"Có nút phụ",args:{buttonGroup:{primary:{label:"Huỷ đơn"},secondary:{label:"Giữ lại"}}}},l={name:"Close button=false",args:{closeButton:!1}},i={name:"Dialog trên màn hình (căn giữa)",parameters:{controls:{disable:!0}},render:()=>{const[a,n]=k.useState(!0);return e.jsxs($,{height:720,children:[e.jsx("div",{style:{padding:"var(--gap-4)"},children:e.jsx(O,{onClick:()=>n(!0),children:"Mở dialog"})}),e.jsx(P,{open:a,onClose:()=>n(!1),"aria-label":"Huỷ đơn hàng",buttonGroup:{primary:{label:"Huỷ đơn",onClick:()=>n(!1)},secondary:{label:"Giữ lại",onClick:()=>n(!1)}},children:e.jsx(u,{})})]})}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'CardDialog'
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,h,b,y,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:"2 variant `Banner` × `Close button`.",...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};var f,C,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var j,B,D;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(B=s.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var N,w,G;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Close button=false',
  args: {
    closeButton: false
  }
}`,...(G=(w=l.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var S,T,H;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(H=(T=i.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const _=["Playground","Matrix","WithBanner","TwoButtons","NoClose","InScreen"],W=Object.freeze(Object.defineProperty({__proto__:null,InScreen:i,Matrix:r,NoClose:l,Playground:t,TwoButtons:s,WithBanner:o,__namedExportsOrder:_,default:E},Symbol.toStringTag,{value:"Module"}));export{t as P,W as S,o as W};

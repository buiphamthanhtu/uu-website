import{j as e,r as C,T as M}from"./iframe-6vwN6wb9.js";import{S as o}from"./SideSheet-k9L0u7Lk.js";import{T as c}from"./TextInput-Bbz922PW.js";import{S as F,C as p}from"./layout-nPJ89kCs.js";const l=({children:t,height:a=560})=>e.jsx("div",{style:{position:"relative",display:"flex",width:960,maxWidth:"100%",height:a,overflow:"hidden",transform:"translateZ(0)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-muted)",background:"var(--background-muted)"},children:t}),h=()=>e.jsxs("div",{style:{flex:"1 1 0",minWidth:0,padding:"var(--gap-6)"},children:[e.jsx("h1",{className:"text-heading-base",style:{margin:0,color:"var(--object-primary)"},children:"Khách hàng"}),e.jsx("p",{className:"uu-text-body",style:{color:"var(--object-secondary)"},children:"Nội dung trang vẫn ở nguyên chỗ khi tấm mở."})]}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Họ và tên",defaultValue:"Nguyễn Minh Anh"}),e.jsx(c,{label:"Số điện thoại",defaultValue:"0901 234 567"}),e.jsx(c,{label:"Email",defaultValue:"minhanh@uucreative.co"})]}),T={primary:{label:"Lưu"},secondary:{label:"Huỷ"}},w={title:"Component/Chứa đựng/SideSheet",component:o,args:{type:"standard",width:"base",title:"Thông tin khách hàng",footer:T},argTypes:{type:{control:"inline-radio",options:["standard","modal"]},width:{control:"inline-radio",options:["base","wide"]},onClose:{action:"close"},footer:{control:!1},open:{control:!1}},render:t=>e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(o,{...t,children:e.jsx(d,{})})]})},s={},r={name:"4 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(F,{children:[["standard","modal"].flatMap(t=>["base","wide"].map(a=>e.jsx(p,{label:`Type=${t==="standard"?"Standard":"Modal"}, Width=${a==="base"?"Base":"Wide"}`,children:e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(o,{type:t,width:a,title:"Thông tin khách hàng",footer:T,children:e.jsx(d,{})})]})},`${t}-${a}`))),e.jsx(p,{label:"Footer=False",children:e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(o,{title:"Thông tin khách hàng",footer:!1,children:e.jsx(d,{})})]})})]})},n={name:"Modal: mở và đóng",parameters:{controls:{disable:!0}},render:()=>{const[t,a]=C.useState(!1),i=()=>a(!1);return e.jsxs(l,{children:[e.jsx("div",{style:{padding:"var(--gap-6)"},children:e.jsx(M,{onClick:()=>a(!0),children:"Sửa thông tin"})}),e.jsx(o,{type:"modal",open:t,onClose:i,title:"Thông tin khách hàng",footer:{primary:{label:"Lưu",onClick:i},secondary:{label:"Huỷ",onClick:i}},children:e.jsx(d,{})})]})}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,b,j;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '4 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {(['standard', 'modal'] as const).flatMap(type => (['base', 'wide'] as const).map(width => <Cell key={\`\${type}-\${width}\`} label={\`Type=\${type === 'standard' ? 'Standard' : 'Modal'}, Width=\${width === 'base' ? 'Base' : 'Wide'}\`}>
          <Desktop>
            <Page />
            <SideSheet type={type} width={width} title="Thông tin khách hàng" footer={FOOTER}><Fields /></SideSheet>
          </Desktop>
        </Cell>))}
      <Cell label="Footer=False">
        <Desktop>
          <Page />
          <SideSheet title="Thông tin khách hàng" footer={false}><Fields /></SideSheet>
        </Desktop>
      </Cell>
    </Stack>
}`,...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var y,S,f,k,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Modal: mở và đóng',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return <Desktop>
        <div style={{
        padding: 'var(--gap-6)'
      }}>
          <TextButtonAccent onClick={() => setOpen(true)}>Sửa thông tin</TextButtonAccent>
        </div>
        <SideSheet type="modal" open={open} onClose={close} title="Thông tin khách hàng" footer={{
        primary: {
          label: 'Lưu',
          onClick: close
        },
        secondary: {
          label: 'Huỷ',
          onClick: close
        }
      }}>
          <Fields />
        </SideSheet>
      </Desktop>;
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:"Modal mở bằng nút; đóng bằng nút đóng, Esc, hoặc bấm vào scrim.",...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};const O=["Playground","Matrix","ModalFlow"],W=Object.freeze(Object.defineProperty({__proto__:null,Matrix:r,ModalFlow:n,Playground:s,__namedExportsOrder:O,default:w},Symbol.toStringTag,{value:"Module"}));export{r as M,s as P,W as S,n as a};

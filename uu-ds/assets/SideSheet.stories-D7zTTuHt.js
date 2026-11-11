import{j as e,S as C,C as h,r as M,T as F}from"./iframe-ROCLD28a.js";import{S as l}from"./SideSheet-CFVVaejo.js";import{T as c}from"./TextInput-bbcUxLtU.js";const i=({children:t,height:a=560,clip:s=!0})=>e.jsx("div",{style:{position:"relative",display:"flex",width:960,maxWidth:"calc(100% - 2px)",height:a,overflow:s?"hidden":"visible",transform:"translateZ(0)",borderRadius:s?"var(--radius-lg)":0,border:"1px solid var(--border-muted)",background:"var(--background-muted)"},children:t}),p=()=>e.jsxs("div",{style:{flex:"1 1 0",minWidth:0,padding:"var(--gap-6)"},children:[e.jsx("h1",{className:"text-heading-base",style:{margin:0,color:"var(--object-primary)"},children:"Khách hàng"}),e.jsx("p",{className:"uu-text-body",style:{color:"var(--object-secondary)"},children:"Nội dung trang vẫn ở nguyên chỗ khi tấm mở."})]}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Họ và tên",defaultValue:"Nguyễn Minh Anh"}),e.jsx(c,{label:"Số điện thoại",defaultValue:"0901 234 567"}),e.jsx(c,{label:"Email",defaultValue:"minhanh@uucreative.co"})]}),T={primary:{label:"Lưu"},secondary:{label:"Huỷ"}},w={parameters:{scrollX:!0},title:"Component/Chứa đựng/SideSheet",component:l,args:{type:"standard",width:"base",title:"Thông tin khách hàng",footer:T},argTypes:{type:{control:"inline-radio",options:["standard","modal"]},width:{control:"inline-radio",options:["base","wide"]},onClose:{action:"close"},footer:{control:!1},open:{control:!1}},render:t=>e.jsxs(i,{children:[e.jsx(p,{}),e.jsx(l,{...t,children:e.jsx(d,{})})]})},r={},o={name:"4 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(C,{children:[["standard","modal"].flatMap(t=>["base","wide"].map(a=>e.jsx(h,{label:`Type=${t==="standard"?"Standard":"Modal"}, Width=${a==="base"?"Base":"Wide"}`,children:e.jsxs(i,{clip:!1,children:[e.jsx(p,{}),e.jsx(l,{type:t,width:a,title:"Thông tin khách hàng",footer:T,children:e.jsx(d,{})})]})},`${t}-${a}`))),e.jsx(h,{label:"Footer=False",children:e.jsxs(i,{clip:!1,children:[e.jsx(p,{}),e.jsx(l,{title:"Thông tin khách hàng",footer:!1,children:e.jsx(d,{})})]})})]})},n={name:"Modal: mở và đóng",parameters:{controls:{disable:!0}},render:()=>{const[t,a]=M.useState(!1),s=()=>a(!1);return e.jsxs(i,{children:[e.jsx("div",{style:{padding:"var(--gap-6)"},children:e.jsx(F,{onClick:()=>a(!0),children:"Sửa thông tin"})}),e.jsx(l,{type:"modal",open:t,onClose:s,title:"Thông tin khách hàng",footer:{primary:{label:"Lưu",onClick:s},secondary:{label:"Huỷ",onClick:s}},children:e.jsx(d,{})})]})}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,b,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '4 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {(['standard', 'modal'] as const).flatMap(type => (['base', 'wide'] as const).map(width => <Cell key={\`\${type}-\${width}\`} label={\`Type=\${type === 'standard' ? 'Standard' : 'Modal'}, Width=\${width === 'base' ? 'Base' : 'Wide'}\`}>
          <Desktop clip={false}>
            <Page />
            <SideSheet type={type} width={width} title="Thông tin khách hàng" footer={FOOTER}><Fields /></SideSheet>
          </Desktop>
        </Cell>))}
      <Cell label="Footer=False">
        <Desktop clip={false}>
          <Page />
          <SideSheet title="Thông tin khách hàng" footer={false}><Fields /></SideSheet>
        </Desktop>
      </Cell>
    </Stack>
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,y,S,k,v;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source},description:{story:"Modal mở bằng nút; đóng bằng nút đóng, Esc, hoặc bấm vào scrim.",...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};const O=["Playground","Matrix","ModalFlow"],P=Object.freeze(Object.defineProperty({__proto__:null,Matrix:o,ModalFlow:n,Playground:r,__namedExportsOrder:O,default:w},Symbol.toStringTag,{value:"Module"}));export{o as M,r as P,P as S,n as a};

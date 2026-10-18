import{j as e,r as C,T as F}from"./iframe-gn_pzB68.js";import{S as o}from"./SideSheet-CbGtU0Zf.js";import{T as c}from"./TextInput-Cl8pq38J.js";import{S as M,C as h}from"./layout-whGn3D85.js";const l=({children:t,height:n=560})=>e.jsx("div",{style:{position:"relative",display:"flex",width:960,maxWidth:"100%",height:n,overflow:"hidden",transform:"translateZ(0)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-muted)",background:"var(--background-muted)"},children:t}),p=()=>e.jsxs("div",{style:{flex:"1 1 0",minWidth:0,padding:"var(--gap-6)"},children:[e.jsx("h1",{className:"text-heading-base",style:{margin:0,color:"var(--object-primary)"},children:"Khách hàng"}),e.jsx("p",{className:"uu-text-body",style:{color:"var(--object-secondary)"},children:"Nội dung trang vẫn ở nguyên chỗ khi tấm mở."})]}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Họ và tên",defaultValue:"Nguyễn Minh Anh"}),e.jsx(c,{label:"Số điện thoại",defaultValue:"0901 234 567"}),e.jsx(c,{label:"Email",defaultValue:"minhanh@uucreative.co"})]}),T={primary:{label:"Lưu"},secondary:{label:"Huỷ"}},O={title:"Component/Chứa đựng/SideSheet",component:o,args:{type:"standard",title:"Thông tin khách hàng",footer:T},argTypes:{type:{control:"inline-radio",options:["standard","modal"]},onClose:{action:"close"},footer:{control:!1},open:{control:!1}},render:t=>e.jsxs(l,{children:[e.jsx(p,{}),e.jsx(o,{...t,children:e.jsx(d,{})})]})},r={},s={name:"2 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(M,{children:[["standard","modal"].map(t=>e.jsx(h,{label:`Type=${t==="standard"?"Standard":"Modal"}`,children:e.jsxs(l,{children:[e.jsx(p,{}),e.jsx(o,{type:t,title:"Thông tin khách hàng",footer:T,children:e.jsx(d,{})})]})},t)),e.jsx(h,{label:"Footer=False",children:e.jsxs(l,{children:[e.jsx(p,{}),e.jsx(o,{title:"Thông tin khách hàng",footer:!1,children:e.jsx(d,{})})]})})]})},a={name:"Modal: mở và đóng",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=C.useState(!1),i=()=>n(!1);return e.jsxs(l,{children:[e.jsx("div",{style:{padding:"var(--gap-6)"},children:e.jsx(F,{onClick:()=>n(!0),children:"Sửa thông tin"})}),e.jsx(o,{type:"modal",open:t,onClose:i,title:"Thông tin khách hàng",footer:{primary:{label:"Lưu",onClick:i},secondary:{label:"Huỷ",onClick:i}},children:e.jsx(d,{})})]})}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,j,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '2 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {(['standard', 'modal'] as const).map(type => <Cell key={type} label={\`Type=\${type === 'standard' ? 'Standard' : 'Modal'}\`}>
          <Desktop>
            <Page />
            <SideSheet type={type} title="Thông tin khách hàng" footer={FOOTER}><Fields /></SideSheet>
          </Desktop>
        </Cell>)}
      <Cell label="Footer=False">
        <Desktop>
          <Page />
          <SideSheet title="Thông tin khách hàng" footer={false}><Fields /></SideSheet>
        </Desktop>
      </Cell>
    </Stack>
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var S,b,f,k,v;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source},description:{story:"Modal mở bằng nút; đóng bằng nút đóng, Esc, hoặc bấm vào scrim.",...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};const D=["Playground","Matrix","ModalFlow"],A=Object.freeze(Object.defineProperty({__proto__:null,Matrix:s,ModalFlow:a,Playground:r,__namedExportsOrder:D,default:O},Symbol.toStringTag,{value:"Module"}));export{r as P,A as S};

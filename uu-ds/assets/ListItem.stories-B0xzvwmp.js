import{r as c,j as e,I as n}from"./iframe-BJppzEtc.js";import{B as w}from"./Badge-CtZFBXD8.js";import{N as P}from"./NotificationBadge-jxhe3-LG.js";import{L as t,a as h,b as l,c as T}from"./ListItem-CY_AZtm9.js";import{S as B,C as p}from"./layout-DTGrnlPK.js";const V={title:"Component/Dữ liệu/ListItem",component:t,args:{title:"Thông báo",description:"Đơn hàng, khuyến mãi",disabled:!1,divider:!1,state:"default"},argTypes:{state:{control:"radio",options:["default","hover","pressed"]}},render:i=>e.jsx("div",{style:{width:390,background:"var(--background-surface)"},children:e.jsx(t,{...i,leading:e.jsx(l,{icon:"texture"}),trailing:"chevron",onClick:()=>{}})})},r={},a={name:"4 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(B,{children:[["default","hover","pressed"].map(i=>e.jsx(p,{label:i,children:e.jsx("div",{style:{width:390,background:"var(--background-surface)"},children:e.jsx(t,{title:"Địa chỉ giao hàng",description:"12 Nguyễn Huệ, Quận 1",leading:e.jsx(n,{name:"texture"}),trailing:"chevron",onClick:()=>{},state:i})})},i)),e.jsx(p,{label:"disabled",children:e.jsx("div",{style:{width:390,background:"var(--background-surface)"},children:e.jsx(t,{title:"Địa chỉ giao hàng",description:"12 Nguyễn Huệ, Quận 1",leading:e.jsx(n,{name:"texture"}),trailing:"chevron",onClick:()=>{},disabled:!0})})})]})},s={name:"Phần đầu và phần đuôi",parameters:{controls:{disable:!0}},render:()=>{const[i,d]=c.useState(!0),[G,N]=c.useState(!1),[u,g]=c.useState("a");return e.jsxs("div",{style:{width:390,background:"var(--background-surface)"},children:[e.jsx(t,{divider:!0,title:"Tài khoản",leading:e.jsx(n,{name:"texture"}),trailing:"chevron",onClick:()=>{}}),e.jsx(t,{divider:!0,title:"Ngôn ngữ",leading:e.jsx(l,{icon:"texture"}),trailing:e.jsx(T,{children:"Tiếng Việt"}),onClick:()=>{}}),e.jsx(t,{divider:!0,title:"Nhận thông báo",description:"Bấm cả hàng để bật",selection:{type:"switch",checked:i,onChange:d}}),e.jsx(t,{divider:!0,title:"Ghi nhớ đăng nhập",selection:{type:"checkbox",checked:G,onChange:N}}),e.jsx(t,{divider:!0,title:"Giao tiêu chuẩn",selection:{type:"radio",checked:u==="a",onChange:()=>g("a")}}),e.jsx(t,{divider:!0,title:"Giao nhanh",selection:{type:"radio",checked:u==="b",onChange:()=>g("b")}}),e.jsx(t,{divider:!0,title:"Quà tặng",leading:e.jsx(n,{name:"texture"}),trailing:e.jsx(w,{tone:"success",children:"Mới"}),onClick:()=>{}}),e.jsx(t,{divider:!0,title:"Hộp thư",leading:e.jsx(n,{name:"texture"}),trailing:e.jsx(P,{count:"3"}),onClick:()=>{}}),e.jsx(t,{title:"Nhà riêng",description:"Bấm hàng mở chi tiết, bấm bút để sửa",leading:e.jsx(n,{name:"texture"}),action:{icon:"texture",label:"Sửa",onClick:()=>{}},onClick:()=>{}})]})}},o={name:"ListGroup — trang cài đặt",parameters:{controls:{disable:!0}},render:()=>{const[i,d]=c.useState(!0);return e.jsxs("div",{style:{width:390,padding:16,background:"var(--background-subtle)",display:"flex",flexDirection:"column",gap:24},children:[e.jsxs(h,{title:"Tài khoản",children:[e.jsx(t,{title:"Thông tin cá nhân",leading:e.jsx(l,{icon:"texture"}),trailing:"chevron",onClick:()=>{}}),e.jsx(t,{title:"Địa chỉ",leading:e.jsx(l,{icon:"texture"}),trailing:"chevron",onClick:()=>{}})]}),e.jsxs(h,{title:"Cài đặt",children:[e.jsx(t,{title:"Thông báo đẩy",selection:{type:"switch",checked:i,onChange:d}}),e.jsx(t,{title:"Ngôn ngữ",trailing:e.jsx(T,{children:"Tiếng Việt"}),onClick:()=>{}})]})]})}};var m,k,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var b,v,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '4 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {(['default', 'hover', 'pressed'] as const).map(s => <Cell key={s} label={s}><div style={{
        width: 390,
        background: 'var(--background-surface)'
      }}><ListItem title="Địa chỉ giao hàng" description="12 Nguyễn Huệ, Quận 1" leading={<Icon name="texture" />} trailing="chevron" onClick={() => {}} state={s} /></div></Cell>)}
      <Cell label="disabled"><div style={{
        width: 390,
        background: 'var(--background-surface)'
      }}><ListItem title="Địa chỉ giao hàng" description="12 Nguyễn Huệ, Quận 1" leading={<Icon name="texture" />} trailing="chevron" onClick={() => {}} disabled /></div></Cell>
    </Stack>
}`,...(C=(v=a.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var j,L,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Phần đầu và phần đuôi',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [on, setOn] = useState(true);
    const [tick, setTick] = useState(false);
    const [pick, setPick] = useState('a');
    return <div style={{
      width: 390,
      background: 'var(--background-surface)'
    }}>
        <ListItem divider title="Tài khoản" leading={<Icon name="texture" />} trailing="chevron" onClick={() => {}} />
        <ListItem divider title="Ngôn ngữ" leading={<ListIconContainer icon="texture" />} trailing={<ListValue>Tiếng Việt</ListValue>} onClick={() => {}} />
        <ListItem divider title="Nhận thông báo" description="Bấm cả hàng để bật" selection={{
        type: 'switch',
        checked: on,
        onChange: setOn
      }} />
        <ListItem divider title="Ghi nhớ đăng nhập" selection={{
        type: 'checkbox',
        checked: tick,
        onChange: setTick
      }} />
        <ListItem divider title="Giao tiêu chuẩn" selection={{
        type: 'radio',
        checked: pick === 'a',
        onChange: () => setPick('a')
      }} />
        <ListItem divider title="Giao nhanh" selection={{
        type: 'radio',
        checked: pick === 'b',
        onChange: () => setPick('b')
      }} />
        <ListItem divider title="Quà tặng" leading={<Icon name="texture" />} trailing={<Badge tone="success">Mới</Badge>} onClick={() => {}} />
        <ListItem divider title="Hộp thư" leading={<Icon name="texture" />} trailing={<NotificationBadge count="3" />} onClick={() => {}} />
        <ListItem title="Nhà riêng" description="Bấm hàng mở chi tiết, bấm bút để sửa" leading={<Icon name="texture" />} action={{
        icon: 'texture',
        label: 'Sửa',
        onClick: () => {}
      }} onClick={() => {}} />
      </div>;
  }
}`,...(y=(L=s.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var f,I,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'ListGroup — trang cài đặt',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [push, setPush] = useState(true);
    return <div style={{
      width: 390,
      padding: 16,
      background: 'var(--background-subtle)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <ListGroup title="Tài khoản">
          <ListItem title="Thông tin cá nhân" leading={<ListIconContainer icon="texture" />} trailing="chevron" onClick={() => {}} />
          <ListItem title="Địa chỉ" leading={<ListIconContainer icon="texture" />} trailing="chevron" onClick={() => {}} />
        </ListGroup>
        <ListGroup title="Cài đặt">
          <ListItem title="Thông báo đẩy" selection={{
          type: 'switch',
          checked: push,
          onChange: setPush
        }} />
          <ListItem title="Ngôn ngữ" trailing={<ListValue>Tiếng Việt</ListValue>} onClick={() => {}} />
        </ListGroup>
      </div>;
  }
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const H=["Playground","States","LeadingTrailing","Group"],M=Object.freeze(Object.defineProperty({__proto__:null,Group:o,LeadingTrailing:s,Playground:r,States:a,__namedExportsOrder:H,default:V},Symbol.toStringTag,{value:"Module"}));export{o as G,s as L,r as P,M as S,a};

import{r as c,j as e,F as g,I as n,S as B,b as m,i as p}from"./iframe-DflIRoHs.js";import{B as V}from"./Badge-CagV2wl9.js";import{N as W}from"./NotificationBadge-tJaDN-rt.js";import{L as i,a as k,b as l,c as N}from"./ListItem-5ijHtwTZ.js";const _={title:"Component/Dữ liệu/ListItem",component:i,args:{title:"Thông báo",description:"Đơn hàng, khuyến mãi",disabled:!1,divider:!1,state:"default"},argTypes:{state:{control:"radio",options:["default","hover","pressed"]}},render:t=>e.jsx("div",{style:{width:390,maxWidth:g,background:"var(--background-surface)"},children:e.jsx(i,{...t,leading:e.jsx(l,{icon:"bell"}),trailing:"chevron",onClick:()=>{}})})},a={},r={name:"4 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(B,{children:[["default","hover","pressed"].map(t=>e.jsx(m,{label:t,children:e.jsx("div",{style:{width:390,maxWidth:p,background:"var(--background-surface)"},children:e.jsx(i,{title:"Địa chỉ giao hàng",description:"12 Nguyễn Huệ, Quận 1",leading:e.jsx(n,{name:"location"}),trailing:"chevron",onClick:()=>{},state:t})})},t)),e.jsx(m,{label:"disabled",children:e.jsx("div",{style:{width:390,maxWidth:p,background:"var(--background-surface)"},children:e.jsx(i,{title:"Địa chỉ giao hàng",description:"12 Nguyễn Huệ, Quận 1",leading:e.jsx(n,{name:"location"}),trailing:"chevron",onClick:()=>{},disabled:!0})})})]})},s={name:"Phần đầu và phần đuôi",parameters:{controls:{disable:!0}},render:()=>{const[t,d]=c.useState(!0),[w,P]=c.useState(!1),[u,h]=c.useState("a");return e.jsxs("div",{style:{width:390,maxWidth:g,background:"var(--background-surface)"},children:[e.jsx(i,{divider:!0,title:"Tài khoản",leading:e.jsx(n,{name:"user"}),trailing:"chevron",onClick:()=>{}}),e.jsx(i,{divider:!0,title:"Ngôn ngữ",leading:e.jsx(l,{icon:"globe"}),trailing:e.jsx(N,{children:"Tiếng Việt"}),onClick:()=>{}}),e.jsx(i,{divider:!0,title:"Nhận thông báo",description:"Bấm cả hàng để bật",selection:{type:"switch",checked:t,onChange:d}}),e.jsx(i,{divider:!0,title:"Ghi nhớ đăng nhập",selection:{type:"checkbox",checked:w,onChange:P}}),e.jsx(i,{divider:!0,title:"Giao tiêu chuẩn",selection:{type:"radio",checked:u==="a",onChange:()=>h("a")}}),e.jsx(i,{divider:!0,title:"Giao nhanh",selection:{type:"radio",checked:u==="b",onChange:()=>h("b")}}),e.jsx(i,{divider:!0,title:"Quà tặng",leading:e.jsx(n,{name:"gift"}),trailing:e.jsx(V,{tone:"success",children:"Mới"}),onClick:()=>{}}),e.jsx(i,{divider:!0,title:"Hộp thư",leading:e.jsx(n,{name:"bell"}),trailing:e.jsx(W,{count:"3"}),onClick:()=>{}}),e.jsx(i,{title:"Nhà riêng",description:"Bấm hàng mở chi tiết, bấm bút để sửa",leading:e.jsx(n,{name:"location"}),action:{icon:"pen",label:"Sửa",onClick:()=>{}},onClick:()=>{}})]})}},o={name:"ListGroup — trang cài đặt",parameters:{controls:{disable:!0}},render:()=>{const[t,d]=c.useState(!0);return e.jsxs("div",{style:{width:390,maxWidth:g,boxSizing:"border-box",padding:16,background:"var(--background-subtle)",display:"flex",flexDirection:"column",gap:24},children:[e.jsxs(k,{title:"Tài khoản",children:[e.jsx(i,{title:"Thông tin cá nhân",leading:e.jsx(l,{icon:"user"}),trailing:"chevron",onClick:()=>{}}),e.jsx(i,{title:"Địa chỉ",leading:e.jsx(l,{icon:"location"}),trailing:"chevron",onClick:()=>{}})]}),e.jsxs(k,{title:"Cài đặt",children:[e.jsx(i,{title:"Thông báo đẩy",selection:{type:"switch",checked:t,onChange:d}}),e.jsx(i,{title:"Ngôn ngữ",trailing:e.jsx(N,{children:"Tiếng Việt"}),onClick:()=>{}})]})]})}};var b,x,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var C,j,L;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '4 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {(['default', 'hover', 'pressed'] as const).map(s => <Cell key={s} label={s}><div style={{
        width: 390,
        maxWidth: FIT_CELL,
        background: 'var(--background-surface)'
      }}><ListItem title="Địa chỉ giao hàng" description="12 Nguyễn Huệ, Quận 1" leading={<Icon name="location" />} trailing="chevron" onClick={() => {}} state={s} /></div></Cell>)}
      <Cell label="disabled"><div style={{
        width: 390,
        maxWidth: FIT_CELL,
        background: 'var(--background-surface)'
      }}><ListItem title="Địa chỉ giao hàng" description="12 Nguyễn Huệ, Quận 1" leading={<Icon name="location" />} trailing="chevron" onClick={() => {}} disabled /></div></Cell>
    </Stack>
}`,...(L=(j=r.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var I,y,f;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
      maxWidth: FIT,
      background: 'var(--background-surface)'
    }}>
        <ListItem divider title="Tài khoản" leading={<Icon name="user" />} trailing="chevron" onClick={() => {}} />
        <ListItem divider title="Ngôn ngữ" leading={<ListIconContainer icon="globe" />} trailing={<ListValue>Tiếng Việt</ListValue>} onClick={() => {}} />
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
        <ListItem divider title="Quà tặng" leading={<Icon name="gift" />} trailing={<Badge tone="success">Mới</Badge>} onClick={() => {}} />
        <ListItem divider title="Hộp thư" leading={<Icon name="bell" />} trailing={<NotificationBadge count="3" />} onClick={() => {}} />
        <ListItem title="Nhà riêng" description="Bấm hàng mở chi tiết, bấm bút để sửa" leading={<Icon name="location" />} action={{
        icon: 'pen',
        label: 'Sửa',
        onClick: () => {}
      }} onClick={() => {}} />
      </div>;
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var T,S,G;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
      maxWidth: FIT,
      boxSizing: 'border-box',
      padding: 16,
      background: 'var(--background-subtle)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <ListGroup title="Tài khoản">
          <ListItem title="Thông tin cá nhân" leading={<ListIconContainer icon="user" />} trailing="chevron" onClick={() => {}} />
          <ListItem title="Địa chỉ" leading={<ListIconContainer icon="location" />} trailing="chevron" onClick={() => {}} />
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
}`,...(G=(S=o.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};const F=["Playground","States","LeadingTrailing","Group"],z=Object.freeze(Object.defineProperty({__proto__:null,Group:o,LeadingTrailing:s,Playground:a,States:r,__namedExportsOrder:F,default:_},Symbol.toStringTag,{value:"Module"}));export{o as G,s as L,a as P,z as S,r as a};

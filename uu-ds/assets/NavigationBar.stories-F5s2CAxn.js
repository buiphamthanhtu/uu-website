import{j as a,S as b,F as t}from"./iframe-CcRfAzR2.js";import{N as r}from"./NavigationBar-C2HZVvB_.js";const g=()=>a.jsxs("div",{"aria-hidden":"true",style:{display:"flex",alignItems:"center",gap:"var(--gap-2)",width:83,height:34,padding:"var(--gap-1) var(--gap-2)",boxSizing:"border-box",borderRadius:"var(--rounded-circle)",background:"var(--background-surface)",border:"1px solid var(--object-primary)"},children:[a.jsx("span",{style:{width:24,height:24,borderRadius:"50%",border:"2px solid currentColor",boxSizing:"border-box"}}),a.jsx("span",{style:{width:1,height:18,background:"var(--border)"}}),a.jsx("span",{style:{width:24,height:24,borderRadius:"50%",border:"2px solid currentColor",boxSizing:"border-box"}})]}),p={title:"Component/Điều hướng/NavigationBar",component:r,args:{title:"Screen",onBack:()=>{}},argTypes:{onBack:{action:"back"}},parameters:{layout:"padded"},render:u=>a.jsx("div",{style:{width:430,maxWidth:t,background:"var(--background-muted)"},children:a.jsx(r,{...u})})},e={},i={name:"Back · Sub action · Mini app",parameters:{controls:{disable:!0}},render:()=>a.jsxs(b,{children:[a.jsx("div",{style:{width:430,maxWidth:t,background:"var(--background-muted)"},children:a.jsx(r,{title:"Chỉ tiêu đề"})}),a.jsx("div",{style:{width:430,maxWidth:t,background:"var(--background-muted)"},children:a.jsx(r,{title:"Có nút back",onBack:()=>{}})}),a.jsx("div",{style:{width:430,maxWidth:t,background:"var(--background-muted)"},children:a.jsx(r,{title:"Back + sub action",onBack:()=>{},subAction:{icon:"texture",label:"Chia sẻ"}})}),a.jsx("div",{style:{width:430,maxWidth:t,background:"var(--background-muted)"},children:a.jsx(r,{title:"Trong Zalo (Mini app=true)",onBack:()=>{},miniAppControl:a.jsx(g,{})})}),a.jsx("div",{style:{width:430,maxWidth:t,background:"var(--background-interactive)"},children:a.jsx(r,{title:a.jsx("span",{className:"uu-navbar__title",style:{color:"var(--object-on-interactive)"},children:"Trên nền màu"}),onBack:()=>{}})})]})};var o,n,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var s,c,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Back · Sub action · Mini app',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      <div style={{
      width: 430,
      maxWidth: FIT,
      background: 'var(--background-muted)'
    }}><NavigationBar title="Chỉ tiêu đề" /></div>
      <div style={{
      width: 430,
      maxWidth: FIT,
      background: 'var(--background-muted)'
    }}><NavigationBar title="Có nút back" onBack={() => {}} /></div>
      <div style={{
      width: 430,
      maxWidth: FIT,
      background: 'var(--background-muted)'
    }}><NavigationBar title="Back + sub action" onBack={() => {}} subAction={{
        icon: 'texture',
        label: 'Chia sẻ'
      }} /></div>
      <div style={{
      width: 430,
      maxWidth: FIT,
      background: 'var(--background-muted)'
    }}><NavigationBar title="Trong Zalo (Mini app=true)" onBack={() => {}} miniAppControl={<MiniAppControlMock />} /></div>
      <div style={{
      width: 430,
      maxWidth: FIT,
      background: 'var(--background-interactive)'
    }}><NavigationBar title={<span className="uu-navbar__title" style={{
        color: 'var(--object-on-interactive)'
      }}>Trên nền màu</span>} onBack={() => {}} /></div>
    </Stack>
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const m=["Playground","Variants"],k=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,Variants:i,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{e as P,k as S,i as V};

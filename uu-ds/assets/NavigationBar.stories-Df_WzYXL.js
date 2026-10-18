import{j as a}from"./iframe-DqdT0fUx.js";import{N as r}from"./NavigationBar-CLR84wrg.js";import{S as u}from"./layout-lF1Il3_E.js";const b=()=>a.jsxs("div",{"aria-hidden":"true",style:{display:"flex",alignItems:"center",gap:"var(--gap-2)",width:83,height:34,padding:"var(--gap-1) var(--gap-2)",boxSizing:"border-box",borderRadius:"var(--rounded-circle)",background:"var(--background-surface)",border:"1px solid var(--object-primary)"},children:[a.jsx("span",{style:{width:24,height:24,borderRadius:"50%",border:"2px solid currentColor",boxSizing:"border-box"}}),a.jsx("span",{style:{width:1,height:18,background:"var(--border)"}}),a.jsx("span",{style:{width:24,height:24,borderRadius:"50%",border:"2px solid currentColor",boxSizing:"border-box"}})]}),g={title:"Component/Điều hướng/NavigationBar",component:r,args:{title:"Screen",onBack:()=>{}},argTypes:{onBack:{action:"back"}},parameters:{layout:"padded"},render:l=>a.jsx("div",{style:{width:430,background:"var(--background-muted)"},children:a.jsx(r,{...l})})},t={},e={name:"Back · Sub action · Mini app",parameters:{controls:{disable:!0}},render:()=>a.jsxs(u,{children:[a.jsx("div",{style:{width:430,background:"var(--background-muted)"},children:a.jsx(r,{title:"Chỉ tiêu đề"})}),a.jsx("div",{style:{width:430,background:"var(--background-muted)"},children:a.jsx(r,{title:"Có nút back",onBack:()=>{}})}),a.jsx("div",{style:{width:430,background:"var(--background-muted)"},children:a.jsx(r,{title:"Back + sub action",onBack:()=>{},subAction:{icon:"share-right",label:"Chia sẻ"}})}),a.jsx("div",{style:{width:430,background:"var(--background-muted)"},children:a.jsx(r,{title:"Trong Zalo (Mini app=true)",onBack:()=>{},miniAppControl:a.jsx(b,{})})}),a.jsx("div",{style:{width:430,background:"var(--background-interactive)"},children:a.jsx(r,{title:a.jsx("span",{className:"uu-navbar__title",style:{color:"var(--object-on-interactive)"},children:"Trên nền màu"}),onBack:()=>{}})})]})};var i,o,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,s,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Back · Sub action · Mini app',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      <div style={{
      width: 430,
      background: 'var(--background-muted)'
    }}><NavigationBar title="Chỉ tiêu đề" /></div>
      <div style={{
      width: 430,
      background: 'var(--background-muted)'
    }}><NavigationBar title="Có nút back" onBack={() => {}} /></div>
      <div style={{
      width: 430,
      background: 'var(--background-muted)'
    }}><NavigationBar title="Back + sub action" onBack={() => {}} subAction={{
        icon: 'share-right',
        label: 'Chia sẻ'
      }} /></div>
      <div style={{
      width: 430,
      background: 'var(--background-muted)'
    }}><NavigationBar title="Trong Zalo (Mini app=true)" onBack={() => {}} miniAppControl={<MiniAppControlMock />} /></div>
      <div style={{
      width: 430,
      background: 'var(--background-interactive)'
    }}><NavigationBar title={<span className="uu-navbar__title" style={{
        color: 'var(--object-on-interactive)'
      }}>Trên nền màu</span>} onBack={() => {}} /></div>
    </Stack>
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const p=["Playground","Variants"],m=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,Variants:e,__namedExportsOrder:p,default:g},Symbol.toStringTag,{value:"Module"}));export{t as P,m as S};

import{j as a,r as f}from"./iframe-6vwN6wb9.js";import{S as l}from"./Switch-C5m2-2AJ.js";import{R as x,C as o}from"./layout-nPJ89kCs.js";const j={title:"Component/Lựa chọn/Switch",component:l,args:{checked:!1,disabled:!1,state:"default","aria-label":"Nhận thông báo"},argTypes:{state:{control:"radio",options:["default","hover","focus","pressed"]},onChange:{action:"change"}},render:e=>{const[t,m]=f.useState(e.checked);return a.jsx(l,{...e,checked:t,onChange:c=>{var d;m(c),(d=e.onChange)==null||d.call(e,c)}})}},s={},r={name:"10 variant",parameters:{controls:{disable:!0}},render:()=>a.jsxs(x,{children:[[!1,!0].map(e=>["default","hover","focus","pressed"].map(t=>a.jsx(o,{label:`${e?"Bật":"Tắt"} · ${t}`,children:a.jsx(l,{checked:e,state:t,"aria-label":t})},`${e}-${t}`))),a.jsx(o,{label:"Tắt · Disabled",children:a.jsx(l,{checked:!1,disabled:!0,"aria-label":"disabled"})}),a.jsx(o,{label:"Bật · Disabled",children:a.jsx(l,{checked:!0,disabled:!0,"aria-label":"disabled"})})]})};var n,i,b;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(b=(i=s.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var p,h,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '10 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      {([false, true] as const).map(checked => (['default', 'hover', 'focus', 'pressed'] as const).map(state => <Cell key={\`\${checked}-\${state}\`} label={\`\${checked ? 'Bật' : 'Tắt'} · \${state}\`}><Switch checked={checked} state={state} aria-label={state} /></Cell>))}
      <Cell label="Tắt · Disabled"><Switch checked={false} disabled aria-label="disabled" /></Cell>
      <Cell label="Bật · Disabled"><Switch checked disabled aria-label="disabled" /></Cell>
    </Row>
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const C=["Playground","Matrix"],$=Object.freeze(Object.defineProperty({__proto__:null,Matrix:r,Playground:s,__namedExportsOrder:C,default:j},Symbol.toStringTag,{value:"Module"}));export{r as M,s as P,$ as S};

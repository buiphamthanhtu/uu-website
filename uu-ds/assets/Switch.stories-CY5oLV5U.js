import{j as a,R as f,C as o,r as x}from"./iframe-B9x1_Cao.js";import{S as r}from"./Switch-CS9QU8ln.js";const j={title:"Component/Lựa chọn/Switch",component:r,args:{checked:!1,disabled:!1,state:"default","aria-label":"Nhận thông báo"},argTypes:{state:{control:"radio",options:["default","hover","focus","pressed"]},onChange:{action:"change"}},render:e=>{const[s,m]=x.useState(e.checked);return a.jsx(r,{...e,checked:s,onChange:c=>{var d;m(c),(d=e.onChange)==null||d.call(e,c)}})}},t={},l={name:"10 variant",parameters:{controls:{disable:!0}},render:()=>a.jsxs(f,{children:[[!1,!0].map(e=>["default","hover","focus","pressed"].map(s=>a.jsx(o,{label:`${e?"Bật":"Tắt"} · ${s}`,children:a.jsx(r,{checked:e,state:s,"aria-label":s})},`${e}-${s}`))),a.jsx(o,{label:"Tắt · Disabled",children:a.jsx(r,{checked:!1,disabled:!0,"aria-label":"disabled"})}),a.jsx(o,{label:"Bật · Disabled",children:a.jsx(r,{checked:!0,disabled:!0,"aria-label":"disabled"})})]})};var n,i,b;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(b=(i=t.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var h,p,u;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const C=["Playground","Matrix"],w=Object.freeze(Object.defineProperty({__proto__:null,Matrix:l,Playground:t,__namedExportsOrder:C,default:j},Symbol.toStringTag,{value:"Module"}));export{l as M,t as P,w as S};

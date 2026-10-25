import{j as o,r as x}from"./iframe-6vwN6wb9.js";import{T as l}from"./ToggleButton-iGf9GL8G.js";import{S as T,R as y,C as S}from"./layout-nPJ89kCs.js";const j={title:"Component/Hành động/ToggleButton",component:l,args:{active:!1,icon:"heart",label:"Theo dõi",activeLabel:"Đang theo dõi",size:"base",state:"default"},argTypes:{size:{control:"radio",options:["large","base","small"]},state:{control:"select",options:["default","hover","pressed","disabled"]},onToggle:{action:"toggle"}},render:e=>{const[a,t]=x.useState(e.active);return o.jsx(l,{...e,active:a,onToggle:c=>{var i;t(c),(i=e.onToggle)==null||i.call(e,c)}})}},s={},r={name:"Icon-only (Label=False)",args:{label:void 0,activeLabel:void 0}},n={name:"Ma trận variant",parameters:{controls:{disable:!0}},render:()=>o.jsx(T,{children:["large","base","small"].map(e=>o.jsx(y,{children:[!1,!0].map(a=>["default","hover","pressed","disabled"].map(t=>o.jsx(S,{label:`${a?"Active":"Off"} · ${t}`,children:o.jsx(l,{size:e,icon:"heart",label:"Theo dõi",activeLabel:"Đang theo dõi",active:a,state:t})},`${a}-${t}`)))},e))})};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Icon-only (Label=False)',
  args: {
    label: undefined,
    activeLabel: undefined
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,f,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Ma trận variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {(['large', 'base', 'small'] as const).map(size => <Row key={size}>
          {([false, true] as const).map(active => (['default', 'hover', 'pressed', 'disabled'] as const).map(state => <Cell key={\`\${active}-\${state}\`} label={\`\${active ? 'Active' : 'Off'} · \${state}\`}>
              <ToggleButton size={size} icon="heart" label="Theo dõi" activeLabel="Đang theo dõi" active={active} state={state} />
            </Cell>))}
        </Row>)}
    </Stack>
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const $=["Playground","IconOnly","Matrix"],M=Object.freeze(Object.defineProperty({__proto__:null,IconOnly:r,Matrix:n,Playground:s,__namedExportsOrder:$,default:j},Symbol.toStringTag,{value:"Module"}));export{r as I,n as M,s as P,M as S};

import{j as a,r as x}from"./iframe-PRPlo7RZ.js";import{S as r}from"./Switch-CnIqZZ6s.js";import{R as j,C as d,S as w}from"./layout-C7vjRdIo.js";const C={title:"Component/Lựa chọn/Switch",component:r,args:{checked:!1,disabled:!1,state:"default","aria-label":"Nhận thông báo"},argTypes:{state:{control:"radio",options:["default","hover","focus","pressed"]},onChange:{action:"change"}},render:e=>{const[t,s]=x.useState(e.checked);return a.jsx(r,{...e,checked:t,onChange:l=>{var i;s(l),(i=e.onChange)==null||i.call(e,l)}})}},o={},c={name:"10 variant",parameters:{controls:{disable:!0}},render:()=>a.jsxs(j,{children:[[!1,!0].map(e=>["default","hover","focus","pressed"].map(t=>a.jsx(d,{label:`${e?"Bật":"Tắt"} · ${t}`,children:a.jsx(r,{checked:e,state:t,"aria-label":t})},`${e}-${t}`))),a.jsx(d,{label:"Tắt · Disabled",children:a.jsx(r,{checked:!1,disabled:!0,"aria-label":"disabled"})}),a.jsx(d,{label:"Bật · Disabled",children:a.jsx(r,{checked:!0,disabled:!0,"aria-label":"disabled"})})]})},n={name:"Hàng thiết lập (màn tự dựng)",parameters:{controls:{disable:!0}},render:()=>{const[e,t]=x.useState({a:!0,b:!1});return a.jsx(w,{style:{width:316},children:[["a","Nhận thông báo khuyến mãi"],["b","Đăng nhập bằng vân tay"]].map(([s,l])=>a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:12,justifyContent:"space-between",cursor:"pointer"},children:[a.jsx("span",{style:{font:"var(--font-weight-normal) var(--font-size-base)/var(--font-height-base) var(--font-family-body)",color:"var(--object-primary)"},children:l}),a.jsx(r,{checked:e[s],onChange:i=>t({...e,[s]:i}),"aria-label":l})]},s))})}};var h,b,p;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(p=(b=o.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var m,u,f;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(u=c.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,y,k,v,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Hàng thiết lập (màn tự dựng)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState<Record<string, boolean>>({
      a: true,
      b: false
    });
    return <Stack style={{
      width: 316
    }}>
        {([['a', 'Nhận thông báo khuyến mãi'], ['b', 'Đăng nhập bằng vân tay']] as const).map(([k, label]) => <label key={k} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        justifyContent: 'space-between',
        cursor: 'pointer'
      }}>
            <span style={{
          font: 'var(--font-weight-normal) var(--font-size-base)/var(--font-height-base) var(--font-family-body)',
          color: 'var(--object-primary)'
        }}>{label}</span>
            <Switch checked={v[k]} onChange={n => setV({
          ...v,
          [k]: n
        })} aria-label={label} />
          </label>)}
      </Stack>;
  }
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source},description:{story:"bản thiết kế chưa có hàng switch + nhãn. Ví dụ dưới là cách màn tự dựng, không phải spec.",...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};const R=["Playground","Matrix","SettingRows"],B=Object.freeze(Object.defineProperty({__proto__:null,Matrix:c,Playground:o,SettingRows:n,__namedExportsOrder:R,default:C},Symbol.toStringTag,{value:"Module"}));export{o as P,B as S};

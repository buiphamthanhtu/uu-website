import{r as v,j as e,F as C,R as f,C as s}from"./iframe-CG-Y5hsd.js";import{a as l,R as j}from"./Radio-DEaAKEc5.js";const R={title:"Component/Lựa chọn/Radio",component:l,args:{checked:!1,disabled:!1,error:!1,state:"default","aria-label":"Lựa chọn"},argTypes:{state:{control:"radio",options:["default","hover","pressed"]},onChange:{action:"change"}},render:a=>{const[r,x]=v.useState(a.checked);return e.jsx(l,{...a,checked:r,onChange:()=>{var c;x(!0),(c=a.onChange)==null||c.call(a)}})}},d={},t={name:"10 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(f,{children:[[!1,!0].map(a=>["default","hover","pressed"].map(r=>e.jsx(s,{label:`${a?"Checked":"Unchecked"} · ${r}`,children:e.jsx(l,{checked:a,state:r,"aria-label":r})},`${a}-${r}`))),e.jsx(s,{label:"Unchecked · Error",children:e.jsx(l,{checked:!1,error:!0,"aria-label":"error"})}),e.jsx(s,{label:"Checked · Error",children:e.jsx(l,{checked:!0,error:!0,"aria-label":"error"})}),e.jsx(s,{label:"Unchecked · Disabled",children:e.jsx(l,{checked:!1,disabled:!0,"aria-label":"disabled"})}),e.jsx(s,{label:"Checked · Disabled",children:e.jsx(l,{checked:!0,disabled:!0,"aria-label":"disabled"})})]})},o={name:"RadioList (hàng + nét đứt)",parameters:{controls:{disable:!0}},render:()=>{const[a,r]=v.useState("a");return e.jsx("div",{style:{width:358,maxWidth:C},children:e.jsx(j,{"aria-label":"Lý do xoá tài khoản",value:a,onChange:r,options:[{value:"a",label:"Tôi không còn nhu cầu sử dụng"},{value:"b",label:"Tôi lo ngại về quyền riêng tư và cách dữ liệu của tôi được sử dụng"},{value:"c",label:"Ứng dụng khó dùng"},{value:"d",label:"Lý do khác"}]})})}};var n,i,h;d.parameters={...d.parameters,docs:{...(n=d.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(h=(i=d.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var u,b,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '10 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      {([false, true] as const).map(checked => (['default', 'hover', 'pressed'] as const).map(state => <Cell key={\`\${checked}-\${state}\`} label={\`\${checked ? 'Checked' : 'Unchecked'} · \${state}\`}><Radio checked={checked} state={state} aria-label={state} /></Cell>))}
      <Cell label="Unchecked · Error"><Radio checked={false} error aria-label="error" /></Cell>
      <Cell label="Checked · Error"><Radio checked error aria-label="error" /></Cell>
      <Cell label="Unchecked · Disabled"><Radio checked={false} disabled aria-label="disabled" /></Cell>
      <Cell label="Checked · Disabled"><Radio checked disabled aria-label="disabled" /></Cell>
    </Row>
}`,...(p=(b=t.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var m,k,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'RadioList (hàng + nét đứt)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState('a');
    return <div style={{
      width: 358,
      maxWidth: FIT
    }}>
        <RadioList aria-label="Lý do xoá tài khoản" value={v} onChange={setV} options={[{
        value: 'a',
        label: 'Tôi không còn nhu cầu sử dụng'
      }, {
        value: 'b',
        label: 'Tôi lo ngại về quyền riêng tư và cách dữ liệu của tôi được sử dụng'
      }, {
        value: 'c',
        label: 'Ứng dụng khó dùng'
      }, {
        value: 'd',
        label: 'Lý do khác'
      }]} />
      </div>;
  }
}`,...(g=(k=o.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const L=["Playground","Matrix","List"],T=Object.freeze(Object.defineProperty({__proto__:null,List:o,Matrix:t,Playground:d,__namedExportsOrder:L,default:R},Symbol.toStringTag,{value:"Module"}));export{o as L,t as M,d as P,T as S};

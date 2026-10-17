import{r as p,j as n,T as q}from"./iframe-EkKnofS_.js";import{C as u,a as m}from"./Checkbox-BSanYiGM.js";import{S as C,R as D,C as k}from"./layout-Xzi5pJ9U.js";/* empty css              */const U={title:"Component/Lựa chọn/Checkbox",component:u,args:{checked:!1,disabled:!1,error:!1,state:"default","aria-label":"Đồng ý"},argTypes:{checked:{control:"radio",options:[!1,!0,"indeterminate"]},state:{control:"radio",options:["default","hover","pressed"]},onChange:{action:"change"}},render:e=>{const[t,r]=p.useState(e.checked);return n.jsx(u,{...e,checked:t,onChange:c=>{var s;r(c),(s=e.onChange)==null||s.call(e,c)}})}},d={},b={false:"Unchecked",true:"Checked",indeterminate:"Indeterminate"},l={name:"15 variant",parameters:{controls:{disable:!0}},render:()=>n.jsxs(D,{children:[[!1,!0,"indeterminate"].map(e=>["default","hover","pressed"].map(t=>n.jsx(k,{label:`${b[String(e)]} · ${t}`,children:n.jsx(u,{checked:e,state:t,"aria-label":t})},`${e}-${t}`))),[!1,!0,"indeterminate"].map(e=>n.jsx(k,{label:`${b[String(e)]} · Error`,children:n.jsx(u,{checked:e,error:!0,"aria-label":"error"})},`e-${e}`)),[!1,!0,"indeterminate"].map(e=>n.jsx(k,{label:`${b[String(e)]} · Disabled`,children:n.jsx(u,{checked:e,disabled:!0,"aria-label":"disabled"})},`d-${e}`))]})},o={name:"Chọn tất cả (Indeterminate)",parameters:{controls:{disable:!0}},render:()=>{const e=["Sữa tươi 1L","Bánh mì sandwich","Nước suối 500ml"],[t,r]=p.useState([!0,!1,!1]),c=t.every(Boolean),s=t.every(a=>!a);return n.jsxs(C,{style:{width:316},children:[n.jsx(m,{checked:c?!0:s?!1:"indeterminate",onChange:a=>r(t.map(()=>a)),children:"Chọn tất cả"}),e.map((a,g)=>n.jsx(m,{checked:t[g],onChange:z=>r(t.map((M,O)=>O===g?z:M)),children:a},a))]})}},h={name:"CheckboxInput (hàng)",parameters:{controls:{disable:!0}},render:()=>{const[e,t]=p.useState({a:!0,b:!1});return n.jsxs(C,{style:{width:316},children:[n.jsx(m,{checked:e.a,onChange:r=>t({...e,a:r}),children:"Tôi đồng ý với Điều khoản sử dụng và Chính sách bảo mật"}),n.jsx(m,{checked:e.b,onChange:r=>t({...e,b:r}),children:"Nhận thông báo ưu đãi"})]})}},i={name:"Error — ô bắt buộc chưa tick",parameters:{controls:{disable:!0}},render:()=>{const[e,t]=p.useState(!1),[r,c]=p.useState(!1),s=r&&!e;return n.jsxs(C,{style:{width:316},children:[n.jsx(m,{checked:e,error:s,onChange:a=>t(a),children:"Tôi đồng ý với Điều khoản sử dụng và Chính sách bảo mật"}),s&&n.jsx("span",{className:"uu-fielderror",children:"Cần đồng ý với điều khoản để tiếp tục"}),n.jsx(q,{size:"base",onClick:()=>c(!0),children:"Tiếp tục"})]})}};var x,S,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(f=(S=d.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,j,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:"{\n  name: '15 variant',\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: () => <Row>\n      {([false, true, 'indeterminate'] as const).map(checked => (['default', 'hover', 'pressed'] as const).map(state => <Cell key={`${checked}-${state}`} label={`${LABEL[String(checked)]} · ${state}`}><Checkbox checked={checked} state={state} aria-label={state} /></Cell>))}\n      {([false, true, 'indeterminate'] as const).map(checked => <Cell key={`e-${checked}`} label={`${LABEL[String(checked)]} · Error`}><Checkbox checked={checked} error aria-label=\"error\" /></Cell>)}\n      {([false, true, 'indeterminate'] as const).map(checked => <Cell key={`d-${checked}`} label={`${LABEL[String(checked)]} · Disabled`}><Checkbox checked={checked} disabled aria-label=\"disabled\" /></Cell>)}\n    </Row>\n}",...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var I,T,$,E,w;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Chọn tất cả (Indeterminate)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const items = ['Sữa tươi 1L', 'Bánh mì sandwich', 'Nước suối 500ml'];
    const [picked, setPicked] = useState<boolean[]>([true, false, false]);
    const all = picked.every(Boolean);
    const none = picked.every(v => !v);
    return <Stack style={{
      width: 316
    }}>
        <CheckboxInput checked={all ? true : none ? false : 'indeterminate'} onChange={n => setPicked(picked.map(() => n))}>Chọn tất cả</CheckboxInput>
        {items.map((label, i) => <CheckboxInput key={label} checked={picked[i]} onChange={n => setPicked(picked.map((v, j) => j === i ? n : v))}>{label}</CheckboxInput>)}
      </Stack>;
  }
}`,...($=(T=o.parameters)==null?void 0:T.docs)==null?void 0:$.source},description:{story:'Ô "chọn tất cả" đứng trên danh sách: tick một phần thì ô đầu là Indeterminate.',...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.description}}};var A,B,L;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'CheckboxInput (hàng)',
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
        <CheckboxInput checked={v.a} onChange={n => setV({
        ...v,
        a: n
      })}>Tôi đồng ý với Điều khoản sử dụng và Chính sách bảo mật</CheckboxInput>
        <CheckboxInput checked={v.b} onChange={n => setV({
        ...v,
        b: n
      })}>Nhận thông báo ưu đãi</CheckboxInput>
      </Stack>;
  }
}`,...(L=(B=h.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var R,P,N,_,V;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Error — ô bắt buộc chưa tick',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [agree, setAgree] = useState(false);
    const [tried, setTried] = useState(false);
    const invalid = tried && !agree;
    return <Stack style={{
      width: 316
    }}>
        <CheckboxInput checked={agree} error={invalid} onChange={n => setAgree(n)}>Tôi đồng ý với Điều khoản sử dụng và Chính sách bảo mật</CheckboxInput>
        {invalid && <span className="uu-fielderror">Cần đồng ý với điều khoản để tiếp tục</span>}
        <TextButtonAccent size="base" onClick={() => setTried(true)}>Tiếp tục</TextButtonAccent>
      </Stack>;
  }
}`,...(N=(P=i.parameters)==null?void 0:P.docs)==null?void 0:N.source},description:{story:"Ô bắt buộc chưa tick: báo lỗi tại chỗ bằng `State=Error` + dòng chữ dưới, không dùng Toast.",...(V=(_=i.parameters)==null?void 0:_.docs)==null?void 0:V.description}}};const F=["Playground","Matrix","SelectAll","InputRow","ErrorRequired"],Q=Object.freeze(Object.defineProperty({__proto__:null,ErrorRequired:i,InputRow:h,Matrix:l,Playground:d,SelectAll:o,__namedExportsOrder:F,default:U},Symbol.toStringTag,{value:"Module"}));export{d as P,Q as S};

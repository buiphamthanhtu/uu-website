import{j as e,r as h}from"./iframe-EkKnofS_.js";import{C as a}from"./Chip-DZVZTLIq.js";import{R as p,S as D,C as m}from"./layout-Xzi5pJ9U.js";const E={title:"Component/Lựa chọn/Chip",component:a,args:{children:"Hồ bơi",type:"select",selected:!1,disabled:!1,state:"default"},argTypes:{type:{control:"radio",options:["select","dropdown"]},state:{control:"radio",options:["default","hover","pressed"]}},render:n=>{const[t,s]=h.useState(n.selected);return e.jsx(a,{...n,selected:t,onSelectedChange:s})}},i={},l={name:"16 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(D,{children:["select","dropdown"].map(n=>e.jsxs(p,{children:[[!1,!0].map(t=>["default","hover","pressed"].map(s=>e.jsx(m,{label:`${n} · ${t?"chọn":"chưa"} · ${s}`,children:e.jsx(a,{type:n,selected:t,state:s,children:"Hồ bơi"})},`${n}-${t}-${s}`))),[!1,!0].map(t=>e.jsx(m,{label:`${n} · ${t?"chọn":"chưa"} · disabled`,children:e.jsx(a,{type:n,selected:t,disabled:!0,children:"Hồ bơi"})},`${n}-d-${t}`))]},n))})},o={name:"Chọn nhiều",parameters:{controls:{disable:!0}},render:()=>{const n=["Đưa đón sân bay","Hồ bơi","Phòng gym","Phục vụ 24/7","Bữa sáng"],[t,s]=h.useState(["Hồ bơi"]);return e.jsx(D,{style:{maxWidth:358},children:e.jsx(p,{style:{flexWrap:"wrap",gap:8},children:n.map(r=>e.jsx(a,{selected:t.includes(r),onSelectedChange:K=>s(K?[...t,r]:t.filter(O=>O!==r)),children:r},r))})})}},c={name:"Chọn một",parameters:{controls:{disable:!0}},render:()=>{const n=["CUV","Pickup","SUV","Sedan","MPV","Hatchback"],[t,s]=h.useState("SUV");return e.jsx(p,{style:{flexWrap:"wrap",gap:8,maxWidth:358},children:n.map(r=>e.jsx(a,{selected:t===r,onSelectedChange:()=>s(r),children:r},r))})}},d={name:"Mở danh sách",parameters:{controls:{disable:!0}},render:()=>e.jsxs(p,{children:[e.jsx(a,{type:"dropdown",children:"Khoảng giá"}),e.jsx(a,{type:"dropdown",selected:!0,children:"Dưới 2 triệu"}),e.jsx(a,{type:"dropdown",disabled:!0,children:"Khoảng giá"})]})};var u,g,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var C,S,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:"{\n  name: '16 variant',\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: () => <Stack>\n      {(['select', 'dropdown'] as const).map(type => <Row key={type}>\n          {([false, true] as const).map(selected => (['default', 'hover', 'pressed'] as const).map(state => <Cell key={`${type}-${selected}-${state}`} label={`${type} · ${selected ? 'chọn' : 'chưa'} · ${state}`}>\n              <Chip type={type} selected={selected} state={state}>Hồ bơi</Chip>\n            </Cell>))}\n          {([false, true] as const).map(selected => <Cell key={`${type}-d-${selected}`} label={`${type} · ${selected ? 'chọn' : 'chưa'} · disabled`}>\n              <Chip type={type} selected={selected} disabled>Hồ bơi</Chip>\n            </Cell>)}\n        </Row>)}\n    </Stack>\n}",...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var x,k,w,f,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Chọn nhiều',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const items = ['Đưa đón sân bay', 'Hồ bơi', 'Phòng gym', 'Phục vụ 24/7', 'Bữa sáng'];
    const [picked, setPicked] = useState<string[]>(['Hồ bơi']);
    return <Stack style={{
      maxWidth: 358
    }}>
        <Row style={{
        flexWrap: 'wrap',
        gap: 8
      }}>
          {items.map(it => <Chip key={it} selected={picked.includes(it)} onSelectedChange={on => setPicked(on ? [...picked, it] : picked.filter(x => x !== it))}>{it}</Chip>)}
        </Row>
      </Stack>;
  }
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"Chọn nhiều: tick bao nhiêu cũng được. Giá trị ngắn, không xuống dòng ở khổ 390 → dùng chip.",...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};var $,P,v,H,R;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Chọn một',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const items = ['CUV', 'Pickup', 'SUV', 'Sedan', 'MPV', 'Hatchback'];
    const [value, setValue] = useState('SUV');
    return <Row style={{
      flexWrap: 'wrap',
      gap: 8,
      maxWidth: 358
    }}>
        {items.map(it => <Chip key={it} selected={value === it} onSelectedChange={() => setValue(it)}>{it}</Chip>)}
      </Row>;
  }
}`,...(v=(P=c.parameters)==null?void 0:P.docs)==null?void 0:v.source},description:{story:"Chọn một: bấm cái khác thì cái cũ bỏ chọn.",...(R=(H=c.parameters)==null?void 0:H.docs)==null?void 0:R.description}}};var V,M,W,U,_;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Mở danh sách',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Chip type="dropdown">Khoảng giá</Chip>
      <Chip type="dropdown" selected>Dưới 2 triệu</Chip>
      <Chip type="dropdown" disabled>Khoảng giá</Chip>
    </Row>
}`,...(W=(M=d.parameters)==null?void 0:M.docs)==null?void 0:W.source},description:{story:"Chip mở danh sách: hiện giá trị đang chọn, bấm vào mới bung panel (màn tự dựng panel).",...(_=(U=d.parameters)==null?void 0:U.docs)==null?void 0:_.description}}};const B=["Playground","Matrix","MultiSelect","SingleSelect","Dropdown"],L=Object.freeze(Object.defineProperty({__proto__:null,Dropdown:d,Matrix:l,MultiSelect:o,Playground:i,SingleSelect:c,__namedExportsOrder:B,default:E},Symbol.toStringTag,{value:"Module"}));export{i as P,L as S};

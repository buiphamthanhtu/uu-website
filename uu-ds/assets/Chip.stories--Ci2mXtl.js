import{j as e,r as p}from"./iframe-6vwN6wb9.js";import{C as s}from"./Chip-Ccfh2xHF.js";import{M as de,S as he}from"./SearchInput-DzxMgUfj.js";import{R as l,S as v,C as x}from"./layout-nPJ89kCs.js";const ue={title:"Component/Lựa chọn/Chip",component:s,args:{children:"Hồ bơi",type:"select",selected:!1,open:!1,disabled:!1,state:"default"},argTypes:{type:{control:"radio",options:["select","dropdown","input"]},state:{control:"radio",options:["default","hover","pressed"]},prefixIcon:{control:"select",options:[void 0,"star","map-pin","tag","user"]}},render:n=>{const[t,r]=p.useState(n.selected);return e.jsx(s,{...n,selected:t,onSelectedChange:r,onRemove:()=>{}})}},b={},y={name:"20 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(v,{children:[["select","dropdown"].map(n=>e.jsxs(l,{children:[[!1,!0].map(t=>["default","hover","pressed"].map(r=>e.jsx(x,{label:`${n} · ${t?"chọn":"chưa"} · ${r}`,children:e.jsx(s,{type:n,selected:t,state:r,children:"Hồ bơi"})},`${n}-${t}-${r}`))),[!1,!0].map(t=>e.jsx(x,{label:`${n} · ${t?"chọn":"chưa"} · disabled`,children:e.jsx(s,{type:n,selected:t,disabled:!0,children:"Hồ bơi"})},`${n}-d-${t}`))]},n)),e.jsxs(l,{children:[["default","hover","pressed"].map(n=>e.jsx(x,{label:`input · ${n}`,children:e.jsx(s,{type:"input",state:n,onRemove:()=>{},children:"Hồ bơi"})},`input-${n}`)),e.jsx(x,{label:"input · disabled",children:e.jsx(s,{type:"input",disabled:!0,children:"Hồ bơi"})})]})]})},d={name:"Icon trước chữ",parameters:{controls:{disable:!0}},render:()=>e.jsxs(l,{style:{flexWrap:"wrap",gap:8},children:[e.jsx(s,{prefixIcon:"star",children:"Đánh giá 4+"}),e.jsx(s,{prefixIcon:"star",selected:!0,children:"Đánh giá 4+"}),e.jsx(s,{type:"dropdown",prefixIcon:"map-pin",children:"Khu vực"}),e.jsx(s,{type:"dropdown",prefixIcon:"map-pin",selected:!0,children:"Quận 1"}),e.jsx(s,{type:"input",prefixIcon:"user",onRemove:()=>{},children:"Minh Anh"}),e.jsx(s,{prefixIcon:"star",disabled:!0,children:"Đánh giá 4+"})]})},h={name:"Gỡ được (Input)",parameters:{controls:{disable:!0}},render:()=>{const[n,t]=p.useState(["Đà Lạt","Có hồ bơi","Dưới 2 triệu","Gần biển"]),[r,a]=p.useState(""),i=p.useRef(null);return e.jsxs(v,{style:{maxWidth:358},children:[e.jsx(l,{style:{flexWrap:"wrap",gap:8},children:n.map((o,S)=>e.jsx(s,{type:"input",onRemove:()=>{t(n.filter(c=>c!==o)),S===n.length-1&&requestAnimationFrame(()=>{var c;return(c=i.current)==null?void 0:c.focus()})},children:o},o))}),e.jsx(he,{ref:i,value:r,placeholder:"Thêm từ khoá",onChange:o=>a(o.target.value),onClear:()=>a(""),onKeyDown:o=>{o.key==="Enter"&&r.trim()&&(t([...n,r.trim()]),a(""))}})]})}},u={name:"Chọn nhiều",parameters:{controls:{disable:!0}},render:()=>{const n=["Đưa đón sân bay","Hồ bơi","Phòng gym","Phục vụ 24/7","Bữa sáng"],[t,r]=p.useState(["Hồ bơi"]);return e.jsx(v,{style:{maxWidth:358},children:e.jsx(l,{style:{flexWrap:"wrap",gap:8},children:n.map(a=>e.jsx(s,{selected:t.includes(a),onSelectedChange:i=>r(i?[...t,a]:t.filter(o=>o!==a)),children:a},a))})})}},m={name:"Chọn một",parameters:{controls:{disable:!0}},render:()=>{const n=["CUV","Pickup","SUV","Sedan","MPV","Hatchback"],[t,r]=p.useState("SUV");return e.jsx(l,{style:{flexWrap:"wrap",gap:8,maxWidth:358},children:n.map(a=>e.jsx(s,{selected:t===a,onSelectedChange:()=>r(a),children:a},a))})}},g={name:"Mở danh sách",parameters:{controls:{disable:!0}},render:()=>e.jsxs(l,{children:[e.jsx(s,{type:"dropdown",children:"Khoảng giá"}),e.jsx(s,{type:"dropdown",selected:!0,children:"Dưới 2 triệu"}),e.jsx(s,{type:"dropdown",open:!0,children:"Khoảng giá"}),e.jsx(s,{type:"dropdown",disabled:!0,children:"Khoảng giá"})]})},k=[{value:"duoi-1",label:"Dưới 1 triệu"},{value:"1-2",label:"1 – 2 triệu"},{value:"2-5",label:"2 – 5 triệu"},{value:"tren-5",label:"Trên 5 triệu"}],me=["Quận 1","Quận 3","Quận 7","Bình Thạnh","Thủ Đức"].map(n=>({value:n,label:n})),C={name:"Panel · chọn một",parameters:{controls:{disable:!0}},render:()=>{const[n,t]=p.useState(!0),[r,a]=p.useState(void 0),i=k.find(o=>o.value===r);return e.jsx("div",{style:{minHeight:280},children:e.jsx(s,{type:"dropdown",open:n,selected:!!i,onClick:()=>t(o=>!o),onClose:()=>t(!1),menu:e.jsx(de,{"aria-label":"Khoảng giá",options:k,value:r,onSelect:a}),children:i?i.label:"Khoảng giá"})})}},f={name:"Panel · chọn nhiều",parameters:{controls:{disable:!0}},render:()=>{const[n,t]=p.useState(!0),[r,a]=p.useState(["Quận 1","Quận 3"]),[i,o]=p.useState(r),S=()=>{o(r),t(c=>!c)};return e.jsx("div",{style:{minHeight:420},children:e.jsx(s,{type:"dropdown",open:n,selected:r.length>0,onClick:S,onClose:()=>t(!1),menu:e.jsx(de,{type:"multiple",selectAll:!0,footer:!0,"aria-label":"Khu vực",options:me,values:i,onValuesChange:o,applyLabel:i.length?`Áp dụng (${i.length})`:"Áp dụng",onApply:c=>{a(c),t(!1)}}),children:r.length?`Khu vực · ${r.length}`:"Khu vực"})})}};var w,j,R;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(R=(j=b.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var I,$,P;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '20 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {(['select', 'dropdown'] as const).map(type => <Row key={type}>
          {([false, true] as const).map(selected => (['default', 'hover', 'pressed'] as const).map(state => <Cell key={\`\${type}-\${selected}-\${state}\`} label={\`\${type} · \${selected ? 'chọn' : 'chưa'} · \${state}\`}>
              <Chip type={type} selected={selected} state={state}>Hồ bơi</Chip>
            </Cell>))}
          {([false, true] as const).map(selected => <Cell key={\`\${type}-d-\${selected}\`} label={\`\${type} · \${selected ? 'chọn' : 'chưa'} · disabled\`}>
              <Chip type={type} selected={selected} disabled>Hồ bơi</Chip>
            </Cell>)}
        </Row>)}
      <Row>
        {(['default', 'hover', 'pressed'] as const).map(state => <Cell key={\`input-\${state}\`} label={\`input · \${state}\`}>
            <Chip type="input" state={state} onRemove={() => {}}>Hồ bơi</Chip>
          </Cell>)}
        <Cell label="input · disabled"><Chip type="input" disabled>Hồ bơi</Chip></Cell>
      </Row>
    </Stack>
}`,...(P=($=y.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var H,K,M,D,T;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Icon trước chữ',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row style={{
    flexWrap: 'wrap',
    gap: 8
  }}>
      <Chip prefixIcon="star">Đánh giá 4+</Chip>
      <Chip prefixIcon="star" selected>Đánh giá 4+</Chip>
      <Chip type="dropdown" prefixIcon="map-pin">Khu vực</Chip>
      <Chip type="dropdown" prefixIcon="map-pin" selected>Quận 1</Chip>
      <Chip type="input" prefixIcon="user" onRemove={() => {}}>Minh Anh</Chip>
      <Chip prefixIcon="star" disabled>Đánh giá 4+</Chip>
    </Row>
}`,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source},description:{story:"`Prefix icon`: icon 16 trước chữ, cùng màu chữ, mọi `Type`. `Type=Select` đã chọn: `check` thay chỗ icon — chip chỉ có một icon đầu.",...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var V,A,Q,W,E;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Gỡ được (Input)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [tags, setTags] = useState(['Đà Lạt', 'Có hồ bơi', 'Dưới 2 triệu', 'Gần biển']);
    const [q, setQ] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    return <Stack style={{
      maxWidth: 358
    }}>
        <Row style={{
        flexWrap: 'wrap',
        gap: 8
      }}>
          {tags.map((t, i) => <Chip key={t} type="input" onRemove={() => {
          setTags(tags.filter(x => x !== t));
          if (i === tags.length - 1) requestAnimationFrame(() => inputRef.current?.focus()); // hết chip phía sau → về ô nhập
        }}>{t}</Chip>)}
        </Row>
        <SearchInput ref={inputRef} value={q} placeholder="Thêm từ khoá" onChange={e => setQ(e.target.value)} onClear={() => setQ('')} onKeyDown={e => {
        if (e.key === 'Enter' && q.trim()) {
          setTags([...tags, q.trim()]);
          setQ('');
        }
      }} />
      </Stack>;
  }
}`,...(Q=(A=h.parameters)==null?void 0:A.docs)==null?void 0:Q.source},description:{story:"`Type=Input`: mỗi chip là một giá trị đã nhập / đã áp dụng. Bấm `xmark` (hoặc Backspace / Delete khi nút có focus)\nđể gỡ; focus sang chip kế tiếp, hết chip thì về ô nhập. Thân chip không bấm được.",...(E=(W=h.parameters)==null?void 0:W.docs)==null?void 0:E.description}}};var O,L,q,B,U;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(L=u.parameters)==null?void 0:L.docs)==null?void 0:q.source},description:{story:"Chọn nhiều: tick bao nhiêu cũng được. Giá trị ngắn, không xuống dòng ở khổ 390 → dùng chip.",...(U=(B=u.parameters)==null?void 0:B.docs)==null?void 0:U.description}}};var _,G,F,z,J;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(G=m.parameters)==null?void 0:G.docs)==null?void 0:F.source},description:{story:"Chọn một: bấm cái khác thì cái cũ bỏ chọn.",...(J=(z=m.parameters)==null?void 0:z.docs)==null?void 0:J.description}}};var N,X,Y,Z,ee;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Mở danh sách',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Chip type="dropdown">Khoảng giá</Chip>
      <Chip type="dropdown" selected>Dưới 2 triệu</Chip>
      <Chip type="dropdown" open>Khoảng giá</Chip>
      <Chip type="dropdown" disabled>Khoảng giá</Chip>
    </Row>
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Chip mở danh sách: hiện giá trị đang chọn, bấm vào mới bung panel. `open` = đang mở → chip Selected, chevron-up.",...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ne,te,re,se,ae;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Panel · chọn một',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    const [v, setV] = useState<string | undefined>(undefined);
    const picked = PRICES.find(o => o.value === v);
    return <div style={{
      minHeight: 280
    }}>
        <Chip type="dropdown" open={open} selected={Boolean(picked)} onClick={() => setOpen(o => !o)} onClose={() => setOpen(false)} menu={<Menu aria-label="Khoảng giá" options={PRICES} value={v} onSelect={setV} />}>
          {picked ? picked.label : 'Khoảng giá'}
        </Chip>
      </div>;
  }
}`,...(re=(te=C.parameters)==null?void 0:te.docs)==null?void 0:re.source},description:{story:"Panel bung ra: prop `menu` — chip tự neo `Menu` Panel dưới mình, cách 4, rộng tối thiểu 240; bấm ra ngoài / Esc thì đóng. Lọc **một** giá trị: chọn xong đóng ngay, nhãn chip thành giá trị đã chọn.",...(ae=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ae.description}}};var oe,ie,pe,ce,le;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Panel · chọn nhiều',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    const [applied, setApplied] = useState<string[]>(['Quận 1', 'Quận 3']);
    const [draft, setDraft] = useState<string[]>(applied);
    const toggle = () => {
      setDraft(applied);
      setOpen(o => !o);
    };
    return <div style={{
      minHeight: 420
    }}>
        <Chip type="dropdown" open={open} selected={applied.length > 0} onClick={toggle} onClose={() => setOpen(false)} menu={<Menu type="multiple" selectAll footer aria-label="Khu vực" options={AREAS} values={draft} onValuesChange={setDraft} applyLabel={draft.length ? \`Áp dụng (\${draft.length})\` : 'Áp dụng'} onApply={vals => {
        setApplied(vals);
        setOpen(false);
      }} />}>
          {applied.length ? \`Khu vực · \${applied.length}\` : 'Khu vực'}
        </Chip>
      </div>;
  }
}`,...(pe=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:pe.source},description:{story:'Lọc **nhiều**: `type="multiple"` + "Chọn tất cả" + footer. Chọn không đóng; "Áp dụng" mới chốt, nhãn chip "{Tên} · n"; bấm ra ngoài / Esc đóng mà không áp dụng. Chưa chọn gì: nhãn là tên bộ lọc, chip chưa chọn.',...(le=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};const ge=["Playground","Matrix","PrefixIcon","Input","MultiSelect","SingleSelect","Dropdown","DropdownSingle","DropdownMultiple"],xe=Object.freeze(Object.defineProperty({__proto__:null,Dropdown:g,DropdownMultiple:f,DropdownSingle:C,Input:h,Matrix:y,MultiSelect:u,Playground:b,PrefixIcon:d,SingleSelect:m,__namedExportsOrder:ge,default:ue},Symbol.toStringTag,{value:"Module"}));export{C as D,h as I,y as M,b as P,xe as S,u as a,m as b,f as c,d};

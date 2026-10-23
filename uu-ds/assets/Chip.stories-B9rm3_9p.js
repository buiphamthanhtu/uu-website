import{j as e,r as l}from"./iframe-BYdOfVdF.js";import{C as r}from"./Chip-DzZY1Mm5.js";import{M as X}from"./Menu-OLQ6gIOL.js";import{R as v,S as Y,C as y}from"./layout-Bjrrhjus.js";const ee={title:"Component/Lựa chọn/Chip",component:r,args:{children:"Hồ bơi",type:"select",selected:!1,open:!1,disabled:!1,state:"default"},argTypes:{type:{control:"radio",options:["select","dropdown"]},state:{control:"radio",options:["default","hover","pressed"]}},render:n=>{const[t,s]=l.useState(n.selected);return e.jsx(r,{...n,selected:t,onSelectedChange:s})}},m={},g={name:"16 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(Y,{children:["select","dropdown"].map(n=>e.jsxs(v,{children:[[!1,!0].map(t=>["default","hover","pressed"].map(s=>e.jsx(y,{label:`${n} · ${t?"chọn":"chưa"} · ${s}`,children:e.jsx(r,{type:n,selected:t,state:s,children:"Hồ bơi"})},`${n}-${t}-${s}`))),[!1,!0].map(t=>e.jsx(y,{label:`${n} · ${t?"chọn":"chưa"} · disabled`,children:e.jsx(r,{type:n,selected:t,disabled:!0,children:"Hồ bơi"})},`${n}-d-${t}`))]},n))})},c={name:"Chọn nhiều",parameters:{controls:{disable:!0}},render:()=>{const n=["Đưa đón sân bay","Hồ bơi","Phòng gym","Phục vụ 24/7","Bữa sáng"],[t,s]=l.useState(["Hồ bơi"]);return e.jsx(Y,{style:{maxWidth:358},children:e.jsx(v,{style:{flexWrap:"wrap",gap:8},children:n.map(a=>e.jsx(r,{selected:t.includes(a),onSelectedChange:i=>s(i?[...t,a]:t.filter(o=>o!==a)),children:a},a))})})}},p={name:"Chọn một",parameters:{controls:{disable:!0}},render:()=>{const n=["CUV","Pickup","SUV","Sedan","MPV","Hatchback"],[t,s]=l.useState("SUV");return e.jsx(v,{style:{flexWrap:"wrap",gap:8,maxWidth:358},children:n.map(a=>e.jsx(r,{selected:t===a,onSelectedChange:()=>s(a),children:a},a))})}},d={name:"Mở danh sách",parameters:{controls:{disable:!0}},render:()=>e.jsxs(v,{children:[e.jsx(r,{type:"dropdown",children:"Khoảng giá"}),e.jsx(r,{type:"dropdown",selected:!0,children:"Dưới 2 triệu"}),e.jsx(r,{type:"dropdown",open:!0,children:"Khoảng giá"}),e.jsx(r,{type:"dropdown",disabled:!0,children:"Khoảng giá"})]})},S=[{value:"duoi-1",label:"Dưới 1 triệu"},{value:"1-2",label:"1 – 2 triệu"},{value:"2-5",label:"2 – 5 triệu"},{value:"tren-5",label:"Trên 5 triệu"}],ne=["Quận 1","Quận 3","Quận 7","Bình Thạnh","Thủ Đức"].map(n=>({value:n,label:n})),h={name:"Panel · chọn một",parameters:{controls:{disable:!0}},render:()=>{const[n,t]=l.useState(!0),[s,a]=l.useState(void 0),i=S.find(o=>o.value===s);return e.jsxs("div",{style:{position:"relative",minHeight:280},children:[e.jsx(r,{type:"dropdown",open:n,selected:!!i,onClick:()=>t(o=>!o),children:i?i.label:"Khoảng giá"}),n&&e.jsx("div",{style:{position:"absolute",left:0,top:"calc(var(--control-height-small) + var(--gap-1))",minWidth:"var(--size-60)",zIndex:10},children:e.jsx(X,{"aria-label":"Khoảng giá",options:S,value:s,onSelect:o=>{a(o),t(!1)}})})]})}},u={name:"Panel · chọn nhiều",parameters:{controls:{disable:!0}},render:()=>{const[n,t]=l.useState(!0),[s,a]=l.useState(["Quận 1","Quận 3"]),[i,o]=l.useState(s),Z=()=>{o(s),t(b=>!b)};return e.jsxs("div",{style:{position:"relative",minHeight:400},children:[e.jsx(r,{type:"dropdown",open:n,selected:s.length>0,onClick:Z,children:s.length?`Khu vực · ${s.length}`:"Khu vực"}),n&&e.jsx("div",{style:{position:"absolute",left:0,top:"calc(var(--control-height-small) + var(--gap-1))",minWidth:"var(--size-60)",zIndex:10},children:e.jsx(X,{type:"multiple",footer:!0,"aria-label":"Khu vực",options:ne,values:i,onValuesChange:o,applyLabel:i.length?`Áp dụng (${i.length})`:"Áp dụng",onApply:b=>{a(b),t(!1)}})})]})}};var C,x,f;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,w,j;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:"{\n  name: '16 variant',\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: () => <Stack>\n      {(['select', 'dropdown'] as const).map(type => <Row key={type}>\n          {([false, true] as const).map(selected => (['default', 'hover', 'pressed'] as const).map(state => <Cell key={`${type}-${selected}-${state}`} label={`${type} · ${selected ? 'chọn' : 'chưa'} · ${state}`}>\n              <Chip type={type} selected={selected} state={state}>Hồ bơi</Chip>\n            </Cell>))}\n          {([false, true] as const).map(selected => <Cell key={`${type}-d-${selected}`} label={`${type} · ${selected ? 'chọn' : 'chưa'} · disabled`}>\n              <Chip type={type} selected={selected} disabled>Hồ bơi</Chip>\n            </Cell>)}\n        </Row>)}\n    </Stack>\n}",...(j=(w=g.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var P,$,K,M,R;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(K=($=c.parameters)==null?void 0:$.docs)==null?void 0:K.source},description:{story:"Chọn nhiều: tick bao nhiêu cũng được. Giá trị ngắn, không xuống dòng ở khổ 390 → dùng chip.",...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};var V,H,D,O,W;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(D=(H=p.parameters)==null?void 0:H.docs)==null?void 0:D.source},description:{story:"Chọn một: bấm cái khác thì cái cũ bỏ chọn.",...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.description}}};var z,A,E,I,Q;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:"Chip mở danh sách: hiện giá trị đang chọn, bấm vào mới bung panel. `open` = đang mở → chip Selected, chevron-up.",...(Q=(I=d.parameters)==null?void 0:I.docs)==null?void 0:Q.description}}};var T,U,_,B,L;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
      position: 'relative',
      minHeight: 280
    }}>
        <Chip type="dropdown" open={open} selected={Boolean(picked)} onClick={() => setOpen(o => !o)}>
          {picked ? picked.label : 'Khoảng giá'}
        </Chip>
        {open && <div style={{
        position: 'absolute',
        left: 0,
        top: 'calc(var(--control-height-small) + var(--gap-1))',
        minWidth: 'var(--size-60)',
        zIndex: 10
      }}>
            <Menu aria-label="Khoảng giá" options={PRICES} value={v} onSelect={next => {
          setV(next);
          setOpen(false);
        }} />
          </div>}
      </div>;
  }
}`,...(_=(U=h.parameters)==null?void 0:U.docs)==null?void 0:_.source},description:{story:"Panel bung ra: `Menu` Panel neo dưới chip, cách 4, rộng tối thiểu 240. Lọc **một** giá trị: chọn xong đóng ngay, nhãn chip thành giá trị đã chọn.",...(L=(B=h.parameters)==null?void 0:B.docs)==null?void 0:L.description}}};var G,q,F,J,N;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
      position: 'relative',
      minHeight: 400
    }}>
        <Chip type="dropdown" open={open} selected={applied.length > 0} onClick={toggle}>
          {applied.length ? \`Khu vực · \${applied.length}\` : 'Khu vực'}
        </Chip>
        {open && <div style={{
        position: 'absolute',
        left: 0,
        top: 'calc(var(--control-height-small) + var(--gap-1))',
        minWidth: 'var(--size-60)',
        zIndex: 10
      }}>
            <Menu type="multiple" footer aria-label="Khu vực" options={AREAS} values={draft} onValuesChange={setDraft} applyLabel={draft.length ? \`Áp dụng (\${draft.length})\` : 'Áp dụng'} onApply={vals => {
          setApplied(vals);
          setOpen(false);
        }} />
          </div>}
      </div>;
  }
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source},description:{story:'Lọc **nhiều**: `type="multiple"` + footer. Chọn không đóng; "Áp dụng" mới chốt, nhãn chip "{Tên} · n". Chưa chọn gì: nhãn là tên bộ lọc, chip chưa chọn.',...(N=(J=u.parameters)==null?void 0:J.docs)==null?void 0:N.description}}};const te=["Playground","Matrix","MultiSelect","SingleSelect","Dropdown","DropdownSingle","DropdownMultiple"],ie=Object.freeze(Object.defineProperty({__proto__:null,Dropdown:d,DropdownMultiple:u,DropdownSingle:h,Matrix:g,MultiSelect:c,Playground:m,SingleSelect:p,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{m as P,ie as S};

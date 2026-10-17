import{j as e,r as i,T as R}from"./iframe-B79aK45l.js";import{M as a}from"./Menu-BpLlZ3j1.js";import{D as N}from"./Dropdown-CAFV5wI0.js";import{S as m,R as W,C as S}from"./layout-DfDgT8VD.js";const u=[{value:"gan-nhat",label:"Gần nhất"},{value:"gia-thap",label:"Giá thấp đến cao"},{value:"gia-cao",label:"Giá cao đến thấp"},{value:"danh-gia",label:"Đánh giá tốt nhất"}],A={title:"Component/Lựa chọn/Menu",component:a,args:{options:u,value:"gan-nhat",platform:"panel",header:"Sắp xếp theo",onSelect:()=>{}},argTypes:{platform:{control:"radio",options:["panel","sheet"]}},render:t=>{const[n,o]=i.useState(t.value);return e.jsx("div",{style:{width:280},children:e.jsx(a,{...t,value:n,onSelect:o})})}},d={},p={name:"8 variant của hàng option",parameters:{controls:{disable:!0}},render:()=>e.jsx(m,{children:[!1,!0].map(t=>e.jsxs(W,{children:[["default","hover","pressed"].map(n=>e.jsx(S,{label:`${t?"chọn":"chưa"} · ${n}`,children:e.jsx("div",{style:{width:194},children:e.jsx(a,{options:[{value:"a",label:"Option",icon:"texture",state:n}],value:t?"a":void 0,onSelect:()=>{}})})},`${t}-${n}`)),e.jsx(S,{label:`${t?"chọn":"chưa"} · disabled`,children:e.jsx("div",{style:{width:194},children:e.jsx(a,{options:[{value:"a",label:"Option",icon:"texture",disabled:!0}],value:t?"a":void 0,onSelect:()=>{}})})})]},String(t)))})},s={name:"Có icon trước chữ",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=i.useState("list");return e.jsx("div",{style:{width:280},children:e.jsx(a,{value:t,onSelect:n,"aria-label":"Cách xem",options:[{value:"list",label:"Danh sách",icon:"list-todo"},{value:"map",label:"Bản đồ",icon:"map"},{value:"grid",label:"Lưới ảnh",icon:"grid"}]})})}},r={name:"Ghép với Dropdown (panel)",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=i.useState(!0),[o,h]=i.useState(void 0),v=u.find(c=>c.value===o);return e.jsx(m,{style:{width:320},children:e.jsxs("div",{style:{position:"relative",width:"100%"},children:[e.jsx(N,{label:"Sắp xếp",value:v?String(v.label):"",onOpen:()=>n(c=>!c),"aria-expanded":t}),t&&e.jsx("div",{style:{position:"absolute",insetInline:0,top:"calc(100% + var(--gap-1))",zIndex:10},children:e.jsx(a,{options:u,value:o,onSelect:c=>{h(c),n(!1)},"aria-label":"Sắp xếp"})})]})})}},l={name:"Platform = Sheet",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=i.useState(!1),[o,h]=i.useState("gan-nhat");return e.jsxs(m,{style:{width:320},children:[e.jsx(R,{size:"base",onClick:()=>n(!0),children:"Mở Menu"}),e.jsx(a,{platform:"sheet",header:"Sắp xếp theo",open:t,onClose:()=>n(!1),options:u,value:o,onSelect:h})]})}};var b,x,g;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(g=(x=d.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,y,j;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '8 variant của hàng option',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {([false, true] as const).map(selected => <Row key={String(selected)}>
          {(['default', 'hover', 'pressed'] as const).map(state => <Cell key={\`\${selected}-\${state}\`} label={\`\${selected ? 'chọn' : 'chưa'} · \${state}\`}>
              <div style={{
          width: 194
        }}>
                <Menu options={[{
            value: 'a',
            label: 'Option',
            icon: 'texture',
            state
          }]} value={selected ? 'a' : undefined} onSelect={() => {}} />
              </div>
            </Cell>)}
          <Cell label={\`\${selected ? 'chọn' : 'chưa'} · disabled\`}>
            <div style={{
          width: 194
        }}>
              <Menu options={[{
            value: 'a',
            label: 'Option',
            icon: 'texture',
            disabled: true
          }]} value={selected ? 'a' : undefined} onSelect={() => {}} />
            </div>
          </Cell>
        </Row>)}
    </Stack>
}`,...(j=(y=p.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var O,w,k,C,M;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Có icon trước chữ',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState('list');
    return <div style={{
      width: 280
    }}>
        <Menu value={v} onSelect={setV} aria-label="Cách xem" options={[{
        value: 'list',
        label: 'Danh sách',
        icon: 'list-todo'
      }, {
        value: 'map',
        label: 'Bản đồ',
        icon: 'map'
      }, {
        value: 'grid',
        label: 'Lưới ảnh',
        icon: 'grid'
      }]} />
      </div>;
  }
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:"`Prefix` bật thì icon 24 đứng trước chữ: chưa chọn `object-secondary`, đã chọn `object-accent`.",...(M=(C=s.parameters)==null?void 0:C.docs)==null?void 0:M.description}}};var P,D,T,V,$;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Ghép với Dropdown (panel)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    const [v, setV] = useState<string | undefined>(undefined);
    const picked = OPTIONS.find(o => o.value === v);
    return <Stack style={{
      width: 320
    }}>
        <div style={{
        position: 'relative',
        width: '100%'
      }}>
          <Dropdown label="Sắp xếp" value={picked ? String(picked.label) : ''} onOpen={() => setOpen(o => !o)} aria-expanded={open} />
          {open && <div style={{
          position: 'absolute',
          insetInline: 0,
          top: 'calc(100% + var(--gap-1))',
          zIndex: 10
        }}>
              <Menu options={OPTIONS} value={v} onSelect={next => {
            setV(next);
            setOpen(false);
          }} aria-label="Sắp xếp" />
            </div>}
        </div>
      </Stack>;
  }
}`,...(T=(D=r.parameters)==null?void 0:D.docs)==null?void 0:T.source},description:{story:"Ghép với `Dropdown`: bấm ô thì bung panel. Phần **neo và đóng khi bấm ra ngoài là việc của màn** — bản thiết kế không chốt.",...($=(V=r.parameters)==null?void 0:V.docs)==null?void 0:$.description}}};var I,B,G,_,z;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Platform = Sheet',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [v, setV] = useState('gan-nhat');
    return <Stack style={{
      width: 320
    }}>
        <TextButtonAccent size="base" onClick={() => setOpen(true)}>Mở Menu</TextButtonAccent>
        <Menu platform="sheet" header="Sắp xếp theo" open={open} onClose={() => setOpen(false)} options={OPTIONS} value={v} onSelect={setV} />
      </Stack>;
  }
}`,...(G=(B=l.parameters)==null?void 0:B.docs)==null?void 0:G.source},description:{story:"`Platform=Sheet` — cùng danh sách, bung từ đáy màn, dùng lại nguyên `BottomSheet`.",...(z=(_=l.parameters)==null?void 0:_.docs)==null?void 0:z.description}}};const E=["Playground","Matrix","WithPrefix","WithDropdown","Sheet"],J=Object.freeze(Object.defineProperty({__proto__:null,Matrix:p,Playground:d,Sheet:l,WithDropdown:r,WithPrefix:s,__namedExportsOrder:E,default:A},Symbol.toStringTag,{value:"Module"}));export{d as P,J as S};

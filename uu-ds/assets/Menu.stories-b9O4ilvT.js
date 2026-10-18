import{j as e,r as s,T as se}from"./iframe-gn_pzB68.js";import{M as r,a as S,b as re,c as oe}from"./Menu-rV-yvW1l.js";import{D as le}from"./Dropdown-B1g6qmBe.js";import{S as x,R as ie,C as y}from"./layout-whGn3D85.js";const b=[{value:"gan-nhat",label:"Gần nhất"},{value:"gia-thap",label:"Giá thấp đến cao"},{value:"gia-cao",label:"Giá cao đến thấp"},{value:"danh-gia",label:"Đánh giá tốt nhất"}],ce={title:"Component/Lựa chọn/Menu",component:r,args:{options:b,value:"gan-nhat",platform:"panel",header:"Sắp xếp theo",onSelect:()=>{}},argTypes:{platform:{control:"radio",options:["panel","sheet"]},type:{control:"radio",options:["single","multiple"]},search:{control:"boolean"},footer:{control:"boolean"}},render:t=>{const[n,a]=s.useState(t.value),[d,g]=s.useState(["gan-nhat"]);return e.jsx("div",{style:{width:280},children:e.jsx(r,{...t,value:n,onSelect:a,values:d,onValuesChange:g})})}},m={},v={name:"16 variant của hàng option",parameters:{controls:{disable:!0}},render:()=>e.jsx(x,{children:["single","multiple"].map(t=>[!1,!0].map(n=>e.jsxs(ie,{children:[["default","hover","pressed"].map(a=>e.jsx(y,{label:`${t} · ${n?"chọn":"chưa"} · ${a}`,children:e.jsx("div",{className:"uu-menu",style:{width:194},children:e.jsx(S,{type:t,selected:n,state:a,icon:"texture",children:"Option"})})},`${t}-${n}-${a}`)),e.jsx(y,{label:`${t} · ${n?"chọn":"chưa"} · disabled`,children:e.jsx("div",{className:"uu-menu",style:{width:194},children:e.jsx(S,{type:t,selected:n,disabled:!0,icon:"texture",children:"Option"})})})]},`${t}-${n}`)))})},o={name:"Có icon trước chữ",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState("list");return e.jsx("div",{style:{width:280},children:e.jsx(r,{value:t,onSelect:n,"aria-label":"Cách xem",options:[{value:"list",label:"Danh sách",icon:"list-todo"},{value:"map",label:"Bản đồ",icon:"map"},{value:"grid",label:"Lưới ảnh",icon:"grid"}]})})}},l={name:"Ghép với Dropdown (panel)",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState(!0),[a,d]=s.useState(void 0),g=b.find(h=>h.value===a);return e.jsx(x,{style:{width:320},children:e.jsxs("div",{style:{position:"relative",width:"100%"},children:[e.jsx(le,{label:"Sắp xếp",value:g?String(g.label):"",onOpen:()=>n(h=>!h),"aria-expanded":t}),t&&e.jsx("div",{style:{position:"absolute",insetInline:0,top:"calc(100% + var(--gap-1))",zIndex:10},children:e.jsx(r,{options:b,value:a,onSelect:h=>{d(h),n(!1)},"aria-label":"Sắp xếp"})})]})})}},i={name:"Platform = Sheet",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState(!1),[a,d]=s.useState("gan-nhat");return e.jsxs(x,{style:{width:320},children:[e.jsx(se,{size:"base",onClick:()=>n(!0),children:"Mở Menu"}),e.jsx(r,{platform:"sheet",header:"Sắp xếp theo",open:t,onClose:()=>n(!1),options:b,value:a,onSelect:d})]})}},ae=["Quận 1","Quận 3","Quận 5","Quận 7","Quận 10","Bình Thạnh","Phú Nhuận","Tân Bình","Gò Vấp","Thủ Đức"].map(t=>({value:t,label:t})),c={name:"Chọn nhiều + Footer",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState(["Quận 1","Quận 3"]);return e.jsx("div",{style:{width:280},children:e.jsx(r,{type:"multiple",footer:!0,"aria-label":"Khu vực",options:ae.slice(0,5),values:t,onValuesChange:n,applyLabel:t.length?`Áp dụng (${t.length})`:"Áp dụng"})})}},p={name:"Tìm nhanh (Search)",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState([]);return e.jsx("div",{style:{width:280},children:e.jsx(r,{type:"multiple",search:!0,searchPlaceholder:"Tìm khu vực",footer:!0,"aria-label":"Khu vực",options:ae,values:t,onValuesChange:n,style:{maxHeight:400,overflowY:"auto"}})})}},u={name:"Nhóm và vạch ngăn",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState("gan-nhat");return e.jsxs(x,{children:[e.jsx("div",{style:{width:280},children:e.jsx(r,{value:t,onSelect:n,"aria-label":"Sắp xếp",groups:[{title:"Thời gian",options:[{value:"gan-nhat",label:"Gần nhất"},{value:"cu-nhat",label:"Cũ nhất"}]},{title:"Giá",options:[{value:"gia-thap",label:"Giá thấp đến cao"},{value:"gia-cao",label:"Giá cao đến thấp"}]}]})}),e.jsx("div",{style:{width:280},children:e.jsxs(r,{"aria-label":"Tự xếp",children:[e.jsx(re,{title:"Thời gian"}),e.jsx(S,{children:"Gần nhất"}),e.jsx(oe,{}),e.jsx(S,{children:"Xem tất cả"})]})})]})}};var j,f,M;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(M=(f=m.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var w,k,O;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '16 variant của hàng option',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {(['single', 'multiple'] as const).map(type => ([false, true] as const).map(selected => <Row key={\`\${type}-\${selected}\`}>
          {(['default', 'hover', 'pressed'] as const).map(state => <Cell key={\`\${type}-\${selected}-\${state}\`} label={\`\${type} · \${selected ? 'chọn' : 'chưa'} · \${state}\`}>
              <div className="uu-menu" style={{
          width: 194
        }}>
                <MenuItem type={type} selected={selected} state={state} icon="texture">Option</MenuItem>
              </div>
            </Cell>)}
          <Cell label={\`\${type} · \${selected ? 'chọn' : 'chưa'} · disabled\`}>
            <div className="uu-menu" style={{
          width: 194
        }}>
              <MenuItem type={type} selected={selected} disabled icon="texture">Option</MenuItem>
            </div>
          </Cell>
        </Row>))}
    </Stack>
}`,...(O=(k=v.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var V,C,T,$,I;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"`Prefix` bật thì icon 24 đứng trước chữ: chưa chọn `object-secondary`, đã chọn `object-accent`.",...(I=($=o.parameters)==null?void 0:$.docs)==null?void 0:I.description}}};var P,G,D,N,A;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(D=(G=l.parameters)==null?void 0:G.docs)==null?void 0:D.source},description:{story:"Ghép với `Dropdown`: bấm ô thì bung panel. Phần **neo và đóng khi bấm ra ngoài là việc của màn** — bản thiết kế không chốt.",...(A=(N=l.parameters)==null?void 0:N.docs)==null?void 0:A.description}}};var Q,B,R,E,W;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(R=(B=i.parameters)==null?void 0:B.docs)==null?void 0:R.source},description:{story:"`Platform=Sheet` — cùng danh sách, bung từ đáy màn, dùng lại nguyên `BottomSheet`.",...(W=(E=i.parameters)==null?void 0:E.docs)==null?void 0:W.description}}};var _,z,K,L,F;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Chọn nhiều + Footer',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [vs, setVs] = useState<string[]>(['Quận 1', 'Quận 3']);
    return <div style={{
      width: 280
    }}>
        <Menu type="multiple" footer aria-label="Khu vực" options={AREAS.slice(0, 5)} values={vs} onValuesChange={setVs} applyLabel={vs.length ? \`Áp dụng (\${vs.length})\` : 'Áp dụng'} />
      </div>;
  }
}`,...(K=(z=c.parameters)==null?void 0:z.docs)==null?void 0:K.source},description:{story:'`Type=Multiple` + `Footer`: Checkbox đầu hàng, không tint; chọn không đóng panel, bấm "Áp dụng" mới xong.',...(F=(L=c.parameters)==null?void 0:L.docs)==null?void 0:F.description}}};var H,X,Y,q,J;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Tìm nhanh (Search)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [vs, setVs] = useState<string[]>([]);
    return <div style={{
      width: 280
    }}>
        <Menu type="multiple" search searchPlaceholder="Tìm khu vực" footer aria-label="Khu vực" options={AREAS} values={vs} onValuesChange={setVs} style={{
        maxHeight: 400,
        overflowY: 'auto'
      }} />
      </div>;
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:'`Search=true`: ô tìm không nhãn ở đầu panel, dính trên khi cuộn; không còn option thì báo "Không tìm thấy “…”".',...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var U,Z,ee,te,ne;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Nhóm và vạch ngăn',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState('gan-nhat');
    return <Stack>
        <div style={{
        width: 280
      }}>
          <Menu value={v} onSelect={setV} aria-label="Sắp xếp" groups={[{
          title: 'Thời gian',
          options: [{
            value: 'gan-nhat',
            label: 'Gần nhất'
          }, {
            value: 'cu-nhat',
            label: 'Cũ nhất'
          }]
        }, {
          title: 'Giá',
          options: [{
            value: 'gia-thap',
            label: 'Giá thấp đến cao'
          }, {
            value: 'gia-cao',
            label: 'Giá cao đến thấp'
          }]
        }]} />
        </div>
        <div style={{
        width: 280
      }}>
          <Menu aria-label="Tự xếp">
            <MenuSection title="Thời gian" />
            <MenuItem>Gần nhất</MenuItem>
            <MenuDivider />
            <MenuItem>Xem tất cả</MenuItem>
          </Menu>
        </div>
      </Stack>;
  }
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"`.MenuSection` (tiêu đề nhóm IN HOA) và `.MenuDivider` (vạch giữa các cụm). Nhóm đầu không có vạch phía trên.",...(ne=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};const pe=["Playground","Matrix","WithPrefix","WithDropdown","Sheet","Multiple","WithSearch","Sections"],ve=Object.freeze(Object.defineProperty({__proto__:null,Matrix:v,Multiple:c,Playground:m,Sections:u,Sheet:i,WithDropdown:l,WithPrefix:o,WithSearch:p,__namedExportsOrder:pe,default:ce},Symbol.toStringTag,{value:"Module"}));export{m as P,ve as S};

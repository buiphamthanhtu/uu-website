import{r as s,j as e,a as we,T as Ce}from"./iframe-6vwN6wb9.js";import{M as r,a as b,b as fe,c as ke}from"./SearchInput-DzxMgUfj.js";import{D as Ve}from"./Dropdown-L1BYtwtq.js";import{R as M,S as w,C as j}from"./layout-nPJ89kCs.js";import{M as Te}from"./MenuAnchor-ChH55Pgk.js";const y=[{value:"gan-nhat",label:"Gần nhất"},{value:"gia-thap",label:"Giá thấp đến cao"},{value:"gia-cao",label:"Giá cao đến thấp"},{value:"danh-gia",label:"Đánh giá tốt nhất"}],Oe={title:"Component/Lựa chọn/Menu",component:r,args:{options:y,value:"gan-nhat",platform:"panel",header:"Sắp xếp theo",onSelect:()=>{}},argTypes:{platform:{control:"radio",options:["panel","sheet"]},type:{control:"radio",options:["single","multiple"]},search:{control:"boolean"},footer:{control:"boolean"},selectAll:{control:"boolean"}},render:t=>{const[n,a]=s.useState(t.value),[o,l]=s.useState(["gan-nhat"]);return e.jsx("div",{style:{width:280},children:e.jsx(r,{...t,value:n,onSelect:a,values:o,onValuesChange:l})})}},S={},x={name:"16 variant của hàng option + mô tả",parameters:{controls:{disable:!0}},render:()=>e.jsxs(w,{children:[["single","multiple"].map(t=>[!1,!0].map(n=>e.jsxs(M,{children:[["default","hover","pressed"].map(a=>e.jsx(j,{label:`${t} · ${n?"chọn":"chưa"} · ${a}`,children:e.jsx("div",{className:"uu-menu",style:{width:194},children:e.jsx(b,{type:t,selected:n,state:a,icon:"texture",children:"Option"})})},`${t}-${n}-${a}`)),e.jsx(j,{label:`${t} · ${n?"chọn":"chưa"} · disabled`,children:e.jsx("div",{className:"uu-menu",style:{width:194},children:e.jsx(b,{type:t,selected:n,disabled:!0,icon:"texture",children:"Option"})})})]},`${t}-${n}`))),e.jsxs(M,{children:[["single","multiple"].map(t=>[!1,!0].map(n=>e.jsx(j,{label:`${t} · ${n?"chọn":"chưa"} · có mô tả`,children:e.jsx("div",{className:"uu-menu",style:{width:194},children:e.jsx(b,{type:t,selected:n,icon:"texture",description:"Mô tả ngắn cho option",children:"Option"})})},`d-${t}-${n}`))),e.jsx(j,{label:"multiple · một phần (chọn tất cả)",children:e.jsx("div",{className:"uu-menu",style:{width:194},children:e.jsx(b,{type:"multiple",indeterminate:!0,children:"Chọn tất cả"})})})]})]})},i={name:"Có icon trước chữ",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState("list");return e.jsx("div",{style:{width:280},children:e.jsx(r,{value:t,onSelect:n,"aria-label":"Cách xem",options:[{value:"list",label:"Danh sách",icon:"list-todo"},{value:"map",label:"Bản đồ",icon:"map"},{value:"grid",label:"Lưới ảnh",icon:"grid"}]})})}},c={name:"Ghép với Dropdown (panel)",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState(!0),[a,o]=s.useState(void 0),l=y.find(C=>C.value===a);return e.jsx(w,{style:{width:320,minHeight:280},children:e.jsx(Ve,{label:"Sắp xếp",value:l?String(l.label):"",open:t,onOpen:()=>n(C=>!C),onClose:()=>n(!1),menu:e.jsx(r,{options:y,value:a,onSelect:o,"aria-label":"Sắp xếp"})})})}},p={name:"Neo panel (MenuAnchor)",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState(!1),[a,o]=s.useState("gan-nhat");return e.jsx(M,{style:{width:"min(100%, 640px)",justifyContent:"flex-end",minHeight:280},children:e.jsx(Te,{open:t,onClose:()=>n(!1),width:"min",anchor:e.jsx(we,{type:"ghost",size:"base",icon:"dots",label:"Tuỳ chọn sắp xếp","aria-haspopup":"listbox","aria-expanded":t,onClick:()=>n(l=>!l)}),children:e.jsx(r,{options:y,value:a,onSelect:o,"aria-label":"Sắp xếp"})})})}},u={name:"Option có mô tả",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState("owner"),[a,o]=s.useState(["email"]);return e.jsxs(M,{align:"flex-start",children:[e.jsx("div",{style:{width:280},children:e.jsx(r,{value:t,onSelect:n,"aria-label":"Quyền",options:[{value:"owner",label:"Chủ sở hữu",icon:"shield-check",description:"Toàn quyền, kể cả xoá dự án và quản lý thanh toán"},{value:"editor",label:"Biên tập",icon:"pen",description:"Sửa nội dung, không đổi được thành viên"},{value:"viewer",label:"Chỉ xem",icon:"eye",description:"Xem và bình luận",disabled:!0}]})}),e.jsx("div",{style:{width:280},children:e.jsx(r,{type:"multiple",values:a,onValuesChange:o,"aria-label":"Kênh thông báo",options:[{value:"email",label:"Email",description:"Tóm tắt mỗi ngày lúc 8:00"},{value:"push",label:"Thông báo đẩy",description:"Ngay khi có thay đổi trong dự án bạn theo dõi"},{value:"sms",label:"Tin nhắn SMS",description:"Chỉ cảnh báo bảo mật"}]})})]})}},h={name:"Chọn tất cả",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState(["Quận 1","Quận 3"]),a=f.map(o=>o.value==="Thủ Đức"?{...o,disabled:!0}:o);return e.jsx("div",{style:{width:280},children:e.jsx(r,{type:"multiple",selectAll:!0,search:!0,searchPlaceholder:"Tìm khu vực",footer:!0,"aria-label":"Khu vực",options:a,values:t,onValuesChange:n,applyLabel:t.length?`Áp dụng (${t.length})`:"Áp dụng"})})}},d={name:"Platform = Sheet",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState(!1),[a,o]=s.useState("gan-nhat");return e.jsxs(w,{style:{width:320},children:[e.jsx(Ce,{size:"base",onClick:()=>n(!0),children:"Mở Menu"}),e.jsx(r,{platform:"sheet",header:"Sắp xếp theo",open:t,onClose:()=>n(!1),options:y,value:a,onSelect:o})]})}},f=["Quận 1","Quận 3","Quận 5","Quận 7","Quận 10","Bình Thạnh","Phú Nhuận","Tân Bình","Gò Vấp","Thủ Đức"].map(t=>({value:t,label:t})),m={name:"Chọn nhiều + Footer",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState(["Quận 1","Quận 3"]);return e.jsx("div",{style:{width:280},children:e.jsx(r,{type:"multiple",footer:!0,"aria-label":"Khu vực",options:f.slice(0,5),values:t,onValuesChange:n,applyLabel:t.length?`Áp dụng (${t.length})`:"Áp dụng"})})}},v={name:"Tìm nhanh (Search)",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState([]);return e.jsx("div",{style:{width:280},children:e.jsx(r,{type:"multiple",search:!0,searchPlaceholder:"Tìm khu vực",footer:!0,"aria-label":"Khu vực",options:f,values:t,onValuesChange:n})})}},g={name:"Nhóm và vạch ngăn",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=s.useState("gan-nhat");return e.jsxs(w,{children:[e.jsx("div",{style:{width:280},children:e.jsx(r,{value:t,onSelect:n,"aria-label":"Sắp xếp",groups:[{title:"Thời gian",options:[{value:"gan-nhat",label:"Gần nhất"},{value:"cu-nhat",label:"Cũ nhất"}]},{title:"Giá",options:[{value:"gia-thap",label:"Giá thấp đến cao"},{value:"gia-cao",label:"Giá cao đến thấp"}]}]})}),e.jsx("div",{style:{width:280},children:e.jsxs(r,{"aria-label":"Tự xếp",children:[e.jsx(fe,{title:"Thời gian"}),e.jsx(b,{children:"Gần nhất"}),e.jsx(ke,{}),e.jsx(b,{children:"Xem tất cả"})]})})]})}};var k,V,T;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(T=(V=S.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var O,$,A;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '16 variant của hàng option + mô tả',
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
      <Row>
        {(['single', 'multiple'] as const).map(type => ([false, true] as const).map(selected => <Cell key={\`d-\${type}-\${selected}\`} label={\`\${type} · \${selected ? 'chọn' : 'chưa'} · có mô tả\`}>
            <div className="uu-menu" style={{
          width: 194
        }}>
              <MenuItem type={type} selected={selected} icon="texture" description="Mô tả ngắn cho option">Option</MenuItem>
            </div>
          </Cell>))}
        <Cell label="multiple · một phần (chọn tất cả)">
          <div className="uu-menu" style={{
          width: 194
        }}>
            <MenuItem type="multiple" indeterminate>Chọn tất cả</MenuItem>
          </div>
        </Cell>
      </Row>
    </Stack>
}`,...(A=($=x.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var N,I,P,D,G;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source},description:{story:"`Prefix` bật thì icon 24 đứng trước chữ: chưa chọn `object-secondary`, đã chọn `object-accent`.",...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.description}}};var Q,R,B,E,K;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
      width: 320,
      minHeight: 280
    }}>
        <Dropdown label="Sắp xếp" value={picked ? String(picked.label) : ''} open={open} onOpen={() => setOpen(o => !o)} onClose={() => setOpen(false)} menu={<Menu options={OPTIONS} value={v} onSelect={setV} aria-label="Sắp xếp" />} />
      </Stack>;
  }
}`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source},description:{story:"Ghép với `Dropdown` qua prop `menu`: panel neo dưới ô, cách 4, rộng bằng ô. Chọn xong, bấm ra ngoài, Esc thì đóng.",...(K=(E=c.parameters)==null?void 0:E.docs)==null?void 0:K.description}}};var W,L,H,_,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Neo panel (MenuAnchor)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [v, setV] = useState('gan-nhat');
    return <Row style={{
      width: 'min(100%, 640px)',
      justifyContent: 'flex-end',
      minHeight: 280
    }}>
        <MenuAnchor open={open} onClose={() => setOpen(false)} width="min" anchor={<IconButtonNeutral type="ghost" size="base" icon="dots" label="Tuỳ chọn sắp xếp" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(o => !o)} />}>
          <Menu options={OPTIONS} value={v} onSelect={setV} aria-label="Sắp xếp" />
        </MenuAnchor>
      </Row>;
  }
}`,...(H=(L=p.parameters)==null?void 0:L.docs)==null?void 0:H.source},description:{story:'`MenuAnchor` — neo panel cho phần tử khác (nút "⋯"): dưới phần tử cách 4, rộng tối thiểu 240, canh mép trái;\nsát mép phải thì canh mép phải; dưới thiếu chỗ thì lật lên. Đóng khi chọn xong, bấm ra ngoài, Esc.',...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.description}}};var z,X,F,J,U;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Option có mô tả',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState('owner');
    const [vs, setVs] = useState<string[]>(['email']);
    return <Row align="flex-start">
        <div style={{
        width: 280
      }}>
          <Menu value={v} onSelect={setV} aria-label="Quyền" options={[{
          value: 'owner',
          label: 'Chủ sở hữu',
          icon: 'shield-check',
          description: 'Toàn quyền, kể cả xoá dự án và quản lý thanh toán'
        }, {
          value: 'editor',
          label: 'Biên tập',
          icon: 'pen',
          description: 'Sửa nội dung, không đổi được thành viên'
        }, {
          value: 'viewer',
          label: 'Chỉ xem',
          icon: 'eye',
          description: 'Xem và bình luận',
          disabled: true
        }]} />
        </div>
        <div style={{
        width: 280
      }}>
          <Menu type="multiple" values={vs} onValuesChange={setVs} aria-label="Kênh thông báo" options={[{
          value: 'email',
          label: 'Email',
          description: 'Tóm tắt mỗi ngày lúc 8:00'
        }, {
          value: 'push',
          label: 'Thông báo đẩy',
          description: 'Ngay khi có thay đổi trong dự án bạn theo dõi'
        }, {
          value: 'sms',
          label: 'Tin nhắn SMS',
          description: 'Chỉ cảnh báo bảo mật'
        }]} />
        </div>
      </Row>;
  }
}`,...(F=(X=u.parameters)==null?void 0:X.docs)==null?void 0:F.source},description:{story:'`Description`: dòng thứ hai `caption` `object-secondary`, tối đa 2 dòng (cắt "…"). Hàng cao theo nội dung, icon / checkbox căn trên thẳng dòng tên.',...(U=(J=u.parameters)==null?void 0:J.docs)==null?void 0:U.description}}};var Y,Z,ee,te,ne;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Chọn tất cả',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [vs, setVs] = useState<string[]>(['Quận 1', 'Quận 3']);
    const options = AREAS.map(o => o.value === 'Thủ Đức' ? {
      ...o,
      disabled: true
    } : o);
    return <div style={{
      width: 280
    }}>
        <Menu type="multiple" selectAll search searchPlaceholder="Tìm khu vực" footer aria-label="Khu vực" options={options} values={vs} onValuesChange={setVs} applyLabel={vs.length ? \`Áp dụng (\${vs.length})\` : 'Áp dụng'} />
      </div>;
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:'"Chọn tất cả" (`Type=Multiple`, từ 4 option): hàng đầu + `.MenuDivider`. Checkbox `Checked` khi chọn hết,\n`Indeterminate` khi một phần. Đang tìm nhanh thì chỉ tác động option đang hiện; option Disabled không đổi.',...(ne=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var ae,se,oe,re,le;d.parameters={...d.parameters,docs:{...(ae=d.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(se=d.parameters)==null?void 0:se.docs)==null?void 0:oe.source},description:{story:"`Platform=Sheet` — cùng danh sách, bung từ đáy màn, dùng lại nguyên `BottomSheet`.",...(le=(re=d.parameters)==null?void 0:re.docs)==null?void 0:le.description}}};var ie,ce,pe,ue,he;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:'`Type=Multiple` + `Footer`: Checkbox đầu hàng, không tint; chọn không đóng panel, bấm "Áp dụng" mới xong.',...(he=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:he.description}}};var de,me,ve,ge,be;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
        <Menu type="multiple" search searchPlaceholder="Tìm khu vực" footer aria-label="Khu vực" options={AREAS} values={vs} onValuesChange={setVs} />
      </div>;
  }
}`,...(ve=(me=v.parameters)==null?void 0:me.docs)==null?void 0:ve.source},description:{story:'`Search=true`: ô tìm không nhãn ở đầu panel, dính trên; panel cao tối đa 320, danh sách cuộn bên trong, footer dính dưới. Không còn option thì báo "Không tìm thấy “…”".',...(be=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};var Se,xe,ye,je,Me;g.parameters={...g.parameters,docs:{...(Se=g.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(ye=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:ye.source},description:{story:"`.MenuSection` (tiêu đề nhóm IN HOA) và `.MenuDivider` (vạch giữa các cụm). Nhóm đầu không có vạch phía trên.",...(Me=(je=g.parameters)==null?void 0:je.docs)==null?void 0:Me.description}}};const $e=["Playground","Matrix","WithPrefix","WithDropdown","Anchor","WithDescription","SelectAll","Sheet","Multiple","WithSearch","Sections"],Ge=Object.freeze(Object.defineProperty({__proto__:null,Anchor:p,Matrix:x,Multiple:m,Playground:S,Sections:g,SelectAll:h,Sheet:d,WithDescription:u,WithDropdown:c,WithPrefix:i,WithSearch:v,__namedExportsOrder:$e,default:Oe},Symbol.toStringTag,{value:"Module"}));export{p as A,x as M,S as P,Ge as S,c as W,m as a,h as b,v as c,u as d,i as e,g as f,d as g};

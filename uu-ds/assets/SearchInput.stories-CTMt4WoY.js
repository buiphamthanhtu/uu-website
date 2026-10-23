import{r as i,j as e,d as Y}from"./iframe-BYdOfVdF.js";import{S as a,M as f,b as x,a as g}from"./Menu-OLQ6gIOL.js";import{S,R as Z,C as r}from"./layout-Bjrrhjus.js";const $={title:"Component/Nhập liệu/SearchInput",component:a,args:{label:"",placeholder:"Tìm khách sạn, điểm đến",disabled:!1,loading:!1,cancel:!1,fixedWidth:!0},argTypes:{state:{control:"radio",options:[void 0,"default","hover","focus","typing","loading"]}},render:t=>{const[n,l]=i.useState("");return e.jsx(a,{...t,value:n,onChange:d=>l(d.target.value),onClear:()=>l("")})}},h={},m={name:"8 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(Z,{align:"flex-start",children:[e.jsx(r,{label:"Empty · Default",children:e.jsx(a,{fixedWidth:!0,value:"",placeholder:"Tìm kiếm"})}),e.jsx(r,{label:"Empty · Hover",children:e.jsx(a,{fixedWidth:!0,value:"",state:"hover",placeholder:"Tìm kiếm"})}),e.jsx(r,{label:"Empty · Focus",children:e.jsx(a,{fixedWidth:!0,value:"",state:"focus",placeholder:"Tìm kiếm"})}),e.jsx(r,{label:"Filled · Default",children:e.jsx(a,{fixedWidth:!0,value:"Đà Lạt"})}),e.jsx(r,{label:"Filled · Typing",children:e.jsx(a,{fixedWidth:!0,value:"Đà Lạt",state:"typing"})}),e.jsx(r,{label:"Filled · Loading",children:e.jsx(a,{fixedWidth:!0,value:"Đà Lạt",state:"loading"})}),e.jsx(r,{label:"Empty · Disabled",children:e.jsx(a,{fixedWidth:!0,value:"",disabled:!0,placeholder:"Tìm kiếm"})}),e.jsx(r,{label:"Filled · Disabled",children:e.jsx(a,{fixedWidth:!0,value:"Đà Lạt",disabled:!0})})]})},p={name:"Có label",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=i.useState("Cozy Retreat");return e.jsx(S,{style:{width:320},children:e.jsx(a,{label:"Tìm phòng",value:t,onChange:l=>n(l.target.value),onClear:()=>n(""),placeholder:"Tên phòng hoặc mã đặt phòng"})})}},o={name:"Có nút Huỷ",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=i.useState("Đà Lạt");return e.jsx(S,{style:{width:358},children:e.jsx(a,{cancel:!0,value:t,onChange:l=>n(l.target.value),onClear:()=>n(""),placeholder:"Tìm khách sạn, điểm đến"})})}},J=["Đà Lạt","Khách sạn gần biển Nha Trang","Homestay Sa Pa"],ee=["Đà Lạt","Đà Nẵng","Đảo Phú Quốc","Khách sạn Đà Lạt trung tâm","Hội An","Hà Giang"],c={name:"Panel gợi ý / lịch sử",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=i.useState(""),[l,d]=i.useState(!0),[v,U]=i.useState(J),[b,C]=i.useState(!1);i.useEffect(()=>{if(!t)return;C(!0);const s=setTimeout(()=>C(!1),600);return()=>clearTimeout(s)},[t]);const j=t?ee.filter(s=>s.toLocaleLowerCase("vi").includes(t.toLocaleLowerCase("vi"))):[],y=!t&&v.length>0,T=!!t&&!b&&j.length>0;return e.jsxs("div",{style:{position:"relative",width:358,minHeight:320},children:[e.jsx(a,{value:t,loading:b,placeholder:"Tìm khách sạn, điểm đến",onFocus:()=>d(!0),onChange:s=>n(s.target.value),onClear:()=>n("")}),l&&(y||T)&&e.jsx("div",{style:{position:"absolute",insetInline:0,top:"calc(100% + var(--gap-1))",zIndex:10},children:e.jsxs(f,{"aria-label":y?"Tìm gần đây":"Gợi ý",children:[y&&e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Tìm gần đây",action:e.jsx(Y,{type:"ghost",size:"small",onClick:()=>U([]),children:"Xoá"})}),v.map(s=>e.jsx(g,{icon:"clock",onClick:()=>{n(s),d(!1)},children:s},s))]}),T&&e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Gợi ý"}),j.map(s=>e.jsx(g,{icon:"magnifier",match:t,onClick:()=>{n(s),d(!1)},children:s},s))]})]})})]})}},u={name:"Panel gợi ý (tĩnh)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(Z,{align:"flex-start",children:[e.jsxs(S,{style:{width:358},children:[e.jsx(a,{value:"",state:"focus",placeholder:"Tìm khách sạn, điểm đến"}),e.jsxs(f,{"aria-label":"Tìm gần đây",children:[e.jsx(x,{title:"Tìm gần đây",action:e.jsx(Y,{type:"ghost",size:"small",children:"Xoá"})}),J.map(t=>e.jsx(g,{icon:"clock",children:t},t))]})]}),e.jsxs(S,{style:{width:358},children:[e.jsx(a,{value:"Đà",state:"typing",placeholder:"Tìm khách sạn, điểm đến"}),e.jsxs(f,{"aria-label":"Gợi ý",children:[e.jsx(x,{title:"Gợi ý"}),e.jsx(g,{icon:"magnifier",match:"Đà",children:"Đà Nẵng"}),e.jsx(g,{icon:"magnifier",match:"Đà",children:"Khách sạn Đà Lạt trung tâm"})]})]})]})};var k,L,I;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(I=(L=h.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var w,M,H;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '8 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Cell label="Empty · Default"><SearchInput fixedWidth value="" placeholder="Tìm kiếm" /></Cell>
      <Cell label="Empty · Hover"><SearchInput fixedWidth value="" state="hover" placeholder="Tìm kiếm" /></Cell>
      <Cell label="Empty · Focus"><SearchInput fixedWidth value="" state="focus" placeholder="Tìm kiếm" /></Cell>
      <Cell label="Filled · Default"><SearchInput fixedWidth value="Đà Lạt" /></Cell>
      <Cell label="Filled · Typing"><SearchInput fixedWidth value="Đà Lạt" state="typing" /></Cell>
      <Cell label="Filled · Loading"><SearchInput fixedWidth value="Đà Lạt" state="loading" /></Cell>
      <Cell label="Empty · Disabled"><SearchInput fixedWidth value="" disabled placeholder="Tìm kiếm" /></Cell>
      <Cell label="Filled · Disabled"><SearchInput fixedWidth value="Đà Lạt" disabled /></Cell>
    </Row>
}`,...(H=(M=m.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var W,E,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Có label',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState('Cozy Retreat');
    return <Stack style={{
      width: 320
    }}>
        <SearchInput label="Tìm phòng" value={v} onChange={e => setV(e.target.value)} onClear={() => setV('')} placeholder="Tên phòng hoặc mã đặt phòng" />
      </Stack>;
  }
}`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var P,O,R,G,N;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Có nút Huỷ',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState('Đà Lạt');
    return <Stack style={{
      width: 358
    }}>
        <SearchInput cancel value={v} onChange={e => setV(e.target.value)} onClear={() => setV('')} placeholder="Tìm khách sạn, điểm đến" />
      </Stack>;
  }
}`,...(R=(O=o.parameters)==null?void 0:O.docs)==null?void 0:R.source},description:{story:'`cancel`: ô nằm trong hàng HORIZONTAL gap 8, "Huỷ" Ghost Small bên phải, ô co lại. Bấm Huỷ: xoá chữ, bỏ focus. Chỉ dùng ở màn tìm kiếm riêng.',...(N=(G=o.parameters)==null?void 0:G.docs)==null?void 0:N.description}}};var q,z,V,B,D;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Panel gợi ý / lịch sử',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [q, setQ] = useState('');
    const [open, setOpen] = useState(true);
    const [history, setHistory] = useState(HISTORY);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      if (!q) return;
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 600);
      return () => clearTimeout(t);
    }, [q]);
    const matches = q ? PLACES.filter(p => p.toLocaleLowerCase('vi').includes(q.toLocaleLowerCase('vi'))) : [];
    const showHistory = !q && history.length > 0;
    const showSuggest = Boolean(q) && !loading && matches.length > 0;
    return <div style={{
      position: 'relative',
      width: 358,
      minHeight: 320
    }}>
        <SearchInput value={q} loading={loading} placeholder="Tìm khách sạn, điểm đến" onFocus={() => setOpen(true)} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />
        {open && (showHistory || showSuggest) && <div style={{
        position: 'absolute',
        insetInline: 0,
        top: 'calc(100% + var(--gap-1))',
        zIndex: 10
      }}>
            <Menu aria-label={showHistory ? 'Tìm gần đây' : 'Gợi ý'}>
              {showHistory && <>
                  <MenuSection title="Tìm gần đây" action={<TextButtonNeutral type="ghost" size="small" onClick={() => setHistory([])}>Xoá</TextButtonNeutral>} />
                  {history.map(h => <MenuItem key={h} icon="clock" onClick={() => {
              setQ(h);
              setOpen(false);
            }}>{h}</MenuItem>)}
                </>}
              {showSuggest && <>
                  <MenuSection title="Gợi ý" />
                  {matches.map(m => <MenuItem key={m} icon="magnifier" match={q} onClick={() => {
              setQ(m);
              setOpen(false);
            }}>{m}</MenuItem>)}
                </>}
            </Menu>
          </div>}
      </div>;
  }
}`,...(V=(z=c.parameters)==null?void 0:z.docs)==null?void 0:V.source},description:{story:'Panel gợi ý / lịch sử là `Menu` Panel neo dưới ô, cách 4, cùng bề rộng ô.\nÔ rỗng + focus → chỉ "Tìm gần đây"; đang gõ → "Gợi ý" (ô ở `Loading` trong lúc chờ). Không có gì → không mở panel.',...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var Q,_,K,A,X;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Panel gợi ý (tĩnh)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Stack style={{
      width: 358
    }}>
        <SearchInput value="" state="focus" placeholder="Tìm khách sạn, điểm đến" />
        <Menu aria-label="Tìm gần đây">
          <MenuSection title="Tìm gần đây" action={<TextButtonNeutral type="ghost" size="small">Xoá</TextButtonNeutral>} />
          {HISTORY.map(h => <MenuItem key={h} icon="clock">{h}</MenuItem>)}
        </Menu>
      </Stack>
      <Stack style={{
      width: 358
    }}>
        <SearchInput value="Đà" state="typing" placeholder="Tìm khách sạn, điểm đến" />
        <Menu aria-label="Gợi ý">
          <MenuSection title="Gợi ý" />
          <MenuItem icon="magnifier" match="Đà">Đà Nẵng</MenuItem>
          <MenuItem icon="magnifier" match="Đà">Khách sạn Đà Lạt trung tâm</MenuItem>
        </Menu>
      </Stack>
    </Row>
}`,...(K=(_=u.parameters)==null?void 0:_.docs)==null?void 0:K.source},description:{story:'Ảnh tĩnh hai trạng thái của panel: ô rỗng + focus → "Tìm gần đây" (icon `clock`); đang gõ → "Gợi ý" (icon `magnifier`, phần trùng in 600).',...(X=(A=u.parameters)==null?void 0:A.docs)==null?void 0:X.description}}};const te=["Playground","Matrix","WithLabel","Cancel","Suggestions","SuggestionsStatic"],le=Object.freeze(Object.defineProperty({__proto__:null,Cancel:o,Matrix:m,Playground:h,Suggestions:c,SuggestionsStatic:u,WithLabel:p,__namedExportsOrder:te,default:$},Symbol.toStringTag,{value:"Module"}));export{h as P,le as S};

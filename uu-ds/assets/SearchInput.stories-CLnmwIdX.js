import{r as i,j as e,S as p,F as x,R as _,C as l,d as Z,a as J}from"./iframe-CG-Y5hsd.js";import{S as a,d as U,M as y,b as f,a as S}from"./SearchInput-DoUGOyBZ.js";const ee={title:"Component/Nhập liệu/SearchInput",component:a,args:{label:"",placeholder:"Tìm khách sạn, điểm đến",disabled:!1,loading:!1,cancel:!1,fixedWidth:!0},argTypes:{state:{control:"radio",options:[void 0,"default","hover","focus","typing","loading"]}},render:t=>{const[n,s]=i.useState("");return e.jsx(a,{...t,value:n,onChange:g=>s(g.target.value),onClear:()=>s("")})}},u={},h={name:"8 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(_,{align:"flex-start",children:[e.jsx(l,{label:"Empty · Default",children:e.jsx(a,{fixedWidth:!0,value:"",placeholder:"Tìm kiếm"})}),e.jsx(l,{label:"Empty · Hover",children:e.jsx(a,{fixedWidth:!0,value:"",state:"hover",placeholder:"Tìm kiếm"})}),e.jsx(l,{label:"Empty · Focus",children:e.jsx(a,{fixedWidth:!0,value:"",state:"focus",placeholder:"Tìm kiếm"})}),e.jsx(l,{label:"Filled · Default",children:e.jsx(a,{fixedWidth:!0,value:"Đà Lạt"})}),e.jsx(l,{label:"Filled · Typing",children:e.jsx(a,{fixedWidth:!0,value:"Đà Lạt",state:"typing"})}),e.jsx(l,{label:"Filled · Loading",children:e.jsx(a,{fixedWidth:!0,value:"Đà Lạt",state:"loading"})}),e.jsx(l,{label:"Empty · Disabled",children:e.jsx(a,{fixedWidth:!0,value:"",disabled:!0,placeholder:"Tìm kiếm"})}),e.jsx(l,{label:"Filled · Disabled",children:e.jsx(a,{fixedWidth:!0,value:"Đà Lạt",disabled:!0})})]})},m={name:"Có label",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=i.useState("Cozy Retreat");return e.jsx(p,{style:{width:320},children:e.jsx(a,{label:"Tìm phòng",value:t,onChange:s=>n(s.target.value),onClear:()=>n(""),placeholder:"Tên phòng hoặc mã đặt phòng"})})}},o={name:"Có nút Huỷ",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=i.useState("Đà Lạt");return e.jsx(p,{style:{width:358,maxWidth:x},children:e.jsx(a,{cancel:!0,value:t,onChange:s=>n(s.target.value),onClear:()=>n(""),placeholder:"Tìm khách sạn, điểm đến"})})}},K=["Đà Lạt","Khách sạn gần biển Nha Trang","Homestay Sa Pa"],te=["Đà Lạt","Đà Nẵng","Đảo Phú Quốc","Khách sạn Đà Lạt trung tâm","Hội An","Hà Giang"],c={name:"Panel gợi ý / lịch sử",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=i.useState(""),[s,g]=i.useState(K),[A,v]=i.useState(!1);i.useEffect(()=>{if(!t)return;v(!0);const r=setTimeout(()=>v(!1),600);return()=>clearTimeout(r)},[t]);const X=t?te.filter(r=>r.toLocaleLowerCase("vi").includes(t.toLocaleLowerCase("vi"))):[];return e.jsx("div",{style:{width:358,maxWidth:x,minHeight:320},children:e.jsx(a,{value:t,loading:A,placeholder:"Tìm khách sạn, điểm đến",onChange:r=>n(r.target.value),onClear:()=>n(""),history:s,onHistorySelect:n,onHistoryRemove:r=>g(Y=>Y.filter($=>$!==r)),onHistoryClear:()=>g([]),suggestions:X,onSuggestionSelect:n})})}},d={name:"Panel gợi ý (tĩnh)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(_,{align:"flex-start",children:[e.jsxs(p,{style:{width:358,maxWidth:x},children:[e.jsx(a,{value:"",state:"focus",placeholder:"Tìm khách sạn, điểm đến"}),e.jsx(U.Provider,{value:"list",children:e.jsxs(y,{"aria-label":"Tìm gần đây",children:[e.jsx(f,{title:"Tìm gần đây",action:e.jsx(Z,{type:"ghost",size:"small",children:"Xoá"})}),K.map(t=>e.jsx(S,{icon:"clock",action:e.jsx(J,{type:"ghost",size:"small",icon:"xmark",label:`Xoá “${t}”`}),children:t},t))]})})]}),e.jsxs(p,{style:{width:358,maxWidth:x},children:[e.jsx(a,{value:"Đà",state:"typing",placeholder:"Tìm khách sạn, điểm đến"}),e.jsxs(y,{"aria-label":"Gợi ý",children:[e.jsx(f,{title:"Gợi ý"}),e.jsx(S,{icon:"magnifier",match:"Đà",children:"Đà Nẵng"}),e.jsx(S,{icon:"magnifier",match:"Đà",children:"Khách sạn Đà Lạt trung tâm"})]})]})]})};var b,C,T;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(T=(C=u.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var j,L,k;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(k=(L=h.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var I,W,H;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(W=m.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var M,w,R,P,E;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Có nút Huỷ',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState('Đà Lạt');
    return <Stack style={{
      width: 358,
      maxWidth: FIT
    }}>
        <SearchInput cancel value={v} onChange={e => setV(e.target.value)} onClear={() => setV('')} placeholder="Tìm khách sạn, điểm đến" />
      </Stack>;
  }
}`,...(R=(w=o.parameters)==null?void 0:w.docs)==null?void 0:R.source},description:{story:'`cancel`: ô nằm trong hàng HORIZONTAL gap 8, "Huỷ" Ghost Small bên phải, ô co lại. Bấm Huỷ: xoá chữ, bỏ focus. Chỉ dùng ở màn tìm kiếm riêng.',...(E=(P=o.parameters)==null?void 0:P.docs)==null?void 0:E.description}}};var F,N,G,V,D;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Panel gợi ý / lịch sử',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [q, setQ] = useState('');
    const [history, setHistory] = useState(HISTORY);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      if (!q) return;
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 600);
      return () => clearTimeout(t);
    }, [q]);
    const matches = q ? PLACES.filter(p => p.toLocaleLowerCase('vi').includes(q.toLocaleLowerCase('vi'))) : [];
    return <div style={{
      width: 358,
      maxWidth: FIT,
      minHeight: 320
    }}>
        <SearchInput value={q} loading={loading} placeholder="Tìm khách sạn, điểm đến" onChange={e => setQ(e.target.value)} onClear={() => setQ('')} history={history} onHistorySelect={setQ} onHistoryRemove={h => setHistory(list => list.filter(x => x !== h))} onHistoryClear={() => setHistory([])} suggestions={matches} onSuggestionSelect={setQ} />
      </div>;
  }
}`,...(G=(N=c.parameters)==null?void 0:N.docs)==null?void 0:G.source},description:{story:'Panel gợi ý / lịch sử: truyền `history` / `suggestions`, ô tự neo `Menu` Panel dưới mình — cách 4, cùng bề rộng ô.\nÔ rỗng + focus → chỉ "Tìm gần đây"; đang gõ → "Gợi ý" (ô ở `Loading` trong lúc chờ). Không có gì → không mở panel.\nNút `xmark` cuối hàng "Tìm gần đây" xoá đúng mục đó, panel vẫn mở, focus về ô; xoá hết thì nhóm biến mất.\nBấm ra ngoài, Esc, Tab ra khỏi ô hoặc chọn một hàng thì panel đóng.',...(D=(V=c.parameters)==null?void 0:V.docs)==null?void 0:D.description}}};var O,q,z,B,Q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Panel gợi ý (tĩnh)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Stack style={{
      width: 358,
      maxWidth: FIT
    }}>
        <SearchInput value="" state="focus" placeholder="Tìm khách sạn, điểm đến" />
        {/* Giống panel thật của SearchInput: "Tìm gần đây" là role=list vì hàng có nút xoá (spec 6.3g). */}
        <MenuListRoleContext.Provider value="list">
          <Menu aria-label="Tìm gần đây">
            <MenuSection title="Tìm gần đây" action={<TextButtonNeutral type="ghost" size="small">Xoá</TextButtonNeutral>} />
            {HISTORY.map(h => <MenuItem key={h} icon="clock" action={<IconButtonNeutral type="ghost" size="small" icon="xmark" label={\`Xoá “\${h}”\`} />}>{h}</MenuItem>)}
          </Menu>
        </MenuListRoleContext.Provider>
      </Stack>
      <Stack style={{
      width: 358,
      maxWidth: FIT
    }}>
        <SearchInput value="Đà" state="typing" placeholder="Tìm khách sạn, điểm đến" />
        <Menu aria-label="Gợi ý">
          <MenuSection title="Gợi ý" />
          <MenuItem icon="magnifier" match="Đà">Đà Nẵng</MenuItem>
          <MenuItem icon="magnifier" match="Đà">Khách sạn Đà Lạt trung tâm</MenuItem>
        </Menu>
      </Stack>
    </Row>
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:'Ảnh tĩnh hai trạng thái của panel: ô rỗng + focus → "Tìm gần đây" (icon `clock`, nút `xmark` xoá từng mục); đang gõ → "Gợi ý" (icon `magnifier`, phần trùng in 600).',...(Q=(B=d.parameters)==null?void 0:B.docs)==null?void 0:Q.description}}};const ae=["Playground","Matrix","WithLabel","Cancel","Suggestions","SuggestionsStatic"],le=Object.freeze(Object.defineProperty({__proto__:null,Cancel:o,Matrix:h,Playground:u,Suggestions:c,SuggestionsStatic:d,WithLabel:m,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{o as C,h as M,u as P,le as S,c as a,d as b};

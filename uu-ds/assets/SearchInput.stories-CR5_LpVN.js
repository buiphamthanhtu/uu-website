import{r as o,j as e,d as $,a as Z}from"./iframe-6vwN6wb9.js";import{S as a,M as y,b as f,a as x}from"./SearchInput-DzxMgUfj.js";import{S as p,R as Q,C as r}from"./layout-nPJ89kCs.js";const J={title:"Component/Nhập liệu/SearchInput",component:a,args:{label:"",placeholder:"Tìm khách sạn, điểm đến",disabled:!1,loading:!1,cancel:!1,fixedWidth:!0},argTypes:{state:{control:"radio",options:[void 0,"default","hover","focus","typing","loading"]}},render:t=>{const[n,s]=o.useState("");return e.jsx(a,{...t,value:n,onChange:g=>s(g.target.value),onClear:()=>s("")})}},d={},h={name:"8 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(Q,{align:"flex-start",children:[e.jsx(r,{label:"Empty · Default",children:e.jsx(a,{fixedWidth:!0,value:"",placeholder:"Tìm kiếm"})}),e.jsx(r,{label:"Empty · Hover",children:e.jsx(a,{fixedWidth:!0,value:"",state:"hover",placeholder:"Tìm kiếm"})}),e.jsx(r,{label:"Empty · Focus",children:e.jsx(a,{fixedWidth:!0,value:"",state:"focus",placeholder:"Tìm kiếm"})}),e.jsx(r,{label:"Filled · Default",children:e.jsx(a,{fixedWidth:!0,value:"Đà Lạt"})}),e.jsx(r,{label:"Filled · Typing",children:e.jsx(a,{fixedWidth:!0,value:"Đà Lạt",state:"typing"})}),e.jsx(r,{label:"Filled · Loading",children:e.jsx(a,{fixedWidth:!0,value:"Đà Lạt",state:"loading"})}),e.jsx(r,{label:"Empty · Disabled",children:e.jsx(a,{fixedWidth:!0,value:"",disabled:!0,placeholder:"Tìm kiếm"})}),e.jsx(r,{label:"Filled · Disabled",children:e.jsx(a,{fixedWidth:!0,value:"Đà Lạt",disabled:!0})})]})},m={name:"Có label",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=o.useState("Cozy Retreat");return e.jsx(p,{style:{width:320},children:e.jsx(a,{label:"Tìm phòng",value:t,onChange:s=>n(s.target.value),onClear:()=>n(""),placeholder:"Tên phòng hoặc mã đặt phòng"})})}},i={name:"Có nút Huỷ",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=o.useState("Đà Lạt");return e.jsx(p,{style:{width:358},children:e.jsx(a,{cancel:!0,value:t,onChange:s=>n(s.target.value),onClear:()=>n(""),placeholder:"Tìm khách sạn, điểm đến"})})}},_=["Đà Lạt","Khách sạn gần biển Nha Trang","Homestay Sa Pa"],U=["Đà Lạt","Đà Nẵng","Đảo Phú Quốc","Khách sạn Đà Lạt trung tâm","Hội An","Hà Giang"],c={name:"Panel gợi ý / lịch sử",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=o.useState(""),[s,g]=o.useState(_),[K,S]=o.useState(!1);o.useEffect(()=>{if(!t)return;S(!0);const l=setTimeout(()=>S(!1),600);return()=>clearTimeout(l)},[t]);const A=t?U.filter(l=>l.toLocaleLowerCase("vi").includes(t.toLocaleLowerCase("vi"))):[];return e.jsx("div",{style:{width:358,minHeight:320},children:e.jsx(a,{value:t,loading:K,placeholder:"Tìm khách sạn, điểm đến",onChange:l=>n(l.target.value),onClear:()=>n(""),history:s,onHistorySelect:n,onHistoryRemove:l=>g(X=>X.filter(Y=>Y!==l)),onHistoryClear:()=>g([]),suggestions:A,onSuggestionSelect:n})})}},u={name:"Panel gợi ý (tĩnh)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(Q,{align:"flex-start",children:[e.jsxs(p,{style:{width:358},children:[e.jsx(a,{value:"",state:"focus",placeholder:"Tìm khách sạn, điểm đến"}),e.jsxs(y,{"aria-label":"Tìm gần đây",children:[e.jsx(f,{title:"Tìm gần đây",action:e.jsx($,{type:"ghost",size:"small",children:"Xoá"})}),_.map(t=>e.jsx(x,{icon:"clock",action:e.jsx(Z,{type:"ghost",size:"small",icon:"xmark",label:`Xoá “${t}”`}),children:t},t))]})]}),e.jsxs(p,{style:{width:358},children:[e.jsx(a,{value:"Đà",state:"typing",placeholder:"Tìm khách sạn, điểm đến"}),e.jsxs(y,{"aria-label":"Gợi ý",children:[e.jsx(f,{title:"Gợi ý"}),e.jsx(x,{icon:"magnifier",match:"Đà",children:"Đà Nẵng"}),e.jsx(x,{icon:"magnifier",match:"Đà",children:"Khách sạn Đà Lạt trung tâm"})]})]})]})};var v,b,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var T,j,k;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(j=h.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var L,I,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(I=m.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var M,w,W,E,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(w=i.parameters)==null?void 0:w.docs)==null?void 0:W.source},description:{story:'`cancel`: ô nằm trong hàng HORIZONTAL gap 8, "Huỷ" Ghost Small bên phải, ô co lại. Bấm Huỷ: xoá chữ, bỏ focus. Chỉ dùng ở màn tìm kiếm riêng.',...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.description}}};var P,N,F,V,D;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      minHeight: 320
    }}>
        <SearchInput value={q} loading={loading} placeholder="Tìm khách sạn, điểm đến" onChange={e => setQ(e.target.value)} onClear={() => setQ('')} history={history} onHistorySelect={setQ} onHistoryRemove={h => setHistory(list => list.filter(x => x !== h))} onHistoryClear={() => setHistory([])} suggestions={matches} onSuggestionSelect={setQ} />
      </div>;
  }
}`,...(F=(N=c.parameters)==null?void 0:N.docs)==null?void 0:F.source},description:{story:'Panel gợi ý / lịch sử: truyền `history` / `suggestions`, ô tự neo `Menu` Panel dưới mình — cách 4, cùng bề rộng ô.\nÔ rỗng + focus → chỉ "Tìm gần đây"; đang gõ → "Gợi ý" (ô ở `Loading` trong lúc chờ). Không có gì → không mở panel.\nNút `xmark` cuối hàng "Tìm gần đây" xoá đúng mục đó, panel vẫn mở, focus về ô; xoá hết thì nhóm biến mất.\nBấm ra ngoài, Esc, Tab ra khỏi ô hoặc chọn một hàng thì panel đóng.',...(D=(V=c.parameters)==null?void 0:V.docs)==null?void 0:D.description}}};var G,O,q,z,B;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
          {HISTORY.map(h => <MenuItem key={h} icon="clock" action={<IconButtonNeutral type="ghost" size="small" icon="xmark" label={\`Xoá “\${h}”\`} />}>{h}</MenuItem>)}
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
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source},description:{story:'Ảnh tĩnh hai trạng thái của panel: ô rỗng + focus → "Tìm gần đây" (icon `clock`, nút `xmark` xoá từng mục); đang gõ → "Gợi ý" (icon `magnifier`, phần trùng in 600).',...(B=(z=u.parameters)==null?void 0:z.docs)==null?void 0:B.description}}};const ee=["Playground","Matrix","WithLabel","Cancel","Suggestions","SuggestionsStatic"],se=Object.freeze(Object.defineProperty({__proto__:null,Cancel:i,Matrix:h,Playground:d,Suggestions:c,SuggestionsStatic:u,WithLabel:m,__namedExportsOrder:ee,default:J},Symbol.toStringTag,{value:"Module"}));export{i as C,h as M,d as P,se as S,c as a,u as b};

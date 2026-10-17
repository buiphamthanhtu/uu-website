import{r,l as O,i as y,k as u,m as V,j as e,n as H,c as l}from"./iframe-B79aK45l.js";import{R as P,C as n}from"./layout-DfDgT8VD.js";import"./preload-helper-Dp1pzeXC.js";function N({initialCategory:E=""}){const[m,R]=r.useState(""),[o,G]=r.useState(E),[h,D]=r.useState("outline"),[g,U]=r.useState(24),[x,v]=r.useState(""),i=r.useDeferredValue(m.trim().toLowerCase()),[f,_]=r.useState({});r.useEffect(()=>{O().then(a=>_(Object.fromEntries(Object.entries(a).map(([t,M])=>[t,M.tags??""]))))},[]);const s=r.useMemo(()=>y.filter(a=>{const t=u[a];return o&&t.category!==o?!1:i?a.includes(i)||(f[a]??"").includes(i):!0}),[i,o,f]);r.useEffect(()=>{new Set(s.slice(0,400).map(t=>u[t].category)).forEach(t=>{V(t)})},[s]);const q=a=>{var t;(t=navigator.clipboard)==null||t.writeText(a).then(()=>{v(a),setTimeout(()=>v(""),1200)})},B=s.slice(0,400);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--gap-3)"},children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--gap-2)",alignItems:"center"},children:[e.jsx("input",{value:m,onChange:a=>R(a.target.value),placeholder:"Tìm theo tên hoặc tag (vd. chevron, cart, calendar)","aria-label":"Tìm icon",className:"uu-field",style:{flex:"1 1 240px",minWidth:200,font:"inherit"}}),e.jsxs("select",{value:o,onChange:a=>G(a.target.value),"aria-label":"Category",className:"uu-field",style:{height:48},children:[e.jsx("option",{value:"",children:"Tất cả category"}),H.map(a=>e.jsx("option",{value:a,children:a},a))]}),e.jsxs("select",{value:h,onChange:a=>D(a.target.value),"aria-label":"Style",className:"uu-field",style:{height:48},children:[e.jsx("option",{value:"outline",children:"outline"}),e.jsx("option",{value:"fill",children:"fill"})]}),e.jsxs("select",{value:g,onChange:a=>U(Number(a.target.value)),"aria-label":"Size",className:"uu-field",style:{height:48},children:[e.jsx("option",{value:24,children:"24"}),e.jsx("option",{value:16,children:"16"})]})]}),e.jsxs("div",{className:"uu-story-caption",children:[s.length," / ",y.length," icon",s.length>400?" — hiện 400 đầu, gõ thêm để thu hẹp":"",". Bấm để copy tên."]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(112px, 1fr))",gap:"var(--gap-2)"},children:B.map(a=>e.jsxs("button",{type:"button",onClick:()=>q(a),title:`${a} · ${u[a].category}`,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--gap-2)",padding:"var(--gap-3) var(--gap-2)",border:"1px solid var(--border-muted)",borderRadius:"var(--radius-base)",background:x===a?"var(--background-interactive-muted)":"var(--background-surface)",color:"var(--object-primary)",cursor:"pointer",font:"inherit"},children:[e.jsx(l,{name:a,variant:h,size:g}),e.jsx("span",{style:{font:"var(--font-weight-normal) var(--font-size-xs)/var(--font-height-xs) var(--font-family-body)",color:"var(--object-secondary)",wordBreak:"break-all",textAlign:"center"},children:x===a?"đã copy":a})]},a))})]})}N.__docgenInfo={description:"Bộ UU icon của UU DS — tìm theo tên/tag, lọc theo category, xem outline/fill, bấm để copy tên.",methods:[],displayName:"IconGallery",props:{initialCategory:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const F={title:"Kiểu/Icon/Icon",component:l,args:{name:"gift",variant:"outline",size:24},argTypes:{variant:{control:"radio",options:["outline","fill"]},size:{control:"radio",options:[16,18,20,24]}}},c={},d={name:"Hộp 16 / 24 và nét thật",parameters:{controls:{disable:!0}},render:()=>e.jsxs(P,{children:[e.jsx(n,{label:"xmark · hộp 24 (nét ≈15px)",children:e.jsx("span",{style:{outline:"1px dashed var(--border)"},children:e.jsx(l,{name:"xmark",size:24})})}),e.jsx(n,{label:"xmark · hộp 16 (nét ≈10px)",children:e.jsx("span",{style:{outline:"1px dashed var(--border)"},children:e.jsx(l,{name:"xmark",size:16})})}),e.jsx(n,{label:"outline",children:e.jsx(l,{name:"heart",variant:"outline"})}),e.jsx(n,{label:"fill = trạng thái bật",children:e.jsx(l,{name:"heart",variant:"fill"})}),e.jsx(n,{label:"màu theo object-interactive",children:e.jsx("span",{style:{color:"var(--object-interactive)"},children:e.jsx(l,{name:"gift",variant:"fill"})})}),e.jsx(n,{label:"tên không có trong thư viện",children:e.jsx(l,{name:"khong-co-icon-nay"})})]})},p={name:"Thư viện",parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsx(N,{})};var b,j,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var k,I,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Hộp 16 / 24 và nét thật',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Cell label="xmark · hộp 24 (nét ≈15px)"><span style={{
        outline: '1px dashed var(--border)'
      }}><Icon name="xmark" size={24} /></span></Cell>
      <Cell label="xmark · hộp 16 (nét ≈10px)"><span style={{
        outline: '1px dashed var(--border)'
      }}><Icon name="xmark" size={16} /></span></Cell>
      <Cell label="outline"><Icon name="heart" variant="outline" /></Cell>
      <Cell label="fill = trạng thái bật"><Icon name="heart" variant="fill" /></Cell>
      <Cell label="màu theo object-interactive"><span style={{
        color: 'var(--object-interactive)'
      }}><Icon name="gift" variant="fill" /></span></Cell>
      <Cell label="tên không có trong thư viện"><Icon name="khong-co-icon-nay" /></Cell>
    </Row>
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var z,T,w;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Thư viện',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  render: () => <IconGallery />
}`,...(w=(T=p.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const K=["Playground","Sizes","Gallery"];export{p as Gallery,c as Playground,d as Sizes,K as __namedExportsOrder,F as default};

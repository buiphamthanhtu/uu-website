import{j as e,r as f}from"./iframe-o9qWa12E.js";import{S as l}from"./SearchInput-DxGsjQln.js";import{R as C,C as a,S}from"./layout-Bfiz2Kkg.js";const j={title:"Component/Nhập liệu/SearchInput",component:l,args:{label:"",placeholder:"Tìm khách sạn, điểm đến",disabled:!1,fixedWidth:!0},argTypes:{state:{control:"radio",options:[void 0,"default","hover","focus","typing"]}},render:i=>{const[d,o]=f.useState("");return e.jsx(l,{...i,value:d,onChange:g=>o(g.target.value),onClear:()=>o("")})}},t={},r={name:"7 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(C,{align:"flex-start",children:[e.jsx(a,{label:"Empty · Default",children:e.jsx(l,{fixedWidth:!0,value:"",placeholder:"Tìm kiếm"})}),e.jsx(a,{label:"Empty · Hover",children:e.jsx(l,{fixedWidth:!0,value:"",state:"hover",placeholder:"Tìm kiếm"})}),e.jsx(a,{label:"Empty · Focus",children:e.jsx(l,{fixedWidth:!0,value:"",state:"focus",placeholder:"Tìm kiếm"})}),e.jsx(a,{label:"Filled · Default",children:e.jsx(l,{fixedWidth:!0,value:"Đà Lạt"})}),e.jsx(a,{label:"Filled · Typing",children:e.jsx(l,{fixedWidth:!0,value:"Đà Lạt",state:"typing"})}),e.jsx(a,{label:"Empty · Disabled",children:e.jsx(l,{fixedWidth:!0,value:"",disabled:!0,placeholder:"Tìm kiếm"})}),e.jsx(a,{label:"Filled · Disabled",children:e.jsx(l,{fixedWidth:!0,value:"Đà Lạt",disabled:!0})})]})},s={name:"Có label",parameters:{controls:{disable:!0}},render:()=>{const[i,d]=f.useState("Cozy Retreat");return e.jsx(S,{style:{width:320},children:e.jsx(l,{label:"Tìm phòng",value:i,onChange:o=>d(o.target.value),onClear:()=>d(""),placeholder:"Tên phòng hoặc mã đặt phòng"})})}};var n,c,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,h,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '7 variant',
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
      <Cell label="Empty · Disabled"><SearchInput fixedWidth value="" disabled placeholder="Tìm kiếm" /></Cell>
      <Cell label="Filled · Disabled"><SearchInput fixedWidth value="Đà Lạt" disabled /></Cell>
    </Row>
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,b,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const y=["Playground","Matrix","WithLabel"],E=Object.freeze(Object.defineProperty({__proto__:null,Matrix:r,Playground:t,WithLabel:s,__namedExportsOrder:y,default:j},Symbol.toStringTag,{value:"Module"}));export{t as P,E as S};

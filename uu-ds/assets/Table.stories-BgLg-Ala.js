import{j as e,r as k}from"./iframe-EkKnofS_.js";import{T as s,a as l,b as r,c as i}from"./Table-CHEJmzAI.js";import{R as y,C as o,S as C}from"./layout-Xzi5pJ9U.js";const te=[{id:"DH-1024",customer:"Nguyễn Minh Anh",date:"12/10/2026",total:125e4},{id:"DH-1025",customer:"Trần Quốc Bảo",date:"13/10/2026",total:48e4},{id:"DH-1026",customer:"Lê Thu Hà",date:"14/10/2026",total:159e5},{id:"DH-1027",customer:"Phạm Gia Huy",date:"15/10/2026",total:72e3}],q=t=>`${t.toLocaleString("vi-VN")} ₫`,c=({children:t,density:a="compact",width:g=720})=>e.jsx("div",{"data-density":a,style:{width:g,maxWidth:"100%",padding:"var(--gap-4)",boxSizing:"border-box",background:"var(--background-surface)",borderRadius:"var(--radius-lg)"},children:t});function j({density:t="compact"}){const[a,g]=k.useState("descending"),[S,F]=k.useState(new Set(["DH-1025"])),J=[...te].sort((n,d)=>a==="ascending"?n.total-d.total:a==="descending"?d.total-n.total:0),Z=(n,d)=>F(ee=>{const T=new Set(ee);return d?T.add(n):T.delete(n),T});return e.jsx(c,{density:t,children:e.jsxs(l,{"aria-label":"Đơn hàng",children:[e.jsx("thead",{children:e.jsxs(r,{children:[e.jsx(i,{style:{width:"var(--size-16)"},children:e.jsx("span",{className:"uu-visually-hidden",children:"Chọn"})}),e.jsx(i,{children:"Khách hàng"}),e.jsx(i,{children:"Mã đơn"}),e.jsx(i,{align:"right",sort:a,onSort:()=>g(a==="descending"?"ascending":"descending"),children:"Tổng tiền"}),e.jsx(i,{children:e.jsx("span",{className:"uu-visually-hidden",children:"Thao tác"})})]})}),e.jsx("tbody",{children:J.map(n=>e.jsxs(r,{state:S.has(n.id)?"selected":"default",children:[e.jsx(s,{type:"checkbox",checked:S.has(n.id),onCheckedChange:d=>Z(n.id,d),checkboxLabel:`Chọn đơn ${n.id}`}),e.jsx(s,{children:n.customer}),e.jsxs(s,{type:"secondary",children:[n.id," · ",n.date]}),e.jsx(s,{type:"number",children:q(n.total)}),e.jsx(s,{type:"actions",action:"Xem",moreLabel:`Thêm thao tác cho đơn ${n.id}`})]},n.id))})]})})}const ae={title:"Component/Dữ liệu/Table",component:s,args:{type:"text",state:"default",children:"Nguyễn Minh Anh",textButton:!0,iconButton:!0,action:"Xem"},argTypes:{type:{control:"inline-radio",options:["text","number","secondary","actions","checkbox"]},state:{control:"inline-radio",options:["default","hover","selected"]}},render:t=>e.jsx(c,{width:360,children:e.jsx(l,{"aria-label":"Ô mẫu",children:e.jsx("tbody",{children:e.jsx(r,{children:e.jsx(s,{...t})})})})})},u={},h={name:"Bảng ghép",parameters:{controls:{disable:!0}},render:()=>e.jsx(j,{})},ne=["off","unsorted","ascending","descending"],w={off:"Off",unsorted:"Unsorted",ascending:"Ascending",descending:"Descending"},m={name:"TableHeaderCell — 8 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(C,{children:["left","right"].map(t=>e.jsx(y,{children:ne.map(a=>e.jsx(o,{label:`Sort=${w[a]}, Align=${t==="left"?"Left":"Right"}`,children:e.jsx(c,{width:200,children:e.jsx(l,{"aria-label":`Tiêu đề ${w[a]} ${t}`,children:e.jsx("thead",{children:e.jsx(r,{children:e.jsx(i,{sort:a,align:t,children:t==="right"?"Tổng tiền":"Khách hàng"})})})})})},a))},t))})},se=["text","number","secondary","actions","checkbox"],f={text:"Text",number:"Number",secondary:"Secondary",actions:"Actions",checkbox:"Checkbox"},re={text:"Nguyễn Minh Anh",number:q(125e4),secondary:"DH-1024",actions:void 0,checkbox:void 0},x={name:"TableCell — 15 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(C,{children:["default","hover","selected"].map(t=>e.jsx(y,{children:se.map(a=>e.jsx(o,{label:`Type=${f[a]}, State=${t[0].toUpperCase()}${t.slice(1)}`,children:e.jsx(c,{width:a==="checkbox"?96:220,children:e.jsx(l,{"aria-label":`Ô ${f[a]} ${t}`,children:e.jsx("tbody",{children:e.jsx(r,{children:e.jsx(s,{type:a,state:t,checked:t==="selected",checkboxLabel:"Chọn hàng mẫu",children:re[a]})})})})})},a))},t))})},b={name:"Ô Actions",parameters:{controls:{disable:!0}},render:()=>e.jsxs(y,{children:[e.jsx(o,{label:"TextButton + IconButton",children:e.jsx(c,{width:200,children:e.jsx(l,{"aria-label":"Ô thao tác 1",children:e.jsx("tbody",{children:e.jsx(r,{children:e.jsx(s,{type:"actions",action:"Sửa"})})})})})}),e.jsx(o,{label:"Chỉ TextButton",children:e.jsx(c,{width:200,children:e.jsx(l,{"aria-label":"Ô thao tác 2",children:e.jsx("tbody",{children:e.jsx(r,{children:e.jsx(s,{type:"actions",action:"Sửa",iconButton:!1})})})})})}),e.jsx(o,{label:"Chỉ IconButton",children:e.jsx(c,{width:200,children:e.jsx(l,{"aria-label":"Ô thao tác 3",children:e.jsx("tbody",{children:e.jsx(r,{children:e.jsx(s,{type:"actions",textButton:!1})})})})})})]})},p={name:"Touch · Compact",parameters:{controls:{disable:!0}},render:()=>e.jsxs(C,{children:[e.jsx(o,{label:"Compact (dashboard, desktop)",children:e.jsx(j,{density:"compact"})}),e.jsx(o,{label:"Touch",children:e.jsx(j,{density:"touch"})})]})};var R,B,D;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(D=(B=u.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var $,A,E,v,M;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Bảng ghép',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <OrdersTable />
}`,...(E=(A=h.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:'Bảng ghép từ ô: hàng tiêu đề + các hàng dữ liệu. Bấm "Tổng tiền" để đổi chiều sắp. Tick ô để chọn hàng.',...(M=(v=h.parameters)==null?void 0:v.docs)==null?void 0:M.description}}};var H,O,N;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'TableHeaderCell — 8 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {(['left', 'right'] as const).map(align => <Row key={align}>
          {SORTS.map(sort => <Cell key={sort} label={\`Sort=\${SORT_NAME[sort]}, Align=\${align === 'left' ? 'Left' : 'Right'}\`}>
              <Desk width={200}>
                <Table aria-label={\`Tiêu đề \${SORT_NAME[sort]} \${align}\`}>
                  <thead><TableRow><TableHeaderCell sort={sort} align={align}>{align === 'right' ? 'Tổng tiền' : 'Khách hàng'}</TableHeaderCell></TableRow></thead>
                </Table>
              </Desk>
            </Cell>)}
        </Row>)}
    </Stack>
}`,...(N=(O=m.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var P,_,L;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'TableCell — 15 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {(['default', 'hover', 'selected'] as const).map(state => <Row key={state}>
          {TYPES.map(type => <Cell key={type} label={\`Type=\${TYPE_NAME[type]}, State=\${state[0].toUpperCase()}\${state.slice(1)}\`}>
              <Desk width={type === 'checkbox' ? 96 : 220}>
                <Table aria-label={\`Ô \${TYPE_NAME[type]} \${state}\`}>
                  <tbody><TableRow><TableCell type={type} state={state} checked={state === 'selected'} checkboxLabel="Chọn hàng mẫu">{SAMPLE[type]}</TableCell></TableRow></tbody>
                </Table>
              </Desk>
            </Cell>)}
        </Row>)}
    </Stack>
}`,...(L=(_=x.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var I,Y,K,z,U;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Ô Actions',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Cell label="TextButton + IconButton"><Desk width={200}><Table aria-label="Ô thao tác 1"><tbody><TableRow><TableCell type="actions" action="Sửa" /></TableRow></tbody></Table></Desk></Cell>
      <Cell label="Chỉ TextButton"><Desk width={200}><Table aria-label="Ô thao tác 2"><tbody><TableRow><TableCell type="actions" action="Sửa" iconButton={false} /></TableRow></tbody></Table></Desk></Cell>
      <Cell label="Chỉ IconButton"><Desk width={200}><Table aria-label="Ô thao tác 3"><tbody><TableRow><TableCell type="actions" textButton={false} /></TableRow></tbody></Table></Desk></Cell>
    </Row>
}`,...(K=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:K.source},description:{story:'Ô `Actions`: bật/tắt nút chữ (`TextButton`) và nút "⋯" (`IconButton`). Không bao giờ `Solid`.',...(U=(z=b.parameters)==null?void 0:z.docs)==null?void 0:U.description}}};var X,G,Q,V,W;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Touch · Compact',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      <Cell label="Compact (dashboard, desktop)"><OrdersTable density="compact" /></Cell>
      <Cell label="Touch"><OrdersTable density="touch" /></Cell>
    </Stack>
}`,...(Q=(G=p.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:"Touch: hàng 56, tiêu đề 48, padding ngang 16 · Compact: 40 · 32 · 12. Bảng dùng Compact.",...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};const le=["Playground","Example","HeaderMatrix","CellMatrix","Actions","Density"],ie=Object.freeze(Object.defineProperty({__proto__:null,Actions:b,CellMatrix:x,Density:p,Example:h,HeaderMatrix:m,Playground:u,__namedExportsOrder:le,default:ae},Symbol.toStringTag,{value:"Module"}));export{h as E,u as P,ie as S};

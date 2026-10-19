import{j as e,r as k}from"./iframe-PRPlo7RZ.js";import{T as s,a as o,b as l,c as h}from"./Table-COIXUv66.js";import{R as y,C as c,S as C}from"./layout-C7vjRdIo.js";const te=[{id:"DH-1024",customer:"Nguyễn Minh Anh",date:"12/10/2026",total:125e4},{id:"DH-1025",customer:"Trần Quốc Bảo",date:"13/10/2026",total:48e4},{id:"DH-1026",customer:"Lê Thu Hà",date:"14/10/2026",total:159e5},{id:"DH-1027",customer:"Phạm Gia Huy",date:"15/10/2026",total:72e3}],q=t=>`${t.toLocaleString("vi-VN")} ₫`,d=({children:t,density:a="compact",width:r=720})=>e.jsx("div",{"data-density":a,style:{width:r,maxWidth:"100%",padding:"var(--gap-4)",boxSizing:"border-box",background:"var(--background-surface)",borderRadius:"var(--radius-lg)"},children:t});function j({density:t="compact"}){const[a,r]=k.useState("descending"),[S,F]=k.useState(new Set(["DH-1025"])),J=[...te].sort((n,i)=>a==="ascending"?n.total-i.total:a==="descending"?i.total-n.total:0),Z=(n,i)=>F(ee=>{const T=new Set(ee);return i?T.add(n):T.delete(n),T});return e.jsx(d,{density:t,children:e.jsxs(o,{"aria-label":"Đơn hàng",children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(h,{style:{width:"var(--size-16)"},children:e.jsx("span",{className:"uu-visually-hidden",children:"Chọn"})}),e.jsx(h,{children:"Khách hàng"}),e.jsx(h,{children:"Mã đơn"}),e.jsx(h,{align:"right",sort:a,onSort:()=>r(a==="descending"?"ascending":"descending"),children:"Tổng tiền"}),e.jsx(h,{children:e.jsx("span",{className:"uu-visually-hidden",children:"Thao tác"})})]})}),e.jsx("tbody",{children:J.map(n=>e.jsxs(l,{state:S.has(n.id)?"selected":"default",children:[e.jsx(s,{type:"checkbox",checked:S.has(n.id),onCheckedChange:i=>Z(n.id,i),checkboxLabel:`Chọn đơn ${n.id}`}),e.jsx(s,{children:n.customer}),e.jsxs(s,{type:"secondary",children:[n.id," · ",n.date]}),e.jsx(s,{type:"number",children:q(n.total)}),e.jsx(s,{type:"actions",action:"Xem",moreLabel:`Thêm thao tác cho đơn ${n.id}`})]},n.id))})]})})}const ae={title:"Component/Dữ liệu/Table",component:s,args:{type:"text",state:"default",children:"Nguyễn Minh Anh",textButton:!0,iconButton:!0,action:"Xem"},argTypes:{type:{control:"inline-radio",options:["text","number","secondary","actions","checkbox"]},state:{control:"inline-radio",options:["default","hover","selected"]}},render:t=>e.jsx(d,{width:360,children:e.jsx(o,{"aria-label":"Ô mẫu",children:e.jsx("tbody",{children:e.jsx(l,{children:e.jsx(s,{...t})})})})})},x={},b={name:"Bảng ghép",parameters:{controls:{disable:!0}},render:()=>e.jsx(j,{})},ne=["off","unsorted","ascending","descending"],f={off:"Off",unsorted:"Unsorted",ascending:"Ascending",descending:"Descending"},m={name:"TableHeaderCell — 20 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(C,{children:["left","right"].flatMap(t=>["default","hover","pressed"].map(a=>e.jsx(y,{children:ne.map(r=>r==="off"&&a!=="default"?e.jsx("div",{style:{width:200}},r):e.jsx(c,{label:`Align=${t==="left"?"Left":"Right"}, Sort=${f[r]}, State=${a[0].toUpperCase()+a.slice(1)}`,children:e.jsx(d,{width:200,children:e.jsx(o,{"aria-label":`Tiêu đề ${f[r]} ${t} ${a}`,children:e.jsx("thead",{children:e.jsx(l,{children:e.jsx(h,{sort:r,align:t,state:a,children:t==="right"?"Tổng tiền":"Khách hàng"})})})})})},r))},`${t}-${a}`)))})},se=["text","number","secondary","actions","checkbox"],w={text:"Text",number:"Number",secondary:"Secondary",actions:"Actions",checkbox:"Checkbox"},re={text:"Nguyễn Minh Anh",number:q(125e4),secondary:"DH-1024",actions:void 0,checkbox:void 0},g={name:"TableCell — 15 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(C,{children:["default","hover","selected"].map(t=>e.jsx(y,{children:se.map(a=>e.jsx(c,{label:`Type=${w[a]}, State=${t[0].toUpperCase()}${t.slice(1)}`,children:e.jsx(d,{width:a==="checkbox"?96:220,children:e.jsx(o,{"aria-label":`Ô ${w[a]} ${t}`,children:e.jsx("tbody",{children:e.jsx(l,{children:e.jsx(s,{type:a,state:t,checked:t==="selected",checkboxLabel:"Chọn hàng mẫu",children:re[a]})})})})})},a))},t))})},p={name:"Ô Actions",parameters:{controls:{disable:!0}},render:()=>e.jsxs(y,{children:[e.jsx(c,{label:"TextButton + IconButton",children:e.jsx(d,{width:200,children:e.jsx(o,{"aria-label":"Ô thao tác 1",children:e.jsx("tbody",{children:e.jsx(l,{children:e.jsx(s,{type:"actions",action:"Sửa"})})})})})}),e.jsx(c,{label:"Chỉ TextButton",children:e.jsx(d,{width:200,children:e.jsx(o,{"aria-label":"Ô thao tác 2",children:e.jsx("tbody",{children:e.jsx(l,{children:e.jsx(s,{type:"actions",action:"Sửa",iconButton:!1})})})})})}),e.jsx(c,{label:"Chỉ IconButton",children:e.jsx(d,{width:200,children:e.jsx(o,{"aria-label":"Ô thao tác 3",children:e.jsx("tbody",{children:e.jsx(l,{children:e.jsx(s,{type:"actions",textButton:!1})})})})})})]})},u={name:"Touch · Compact",parameters:{controls:{disable:!0}},render:()=>e.jsxs(C,{children:[e.jsx(c,{label:"Compact (dashboard, desktop)",children:e.jsx(j,{density:"compact"})}),e.jsx(c,{label:"Touch",children:e.jsx(j,{density:"touch"})})]})};var R,$,v;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(v=($=x.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var B,D,A,E,M;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Bảng ghép',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <OrdersTable />
}`,...(A=(D=b.parameters)==null?void 0:D.docs)==null?void 0:A.source},description:{story:'Bảng ghép từ ô: hàng tiêu đề + các hàng dữ liệu. Bấm "Tổng tiền" để đổi chiều sắp. Tick ô để chọn hàng.',...(M=(E=b.parameters)==null?void 0:E.docs)==null?void 0:M.description}}};var H,O,N;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'TableHeaderCell — 20 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {(['left', 'right'] as const).flatMap(align => (['default', 'hover', 'pressed'] as const).map(state => <Row key={\`\${align}-\${state}\`}>
          {SORTS.map(sort => sort === 'off' && state !== 'default' ? <div key={sort} style={{
        width: 200
      }} /> : <Cell key={sort} label={\`Align=\${align === 'left' ? 'Left' : 'Right'}, Sort=\${SORT_NAME[sort]}, State=\${state[0].toUpperCase() + state.slice(1)}\`}>
              <Desk width={200}>
                <Table aria-label={\`Tiêu đề \${SORT_NAME[sort]} \${align} \${state}\`}>
                  <thead><TableRow><TableHeaderCell sort={sort} align={align} state={state}>{align === 'right' ? 'Tổng tiền' : 'Khách hàng'}</TableHeaderCell></TableRow></thead>
                </Table>
              </Desk>
            </Cell>)}
        </Row>))}
    </Stack>
}`,...(N=(O=m.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var P,_,L;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(_=g.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var I,U,Y,K,z;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(Y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:'Ô `Actions`: bật/tắt nút chữ (`TextButton`) và nút "⋯" (`IconButton`). Không bao giờ `Solid`.',...(z=(K=p.parameters)==null?void 0:K.docs)==null?void 0:z.description}}};var X,G,Q,V,W;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(G=u.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:"Touch: hàng 56, tiêu đề 48, padding ngang 16 · Compact: 40 · 32 · 12. Bảng dùng Compact.",...(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};const le=["Playground","Example","HeaderMatrix","CellMatrix","Actions","Density"],ie=Object.freeze(Object.defineProperty({__proto__:null,Actions:p,CellMatrix:g,Density:u,Example:b,HeaderMatrix:m,Playground:x,__namedExportsOrder:le,default:ae},Symbol.toStringTag,{value:"Module"}));export{b as E,x as P,ie as S};

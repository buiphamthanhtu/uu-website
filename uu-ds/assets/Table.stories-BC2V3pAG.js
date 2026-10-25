import{j as e,r as D}from"./iframe-6vwN6wb9.js";import{c as l,T as h,a as o,b as c}from"./Table-BvooIirA.js";import{T as pe}from"./TablePagination-BKcELBeQ.js";import{R as A,C as p,S as H}from"./layout-nPJ89kCs.js";const v=[{id:"DH-1024",customer:"Nguyễn Minh Anh",date:"12/10/2026",total:125e4,status:"done"},{id:"DH-1025",customer:"Trần Quốc Bảo",date:"13/10/2026",total:48e4,status:"shipping"},{id:"DH-1026",customer:"Lê Thu Hà",date:"14/10/2026",total:159e5,status:"waiting"},{id:"DH-1027",customer:"Phạm Gia Huy",date:"15/10/2026",total:72e3,status:"cancelled"}],E={done:{tone:"success",label:"Đã giao"},shipping:{tone:"neutral",label:"Đang giao"},waiting:{tone:"warning",label:"Chờ xác nhận"},cancelled:{tone:"error",label:"Đã huỷ"}},B=Array.from({length:12},(a,t)=>{const s=v[t%v.length];return{...s,id:`DH-${1024+t}`,date:`${String(12+t%15).padStart(2,"0")}/10/2026`,total:s.total+t*15e3}}),P=a=>`${a.toLocaleString("vi-VN")} ₫`,ue=(a,t)=>{const s=a.filter(u=>t.has(u)).length;return s===0?!1:s===a.length?!0:"indeterminate"},b=({children:a,density:t="compact",width:s=720})=>e.jsx("div",{"data-density":t,style:{width:s,maxWidth:"100%",padding:"var(--gap-4)",boxSizing:"border-box",background:"var(--background-surface)",borderRadius:"var(--radius-lg)"},children:a});function M({density:a="compact"}){const[t,s]=D.useState("descending"),[u,f]=D.useState(new Set(["DH-1025"])),x=[...v].sort((n,i)=>t==="ascending"?n.total-i.total:t==="descending"?i.total-n.total:0),R=(n,i)=>f(r=>{const d=new Set(r);return i?d.add(n):d.delete(n),d});return e.jsx(b,{density:a,children:e.jsxs(h,{"aria-label":"Đơn hàng",children:[e.jsx("thead",{children:e.jsxs(o,{children:[e.jsx(c,{type:"checkbox",checked:ue(x.map(n=>n.id),u),onCheckedChange:n=>f(n?new Set(x.map(i=>i.id)):new Set)}),e.jsx(c,{children:"Khách hàng"}),e.jsx(c,{children:"Mã đơn"}),e.jsx(c,{children:"Trạng thái"}),e.jsx(c,{align:"right",sort:t,onSort:()=>s(t==="descending"?"ascending":"descending"),children:"Tổng tiền"}),e.jsx(c,{children:e.jsx("span",{className:"uu-visually-hidden",children:"Thao tác"})})]})}),e.jsx("tbody",{children:x.map(n=>e.jsxs(o,{state:u.has(n.id)?"selected":"default",children:[e.jsx(l,{type:"checkbox",checked:u.has(n.id),onCheckedChange:i=>R(n.id,i),checkboxLabel:`Chọn đơn ${n.id}`}),e.jsx(l,{children:n.customer}),e.jsxs(l,{type:"secondary",children:[n.id," · ",n.date]}),e.jsx(l,{type:"status",statusTone:E[n.status].tone,children:E[n.status].label}),e.jsx(l,{type:"number",children:P(n.total)}),e.jsx(l,{type:"actions",action:"Xem",moreLabel:`Thêm thao tác cho đơn ${n.id}`})]},n.id))})]})})}const $=4;function xe(){const[a,t]=D.useState(1),[s,u]=D.useState(new Set(["DH-1025","DH-1026"])),f=Math.ceil(B.length/$),x=B.slice((a-1)*$,a*$),R=x.map(r=>r.id),n=(r,d)=>u(C=>{const g=new Set(C);return d?g.add(r):g.delete(r),g}),i=r=>u(d=>{const C=new Set(d);return R.forEach(g=>r?C.add(g):C.delete(g)),C});return e.jsxs(b,{children:[e.jsxs(h,{"aria-label":"Đơn hàng có chọn hàng",children:[e.jsx("thead",{children:e.jsxs(o,{children:[e.jsx(c,{type:"checkbox",checked:ue(R,s),onCheckedChange:i}),e.jsx(c,{children:"Khách hàng"}),e.jsx(c,{children:"Trạng thái"}),e.jsx(c,{align:"right",children:"Tổng tiền"})]})}),e.jsx("tbody",{children:x.map(r=>e.jsxs(o,{state:s.has(r.id)?"selected":"default",children:[e.jsx(l,{type:"checkbox",checked:s.has(r.id),onCheckedChange:d=>n(r.id,d),checkboxLabel:`Chọn đơn ${r.id}`}),e.jsx(l,{children:r.customer}),e.jsx(l,{type:"status",statusTone:E[r.status].tone,children:E[r.status].label}),e.jsx(l,{type:"number",children:P(r.total)})]},r.id))})]}),e.jsx(pe,{page:a,pageCount:f,onPageChange:t,pageSize:$,totalRows:B.length,"aria-label":"Phân trang đơn hàng"})]})}const ge={title:"Component/Dữ liệu/Table",component:l,args:{type:"text",state:"default",children:"Nguyễn Minh Anh",textButton:!0,iconButton:!0,action:"Xem"},argTypes:{type:{control:"inline-radio",options:["text","number","secondary","actions","checkbox","status"]},statusTone:{control:"inline-radio",options:["neutral","success","warning","error","highlight"]},statusContainer:{control:"inline-radio",options:["none","filled"]},state:{control:"inline-radio",options:["default","hover","selected"]}},render:a=>e.jsx(b,{width:360,children:e.jsx(h,{"aria-label":"Ô mẫu",children:e.jsx("tbody",{children:e.jsx(o,{children:e.jsx(l,{...a})})})})})},S={},m={name:"Bảng ghép",parameters:{controls:{disable:!0}},render:()=>e.jsx(M,{})},T={name:"Chọn hàng",parameters:{controls:{disable:!0}},render:()=>e.jsx(xe,{})},me=["off","unsorted","ascending","descending"],O={off:"Off",unsorted:"Unsorted",ascending:"Ascending",descending:"Descending"},k={name:"TableHeaderCell — 21 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(H,{children:[e.jsx(A,{children:e.jsx(p,{label:"Type=Checkbox",children:e.jsx(b,{width:96,children:e.jsx(h,{"aria-label":"Tiêu đề chọn tất cả",children:e.jsx("thead",{children:e.jsx(o,{children:e.jsx(c,{type:"checkbox",checked:"indeterminate"})})})})})})}),["left","right"].flatMap(a=>["default","hover","pressed"].map(t=>e.jsx(A,{children:me.map(s=>s==="off"&&t!=="default"?e.jsx("div",{style:{width:200}},s):e.jsx(p,{label:`Align=${a==="left"?"Left":"Right"}, Sort=${O[s]}, State=${t[0].toUpperCase()+t.slice(1)}`,children:e.jsx(b,{width:200,children:e.jsx(h,{"aria-label":`Tiêu đề ${O[s]} ${a} ${t}`,children:e.jsx("thead",{children:e.jsx(o,{children:e.jsx(c,{sort:s,align:a,state:t,children:a==="right"?"Tổng tiền":"Khách hàng"})})})})})},s))},`${a}-${t}`)))]})},Te=["text","number","secondary","actions","checkbox","status"],_={text:"Text",number:"Number",secondary:"Secondary",actions:"Actions",checkbox:"Checkbox",status:"Status"},je={text:"Nguyễn Minh Anh",number:P(125e4),secondary:"DH-1024",actions:void 0,checkbox:void 0,status:"Đã giao"},w={name:"TableCell — 18 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(H,{children:["default","hover","selected"].map(a=>e.jsx(A,{children:Te.map(t=>e.jsx(p,{label:`Type=${_[t]}, State=${a[0].toUpperCase()}${a.slice(1)}`,children:e.jsx(b,{width:t==="checkbox"?96:220,children:e.jsx(h,{"aria-label":`Ô ${_[t]} ${a}`,children:e.jsx("tbody",{children:e.jsx(o,{children:e.jsx(l,{type:t,state:a,checked:a==="selected",checkboxLabel:"Chọn hàng mẫu",statusTone:"success",children:je[t]})})})})})},t))},a))})},j={name:"Ô Actions",parameters:{controls:{disable:!0}},render:()=>e.jsxs(A,{children:[e.jsx(p,{label:"TextButton + IconButton",children:e.jsx(b,{width:200,children:e.jsx(h,{"aria-label":"Ô thao tác 1",children:e.jsx("tbody",{children:e.jsx(o,{children:e.jsx(l,{type:"actions",action:"Sửa"})})})})})}),e.jsx(p,{label:"Chỉ TextButton",children:e.jsx(b,{width:200,children:e.jsx(h,{"aria-label":"Ô thao tác 2",children:e.jsx("tbody",{children:e.jsx(o,{children:e.jsx(l,{type:"actions",action:"Sửa",iconButton:!1})})})})})}),e.jsx(p,{label:"Chỉ IconButton",children:e.jsx(b,{width:200,children:e.jsx(h,{"aria-label":"Ô thao tác 3",children:e.jsx("tbody",{children:e.jsx(o,{children:e.jsx(l,{type:"actions",textButton:!1})})})})})})]})},y={name:"Touch · Compact",parameters:{controls:{disable:!0}},render:()=>e.jsxs(H,{children:[e.jsx(p,{label:"Compact (dashboard, desktop)",children:e.jsx(M,{density:"compact"})}),e.jsx(p,{label:"Touch",children:e.jsx(M,{density:"touch"})})]})};var N,L,I;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(I=(L=S.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var U,Y,K,z,G;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Bảng ghép',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <OrdersTable />
}`,...(K=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:K.source},description:{story:'Bảng ghép từ ô: hàng tiêu đề + các hàng dữ liệu. Bấm "Tổng tiền" để đổi chiều sắp. Tick ô để chọn hàng, ô đầu cột để chọn / bỏ cả bảng.',...(G=(z=m.parameters)==null?void 0:z.docs)==null?void 0:G.description}}};var X,Q,V,W,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Chọn hàng',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SelectableTable />
}`,...(V=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:V.source},description:{story:"Ô đầu cột chọn / bỏ mọi hàng **của trang đang xem**: Checked khi đủ cả trang, Indeterminate khi một phần. Chuyển trang để thấy ô đầu đổi theo trang.",...(Z=(W=T.parameters)==null?void 0:W.docs)==null?void 0:Z.description}}};var q,F,J;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'TableHeaderCell — 21 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      <Row>
        <Cell label="Type=Checkbox">
          <Desk width={96}>
            <Table aria-label="Tiêu đề chọn tất cả">
              <thead><TableRow><TableHeaderCell type="checkbox" checked="indeterminate" /></TableRow></thead>
            </Table>
          </Desk>
        </Cell>
      </Row>
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
}`,...(J=(F=k.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var ee,te,ae;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'TableCell — 18 variant',
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
                  <tbody><TableRow><TableCell type={type} state={state} checked={state === 'selected'} checkboxLabel="Chọn hàng mẫu" statusTone="success">{SAMPLE[type]}</TableCell></TableRow></tbody>
                </Table>
              </Desk>
            </Cell>)}
        </Row>)}
    </Stack>
}`,...(ae=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,se,re,le,ce;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(se=j.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:'Ô `Actions`: bật/tắt nút chữ (`TextButton`) và nút "⋯" (`IconButton`). Không bao giờ `Solid`.',...(ce=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};var oe,ie,de,he,be;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:de.source},description:{story:"Touch: hàng 56, tiêu đề 48, padding ngang 16 · Compact: 40 · 32 · 12. Bảng dùng Compact.",...(be=(he=y.parameters)==null?void 0:he.docs)==null?void 0:be.description}}};const ye=["Playground","Example","Selection","HeaderMatrix","CellMatrix","Actions","Density"],fe=Object.freeze(Object.defineProperty({__proto__:null,Actions:j,CellMatrix:w,Density:y,Example:m,HeaderMatrix:k,Playground:S,Selection:T,__namedExportsOrder:ye,default:ge},Symbol.toStringTag,{value:"Module"}));export{j as A,w as C,y as D,m as E,k as H,S as P,fe as S,T as a};

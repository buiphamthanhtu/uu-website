import{j as e,r as I}from"./iframe-k4bV9c5e.js";import{T as t,P as i}from"./TablePagination-BT8asz0X.js";import{S as E,C as a,R as M}from"./layout-COpsTpFq.js";const n=({children:r,width:p=720,density:c="compact"})=>e.jsx("div",{"data-density":c,style:{width:p,maxWidth:"100%",padding:"0 var(--gap-4)",boxSizing:"border-box",background:"var(--background-surface)",borderRadius:"var(--radius-lg)"},children:r}),_={title:"Component/Dữ liệu/TablePagination",component:t,args:{page:1,pageCount:5,rowsPerPage:!0,pageSize:10,totalRows:120,onPageChange:()=>{}},argTypes:{page:{control:{type:"number",min:1}},pageCount:{control:{type:"number",min:1,max:9}}},render:r=>{const[p,c]=I.useState(r.page);return e.jsx(n,{children:e.jsx(t,{...r,page:Math.min(p,r.pageCount),onPageChange:c})})}},g={},s={name:"Biến thể",parameters:{controls:{disable:!0}},render:()=>e.jsxs(E,{children:[e.jsx(a,{label:"Rows per page=True · trang đầu (lùi Disabled)",children:e.jsx(n,{children:e.jsx(t,{page:1,pageCount:5,totalRows:120,onPageChange:()=>{},"aria-label":"Phân trang mẫu 1"})})}),e.jsx(a,{label:"Rows per page=True · trang giữa",children:e.jsx(n,{children:e.jsx(t,{page:3,pageCount:5,totalRows:120,onPageChange:()=>{},"aria-label":"Phân trang mẫu 2"})})}),e.jsx(a,{label:"Rows per page=True · trang cuối (tiến Disabled)",children:e.jsx(n,{children:e.jsx(t,{page:5,pageCount:5,totalRows:120,onPageChange:()=>{},"aria-label":"Phân trang mẫu 3"})})}),e.jsx(a,{label:"Rows per page=False",children:e.jsx(n,{children:e.jsx(t,{page:2,pageCount:5,rowsPerPage:!1,onPageChange:()=>{},"aria-label":"Phân trang mẫu 4"})})}),e.jsx(a,{label:"Touch",children:e.jsx(n,{density:"touch",children:e.jsx(t,{page:2,pageCount:5,totalRows:120,onPageChange:()=>{},"aria-label":"Phân trang mẫu 5"})})})]})},l={name:".PageItem — 4 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{"data-density":"compact",children:e.jsxs(M,{children:[e.jsx(a,{label:"Default",children:e.jsx(i,{page:2})}),e.jsx(a,{label:"Hover",children:e.jsx(i,{page:2,state:"hover"})}),e.jsx(a,{label:"Selected",children:e.jsx(i,{page:2,state:"selected"})}),e.jsx(a,{label:"Ellipsis",children:e.jsx(i,{page:"…",state:"ellipsis"})})]})})},o={name:"Rút gọn (20 trang)",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{"data-density":"compact",style:{display:"grid",gap:"var(--gap-3)"},children:[1,2,4,10,17,20].map(r=>e.jsx(t,{page:r,pageCount:20,onPageChange:()=>{},rowsPerPage:!1},r))})};var d,u,m;g.parameters={...g.parameters,docs:{...(d=g.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(u=g.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,P,h,C,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Biến thể',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      <Cell label="Rows per page=True · trang đầu (lùi Disabled)"><Desk><TablePagination page={1} pageCount={5} totalRows={120} onPageChange={() => {}} aria-label="Phân trang mẫu 1" /></Desk></Cell>
      <Cell label="Rows per page=True · trang giữa"><Desk><TablePagination page={3} pageCount={5} totalRows={120} onPageChange={() => {}} aria-label="Phân trang mẫu 2" /></Desk></Cell>
      <Cell label="Rows per page=True · trang cuối (tiến Disabled)"><Desk><TablePagination page={5} pageCount={5} totalRows={120} onPageChange={() => {}} aria-label="Phân trang mẫu 3" /></Desk></Cell>
      <Cell label="Rows per page=False"><Desk><TablePagination page={2} pageCount={5} rowsPerPage={false} onPageChange={() => {}} aria-label="Phân trang mẫu 4" /></Desk></Cell>
      <Cell label="Touch"><Desk density="touch"><TablePagination page={2} pageCount={5} totalRows={120} onPageChange={() => {}} aria-label="Phân trang mẫu 5" /></Desk></Cell>
    </Stack>
}`,...(h=(P=s.parameters)==null?void 0:P.docs)==null?void 0:h.source},description:{story:"`TablePagination` có 1 variant với BOOLEAN `Rows per page`; nút lùi / tiến Disabled ở trang đầu / cuối.",...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.description}}};var j,w,R,v,y;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '.PageItem — 4 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div data-density="compact">
      <Row>
        <Cell label="Default"><PageItem page={2} /></Cell>
        <Cell label="Hover"><PageItem page={2} state="hover" /></Cell>
        <Cell label="Selected"><PageItem page={2} state="selected" /></Cell>
        <Cell label="Ellipsis"><PageItem page="…" state="ellipsis" /></Cell>
      </Row>
    </div>
}`,...(R=(w=l.parameters)==null?void 0:w.docs)==null?void 0:R.source},description:{story:"`.PageItem` (nội bộ) — 3 variant: State Default · Hover · Selected.",...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var T,D,k,S,f;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Rút gọn (20 trang)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div data-density="compact" style={{
    display: 'grid',
    gap: 'var(--gap-3)'
  }}>
      {[1, 2, 4, 10, 17, 20].map(p => <TablePagination key={p} page={p} pageCount={20} onPageChange={() => {}} rowsPerPage={false} />)}
    </div>
}`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source},description:{story:'Quá 7 trang: giữ trang đầu, trang cuối, trang đang chọn ± 1; khoảng trống thành "…".',...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.description}}};const O=["Playground","Matrix","PageItemMatrix","Truncated"],F=Object.freeze(Object.defineProperty({__proto__:null,Matrix:s,PageItemMatrix:l,Playground:g,Truncated:o,__namedExportsOrder:O,default:_},Symbol.toStringTag,{value:"Module"}));export{g as P,F as S};

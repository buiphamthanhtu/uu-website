import{j as e,r as T}from"./iframe-EkKnofS_.js";import{T as r,P as p}from"./TablePagination-C976WJur.js";import{S as v,C as a,R as S}from"./layout-Xzi5pJ9U.js";const t=({children:s,width:g=720,density:i="compact"})=>e.jsx("div",{"data-density":i,style:{width:g,maxWidth:"100%",padding:"0 var(--gap-4)",boxSizing:"border-box",background:"var(--background-surface)",borderRadius:"var(--radius-lg)"},children:s}),k={title:"Component/Dữ liệu/TablePagination",component:r,args:{page:1,pageCount:5,rowsPerPage:!0,pageSize:10,totalRows:120,onPageChange:()=>{}},argTypes:{page:{control:{type:"number",min:1}},pageCount:{control:{type:"number",min:1,max:9}}},render:s=>{const[g,i]=T.useState(s.page);return e.jsx(t,{children:e.jsx(r,{...s,page:Math.min(g,s.pageCount),onPageChange:i})})}},o={},l={name:"Biến thể",parameters:{controls:{disable:!0}},render:()=>e.jsxs(v,{children:[e.jsx(a,{label:"Rows per page=True · trang đầu (lùi Disabled)",children:e.jsx(t,{children:e.jsx(r,{page:1,pageCount:5,totalRows:120,onPageChange:()=>{},"aria-label":"Phân trang mẫu 1"})})}),e.jsx(a,{label:"Rows per page=True · trang giữa",children:e.jsx(t,{children:e.jsx(r,{page:3,pageCount:5,totalRows:120,onPageChange:()=>{},"aria-label":"Phân trang mẫu 2"})})}),e.jsx(a,{label:"Rows per page=True · trang cuối (tiến Disabled)",children:e.jsx(t,{children:e.jsx(r,{page:5,pageCount:5,totalRows:120,onPageChange:()=>{},"aria-label":"Phân trang mẫu 3"})})}),e.jsx(a,{label:"Rows per page=False",children:e.jsx(t,{children:e.jsx(r,{page:2,pageCount:5,rowsPerPage:!1,onPageChange:()=>{},"aria-label":"Phân trang mẫu 4"})})}),e.jsx(a,{label:"Touch",children:e.jsx(t,{density:"touch",children:e.jsx(r,{page:2,pageCount:5,totalRows:120,onPageChange:()=>{},"aria-label":"Phân trang mẫu 5"})})})]})},n={name:".PageItem — 3 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{"data-density":"compact",children:e.jsxs(S,{children:[e.jsx(a,{label:"Default",children:e.jsx(p,{page:2})}),e.jsx(a,{label:"Hover",children:e.jsx(p,{page:2,state:"hover"})}),e.jsx(a,{label:"Selected",children:e.jsx(p,{page:2,state:"selected"})})]})})};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,b,P,h,C;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(P=(b=l.parameters)==null?void 0:b.docs)==null?void 0:P.source},description:{story:"`TablePagination` có 1 variant với BOOLEAN `Rows per page`; nút lùi / tiến Disabled ở trang đầu / cuối.",...(C=(h=l.parameters)==null?void 0:h.docs)==null?void 0:C.description}}};var x,j,w,R,D;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '.PageItem — 3 variant',
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
      </Row>
    </div>
}`,...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:"`.PageItem` (nội bộ) — 3 variant: State Default · Hover · Selected.",...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.description}}};const y=["Playground","Matrix","PageItemMatrix"],_=Object.freeze(Object.defineProperty({__proto__:null,Matrix:l,PageItemMatrix:n,Playground:o,__namedExportsOrder:y,default:k},Symbol.toStringTag,{value:"Module"}));export{o as P,_ as S};

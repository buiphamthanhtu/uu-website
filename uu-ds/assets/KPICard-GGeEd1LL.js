import{j as n}from"./iframe-PRPlo7RZ.js";import{useMDXComponents as c}from"./index-BaD3h-2i.js";import{M as s,C as t,a as i,S as l}from"./blocks-ByS9KvVO.js";import{D as o,C as x}from"./DocHeader-DgY1CLlQ.js";import{S as j,P as r}from"./KPICard.stories-BLKyVhRY.js";import"./preload-helper-Dp1pzeXC.js";import"./KPICard-DHKWZMan.js";import"./layout-C7vjRdIo.js";function h(d){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:j}),`
`,n.jsx(e.h1,{id:"kpicard",children:"KPICard"}),`
`,n.jsx(o,{spec:"6.26",variants:"3",status:"chốt",children:n.jsxs(e.p,{children:["Thẻ ",n.jsx(e.strong,{children:"một con số chính"})," trên dashboard. ",n.jsx(e.code,{children:"Trend"})," Up · Down · ",n.jsx(e.code,{children:"[No trend]"}),"."]})}),`
`,n.jsx(t,{of:r}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(e.h2,{id:"hình-học",children:"Hình học"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Phần"}),n.jsx(e.th,{children:"Giá trị"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Thẻ"}),n.jsxs(e.td,{children:["dọc · padding ",n.jsx(e.code,{children:"--card-padding"})," (",n.jsx(e.strong,{children:"16"})," · Compact ",n.jsx(e.strong,{children:"12"}),") · gap ",n.jsx(e.strong,{children:"4"})," · ",n.jsx(e.code,{children:"radius-lg"})," · nền ",n.jsx(e.code,{children:"background-surface"})," · viền 1px ",n.jsx(e.code,{children:"border-muted"})," · FILL"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Label"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"caption"})," ",n.jsx(e.code,{children:"object-secondary"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Value"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"heading-base"})," ",n.jsx(e.code,{children:"object-primary"})," · ",n.jsx(e.code,{children:"tabular-nums"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Delta"})}),n.jsxs(e.td,{children:["ngang · gap ",n.jsx(e.strong,{children:"4"})," · icon 16 + ",n.jsx(e.code,{children:"caption"})]})]})]})]}),`
`,n.jsx(e.h2,{id:"3-variant",children:"3 variant"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Trend"}),n.jsx(e.th,{children:"Delta"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Up"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"arrow-trend-up"})," + chữ ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"object-positive"})})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Down"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"arrow-trend-down"})," + chữ ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"object-negative"})})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"[No trend]"})}),n.jsxs(e.td,{children:["không có ",n.jsx(e.code,{children:"Delta"})]})]})]})]}),`
`,n.jsxs(e.p,{children:["Màu ",n.jsx(e.code,{children:"Delta"})," theo ",n.jsx(e.strong,{children:"chiều số"}),", không theo tốt hay xấu: chi phí tăng vẫn là ",n.jsx(e.code,{children:"Up"}),' xanh. Cần thể hiện "tăng là xấu" thì dừng và hỏi, chưa có variant cho trường hợp đó.']}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<KPICard
  label="Doanh thu tháng 10"
  value="1.250.000.000 ₫"
  trend="up"
  delta="12% so với tháng trước"
/>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"value"}),' truyền chuỗi đã định dạng sẵn (dấu chấm ngăn nghìn, ký hiệu ₫ cách một khoảng). Trình đọc màn hình nghe thêm chữ "Tăng" / "Giảm" trước ',n.jsx(e.code,{children:"delta"}),", vì mũi tên chỉ là hình."]}),`
`,n.jsx(e.p,{children:"Thẻ FILL bề ngang khung chứa. Màn tự xếp các thẻ thành hàng hoặc lưới."}),`
`,n.jsx(x,{type:"warning",title:"Chưa chốt",children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Biểu đồ nhỏ"})," (sparkline) trong thẻ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Thẻ bấm được"}),": thẻ hiện không có state layer, không phải link hay nút."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:'"Tăng là xấu"'}),": màu ",n.jsx(e.code,{children:"Delta"})," chỉ theo chiều số."]}),`
`]})}),`
`,n.jsx(l,{includePrimary:!1})]})}function f(d={}){const{wrapper:e}={...c(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(h,{...d})}):h(d)}export{f as default};

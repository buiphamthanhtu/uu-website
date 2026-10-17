import{j as n}from"./iframe-DOXsB9Iw.js";import{useMDXComponents as c}from"./index-DJ0pij_p.js";import{M as s,C as h,a as i,S as d}from"./blocks-BAZdziko.js";import{D as l}from"./DocHeader-B8iHSaQm.js";import{S as a,P as r}from"./ButtonGroup.stories-BZIh6mvN.js";import"./preload-helper-Dp1pzeXC.js";import"./ButtonGroup-D8Jdc5XJ.js";import"./layout-BGqIjpay.js";function o(e){const t={blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:a}),`
`,n.jsx(t.h1,{id:"buttongroup",children:"ButtonGroup"}),`
`,n.jsx(l,{spec:"6.9",variants:"2",status:"chốt"}),`
`,n.jsx(h,{of:r}),`
`,n.jsx(i,{of:r}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Layout"}),n.jsx(t.th,{children:"Thứ tự"}),n.jsx(t.th,{children:"Kích thước"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Horizontal"}),n.jsx(t.td,{children:n.jsx(t.strong,{children:"phụ (Outline) trái, chính (Solid) phải"})}),n.jsxs(t.td,{children:["cả hai ",n.jsx(t.code,{children:"flex: 1 1 0"})," → chia đều"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Vertical"}),n.jsx(t.td,{children:n.jsx(t.strong,{children:"chính (Solid) trên, phụ (Outline) dưới"})}),n.jsx(t.td,{children:"cả hai FILL ngang"})]})]})]}),`
`,n.jsxs(t.p,{children:["Nút là ",n.jsx(t.code,{children:"TextButtonAccent"})," size Large (56), gap 12, min-width 56. Thứ tự đảo giữa hai layout là cố ý: nằm ngang thì nút chính bên phải, xếp dọc thì nút chính ở trên — đều ở vị trí ngón tay tới dễ nhất."]}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["Trong bản thiết kế variant Horizontal render lệch 172/168 vì bản thiết kế cộng stroke 2px của nút Outline vào phần chia. CSS ",n.jsx(t.code,{children:"box-sizing: border-box"})," + ",n.jsx(t.code,{children:"flex: 1 1 0"})," cho hai nút bằng nhau chính xác. ",n.jsx(t.strong,{children:"Đừng copy 172/168 vào code."})," Đừng dùng ",n.jsx(t.code,{children:"flex: 1 1 auto"})," — basis auto chia phần dư lên bề rộng nội dung vốn khác nhau."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`<ButtonGroup primary={{ label: 'Xác nhận', onClick: ok }} secondary={{ label: 'Huỷ', onClick: cancel }} />
`})}),`
`,n.jsx(d,{includePrimary:!1})]})}function y(e={}){const{wrapper:t}={...c(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{y as default};

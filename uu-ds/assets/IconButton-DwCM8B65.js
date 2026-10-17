import{j as n}from"./iframe-EkKnofS_.js";import{useMDXComponents as d}from"./index-B75LKoEL.js";import{M as i,C as o,a as s,S as h}from"./blocks-BLnrhJ-D.js";import{D as l}from"./DocHeader-5e4C0x_g.js";import{S as a,P as c}from"./IconButton.stories-B_3GaPUA.js";import"./preload-helper-Dp1pzeXC.js";import"./layout-Xzi5pJ9U.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:a}),`
`,n.jsx(e.h1,{id:"iconbutton",children:"IconButton"}),`
`,n.jsx(l,{spec:"6.2",variants:"90 × 2",status:"chốt"}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(s,{of:c}),`
`,n.jsx(e.h2,{id:"layout",children:"Layout"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Size"}),n.jsx(e.th,{children:"Box"}),n.jsx(e.th,{children:"Icon"}),n.jsx(e.th,{children:"Radius"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Large"}),n.jsx(e.td,{children:"56 × 56"}),n.jsx(e.td,{children:"24"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"rounded-circle"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Base"}),n.jsx(e.td,{children:"48 × 48"}),n.jsx(e.td,{children:"24"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"rounded-circle"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Small"}),n.jsx(e.td,{children:"32 × 32"}),n.jsx(e.td,{children:"16"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"rounded-circle"})})]})]})]}),`
`,n.jsxs(e.p,{children:["Màu giống hệt bảng TextButton tương ứng; stroke Outline 2px INSIDE; màu icon là token ",n.jsx(e.code,{children:"object-*"})," như màu text. State layer theo mục 6.0 — 18 tổ hợp Inverted=True đã đối chiếu: Solid 5/10, Outline 20/40, Ghost 20/40."]}),`
`,n.jsx(e.h2,{id:"nét-icon-nhỏ-hơn-hộp",children:"Nét icon nhỏ hơn hộp"}),`
`,n.jsxs(e.p,{children:["UU icon vẽ trên lưới 18 có lề, nét ",n.jsx(e.code,{children:"xmark"})," trong hộp 24 chỉ ≈15,3px, hộp 16 ≈10px. Đây là thiết kế, không phải lỗi. Nếu chữ X trông to gần bằng hộp hoặc chỉ ~11px thì đang dùng bộ icon khác hoặc SVG sót ",n.jsx(e.code,{children:'width="18"'}),"."]}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<IconButtonNeutral type="ghost" icon="xmark" label="Đóng" />
<IconButtonNeutral type="solid" inverted icon="chevron-left" label="Quay lại" />   // nút back của NavigationBar
<IconButtonAccent type="solid" inverted icon="share-right" label="Chia sẻ" />      // sub action
<IconButtonNeutral type="outline" size="small" icon="xmark" label="Đóng" />         // nút đóng của Sheet/Dialog
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"label"})," là bắt buộc — nút không có chữ nên screen reader cần tên."]}),`
`,n.jsx(h,{includePrimary:!1})]})}function y(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{y as default};

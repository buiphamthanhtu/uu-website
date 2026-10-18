import{j as n}from"./iframe-o9qWa12E.js";import{useMDXComponents as t}from"./index-C2ilI4C6.js";import{M as s,C as r,a as o,S as d}from"./blocks-DUuIq9BS.js";import{D as l,C as x}from"./DocHeader-CFI7Q7vw.js";import{S as j,P as e}from"./Tooltip.stories-DAA00ny3.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CABAn2vz.js";import"./layout-Bfiz2Kkg.js";function i(c){const h={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:j}),`
`,n.jsx(h.h1,{id:"tooltip",children:"Tooltip"}),`
`,n.jsx(l,{spec:"6.30",variants:"4",status:"chốt",children:n.jsxs(h.p,{children:["Nhãn ngắn giải thích một phần tử khi ",n.jsx(h.strong,{children:"hover hoặc focus bàn phím"})," — thường là ",n.jsx(h.code,{children:"IconButton"})," không chữ hay mục ",n.jsx(h.code,{children:"SideNav"})," thu gọn. ",n.jsx(h.code,{children:"Placement"})," = Top · Bottom · Left · Right."]})}),`
`,n.jsx(r,{of:e}),`
`,n.jsx(o,{of:e}),`
`,n.jsx(h.h2,{id:"hình-học",children:"Hình học"}),`
`,n.jsxs(h.table,{children:[n.jsx(h.thead,{children:n.jsxs(h.tr,{children:[n.jsx(h.th,{children:"Phần"}),n.jsx(h.th,{children:"Giá trị"})]})}),n.jsxs(h.tbody,{children:[n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Bong bóng"}),n.jsxs(h.td,{children:["padding ",n.jsx(h.strong,{children:"4 / 8"})," · radius ",n.jsx(h.code,{children:"radius-sm"})," · nền ",n.jsx(h.strong,{children:n.jsx(h.code,{children:"background-inverted"})})," · max-width ",n.jsx(h.strong,{children:"240"})," (",n.jsx(h.code,{children:"size-60"}),")"]})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Chữ"}),n.jsxs(h.td,{children:[n.jsx(h.code,{children:"caption"})," · ",n.jsx(h.strong,{children:n.jsx(h.code,{children:"object-primary-inverted"})})," · xuống dòng khi chạm max-width"]})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Mũi tên"}),n.jsxs(h.td,{children:[n.jsx(h.strong,{children:"8 × 4"}),", cùng màu nền, giữa cạnh hướng về phần tử"]})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:n.jsx(h.code,{children:"Placement"})}),n.jsxs(h.td,{children:["phía bong bóng nằm so với phần tử: ",n.jsx(h.code,{children:"top"})," · ",n.jsx(h.code,{children:"bottom"})," · ",n.jsx(h.code,{children:"left"})," · ",n.jsx(h.code,{children:"right"})]})]})]})]}),`
`,n.jsxs(h.p,{children:["Khoảng cách giữa bong bóng và phần tử bản vẽ không ghi; code để ",n.jsx(h.strong,{children:"8"})," (",n.jsx(h.code,{children:"size-2"}),"): mũi tên 4 cộng khoảng hở 4."]}),`
`,n.jsx(h.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:["Hiện khi rê chuột vào phần tử ",n.jsx(h.strong,{children:"và"})," khi phần tử nhận focus bằng bàn phím. Bấm chuột không mở tooltip."]}),`
`,n.jsxs(h.li,{children:["Ẩn khi rời chuột, mất focus, hoặc bấm ",n.jsx(h.strong,{children:"Esc"}),"."]}),`
`,n.jsxs(h.li,{children:["Phần tử được gắn ",n.jsx(h.code,{children:"aria-describedby"})," trỏ tới bong bóng (",n.jsx(h.code,{children:'role="tooltip"'}),"). Phần tử ",n.jsx(h.strong,{children:"chỉ có icon"})," và tooltip chính là tên của nó (mục ",n.jsx(h.code,{children:"SideNav"})," thu gọn, ",n.jsx(h.code,{children:"IconButton"})," không ",n.jsx(h.code,{children:"label"}),") thì dùng ",n.jsx(h.code,{children:'relation="label"'})," để chữ tooltip thành tên qua ",n.jsx(h.code,{children:"aria-labelledby"}),", đọc đúng một lần (spec §6.30). ",n.jsx(h.code,{children:"IconButton"})," đã có ",n.jsx(h.code,{children:"label"})," thì giữ mặc định ",n.jsx(h.code,{children:"description"}),"."]}),`
`,n.jsxs(h.li,{children:["Chỉ chữ thuần, không link hay nút bên trong. Cần nút → ",n.jsx(h.a,{href:"?path=/docs/component-ch%E1%BB%A9a-%C4%91%E1%BB%B1ng-popover--t%C3%A0i-li%E1%BB%87u",children:n.jsx(h.code,{children:"Popover"})}),"."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Không dùng trên màn chạm"}),": không có hover, nên người dùng không bao giờ thấy chữ."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-tsx",children:`<Tooltip text="Sao chép mã giới thiệu" placement="top">
  <IconButtonNeutral type="outline" icon="copy" label="Sao chép" />
</Tooltip>
`})}),`
`,n.jsxs(h.p,{children:[n.jsx(h.code,{children:"children"})," là ",n.jsx(h.strong,{children:"một"})," phần tử nhận được focus. Tooltip không tự lật hướng khi sát mép; chọn ",n.jsx(h.code,{children:"placement"})," theo chỗ trống."]}),`
`,n.jsx(h.h2,{id:"tooltip-hay-popover",children:"Tooltip hay Popover"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:["Một câu giải thích, mở bằng hover / focus → ",n.jsx(h.strong,{children:n.jsx(h.code,{children:"Tooltip"})}),"."]}),`
`,n.jsxs(h.li,{children:["Có nút, form ngắn, mở bằng bấm, đóng bằng nút đóng / Esc / bấm ra ngoài → ",n.jsx(h.strong,{children:n.jsx(h.code,{children:"Popover"})}),"."]}),`
`]}),`
`,n.jsx(x,{type:"warning",title:"Chưa chốt",children:n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Độ trễ hiện / ẩn"}),": chưa có số chuẩn. Bản web hiện ngay và mờ dần 120ms."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tooltip nhiều dòng có tiêu đề"}),": chưa có."]}),`
`]})}),`
`,n.jsx(d,{includePrimary:!1})]})}function y(c={}){const{wrapper:h}={...t(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(i,{...c})}):i(c)}export{y as default};

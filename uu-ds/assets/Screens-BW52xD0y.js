import{j as n}from"./iframe-k4bV9c5e.js";import{useMDXComponents as o}from"./index-BMz4Hoqf.js";import{M as h,C as t,a as d,S as s}from"./blocks-BNrATBue.js";import{D as l,C as a}from"./DocHeader-DZcI3PtS.js";import{S as x,P as r,a as j}from"./Screens.stories-BKYQhEbP.js";import"./preload-helper-Dp1pzeXC.js";import"./Screens-Bufpfv6j.js";import"./ButtonGroup-D34pJMka.js";import"./NavigationBar-CtVftkSt.js";import"./layout-COpsTpFq.js";function i(c){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{of:x}),`
`,n.jsx(e.h1,{id:"màn-và-khối-rỗng-lỗi",children:"Màn và khối rỗng, lỗi"}),`
`,n.jsx(l,{spec:"6.19",variants:"EmptySection 1 · ErrorSection 1 · EmptyScreen 1",status:"chốt",children:n.jsxs(e.p,{children:["Hai ",n.jsx(e.strong,{children:"khối nhúng"})," ",n.jsx(e.code,{children:"EmptySection"})," · ",n.jsx(e.code,{children:"ErrorSection"})," đặt trong một vùng của màn (kể cả thân bảng), và template màn ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"EmptyScreen"})})," khi cả màn chưa có dữ liệu."]})}),`
`,n.jsx(t,{of:r}),`
`,n.jsx(d,{of:r}),`
`,n.jsx(e.h2,{id:"khối-nhúng",children:"Khối nhúng"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Component"}),n.jsx(e.th,{children:"Khi nào"}),n.jsx(e.th,{children:"Nút"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"EmptySection"})}),n.jsx(e.td,{children:"Một khối trong màn chưa có dữ liệu (danh sách rỗng, bảng rỗng)"}),n.jsxs(e.td,{children:["Một nút, ẩn được — bỏ ",n.jsx(e.code,{children:"action"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"ErrorSection"})}),n.jsx(e.td,{children:"Lỗi chỉ ở một khối, phần còn lại của màn vẫn dùng được"}),n.jsx(e.td,{children:"Một nút thử lại, luôn có"})]})]})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`EmptySection · ErrorSection   V · p 12 · g12 · căn giữa · FILL × HUG
├─ Content wrapper            V · g12 · FILL · căn giữa
│  ├─ Image                   128 tròn · nền background-accent-muted + ảnh minh hoạ
│  ├─ Title                   heading-sm · object-primary · căn giữa
│  └─ Description             body · object-primary · căn giữa
└─ ButtonGroup                một nút · HUG
`})}),`
`,n.jsxs(e.p,{children:["Ô tròn 128 nền ",n.jsx(e.code,{children:"background-accent-muted"})," luôn có; ",n.jsx(e.code,{children:"image={{ src, alt }}"})," đặt ảnh vào trong. Ảnh là ",n.jsx(e.strong,{children:"nội dung"})," nên ",n.jsx(e.code,{children:"alt"})," bắt buộc. Nút là ",n.jsx(e.code,{children:"ButtonGroup"})," một nút chính (",n.jsx(e.code,{children:"TextButtonAccent"})," Solid Large). ",n.jsx(e.code,{children:"ErrorSection"})," mang ",n.jsx(e.code,{children:'role="alert"'}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<EmptySection image={{ src: boxArt, alt: 'Hộp rỗng' }}
  title="Chưa có đơn hàng" description="Đơn bạn tạo sẽ hiện ở đây."
  action={{ label: 'Tạo đơn', onClick: createOrder }} />

<ErrorSection title="Chưa tải được danh sách" description="Kiểm tra kết nối mạng rồi thử lại."
  action={{ label: 'Thử lại', onClick: reload }} />
`})}),`
`,n.jsxs(e.h2,{id:"emptyscreen--template-màn",children:[n.jsx(e.code,{children:"EmptyScreen"})," — template màn"]}),`
`,n.jsxs(e.p,{children:["Cả màn chưa có dữ liệu. ",n.jsx(e.code,{children:"NavigationBar"})," ",n.jsx(e.strong,{children:"có"})," nút back (",n.jsx(e.code,{children:"onBack"}),") — màn rỗng vẫn là một màn bình thường. Body FILL căn giữa hai chiều, padding ngang 16; Footer padding 16 chứa ",n.jsx(e.strong,{children:"một"})," nút, ẩn được bằng cách bỏ ",n.jsx(e.code,{children:"action"}),". Title dùng ",n.jsx(e.code,{children:"heading-base"})," (lớn hơn khối nhúng). Màn cao bằng khung chứa; ",n.jsx(e.code,{children:"IOS Home indicator"})," do OS vẽ, code bỏ."]}),`
`,n.jsx(t,{of:j}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<EmptyScreen screenTitle="Đơn hàng" onBack={goBack}
  image={{ src: boxArt, alt: 'Hộp rỗng' }}
  title="Chưa có đơn hàng" description="Đơn bạn tạo sẽ hiện ở đây."
  action={{ label: 'Tạo đơn', onClick: createOrder }} />
`})}),`
`,n.jsx(e.h2,{id:"chọn-đúng",children:"Chọn đúng"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Cả màn chưa có dữ liệu → ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"EmptyScreen"})}),"; một khối chưa có dữ liệu → ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"EmptySection"})}),"."]}),`
`,n.jsxs(e.li,{children:["Lỗi cả màn, chặn chức năng cốt lõi → ",n.jsx(e.code,{children:"ErrorScreen"})," (template màn, màn của app tự dựng theo spec); lỗi một khối → ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"ErrorSection"})}),"; lỗi sửa được ngay → ",n.jsx(e.a,{href:"?path=/docs/component-ch%E1%BB%A9a-%C4%91%E1%BB%B1ng-dialog--t%C3%A0i-li%E1%BB%87u",children:n.jsx(e.code,{children:"Dialog"})})," / ",n.jsx(e.a,{href:"?path=/docs/component-giao-ti%E1%BA%BFp-toast--t%C3%A0i-li%E1%BB%87u",children:n.jsx(e.code,{children:"Toast"})}),"."]}),`
`]}),`
`,n.jsx(a,{type:"warning",title:"Chưa chốt",children:n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Spec 6.19 không liệt kê phần nào chưa có cho ba component này."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ResultScreen"})," và ",n.jsx(e.code,{children:"ErrorScreen"})," không có component web: là bố cục màn để tham chiếu, màn của app dựng theo spec 6.19."]}),`
`]})}),`
`,n.jsx(s,{includePrimary:!1})]})}function B(c={}){const{wrapper:e}={...o(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(i,{...c})}):i(c)}export{B as default};

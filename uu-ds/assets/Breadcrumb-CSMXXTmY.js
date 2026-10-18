import{j as n}from"./iframe-gn_pzB68.js";import{useMDXComponents as s}from"./index-CrYLlzxl.js";import{M as i,C as t,a as h,S as l}from"./blocks-C259Y4_u.js";import{D as a,C as o}from"./DocHeader-ChFWaY5-.js";import{S as j,P as c}from"./Breadcrumb.stories-DjZ3abzC.js";import"./preload-helper-Dp1pzeXC.js";import"./Breadcrumb-CD58nhXS.js";import"./layout-whGn3D85.js";function d(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:j}),`
`,n.jsx(r.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,n.jsx(a,{spec:"6.25",variants:"1 (+ .BreadcrumbItem 3)",status:"chốt",children:n.jsxs(r.p,{children:["Đường dẫn vị trí trong cây trang, cho màn ",n.jsx(r.strong,{children:"desktop"}),". Mục cuối luôn là trang hiện tại."]})}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(h,{of:c}),`
`,n.jsx(r.h2,{id:"hình-học",children:"Hình học"}),`
`,n.jsxs(r.table,{children:[n.jsx(r.thead,{children:n.jsxs(r.tr,{children:[n.jsx(r.th,{children:"Phần"}),n.jsx(r.th,{children:"Giá trị"})]})}),n.jsxs(r.tbody,{children:[n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Thanh"}),n.jsxs(r.td,{children:["ngang · gap ",n.jsx(r.strong,{children:"4"})," · căn giữa dọc"]})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Mục"}),n.jsxs(r.td,{children:["padding ngang ",n.jsx(r.strong,{children:"4"})," · ",n.jsx(r.code,{children:"radius-sm"})," · ",n.jsx(r.code,{children:"body"})," ",n.jsx(r.code,{children:"object-secondary"})," · là link"]})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:n.jsx(r.code,{children:"Hover"})}),n.jsxs(r.td,{children:["state layer ",n.jsx(r.code,{children:"object-primary"})," · ",n.jsx(r.code,{children:"opacity-5"})]})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:n.jsx(r.code,{children:"Current=True"})}),n.jsxs(r.td,{children:[n.jsx(r.code,{children:"object-primary"})," · không phải link · ",n.jsx(r.code,{children:'aria-current="page"'})]})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Ngăn cách"}),n.jsxs(r.td,{children:['"/" ',n.jsx(r.code,{children:"body"})," ",n.jsx(r.code,{children:"object-disabled"}),", ",n.jsx(r.code,{children:"aria-hidden"})]})]})]})]}),`
`,n.jsxs(r.h2,{id:"breadcrumbitem--3-variant",children:[n.jsx(r.code,{children:".BreadcrumbItem"})," — 3 variant"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"Current=False"})," × ",n.jsx(r.code,{children:"State"})," (Default · Hover), và ",n.jsx(r.code,{children:"Current=True"}),". Mục đang ở ",n.jsx(r.strong,{children:"không có Hover"})," vì không bấm được."]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:".BreadcrumbItem"})," là component nội bộ: chỉ dùng bên trong ",n.jsx(r.code,{children:"Breadcrumb"}),"."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`<Breadcrumb
  items={[
    { label: 'Trang chủ', href: '/' },
    { label: 'Đơn hàng', href: '/don-hang' },
    { label: 'DH-1024' },
  ]}
/>
`})}),`
`,n.jsxs(r.p,{children:["Mỗi mục là một thẻ ",n.jsx(r.code,{children:"<a>"}),". Dùng router phía client thì truyền ",n.jsx(r.code,{children:"onClick"}),", chặn điều hướng mặc định rồi tự chuyển trang. Mục cuối là ",n.jsx(r.code,{children:'<span aria-current="page">'}),", không có link. Cả thanh nằm trong ",n.jsx(r.code,{children:'<nav aria-label="Đường dẫn">'})," với danh sách ",n.jsx(r.code,{children:"<ol>"}),"."]}),`
`,n.jsx(r.h2,{id:"breadcrumb-hay-navigationbar",children:"Breadcrumb hay NavigationBar"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["Web app, portal, dashboard trên desktop: chỉ ",n.jsx(r.strong,{children:"vị trí trong cây trang"})," → ",n.jsx(r.strong,{children:n.jsx(r.code,{children:"Breadcrumb"})}),"."]}),`
`,n.jsxs(r.li,{children:["App mobile: thanh trên cùng có nút quay lại và tiêu đề màn → ",n.jsx(r.strong,{children:n.jsx(r.code,{children:"NavigationBar"})}),". Không dùng Breadcrumb thay ",n.jsx(r.code,{children:"NavigationBar"})," trên app."]}),`
`]}),`
`,n.jsx(o,{type:"warning",title:"Chưa chốt",children:n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Rút gọn khi đường dẫn dài"}),': mục "…" mở menu các cấp bị ẩn.']}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Icon trước mục đầu"}),"."]}),`
`]})}),`
`,n.jsx(l,{includePrimary:!1})]})}function f(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(d,{...e})}):d(e)}export{f as default};

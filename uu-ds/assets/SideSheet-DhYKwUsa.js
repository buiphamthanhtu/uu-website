import{j as n}from"./iframe-C4b24c-y.js";import{useMDXComponents as s}from"./index-BW_DOahZ.js";import{M as i,C as t,a as h,S as l}from"./blocks-Zak_5wSC.js";import{D as o,C as a}from"./DocHeader-DskFL6iK.js";import{S as x,P as r}from"./SideSheet.stories-BXiImJ-I.js";import"./preload-helper-Dp1pzeXC.js";import"./SideSheet-CCDVbre-.js";/* empty css                    */import"./TextInput-DJJMIr7B.js";import"./FieldLabel-DGHuuvqN.js";/* empty css              */import"./layout-Dr6JVIPl.js";function c(d){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:x}),`
`,n.jsx(e.h1,{id:"sidesheet",children:"SideSheet"}),`
`,n.jsx(o,{spec:"6.28",variants:"2",status:"chốt",children:n.jsxs(e.p,{children:["Tấm trượt từ mép phải màn desktop để xem / sửa chi tiết mà không rời trang. ",n.jsx(e.code,{children:"Type"})," = Standard · Modal, kèm ",n.jsx(e.code,{children:"Title"})," và ",n.jsx(e.code,{children:"Footer"}),"."]})}),`
`,n.jsx(t,{of:r}),`
`,n.jsx(h,{of:r}),`
`,n.jsx(e.h2,{id:"hình-học",children:"Hình học"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Phần"}),n.jsx(e.th,{children:"Giá trị"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Tấm"}),n.jsxs(e.td,{children:["dọc · rộng ",n.jsx(e.strong,{children:"384"})," (",n.jsx(e.code,{children:"size-96"}),") · cao FILL màn · nền ",n.jsx(e.code,{children:"background-surface"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Standard"})}),n.jsxs(e.td,{children:["viền ",n.jsx(e.strong,{children:"trái"})," 1px ",n.jsx(e.code,{children:"border-muted"})," · nằm cạnh nội dung, không scrim"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Modal"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"elevation-high"})," · ",n.jsx(e.code,{children:"radius-lg"})," ở ",n.jsx(e.strong,{children:"hai góc trái"})," · scrim ",n.jsx(e.code,{children:"overlay"})," + blur 16 như ",n.jsx(e.code,{children:"BottomSheet"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Header"}),n.jsxs(e.td,{children:["padding ",n.jsx(e.code,{children:"card/padding"})," (16 · Compact 12) · ",n.jsx(e.code,{children:"Title"})," ",n.jsx(e.code,{children:"heading-sm"})," + ",n.jsx(e.code,{children:"IconButtonNeutral"})," Ghost Small ",n.jsx(e.code,{children:"xmark"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Body"}),n.jsxs(e.td,{children:["padding ngang ",n.jsx(e.code,{children:"card/padding"})," · gap ",n.jsx(e.strong,{children:"12"})," · cuộn khi dài"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Footer"}),n.jsxs(e.td,{children:["padding ",n.jsx(e.code,{children:"card/padding"})," · gap ",n.jsx(e.strong,{children:"12"})," (",n.jsx(e.code,{children:"gap-3"}),", như ",n.jsx(e.code,{children:"ButtonGroup"}),") · ",n.jsx(e.code,{children:"TextButtonNeutral"})," ",n.jsx(e.strong,{children:"Outline Base"})," + ",n.jsx(e.code,{children:"TextButtonAccent"})," ",n.jsx(e.strong,{children:"Solid Base"}),", dồn phải"]})]})]})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div style={{ display: 'flex', height: '100%' }}>
  <main>…</main>
  <SideSheet title="Thông tin khách hàng" onClose={close}
    footer={{ primary: { label: 'Lưu', onClick: save }, secondary: { label: 'Huỷ', onClick: close } }}>
    …
  </SideSheet>
</div>
`})}),`
`,n.jsx(e.h2,{id:"standard-hay-modal",children:"Standard hay Modal"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Người dùng cần ",n.jsx(e.strong,{children:"vừa xem trang vừa xem chi tiết"})," (danh sách bên trái, chi tiết bên phải) → ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"Standard"})}),". Tấm là một cột trong layout ngang, cao bằng khung chứa, trang co lại nhường chỗ."]}),`
`,n.jsxs(e.li,{children:["Việc cần ",n.jsx(e.strong,{children:"làm xong mới quay lại trang"})," (sửa hồ sơ, tạo mới) → ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"Modal"})}),". Tấm nổi trên scrim, dính mép phải, cao bằng màn."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Modal"})," là ",n.jsx(e.code,{children:'role="dialog"'}),", đóng bằng nút đóng, ",n.jsx(e.strong,{children:"Esc"})," hoặc bấm vào scrim. ",n.jsx(e.code,{children:"Standard"})," là vùng ",n.jsx(e.code,{children:"complementary"}),", chỉ đóng bằng nút đóng. Tên của tấm lấy từ ",n.jsx(e.code,{children:"title"}),"."]}),`
`,n.jsxs(e.p,{children:["Trên app dùng ",n.jsx(e.a,{href:"?path=/docs/component-ch%E1%BB%A9a-%C4%91%E1%BB%B1ng-bottomsheet--t%C3%A0i-li%E1%BB%87u",children:n.jsx(e.code,{children:"BottomSheet"})}),", không dùng ",n.jsx(e.code,{children:"SideSheet"}),"."]}),`
`,n.jsx(a,{type:"warning",title:"Chưa chốt",children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Bề rộng khác 384"}),": chưa có."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Side sheet bên trái"}),": chưa có."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Kéo đổi bề rộng"}),": chưa có."]}),`
`,n.jsxs(e.li,{children:["Khoảng cách giữa tiêu đề và nút đóng: bản vẽ không ghi, code để ",n.jsx(e.strong,{children:"12"}),"."]}),`
`]})}),`
`,n.jsx(l,{includePrimary:!1})]})}function k(d={}){const{wrapper:e}={...s(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(c,{...d})}):c(d)}export{k as default};

import{j as n}from"./iframe-C2B6W1mr.js";import{useMDXComponents as s}from"./index-C5zzNhnQ.js";import{M as h,C as o,a as i,S as d}from"./blocks-71ncpTXz.js";import{D as l,C as a}from"./DocHeader-CLIQXcRw.js";import{S as x,P as t}from"./Popover.stories-CbsU-kXH.js";import"./preload-helper-Dp1pzeXC.js";import"./Popover-fhwiFM0v.js";import"./TextInput-R6p-29AC.js";import"./FieldLabel-d00NjgBK.js";/* empty css              */import"./layout-BwDKuDyv.js";function c(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{of:x}),`
`,n.jsx(e.h1,{id:"popover",children:"Popover"}),`
`,n.jsx(l,{spec:"6.29",variants:"1",status:"chốt",children:n.jsxs(e.p,{children:["Khung nổi neo vào một phần tử, chứa nội dung tương tác được: form ngắn, xác nhận nhỏ. Bật / tắt ",n.jsx(e.code,{children:"Header"})," và ",n.jsx(e.code,{children:"Footer"}),"."]})}),`
`,n.jsx(o,{of:t}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(e.h2,{id:"hình-học",children:"Hình học"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Phần"}),n.jsx(e.th,{children:"Giá trị"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Khung"}),n.jsxs(e.td,{children:["dọc · rộng ",n.jsx(e.strong,{children:"320"})," (",n.jsx(e.code,{children:"size-80"}),") · padding ",n.jsx(e.code,{children:"card/padding"})," (16 · Compact 12) · gap ",n.jsx(e.strong,{children:"12"})," · ",n.jsx(e.code,{children:"radius-lg"})," · ",n.jsx(e.code,{children:"background-surface"})," · ",n.jsx(e.code,{children:"elevation-medium"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Header"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"Title"})," ",n.jsx(e.code,{children:"title-base"})," · ",n.jsx(e.code,{children:"IconButtonNeutral"})," Ghost Small ",n.jsx(e.code,{children:"xmark"})," bên phải"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Content"}),n.jsx(e.td,{children:"slot, nội dung tuỳ màn"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Footer"}),n.jsxs(e.td,{children:["dồn phải · gap ",n.jsx(e.strong,{children:"8"})," (",n.jsx(e.code,{children:"gap-2"}),", nút Small) · ",n.jsx(e.code,{children:"TextButtonNeutral"})," ",n.jsx(e.strong,{children:"Ghost Small"})," + ",n.jsx(e.code,{children:"TextButtonAccent"})," ",n.jsx(e.strong,{children:"Solid Small"})]})]})]})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Popover
  title="Đổi tên thẻ" open={open} onClose={close} anchorRef={buttonRef}
  footer={{ primary: { label: 'Lưu', onClick: save }, secondary: { label: 'Huỷ', onClick: close } }}
>
  <TextInput label="Tên thẻ" … />
</Popover>
`})}),`
`,n.jsx(e.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Mở bằng ",n.jsx(e.strong,{children:"bấm"})," vào phần tử neo. Nút mở mang ",n.jsx(e.code,{children:"aria-expanded"})," và ",n.jsx(e.code,{children:'aria-haspopup="dialog"'}),"."]}),`
`,n.jsxs(e.li,{children:["Đóng bằng nút đóng, ",n.jsx(e.strong,{children:"Esc"}),", hoặc bấm ra ngoài. Esc trả focus về phần tử neo (",n.jsx(e.code,{children:"anchorRef"}),"); bấm vào chính phần tử neo không tính là bấm ra ngoài."]}),`
`,n.jsxs(e.li,{children:["Khung là ",n.jsx(e.code,{children:'role="dialog"'}),", tên lấy từ ",n.jsx(e.code,{children:"title"}),". Tắt ",n.jsx(e.code,{children:"header"})," thì ",n.jsx(e.code,{children:"title"})," thành ",n.jsx(e.code,{children:"aria-label"}),"."]}),`
`,n.jsxs(e.li,{children:["Component chỉ dựng khung và hành vi đóng. ",n.jsx(e.strong,{children:"Màn tự đặt chỗ"})," cho khung cạnh phần tử neo."]}),`
`]}),`
`,n.jsx(e.h2,{id:"popover-tooltip-hay-menu",children:"Popover, Tooltip hay Menu"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Có nút, form, mở bằng bấm → ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"Popover"})}),"."]}),`
`,n.jsxs(e.li,{children:["Một câu giải thích, mở bằng hover / focus, chỉ có chữ → ",n.jsx(e.a,{href:"?path=/docs/component-giao-ti%E1%BA%BFp-tooltip--t%C3%A0i-li%E1%BB%87u",children:n.jsx(e.code,{children:"Tooltip"})}),"."]}),`
`,n.jsxs(e.li,{children:["Danh sách lựa chọn → ",n.jsx(e.a,{href:"?path=/docs/component-l%E1%BB%B1a-ch%E1%BB%8Dn-menu--t%C3%A0i-li%E1%BB%87u",children:n.jsx(e.code,{children:"Menu"})}),"."]}),`
`]}),`
`,n.jsx(a,{type:"warning",title:"Chưa chốt",children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mũi tên"})," chỉ vào phần tử neo: bản vẽ chưa có."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tự lật hướng"})," khi sát mép màn: bản vẽ chưa vẽ, màn tự xử lý."]}),`
`,n.jsxs(e.li,{children:["Khoảng cách giữa tiêu đề và nút đóng: bản vẽ không ghi, code để ",n.jsx(e.strong,{children:"8"}),"."]}),`
`]})}),`
`,n.jsx(d,{includePrimary:!1})]})}function M(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(c,{...r})}):c(r)}export{M as default};

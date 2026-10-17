import{j as n}from"./iframe-EkKnofS_.js";import{useMDXComponents as d}from"./index-B75LKoEL.js";import{M as i,C as h,a as c,S as o}from"./blocks-BLnrhJ-D.js";import{D as l}from"./DocHeader-5e4C0x_g.js";import{S as x,B as r}from"./Dialog.stories-BXNQS4tD.js";import"./preload-helper-Dp1pzeXC.js";import"./Dialog-BN2H62Sb.js";import"./ButtonGroup-CmBqnB7i.js";/* empty css                    */import"./layout-Xzi5pJ9U.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:x}),`
`,n.jsx(e.h1,{id:"dialog",children:"Dialog"}),`
`,n.jsx(l,{spec:"6.10",variants:"1",status:"chốt"}),`
`,n.jsx(h,{of:r}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`.base/dialog         V · g0 · r24 · background-surface · rộng 384 khi đứng riêng
├─ Header            p 16/16/0/16 · căn PHẢI · chỉ có nút đóng (Outline Small 32, xmark 16)
└─ Body              p 12/16/16/16 · g12
   ├─ Slot
   └─ Button group   Layout=Horizontal · Secondary button=false
`})}),`
`,n.jsx(e.h2,{id:"khác-bottom-sheet-ở-hai-điểm",children:"Khác Bottom sheet ở hai điểm"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{}),n.jsx(e.th,{children:"Bottom sheet"}),n.jsx(e.th,{children:"Dialog"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Vị trí"}),n.jsx(e.td,{children:"sát đáy"}),n.jsx(e.td,{children:n.jsx(e.strong,{children:"căn giữa theo chiều dọc"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Tiêu đề"}),n.jsxs(e.td,{children:["prop ",n.jsx(e.code,{children:"header"})]}),n.jsxs(e.td,{children:[n.jsx(e.strong,{children:"không có"})," — muốn tiêu đề thì đưa vào Slot"]})]})]})]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Chức năng"}),n.jsx(e.th,{children:n.jsx(e.code,{children:"CardSheet"})}),n.jsx(e.th,{children:n.jsx(e.code,{children:".base/dialog"})})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Nội dung"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Tiêu đề"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"header"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Hiện/ẩn nhóm nút"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"cta"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"buttonGroup"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Hiện/ẩn nút đóng"}),n.jsx(e.td,{children:"— (luôn hiện)"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"closeButton"})})]})]})]}),`
`,n.jsxs(e.p,{children:["Scrim giống Bottom sheet: ",n.jsx(e.code,{children:"overlay"})," + blur 16, panel thụt 12 mỗi bên → 366 trên khung 390. Đừng nhân thêm opacity lên fill."]}),`
`,n.jsx(e.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(e.p,{children:["Cần người dùng ",n.jsx(e.strong,{children:"quyết định"})," trước khi tiếp tục (huỷ đơn? xoá?). Việc ngắn có tiêu đề, nhiều nội dung → Bottom sheet. Chỉ báo kết quả → Toast."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Dialog open={open} onClose={close} aria-label="Huỷ đơn hàng"
  buttonGroup={{ primary: { label: 'Huỷ đơn', onClick: cancelOrder }, secondary: { label: 'Giữ lại', onClick: close } }}>
  <h2 …>Huỷ đơn hàng?</h2><p …>Đơn hàng đã huỷ không thể khôi phục.</p>
</Dialog>
`})}),`
`,n.jsx(o,{includePrimary:!1})]})}function C(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{C as default};

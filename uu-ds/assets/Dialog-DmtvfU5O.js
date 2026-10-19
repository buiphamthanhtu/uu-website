import{j as n}from"./iframe-PRPlo7RZ.js";import{useMDXComponents as t}from"./index-BaD3h-2i.js";import{M as h,C as r,a as s,S as l}from"./blocks-ByS9KvVO.js";import{D as o}from"./DocHeader-DgY1CLlQ.js";import{S as a,P as c,W as x}from"./Dialog.stories-C1w4G_qj.js";import"./preload-helper-Dp1pzeXC.js";import"./Dialog-sBBlidBm.js";import"./ButtonGroup-BF6iN2km.js";/* empty css                    */import"./layout-C7vjRdIo.js";function i(d){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{of:a}),`
`,n.jsx(e.h1,{id:"dialog",children:"Dialog"}),`
`,n.jsx(o,{spec:"6.10",variants:"2",status:"chốt",children:n.jsxs(e.p,{children:[n.jsx(e.code,{children:"CardDialog"})," là tấm panel — ",n.jsx(e.code,{children:"Banner=False"})," · ",n.jsx(e.code,{children:"Banner=True"}),". ",n.jsx(e.code,{children:"Dialog"})," là template màn hình: scrim + ",n.jsx(e.code,{children:"CardDialog"})," căn giữa."]})}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(s,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Component"}),n.jsx(e.th,{children:"Là gì"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"CardDialog"})}),n.jsxs(e.td,{children:["Chỉ tấm panel, 2 variant ",n.jsx(e.code,{children:"Banner"}),". Thay ",n.jsx(e.code,{children:".base/dialog"})," cũ (đã gỡ); ",n.jsx(e.code,{children:"BaseDialog"})," còn là tên cũ, đã deprecated"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Dialog"})}),n.jsxs(e.td,{children:["Template màn hình — scrim + ",n.jsx(e.code,{children:"CardDialog"})," căn giữa"]})]})]})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`CardDialog · Banner=False   V · g0 · r24 · background-surface · rộng 384 khi đứng riêng
├─ Header            p 16/16/0/16 · căn PHẢI · chỉ có nút đóng (Outline Small 32, xmark 16)
└─ Body              p 12/16/16/16 · g12
   ├─ Slot
   └─ Button group   Layout=Horizontal · Secondary button=false
`})}),`
`,n.jsxs(e.h2,{id:"bannertrue--dialog-có-ảnh",children:[n.jsx(e.code,{children:"Banner=True"})," — dialog có ảnh"]}),`
`,n.jsxs(e.p,{children:["Giới thiệu tính năng, quà, khuyến mãi. Truyền ",n.jsx(e.code,{children:"banner={{ src, alt }}"}),": ảnh là ",n.jsx(e.strong,{children:"nội dung"}),", ",n.jsx(e.code,{children:"alt"})," bắt buộc."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`CardDialog · Banner=True    V · g0 · r24 · 384 × HUG
├─ Header            384 × 216 · không padding
│  ├─ Image          16:9 (tỉ lệ duy nhất) · FILL · panel cắt theo bo 24 ở hai góc trên
│  └─ Close          ABSOLUTE · cách phải 16 · cách trên 16 · IconButtonNeutral Solid Small (32)
└─ Body              p 16 bốn phía · g12
   ├─ Slot
   └─ Button group
`})}),`
`,n.jsxs(e.p,{children:["Nút đóng đè lên ảnh dùng ",n.jsx(e.strong,{children:"Solid"})," (nền ",n.jsx(e.code,{children:"background-inverted"}),") để đọc được trên mọi ảnh — nút viền sẽ chìm. ",n.jsx(e.code,{children:"closeButton={false}"})," chỉ ẩn nút, ảnh vẫn còn. Tỉ lệ khác 16:9 là sai spec: code ép ",n.jsx(e.code,{children:"aspect-ratio: 16 / 9"})," và ",n.jsx(e.code,{children:"object-fit: cover"}),"."]}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h2,{id:"khác-bottom-sheet-ở-hai-điểm",children:"Khác Bottom sheet ở hai điểm"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{}),n.jsx(e.th,{children:"Bottom sheet"}),n.jsx(e.th,{children:"Dialog"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Vị trí"}),n.jsx(e.td,{children:"sát đáy"}),n.jsx(e.td,{children:n.jsx(e.strong,{children:"căn giữa theo chiều dọc"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Tiêu đề"}),n.jsxs(e.td,{children:["prop ",n.jsx(e.code,{children:"header"})]}),n.jsxs(e.td,{children:[n.jsx(e.strong,{children:"không có"})," — muốn tiêu đề thì đưa vào Slot"]})]})]})]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Chức năng"}),n.jsx(e.th,{children:n.jsx(e.code,{children:"CardSheet"})}),n.jsx(e.th,{children:n.jsx(e.code,{children:"CardDialog"})})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Nội dung"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Tiêu đề"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"header"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Hiện/ẩn nhóm nút"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"cta"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"buttonGroup"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Hiện/ẩn nút đóng"}),n.jsxs(e.td,{children:["— (hiện, trừ khi có ",n.jsx(e.code,{children:"onBack"}),")"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"closeButton"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Nút quay lại (sheet con)"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"onBack"})," — thay chỗ nút đóng"]}),n.jsx(e.td,{children:"— (Dialog không xếp tầng)"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Ảnh đầu panel"}),n.jsx(e.td,{children:"—"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"banner"})})]})]})]}),`
`,n.jsxs(e.p,{children:["Scrim giống Bottom sheet: ",n.jsx(e.code,{children:"overlay"})," + blur 16, panel thụt 12 mỗi bên → 366 trên khung 390. Đừng nhân thêm opacity lên fill."]}),`
`,n.jsx(e.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(e.p,{children:["Cần người dùng ",n.jsx(e.strong,{children:"quyết định"})," trước khi tiếp tục (huỷ đơn? xoá?). Việc ngắn có tiêu đề, nhiều nội dung → Bottom sheet. Chỉ báo kết quả → Toast."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Dialog open={open} onClose={close} aria-label="Huỷ đơn hàng"
  buttonGroup={{ primary: { label: 'Huỷ đơn', onClick: cancelOrder }, secondary: { label: 'Giữ lại', onClick: close } }}>
  <h2 …>Huỷ đơn hàng?</h2><p …>Đơn hàng đã huỷ không thể khôi phục.</p>
</Dialog>
`})}),`
`,n.jsx(l,{includePrimary:!1})]})}function D(d={}){const{wrapper:e}={...t(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(i,{...d})}):i(d)}export{D as default};

import{j as e}from"./iframe-C4b24c-y.js";import{useMDXComponents as d}from"./index-BW_DOahZ.js";import{M as s,C as h,a as i,S as o}from"./blocks-Zak_5wSC.js";import{D as l}from"./DocHeader-DskFL6iK.js";import{S as a,B as r}from"./BottomSheet.stories-iaPQ7Vwn.js";import"./preload-helper-Dp1pzeXC.js";import"./BottomSheet-SEI5b3NB.js";import"./ButtonGroup-D9Da42RU.js";/* empty css                    */import"./Radio-Cg5Tubdf.js";/* empty css                 */import"./layout-Dr6JVIPl.js";function c(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"bottomsheet",children:"BottomSheet"}),`
`,e.jsx(l,{spec:"6.8",variants:"CardSheet 2 · Sheet 1",status:"chốt"}),`
`,e.jsxs(n.p,{children:["Tấm sheet là ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"CardSheet"})})," (thay ",e.jsx(n.code,{children:".base/sheet"})," cũ; ",e.jsx(n.code,{children:"BaseSheet"})," trong code còn là tên phụ, đừng dùng mới). ",e.jsx(n.code,{children:"BottomSheet"})," = template ",e.jsx(n.code,{children:"Sheet"}),": scrim + wrapper + ",e.jsx(n.code,{children:"CardSheet"}),"."]}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h2,{id:"cardsheet",children:e.jsx(n.code,{children:"CardSheet"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`CardSheet          VERTICAL · gap 0 · radius 24 (cả 4 góc) · background-surface · clip
├─ Header          padding 16/16/0/16 · gap 16 · h48 · căn giữa trục phụ
│  ├─ Back         IconButtonNeutral Outline Small (32) · chevron-left 16 · chỉ Navigation=Back
│  ├─ Text         "Header" · heading-base · object-primary
│  └─ Close        IconButtonNeutral Outline Small (32) · xmark 16 · chỉ Navigation=Close
└─ Body            padding 12/16/16/16 · gap 12
   ├─ Slot
   └─ Button group Layout=Horizontal · visible ← CTA
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Kiểu"}),e.jsx(n.th,{children:"Ghi chú"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"header"})}),e.jsx(n.td,{children:"TEXT"}),e.jsxs(n.td,{children:["tiêu đề — Dialog ",e.jsx(n.strong,{children:"không"})," có cái này"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onClose"})}),e.jsx(n.td,{children:"—"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Navigation=Close"}),": nút đóng bên phải"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onBack"})}),e.jsx(n.td,{children:"—"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Navigation=Back"}),": truyền vào thì có nút quay lại bên trái và ",e.jsx(n.strong,{children:"không có nút đóng"})," — hai nút loại trừ nhau"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"Slot"}),e.jsx(n.td,{children:"nội dung tuỳ ý"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"cta"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ButtonGroupProps | false"})}),e.jsxs(n.td,{children:["hiện/ẩn ",e.jsx(n.strong,{children:"toàn bộ"})," nhóm nút; nút phụ và hướng xếp là prop của Button group"]})]})]})]}),`
`,e.jsxs(n.p,{children:["Bo cả bốn góc vì sheet nổi cách hai mép và đáy 12px, không dính cạnh màn. Dùng ",e.jsx(n.code,{children:"Back"})," khi sheet là bước 2 của luồng nhiều bước trong cùng sheet."]}),`
`,e.jsxs(n.h2,{id:"template-màn-hình--bottomsheet",children:["Template màn hình → ",e.jsx(n.code,{children:"BottomSheet"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Lớp"}),e.jsx(n.th,{children:"Giá trị"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Scrim"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"overlay"})," (đen 10%, alpha trong token) + ",e.jsx(n.code,{children:"backdrop-filter: blur(16px)"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Wrapper"}),e.jsxs(n.td,{children:["padding 0/12/12/12 → sheet thụt 12 mỗi bên và nổi cách đáy 12 (+ ",e.jsx(n.code,{children:"env(safe-area-inset-bottom)"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Đáy"}),e.jsxs(n.td,{children:["Bản thiết kế có ",e.jsx(n.code,{children:"IOS Home indicator"})," — OS tự vẽ, code bỏ"]})]})]})]}),`
`,e.jsxs(n.p,{children:["Đóng bằng Esc hoặc bấm scrim. ",e.jsx(n.code,{children:"position: fixed"}),"; đặt trong khung có ",e.jsx(n.code,{children:"transform"})," (frame điện thoại trong Storybook) thì bám khung."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<BottomSheet open={open} onClose={close} header="Xoá tài khoản"
  cta={{ primary: { label: 'Xoá tài khoản', onClick: del }, secondary: { label: 'Huỷ', onClick: close } }}>
  <RadioList … />
</BottomSheet>
`})}),`
`,e.jsx(n.h2,{id:"chưa-chốt",children:"Chưa chốt"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sheet kéo được (drag handle, nhiều nấc chiều cao); sheet toàn màn."}),`
`]}),`
`,e.jsx(o,{includePrimary:!1})]})}function y(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{y as default};

import{j as e}from"./iframe-DOXsB9Iw.js";import{useMDXComponents as d}from"./index-DJ0pij_p.js";import{M as o,C as i,a as c,S as h}from"./blocks-BAZdziko.js";import{D as l}from"./DocHeader-B8iHSaQm.js";import{S as a,B as r}from"./BottomSheet.stories-CbIifbSb.js";import"./preload-helper-Dp1pzeXC.js";import"./BottomSheet-wUml-WO_.js";import"./ButtonGroup-D8Jdc5XJ.js";/* empty css                    */import"./Radio-BAjzV5Wd.js";/* empty css                 */import"./layout-BGqIjpay.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(n.h1,{id:"bottomsheet",children:"BottomSheet"}),`
`,e.jsx(l,{spec:"6.8",variants:"1",status:"chốt"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(n.h2,{id:"basesheet",children:e.jsx(n.code,{children:".base/sheet"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`.base/sheet        VERTICAL · gap 0 · radius 24 (cả 4 góc) · background-surface · clip
├─ Header          padding 16/16/0/16 · gap 16 · h48 · căn giữa trục phụ
│  ├─ Text         "Header" · heading-base · object-primary
│  └─ Close        IconButtonNeutral Outline Small (32) · xmark 16
└─ Body            padding 12/16/16/16 · gap 12
   ├─ Slot
   └─ Button group Layout=Horizontal · visible ← CTA
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Kiểu"}),e.jsx(n.th,{children:"Ghi chú"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"header"})}),e.jsx(n.td,{children:"TEXT"}),e.jsxs(n.td,{children:["tiêu đề — Dialog ",e.jsx(n.strong,{children:"không"})," có cái này"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"Slot"}),e.jsx(n.td,{children:"nội dung tuỳ ý"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"cta"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ButtonGroupProps | false"})}),e.jsxs(n.td,{children:["hiện/ẩn ",e.jsx(n.strong,{children:"toàn bộ"})," nhóm nút; nút phụ và hướng xếp là prop của Button group"]})]})]})]}),`
`,e.jsx(n.p,{children:"Bo cả bốn góc vì sheet nổi cách hai mép 12px, không dính cạnh màn."}),`
`,e.jsxs(n.h2,{id:"template-màn-hình--bottomsheet",children:["Template màn hình → ",e.jsx(n.code,{children:"BottomSheet"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Lớp"}),e.jsx(n.th,{children:"Giá trị"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Scrim"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"overlay"})," (đen 10%, alpha trong token) + ",e.jsx(n.code,{children:"backdrop-filter: blur(16px)"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Wrapper"}),e.jsxs(n.td,{children:["padding 0/12 → sheet thụt 12 mỗi bên; ",e.jsx(n.code,{children:"padding-bottom: env(safe-area-inset-bottom)"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Đáy"}),e.jsxs(n.td,{children:["Bản thiết kế có ",e.jsx(n.code,{children:"IOS Home indicator"})," — OS tự vẽ, code bỏ"]})]})]})]}),`
`,e.jsxs(n.p,{children:["Đóng bằng Esc hoặc bấm scrim. ",e.jsx(n.code,{children:"position: fixed"}),"; đặt trong khung có ",e.jsx(n.code,{children:"transform"})," (frame điện thoại trong Storybook) thì bám khung."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<BottomSheet open={open} onClose={close} header="Xoá tài khoản"
  cta={{ primary: { label: 'Xoá tài khoản', onClick: del }, secondary: { label: 'Huỷ', onClick: close } }}>
  <RadioList … />
</BottomSheet>
`})}),`
`,e.jsx(h,{includePrimary:!1})]})}function C(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{C as default};

import{j as e}from"./iframe-CS8d8swY.js";import{useMDXComponents as s}from"./index-CR5isgyd.js";import{M as l,C as t,a as o}from"./blocks-BSpep7sj.js";import{D as a}from"./DocHeader-RL7BdA-Q.js";import{W as x,A as j,R as m,P as g,a as p}from"./ComponentDoc-B4o_5q9U.js";import{D as u,a as b,b as y}from"./DoDont-BL2GmrLu.js";import{S as r}from"./SideSheet-ClQE7FJs.js";import{T as d}from"./TextInput-84xt38bh.js";import{S as f,P as h,M as S,a as v}from"./SideSheet.stories-Bah45t-R.js";import"./preload-helper-Dp1pzeXC.js";import"./ontology-BbLAC_QR.js";import"./Diagram-KdVRhwX7.js";import"./ToggleButton-Dtl8qgr-.js";import"./SegmentedControl-CXrfiK48.js";import"./FieldLabel-DjP1fCCj.js";import"./TextArea-CX08A5Iu.js";/* empty css              */import"./OTPInput-BuQT49i9.js";import"./SearchInput-DpywZ1Bp.js";import"./BottomSheet-BB6hD2NN.js";import"./ButtonGroup-d46sQr3o.js";/* empty css                    */import"./Checkbox-C4EVxvj8.js";/* empty css                 */import"./MenuAnchor-CN4aaZ-3.js";import"./DateInput-Jyav-osu.js";import"./Dropdown-DSmoZNka.js";import"./Radio-BO1c3skW.js";import"./Switch-DamahXEF.js";import"./ListItem-BWoXiBY-.js";import"./Chip-D72MJS-S.js";import"./NavigationBar-Cljm3zgq.js";import"./BottomBar-BaHJAJlH.js";import"./NotificationBadge-DgggJfOI.js";import"./Pagination-BHvM2mVv.js";import"./Tab-Dbxlko7q.js";import"./Badge-BQ8Wwhck.js";import"./StatusIndicator-B4zrdyVv.js";import"./Dialog-B1Jkmy3H.js";import"./Table-DaoRdDi7.js";import"./TablePagination-Dq6ggE1O.js";import"./Breadcrumb-3aRPqVEa.js";import"./KPICard-DxrbIEQ4.js";import"./SideNav-RG9pWnao.js";import"./Tooltip-D2tYmfAR.js";import"./Popover-A3S7jKv9.js";import"./Screens-C5c-Z4X5.js";import"./PushNotification-CRGU9Bg-.js";import"./layout-BVaZ_bLP.js";function c(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:f}),`
`,e.jsx(n.h1,{id:"sidesheet",children:"SideSheet"}),`
`,e.jsx(a,{spec:"6.28",variants:"4",status:"chốt",children:e.jsx(n.p,{children:"Tấm trượt từ mép phải màn desktop — dùng để xem hoặc sửa chi tiết mà không rời trang đang mở."})}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,e.jsxs(n.p,{children:["Dùng side sheet trên ",e.jsx(n.strong,{children:"desktop"})," khi người dùng cần xem hoặc sửa chi tiết của một mục mà vẫn giữ trang phía sau. Hai kiểu:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Cần ",e.jsx(n.strong,{children:"vừa xem trang vừa xem chi tiết"})," (danh sách bên trái, chi tiết bên phải) → ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Standard"})}),". Tấm là một cột trong layout ngang, cao bằng khung chứa, trang co lại nhường chỗ."]}),`
`,e.jsxs(n.li,{children:["Việc cần ",e.jsx(n.strong,{children:"làm xong mới quay lại trang"})," (sửa hồ sơ, tạo mới) → ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Modal"})}),". Tấm nổi trên scrim, dính mép phải, cao bằng màn."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Form dài hoặc nội dung nhiều cột thì chọn ",e.jsx(n.code,{children:"Width=Wide"})," (480). Trên app dùng ",e.jsx(n.code,{children:"BottomSheet"}),", không dùng ",e.jsx(n.code,{children:"SideSheet"}),"."]}),`
`,e.jsx(x,{of:"SideSheet",docPath:{CardSheet:"component-chứa-đựng-bottomsheet--tài-liệu"}}),`
`,e.jsx(n.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,e.jsx(j,{parts:[{selector:".uu-sidesheet",label:e.jsxs(e.Fragment,{children:["Tấm — dọc, rộng 384 (",e.jsx(n.code,{children:"size-96"}),") hoặc 480 (",e.jsx(n.code,{children:"size-120"}),"), cao FILL, nền ",e.jsx(n.code,{children:"background-surface"}),". ",e.jsx(n.code,{children:"Standard"}),": viền trái 1px ",e.jsx(n.code,{children:"border-muted"}),"; ",e.jsx(n.code,{children:"Modal"}),": ",e.jsx(n.code,{children:"elevation-high"}),", ",e.jsx(n.code,{children:"radius-lg"})," ở hai góc trái, scrim"]})},{selector:".uu-sidesheet__title",label:e.jsxs(e.Fragment,{children:["Header — padding ",e.jsx(n.code,{children:"card/padding"}),", ",e.jsx(n.code,{children:"Title"})," style ",e.jsx(n.code,{children:"heading-sm"})]})},{selector:".uu-sidesheet__header button",label:e.jsxs(e.Fragment,{children:["Nút đóng — ",e.jsx(n.code,{children:"IconButtonNeutral"})," Ghost Small ",e.jsx(n.code,{children:"xmark"})]})},{selector:".uu-sidesheet__body",label:e.jsxs(e.Fragment,{children:["Body — padding ngang ",e.jsx(n.code,{children:"card/padding"}),", gap 12, cuộn khi dài"]})},{selector:".uu-sidesheet__footer",label:e.jsxs(e.Fragment,{children:["Footer — padding ",e.jsx(n.code,{children:"card/padding"}),", gap 12 (",e.jsx(n.code,{children:"gap-3"}),", như ",e.jsx(n.code,{children:"ButtonGroup"}),"): ",e.jsx(n.code,{children:"TextButtonNeutral"})," Outline Base + ",e.jsx(n.code,{children:"TextButtonAccent"})," Solid Base, dồn phải"]})}],children:e.jsx("div",{style:{display:"flex",height:"var(--size-120)"},children:e.jsxs(r,{title:"Thông tin khách hàng",footer:{primary:{label:"Lưu"},secondary:{label:"Huỷ"}},children:[e.jsx(d,{label:"Họ và tên",defaultValue:"Nguyễn Minh Anh"}),e.jsx(d,{label:"Số điện thoại",defaultValue:"0901 234 567"})]})})}),`
`,e.jsx(m,{of:"SideSheet"}),`
`,e.jsx(n.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,e.jsx(g,{of:"SideSheet",props:{Type:["Standard","Modal"],Width:["Base","Wide"]},code:{Type:{react:"type",flutter:"type",note:e.jsxs(e.Fragment,{children:[e.jsx(n.code,{children:"standard"})," — nằm cạnh nội dung, viền trái, không scrim. ",e.jsx(n.code,{children:"modal"})," — nổi trên scrim ",e.jsx(n.code,{children:"overlay"})," + blur 16 như ",e.jsx(n.code,{children:"BottomSheet"}),"."]})},Width:{react:"width",flutter:"width",note:e.jsxs(e.Fragment,{children:[e.jsx(n.code,{children:"base"})," rộng 384 (",e.jsx(n.code,{children:"size-96"}),", mặc định) · ",e.jsx(n.code,{children:"wide"})," rộng 480 (",e.jsx(n.code,{children:"size-120"}),") cho form dài / nhiều cột."]})}},extra:[{react:"title",flutter:"title",note:e.jsxs(e.Fragment,{children:["Thiết kế: ",e.jsx(n.code,{children:"Title"})," (TEXT) — ",e.jsx(n.code,{children:"heading-sm"}),"; cũng là tên của tấm cho trình đọc màn hình."]})},{react:"footer",flutter:"primaryLabel · secondaryLabel",note:e.jsxs(e.Fragment,{children:["Thiết kế: ",e.jsx(n.code,{children:"Footer"})," (BOOLEAN). Web: truyền cặp nút để bật, ",e.jsx(n.code,{children:"false"})," / bỏ trống để tắt. Flutter: có ",e.jsx(n.code,{children:"primaryLabel"})," thì hiện footer."]})},{react:"children",flutter:"children",note:"Nội dung body — cuộn khi dài."},{react:"open · onClose",flutter:"showUuSideSheet · onClose",note:e.jsxs(e.Fragment,{children:["Đang mở; ",e.jsx(n.code,{children:"onClose"})," gọi khi bấm nút đóng, và với ",e.jsx(n.code,{children:"modal"})," còn khi bấm Esc hoặc bấm vào scrim."]})}]}),`
`,e.jsx(t,{of:S}),`
`,e.jsx(n.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,e.jsxs(n.p,{children:["Bề rộng cố định theo ",e.jsx(n.code,{children:"Width"}),", không đổi theo density; padding, chữ và nút đổi theo biến density."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{}),e.jsx(n.th,{children:"Touch"}),e.jsx(n.th,{children:"Compact"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Rộng ",e.jsx(n.code,{children:"Base"})," · ",e.jsx(n.code,{children:"Wide"})]}),e.jsx(n.td,{children:"384 · 480"}),e.jsx(n.td,{children:"384 · 480"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Padding ",e.jsx(n.code,{children:"card/padding"})]}),e.jsx(n.td,{children:"16"}),e.jsx(n.td,{children:"12"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Gap body · gap hai nút footer"}),e.jsx(n.td,{children:"12"}),e.jsx(n.td,{children:"12"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Chữ ",e.jsx(n.code,{children:"heading-sm"})]}),e.jsx(n.td,{children:"19/28 · 600"}),e.jsx(n.td,{children:"16/24 · 600"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Nút footer (Base) cao"}),e.jsx(n.td,{children:"48"}),e.jsx(n.td,{children:"32"})]})]})]}),`
`,e.jsxs(n.p,{children:["Tấm cao FILL khung chứa (",e.jsx(n.code,{children:"Standard"}),") hoặc màn (",e.jsx(n.code,{children:"Modal"}),"); không đặt chiều cao cố định cho tấm."]}),`
`,e.jsx(n.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Phần"}),e.jsx(n.th,{children:"Token"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Nền tấm"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"background-surface"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Viền trái (",e.jsx(n.code,{children:"Standard"}),")"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"border-muted"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Bóng (",e.jsx(n.code,{children:"Modal"}),")"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"elevation-high"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Scrim (",e.jsx(n.code,{children:"Modal"}),")"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"overlay"})," + blur 16"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Tiêu đề"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"object-primary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Nút chính"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"TextButtonAccent"})," Solid — ",e.jsx(n.code,{children:"background-interactive"})," · ",e.jsx(n.code,{children:"object-on-interactive"})]})]})]})]}),`
`,e.jsxs(n.p,{children:["Tấm không có state riêng; nút bên trong mang state của chính nút. Nút chính dùng nhóm ",e.jsx(n.code,{children:"interactive"})," nên ",e.jsx(n.strong,{children:"đổi theo brand"}),"."]}),`
`,e.jsx(n.h2,{id:"hành-vi",children:"Hành vi"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tấm luôn ",e.jsx(n.strong,{children:"từ mép phải"}),", rộng 384 hoặc 480 — không kéo đổi bề rộng."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Standard"}),": đặt trong layout ngang cạnh nội dung; chỉ đóng bằng nút đóng."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Modal"}),": ",e.jsx(n.code,{children:"position: fixed"})," trên scrim; đóng bằng nút đóng, ",e.jsx(n.strong,{children:"Esc"})," hoặc bấm vào scrim. Trên Flutter, ",e.jsx(n.code,{children:"showUuSideSheet"})," trượt tấm vào từ phải."]}),`
`,e.jsx(n.li,{children:"Body cuộn khi dài; header và footer đứng yên."}),`
`]}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(n.h2,{id:"truy-cập",children:"Truy cập"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Modal"})," là ",e.jsx(n.code,{children:'role="dialog"'})," + ",e.jsx(n.code,{children:"aria-modal"}),"; ",e.jsx(n.code,{children:"Standard"})," là vùng ",e.jsx(n.code,{children:"complementary"}),". Tên của tấm lấy từ ",e.jsx(n.code,{children:"title"})," qua ",e.jsx(n.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(n.li,{children:["Bàn phím: Tab đi qua nội dung tấm; ",e.jsx(n.strong,{children:"Esc"})," đóng ",e.jsx(n.code,{children:"Modal"}),"."]}),`
`,e.jsxs(n.li,{children:['Nút đóng có nhãn "Đóng" cho trình đọc màn hình — icon ',e.jsx(n.code,{children:"xmark"})," không đứng một mình."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Standard"})," và ",e.jsx(n.code,{children:"Modal"})," phân biệt bằng vị trí (cạnh nội dung / nổi trên scrim) và viền / bóng, không chỉ bằng màu."]}),`
`]}),`
`,e.jsx(n.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,e.jsxs(u,{children:[e.jsx(b,{reason:"Vài trường ngắn — Width=Base là đủ.",children:e.jsx("div",{style:{display:"flex",height:"var(--size-96)"},children:e.jsxs(r,{title:"Thông tin khách hàng",footer:{primary:{label:"Lưu"},secondary:{label:"Huỷ"}},children:[e.jsx(d,{label:"Họ và tên",defaultValue:"Nguyễn Minh Anh"}),e.jsx(d,{label:"Số điện thoại",defaultValue:"0901 234 567"})]})})}),e.jsx(y,{reason:"Dùng SideSheet trên app mobile — tấm 384 chiếm hết màn. Trên app dùng BottomSheet.",children:e.jsx("div",{style:{display:"flex",width:"var(--size-90)",height:"var(--size-96)",overflow:"hidden"},children:e.jsxs(r,{title:"Thông tin khách hàng",footer:{primary:{label:"Lưu"},secondary:{label:"Huỷ"}},children:[e.jsx(d,{label:"Họ và tên",defaultValue:"Nguyễn Minh Anh"}),e.jsx(d,{label:"Số điện thoại",defaultValue:"0901 234 567"})]})})})]}),`
`,e.jsx(p,{of:"SideSheet"}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SideSheet } from 'uu-ds';

<div style={{ display: 'flex', height: '100%' }}>
  <main>…</main>
  <SideSheet
    title="Thông tin khách hàng" width="wide" onClose={close}
    footer={{ primary: { label: 'Lưu', onClick: save }, secondary: { label: 'Huỷ', onClick: close } }}
  >
    …
  </SideSheet>
</div>

// Modal: nổi trên scrim
<SideSheet type="modal" open={open} onClose={close} title="Thông tin khách hàng">…</SideSheet>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

Row(children: [
  const Expanded(child: page),
  UuSideSheet(title: 'Thông tin khách hàng', width: UuSideSheetWidth.wide, primaryLabel: 'Lưu', secondaryLabel: 'Huỷ', children: fields),
]);

showUuSideSheet<void>(context, title: 'Thông tin khách hàng', primaryLabel: 'Lưu', builder: (_) => form);
`})})]})}function be(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{be as default};

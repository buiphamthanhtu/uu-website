import{j as n}from"./iframe-6vwN6wb9.js";import{useMDXComponents as d}from"./index-Dlv2haGb.js";import{M as s,C as o,a}from"./blocks-BSM2G-rt.js";import{D as x}from"./DocHeader-dH8kDqoR.js";import{W as j,A as p,P as u,R as m}from"./ComponentDoc-C2Azonyj.js";import{D as g,a as b,b as c}from"./Diagram-DvRZpORS.js";import{D as f,a as v,b as y}from"./DoDont-D-pRqbc4.js";import{P as i}from"./Popover-BzmQmVHo.js";import{T as t}from"./TextInput-Bbz922PW.js";import{S as T,P as h,M as k,A as P,F as C}from"./Popover.stories-CdESMdBC.js";import"./preload-helper-Dp1pzeXC.js";import"./ontology-B4dEuYV1.js";import"./ToggleButton-iGf9GL8G.js";import"./SegmentedControl-D9DnLaT0.js";import"./FieldLabel-VR6C5pFb.js";import"./TextArea-fHkKRPcE.js";/* empty css              */import"./OTPInput-Bd2cl4Ac.js";import"./SearchInput-DzxMgUfj.js";import"./BottomSheet-B8yp7CjB.js";import"./ButtonGroup-CnZk1waj.js";/* empty css                    */import"./Checkbox-DddgjZL9.js";/* empty css                 */import"./MenuAnchor-ChH55Pgk.js";import"./DateInput-DLzwF2tb.js";import"./Dropdown-L1BYtwtq.js";import"./Radio-W97mCUrY.js";import"./Switch-C5m2-2AJ.js";import"./Chip-Ccfh2xHF.js";import"./NavigationBar-BCULj685.js";import"./BottomBar-Br4VW-mZ.js";import"./NotificationBadge-jzC0_jUT.js";import"./Pagination-BSd13NVq.js";import"./Tab-K04RKmz4.js";import"./Badge-CXod6T9Q.js";import"./StatusIndicator-rzhX9CGL.js";import"./Dialog-tjliKjBx.js";import"./Table-BvooIirA.js";import"./TablePagination-BKcELBeQ.js";import"./Breadcrumb-BEYmB8Lw.js";import"./KPICard-FvizH_ip.js";import"./SideNav-kBOfiGsC.js";import"./Tooltip-CyR_aW_m.js";import"./SideSheet-k9L0u7Lk.js";import"./Screens-Dq_t4rvF.js";import"./PushNotification-CPD3vDle.js";import"./layout-nPJ89kCs.js";function l(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:T}),`
`,n.jsx(e.h1,{id:"popover",children:"Popover"}),`
`,n.jsx(x,{spec:"6.29",variants:"1",status:"chốt",children:n.jsx(e.p,{children:"Khung nổi neo vào một phần tử, chứa nội dung tương tác được — dùng cho form ngắn hay xác nhận nhỏ mà không rời chỗ đang làm."})}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(a,{of:h}),`
`,n.jsx(e.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(e.p,{children:["Dùng popover khi việc cần làm ",n.jsx(e.strong,{children:"gắn với một phần tử cụ thể"})," và đủ ngắn để xong ngay tại chỗ: đổi tên, sửa một giá trị, xác nhận nhỏ. Popover mở bằng ",n.jsx(e.strong,{children:"bấm"}),". Một câu giải thích mở bằng hover / focus, chỉ có chữ → ",n.jsx(e.code,{children:"Tooltip"}),". Danh sách lựa chọn → ",n.jsx(e.code,{children:"Menu"}),". Việc dài, nhiều trường → ",n.jsx(e.code,{children:"SideSheet"})," (desktop) hoặc ",n.jsx(e.code,{children:"BottomSheet"})," (app)."]}),`
`,n.jsx(j,{of:"Popover",docPath:{Tooltip:"component-giao-tiếp-tooltip--tài-liệu",Menu:"component-lựa-chọn-menu--tài-liệu"}}),`
`,n.jsx(e.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,n.jsx(p,{parts:[{label:n.jsxs(n.Fragment,{children:["Khung — dọc, rộng 320 (",n.jsx(e.code,{children:"size-80"}),"), padding ",n.jsx(e.code,{children:"card/padding"}),", gap 12, ",n.jsx(e.code,{children:"radius-lg"}),", ",n.jsx(e.code,{children:"background-surface"}),", ",n.jsx(e.code,{children:"elevation-medium"}),". Không có mũi tên"]})},{selector:".uu-popover__title",label:n.jsxs(n.Fragment,{children:["Header — ",n.jsx(e.code,{children:"Title"})," style ",n.jsx(e.code,{children:"title-base"})]})},{selector:".uu-popover__header button",label:n.jsxs(n.Fragment,{children:["Nút đóng — ",n.jsx(e.code,{children:"IconButtonNeutral"})," Ghost Small ",n.jsx(e.code,{children:"xmark"})]})},{selector:".uu-popover__content",label:n.jsx(n.Fragment,{children:"Content — slot, nội dung tuỳ màn"})},{selector:".uu-popover__footer",label:n.jsxs(n.Fragment,{children:["Footer — dồn phải, gap 8 (",n.jsx(e.code,{children:"gap-2"}),"): ",n.jsx(e.code,{children:"TextButtonNeutral"})," Ghost Small + ",n.jsx(e.code,{children:"TextButtonAccent"})," Solid Small"]})}],children:n.jsx(i,{title:"Đổi tên thẻ",footer:{primary:{label:"Lưu"},secondary:{label:"Huỷ"}},children:n.jsx(t,{label:"Tên thẻ",defaultValue:"Thẻ đi chợ"})})}),`
`,n.jsx(e.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,n.jsx(u,{of:"Popover",props:{Header:["True","False"],Footer:["True","False"]},code:{Header:{react:"header",flutter:"title",note:n.jsxs(n.Fragment,{children:["Tiêu đề + nút đóng, mặc định bật. Web: tắt ",n.jsx(e.code,{children:"header"})," thì ",n.jsx(e.code,{children:"title"})," vẫn là ",n.jsx(e.code,{children:"aria-label"}),". Flutter: ",n.jsx(e.code,{children:"title: null"})," = không header."]})},Footer:{react:"footer",flutter:"primaryLabel",note:n.jsxs(n.Fragment,{children:["Truyền cặp nút ",n.jsx(e.code,{children:"{ primary, secondary }"})," để bật; ",n.jsx(e.code,{children:"false"})," / bỏ trống để tắt. Flutter: có ",n.jsx(e.code,{children:"primaryLabel"})," thì hiện footer."]})}},extra:[{react:"title",flutter:"title",note:n.jsxs(n.Fragment,{children:["Thiết kế: ",n.jsx(e.code,{children:"Title"})," (TEXT) — ",n.jsx(e.code,{children:"title-base"}),"; cũng là tên hộp thoại cho trình đọc màn hình."]})},{react:"children",flutter:"child",note:n.jsxs(n.Fragment,{children:["Thiết kế: ",n.jsx(e.code,{children:"Content"})," (SLOT)."]})},{react:"anchorRef",flutter:"showUuPopover(anchorContext)",note:"Phần tử neo (nút mở). Có thì Popover tự đặt chỗ cạnh phần tử, Esc trả focus về nó."},{react:"open · onClose",flutter:"Navigator.pop",note:"Đang mở; gọi khi bấm nút đóng, Esc, hoặc bấm ra ngoài."}]}),`
`,n.jsx(o,{of:k}),`
`,n.jsx(e.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,n.jsx(e.p,{children:"Rộng cố định 320 ở cả hai density; padding, chữ và nút đổi theo biến density."}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{}),n.jsx(e.th,{children:"Touch"}),n.jsx(e.th,{children:"Compact"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Rộng"}),n.jsx(e.td,{children:"320"}),n.jsx(e.td,{children:"320"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Padding ",n.jsx(e.code,{children:"card/padding"})]}),n.jsx(e.td,{children:"16"}),n.jsx(e.td,{children:"12"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Gap giữa header · content · footer"}),n.jsx(e.td,{children:"12"}),n.jsx(e.td,{children:"12"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Chữ ",n.jsx(e.code,{children:"title-base"})]}),n.jsx(e.td,{children:"16/24 · 600"}),n.jsx(e.td,{children:"13/20 · 600"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Nút footer (Small) cao"}),n.jsx(e.td,{children:"32"}),n.jsx(e.td,{children:"24"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Gap hai nút footer"}),n.jsx(e.td,{children:"8"}),n.jsx(e.td,{children:"8"})]})]})]}),`
`,n.jsx(g,{caption:"Cùng một popover ở hai density — component không đổi, chỉ biến density đổi.",children:n.jsxs(b,{cols:2,children:[n.jsx(c,{title:"Touch",density:"touch",children:n.jsx(i,{title:"Đổi tên thẻ",footer:{primary:{label:"Lưu"},secondary:{label:"Huỷ"}},children:n.jsx(t,{label:"Tên thẻ",defaultValue:"Thẻ đi chợ"})})}),n.jsx(c,{title:"Compact",density:"compact",children:n.jsx(i,{title:"Đổi tên thẻ",footer:{primary:{label:"Lưu"},secondary:{label:"Huỷ"}},children:n.jsx(t,{label:"Tên thẻ",defaultValue:"Thẻ đi chợ"})})})]})}),`
`,n.jsx(e.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Phần"}),n.jsx(e.th,{children:"Token"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Nền khung"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"background-surface"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Bóng"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"elevation-medium"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Tiêu đề"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"object-primary"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Nút chính"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"TextButtonAccent"})," Solid — ",n.jsx(e.code,{children:"background-interactive"})," · ",n.jsx(e.code,{children:"object-on-interactive"})]})]})]})]}),`
`,n.jsxs(e.p,{children:["Popover không có state riêng; nút bên trong mang state của chính nút. Nút chính dùng nhóm ",n.jsx(e.code,{children:"interactive"})," nên ",n.jsx(e.strong,{children:"đổi theo brand"}),"."]}),`
`,n.jsx(e.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mở"})," bằng bấm vào phần tử neo. Bấm lại phần tử neo thì đóng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Đóng"})," bằng nút đóng, ",n.jsx(e.strong,{children:"Esc"}),", hoặc bấm ra ngoài (không có scrim). Bấm vào chính phần tử neo không tính là bấm ra ngoài."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Vị trí"}),": neo ",n.jsx(e.strong,{children:"dưới"})," phần tử, canh mép trái. Phía dưới không đủ chỗ → ",n.jsx(e.strong,{children:"lật lên trên"}),"; sát mép phải → ",n.jsx(e.strong,{children:"canh mép phải"})," với phần tử. Web đo lại khi mở, khi cuộn và khi đổi cỡ cửa sổ; Flutter đo theo kích thước overlay. Màn không cần tự đặt chỗ — truyền ",n.jsx(e.code,{children:"anchorRef"})," là đủ."]}),`
`]}),`
`,n.jsx(o,{of:P}),`
`,n.jsx(o,{of:C}),`
`,n.jsx(e.h2,{id:"truy-cập",children:"Truy cập"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Khung là ",n.jsx(e.code,{children:'role="dialog"'}),", tên lấy từ ",n.jsx(e.code,{children:"title"})," (",n.jsx(e.code,{children:"aria-labelledby"})," tới tiêu đề; tắt ",n.jsx(e.code,{children:"header"})," thì ",n.jsx(e.code,{children:"title"})," thành ",n.jsx(e.code,{children:"aria-label"}),")."]}),`
`,n.jsxs(e.li,{children:["Nút mở mang ",n.jsx(e.code,{children:"aria-expanded"})," và ",n.jsx(e.code,{children:'aria-haspopup="dialog"'}),"."]}),`
`,n.jsxs(e.li,{children:["Bàn phím: Tab đi qua các phần tử trong khung; ",n.jsx(e.strong,{children:"Esc"})," đóng và trả focus về phần tử neo (",n.jsx(e.code,{children:"anchorRef"}),")."]}),`
`,n.jsxs(e.li,{children:['Nút đóng có nhãn "Đóng" cho trình đọc màn hình — icon ',n.jsx(e.code,{children:"xmark"})," không đứng một mình."]}),`
`]}),`
`,n.jsx(e.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,n.jsxs(f,{children:[n.jsx(v,{reason:"Một trường, hai nút — xong ngay tại chỗ.",children:n.jsx(i,{title:"Đổi tên thẻ",footer:{primary:{label:"Lưu"},secondary:{label:"Huỷ"}},children:n.jsx(t,{label:"Tên thẻ",defaultValue:"Thẻ đi chợ"})})}),n.jsx(y,{reason:"Form nhiều trường chật trong khung 320 — dùng SideSheet hoặc BottomSheet.",children:n.jsxs(i,{title:"Thông tin khách hàng",footer:{primary:{label:"Lưu"},secondary:{label:"Huỷ"}},children:[n.jsx(t,{label:"Họ và tên",defaultValue:"Nguyễn Minh Anh"}),n.jsx(t,{label:"Số điện thoại",defaultValue:"0901 234 567"}),n.jsx(t,{label:"Email",defaultValue:"minhanh@uucreative.co"})]})})]}),`
`,n.jsx(m,{of:"Popover"}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Popover, TextButtonNeutral, TextInput } from 'uu-ds';

const anchor = useRef<HTMLButtonElement>(null);

<TextButtonNeutral ref={anchor} type="outline" size="small" aria-expanded={open} aria-haspopup="dialog" onClick={() => setOpen(!open)}>
  Đổi tên
</TextButtonNeutral>
<Popover
  title="Đổi tên thẻ" open={open} onClose={close} anchorRef={anchor}
  footer={{ primary: { label: 'Lưu', onClick: save }, secondary: { label: 'Huỷ', onClick: close } }}
>
  <TextInput label="Tên thẻ" defaultValue={name} />
</Popover>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

Builder(
  builder: (ctx) => UuTextButton(
    label: 'Đổi tên',
    onPressed: () => showUuPopover<void>(
      ctx,
      title: 'Đổi tên thẻ',
      primaryLabel: 'Lưu',
      onPrimary: save,
      secondaryLabel: 'Huỷ',
      builder: (_) => const UuTextInput(label: 'Tên thẻ'),
    ),
  ),
);
`})})]})}function yn(r={}){const{wrapper:e}={...d(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(l,{...r})}):l(r)}export{yn as default};

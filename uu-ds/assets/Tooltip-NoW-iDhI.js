import{j as n,a as c,d as s}from"./iframe-6vwN6wb9.js";import{useMDXComponents as d}from"./index-Dlv2haGb.js";import{M as l,C as h,a}from"./blocks-BSM2G-rt.js";import{D as p}from"./DocHeader-dH8kDqoR.js";import{W as x,A as g,P as j,R as m}from"./ComponentDoc-C2Azonyj.js";import{D as u,a as b,b as v}from"./DoDont-D-pRqbc4.js";import{T as e}from"./Tooltip-CyR_aW_m.js";import{S as y,P as o,M as f,L as k,T}from"./Tooltip.stories-ClOkZCf5.js";import"./preload-helper-Dp1pzeXC.js";import"./ontology-B4dEuYV1.js";import"./Diagram-DvRZpORS.js";import"./ToggleButton-iGf9GL8G.js";import"./SegmentedControl-D9DnLaT0.js";import"./FieldLabel-VR6C5pFb.js";import"./TextInput-Bbz922PW.js";/* empty css              */import"./TextArea-fHkKRPcE.js";import"./OTPInput-Bd2cl4Ac.js";import"./SearchInput-DzxMgUfj.js";import"./BottomSheet-B8yp7CjB.js";import"./ButtonGroup-CnZk1waj.js";/* empty css                    */import"./Checkbox-DddgjZL9.js";/* empty css                 */import"./MenuAnchor-ChH55Pgk.js";import"./DateInput-DLzwF2tb.js";import"./Dropdown-L1BYtwtq.js";import"./Radio-W97mCUrY.js";import"./Switch-C5m2-2AJ.js";import"./Chip-Ccfh2xHF.js";import"./NavigationBar-BCULj685.js";import"./BottomBar-Br4VW-mZ.js";import"./NotificationBadge-jzC0_jUT.js";import"./Pagination-BSd13NVq.js";import"./Tab-K04RKmz4.js";import"./Badge-CXod6T9Q.js";import"./StatusIndicator-rzhX9CGL.js";import"./Dialog-tjliKjBx.js";import"./Table-BvooIirA.js";import"./TablePagination-BKcELBeQ.js";import"./Breadcrumb-BEYmB8Lw.js";import"./KPICard-FvizH_ip.js";import"./SideNav-kBOfiGsC.js";import"./SideSheet-k9L0u7Lk.js";import"./Popover-BzmQmVHo.js";import"./Screens-Dq_t4rvF.js";import"./PushNotification-CPD3vDle.js";import"./layout-nPJ89kCs.js";function r(i){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:y}),`
`,n.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,n.jsx(p,{spec:"6.30",variants:"4",status:"chốt",children:n.jsxs(t.p,{children:["Nhãn ngắn hiện khi hover hoặc focus bàn phím — dùng để giải thích một phần tử không có chữ, như ",n.jsx(t.code,{children:"IconButton"})," hay mục ",n.jsx(t.code,{children:"SideNav"})," thu gọn."]})}),`
`,n.jsx(h,{of:o}),`
`,n.jsx(a,{of:o}),`
`,n.jsx(t.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(t.p,{children:["Dùng tooltip cho ",n.jsx(t.strong,{children:"một câu giải thích ngắn"})," về phần tử chỉ có icon, trên màn có chuột (desktop). Chỉ chữ thuần, không link hay nút bên trong — cần nút, form ngắn hay tiêu đề thì dùng ",n.jsx(t.code,{children:"Popover"}),". ",n.jsx(t.strong,{children:"Không dùng trên màn chạm"}),": không có hover, người dùng không bao giờ thấy chữ."]}),`
`,n.jsx(x,{of:"Tooltip",docPath:{Popover:"component-chứa-đựng-popover--tài-liệu"}}),`
`,n.jsx(t.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,n.jsx(g,{parts:[{selector:".uu-tooltip",label:n.jsxs(n.Fragment,{children:["Bong bóng — padding 4 / 8, ",n.jsx(t.code,{children:"radius-sm"}),", nền ",n.jsx(t.code,{children:"background-inverted"}),", max-width 240 (",n.jsx(t.code,{children:"size-60"}),"); chữ ",n.jsx(t.code,{children:"caption"})," ",n.jsx(t.code,{children:"object-primary-inverted"}),", xuống dòng khi chạm max-width. Mũi tên 8 × 4 cùng màu nền, giữa cạnh hướng về phần tử"]})},{selector:".uu-tooltip-anchor > button",label:n.jsxs(n.Fragment,{children:["Phần tử được giải thích — một phần tử duy nhất, nhận được focus; tooltip gắn ",n.jsx(t.code,{children:"aria-describedby"})," (hoặc ",n.jsx(t.code,{children:"aria-labelledby"}),") vào nó"]})}],children:n.jsx("div",{style:{padding:"var(--gap-12) var(--gap-16) var(--gap-4)"},children:n.jsx(e,{text:"Sao chép mã giới thiệu",open:!0,children:n.jsx(c,{type:"outline",size:"base",icon:"copy",label:"Sao chép"})})})}),`
`,n.jsxs(t.p,{children:["Khoảng cách giữa bong bóng và phần tử bản vẽ không ghi; code để ",n.jsx(t.strong,{children:"8"})," (",n.jsx(t.code,{children:"size-2"}),"): mũi tên 4 cộng khoảng hở 4."]}),`
`,n.jsx(t.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,n.jsx(j,{of:"Tooltip",code:{Placement:{react:"placement",flutter:"placement",note:n.jsxs(n.Fragment,{children:["Phía bong bóng nằm so với phần tử: ",n.jsx(t.code,{children:"top"})," (mặc định) · ",n.jsx(t.code,{children:"bottom"})," · ",n.jsx(t.code,{children:"left"})," · ",n.jsx(t.code,{children:"right"}),". Tooltip không tự lật khi sát mép — chọn ",n.jsx(t.code,{children:"placement"})," theo chỗ trống."]})}},extra:[{react:"text",flutter:"text",note:n.jsxs(n.Fragment,{children:["Thiết kế: ",n.jsx(t.code,{children:"Text"}),". Chữ thuần, một câu ngắn."]})},{react:"children",flutter:"child",note:"Phần tử được giải thích — một phần tử nhận được focus."},{react:"relation",flutter:"isLabel",note:n.jsxs(n.Fragment,{children:[n.jsx(t.code,{children:"description"})," (mặc định) — tooltip mô tả thêm cho phần tử đã có tên. ",n.jsx(t.code,{children:"label"})," / ",n.jsx(t.code,{children:"isLabel: true"})," — tooltip chính là tên của phần tử chỉ có icon."]})},{react:"open",flutter:"open",note:"Ép hiện / ẩn để chụp docs. Bỏ trống: theo hover / focus."}]}),`
`,n.jsx(h,{of:f}),`
`,n.jsx(t.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,n.jsxs(t.p,{children:["Bong bóng dùng chung padding, radius, max-width ở hai density; chỉ chữ ",n.jsx(t.code,{children:"caption"})," đổi theo biến density."]}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{}),n.jsx(t.th,{children:"Touch"}),n.jsx(t.th,{children:"Compact"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Padding dọc / ngang"}),n.jsx(t.td,{children:"4 / 8"}),n.jsx(t.td,{children:"4 / 8"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Max-width"}),n.jsx(t.td,{children:"240"}),n.jsx(t.td,{children:"240"})]}),n.jsxs(t.tr,{children:[n.jsxs(t.td,{children:["Chữ ",n.jsx(t.code,{children:"caption"})]}),n.jsx(t.td,{children:"13/20"}),n.jsx(t.td,{children:"11/16"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Mũi tên"}),n.jsx(t.td,{children:"8 × 4"}),n.jsx(t.td,{children:"8 × 4"})]})]})]}),`
`,n.jsx(h,{of:k}),`
`,n.jsx(t.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Phần"}),n.jsx(t.th,{children:"Token"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Nền bong bóng · mũi tên"}),n.jsx(t.td,{children:n.jsx(t.code,{children:"background-inverted"})})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Chữ"}),n.jsx(t.td,{children:n.jsx(t.code,{children:"object-primary-inverted"})})]})]})]}),`
`,n.jsxs(t.p,{children:["Tooltip không có state riêng và không dùng nhóm ",n.jsx(t.code,{children:"interactive"}),", nên giữ nguyên khi đổi brand."]}),`
`,n.jsx(t.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Hover"}),": giữ chuột yên trên phần tử ",n.jsx(t.strong,{children:"500 ms"})," mới hiện — lướt chuột qua không bật tooltip."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Focus bàn phím"}),": hiện ",n.jsx(t.strong,{children:"ngay"})," khi phần tử nhận focus bằng bàn phím. Bấm chuột không mở tooltip."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Ẩn"}),": rời chuột, mất focus hoặc bấm ",n.jsx(t.strong,{children:"Esc"})," → ẩn ",n.jsx(t.strong,{children:"ngay"}),", không mờ dần."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Chuyển sang phần tử kế bên"}),": đang có tooltip mở, hoặc tooltip vừa ẩn chưa quá ",n.jsx(t.strong,{children:"300 ms"}),", thì tooltip của phần tử mới hiện ngay, không chờ lại 500 ms — rê dọc một hàng nút công cụ đọc được liền mạch."]}),`
`]}),`
`,n.jsx(h,{of:T}),`
`,n.jsx(t.h2,{id:"truy-cập",children:"Truy cập"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Bong bóng là ",n.jsx(t.code,{children:'role="tooltip"'}),". Mặc định phần tử được gắn ",n.jsx(t.code,{children:"aria-describedby"})," trỏ tới bong bóng — tooltip là ",n.jsx(t.strong,{children:"mô tả thêm"})," cho phần tử đã có tên."]}),`
`,n.jsxs(t.li,{children:["Phần tử ",n.jsx(t.strong,{children:"chỉ có icon"})," và tooltip chính là tên của nó (mục ",n.jsx(t.code,{children:"SideNav"})," thu gọn, ",n.jsx(t.code,{children:"IconButton"})," không ",n.jsx(t.code,{children:"label"}),") → ",n.jsx(t.code,{children:'relation="label"'})," (Flutter ",n.jsx(t.code,{children:"isLabel: true"}),"): chữ tooltip thành tên qua ",n.jsx(t.code,{children:"aria-labelledby"}),", trình đọc màn hình đọc đúng một lần. ",n.jsx(t.code,{children:"IconButton"})," đã có ",n.jsx(t.code,{children:"label"})," thì giữ mặc định ",n.jsx(t.code,{children:"description"}),"."]}),`
`,n.jsx(t.li,{children:"Tooltip hiện khi focus bàn phím, không chỉ khi hover — người dùng bàn phím đọc được cùng nội dung. Esc ẩn tooltip mà không chuyển focus."}),`
`,n.jsx(t.li,{children:"Nội dung bắt buộc để hoàn thành việc không đặt trong tooltip; tooltip chỉ giải thích thêm."}),`
`]}),`
`,n.jsx(t.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,n.jsxs(u,{children:[n.jsx(b,{hug:!0,reason:"Nút chỉ có icon — tooltip nói nút làm gì.",children:n.jsx("div",{style:{padding:"var(--gap-10) var(--gap-12) 0"},children:n.jsx(e,{text:"Sao chép mã giới thiệu",open:!0,children:n.jsx(c,{type:"outline",size:"base",icon:"copy",label:"Sao chép"})})})}),n.jsx(v,{hug:!0,reason:"Nút đã có chữ — tooltip lặp lại đúng chữ đó, không thêm gì.",children:n.jsx("div",{style:{padding:"var(--gap-10) var(--gap-12) 0"},children:n.jsx(e,{text:"Sao chép",open:!0,children:n.jsx(s,{type:"outline",size:"base",children:"Sao chép"})})})})]}),`
`,n.jsx(m,{of:"Tooltip"}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { Tooltip, IconButtonNeutral } from 'uu-ds';

<Tooltip text="Sao chép mã giới thiệu" placement="top">
  <IconButtonNeutral type="outline" icon="copy" label="Sao chép" />
</Tooltip>

// Phần tử chưa có tên nào khác: tooltip chính là tên (SideNav thu gọn tự làm việc này)
<Tooltip text="Khách hàng" placement="right" relation="label">
  {navItem}
</Tooltip>
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

UuTooltip(
  text: 'Sao chép mã giới thiệu',
  child: UuIconButton(icon: 'copy', label: 'Sao chép', onPressed: copy),
);

UuTooltip(text: 'Khách hàng', placement: UuTooltipPlacement.right, isLabel: true, child: item);
`})})]})}function vn(i={}){const{wrapper:t}={...d(),...i.components};return t?n.jsx(t,{...i,children:n.jsx(r,{...i})}):r(i)}export{vn as default};

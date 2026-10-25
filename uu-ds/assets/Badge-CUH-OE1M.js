import{j as n}from"./iframe-6vwN6wb9.js";import{useMDXComponents as h}from"./index-Dlv2haGb.js";import{M as o,C as i,a as l}from"./blocks-BSM2G-rt.js";import{D as a}from"./DocHeader-dH8kDqoR.js";import{W as x,A as j,P as g,R as m}from"./ComponentDoc-C2Azonyj.js";import{D as p,a as u,b as c}from"./Diagram-DvRZpORS.js";import{D as b,a as f,b as v}from"./DoDont-D-pRqbc4.js";import{B as t}from"./Badge-CXod6T9Q.js";import{S as y,P as d,T as C}from"./Badge.stories-Cht5Irmr.js";import"./preload-helper-Dp1pzeXC.js";import"./ontology-B4dEuYV1.js";import"./ToggleButton-iGf9GL8G.js";import"./SegmentedControl-D9DnLaT0.js";import"./FieldLabel-VR6C5pFb.js";import"./TextInput-Bbz922PW.js";/* empty css              */import"./TextArea-fHkKRPcE.js";import"./OTPInput-Bd2cl4Ac.js";import"./SearchInput-DzxMgUfj.js";import"./BottomSheet-B8yp7CjB.js";import"./ButtonGroup-CnZk1waj.js";/* empty css                    */import"./Checkbox-DddgjZL9.js";/* empty css                 */import"./MenuAnchor-ChH55Pgk.js";import"./DateInput-DLzwF2tb.js";import"./Dropdown-L1BYtwtq.js";import"./Radio-W97mCUrY.js";import"./Switch-C5m2-2AJ.js";import"./Chip-Ccfh2xHF.js";import"./NavigationBar-BCULj685.js";import"./BottomBar-Br4VW-mZ.js";import"./NotificationBadge-jzC0_jUT.js";import"./Pagination-BSd13NVq.js";import"./Tab-K04RKmz4.js";import"./StatusIndicator-rzhX9CGL.js";import"./Dialog-tjliKjBx.js";import"./Table-BvooIirA.js";import"./TablePagination-BKcELBeQ.js";import"./Breadcrumb-BEYmB8Lw.js";import"./KPICard-FvizH_ip.js";import"./SideNav-kBOfiGsC.js";import"./Tooltip-CyR_aW_m.js";import"./SideSheet-k9L0u7Lk.js";import"./Popover-BzmQmVHo.js";import"./Screens-Dq_t4rvF.js";import"./PushNotification-CPD3vDle.js";import"./layout-nPJ89kCs.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...h(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:y}),`
`,n.jsx(e.h1,{id:"badge",children:"Badge"}),`
`,n.jsx(a,{spec:"6.14",variants:"4",status:"chốt",children:n.jsx(e.p,{children:"Nhãn trạng thái dạng viên thuốc, không bấm được — gắn trạng thái cho một dòng hay một thẻ."})}),`
`,n.jsx(i,{of:d}),`
`,n.jsx(l,{of:d}),`
`,n.jsx(e.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(e.p,{children:['Gắn nhãn trạng thái cho một dòng, một thẻ (Đã giao, Sắp hết hạn). Cần chấm màu + chữ trên nền thường, hoặc cần đánh dấu "mục đáng chú ý" (Highlight) → ',n.jsx(e.code,{children:"StatusIndicator"}),". Cần số báo có mới → ",n.jsx(e.code,{children:"NotificationBadge"}),". Cần bấm để lọc → ",n.jsx(e.code,{children:"Chip"}),"."]}),`
`,n.jsx(x,{of:"Badge",docPath:{StatusIndicator:"component-giao-tiếp-statusindicator--tài-liệu"}}),`
`,n.jsx(e.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,n.jsx(j,{parts:[{label:n.jsxs(n.Fragment,{children:["Vỏ — cao 24 (",n.jsx(e.code,{children:"size-6"}),"), padding ngang 4 (",n.jsx(e.code,{children:"gap-1"}),"), bo ",n.jsx(e.code,{children:"rounded-circle"}),", nền theo tone"]})}],children:n.jsx(t,{tone:"success",children:"Đã giao"})}),`
`,n.jsxs(e.p,{children:["Chữ nằm thẳng trong vỏ: style ",n.jsx(e.code,{children:"title-sm"})," (13/20, 600), một dòng, không xuống dòng. Không có icon, không có size khác."]}),`
`,n.jsx(e.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,n.jsx(g,{of:"Badge",code:{Tone:{react:"tone",flutter:"tone",note:n.jsxs(n.Fragment,{children:[n.jsx(e.code,{children:"neutral"})," · ",n.jsx(e.code,{children:"success"})," · ",n.jsx(e.code,{children:"warning"})," · ",n.jsx(e.code,{children:"error"}),". Flutter dùng chung enum ",n.jsx(e.code,{children:"UuTone"})," với StatusIndicator nhưng Badge không nhận ",n.jsx(e.code,{children:"highlight"}),"."]})}},extra:[{react:"children",flutter:"label",note:"Chữ trạng thái, một dòng."}]}),`
`,n.jsx(i,{of:C}),`
`,n.jsx(e.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,n.jsxs(e.p,{children:["Vỏ giữ cao 24 ở cả hai density; chữ ",n.jsx(e.code,{children:"title-sm"})," lùi một bậc khi bật Compact."]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{}),n.jsx(e.th,{children:"Touch"}),n.jsx(e.th,{children:"Compact"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Cao"}),n.jsx(e.td,{children:"24"}),n.jsx(e.td,{children:"24"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Padding ngang"}),n.jsx(e.td,{children:"4"}),n.jsx(e.td,{children:"4"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Chữ ",n.jsx(e.code,{children:"title-sm"})]}),n.jsx(e.td,{children:"13/20 · 600"}),n.jsx(e.td,{children:"11/16 · 600"})]})]})]}),`
`,n.jsx(p,{caption:"Cùng bốn badge ở hai density — chỉ cỡ chữ đổi.",children:n.jsxs(u,{cols:2,children:[n.jsxs(c,{title:"Touch",density:"touch",children:[n.jsx(t,{tone:"success",children:"Đã giao"}),n.jsx(t,{tone:"error",children:"Đã huỷ"})]}),n.jsxs(c,{title:"Compact",density:"compact",children:[n.jsx(t,{tone:"success",children:"Đã giao"}),n.jsx(t,{tone:"error",children:"Đã huỷ"})]})]})}),`
`,n.jsxs(e.p,{children:["Badge hug theo chữ — không đặt ",n.jsx(e.code,{children:"width"})," cố định."]}),`
`,n.jsx(e.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Tone"}),n.jsx(e.th,{children:"Nền"}),n.jsx(e.th,{children:"Chữ"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Neutral"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"background-inverted"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"object-primary-inverted"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Success"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"background-positive"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"object-on-positive"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Warning"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"background-warning"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"object-on-warning"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Error"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"background-negative"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"object-on-negative"})})]})]})]}),`
`,n.jsxs(e.p,{children:["Cùng quy tắc với Toast: ",n.jsx(e.code,{children:"background-{status}"})," chỉ đi với ",n.jsx(e.code,{children:"object-on-{status}"}),". Không có state (không hover, pressed, disabled) — đây không phải control. Bốn tone đều thuộc họ status nên không đổi theo brand."]}),`
`,n.jsx(e.h2,{id:"truy-cập",children:"Truy cập"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Badge là ",n.jsx(e.code,{children:"<span>"})," chữ thường — trình đọc màn hình đọc đúng chữ trên nhãn, không cần aria thêm."]}),`
`,n.jsx(e.li,{children:"Không nhận focus, không có vai trò nút."}),`
`,n.jsx(e.li,{children:'Trạng thái không chỉ dựa vào màu: chữ trên nhãn ("Đã giao", "Đã huỷ") tự nói nghĩa.'}),`
`]}),`
`,n.jsx(e.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,n.jsxs(b,{children:[n.jsx(f,{hug:!0,reason:"Chữ ngắn, đúng tone với trạng thái.",children:n.jsxs("div",{style:{display:"flex",gap:"var(--gap-2)"},children:[n.jsx(t,{tone:"success",children:"Đã giao"}),n.jsx(t,{tone:"warning",children:"Sắp hết hạn"})]})}),n.jsx(v,{hug:!0,reason:"Badge không bấm được — cần lọc thì dùng Chip.",children:n.jsxs("div",{style:{display:"flex",gap:"var(--gap-2)"},children:[n.jsx(t,{tone:"neutral",children:"Tất cả"}),n.jsx(t,{tone:"neutral",children:"Đang giao"}),n.jsx(t,{tone:"neutral",children:"Đã giao"})]})})]}),`
`,n.jsx(m,{of:"Badge"}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Badge } from 'uu-ds';

<Badge tone="success">Đã giao</Badge>
<Badge tone="error">Đã huỷ</Badge>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

const UuBadge(label: 'Đã giao', tone: UuTone.success);
const UuBadge(label: 'Đã huỷ', tone: UuTone.error);
`})})]})}function bn(r={}){const{wrapper:e}={...h(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{bn as default};

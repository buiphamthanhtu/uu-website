import{j as n}from"./iframe-ROCLD28a.js";import{useMDXComponents as d}from"./index-C7BqBkF2.js";import{M as h,C as e,a as s}from"./blocks-BuXxpxoH.js";import{D as l}from"./DocHeader-D_5l8dki.js";import{W as a,A as x,R as j,P as m,a as g}from"./ComponentDoc-DmWhhgiZ.js";import{D as u,a as p,b}from"./DoDont-D9n9CO_i.js";import{N as c}from"./NotificationBadge-kIMiybKW.js";import{S as f,P as o,C,O as v}from"./NotificationBadge.stories-3T1S9lWV.js";import"./preload-helper-Dp1pzeXC.js";import"./ontology-DUBFVRSs.js";import"./Diagram-BLJJo3vu.js";import"./ToggleButton-BYVEEvBM.js";import"./SegmentedControl-CG443Z-N.js";import"./FieldLabel-lJNMi8zR.js";import"./TextInput-bbcUxLtU.js";/* empty css              */import"./TextArea-uDmE7JRm.js";import"./OTPInput-aGloZWFR.js";import"./SearchInput-CimSGt-6.js";import"./BottomSheet-C5nCYZJD.js";import"./ButtonGroup-InFbROeU.js";/* empty css                    */import"./Checkbox-BJDZV_55.js";/* empty css                 */import"./MenuAnchor-BSmOtSgo.js";import"./DateInput-ArUG1OSD.js";import"./Dropdown-BCj6xJbX.js";import"./Radio-zNyY_e5Q.js";import"./Switch-jTTHDUmg.js";import"./ListItem-sNNdgFd9.js";import"./Chip--ACByIs7.js";import"./NavigationBar-CM26I483.js";import"./BottomBar-FYkCmOq9.js";import"./Pagination--9HOJpWV.js";import"./Tab-DLe5YS-r.js";import"./Badge-Di19pueE.js";import"./StatusIndicator-CkfhoWyd.js";import"./Dialog-Cx5xLwWG.js";import"./Table-ClommTK8.js";import"./TablePagination-CodRfSzp.js";import"./Breadcrumb-D_4IIGBC.js";import"./KPICard-C4bV5rwx.js";import"./SideNav-D2zxcwlp.js";import"./Tooltip-BaJvATcC.js";import"./SideSheet-CFVVaejo.js";import"./Popover-C8PRPUVW.js";import"./Screens-BYJgnMVW.js";import"./PushNotification-Di--8nO_.js";function r(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{of:f}),`
`,n.jsx(t.h1,{id:"notificationbadge",children:"NotificationBadge"}),`
`,n.jsx(l,{spec:"6.16",variants:"2",status:"chốt",children:n.jsx(t.p,{children:"Chấm hoặc số đặt lên góc icon, tab — báo có mới, chưa xem."})}),`
`,n.jsx(e,{of:o}),`
`,n.jsx(s,{of:o}),`
`,n.jsx(t.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(t.p,{children:["Báo có mới trên icon chuông, tab, avatar, mục ",n.jsx(t.code,{children:"BottomBar"}),". ",n.jsx(t.code,{children:"Count"})," khi số lượng có nghĩa với người dùng; ",n.jsx(t.code,{children:"Dot"}),' khi chỉ cần biết "có mới". Nhãn trạng thái có chữ → ',n.jsx(t.code,{children:"Badge"}),". Trạng thái có chấm + chữ, hay mục đáng chú ý → ",n.jsx(t.code,{children:"StatusIndicator"}),"."]}),`
`,n.jsx(a,{of:"NotificationBadge",docPath:{StatusIndicator:"component-giao-tiếp-statusindicator--tài-liệu"}}),`
`,n.jsx(t.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,n.jsxs(x,{parts:[{label:n.jsxs(n.Fragment,{children:["Vỏ — ",n.jsx(t.code,{children:"Count"})," cao 16, min-width 16, padding ngang 4, bo ",n.jsx(t.code,{children:"rounded-circle"}),", HUG theo số; ",n.jsx(t.code,{children:"Dot"})," tròn 8×8"]})}],children:[n.jsx(c,{content:"count",count:12,label:"12 thông báo mới"}),n.jsx(c,{content:"dot",label:"Có thông báo mới"})]}),`
`,n.jsxs(t.p,{children:["Số nằm thẳng trong vỏ: 11px (",n.jsx(t.code,{children:"font-size-xs"}),") / 16 (",n.jsx(t.code,{children:"font-height-xs"}),") / 600, căn giữa."]}),`
`,n.jsx(j,{of:"NotificationBadge"}),`
`,n.jsx(t.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,n.jsx(m,{of:"NotificationBadge",code:{Content:{react:"content",flutter:"count",note:n.jsxs(n.Fragment,{children:["React ",n.jsx(t.code,{children:"'count' | 'dot'"}),". Flutter: truyền chuỗi ",n.jsx(t.code,{children:"count"})," là ",n.jsx(t.code,{children:"Count"}),", để ",n.jsx(t.code,{children:"null"})," là ",n.jsx(t.code,{children:"Dot"}),"."]})}},extra:[{react:"count",flutter:"count",note:"Số hiển thị khi Content=Count — truyền đúng chuỗi muốn hiện."},{react:"label",flutter:"semanticLabel",note:'Chữ cho trình đọc màn hình, vd. "3 thông báo mới".'}]}),`
`,n.jsx(e,{of:C}),`
`,n.jsx(t.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,n.jsxs(t.p,{children:["Không có biến density: badge giữ đúng kích thước ở cả Touch và Compact (",n.jsx(t.code,{children:"title-xs"})," 11/16 là sàn của thang chữ)."]}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{}),n.jsx(t.th,{children:"Touch"}),n.jsx(t.th,{children:"Compact"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsxs(t.td,{children:[n.jsx(t.code,{children:"Count"})," cao · min-width"]}),n.jsx(t.td,{children:"16 · 16"}),n.jsx(t.td,{children:"16 · 16"})]}),n.jsxs(t.tr,{children:[n.jsxs(t.td,{children:[n.jsx(t.code,{children:"Count"})," padding ngang"]}),n.jsx(t.td,{children:"4"}),n.jsx(t.td,{children:"4"})]}),n.jsxs(t.tr,{children:[n.jsxs(t.td,{children:[n.jsx(t.code,{children:"Count"})," chữ"]}),n.jsx(t.td,{children:"11/16 · 600"}),n.jsx(t.td,{children:"11/16 · 600"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"Dot"})}),n.jsx(t.td,{children:"8×8"}),n.jsx(t.td,{children:"8×8"})]})]})]}),`
`,n.jsx(t.p,{children:"Màn tự đặt vị trí neo lên icon hay tab:"}),`
`,n.jsx(e,{of:v}),`
`,n.jsx(t.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Content"}),n.jsx(t.th,{children:"Nền"}),n.jsx(t.th,{children:"Chữ"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"Count"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"background-attention"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"object-on-attention"})})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"Dot"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"background-attention"})}),n.jsx(t.td,{children:"—"})]})]})]}),`
`,n.jsxs(t.p,{children:["Dùng họ ",n.jsx(t.strong,{children:n.jsx(t.code,{children:"attention"})}),": badge báo ",n.jsx(t.strong,{children:"có mới, chưa xem"}),". Không phải ",n.jsx(t.code,{children:"negative"})," (đã hỏng, phải sửa), không phải ",n.jsx(t.code,{children:"warning"})," (có rủi ro, nên cẩn thận), không phải ",n.jsx(t.code,{children:"accent"}),". ",n.jsx(t.code,{children:"attention"})," là rose-600 (đỏ ngả hồng), khác sắc với ",n.jsx(t.code,{children:"negative"})," (red-600) để nhìn không lẫn — xem ",n.jsx(t.a,{href:"?path=/docs/ki%E1%BB%83u-m%C3%A0u-s%E1%BA%AFc--t%C3%A0i-li%E1%BB%87u",children:"Màu sắc"}),". Họ status, không đổi theo brand. Chữ trắng trên nền đạt 4.70."]}),`
`,n.jsx(t.p,{children:"Không có state — không phải control."}),`
`,n.jsx(t.h2,{id:"truy-cập",children:"Truy cập"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Khi có ",n.jsx(t.code,{children:"label"}),", badge mang ",n.jsx(t.code,{children:'role="status"'})," và ",n.jsx(t.code,{children:"aria-label"}),' — trình đọc màn hình đọc "3 thông báo mới" thay vì số trơn.']}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"Dot"})," không có chữ, nên luôn truyền ",n.jsx(t.code,{children:"label"}),"."]}),`
`,n.jsx(t.li,{children:"Badge không nhận focus; vùng bấm là icon hay tab chứa nó."}),`
`]}),`
`,n.jsx(t.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,n.jsxs(u,{children:[n.jsx(p,{hug:!0,reason:"Báo có mới chưa xem trên icon.",children:n.jsx(c,{content:"count",count:3,label:"3 thông báo mới"})}),n.jsx(b,{hug:!0,reason:"Không dùng để báo lỗi — lỗi đi với chữ, dùng StatusIndicator Error hoặc thông báo lỗi.",children:n.jsx(c,{content:"count",count:"!",label:"Lỗi"})})]}),`
`,n.jsx(g,{of:"NotificationBadge"}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { NotificationBadge } from 'uu-ds';

<NotificationBadge content="count" count={3} label="3 thông báo mới" />
<NotificationBadge content="dot" label="Có thông báo mới" />
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

const UuNotificationBadge(count: '3', semanticLabel: '3 thông báo mới');
const UuNotificationBadge(semanticLabel: 'Có thông báo mới'); // Dot
`})})]})}function pn(i={}){const{wrapper:t}={...d(),...i.components};return t?n.jsx(t,{...i,children:n.jsx(r,{...i})}):r(i)}export{pn as default};

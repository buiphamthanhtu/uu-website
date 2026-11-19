import{j as n,M as s,C as r,a as d}from"./iframe-CWIerLKj.js";import{useMDXComponents as o}from"./index-BCnCjj_m.js";import{D as h}from"./DocHeader-DaESeP-O.js";import{A as l,R as m,P as p,a as x}from"./ComponentDoc-Du0gY9-n.js";import{D as j,a as u,b as g}from"./DoDont-DnuzRCYS.js";import{N as e}from"./NavigationBar-DF8WGc4u.js";import{B as b}from"./Breadcrumb-LXTXyRVx.js";import{S as B,P as c,V as k}from"./NavigationBar.stories-B8qTQEEl.js";import"./preload-helper-Dp1pzeXC.js";import"./vi-L6nXYXdW.js";import"./Diagram-a4FvSyVW.js";import"./DocLink-CW_bhuxC.js";import"./ToggleButton-BLulptGY.js";import"./SegmentedControl-CLEn3TDa.js";import"./FieldLabel-CPkwxD9w.js";import"./TextInput-BT9Bz51D.js";/* empty css              */import"./TextArea-B0lV66mp.js";import"./OTPInput-BN-RPTIc.js";import"./SearchInput-dY6HAxFI.js";import"./BottomSheet-Ct1eEgAW.js";import"./ButtonGroup-BrII6Rx4.js";/* empty css                    */import"./Checkbox-g_o5H7UY.js";/* empty css                 */import"./MenuAnchor-DX7ppmPZ.js";import"./DateInput-kZEw7Y7q.js";import"./Dropdown-DrfEP_xi.js";import"./Radio-Bije1Xoi.js";import"./Switch-BVwHRBX7.js";import"./ListItem-CestpmGM.js";import"./Chip-D4CRzwpy.js";import"./BottomBar-DYauw69a.js";import"./NotificationBadge-xXgrouN8.js";import"./Pagination-nwBqsfjy.js";import"./Tab-C4e9Zsvw.js";import"./Badge-DjtbIWYh.js";import"./StatusIndicator-Bgs6V6Fy.js";import"./Dialog-BaKCESoq.js";import"./Table-BcveUz3c.js";import"./TablePagination-5jcDJZ8E.js";import"./KPICard-Af1V14iV.js";import"./SideNav-Ds3xaO4D.js";import"./Tooltip-BHTFeWZR.js";import"./SideSheet-VC4oTXdk.js";import"./Popover-C-lBm6S4.js";import"./Screens-BugmWU0P.js";import"./PushNotification-AQpf-k2e.js";function a(i){const t={a:"a",b:"b",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:B}),`
`,n.jsx(t.h1,{id:"navigationbar",children:"NavigationBar"}),`
`,n.jsx(h,{spec:"6.5",variants:"1",status:"chốt",children:n.jsx(t.p,{children:"Thanh đầu màn của app, gồm nút quay lại, tên màn và một hành động phụ."})}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(d,{of:c}),`
`,n.jsx(t.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(t.p,{children:["Đầu mọi màn con trên app và mini app: cho biết đang ở màn nào và đường quay lại. Trên desktop dùng ",n.jsx(t.a,{href:"?path=/docs/component-%C4%91i%E1%BB%81u-h%C6%B0%E1%BB%9Bng-breadcrumb--t%C3%A0i-li%E1%BB%87u",children:n.jsx(t.code,{children:"Breadcrumb"})}),"; không dùng ",n.jsx(t.code,{children:"Breadcrumb"})," thay NavigationBar trên app. Chuyển giữa các màn chính ngang hàng → ",n.jsx(t.a,{href:"?path=/docs/component-%C4%91i%E1%BB%81u-h%C6%B0%E1%BB%9Bng-bottombar--t%C3%A0i-li%E1%BB%87u",children:n.jsx(t.code,{children:"BottomBar"})}),"."]}),`
`,n.jsx(t.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,n.jsx(l,{parts:[{label:n.jsxs(n.Fragment,{children:["Vỏ: HORIZONTAL, cao 56, padding 0/12, gap 12, ",n.jsx(t.b,{children:"không có nền riêng"})," (trong suốt, nằm trên nền màn)"]})},{selector:".uu-iconbtn",label:n.jsxs(n.Fragment,{children:["Back: ",n.jsx(t.code,{children:"IconButtonNeutral"})," Solid ",n.jsx(t.code,{children:"Inverted=True"})," Base (48), icon ",n.jsx(t.code,{children:"chevron-left"})]})},{selector:".uu-navbar__content",label:n.jsxs(n.Fragment,{children:["Content: slot FILL; mặc định là chữ ",n.jsx(t.code,{children:"heading-base"}),', một dòng, dài thì cắt "…"']})},{selector:".uu-iconbtn:last-child",label:n.jsxs(n.Fragment,{children:["Sub action: ",n.jsx(t.code,{children:"IconButtonAccent"})," Solid ",n.jsx(t.code,{children:"Inverted=True"})," Base (48), ẩn mặc định"]})}],children:n.jsx("div",{style:{width:430,background:"var(--background-muted)"},children:n.jsx(e,{title:"Điểm của tôi",onBack:()=>{},subAction:{icon:"share-right",label:"Chia sẻ"}})})}),`
`,n.jsxs(t.p,{children:["Back mang nền ",n.jsx(t.code,{children:"background-surface"}),", icon ",n.jsx(t.code,{children:"object-primary"}),". Sau Sub action có thể có ",n.jsx(t.code,{children:".Mini App Control"}),": pill điều khiển của nền tảng mini app (vd. Zalo), ",n.jsx(t.strong,{children:"không thuộc design system"}),", chỉ đưa vào khi màn chạy trong mini app."]}),`
`,n.jsx(m,{of:"NavigationBar"}),`
`,n.jsx(t.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,n.jsx(p,{of:"NavigationBar",props:{Content:["SLOT"],"Back action":["true","false"],"Sub action":["false","true"],"Mini app":["true","false"]},code:{Content:{react:"title",flutter:"title · titleWidget",note:n.jsxs(n.Fragment,{children:["Chuỗi → style ",n.jsx(t.code,{children:"heading-base"}),'; ReactNode / widget → đặt nguyên. Mặc định "Screen".']})},"Back action":{react:"onBack",flutter:"onBack",note:"Có callback thì hiện nút Back."},"Sub action":{react:"subAction",flutter:"subActionIcon · subActionLabel · onSubAction",note:n.jsxs(n.Fragment,{children:["React ",n.jsx(t.code,{children:"subAction={{ icon, label, onClick }}"}),". Bỏ trống để ẩn."]})},"Mini app":{react:"miniAppControl",flutter:"miniAppControl",note:"Slot cho .Mini App Control. Bản vẽ hiện mặc định; code ẩn khi không truyền."}}}),`
`,n.jsx(r,{of:k}),`
`,n.jsx(t.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,n.jsxs(t.p,{children:["Thanh giữ cao 56 (",n.jsx(t.code,{children:"size-14"}),"); tiêu đề và hai nút đọc biến density."]}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{}),n.jsx(t.th,{children:"Touch"}),n.jsx(t.th,{children:"Compact"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Cao · padding ngang · gap"}),n.jsx(t.td,{children:"56 · 12 · 12"}),n.jsx(t.td,{children:"56 · 12 · 12"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Back · Sub action (Base)"}),n.jsx(t.td,{children:"48"}),n.jsx(t.td,{children:"32"})]}),n.jsxs(t.tr,{children:[n.jsxs(t.td,{children:["Tiêu đề ",n.jsx(t.code,{children:"heading-base"})]}),n.jsx(t.td,{children:"23/32"}),n.jsx(t.td,{children:"19/28"})]})]})]}),`
`,n.jsxs(t.p,{children:["NavigationBar là thanh của app chạm; màn desktop dùng ",n.jsx(t.code,{children:"Breadcrumb"})," thay vì bật Compact cho thanh này."]}),`
`,n.jsx(t.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Phần"}),n.jsx(t.th,{children:"Token"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Vỏ"}),n.jsx(t.td,{children:"— (trong suốt, lấy nền màn)"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Back"}),n.jsxs(t.td,{children:["nền ",n.jsx(t.code,{children:"background-surface"})," · icon ",n.jsx(t.code,{children:"object-primary"})]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Sub action"}),n.jsxs(t.td,{children:["theo ",n.jsx(t.code,{children:"IconButtonAccent"})," Solid ",n.jsx(t.code,{children:"Inverted=True"})]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Tiêu đề"}),n.jsx(t.td,{children:n.jsx(t.code,{children:"object-primary"})})]})]})]}),`
`,n.jsxs(t.p,{children:["Hover / Pressed của hai nút đi theo state layer của ",n.jsx(t.code,{children:"IconButton"}),". Thanh kính mờ là lựa chọn của sản phẩm, component không tự bật."]}),`
`,n.jsx(t.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Bấm Back → về màn trước (màn tự gọi điều hướng qua ",n.jsx(t.code,{children:"onBack"}),")."]}),`
`,n.jsx(t.li,{children:'Tiêu đề dài cắt "…" trên một dòng, không xuống dòng.'}),`
`]}),`
`,n.jsx(t.h2,{id:"truy-cập",children:"Truy cập"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Vỏ là ",n.jsx(t.code,{children:"<header>"}),"; tiêu đề chuỗi render thành ",n.jsx(t.code,{children:"<h1>"}),", mỗi màn một tiêu đề chính."]}),`
`,n.jsxs(t.li,{children:['Back có nhãn "Quay lại"; Sub action luôn cần ',n.jsx(t.code,{children:"label"})," (nút chỉ có icon)."]}),`
`,n.jsx(t.li,{children:"Bàn phím: Tab qua Back → Sub action, Enter / Space để bấm."}),`
`]}),`
`,n.jsx(t.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,n.jsxs(j,{children:[n.jsx(u,{reason:"Trên app: NavigationBar với nút quay lại và tên màn.",children:n.jsx("div",{style:{width:"100%",background:"var(--background-muted)"},children:n.jsx(e,{title:"Đơn hàng",onBack:()=>{}})})}),n.jsx(g,{reason:"Breadcrumb là điều hướng của desktop: không thay NavigationBar trên app.",children:n.jsx(b,{"aria-label":"Đường dẫn",items:[{label:"Trang chủ",href:"#"},{label:"Đơn hàng"}]})})]}),`
`,n.jsx(x,{of:"NavigationBar"}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { NavigationBar } from 'uu-ds';

<NavigationBar
  title="Điểm của tôi"
  onBack={router.back}
  subAction={{ icon: 'share-right', label: 'Chia sẻ', onClick: share }}
/>
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

Scaffold(
  appBar: UuNavigationBar(
    title: 'Điểm của tôi',
    onBack: () => Navigator.pop(context),
    subActionIcon: 'share-right',
    subActionLabel: 'Chia sẻ',
    onSubAction: share,
  ),
);
`})})]})}function un(i={}){const{wrapper:t}={...o(),...i.components};return t?n.jsx(t,{...i,children:n.jsx(a,{...i})}):a(i)}export{un as default};

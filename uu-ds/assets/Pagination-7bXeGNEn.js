import{j as n}from"./iframe-CcRfAzR2.js";import{useMDXComponents as o}from"./index-BCmS2bkE.js";import{M as a,C as h,a as l}from"./blocks-BpWe2ggm.js";import{D as g}from"./DocHeader-DgFkPLwy.js";import{W as x,A as m,R as j,P as p,a as u}from"./ComponentDoc-GmwYYxnR.js";import{D as b,a as y,b as c}from"./Diagram-Dj-9yDGf.js";import{D as v,a as f,b as P}from"./DoDont-CbYlWL1W.js";import{P as t}from"./Pagination-TrxOyk4B.js";import{S as k,P as s,a as D}from"./Pagination.stories-MBmQlAnU.js";import"./preload-helper-Dp1pzeXC.js";import"./ontology-DUBFVRSs.js";import"./ToggleButton-DLEps7Zc.js";import"./SegmentedControl-CKhnwvoa.js";import"./FieldLabel-DEb7Akc6.js";import"./TextInput-DXPdyfOC.js";/* empty css              */import"./TextArea-BO786d3Q.js";import"./OTPInput-DYQeTDhX.js";import"./SearchInput-DDczoj0J.js";import"./BottomSheet-CQiRuXWN.js";import"./ButtonGroup-Bx48Gae5.js";/* empty css                    */import"./Checkbox-BrK9riAY.js";/* empty css                 */import"./MenuAnchor-CusETQry.js";import"./DateInput-D46ZAbTT.js";import"./Dropdown-B2atMSv6.js";import"./Radio-HKfppCOw.js";import"./Switch-B5Os3r5N.js";import"./ListItem-Bq25lSKO.js";import"./Chip-CYTMwfvB.js";import"./NavigationBar-C2HZVvB_.js";import"./BottomBar-DBqs3-mS.js";import"./NotificationBadge-Bm-GI7tq.js";import"./Tab-8x3lQGk2.js";import"./Badge-Ca7HDrg9.js";import"./StatusIndicator-T5_5wm0O.js";import"./Dialog-CLs21_yq.js";import"./Table-CWVP9ACO.js";import"./TablePagination-D_Les6yW.js";import"./Breadcrumb-07_3srNg.js";import"./KPICard-NvJDDjJY.js";import"./SideNav-YkkOmN_o.js";import"./Tooltip-B0PQkMmP.js";import"./SideSheet-D0icovmW.js";import"./Popover-DHGWmukH.js";import"./Screens-CDlrnhsJ.js";import"./PushNotification-BRbdQzPp.js";function d(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:k}),`
`,n.jsx(i.h1,{id:"pagination",children:"Pagination"}),`
`,n.jsx(g,{spec:"6.10b",variants:"3",status:"chốt",children:n.jsx(i.p,{children:"Hàng năm gạch dưới băng chuyền — cho biết đang ở đầu, giữa hay cuối."})}),`
`,n.jsx(h,{of:s}),`
`,n.jsx(l,{of:s}),`
`,n.jsx(i.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(i.p,{children:["Dưới băng chuyền banner, ảnh, thẻ giới thiệu — nơi người dùng vuốt ngang và chỉ cần biết mình đang ở đâu. Danh sách dài cần nhảy tới đúng trang (bảng dữ liệu) → ",n.jsx(i.code,{children:"TablePagination"}),"."]}),`
`,n.jsx(x,{of:"Pagination",docPath:{TablePagination:"component-dữ-liệu-tablepagination--tài-liệu"}}),`
`,n.jsx(i.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,n.jsx(m,{parts:[{label:n.jsx(n.Fragment,{children:"Vỏ — HORIZONTAL, gap 4, căn giữa, 104 × 2"})},{selector:".uu-pagination__slick--active",label:n.jsxs(n.Fragment,{children:["Gạch đang xem — rộng 24 (",n.jsx(i.code,{children:"size-6"}),"), cao 2, bo ",n.jsx(i.code,{children:"rounded-circle"})]})},{selector:".uu-pagination__slick:last-child",label:n.jsxs(n.Fragment,{children:["Gạch còn lại — rộng 16 (",n.jsx(i.code,{children:"size-4"}),"), cao 2"]})}],children:n.jsx(t,{position:"begin"})}),`
`,n.jsxs(i.p,{children:["Luôn đúng ",n.jsx(i.strong,{children:"năm"})," gạch (",n.jsx(i.code,{children:"🔒Base/Slick"}),", khoá — không dùng riêng). Tổng 104 = 24 + 4×16 + 4 khe×4."]}),`
`,n.jsx(j,{of:"Pagination"}),`
`,n.jsx(i.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,n.jsx(p,{of:"Pagination",code:{Position:{react:"position",flutter:"position",note:n.jsxs(n.Fragment,{children:["Gạch dài ở slick thứ 1 (",n.jsx(i.code,{children:"begin"}),"), thứ 3 (",n.jsx(i.code,{children:"middle"}),") hay thứ 5 (",n.jsx(i.code,{children:"end"}),")."]})}}}),`
`,n.jsx(h,{of:D}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Chỉ có ba vị trí, không phải năm."}),' Component không mô hình hoá "trang 2 trên 5" — nó nói ',n.jsx(i.em,{children:"đang ở đầu, giữa hay cuối"}),". Băng chuyền nhiều hơn 5 trang vẫn dùng đúng năm gạch này."]}),`
`,n.jsx(i.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,n.jsx(i.p,{children:"Không có biến density — hình học giữ nguyên ở Touch và Compact."}),`
`,n.jsxs(i.table,{children:[n.jsx(i.thead,{children:n.jsxs(i.tr,{children:[n.jsx(i.th,{}),n.jsx(i.th,{children:"Touch"}),n.jsx(i.th,{children:"Compact"})]})}),n.jsxs(i.tbody,{children:[n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Gạch đang xem · còn lại"}),n.jsx(i.td,{children:"24 · 16"}),n.jsx(i.td,{children:"24 · 16"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Cao gạch · khe"}),n.jsx(i.td,{children:"2 · 4"}),n.jsx(i.td,{children:"2 · 4"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Tổng bề rộng"}),n.jsx(i.td,{children:"104"}),n.jsx(i.td,{children:"104"})]})]})]}),`
`,n.jsx(i.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,n.jsxs(i.table,{children:[n.jsx(i.thead,{children:n.jsxs(i.tr,{children:[n.jsx(i.th,{children:"Slick"}),n.jsx(i.th,{children:"Bề rộng"}),n.jsx(i.th,{children:"Nền"})]})}),n.jsxs(i.tbody,{children:[n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Đang xem"}),n.jsxs(i.td,{children:[n.jsx(i.code,{children:"size-6"})," (24)"]}),n.jsx(i.td,{children:n.jsx(i.code,{children:"background-accent"})})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Còn lại"}),n.jsxs(i.td,{children:[n.jsx(i.code,{children:"size-4"})," (16)"]}),n.jsxs(i.td,{children:[n.jsx(i.code,{children:"overlay"})," (đen 10%)"]})]})]})]}),`
`,n.jsxs(i.p,{children:["Bề ",n.jsx(i.strong,{children:"rộng"})," là tín hiệu chính, màu chỉ phụ: nhìn nghiêng hay mù màu vẫn đọc ra đang ở đâu. Gạch đang xem dùng họ ",n.jsx(i.code,{children:"accent"})," nên đổi theo brand."]}),`
`,n.jsxs(i.p,{children:["Gạch không active dùng ",n.jsx(i.code,{children:"overlay"}),", không dùng màu nền thương hiệu: gạch nằm dưới banner nhiều màu, đen 10% bám được lên cả ảnh sáng lẫn ảnh tối, còn một màu nền nhạt sẽ chìm vào chính dải màu của banner."]}),`
`,n.jsx(b,{caption:"Gạch đang xem đổi theo brand; gạch còn lại giữ overlay.",children:n.jsxs(y,{cols:2,children:[n.jsx(c,{title:"Default",theme:"default",children:n.jsx(t,{position:"middle"})}),n.jsx(c,{title:"UU",theme:"uu",children:n.jsx(t,{position:"middle"})})]})}),`
`,n.jsx(i.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsxs(i.p,{children:["Pagination chỉ hiển thị, không bấm được. Băng chuyền đổi ",n.jsx(i.code,{children:"position"})," theo trang đang xem: trang đầu → ",n.jsx(i.code,{children:"begin"}),", trang cuối → ",n.jsx(i.code,{children:"end"}),", mọi trang ở giữa → ",n.jsx(i.code,{children:"middle"}),"."]}),`
`,n.jsx(i.h2,{id:"truy-cập",children:"Truy cập"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Vỏ mang ",n.jsx(i.code,{children:'role="img"'}),' với nhãn theo vị trí: "Đầu băng chuyền", "Giữa băng chuyền", "Cuối băng chuyền".']}),`
`,n.jsx(i.li,{children:"Không nhận focus. Băng chuyền chứa nó tự lo điều khiển bằng bàn phím và nhãn cho từng trang."}),`
`,n.jsx(i.li,{children:"Vị trí đọc được bằng bề rộng gạch, không chỉ bằng màu."}),`
`]}),`
`,n.jsx(i.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,n.jsxs(v,{children:[n.jsx(f,{hug:!0,reason:"Năm gạch, gạch dài ở giữa cho mọi trang không phải đầu hay cuối.",children:n.jsx(t,{position:"middle"})}),n.jsx(P,{hug:!0,reason:"Đổi sang chấm tròn hay thêm gạch theo số trang — luôn đúng năm gạch.",children:n.jsx("div",{style:{display:"inline-flex",gap:"var(--gap-1)"},children:Array.from({length:8},(C,r)=>n.jsx("span",{style:{width:"var(--size-2)",height:"var(--size-2)",borderRadius:"var(--rounded-circle)",background:r===1?"var(--background-accent)":"var(--overlay)"}},r))})})]}),`
`,n.jsx(u,{of:"Pagination"}),`
`,n.jsx(i.h2,{id:"code",children:"Code"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`import { Pagination } from 'uu-ds';

<Pagination position={index === 0 ? 'begin' : index === last ? 'end' : 'middle'} />
`})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

UuPagination(
  position: index == 0
      ? UuPaginationPosition.begin
      : index == last
          ? UuPaginationPosition.end
          : UuPaginationPosition.middle,
);
`})})]})}function fn(e={}){const{wrapper:i}={...o(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(d,{...e})}):d(e)}export{fn as default};

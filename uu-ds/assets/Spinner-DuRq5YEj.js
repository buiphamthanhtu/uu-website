import{j as n,S as i,T as d}from"./iframe-CS8d8swY.js";import{useMDXComponents as o}from"./index-CR5isgyd.js";import{M as s,C as r}from"./blocks-BSpep7sj.js";import{D as h}from"./DocHeader-RL7BdA-Q.js";import{A as l,P as a}from"./ComponentDoc-B4o_5q9U.js";import{D as m,a as x,b as p}from"./DoDont-BL2GmrLu.js";import{S as g,P as j,L as u,I as b}from"./Spinner.stories-BHEEVTS6.js";import"./preload-helper-Dp1pzeXC.js";import"./ontology-BbLAC_QR.js";import"./Diagram-KdVRhwX7.js";import"./ToggleButton-Dtl8qgr-.js";import"./SegmentedControl-CXrfiK48.js";import"./FieldLabel-DjP1fCCj.js";import"./TextInput-84xt38bh.js";/* empty css              */import"./TextArea-CX08A5Iu.js";import"./OTPInput-BuQT49i9.js";import"./SearchInput-DpywZ1Bp.js";import"./BottomSheet-BB6hD2NN.js";import"./ButtonGroup-d46sQr3o.js";/* empty css                    */import"./Checkbox-C4EVxvj8.js";/* empty css                 */import"./MenuAnchor-CN4aaZ-3.js";import"./DateInput-Jyav-osu.js";import"./Dropdown-DSmoZNka.js";import"./Radio-BO1c3skW.js";import"./Switch-DamahXEF.js";import"./ListItem-BWoXiBY-.js";import"./Chip-D72MJS-S.js";import"./NavigationBar-Cljm3zgq.js";import"./BottomBar-BaHJAJlH.js";import"./NotificationBadge-DgggJfOI.js";import"./Pagination-BHvM2mVv.js";import"./Tab-Dbxlko7q.js";import"./Badge-BQ8Wwhck.js";import"./StatusIndicator-B4zrdyVv.js";import"./Dialog-B1Jkmy3H.js";import"./Table-DaoRdDi7.js";import"./TablePagination-Dq6ggE1O.js";import"./Breadcrumb-3aRPqVEa.js";import"./KPICard-DxrbIEQ4.js";import"./SideNav-RG9pWnao.js";import"./Tooltip-D2tYmfAR.js";import"./SideSheet-ClQE7FJs.js";import"./Popover-A3S7jKv9.js";import"./Screens-C5c-Z4X5.js";import"./PushNotification-CRGU9Bg-.js";import"./layout-BVaZ_bLP.js";function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:g}),`
`,n.jsxs(t.h1,{id:"spinner-loading",children:["Spinner (",n.jsx(t.code,{children:".loading"}),")"]}),`
`,n.jsx(h,{spec:"6.12",status:"nội bộ",children:n.jsx(t.p,{children:"Vòng quay 18×18 — báo một thao tác đang xử lý, nằm bên trong button và ô tìm kiếm."})}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(t.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.code,{children:".loading"})," là component nội bộ: không đặt riêng lên màn, mà đi kèm component có trạng thái đang xử lý. Chỗ dùng chính là ",n.jsx(t.code,{children:"State=Loading"})," của ",n.jsx(t.code,{children:"TextButton"})," / ",n.jsx(t.code,{children:"IconButton"})," — spinner đứng trước label, label vẫn hiện. ",n.jsx(t.code,{children:"SearchInput"})," ",n.jsx(t.code,{children:"State=Loading"})," dùng bản 16 thay chỗ nút xoá."]}),`
`,n.jsx(t.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,n.jsx(l,{parts:[{label:n.jsx(n.Fragment,{children:"Vòng — 18×18, nét gradient quét quanh tâm, màu kế thừa từ chữ của component chứa nó"})}],children:n.jsx("span",{style:{color:"var(--object-primary)"},children:n.jsx(i,{})})}),`
`,n.jsxs(t.p,{children:["Bản vẽ dựng bằng 2 vector gradient tuyến tính + 1 chấm 2×2. Code vẽ bằng ",n.jsx(t.code,{children:"conic-gradient"})," + mask vòng (Flutter: ",n.jsx(t.code,{children:"SweepGradient"})," + ",n.jsx(t.code,{children:"drawArc"}),"), không có chấm 2×2."]}),`
`,n.jsx(t.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,n.jsx(a,{of:".loading",props:{},code:{},extra:[{react:"className · …span",flutter:"color",note:n.jsxs(n.Fragment,{children:["Web kế thừa màu qua ",n.jsx(t.code,{children:"currentColor"})," — không có prop màu. Flutter: bỏ trống ",n.jsx(t.code,{children:"color"})," để lấy màu chữ hiện tại."]})},{react:"—",flutter:"size",note:"Mặc định 18."}]}),`
`,n.jsx(r,{of:u}),`
`,n.jsx(t.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{}),n.jsx(t.th,{children:"Touch"}),n.jsx(t.th,{children:"Compact"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Spinner trong button"}),n.jsx(t.td,{children:"18×18"}),n.jsx(t.td,{children:"18×18"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Khe spinner – label"}),n.jsx(t.td,{children:"8"}),n.jsx(t.td,{children:"8"})]}),n.jsxs(t.tr,{children:[n.jsxs(t.td,{children:["Spinner trong ",n.jsx(t.code,{children:"SearchInput"})]}),n.jsx(t.td,{children:"16×16"}),n.jsx(t.td,{children:"16×16"})]})]})]}),`
`,n.jsx(t.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,n.jsxs(t.p,{children:["Không có token riêng: spinner lấy màu chữ của component chứa nó (",n.jsx(t.code,{children:"currentColor"}),") — nút Solid thì ",n.jsx(t.code,{children:"object-on-interactive"}),", nút Outline / Ghost thì ",n.jsx(t.code,{children:"object-interactive"})," hay ",n.jsx(t.code,{children:"object-primary"}),". Nhờ vậy spinner tự đổi theo brand cùng nút."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.code,{children:"Loading"})," ",n.jsx(t.strong,{children:"không có"})," state layer; container của nút giữ nguyên."]}),`
`,n.jsx(t.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:"Quay 360° liên tục trong lúc chờ."}),`
`,n.jsxs(t.li,{children:["Tôn trọng ",n.jsx(t.code,{children:"prefers-reduced-motion"}),": quay chậm lại thay vì dừng hẳn, để vẫn thấy đang xử lý."]}),`
`]}),`
`,n.jsx(r,{of:b}),`
`,n.jsx(t.h2,{id:"truy-cập",children:"Truy cập"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Spinner mang ",n.jsx(t.code,{children:'role="status"'})," và ",n.jsx(t.code,{children:'aria-label="Đang xử lý"'})," (Flutter: ",n.jsx(t.code,{children:"Semantics(label: 'Đang xử lý')"}),")."]}),`
`,n.jsxs(t.li,{children:["Nút đang Loading mang ",n.jsx(t.code,{children:"aria-busy"})," và ",n.jsx(t.code,{children:"aria-disabled"})," — vẫn nằm trong thứ tự Tab nhưng không bấm lại được."]}),`
`,n.jsx(t.li,{children:"Label của nút vẫn hiện, nên người dùng đọc được việc đang làm, không chỉ thấy vòng quay."}),`
`]}),`
`,n.jsx(t.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,n.jsxs(m,{children:[n.jsx(x,{hug:!0,reason:"Label vẫn hiện, nói rõ việc đang làm.",children:n.jsx(d,{state:"loading",children:"Đang gửi mã"})}),n.jsx(p,{hug:!0,reason:"Spinner đứng riêng, không nói đang làm gì — đặt nó trong component có State=Loading.",children:n.jsx("span",{style:{color:"var(--object-primary)"},children:n.jsx(i,{})})})]}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { TextButtonAccent } from 'uu-ds';

// Spinner tự hiện khi nút ở State=Loading
<TextButtonAccent state={sending ? 'loading' : 'default'} onClick={send}>
  {sending ? 'Đang gửi mã' : 'Gửi mã'}
</TextButtonAccent>
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

UuTextButton(
  label: sending ? 'Đang gửi mã' : 'Gửi mã',
  state: sending ? UuButtonState.loading : UuButtonState.normal,
  onPressed: send,
);
`})})]})}function gn(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{gn as default};

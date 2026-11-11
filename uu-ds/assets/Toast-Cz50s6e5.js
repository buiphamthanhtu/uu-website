import{j as n,k as i}from"./iframe-B9x1_Cao.js";import{useMDXComponents as h}from"./index-BsU1bdNi.js";import{M as d,C as c,a as l}from"./blocks-DoNITzeo.js";import{D as a,C as x}from"./DocHeader-CpFuk5XV.js";import{W as j,A as g,R as p,P as m,a as u}from"./ComponentDoc-CZk5_kQ9.js";import{D as b,a as v,b as r}from"./Diagram-CHVjjJvk.js";import{D as y,a as T,b as k}from"./DoDont-Csd-_b6l.js";import{S as f,P as s,T as C}from"./Toast.stories-B_aXnmI5.js";import"./preload-helper-Dp1pzeXC.js";import"./ontology-DUBFVRSs.js";import"./ToggleButton-CILMRqro.js";import"./SegmentedControl-GYQscOI7.js";import"./FieldLabel-KFLavU4Q.js";import"./TextInput-BKm8Xzi-.js";/* empty css              */import"./TextArea-D26UWyaU.js";import"./OTPInput-Dq_fLfbJ.js";import"./SearchInput-Cy_5mRTe.js";import"./BottomSheet-Dor-26gv.js";import"./ButtonGroup-Cai2nt9D.js";/* empty css                    */import"./Checkbox-B-8l9cCP.js";/* empty css                 */import"./MenuAnchor-BJrcR3l5.js";import"./DateInput-Cjs7DTWQ.js";import"./Dropdown-DZz-NlJM.js";import"./Radio-CqbI2BfY.js";import"./Switch-CS9QU8ln.js";import"./ListItem-CcE3KVLL.js";import"./Chip-C5cKj26X.js";import"./NavigationBar-DBOArlAv.js";import"./BottomBar-CMJ1K0J3.js";import"./NotificationBadge-B4lVffSV.js";import"./Pagination-BFwbi7-2.js";import"./Tab-BQ9_rzkz.js";import"./Badge-B9HL07Cl.js";import"./StatusIndicator-BQgbxK8r.js";import"./Dialog-C8WfSvBz.js";import"./Table-CUHj9whn.js";import"./TablePagination-Bs5Psl96.js";import"./Breadcrumb-Dd7ySDdN.js";import"./KPICard-B98ryrox.js";import"./SideNav-DbcaCNvq.js";import"./Tooltip-pAAHZ30J.js";import"./SideSheet-CwfCxqjK.js";import"./Popover-CMueDd6J.js";import"./Screens-5fNwi_ph.js";import"./PushNotification-DZnASMge.js";function o(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...h(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:f}),`
`,n.jsx(t.h1,{id:"toast",children:"Toast"}),`
`,n.jsx(a,{spec:"6.6",variants:"4",status:"chốt",children:n.jsx(t.p,{children:"Thanh báo ngắn ở đáy màn — báo kết quả việc người dùng vừa làm, tự tắt, không chặn thao tác."})}),`
`,n.jsx(c,{of:s}),`
`,n.jsx(l,{of:s}),`
`,n.jsx(t.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(t.p,{children:["Kết quả của một hành động vừa xong, đọc lướt là đủ (đã lưu, đã sao chép), hoặc lỗi không chặn người dùng đi tiếp (tải thêm thất bại, mất kết nối tạm thời) — kèm nút Thử lại nếu thử lại được. Lỗi nhập liệu báo tại ô, không dùng Toast. Lỗi chặn luồng hay cần người dùng quyết định → ",n.jsx(t.code,{children:"Dialog"}),". Chuyện từ bên ngoài (tin nhắn mới, đơn được giao) → ",n.jsx(t.code,{children:"CardPushNotification"}),"."]}),`
`,n.jsx(j,{of:"Toast",docPath:{CardPushNotification:"component-giao-tiếp-cardpushnotification--tài-liệu"}}),`
`,n.jsx(t.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,n.jsx(g,{parts:[{label:n.jsxs(n.Fragment,{children:["Vỏ — HORIZONTAL, padding 8/16, gap 12, bo ",n.jsx(t.code,{children:"radius-base"})," (12), bóng ",n.jsx(t.code,{children:"elevation-medium"})]})},{selector:".uu-toast__content",label:n.jsxs(n.Fragment,{children:["Content — style ",n.jsx(t.code,{children:"body"})," (400), không phải ",n.jsx(t.code,{children:"label"}),"; chiếm phần còn lại (FILL)"]})},{selector:".uu-btn:not(.uu-iconbtn)",label:n.jsxs(n.Fragment,{children:["Nút Action — ",n.jsx(t.code,{children:"TextButtonNeutral"})," Solid Base"]})},{selector:".uu-iconbtn",label:n.jsxs(n.Fragment,{children:["Nút đóng — ",n.jsx(t.code,{children:"IconButtonNeutral"})," Ghost Base, hộp 48, icon ",n.jsx(t.code,{children:"xmark"})," 24"]})}],children:n.jsx("div",{style:{width:428},children:n.jsx(i,{type:"neutral",action:{label:"Hoàn tác"},onClose:()=>{},children:"Đã lưu thay đổi"})})}),`
`,n.jsxs(t.p,{children:["Glyph ",n.jsx(t.code,{children:"xmark"})," hiện ",n.jsx(t.strong,{children:"15,3px"})," giữa hộp 24 — đúng thiết kế (xem Icon §6.11). Nếu chữ X trông to gần bằng hộp 24 hoặc chỉ khoảng 11px thì đang dùng bộ icon khác hoặc SVG bị crop."]}),`
`,n.jsx(p,{of:"Toast"}),`
`,n.jsx(t.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,n.jsx(m,{of:"Toast",code:{Type:{react:"type",flutter:"type",note:"Quyết định nền, màu chữ và Inverted của cả hai nút."}},extra:[{react:"children",flutter:"content",note:n.jsxs(n.Fragment,{children:["Thiết kế: ",n.jsx(t.code,{children:"Content"})," (TEXT)."]})},{react:"action",flutter:"actionLabel · onAction",note:n.jsxs(n.Fragment,{children:["Thiết kế: ",n.jsx(t.code,{children:"Action"})," (BOOLEAN, mặc định bật). Bỏ trống để ẩn nút."]})},{react:"onClose",flutter:"onClose",note:"Có thì hiện nút đóng."}]}),`
`,n.jsx(c,{of:C}),`
`,n.jsx(t.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,n.jsxs(t.p,{children:["Vỏ rộng 428 trên khung thiết kế, cao tối thiểu 64 (",n.jsx(t.code,{children:"size-16"}),"), HUG theo chữ. Chữ ",n.jsx(t.code,{children:"body"})," và hai nút đọc biến density nên co lại khi bật Compact; padding và gap giữ nguyên."]}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{}),n.jsx(t.th,{children:"Touch"}),n.jsx(t.th,{children:"Compact"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Cao tối thiểu"}),n.jsx(t.td,{children:"64"}),n.jsx(t.td,{children:"64"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Padding dọc / ngang · gap"}),n.jsx(t.td,{children:"8 / 16 · 12"}),n.jsx(t.td,{children:"8 / 16 · 12"})]}),n.jsxs(t.tr,{children:[n.jsxs(t.td,{children:["Chữ ",n.jsx(t.code,{children:"body"})]}),n.jsx(t.td,{children:"16/24 · 400"}),n.jsx(t.td,{children:"13/20 · 400"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Nút Action · nút đóng (Base)"}),n.jsx(t.td,{children:"48 · 48"}),n.jsx(t.td,{children:"32 · 32"})]})]})]}),`
`,n.jsx(t.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Type"}),n.jsx(t.th,{children:"Nền"}),n.jsx(t.th,{children:"Content"}),n.jsx(t.th,{children:"Nút Action"}),n.jsx(t.th,{children:"Nút đóng"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"Neutral"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"background-inverted"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"object-primary-inverted"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"Inverted=True"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"Inverted=True"})})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"Negative"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"background-negative"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"object-on-negative"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"Inverted=True"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"Inverted=True"})})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"Positive"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"background-positive"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"object-on-positive"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"Inverted=True"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"Inverted=True"})})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:n.jsx(t.code,{children:"Warning"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"background-warning"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"object-on-warning"})}),n.jsx(t.td,{children:n.jsx(t.strong,{children:n.jsx(t.code,{children:"Inverted=False"})})}),n.jsx(t.td,{children:n.jsx(t.strong,{children:n.jsx(t.code,{children:"Inverted=False"})})})]})]})]}),`
`,n.jsxs(t.p,{children:["Quy tắc: ",n.jsx(t.strong,{children:"độ sáng của nền quyết định cả ba phần tử cùng lúc."})," ",n.jsx(t.code,{children:"background-warning"})," là nền vàng sáng nên content, nút Action và nút đóng đều lật sang tối; ba type kia nền tối nên cả ba đều sáng. Thêm type mới thì áp đúng quy tắc này, không ngoại lệ. Bốn type thuộc họ status, không đổi theo brand."]}),`
`,n.jsx(x,{type:"info",title:"Contrast đã đo",children:n.jsxs(t.p,{children:["WCAG AA, ngưỡng 4.5 cho chữ thường: Neutral ",n.jsx(t.strong,{children:"21.00"})," · Negative ",n.jsx(t.strong,{children:"4.83"})," · Positive ",n.jsx(t.strong,{children:"5.02"})," · Warning ",n.jsx(t.strong,{children:"15.93"})," — cả bốn đều đạt."]})}),`
`,n.jsx(b,{caption:"Warning nền sáng: cả content lẫn hai nút lật sang tối.",children:n.jsxs(v,{cols:2,children:[n.jsx(r,{title:"Nền tối — Inverted=True",children:n.jsx(i,{type:"positive",action:{label:"Xem"},onClose:()=>{},children:"Thanh toán thành công"})}),n.jsx(r,{title:"Nền sáng — Inverted=False",children:n.jsx(i,{type:"warning",action:{label:"Cập nhật"},onClose:()=>{},children:"Phiên bản này sắp ngừng hỗ trợ"})})]})}),`
`,n.jsx(t.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Toast nằm ở ",n.jsx(t.strong,{children:"đáy"})," màn và ",n.jsx(t.strong,{children:"tự tắt"})," — vì vậy không dùng cho lỗi chặn luồng hay lỗi nhập (sai mã OTP, checkbox bắt buộc)."]}),`
`,n.jsx(t.li,{children:"Nút Action làm một việc gắn với kết quả vừa báo (Hoàn tác, Xem, Thử lại); bấm xong đóng toast."}),`
`,n.jsx(t.li,{children:"Nút đóng cho người dùng tắt sớm."}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Vị trí"}),": lề trái / phải 12; đáy toast cách ",n.jsx(t.strong,{children:"12"}),` so với mép cao nhất trong ba mép — đáy safe area, mép trên
`,n.jsx(t.code,{children:"BottomBar"}),", mép trên bàn phím đang mở. Toast không bao giờ đè lên thanh điều hướng.",`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Web: app tự đặt toast (",n.jsx(t.code,{children:"position: fixed"}),"), tính ",n.jsx(t.code,{children:"bottom"})," theo quy tắc trên."]}),`
`,n.jsxs(t.li,{children:["React Native: ",n.jsx(t.code,{children:"showUuToast"})," + ",n.jsx(t.code,{children:"<UuFeedbackHost />"})," tự làm — ",n.jsx(t.code,{children:"UuBottomBar"})," báo mép trên cho host, host nghe bàn phím."]}),`
`,n.jsxs(t.li,{children:["Flutter: ",n.jsx(t.code,{children:"showUuToast"})," hiện qua ",n.jsx(t.code,{children:"ScaffoldMessenger"}),"; đặt ",n.jsx(t.code,{children:"UuBottomBar"})," ở ",n.jsx(t.code,{children:"Scaffold.bottomNavigationBar"}),` thì
toast tự nổi trên thanh và trên bàn phím.`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(t.h2,{id:"truy-cập",children:"Truy cập"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"Negative"})," mang ",n.jsx(t.code,{children:'role="alert"'})," (đọc ngay); ba type kia ",n.jsx(t.code,{children:'role="status"'})," (đọc lịch sự, không cắt ngang). Flutter dùng ",n.jsx(t.code,{children:"liveRegion"}),"."]}),`
`,n.jsx(t.li,{children:'Nút đóng có nhãn "Đóng" cho trình đọc màn hình; Tab tới được cả nút Action và nút đóng.'}),`
`,n.jsx(t.li,{children:'Type không chỉ dựa vào màu: nội dung chữ phải tự nói kết quả ("Thanh toán thành công", "Không thể kết nối").'}),`
`]}),`
`,n.jsx(t.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,n.jsxs(y,{children:[n.jsx(T,{reason:"Báo kết quả vừa làm, kèm một hành động gắn với nó.",children:n.jsx(i,{type:"neutral",action:{label:"Hoàn tác"},onClose:()=>{},children:"Đã xoá khỏi giỏ hàng"})}),n.jsx(k,{reason:"Lỗi nhập liệu — báo ngay tại ô, Toast tự tắt sẽ làm mất lỗi.",children:n.jsx(i,{type:"negative",onClose:()=>{},children:"Mã OTP không đúng"})})]}),`
`,n.jsx(u,{of:"Toast"}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { Toast } from 'uu-ds';

<Toast type="positive" action={{ label: 'Xem', onClick: view }} onClose={dismiss}>
  Thanh toán thành công
</Toast>
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

showUuToast(
  context,
  content: 'Thanh toán thành công',
  type: UuToastType.positive,
  actionLabel: 'Xem',
  onAction: view,
);
`})})]})}function yn(e={}){const{wrapper:t}={...h(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{yn as default};

import{j as n}from"./iframe-6vwN6wb9.js";import{useMDXComponents as x}from"./index-Dlv2haGb.js";import{M as j,C as i,a as g}from"./blocks-BSM2G-rt.js";import{D as b}from"./DocHeader-dH8kDqoR.js";import{W as m,A as u,P as d,R as h}from"./ComponentDoc-C2Azonyj.js";import{D as s,a,b as r}from"./Diagram-DvRZpORS.js";import{D as p,a as v,b as f}from"./DoDont-D-pRqbc4.js";import{T as c}from"./Tab-K04RKmz4.js";import{S as k,P as l,M as T,B as y,a as B,I as C,T as A,b as D}from"./Tab.stories-CM45zQ57.js";import"./preload-helper-Dp1pzeXC.js";import"./ontology-B4dEuYV1.js";import"./ToggleButton-iGf9GL8G.js";import"./SegmentedControl-D9DnLaT0.js";import"./FieldLabel-VR6C5pFb.js";import"./TextInput-Bbz922PW.js";/* empty css              */import"./TextArea-fHkKRPcE.js";import"./OTPInput-Bd2cl4Ac.js";import"./SearchInput-DzxMgUfj.js";import"./BottomSheet-B8yp7CjB.js";import"./ButtonGroup-CnZk1waj.js";/* empty css                    */import"./Checkbox-DddgjZL9.js";/* empty css                 */import"./MenuAnchor-ChH55Pgk.js";import"./DateInput-DLzwF2tb.js";import"./Dropdown-L1BYtwtq.js";import"./Radio-W97mCUrY.js";import"./Switch-C5m2-2AJ.js";import"./Chip-Ccfh2xHF.js";import"./NavigationBar-BCULj685.js";import"./BottomBar-Br4VW-mZ.js";import"./NotificationBadge-jzC0_jUT.js";import"./Pagination-BSd13NVq.js";import"./Badge-CXod6T9Q.js";import"./StatusIndicator-rzhX9CGL.js";import"./Dialog-tjliKjBx.js";import"./Table-BvooIirA.js";import"./TablePagination-BKcELBeQ.js";import"./Breadcrumb-BEYmB8Lw.js";import"./KPICard-FvizH_ip.js";import"./SideNav-kBOfiGsC.js";import"./Tooltip-CyR_aW_m.js";import"./SideSheet-k9L0u7Lk.js";import"./Popover-BzmQmVHo.js";import"./Screens-Dq_t4rvF.js";import"./PushNotification-CPD3vDle.js";import"./layout-nPJ89kCs.js";function o(t){const e={a:"a",b:"b",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...x(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(j,{of:k}),`
`,n.jsx(e.h1,{id:"tab",children:"Tab"}),`
`,n.jsx(b,{spec:"6.20",variants:"5 (+ TabBar 2)",status:"chốt",children:n.jsxs(e.p,{children:["Mục chuyển giữa các ",n.jsx(e.strong,{children:"vùng nội dung khác nhau"})," — hàng tab ",n.jsx(e.code,{children:"TabBar"})," đặt trên đầu vùng, mỗi tab mở một vùng có bố cục riêng."]})}),`
`,n.jsx(i,{of:l}),`
`,n.jsx(g,{of:l}),`
`,n.jsx(e.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(e.p,{children:["Tab, ",n.jsx(e.code,{children:"Chip"})," lọc và ",n.jsx(e.code,{children:"SegmentedControl"})," trông na ná nhưng nói ba chuyện khác nhau. Hỏi: ",n.jsx(e.strong,{children:"bấm sang mục kế bên, khung bên dưới có còn là cùng một thứ không?"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Là một vùng nội dung khác, bố cục khác → ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"Tab"})}),"."]}),`
`,n.jsxs(e.li,{children:["Vẫn là danh sách đó, chỉ ít mục đi → ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"Chip"})})," lọc."]}),`
`,n.jsxs(e.li,{children:["Vẫn là cùng nội dung, chỉ đổi cách xem hoặc phạm vi → ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"SegmentedControl"})}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Chi tiết và các dấu hiệu nhận biết ở ",n.jsx(e.a,{href:"?path=/docs/n%E1%BB%81n-t%E1%BA%A3ng-c%C3%A2y-quy%E1%BA%BFt-%C4%91%E1%BB%8Bnh-ph%C3%A2n-lo%E1%BA%A1i-n%E1%BB%99i-dung--t%C3%A0i-li%E1%BB%87u",children:"Cây quyết định — Phân loại nội dung"}),". Không có ",n.jsx(e.code,{children:"TabBar"})," trên nền tối."]}),`
`,n.jsx(m,{of:"Tab",docPath:{Chip:"component-lựa-chọn-chip--tài-liệu",SegmentedControl:"component-lựa-chọn-segmentedcontrol--tài-liệu"}}),`
`,n.jsx(e.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,n.jsxs(u,{parts:[{label:n.jsx(n.Fragment,{children:"Ô tab — dọc, padding 12 cả bốn phía, không vỏ, không nền, không viền; state layer phủ cả ô"})},{selector:".uu-tab__icon",label:n.jsxs(n.Fragment,{children:["Icon 16 (tuỳ chọn) — trước chữ, cách 8, cùng màu chữ; Active kiểu ",n.jsx(e.code,{children:"fill"}),", còn lại ",n.jsx(e.code,{children:"outline"})]})},{selector:".uu-tab__label",label:n.jsxs(n.Fragment,{children:["Nhãn — style ",n.jsx(e.code,{children:"title-base"})," 600, một dòng"]})},{selector:".uu-tab__badge",label:n.jsxs(n.Fragment,{children:[n.jsx(e.code,{children:"NotificationBadge"})," Dot (tuỳ chọn) — sau chữ, cách 4: mục có nội dung mới chưa xem"]})},{selector:".uu-tab__indicator",label:n.jsxs(n.Fragment,{children:["Gạch chỉ báo 32 × 4 ",n.jsx(e.code,{children:"border-interactive"})," — chỉ tab Active, tâm nằm đúng mép đáy"]})}],children:[n.jsx(c,{active:!0,icon:"gift",children:"Ưu đãi"}),n.jsx(c,{icon:"ticket",badge:!0,children:"Vé"})]}),`
`,n.jsx(e.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,n.jsx(e.h3,{id:"tab-1",children:"Tab"}),`
`,n.jsx(d,{of:"Tab",props:{State:["Default","Active","Hover","Pressed","Disabled"],Tab:["TEXT"],Icon:["False","True"],Badge:["False","True"]},code:{State:{react:"active · disabled · state",flutter:"active · disabled · forced",note:n.jsxs(n.Fragment,{children:["Hover / Pressed tự có khi tương tác, chỉ ở tab ",n.jsx(e.b,{children:"không Active"})," — tab đang chọn bấm lại không làm gì. ",n.jsx(e.code,{children:"state"})," / ",n.jsx(e.code,{children:"forced"})," chỉ để ép hình khi chụp docs."]})},Tab:{react:"children",flutter:"label",note:"Nhãn một dòng, không xuống dòng."},Icon:{react:"icon",flutter:"icon",note:n.jsxs(n.Fragment,{children:["Tên UU icon 16 trước chữ. Tab tự đổi ",n.jsx(e.code,{children:"outline"})," → ",n.jsx(e.code,{children:"fill"})," khi Active."]})},Badge:{react:"badge",flutter:"badge",note:n.jsx(n.Fragment,{children:'Dot "có mới" sau chữ. Nhãn tab vẫn phải tự đủ nghĩa.'})}}}),`
`,n.jsx(i,{of:T}),`
`,n.jsx(e.h3,{id:"tabbar",children:"TabBar"}),`
`,n.jsx(d,{of:"TabBar",code:{Layout:{react:"layout",flutter:"layout",note:n.jsxs(n.Fragment,{children:[n.jsx(e.code,{children:"fixed"})," (mặc định) — 2–4 tab nhãn ngắn, tab chia đều bề ngang. ",n.jsx(e.code,{children:"scrollable"})," — ≥ 5 tab hoặc nhãn dài: tab hug, cuộn ngang, padding trái 16 (",n.jsx(e.code,{children:"gap-4"}),"), cắt mép phải."]})}},extra:[{react:"items",flutter:"items",note:n.jsxs(n.Fragment,{children:["Mỗi mục: ",n.jsx(e.code,{children:"value"}),", ",n.jsx(e.code,{children:"label"}),", ",n.jsx(e.code,{children:"disabled"}),", ",n.jsx(e.code,{children:"icon"}),", ",n.jsx(e.code,{children:"badge"})," — icon / badge truyền thẳng cho từng tab."]})},{react:"value · onChange",flutter:"value · onChanged",note:"Tab đang chọn và hàm đổi tab. Thanh không tự giữ trạng thái."}]}),`
`,n.jsx(i,{of:y}),`
`,n.jsx(i,{of:B}),`
`,n.jsx(e.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,n.jsxs(e.p,{children:["Ô tab cao bằng padding hai đầu cộng một dòng chữ. Icon và badge nằm trong dòng chữ nên ",n.jsx(e.strong,{children:"không làm tab cao thêm"}),"."]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{}),n.jsx(e.th,{children:"Touch"}),n.jsx(e.th,{children:"Compact"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Cao"}),n.jsx(e.td,{children:"48"}),n.jsx(e.td,{children:"36"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Padding (",n.jsx(e.code,{children:"tab/padding"}),")"]}),n.jsx(e.td,{children:"12"}),n.jsx(e.td,{children:"8"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Chữ ",n.jsx(e.code,{children:"title-base"})]}),n.jsx(e.td,{children:"16/24 · 600"}),n.jsx(e.td,{children:"13/20 · 600"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Icon · gap tới chữ"}),n.jsx(e.td,{children:"16 · 8"}),n.jsx(e.td,{children:"16 · 8"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Dot · gap từ chữ"}),n.jsx(e.td,{children:"8 · 4"}),n.jsx(e.td,{children:"8 · 4"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Gạch chỉ báo"}),n.jsx(e.td,{children:"32 × 4"}),n.jsx(e.td,{children:"32 × 4"})]})]})]}),`
`,n.jsx(s,{caption:"Cùng một hàng tab ở hai density — component không đổi, chỉ biến density đổi.",children:n.jsxs(a,{cols:2,children:[n.jsxs(r,{title:"Touch",density:"touch",children:[n.jsx(c,{active:!0,icon:"gift",children:"Ưu đãi"}),n.jsx(c,{icon:"ticket",badge:!0,children:"Vé"})]}),n.jsxs(r,{title:"Compact",density:"compact",children:[n.jsx(c,{active:!0,icon:"gift",children:"Ưu đãi"}),n.jsx(c,{icon:"ticket",badge:!0,children:"Vé"})]})]})}),`
`,n.jsxs(e.p,{children:["Gạch chỉ báo ",n.jsx(e.strong,{children:"rộng cố định 32"}),", canh giữa theo chiều ngang, tâm nằm đúng mép đáy nên thò xuống 2px. Nhãn dài mấy thì gạch vẫn 32 — đừng kéo cho bằng chữ."]}),`
`,n.jsx(i,{of:C}),`
`,n.jsx(e.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"State"}),n.jsx(e.th,{children:"Chữ · icon"}),n.jsx(e.th,{children:"Gạch chỉ báo"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Default"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"title-base"})," 16/24 ",n.jsx(e.strong,{children:"600"})," · ",n.jsx(e.code,{children:"object-secondary"})," · icon ",n.jsx(e.code,{children:"outline"})]}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Active"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"title-base"})," 16/24 600 · ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"object-interactive"})})," · icon ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"fill"})})]}),n.jsxs(e.td,{children:[n.jsx(e.strong,{children:"32 × 4"})," bo tròn hai đầu · ",n.jsx(e.code,{children:"border-interactive"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Hover / Pressed"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"object-secondary"})}),n.jsxs(e.td,{children:["— · state layer ",n.jsx(e.code,{children:"object-primary"})," 5% / 10% phủ cả ô tab, radius ",n.jsx(e.code,{children:"radius-sm"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disabled"}),n.jsx(e.td,{children:n.jsx(e.strong,{children:n.jsx(e.code,{children:"object-disabled"})})}),n.jsx(e.td,{children:"— · không state layer"})]})]})]}),`
`,n.jsxs(e.p,{children:["Dot của badge luôn nền ",n.jsx(e.code,{children:"background-attention"}),' (họ "có mới, chưa xem"), không đổi theo state.']}),`
`,n.jsxs(e.p,{children:["Cả chữ lẫn gạch của ",n.jsx(e.code,{children:"Active"})," đều thuộc họ ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"interactive"})}),", nên cùng đổi theo ",n.jsx(e.a,{href:"?path=/docs/n%E1%BB%81n-t%E1%BA%A3ng-brand-mode--t%C3%A0i-li%E1%BB%87u",children:"brand mode"})," — chữ luôn đậm hơn gạch một bậc (hiện ",n.jsx(e.code,{children:"indigo-60"})," / ",n.jsx(e.code,{children:"indigo-50"}),"). Tab là thứ bấm được nên đi họ ",n.jsx(e.code,{children:"interactive"})," giống nút và link, không dùng ",n.jsx(e.code,{children:"accent"}),": một brand có ",n.jsx(e.code,{children:"accent"})," khác ",n.jsx(e.code,{children:"interactive"})," sẽ ra chữ một màu, gạch một màu."]}),`
`,n.jsx(s,{caption:"Tab Active ở hai brand: component giữ nguyên, token interactive đổi.",children:n.jsxs(a,{cols:2,children:[n.jsxs(r,{title:"Default",theme:"default",children:[n.jsx(c,{active:!0,icon:"gift",children:"Ưu đãi"}),n.jsx(c,{icon:"ticket",children:"Vé"})]}),n.jsxs(r,{title:"UU",theme:"uu",children:[n.jsx(c,{active:!0,icon:"gift",children:"Ưu đãi"}),n.jsx(c,{icon:"ticket",children:"Vé"})]})]})}),`
`,n.jsx(e.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"TabBar"})," xếp các ",n.jsx(e.code,{children:"Tab"}),": HORIZONTAL · ",n.jsx(e.strong,{children:"gap 0"})," · không nền · ",n.jsxs(e.strong,{children:["viền dưới 1px ",n.jsx(e.code,{children:"border-muted"})," chạy suốt"]}),"; gạch Active (4px) đè lên viền."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Bấm tab khác → đổi vùng nội dung. Bấm lại tab đang chọn không làm gì."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"scrollable"}),': tab Active tự cuộn vào tầm nhìn khi đổi tab (mở story là tab "Chính sách huỷ phòng" đã được kéo vào).']}),`
`,n.jsx(e.li,{children:"Badge báo vùng có nội dung mới chưa xem; màn tự tắt badge khi người dùng đã mở tab đó."}),`
`]}),`
`,n.jsx(i,{of:A}),`
`,n.jsx(i,{of:D}),`
`,n.jsx(e.h2,{id:"truy-cập",children:"Truy cập"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"TabBar"})," là ",n.jsx(e.code,{children:'role="tablist"'})," có ",n.jsx(e.code,{children:"aria-label"}),"; mỗi tab là ",n.jsx(e.code,{children:'<button role="tab">'})," mang ",n.jsx(e.code,{children:"aria-selected"}),". Chỉ tab Active nằm trong thứ tự Tab của trang."]}),`
`,n.jsxs(e.li,{children:["Bàn phím: mũi tên trái / phải chuyển tab, Home / End tới tab đầu / cuối, bỏ qua tab Disabled. Vòng focus 2px ",n.jsx(e.code,{children:"border-emphasized"}),"."]}),`
`,n.jsxs(e.li,{children:["Tab Active không chỉ dựa vào màu: có gạch chỉ báo, và icon đổi sang kiểu ",n.jsx(e.code,{children:"fill"}),"."]}),`
`,n.jsxs(e.li,{children:["Badge kèm chữ ẩn ",n.jsx(e.strong,{children:'"có mới"'})," cho screen reader; chấm màu không phải nguồn thông tin duy nhất. Icon là trang trí (",n.jsx(e.code,{children:"aria-hidden"}),"), nhãn chữ mang tên tab."]}),`
`]}),`
`,n.jsx(e.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,n.jsxs(p,{children:[n.jsx(v,{hug:!0,reason:"Nhãn tự đủ nghĩa; badge chỉ báo thêm là có mới.",children:n.jsxs("div",{style:{display:"flex"},children:[n.jsx(c,{active:!0,children:"Ưu đãi"}),n.jsx(c,{badge:!0,children:"Vé của tôi"})]})}),n.jsx(f,{hug:!0,reason:"Icon không chữ, dựa vào badge để nói nghĩa — tab phải có nhãn.",children:n.jsxs("div",{style:{display:"flex"},children:[n.jsx(c,{active:!0,icon:"gift"}),n.jsx(c,{icon:"ticket",badge:!0})]})})]}),`
`,n.jsx(h,{of:"Tab"}),`
`,n.jsx(h,{of:"TabBar"}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { TabBar } from 'uu-ds';

<TabBar
  layout="fixed" value={tab} onChange={setTab} aria-label="Ví của tôi"
  items={[
    { value: 'uu-dai', label: 'Ưu đãi', icon: 'gift' },
    { value: 've', label: 'Vé', icon: 'ticket', badge: hasNewTicket },
  ]}
/>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

UuTabBar<String>(
  value: tab,
  onChanged: (v) => setState(() => tab = v),
  items: [
    const UuTabItem(value: 'uu-dai', label: 'Ưu đãi', icon: 'gift'),
    UuTabItem(value: 've', label: 'Vé', icon: 'ticket', badge: hasNewTicket),
  ],
);
`})})]})}function yn(t={}){const{wrapper:e}={...x(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{yn as default};

import{j as n,I as l}from"./iframe-6vwN6wb9.js";import{useMDXComponents as s}from"./index-Dlv2haGb.js";import{M as a,C as t,a as o}from"./blocks-BSM2G-rt.js";import{D as m}from"./DocHeader-dH8kDqoR.js";import{W as x,A as j,P as u,R as g}from"./ComponentDoc-C2Azonyj.js";import{D as p,a as b,b as i}from"./Diagram-DvRZpORS.js";import{D as f,a as v,b as B}from"./DoDont-D-pRqbc4.js";import{B as c}from"./Breadcrumb-BEYmB8Lw.js";import{S as y,P as h,M as C,D as T,C as k}from"./Breadcrumb.stories-DOYmAZ2P.js";import"./preload-helper-Dp1pzeXC.js";import"./ontology-B4dEuYV1.js";import"./ToggleButton-iGf9GL8G.js";import"./SegmentedControl-D9DnLaT0.js";import"./FieldLabel-VR6C5pFb.js";import"./TextInput-Bbz922PW.js";/* empty css              */import"./TextArea-fHkKRPcE.js";import"./OTPInput-Bd2cl4Ac.js";import"./SearchInput-DzxMgUfj.js";import"./BottomSheet-B8yp7CjB.js";import"./ButtonGroup-CnZk1waj.js";/* empty css                    */import"./Checkbox-DddgjZL9.js";/* empty css                 */import"./MenuAnchor-ChH55Pgk.js";import"./DateInput-DLzwF2tb.js";import"./Dropdown-L1BYtwtq.js";import"./Radio-W97mCUrY.js";import"./Switch-C5m2-2AJ.js";import"./Chip-Ccfh2xHF.js";import"./NavigationBar-BCULj685.js";import"./BottomBar-Br4VW-mZ.js";import"./NotificationBadge-jzC0_jUT.js";import"./Pagination-BSd13NVq.js";import"./Tab-K04RKmz4.js";import"./Badge-CXod6T9Q.js";import"./StatusIndicator-rzhX9CGL.js";import"./Dialog-tjliKjBx.js";import"./Table-BvooIirA.js";import"./TablePagination-BKcELBeQ.js";import"./KPICard-FvizH_ip.js";import"./SideNav-kBOfiGsC.js";import"./Tooltip-CyR_aW_m.js";import"./SideSheet-k9L0u7Lk.js";import"./Popover-BzmQmVHo.js";import"./Screens-Dq_t4rvF.js";import"./PushNotification-CPD3vDle.js";import"./layout-nPJ89kCs.js";function d(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:y}),`
`,n.jsx(e.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,n.jsx(m,{spec:"6.25",variants:"1 (+ .BreadcrumbItem 5)",status:"chốt",children:n.jsxs(e.p,{children:["Đường dẫn vị trí trong cây trang, cho màn ",n.jsx(e.strong,{children:"desktop"})," — cho biết đang ở đâu và bấm để lùi về cấp trên."]})}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(e.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Web app, portal, dashboard trên desktop: chỉ ",n.jsx(e.strong,{children:"vị trí trong cây trang"})," → ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"Breadcrumb"})}),"."]}),`
`,n.jsxs(e.li,{children:["App mobile: thanh trên cùng có nút quay lại và tiêu đề màn → ",n.jsx(e.a,{href:"?path=/docs/component-%C4%91i%E1%BB%81u-h%C6%B0%E1%BB%9Bng-navigationbar--t%C3%A0i-li%E1%BB%87u",children:n.jsx(e.code,{children:"NavigationBar"})}),". Không dùng Breadcrumb thay ",n.jsx(e.code,{children:"NavigationBar"})," trên app."]}),`
`]}),`
`,n.jsx(x,{of:"Breadcrumb",docPath:{NavigationBar:"component-điều-hướng-navigationbar--tài-liệu"}}),`
`,n.jsx(e.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,n.jsx(j,{parts:[{label:n.jsxs(n.Fragment,{children:["Thanh — ",n.jsx(e.code,{children:"<nav>"})," chứa danh sách ",n.jsx(e.code,{children:"<ol>"}),", ngang, gap 4, căn giữa dọc"]})},{selector:".uu-breadcrumb__link",label:n.jsxs(n.Fragment,{children:["Mục — link, padding ngang 4, ",n.jsx(e.code,{children:"body"})," ",n.jsx(e.code,{children:"object-secondary"})]})},{selector:".uu-breadcrumb__separator",label:n.jsxs(n.Fragment,{children:['Ngăn cách "/" — ',n.jsx(e.code,{children:"body"})," ",n.jsx(e.code,{children:"object-disabled"}),", ẩn với screen reader"]})},{selector:".uu-breadcrumb__overflow",label:n.jsxs(n.Fragment,{children:["Mục ",n.jsx(e.code,{children:"Type=Overflow"}),' "…" — chỉ khi quá 4 mục, bấm mở danh sách mục ẩn']})},{selector:'[aria-current="page"]',label:n.jsxs(n.Fragment,{children:["Mục cuối — trang hiện tại, ",n.jsx(e.code,{children:"object-primary"}),", không phải link"]})}],children:n.jsx(c,{"aria-label":"Mẫu cấu trúc",onNavigate:()=>{},items:[{label:"Trang chủ",href:"#"},{label:"Bán hàng",href:"#"},{label:"Chi nhánh",href:"#"},{label:"Đơn hàng",href:"#"},{label:"DH-1024"}]})}),`
`,n.jsx(e.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Breadcrumb"})," có 1 variant. Mục ",n.jsx(e.code,{children:".BreadcrumbItem"})," là component nội bộ, chỉ dùng bên trong ",n.jsx(e.code,{children:"Breadcrumb"}),": ",n.jsx(e.code,{children:"Current=False"})," × ",n.jsx(e.code,{children:"State"})," (Default · Hover), ",n.jsx(e.code,{children:"Current=True"})," (không Hover vì không bấm được), và ",n.jsx(e.code,{children:"Type=Overflow"})," × ",n.jsx(e.code,{children:"State"}),"."]}),`
`,n.jsx(u,{of:".BreadcrumbItem",props:{Label:["TEXT"],Current:["False","True"],State:["Default","Hover"],Type:["Overflow"]},code:{Label:{react:"items[].label",flutter:"UuBreadcrumbItem(label)"},Current:{react:"(tự tính)",flutter:"(tự tính)",note:"Mục cuối luôn là trang hiện tại — không cần truyền."},State:{react:"state",flutter:"forced",note:"Hover tự có khi rê chuột; chỉ ép khi chụp docs."},Type:{react:"(tự tính)",flutter:"(tự tính)",note:n.jsxs(n.Fragment,{children:['Quá 4 mục thì thanh tự gom các mục giữa vào một mục "…" (',n.jsx(e.code,{children:"BreadcrumbOverflow"})," / ",n.jsx(e.code,{children:"UuBreadcrumbOverflow"}),")."]})}},extra:[{react:"items[].href · items[].onClick",flutter:"UuBreadcrumbItem(onTap)",note:n.jsxs(n.Fragment,{children:["Đích của mục; mục cuối bỏ qua. Router phía client: truyền ",n.jsx(e.code,{children:"onClick"}),", chặn điều hướng mặc định rồi tự chuyển trang."]})},{react:"onNavigate",flutter:"—",note:n.jsxs(n.Fragment,{children:['Chọn một mục trong menu "…". Bỏ trống: chuyển trang tới ',n.jsx(e.code,{children:"href"})," của mục. Flutter gọi ",n.jsx(e.code,{children:"onTap"})," của mục đó."]})}]}),`
`,n.jsx(t,{of:C}),`
`,n.jsx(e.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,n.jsxs(e.p,{children:["Breadcrumb không có số riêng theo density — chỉ cỡ chữ ",n.jsx(e.code,{children:"body"})," đổi."]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{}),n.jsx(e.th,{children:"Touch"}),n.jsx(e.th,{children:"Compact"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Chữ ",n.jsx(e.code,{children:"body"})]}),n.jsx(e.td,{children:"16/24"}),n.jsx(e.td,{children:"13/20"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Gap thanh · padding ngang mục"}),n.jsx(e.td,{children:"4 · 4"}),n.jsx(e.td,{children:"4 · 4"})]})]})]}),`
`,n.jsx(p,{caption:"Cùng một đường dẫn ở hai density.",children:n.jsxs(b,{cols:2,children:[n.jsx(i,{title:"Touch",density:"touch",children:n.jsx(c,{"aria-label":"Touch",items:[{label:"Trang chủ",href:"#"},{label:"Đơn hàng",href:"#"},{label:"DH-1024"}]})}),n.jsx(i,{title:"Compact",density:"compact",children:n.jsx(c,{"aria-label":"Compact",items:[{label:"Trang chủ",href:"#"},{label:"Đơn hàng",href:"#"},{label:"DH-1024"}]})})]})}),`
`,n.jsx(t,{of:T}),`
`,n.jsx(e.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Phần"}),n.jsx(e.th,{children:"Giá trị"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Mục (",n.jsx(e.code,{children:"Current=False"}),")"]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"body"})," ",n.jsx(e.code,{children:"object-secondary"})," · ",n.jsx(e.code,{children:"radius-sm"})," · là link"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Hover"})}),n.jsxs(e.td,{children:["state layer ",n.jsx(e.code,{children:"object-primary"})," · ",n.jsx(e.code,{children:"opacity-5"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Current=True"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"object-primary"})," · không phải link · không Hover"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Type=Overflow"})}),n.jsxs(e.td,{children:['"…" ',n.jsx(e.code,{children:"body"})," ",n.jsx(e.code,{children:"object-secondary"})," · Hover như mục thường"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Ngăn cách"}),n.jsxs(e.td,{children:['"/" ',n.jsx(e.code,{children:"body"})," ",n.jsx(e.code,{children:"object-disabled"})]})]})]})]}),`
`,n.jsx(e.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsx(e.p,{children:"Mục cuối luôn là trang hiện tại. Mục đầu là chữ như mọi mục — không đặt icon trước mục đầu."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Rút gọn"})," khi đường dẫn ",n.jsx(e.strong,{children:"quá 4 mục"}),": giữ mục đầu và ",n.jsx(e.strong,{children:"2 mục cuối"}),", các mục giữa gom vào ",n.jsx(e.strong,{children:"một"}),' mục "…". Ví dụ 6 mục: ',n.jsx(e.code,{children:"Trang chủ / … / Đơn hàng / DH-1024"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:['Bấm "…" mở ',n.jsx(e.a,{href:"?path=/docs/component-l%E1%BB%B1a-ch%E1%BB%8Dn-menu--t%C3%A0i-li%E1%BB%87u",children:n.jsx(e.code,{children:"Menu"})})," ",n.jsx(e.code,{children:'platform="panel"'}),' neo dưới "…", cách 4, canh mép trái, rộng tối thiểu 240 — liệt kê các mục bị ẩn theo thứ tự từ trên xuống.']}),`
`,n.jsx(e.li,{children:'Chọn một mục là đi tới trang đó; menu đóng. Bấm ra ngoài hoặc Esc cũng đóng (Esc trả focus về "…").'}),`
`]}),`
`,n.jsx(t,{of:k}),`
`,n.jsx(e.h2,{id:"truy-cập",children:"Truy cập"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Cả thanh nằm trong ",n.jsx(e.code,{children:'<nav aria-label="Đường dẫn">'})," với danh sách ",n.jsx(e.code,{children:"<ol>"}),". Mỗi mục là một thẻ ",n.jsx(e.code,{children:"<a>"}),"; mục cuối là ",n.jsx(e.code,{children:'<span aria-current="page">'}),", không có link."]}),`
`,n.jsxs(e.li,{children:['Ngăn cách "/" mang ',n.jsx(e.code,{children:"aria-hidden"})," — screen reader chỉ đọc tên các mục."]}),`
`,n.jsxs(e.li,{children:['Mục "…" là ',n.jsx(e.code,{children:"<button>"})," có ",n.jsx(e.code,{children:'aria-label="Hiện đường dẫn ẩn"'}),", ",n.jsx(e.code,{children:'aria-haspopup="menu"'})," và ",n.jsx(e.code,{children:"aria-expanded"})," theo trạng thái menu."]}),`
`,n.jsxs(e.li,{children:["Bàn phím: Tab qua từng mục, Enter để đi tới. Vòng focus 2px ",n.jsx(e.code,{children:"border-emphasized"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,n.jsxs(f,{children:[n.jsx(v,{hug:!0,reason:"Mục đầu là chữ, mục cuối là trang hiện tại.",children:n.jsx(c,{"aria-label":"Nên",items:[{label:"Trang chủ",href:"#"},{label:"Đơn hàng",href:"#"},{label:"DH-1024"}]})}),n.jsx(B,{hug:!0,reason:"Icon trước mục đầu — mục đầu là chữ như mọi mục.",children:n.jsx(c,{"aria-label":"Không nên",items:[{label:n.jsxs(n.Fragment,{children:[n.jsx(l,{name:"house",size:16})," Trang chủ"]}),href:"#"},{label:"Đơn hàng",href:"#"},{label:"DH-1024"}]})})]}),`
`,n.jsx(g,{of:"Breadcrumb"}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Breadcrumb } from 'uu-ds';

<Breadcrumb
  items={[
    { label: 'Trang chủ', href: '/' },
    { label: 'Đơn hàng', href: '/don-hang' },
    { label: 'DH-1024' },
  ]}
  // Router phía client: chọn mục trong menu "…" thì tự chuyển trang.
  onNavigate={(it) => navigate(it.href!)}
/>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

UuBreadcrumb(items: [
  UuBreadcrumbItem('Trang chủ', onTap: () => context.go('/')),
  UuBreadcrumbItem('Đơn hàng', onTap: () => context.go('/don-hang')),
  const UuBreadcrumbItem('DH-1024'),
]);
`})})]})}function Bn(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(d,{...r})}):d(r)}export{Bn as default};

import{j as n}from"./iframe-CG-Y5hsd.js";import{useMDXComponents as j}from"./index-CVUEVmKS.js";import{M as g,C as t,a as m}from"./blocks-D2cnkhGo.js";import{D as p}from"./DocHeader-BgJx4i0K.js";import{W as s,A as d,R as u,P as h,a as c}from"./ComponentDoc-ChTbiHqT.js";import{D as y,a as b,b as l}from"./Diagram-B82j7izf.js";import{D as S,a as E,b as f}from"./DoDont-MBem1xB6.js";import{R as v,E as i}from"./Screens-DZbvmQH8.js";import{S as T,P as a,a as k,M as B,R as C,E as F,b as R,c as D}from"./Screens.stories-CNQ_9-WU.js";import"./preload-helper-Dp1pzeXC.js";import"./ontology-BbLAC_QR.js";import"./ToggleButton-C3H64sN2.js";import"./SegmentedControl-aqOw1w3f.js";import"./FieldLabel-Bxk2s4xW.js";import"./TextInput-DrXrQn3f.js";/* empty css              */import"./TextArea-DgLxuDGl.js";import"./OTPInput-mkdh_1rA.js";import"./SearchInput-DoUGOyBZ.js";import"./BottomSheet-CXrU_Uw6.js";import"./ButtonGroup-qLs_Nnzl.js";/* empty css                    */import"./Checkbox-DvmybSW6.js";/* empty css                 */import"./MenuAnchor-vq2R3GG3.js";import"./DateInput-yf7BOUsF.js";import"./Dropdown-DAc5XYn4.js";import"./Radio-DEaAKEc5.js";import"./Switch-C1nAj1He.js";import"./ListItem-kxD-lzpP.js";import"./Chip-BfraEOvd.js";import"./NavigationBar-3aLy9kDE.js";import"./BottomBar-CAfnLKEW.js";import"./NotificationBadge-E6hbr2ud.js";import"./Pagination-DDJ51IZb.js";import"./Tab-ZVhcxYsd.js";import"./Badge-DD4hhVS3.js";import"./StatusIndicator-CLCrgcpx.js";import"./Dialog-BnhtDDZM.js";import"./Table-B8itsxpE.js";import"./TablePagination-DEfCupwa.js";import"./Breadcrumb-g-WukhdW.js";import"./KPICard-DWw2qcji.js";import"./SideNav-C5Zv6PuT.js";import"./Tooltip-BN9f9M_1.js";import"./SideSheet-BmV_OVif.js";import"./Popover-CsctT7YF.js";import"./PushNotification-BxylmTwV.js";const o={src:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect x="36" y="44" width="56" height="44" rx="8" fill-opacity="0.12"/><rect x="48" y="32" width="32" height="12" rx="4" fill-opacity="0.08"/></svg>'),alt:"Hộp rỗng"},L={src:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx="64" cy="64" r="48" fill-opacity="0.12"/></svg>'),alt:"Thanh toán thành công"};function x(r){const e={a:"a",b:"b",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...j(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(g,{of:T}),`
`,n.jsx(e.h1,{id:"màn-kết-quả-rỗng-và-lỗi",children:"Màn kết quả, rỗng và lỗi"}),`
`,n.jsx(p,{spec:"6.19",variants:"ResultScreen 1 · ErrorScreen 1 · EmptyScreen 1 · EmptySection 1 · ErrorSection 1",status:"chốt",children:n.jsxs(e.p,{children:["Ba template màn ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"ResultScreen"})})," · ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"ErrorScreen"})})," · ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"EmptyScreen"})})," và hai khối nhúng ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"EmptySection"})})," · ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"ErrorSection"})})," — báo việc đã xong, chưa có dữ liệu hoặc có lỗi."]})}),`
`,n.jsx(t,{of:a}),`
`,n.jsx(m,{of:a}),`
`,n.jsx(e.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Component"}),n.jsx(e.th,{children:"Khi nào"}),n.jsx(e.th,{children:"Nút"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"ResultScreen"})}),n.jsx(e.td,{children:"Việc đã xong, người dùng phải sang chỗ khác (đặt phòng xong, thanh toán xong)"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"ButtonGroup"})," dọc — nút chính trên, lối đi phụ dưới (tuỳ chọn)"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"ErrorScreen"})}),n.jsx(e.td,{children:"Lỗi chặn cả chức năng cốt lõi, không tự khắc phục được"}),n.jsxs(e.td,{children:[n.jsx(e.strong,{children:"Một"})," nút duy nhất: thử lại"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"EmptyScreen"})}),n.jsx(e.td,{children:"Cả màn chưa có dữ liệu"}),n.jsxs(e.td,{children:[n.jsx(e.strong,{children:"Một"})," nút hành động (tạo mới, khám phá), ẩn được"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"EmptySection"})}),n.jsx(e.td,{children:"Một khối trong màn chưa có dữ liệu (danh sách rỗng, bảng rỗng)"}),n.jsx(e.td,{children:"Một nút, ẩn được"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"ErrorSection"})}),n.jsx(e.td,{children:"Lỗi chỉ ở một khối, phần còn lại của màn vẫn dùng được"}),n.jsx(e.td,{children:"Một nút thử lại"})]})]})]}),`
`,n.jsxs(e.p,{children:["Chọn đúng: lỗi cả màn → ",n.jsx(e.code,{children:"ErrorScreen"}),"; lỗi một khối → ",n.jsx(e.code,{children:"ErrorSection"}),"; lỗi sửa được ngay → ",n.jsx(e.a,{href:"?path=/docs/component-ch%E1%BB%A9a-%C4%91%E1%BB%B1ng-dialog--t%C3%A0i-li%E1%BB%87u",children:n.jsx(e.code,{children:"Dialog"})})," / ",n.jsx(e.a,{href:"?path=/docs/component-giao-ti%E1%BA%BFp-toast--t%C3%A0i-li%E1%BB%87u",children:n.jsx(e.code,{children:"Toast"})}),". ",n.jsx(e.code,{children:"ErrorScreen"})," chỉ có ",n.jsx(e.strong,{children:"một"})," nút là cố ý: còn việc gì khác người dùng làm được ngay thì lỗi đó không chặn chức năng cốt lõi."]}),`
`,n.jsx(e.h3,{id:"resultscreen",children:n.jsx(e.code,{children:"ResultScreen"})}),`
`,n.jsx(s,{of:"ResultScreen"}),`
`,n.jsx(e.h3,{id:"errorscreen",children:n.jsx(e.code,{children:"ErrorScreen"})}),`
`,n.jsx(s,{of:"ErrorScreen",docPath:{ErrorSection:"component-chứa-đựng-screens--tài-liệu"}}),`
`,n.jsx(e.h3,{id:"emptyscreen",children:n.jsx(e.code,{children:"EmptyScreen"})}),`
`,n.jsx(s,{of:"EmptyScreen",docPath:{EmptySection:"component-chứa-đựng-screens--tài-liệu"}}),`
`,n.jsx(e.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,n.jsxs(e.p,{children:["Ba template màn cùng họ với ",n.jsx(e.code,{children:"Sheet"})," và ",n.jsx(e.code,{children:"Dialog"})," trên bản vẽ: khung 390 × 844, ",n.jsx(e.code,{children:"NavigationBar"})," trên cùng, Body FILL căn giữa cả hai chiều padding ngang 16, Footer HUG padding 16. ",n.jsxs(e.strong,{children:[n.jsx(e.code,{children:"ResultScreen"})," và ",n.jsx(e.code,{children:"ErrorScreen"})," chỉ dựng Body + Footer"]})," — ",n.jsx(e.code,{children:"NavigationBar"})," (",n.jsx(e.code,{children:"Back action=false"}),": việc đã xong hoặc hệ thống đang hỏng thì không có chỗ để quay lại) và safe area do màn đặt. ",n.jsx(e.code,{children:"EmptyScreen"})," dựng kèm ",n.jsx(e.code,{children:"NavigationBar"})," ",n.jsx(e.strong,{children:"có"})," nút back — màn rỗng vẫn là một màn bình thường. ",n.jsx(e.code,{children:"IOS Home indicator"})," do OS vẽ, code bỏ."]}),`
`,n.jsx(e.h3,{id:"template-màn",children:"Template màn"}),`
`,n.jsx(d,{parts:[{label:n.jsx(n.Fragment,{children:"Vỏ — cao bằng khung chứa: Body FILL căn giữa hai chiều (padding ngang 16) + Footer"})},{selector:".uu-state__image",label:n.jsxs(n.Fragment,{children:["Ảnh — ",n.jsx(e.code,{children:"ResultScreen"}),": ô vuông 128 ",n.jsx(e.b,{children:"không nền"}),", ảnh do màn quyết. ",n.jsx(e.code,{children:"ErrorScreen"})," / ",n.jsx(e.code,{children:"EmptyScreen"}),": ô tròn 128 nền ",n.jsx(e.code,{children:"background-accent-muted"})]})},{selector:".uu-state__title",label:n.jsxs(n.Fragment,{children:["Title — ",n.jsx(e.code,{children:"heading-base"}),", ",n.jsx(e.code,{children:"object-primary"}),", căn giữa"]})},{selector:".uu-state__description",label:n.jsxs(n.Fragment,{children:["Description — ",n.jsx(e.code,{children:"body"}),", ",n.jsx(e.code,{children:"object-primary"}),", căn giữa"]})},{selector:".uu-state-screen__footer",label:n.jsxs(n.Fragment,{children:["Footer — HUG, padding 16, ",n.jsx(e.code,{children:"ButtonGroup"})," dọc"]})}],children:n.jsx("div",{style:{width:390,height:520,display:"flex",flexDirection:"column"},children:n.jsx(v,{image:L,title:"Thanh toán thành công",description:"Biên nhận đã gửi vào email của bạn.",primary:{label:"Xem đơn hàng"},secondary:{label:"Về trang chủ"}})})}),`
`,n.jsx(e.h3,{id:"khối-nhúng",children:"Khối nhúng"}),`
`,n.jsx(d,{parts:[{label:n.jsx(n.Fragment,{children:"Vỏ — V · padding 12 · gap 12 · căn giữa · FILL × HUG"})},{selector:".uu-state__image",label:n.jsxs(n.Fragment,{children:["Ảnh — ô tròn 128 nền ",n.jsx(e.code,{children:"background-accent-muted"}),", luôn có; ảnh đặt vào trong"]})},{selector:".uu-state__title",label:n.jsxs(n.Fragment,{children:["Title — ",n.jsx(e.code,{children:"heading-sm"})," (nhỏ hơn màn), ",n.jsx(e.code,{children:"object-primary"}),", căn giữa"]})},{selector:".uu-state__description",label:n.jsxs(n.Fragment,{children:["Description — ",n.jsx(e.code,{children:"body"}),", ",n.jsx(e.code,{children:"object-primary"}),", căn giữa"]})},{selector:".uu-btngroup",label:n.jsxs(n.Fragment,{children:["Nút — ",n.jsx(e.code,{children:"ButtonGroup"})," một nút, HUG"]})}],children:n.jsx("div",{style:{width:390},children:n.jsx(i,{image:o,title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây.",action:{label:"Tạo đơn"}})})}),`
`,n.jsxs(e.p,{children:["Ảnh là ",n.jsx(e.strong,{children:"nội dung"})," nên ",n.jsx(e.code,{children:"alt"})," bắt buộc. Ảnh minh hoạ của mọi màn / khối rỗng và lỗi là ô tròn 128 nền ",n.jsx(e.code,{children:"background-accent-muted"}),"; chỉ ",n.jsx(e.code,{children:"ResultScreen"})," giữ ô vuông không nền."]}),`
`,n.jsx(u,{of:["ResultScreen","ErrorScreen","EmptyScreen","EmptySection","ErrorSection"]}),`
`,n.jsx(e.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,n.jsx(e.h3,{id:"resultscreen-1",children:n.jsx(e.code,{children:"ResultScreen"})}),`
`,n.jsx(h,{of:"ResultScreen",props:{Title:["TEXT"],Description:["TEXT"]},code:{Title:{react:"title",flutter:"title"},Description:{react:"description",flutter:"description"}},extra:[{react:"image",flutter:"illustration",note:n.jsxs(n.Fragment,{children:["Ảnh ô vuông 128, không nền — ",n.jsx(e.code,{children:"{ src, alt }"}),"; Flutter: widget có ",n.jsx(e.code,{children:"semanticLabel"}),"."]})},{react:"primary",flutter:"primary",note:"Nút chính (trên)."},{react:"secondary",flutter:"secondary",note:"Lối đi phụ (dưới, Outline). Bỏ trống để ẩn."}]}),`
`,n.jsx(e.h3,{id:"errorscreen-1",children:n.jsx(e.code,{children:"ErrorScreen"})}),`
`,n.jsx(h,{of:"ErrorScreen",props:{Title:["TEXT"],Description:["TEXT"]},code:{Title:{react:"title",flutter:"title"},Description:{react:"description",flutter:"description"}},extra:[{react:"image",flutter:"illustration",note:"Ảnh trong ô tròn 128. Bỏ trống thì ô tròn vẫn còn."},{react:"action",flutter:"retryLabel · onRetry",note:n.jsxs(n.Fragment,{children:["Đúng ",n.jsx(e.b,{children:"một"}),' nút thử lại — luôn có. Flutter mặc định nhãn "Thử lại".']})}]}),`
`,n.jsxs(e.h3,{id:"emptyscreen--emptysection--errorsection",children:[n.jsx(e.code,{children:"EmptyScreen"})," · ",n.jsx(e.code,{children:"EmptySection"})," · ",n.jsx(e.code,{children:"ErrorSection"})]}),`
`,n.jsx(h,{of:"EmptySection",props:{Title:["TEXT"],Description:["TEXT"],Action:["True","False"]},code:{Title:{react:"title",flutter:"title"},Description:{react:"description",flutter:"description"},Action:{react:"action",flutter:"actionLabel · onAction",note:n.jsxs(n.Fragment,{children:["Chỉ ",n.jsx(e.code,{children:"EmptyScreen"})," / ",n.jsx(e.code,{children:"EmptySection"}),": bỏ trống = ",n.jsx(e.code,{children:"Action=false"}),". ",n.jsx(e.code,{children:"ErrorSection"})," luôn có nút thử lại (",n.jsx(e.code,{children:"action"}),"; Flutter ",n.jsx(e.code,{children:"retryLabel · onRetry"}),")."]})}},extra:[{react:"image",flutter:"illustration",note:"Ảnh trong ô tròn 128."},{react:"screenTitle · onBack",flutter:"screenTitle · onBack",note:n.jsxs(n.Fragment,{children:["Chỉ ",n.jsx(e.code,{children:"EmptyScreen"}),": tiêu đề và nút back của ",n.jsx(e.code,{children:"NavigationBar"}),"."]})}]}),`
`,n.jsx(t,{of:k}),`
`,n.jsx(t,{of:B}),`
`,n.jsx(e.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,n.jsx(e.p,{children:"Ảnh, padding, khe giữ nguyên; chữ đọc style theo density."}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{}),n.jsx(e.th,{children:"Touch"}),n.jsx(e.th,{children:"Compact"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Title màn ",n.jsx(e.code,{children:"heading-base"})]}),n.jsx(e.td,{children:"23/32"}),n.jsx(e.td,{children:"19/28"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Title khối ",n.jsx(e.code,{children:"heading-sm"})]}),n.jsx(e.td,{children:"19/28"}),n.jsx(e.td,{children:"16/24"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Description ",n.jsx(e.code,{children:"body"})]}),n.jsx(e.td,{children:"16/24"}),n.jsx(e.td,{children:"13/20"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Nút (Large)"}),n.jsx(e.td,{children:"56"}),n.jsx(e.td,{children:"40"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Ảnh"}),n.jsx(e.td,{children:"128"}),n.jsx(e.td,{children:"128"})]})]})]}),`
`,n.jsx(e.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Phần"}),n.jsx(e.th,{children:"Token"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Ô ảnh tròn"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"background-accent-muted"})})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Ô ảnh ",n.jsx(e.code,{children:"ResultScreen"})]}),n.jsx(e.td,{children:"không nền"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Title · Description"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"object-primary"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Nút"}),n.jsxs(e.td,{children:["theo ",n.jsx(e.a,{href:"?path=/docs/component-h%C3%A0nh-%C4%91%E1%BB%99ng-buttongroup--t%C3%A0i-li%E1%BB%87u",children:"ButtonGroup"})]})]})]})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"background-accent-muted"})," thuộc họ ",n.jsx(e.code,{children:"accent"})," nên đổi theo brand."]}),`
`,n.jsx(y,{caption:"Khối rỗng ở hai brand: ô ảnh và nút đổi theo brand.",children:n.jsxs(b,{cols:2,children:[n.jsx(l,{title:"Default",theme:"default",children:n.jsx(i,{image:o,title:"Chưa có đơn hàng",action:{label:"Tạo đơn"}})}),n.jsx(l,{title:"UU",theme:"uu",children:n.jsx(i,{image:o,title:"Chưa có đơn hàng",action:{label:"Tạo đơn"}})})]})}),`
`,n.jsx(e.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsxs(e.p,{children:["Các template màn cao bằng khung chứa (",n.jsx(e.code,{children:"height: 100%"}),") — đặt dưới ",n.jsx(e.code,{children:"NavigationBar"})," trong một vùng flex FILL. Nội dung dài hơn màn thì Body cuộn, Footer đứng yên ở đáy."]}),`
`,n.jsx(t,{of:C}),`
`,n.jsx(t,{of:F}),`
`,n.jsx(t,{of:R}),`
`,n.jsx(t,{of:D}),`
`,n.jsx(e.h2,{id:"truy-cập",children:"Truy cập"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Title là heading (",n.jsx(e.code,{children:"h2"})," ở màn, ",n.jsx(e.code,{children:"h3"})," ở khối nhúng) để trình đọc màn hình nhảy tới."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ErrorScreen"})," và ",n.jsx(e.code,{children:"ErrorSection"})," mang ",n.jsx(e.code,{children:'role="alert"'})," — trình đọc màn hình báo ngay khi lỗi hiện."]}),`
`,n.jsxs(e.li,{children:["Ảnh là nội dung → ",n.jsx(e.code,{children:"alt"}),' bắt buộc; nút có nhãn động từ rõ ("Thử lại", "Tạo đơn", "Xem đơn hàng").']}),`
`]}),`
`,n.jsx(e.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,n.jsxs(S,{children:[n.jsx(E,{hug:!0,reason:"Nói rõ chuyện gì và làm gì tiếp — tiêu đề, mô tả, một nút.",children:n.jsx("div",{style:{width:320},children:n.jsx(i,{image:o,title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây.",action:{label:"Tạo đơn"}})})}),n.jsx(f,{hug:!0,reason:"Chỉ báo không có dữ liệu — không nói vì sao, không có lối đi tiếp.",children:n.jsx("div",{style:{width:320},children:n.jsx(i,{image:o,title:"Không có dữ liệu"})})})]}),`
`,n.jsx(c,{of:"ResultScreen"}),`
`,n.jsx(c,{of:"ErrorScreen"}),`
`,n.jsx(c,{of:"EmptyScreen"}),`
`,n.jsx(c,{of:"EmptySection"}),`
`,n.jsx(c,{of:"ErrorSection"}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ResultScreen, ErrorScreen, EmptySection, ErrorSection } from 'uu-ds';

// Màn đặt NavigationBar (Back action=false) rồi đặt template vào vùng FILL
<ResultScreen image={{ src: doneArt, alt: 'Thanh toán thành công' }}
  title="Thanh toán thành công" description="Biên nhận đã gửi vào email của bạn."
  primary={{ label: 'Xem đơn hàng', onClick: openOrder }}
  secondary={{ label: 'Về trang chủ', onClick: goHome }} />

<ErrorScreen title="Hệ thống đang gián đoạn" description="Bạn thử lại sau ít phút."
  action={{ label: 'Thử lại', onClick: reload }} />

<EmptySection image={{ src: boxArt, alt: 'Hộp rỗng' }}
  title="Chưa có đơn hàng" description="Đơn bạn tạo sẽ hiện ở đây."
  action={{ label: 'Tạo đơn', onClick: createOrder }} />
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

Scaffold(
  body: SafeArea(
    child: Column(children: [
      const UuNavigationBar(title: 'Thanh toán'),
      Expanded(
        child: UuResultScreen(
          title: 'Thanh toán thành công',
          description: 'Biên nhận đã gửi vào email của bạn.',
          illustration: Image.asset('assets/done.png', semanticLabel: 'Thanh toán thành công'),
          primary: UuGroupAction('Xem đơn hàng', onPressed: openOrder),
          secondary: UuGroupAction('Về trang chủ', onPressed: goHome),
        ),
      ),
    ]),
  ),
);

UuErrorScreen(title: 'Hệ thống đang gián đoạn', description: 'Bạn thử lại sau ít phút.', onRetry: reload);
UuEmptySection(title: 'Chưa có đơn hàng', actionLabel: 'Tạo đơn', onAction: createOrder);
`})})]})}function Cn(r={}){const{wrapper:e}={...j(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(x,{...r})}):x(r)}export{o as ART,L as DONE,Cn as default};

import{j as e}from"./iframe-6vwN6wb9.js";import{useMDXComponents as b}from"./index-Dlv2haGb.js";import{M as u,C as t,a as p}from"./blocks-BSM2G-rt.js";import{D as m}from"./DocHeader-dH8kDqoR.js";import{W as s,A as i,P as o,R as a}from"./ComponentDoc-C2Azonyj.js";import{D as T,a as C,b as x}from"./Diagram-DvRZpORS.js";import{D as k,a as y,b as f}from"./DoDont-D-pRqbc4.js";import{T as d,a as r,b as h,c}from"./Table-BvooIirA.js";import{S as v,P as j,E as S,H,C as D,A as F,D as U,a as w}from"./Table.stories-BC2V3pAG.js";import"./preload-helper-Dp1pzeXC.js";import"./ontology-B4dEuYV1.js";import"./ToggleButton-iGf9GL8G.js";import"./SegmentedControl-D9DnLaT0.js";import"./FieldLabel-VR6C5pFb.js";import"./TextInput-Bbz922PW.js";/* empty css              */import"./TextArea-fHkKRPcE.js";import"./OTPInput-Bd2cl4Ac.js";import"./SearchInput-DzxMgUfj.js";import"./BottomSheet-B8yp7CjB.js";import"./ButtonGroup-CnZk1waj.js";/* empty css                    */import"./Checkbox-DddgjZL9.js";/* empty css                 */import"./MenuAnchor-ChH55Pgk.js";import"./DateInput-DLzwF2tb.js";import"./Dropdown-L1BYtwtq.js";import"./Radio-W97mCUrY.js";import"./Switch-C5m2-2AJ.js";import"./Chip-Ccfh2xHF.js";import"./NavigationBar-BCULj685.js";import"./BottomBar-Br4VW-mZ.js";import"./NotificationBadge-jzC0_jUT.js";import"./Pagination-BSd13NVq.js";import"./Tab-K04RKmz4.js";import"./Badge-CXod6T9Q.js";import"./StatusIndicator-rzhX9CGL.js";import"./Dialog-tjliKjBx.js";import"./TablePagination-BKcELBeQ.js";import"./Breadcrumb-BEYmB8Lw.js";import"./KPICard-FvizH_ip.js";import"./SideNav-kBOfiGsC.js";import"./Tooltip-CyR_aW_m.js";import"./SideSheet-k9L0u7Lk.js";import"./Popover-BzmQmVHo.js";import"./Screens-Dq_t4rvF.js";import"./PushNotification-CPD3vDle.js";import"./layout-nPJ89kCs.js";function g(l){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...b(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:v}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsx(m,{spec:"6.23",variants:"21 + 18",status:"chốt",children:e.jsxs(n.p,{children:["Bảng dữ liệu cho màn desktop / dashboard, ghép từ hai loại ô — ",e.jsx(n.code,{children:"TableHeaderCell"})," (tiêu đề cột) và ",e.jsx(n.code,{children:"TableCell"})," (ô dữ liệu) — để xem, so sánh, sắp xếp và chọn nhiều bản ghi."]})}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(p,{of:j}),`
`,e.jsx(n.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,e.jsxs(n.p,{children:["Dùng bảng khi người dùng cần ",e.jsx(n.strong,{children:"quét và so sánh nhiều bản ghi cùng cấu trúc"})," trên màn rộng: đơn hàng, phiếu, tài khoản. Bảng dành cho desktop và chạy ở density ",e.jsx(n.code,{children:"Compact"}),". Bản ghi ít cột, xem trên app thì xếp thành danh sách thẻ, không ép bảng vào khổ hẹp. Bảng nhiều trang đặt ",e.jsx(n.code,{children:"TablePagination"})," ngay dưới."]}),`
`,e.jsxs(n.p,{children:["Bản vẽ chỉ có ",e.jsx(n.strong,{children:"ô"}),". Bên code, ",e.jsx(n.code,{children:"Table"})," và ",e.jsx(n.code,{children:"TableRow"})," chỉ là khung ",e.jsx(n.code,{children:"<table>"})," / ",e.jsx(n.code,{children:"<tr>"})," ngữ nghĩa bọc các ô, ",e.jsx(n.strong,{children:"không thêm hình học"}),": hàng là các ô cùng chiều cao xếp ngang, bảng là hàng tiêu đề cộng các hàng dữ liệu."]}),`
`,e.jsx(s,{of:"TableHeaderCell"}),`
`,e.jsx(s,{of:"TableCell"}),`
`,e.jsx(t,{of:S}),`
`,e.jsx(n.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,e.jsx(n.h3,{id:"tableheadercell",children:"TableHeaderCell"}),`
`,e.jsx(i,{parts:[{label:e.jsxs(e.Fragment,{children:["Ô tiêu đề — cao ",e.jsx(n.code,{children:"table-header-height"}),", viền dưới 1px ",e.jsx(n.code,{children:"border-muted"})]})},{selector:".uu-tableheadercell--checkbox .uu-checkbox",label:e.jsxs(e.Fragment,{children:[e.jsx(n.code,{children:"Type=Checkbox"}),' — ô "chọn tất cả" rộng 64, không nhãn']})},{selector:'[data-sort="off"] .uu-tableheadercell__inner',label:e.jsxs(e.Fragment,{children:["Nhãn ",e.jsx(n.code,{children:"title-sm"})," — ",e.jsx(n.code,{children:"Sort=Off"})," không icon"]})},{selector:".uu-tableheadercell__icon",label:e.jsxs(e.Fragment,{children:["Icon sắp xếp 16 — ",e.jsx(n.code,{children:"Align=Right"})," đứng trước nhãn"]})}],children:e.jsx("div",{"data-density":"compact",style:{width:480},children:e.jsx(d,{"aria-label":"Cấu trúc hàng tiêu đề",children:e.jsx("thead",{children:e.jsxs(r,{children:[e.jsx(h,{type:"checkbox",checked:"indeterminate"}),e.jsx(h,{children:"Khách hàng"}),e.jsx(h,{align:"right",sort:"descending",children:"Tổng tiền"})]})})})})}),`
`,e.jsx(n.h3,{id:"tablecell",children:"TableCell"}),`
`,e.jsx(i,{parts:[{label:e.jsxs(e.Fragment,{children:["Ô dữ liệu — cao ",e.jsx(n.code,{children:"table-row-height"}),", gap 8, viền dưới 1px ",e.jsx(n.code,{children:"border-muted"})]})},{selector:".uu-tablecell--checkbox .uu-checkbox",label:e.jsxs(e.Fragment,{children:[e.jsx(n.code,{children:"Checkbox"})," — chọn hàng, ô rộng 64"]})},{selector:".uu-tablecell--status .uu-status",label:e.jsxs(e.Fragment,{children:[e.jsx(n.code,{children:"Status"})," — ",e.jsx(n.code,{children:"StatusIndicator"})," căn trái"]})},{selector:".uu-tablecell--number .uu-tablecell__inner",label:e.jsxs(e.Fragment,{children:[e.jsx(n.code,{children:"Number"})," — ",e.jsx(n.code,{children:"body"})," căn phải, chữ số cùng bề rộng"]})},{selector:".uu-tablecell--actions .uu-tablecell__inner",label:e.jsxs(e.Fragment,{children:[e.jsx(n.code,{children:"Actions"}),' — nút chữ Ghost Small + nút "⋯" Ghost Small']})}],children:e.jsx("div",{"data-density":"compact",style:{width:600},children:e.jsx(d,{"aria-label":"Cấu trúc hàng dữ liệu",children:e.jsx("tbody",{children:e.jsxs(r,{children:[e.jsx(c,{type:"checkbox",checkboxLabel:"Chọn đơn DH-1024"}),e.jsx(c,{type:"status",statusTone:"success",children:"Đã giao"}),e.jsx(c,{type:"number",children:"1.250.000 ₫"}),e.jsx(c,{type:"actions",action:"Xem",moreLabel:"Thêm thao tác cho đơn DH-1024"})]})})})})}),`
`,e.jsxs(n.p,{children:["Bảng ",e.jsx(n.strong,{children:"không có viền ngoài và không kẻ dọc"}),". Chỉ kẻ ngang: mỗi ô có viền dưới 1px ",e.jsx(n.code,{children:"border-muted"}),"."]}),`
`,e.jsx(n.h2,{id:"variant-và-thuộc-tính",children:"Variant và thuộc tính"}),`
`,e.jsx(n.h3,{id:"tableheadercell--21-variant",children:"TableHeaderCell — 21 variant"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Sort"})," × ",e.jsx(n.code,{children:"Align"})," × ",e.jsx(n.code,{children:"State"})," (chỉ cột sắp được, ",e.jsx(n.code,{children:"Sort≠Off"}),") = 20, cộng ",e.jsx(n.code,{children:"Type=Checkbox"})," = 21."]}),`
`,e.jsx(o,{of:"TableHeaderCell",props:{Type:["Checkbox"],Sort:["Off","Unsorted","Ascending","Descending"],Align:["Left","Right"],State:["Default","Hover","Pressed"],Label:["TEXT"]},code:{Type:{react:"type",flutter:"type",note:e.jsxs(e.Fragment,{children:[e.jsx(n.code,{children:"checkbox"}),' — ô "chọn tất cả" đầu cột chọn hàng. Mặc định ',e.jsx(n.code,{children:"default"})," (Flutter ",e.jsx(n.code,{children:"normal"}),") là ô có nhãn."]})},Sort:{react:"sort",flutter:"sort",note:e.jsxs(e.Fragment,{children:[e.jsx(n.code,{children:"off"})," — cột không sắp được. ",e.jsx(n.code,{children:"unsorted"})," — sắp được, chưa sắp."]})},Align:{react:"align",flutter:"align",note:e.jsxs(e.Fragment,{children:[e.jsx(n.code,{children:"right"})," cho cột số: icon đứng trước nhãn, cả hai dồn phải."]})},State:{react:"state",flutter:"—",note:e.jsxs(e.Fragment,{children:["Hover / Pressed tự có khi tương tác; ",e.jsx(n.code,{children:"state"})," chỉ để ép hình khi chụp docs."]})},Label:{react:"children",flutter:"label"}},extra:[{react:"onSort",flutter:"onSort",note:e.jsxs(e.Fragment,{children:["Bấm tiêu đề cột sắp được. Màn tự đổi ",e.jsx(n.code,{children:"sort"})," rồi truyền lại."]})},{react:"checked",flutter:"checked",note:e.jsxs(e.Fragment,{children:["Chỉ ",e.jsx(n.code,{children:"checkbox"}),": ",e.jsx(n.code,{children:"true"})," khi mọi hàng của trang đang xem đã chọn, ",e.jsx(n.code,{children:"'indeterminate'"})," (Flutter ",e.jsx(n.code,{children:"null"}),") khi chọn một phần, ",e.jsx(n.code,{children:"false"})," khi chưa chọn. Flutter có ",e.jsx(n.code,{children:"UuTableHeaderCell.checkedFor(selected, total)"}),"."]})},{react:"onCheckedChange",flutter:"onCheckedChanged",note:e.jsxs(e.Fragment,{children:["Chỉ ",e.jsx(n.code,{children:"checkbox"}),": ",e.jsx(n.code,{children:"true"})," = chọn cả trang, ",e.jsx(n.code,{children:"false"})," = bỏ cả trang."]})}]}),`
`,e.jsx(t,{of:H}),`
`,e.jsx(n.h3,{id:"tablecell--18-variant",children:"TableCell — 18 variant"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Type"})," (6) × ",e.jsx(n.code,{children:"State"})," (3)."]}),`
`,e.jsx(o,{of:"TableCell",props:{Type:["Text","Number","Secondary","Actions","Checkbox","Status"],State:["Default","Hover","Selected"],Content:["TEXT"],TextButton:["BOOLEAN"],IconButton:["BOOLEAN"]},code:{Type:{react:"type",flutter:"type",note:e.jsxs(e.Fragment,{children:[e.jsx(n.code,{children:"secondary"})," — cột phụ (mã, ngày tạo, ghi chú). ",e.jsx(n.code,{children:"status"})," — cột trạng thái (đơn, phiếu, tài khoản)."]})},State:{react:"state",flutter:"state",note:e.jsxs(e.Fragment,{children:["Thường đặt ",e.jsx(n.code,{children:"state"})," trên ",e.jsx(n.code,{children:"TableRow"})," (Flutter ",e.jsx(n.code,{children:"UuTableRow.selected"}),") cho cả hàng."]})},Content:{react:"children",flutter:"content",note:e.jsxs(e.Fragment,{children:["Với ",e.jsx(n.code,{children:"status"})," là chữ trạng thái trong indicator — ô không thêm chữ."]})},TextButton:{react:"textButton · action",flutter:"actionLabel",note:e.jsxs(e.Fragment,{children:["Chỉ ",e.jsx(n.code,{children:"actions"}),": bật nút chữ ",e.jsx(n.code,{children:"TextButtonAccent"})," Ghost Small."]})},IconButton:{react:"iconButton · onMore",flutter:"onMore",note:e.jsxs(e.Fragment,{children:["Chỉ ",e.jsx(n.code,{children:"actions"}),': bật nút "⋯" ',e.jsx(n.code,{children:"IconButtonNeutral"})," Ghost Small mở ",e.jsx(n.code,{children:"Menu"}),"."]})}},extra:[{react:"statusTone · statusContainer",flutter:"statusTone · statusFilled",note:e.jsxs(e.Fragment,{children:["Chỉ ",e.jsx(n.code,{children:"status"}),": ",e.jsx(n.code,{children:"Tone"})," và ",e.jsx(n.code,{children:"Container"})," của ",e.jsx(n.code,{children:"StatusIndicator"})," (§6.15)."]})},{react:"checked · onCheckedChange · checkboxLabel",flutter:"checked · onCheckedChanged · content",note:e.jsxs(e.Fragment,{children:["Chỉ ",e.jsx(n.code,{children:"checkbox"}),': chọn hàng; nhãn đọc ví dụ "Chọn đơn DH-1024".']})},{react:"onAction · moreLabel",flutter:"onAction · moreLabel",note:'Bấm nút chữ; tên đọc của nút "⋯".'}]}),`
`,e.jsx(t,{of:D}),`
`,e.jsx(t,{of:F}),`
`,e.jsx(n.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,e.jsxs(n.p,{children:["Bảng dùng ",e.jsx(n.code,{children:"Compact"}),". Ô đọc biến density nên tự đổi khi bật Touch."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{}),e.jsx(n.th,{children:"Touch"}),e.jsx(n.th,{children:"Compact"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Cao ô tiêu đề (",e.jsx(n.code,{children:"table-header-height"}),")"]}),e.jsx(n.td,{children:"48"}),e.jsx(n.td,{children:"32"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Cao ô dữ liệu (",e.jsx(n.code,{children:"table-row-height"}),")"]}),e.jsx(n.td,{children:"56"}),e.jsx(n.td,{children:"40"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Padding ngang (",e.jsx(n.code,{children:"table-cell-padding-x"}),")"]}),e.jsx(n.td,{children:"16"}),e.jsx(n.td,{children:"12"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Gap ô tiêu đề · ô dữ liệu"}),e.jsx(n.td,{children:"4 · 8"}),e.jsx(n.td,{children:"4 · 8"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Rộng ô ",e.jsx(n.code,{children:"Checkbox"})," (cả tiêu đề)"]}),e.jsx(n.td,{children:"64"}),e.jsx(n.td,{children:"64"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Nhãn tiêu đề ",e.jsx(n.code,{children:"title-sm"})]}),e.jsx(n.td,{children:"13/20"}),e.jsx(n.td,{children:"11/16"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Chữ ô ",e.jsx(n.code,{children:"body"})," · ",e.jsx(n.code,{children:"caption"})]}),e.jsx(n.td,{children:"16/24 · 13/20"}),e.jsx(n.td,{children:"13/20 · 11/16"})]})]})]}),`
`,e.jsx(t,{of:U}),`
`,e.jsx(n.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,e.jsx(n.h3,{id:"tableheadercell-1",children:"TableHeaderCell"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Trạng thái"}),e.jsx(n.th,{children:"Nhãn · icon"}),e.jsx(n.th,{children:"State layer"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Sort=Off"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"object-secondary"}),", không icon"]}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Unsorted"})}),e.jsxs(n.td,{children:["nhãn ",e.jsx(n.code,{children:"object-secondary"})," · ",e.jsx(n.code,{children:"sort-vertical"})," ",e.jsx(n.code,{children:"object-secondary"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"object-primary"})," 5% / 10%"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Ascending"})," / ",e.jsx(n.code,{children:"Descending"})]}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"object-primary"})})," · ",e.jsx(n.code,{children:"arrow-up"})," / ",e.jsx(n.code,{children:"arrow-down"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"object-primary"})," 5% / 10%"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Type=Checkbox"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Checkbox"})," (§6.3f)"]}),e.jsx(n.td,{children:"không có ở ô — state nằm ở checkbox"})]})]})]}),`
`,e.jsx(n.h3,{id:"tablecell-1",children:"TableCell"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"State"}),e.jsx(n.th,{children:"Nền"}),e.jsx(n.th,{children:"State layer"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Default"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Hover"})}),e.jsx(n.td,{children:"—"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"object-primary"})," · ",e.jsx(n.code,{children:"opacity-5"})," phủ cả ô"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Selected"})}),e.jsx(n.td,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"background-interactive-muted"})})}),e.jsx(n.td,{children:"—"})]})]})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Chữ"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Text"})," · ",e.jsx(n.code,{children:"Number"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"body"})," ",e.jsx(n.code,{children:"object-primary"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Secondary"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"caption"})," ",e.jsx(n.code,{children:"object-secondary"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Status"})}),e.jsxs(n.td,{children:["theo ",e.jsx(n.code,{children:"StatusIndicator"})," (§6.15)"]})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Hover"})," của ô không đổi nền, không đổi chữ: chỉ phủ lớp ",e.jsx(n.code,{children:"::after"})," (§6.0)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Selected"})," và ",e.jsx(n.code,{children:"Checkbox"})," đã chọn dùng nhóm ",e.jsx(n.code,{children:"interactive"})," nên ",e.jsx(n.strong,{children:"đổi theo brand"})," — đổi Brand trên thanh công cụ để xem."]}),`
`,e.jsx(T,{caption:"Hàng đã chọn ở hai brand: ô giữ nguyên, token interactive đổi.",children:e.jsxs(C,{cols:2,children:[e.jsx(x,{title:"Default",theme:"default",density:"compact",children:e.jsx(d,{"aria-label":"Hàng chọn brand Default",children:e.jsx("tbody",{children:e.jsxs(r,{state:"selected",children:[e.jsx(c,{type:"checkbox",checked:!0,checkboxLabel:"Chọn đơn DH-1024"}),e.jsx(c,{children:"Nguyễn Minh Anh"})]})})})}),e.jsx(x,{title:"UU",theme:"uu",density:"compact",children:e.jsx(d,{"aria-label":"Hàng chọn brand UU",children:e.jsx("tbody",{children:e.jsxs(r,{state:"selected",children:[e.jsx(c,{type:"checkbox",checked:!0,checkboxLabel:"Chọn đơn DH-1024"}),e.jsx(c,{children:"Nguyễn Minh Anh"})]})})})})]})}),`
`,e.jsx(n.h2,{id:"hành-vi",children:"Hành vi"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Sắp xếp"})," — cột sắp được nhận ",e.jsx(n.code,{children:"onSort"}),": cả ô là vùng bấm. Màn tự đổi ",e.jsx(n.code,{children:"sort"})," rồi truyền lại. Cột không sắp được để ",e.jsx(n.code,{children:"Sort=Off"}),", không icon, không state."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Hover / chọn là trạng thái của cả hàng"})," — mọi ô trong hàng cùng ",e.jsx(n.code,{children:"State"}),". Đặt ",e.jsx(n.code,{children:"state"})," trên ",e.jsx(n.code,{children:"TableRow"})," thay vì từng ô; hàng trong ",e.jsx(n.code,{children:"<tbody>"})," tự hiện state layer khi rê chuột."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Chọn hàng"})," — cột đầu là ",e.jsx(n.code,{children:"TableCell"})," ",e.jsx(n.code,{children:"Checkbox"}),", tiêu đề cột là ",e.jsx(n.code,{children:"TableHeaderCell"})," ",e.jsx(n.code,{children:"Type=Checkbox"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ô đầu tính trên các hàng ",e.jsx(n.strong,{children:"của trang đang xem"}),": đủ cả trang → ",e.jsx(n.code,{children:"Checked"}),", một phần → ",e.jsx(n.code,{children:"Indeterminate"}),", chưa chọn → ",e.jsx(n.code,{children:"Unchecked"}),"."]}),`
`,e.jsxs(n.li,{children:["Bấm ô đầu khi ",e.jsx(n.code,{children:"Unchecked"})," hoặc ",e.jsx(n.code,{children:"Indeterminate"})," → chọn mọi hàng của trang; khi ",e.jsx(n.code,{children:"Checked"})," → bỏ chọn mọi hàng của trang."]}),`
`,e.jsx(n.li,{children:"Hàng đã chọn ở trang khác giữ nguyên khi chuyển trang."}),`
`]}),`
`,e.jsx(t,{of:w}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Hành động theo dòng"})," — không bao giờ ",e.jsx(n.code,{children:"Solid"})," (§6.1 ",e.jsx(n.em,{children:"Mức nhấn"}),"). Từ hai hành động trở lên: giữ một nút ",e.jsx(n.code,{children:"Ghost"}),' Small cho hành động hay dùng nhất, phần còn lại vào menu "⋯" (',e.jsx(n.code,{children:"Menu"}),', §6.21). Hành động phá huỷ nằm trong menu "⋯" và xác nhận bằng ',e.jsx(n.code,{children:"Dialog"})," có ",e.jsx(n.code,{children:"TextButtonDanger"})," Solid."]}),`
`,e.jsx(n.h2,{id:"truy-cập",children:"Truy cập"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Bảng là ",e.jsx(n.code,{children:"<table>"})," thật, có ",e.jsx(n.code,{children:"aria-label"}),". Ô tiêu đề là ",e.jsx(n.code,{children:'<th scope="col">'}),"; cột sắp được mang ",e.jsx(n.code,{children:"aria-sort"})," và chứa ",e.jsx(n.code,{children:"<button>"}),"."]}),`
`,e.jsxs(n.li,{children:['Ô "chọn tất cả" mang ',e.jsx(n.code,{children:'aria-label="Chọn tất cả hàng"'}),"; checkbox đọc ",e.jsx(n.code,{children:'aria-checked="mixed"'})," khi chọn một phần."]}),`
`,e.jsxs(n.li,{children:["Ô chọn hàng cần ",e.jsx(n.code,{children:"checkboxLabel"}),' riêng từng hàng, ví dụ "Chọn đơn DH-1024". Trạng thái chọn được đọc qua checkbox — nền ',e.jsx(n.code,{children:"Selected"})," chỉ là tín hiệu thị giác."]}),`
`,e.jsxs(n.li,{children:["Cột không có nhãn nhìn thấy (cột thao tác) vẫn cần tên đọc: đặt nhãn trong ",e.jsx(n.code,{children:"uu-visually-hidden"}),"."]}),`
`,e.jsxs(n.li,{children:["Trạng thái trong cột ",e.jsx(n.code,{children:"Status"})," có chữ, không chỉ dựa vào màu chấm."]}),`
`,e.jsxs(n.li,{children:["Bàn phím: Tab qua nút sắp xếp, checkbox và nút thao tác; Enter / Space để bấm. Vòng focus 2px ",e.jsx(n.code,{children:"border-emphasized"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"nên--không-nên",children:"Nên / Không nên"}),`
`,e.jsxs(k,{children:[e.jsx(y,{hug:!0,reason:"Hành động theo dòng là Ghost Small; phần còn lại vào menu ⋯.",children:e.jsx("div",{"data-density":"compact",style:{width:240},children:e.jsx(d,{"aria-label":"Ví dụ nên",children:e.jsx("tbody",{children:e.jsx(r,{children:e.jsx(c,{type:"actions",action:"Xem",moreLabel:"Thêm thao tác"})})})})})}),e.jsx(f,{hug:!0,reason:"Không đặt chữ trạng thái trơn — dùng ô Status để có chấm và màu đúng tone.",children:e.jsx("div",{"data-density":"compact",style:{width:240},children:e.jsx(d,{"aria-label":"Ví dụ không nên",children:e.jsx("tbody",{children:e.jsx(r,{children:e.jsx(c,{children:"Đã giao"})})})})})})]}),`
`,e.jsx(a,{of:"TableHeaderCell"}),`
`,e.jsx(a,{of:"TableCell"}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table, TableRow, TableHeaderCell, TableCell } from 'uu-ds';

const ids = rows.map((o) => o.id);
const n = ids.filter((id) => picked.has(id)).length;
const all = n === 0 ? false : n === ids.length ? true : 'indeterminate';

<Table aria-label="Đơn hàng">
  <thead>
    <TableRow>
      <TableHeaderCell type="checkbox" checked={all} onCheckedChange={(on) => selectPage(ids, on)} />
      <TableHeaderCell>Khách hàng</TableHeaderCell>
      <TableHeaderCell>Trạng thái</TableHeaderCell>
      <TableHeaderCell align="right" sort={sort} onSort={toggleSort}>Tổng tiền</TableHeaderCell>
      <TableHeaderCell><span className="uu-visually-hidden">Thao tác</span></TableHeaderCell>
    </TableRow>
  </thead>
  <tbody>
    {rows.map((o) => (
      <TableRow key={o.id} state={picked.has(o.id) ? 'selected' : 'default'}>
        <TableCell type="checkbox" checked={picked.has(o.id)} onCheckedChange={(v) => toggle(o.id, v)} checkboxLabel={\`Chọn đơn \${o.id}\`} />
        <TableCell>{o.customer}</TableCell>
        <TableCell type="status" statusTone="success">Đã giao</TableCell>
        <TableCell type="number">1.250.000 ₫</TableCell>
        <TableCell type="actions" action="Xem" onAction={() => open(o)} onMore={() => openMenu(o)} />
      </TableRow>
    ))}
  </tbody>
</Table>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-dart",children:`import 'package:uu_ds_flutter/uu_ds_flutter.dart';

UuTable(
  columns: [
    UuTableColumn(
      type: UuTableHeaderCellType.checkbox,
      checked: UuTableHeaderCell.checkedFor(pickedOnPage, rows.length),
      onCheckedChanged: (on) => selectPage(on),
    ),
    const UuTableColumn(label: 'Khách hàng'),
    const UuTableColumn(label: 'Trạng thái'),
    UuTableColumn(label: 'Tổng tiền', align: UuTableAlign.right, sort: sort, onSort: toggleSort),
  ],
  rows: [
    for (final o in rows)
      UuTableRow(selected: picked.contains(o.id), cells: [
        UuTableCell(type: UuTableCellType.checkbox, content: 'Chọn đơn \${o.id}', checked: picked.contains(o.id), onCheckedChanged: (v) => toggle(o.id, v)),
        UuTableCell(content: o.customer),
        const UuTableCell(type: UuTableCellType.status, content: 'Đã giao', statusTone: UuTone.success),
        UuTableCell(type: UuTableCellType.number, content: '1.250.000 ₫'),
      ]),
  ],
);
`})})]})}function Se(l={}){const{wrapper:n}={...b(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(g,{...l})}):g(l)}export{Se as default};

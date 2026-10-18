import{j as n}from"./iframe-gn_pzB68.js";import{useMDXComponents as l}from"./index-CrYLlzxl.js";import{M as i,C as d,a as h,S as t}from"./blocks-C259Y4_u.js";import{D as o,C as x}from"./DocHeader-ChFWaY5-.js";import{S as j,P as r,E as a}from"./Table.stories-CzdqJ9GG.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DQgRn8u5.js";import"./Checkbox-B5lFn3qy.js";/* empty css                 */import"./layout-whGn3D85.js";function s(c){const e={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:j}),`
`,n.jsx(e.h1,{id:"table",children:"Table"}),`
`,n.jsx(o,{spec:"6.23",variants:"20 + 15",status:"chốt",children:n.jsxs(e.p,{children:["Bảng dữ liệu cho màn ",n.jsx(e.strong,{children:"desktop / dashboard"})," (density ",n.jsx(e.code,{children:"Compact"}),"). Bản vẽ chỉ có ",n.jsx(e.strong,{children:"ô"}),": ",n.jsx(e.code,{children:"TableHeaderCell"})," (20 variant) và ",n.jsx(e.code,{children:"TableCell"})," (15 variant). Hàng và bảng là ghép ô."]})}),`
`,n.jsx(d,{of:r}),`
`,n.jsx(h,{of:r}),`
`,n.jsx(d,{of:a}),`
`,n.jsx(e.h2,{id:"bảng-là-ghép-ô",children:"Bảng là ghép ô"}),`
`,n.jsxs(e.p,{children:["Không có component bảng riêng trong bản vẽ. Bên code, ",n.jsx(e.code,{children:"Table"})," và ",n.jsx(e.code,{children:"TableRow"})," chỉ là khung ",n.jsx(e.code,{children:"<table>"})," / ",n.jsx(e.code,{children:"<tr>"})," ngữ nghĩa bọc các ô, ",n.jsx(e.strong,{children:"không thêm hình học"}),": hàng là các ô cùng chiều cao xếp ngang, bảng là hàng tiêu đề cộng các hàng dữ liệu."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Table aria-label="Đơn hàng">
  <thead>
    <TableRow>
      <TableHeaderCell>Khách hàng</TableHeaderCell>
      <TableHeaderCell align="right" sort={sort} onSort={toggleSort}>Tổng tiền</TableHeaderCell>
      <TableHeaderCell><span className="uu-visually-hidden">Thao tác</span></TableHeaderCell>
    </TableRow>
  </thead>
  <tbody>
    <TableRow state={picked ? 'selected' : 'default'}>
      <TableCell>Nguyễn Minh Anh</TableCell>
      <TableCell type="number">1.250.000 ₫</TableCell>
      <TableCell type="actions" action="Xem" onAction={open} onMore={openMenu} />
    </TableRow>
  </tbody>
</Table>
`})}),`
`,n.jsxs(e.p,{children:["Bảng ",n.jsx(e.strong,{children:"không có viền ngoài và không kẻ dọc"}),". Chỉ kẻ ngang: mỗi ô có viền dưới 1px ",n.jsx(e.code,{children:"border-muted"}),"."]}),`
`,n.jsx(e.h2,{id:"tableheadercell--20-variant",children:"TableHeaderCell — 20 variant"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Sort"})," (Off · Unsorted · Ascending · Descending) × ",n.jsx(e.code,{children:"Align"})," (Left · Right) × ",n.jsx(e.code,{children:"State"})," (Default · Hover · Pressed — chỉ cột sắp được)."]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Phần"}),n.jsx(e.th,{children:"Giá trị"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Ô"}),n.jsxs(e.td,{children:["cao ",n.jsx(e.code,{children:"--table-header-height"})," (",n.jsx(e.strong,{children:"48"})," · Compact ",n.jsx(e.strong,{children:"32"}),") · padding ngang ",n.jsx(e.code,{children:"--table-cell-padding-x"})," (16 · 12) · gap ",n.jsx(e.strong,{children:"4"})," · viền dưới 1px ",n.jsx(e.code,{children:"border-muted"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Nhãn"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"title-sm"})," · ",n.jsx(e.code,{children:"object-secondary"}),"; ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"object-primary"})})," khi ",n.jsx(e.code,{children:"Ascending"})," / ",n.jsx(e.code,{children:"Descending"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Icon sắp xếp"}),n.jsxs(e.td,{children:["16 · ",n.jsx(e.code,{children:"Ascending"})," ",n.jsx(e.code,{children:"arrow-up"})," · ",n.jsx(e.code,{children:"Descending"})," ",n.jsx(e.code,{children:"arrow-down"})," (",n.jsx(e.code,{children:"object-primary"}),") · ",n.jsx(e.code,{children:"Unsorted"})," ",n.jsx(e.code,{children:"sort-vertical"})," ",n.jsx(e.code,{children:"object-secondary"})," · ",n.jsx(e.code,{children:"Off"})," không icon"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Align=Right"})}),n.jsxs(e.td,{children:["icon đứng ",n.jsx(e.strong,{children:"trước"})," nhãn, cả hai dồn phải. Dùng cho cột số"]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"Hover"})," / ",n.jsx(e.code,{children:"Pressed"})]}),n.jsxs(e.td,{children:["state layer ",n.jsx(e.code,{children:"object-primary"})," · ",n.jsx(e.code,{children:"opacity-5"})," / ",n.jsx(e.code,{children:"opacity-10"})," phủ cả ô — chỉ cột sắp được; ",n.jsx(e.code,{children:"Off"})," không có state"]})]})]})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Off"}),": cột ",n.jsx(e.strong,{children:"không sắp được"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Unsorted"}),": cột sắp được nhưng chưa sắp."]}),`
`,n.jsxs(e.li,{children:["Cột sắp được nhận ",n.jsx(e.code,{children:"onSort"}),": cả ô là vùng bấm (nút giãn ra bằng ",n.jsx(e.code,{children:"::before"}),"), ô mang ",n.jsx(e.code,{children:"aria-sort"}),". Màn tự đổi ",n.jsx(e.code,{children:"sort"})," rồi truyền lại."]}),`
`]}),`
`,n.jsx(e.h2,{id:"tablecell--15-variant",children:"TableCell — 15 variant"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Type"})," (Text · Number · Secondary · Actions · Checkbox) × ",n.jsx(e.code,{children:"State"})," (Default · Hover · Selected)."]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Phần"}),n.jsx(e.th,{children:"Giá trị"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Ô"}),n.jsxs(e.td,{children:["cao ",n.jsx(e.code,{children:"--table-row-height"})," (",n.jsx(e.strong,{children:"56"})," · Compact ",n.jsx(e.strong,{children:"40"}),") · padding ngang ",n.jsx(e.code,{children:"--table-cell-padding-x"})," · gap ",n.jsx(e.strong,{children:"8"})," · viền dưới 1px ",n.jsx(e.code,{children:"border-muted"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Text"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"Content"})," ",n.jsx(e.code,{children:"body"})," ",n.jsx(e.code,{children:"object-primary"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Secondary"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"caption"})," ",n.jsx(e.code,{children:"object-secondary"}),": cột phụ như mã, ngày tạo, ghi chú"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Number"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"body"})," căn ",n.jsx(e.strong,{children:"phải"}),", ",n.jsx(e.code,{children:"font-variant-numeric: tabular-nums"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Actions"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"TextButtonAccent"})," ",n.jsx(e.strong,{children:"Ghost Small"})," (bật/tắt bằng ",n.jsx(e.code,{children:"textButton"}),") + ",n.jsx(e.code,{children:"IconButtonNeutral"})," ",n.jsx(e.strong,{children:"Ghost Small"})," ",n.jsx(e.code,{children:"dots"})," mở ",n.jsx(e.code,{children:"Menu"})," (bật/tắt bằng ",n.jsx(e.code,{children:"iconButton"}),")"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Checkbox"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"Checkbox"})," để chọn hàng · ô rộng ",n.jsx(e.strong,{children:"64"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Hover"})}),n.jsxs(e.td,{children:["state layer ",n.jsx(e.code,{children:"object-primary"})," · ",n.jsx(e.code,{children:"opacity-5"})," phủ cả ô"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"Selected"})}),n.jsxs(e.td,{children:["nền ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"background-interactive-muted"})})]})]})]})]}),`
`,n.jsx(e.h2,{id:"quy-tắc",children:"Quy tắc"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Hover và chọn là trạng thái của ",n.jsx(e.strong,{children:"cả hàng"}),": mọi ô trong hàng cùng ",n.jsx(e.code,{children:"State"}),". Đặt ",n.jsx(e.code,{children:"state"})," trên ",n.jsx(e.code,{children:"TableRow"})," thay vì từng ô. Hàng trong ",n.jsx(e.code,{children:"<tbody>"})," tự hiện state layer khi rê chuột."]}),`
`,n.jsxs(e.li,{children:["Cột số căn phải cả tiêu đề lẫn ô: ",n.jsx(e.code,{children:'align="right"'})," + ",n.jsx(e.code,{children:'type="number"'}),"."]}),`
`,n.jsxs(e.li,{children:["Hành động theo dòng ",n.jsxs(e.strong,{children:["không bao giờ ",n.jsx(e.code,{children:"Solid"})]})," (§6.1 ",n.jsx(e.em,{children:"Mức nhấn"}),"). Từ hai hành động trở lên: giữ một nút ",n.jsx(e.code,{children:"Ghost"}),' Small cho hành động hay dùng nhất, phần còn lại vào menu "⋯". Hành động phá huỷ nằm trong menu "⋯" và xác nhận bằng ',n.jsx(e.code,{children:"Dialog"})," có ",n.jsx(e.code,{children:"TextButtonDanger"})," Solid."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Hover"})," của ô không đổi nền, không đổi chữ: chỉ phủ lớp ",n.jsx(e.code,{children:"::after"})," (§6.0)."]}),`
`,n.jsxs(e.li,{children:["Trạng thái chọn được đọc qua ",n.jsx(e.code,{children:"Checkbox"})," của ô chọn hàng (đặt ",n.jsx(e.code,{children:"checkboxLabel"}),', ví dụ "Chọn đơn DH-1024"). Nền ',n.jsx(e.code,{children:"Selected"})," chỉ là tín hiệu thị giác."]}),`
`]}),`
`,n.jsx(x,{type:"warning",title:"Chưa chốt",children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Cột cố định"})," khi cuộn ngang."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hàng mở rộng"})," và ",n.jsx(e.strong,{children:"sửa trực tiếp trong ô"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Kéo đổi thứ tự cột"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hàng rỗng / đang tải"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ô trạng thái"}),": ",n.jsx(e.code,{children:"StatusIndicator"})," trong ô chưa có variant riêng. Màn tự đặt vào ô ",n.jsx(e.code,{children:"Text"})," thì được."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mật độ thứ ba"})," ngoài Touch và Compact."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:'Ô "chọn tất cả"'})," ở hàng tiêu đề: bản vẽ chưa có. Bản web để trống ô tiêu đề cột chọn."]}),`
`]})}),`
`,n.jsx(t,{includePrimary:!1})]})}function k(c={}){const{wrapper:e}={...l(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(s,{...c})}):s(c)}export{k as default};

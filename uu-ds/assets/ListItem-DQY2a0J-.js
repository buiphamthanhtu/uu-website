import{j as n}from"./iframe-C_-gGjYv.js";import{useMDXComponents as h}from"./index-ieplFZ-y.js";import{M as s,C as c,a as r}from"./blocks-DahwRc38.js";import{D as l}from"./DocHeader-Ce4J5Wvi.js";import{S as o,P as d,L as x,a as j,G as a}from"./ListItem.stories-CGUoMGpd.js";import"./preload-helper-Dp1pzeXC.js";import"./Badge-CsU57QIC.js";import"./NotificationBadge-Cd-C7-dS.js";import"./ListItem-cQr16Ypm.js";import"./Checkbox-DzdalICo.js";/* empty css                 */import"./Radio-DcednbfC.js";import"./Switch-DAajHUX5.js";function t(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...h(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:o}),`
`,n.jsx(i.h1,{id:"listitem",children:"ListItem"}),`
`,n.jsx(l,{spec:"6.32",variants:"4",status:"chốt",children:n.jsx(i.p,{children:`Hàng danh sách dùng chung — trang cài đặt, danh sách tài khoản / địa chỉ / đơn hàng, danh bạ. Switch, Checkbox,
chevron… là kiểu phần đầu / đuôi của cùng một hàng.`})}),`
`,n.jsx(c,{of:d}),`
`,n.jsx(r,{of:d}),`
`,n.jsx(i.h2,{id:"khi-nào-dùng",children:"Khi nào dùng"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Danh sách các mục cùng loại, mỗi hàng một mục: bấm hàng để mở, bật, hoặc chọn."}),`
`,n.jsxs(i.li,{children:["Thiết lập bật / tắt trong trang cài đặt → ",n.jsx(i.code,{children:"ListItem"})," có Switch ở đuôi (không có ",n.jsx(i.code,{children:"SwitchInput"})," riêng)."]}),`
`,n.jsxs(i.li,{children:["Danh sách lựa chọn dài → ",n.jsx(i.code,{children:"ListItem"})," có Checkbox / Radio ở đầu thay ",n.jsx(i.code,{children:"CheckboxInput"})," / ",n.jsx(i.code,{children:"RadioInput"}),"."]}),`
`,n.jsxs(i.li,{children:["Dữ liệu nhiều cột, cần sắp xếp → ",n.jsx(i.code,{children:"Table"}),". Panel lựa chọn neo vào ô → ",n.jsx(i.code,{children:"Menu"}),"."]}),`
`]}),`
`,n.jsx(i.h2,{id:"cấu-trúc",children:"Cấu trúc"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"[Leading] [Title / Description] [Trailing] [Action]"})," — ngang, gap 12, padding trái ",n.jsx(i.code,{children:"list/padding-x"}),`; phần thân
(Content + Trailing) padding dọc `,n.jsx(i.code,{children:"list/padding-y"}),", phải ",n.jsx(i.code,{children:"list/padding-x"}),". Cao tối thiểu ",n.jsx(i.code,{children:"list/min-height"}),"."]}),`
`,n.jsxs(i.table,{children:[n.jsx(i.thead,{children:n.jsxs(i.tr,{children:[n.jsx(i.th,{children:"Phần"}),n.jsx(i.th,{children:"Giá trị"})]})}),n.jsxs(i.tbody,{children:[n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Leading"}),n.jsxs(i.td,{children:[n.jsx(i.code,{children:"Icon"})," 24 · ",n.jsx(i.code,{children:"ListIconContainer"})," (tròn 40, ",n.jsx(i.code,{children:"background-accent-muted"}),") · ",n.jsx(i.code,{children:"ListAvatar"})," (tròn 40) · Checkbox · Radio"]})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Title"}),n.jsxs(i.td,{children:[n.jsx(i.code,{children:"body"})," ",n.jsx(i.code,{children:"object-primary"}),", tối đa 2 dòng"]})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Description"}),n.jsxs(i.td,{children:[n.jsx(i.code,{children:"caption"})," ",n.jsx(i.code,{children:"object-secondary"})]})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Trailing"}),n.jsxs(i.td,{children:["chevron 16 ",n.jsx(i.code,{children:"object-secondary"})," · ",n.jsx(i.code,{children:"ListValue"})," (",n.jsx(i.code,{children:"body"})," ",n.jsx(i.code,{children:"object-secondary"}),") · Switch · ",n.jsx(i.code,{children:"Badge"})," / ",n.jsx(i.code,{children:"NotificationBadge"})]})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Action"}),n.jsxs(i.td,{children:[n.jsx(i.code,{children:"IconButtonNeutral"})," Ghost Small, vùng bấm riêng"]})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Divider"}),n.jsxs(i.td,{children:["1px ",n.jsx(i.code,{children:"border-muted"}),", bắt đầu ở mép trái Title, sát mép phải"]})]})]})]}),`
`,n.jsx(i.h2,{id:"kích-thước-và-density",children:"Kích thước và density"}),`
`,n.jsxs(i.table,{children:[n.jsx(i.thead,{children:n.jsxs(i.tr,{children:[n.jsx(i.th,{children:"Token"}),n.jsx(i.th,{children:"Touch"}),n.jsx(i.th,{children:"Compact"})]})}),n.jsxs(i.tbody,{children:[n.jsxs(i.tr,{children:[n.jsx(i.td,{children:n.jsx(i.code,{children:"list/min-height"})}),n.jsx(i.td,{children:"56"}),n.jsx(i.td,{children:"40"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:n.jsx(i.code,{children:"list/padding-x"})}),n.jsx(i.td,{children:"16"}),n.jsx(i.td,{children:"12"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:n.jsx(i.code,{children:"list/padding-y"})}),n.jsx(i.td,{children:"12"}),n.jsx(i.td,{children:"8"})]})]})]}),`
`,n.jsx(c,{of:x}),`
`,n.jsx(i.h2,{id:"màu-và-trạng-thái",children:"Màu và trạng thái"}),`
`,n.jsxs(i.p,{children:["State layer ",n.jsx(i.code,{children:"object-primary"})," 5 / 10 (Hover / Pressed) phủ cả hàng. Disabled: chữ ",n.jsx(i.code,{children:"object-disabled"}),`, phần đầu / đuôi
Disabled, không state layer. Hàng chỉ hiển thị (không bấm được) không có state layer.`]}),`
`,n.jsx(c,{of:j}),`
`,n.jsx(i.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Có Checkbox / Radio / Switch: bấm chỗ nào trên hàng cũng là bật / chọn."}),`
`,n.jsx(i.li,{children:"Action có vùng bấm riêng — bấm Action không kích hoạt hàng."}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"ListGroup"})," gom nhiều hàng: tiêu đề ",n.jsx(i.code,{children:"title-xs"})," IN HOA, khối nền ",n.jsx(i.code,{children:"background-surface"})," bo ",n.jsx(i.code,{children:"radius-lg"}),`, vạch ngăn giữa
các hàng (hàng cuối không có).`]}),`
`]}),`
`,n.jsx(c,{of:a}),`
`,n.jsx(i.h2,{id:"truy-cập",children:"Truy cập"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Hàng chỉ có ",n.jsx(i.code,{children:"onClick"})," là một nút (",n.jsx(i.code,{children:'role="button"'}),`, Enter / Space). Hàng có ô chọn: ô chọn là phần tử nhận Tab, tên
lấy từ Title.`]}),`
`,n.jsxs(i.li,{children:["Action là nút riêng, có nhãn. Trong ",n.jsx(i.code,{children:"ListGroup"})," các hàng là ",n.jsx(i.code,{children:"listitem"}),"."]}),`
`]}),`
`,n.jsx(i.h2,{id:"code",children:"Code"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`<ListGroup title="Cài đặt">
  <ListItem title="Thông báo đẩy" selection={{ type: 'switch', checked: push, onChange: setPush }} />
  <ListItem title="Ngôn ngữ" trailing={<ListValue>Tiếng Việt</ListValue>} onClick={openLanguage} />
  <ListItem title="Địa chỉ" leading={<ListIconContainer icon="texture" />} trailing="chevron" onClick={openAddress} />
</ListGroup>
`})})]})}function D(e={}){const{wrapper:i}={...h(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(t,{...e})}):t(e)}export{D as default};

import{j as n,T as i,d as c}from"./iframe-BgqkvPSF.js";import{useMDXComponents as o}from"./index-IUiUsWVY.js";import{M as h}from"./blocks-DqGHE5Ez.js";import{B as s}from"./tokens-CPYIUd7z.js";import{C as d}from"./DocHeader-BfZ0-cHx.js";import"./ToggleButton-Cu-cY7GU.js";import{S as a}from"./SegmentedControl-B-9TBRpt.js";import"./FieldLabel-9oBzg30I.js";import"./TextInput-CqH-Geha.js";import"./TextArea-Bkz70rxV.js";import"./OTPInput-CwAqES25.js";import"./SearchInput-CrjDxj_t.js";import"./DateInput-BlROdHuf.js";import"./Dropdown-BgUIz6aq.js";import"./Menu-BFsJIMXC.js";import{C as l}from"./Checkbox-KhdnmuHd.js";import{a as m}from"./Radio-ByGUMTwU.js";import"./Switch-Dbfyoorf.js";import"./Chip-BiWzh-xk.js";import"./NavigationBar-Cdaoq6hW.js";import"./BottomBar-Du14NgeM.js";import{P as x}from"./Pagination-XntNO2n0.js";import"./Tab-Cc-x7X6a.js";import"./Badge-BlUafhth.js";import"./StatusIndicator-WJ3KCfXG.js";import"./NotificationBadge-DLHiGj7e.js";import"./ButtonGroup-DtxDVHzs.js";import"./BottomSheet-DkTuy8LJ.js";import"./Dialog-B7mI91Ww.js";import"./Table-BtkD7z2C.js";import"./TablePagination-CBlicwk8.js";import"./Breadcrumb-B_LLkpp5.js";import"./KPICard-_6lgDInO.js";import"./SideNav-BClA5IDR.js";import"./SideSheet-BPHKbhMS.js";import"./Popover-C70JwflW.js";import"./Tooltip-Wzriqkau.js";import{R as p}from"./layout-DPQWCONv.js";import"./preload-helper-Dp1pzeXC.js";/* empty css              *//* empty css                 *//* empty css                    */function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"Nền tảng/Brand mode"}),`
`,n.jsx(t.h1,{id:"brand-mode",children:"Brand mode"}),`
`,n.jsxs(t.p,{children:["Màu thương hiệu của UU DS gói trong ",n.jsx(t.strong,{children:"đúng 20 token"}),". Mọi component chỉ đọc token semantic, nên đổi màu thương hiệu — hay thêm hẳn một brand mới — là đổi một khối token, không sửa component nào."]}),`
`,n.jsxs(p,{children:[n.jsx(i,{children:"Accent solid"}),n.jsx(i,{type:"outline",children:"Accent outline"}),n.jsx(c,{children:"Neutral solid"}),n.jsx(l,{checked:!0,"aria-label":"checked"}),n.jsx(m,{checked:!0,"aria-label":"checked"}),n.jsx(a,{"aria-label":"demo",items:[{value:"a",label:"Page"},{value:"b",label:"Page"}],value:"a",onChange:()=>{}}),n.jsx(x,{position:"begin"})]}),`
`,n.jsx(d,{type:"info",title:"Màu thương hiệu UU",children:n.jsxs(t.p,{children:["Đã chốt theo file Figma UU DLS: ",n.jsx(t.code,{children:"interactive"})," → ramp indigo, ",n.jsx(t.code,{children:"accent"})," → ramp blue, nền và viền trung tính → ramp slate. Đổi màu thương hiệu thì chỉ sửa đúng 20 token này trong ",n.jsx(t.code,{children:"tokens.css"})," / ",n.jsx(t.code,{children:"tokens.json"}),", rồi đo lại các cặp phụ thuộc màu thương hiệu ở ",n.jsx(t.a,{href:"?path=/docs/n%E1%BB%81n-t%E1%BA%A3ng-contrast-accessibility--t%C3%A0i-li%E1%BB%87u",children:"Contrast & Accessibility"}),"."]})}),`
`,n.jsx(t.h2,{id:"nhóm-token-thương-hiệu",children:"Nhóm token thương hiệu"}),`
`,n.jsx(s,{}),`
`,n.jsxs(t.p,{children:["Mọi token còn lại — status (",n.jsx(t.code,{children:"positive"})," / ",n.jsx(t.code,{children:"negative"})," / ",n.jsx(t.code,{children:"warning"})," / ",n.jsx(t.code,{children:"attention"}),"), thang viền xám, ",n.jsx(t.code,{children:"object-primary"}),", overlay — ",n.jsx(t.strong,{children:"không đổi theo brand"}),"."]}),`
`,n.jsxs(t.h2,{id:"accent--interactive",children:[n.jsx(t.code,{children:"accent"})," ≠ ",n.jsx(t.code,{children:"interactive"})]}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:n.jsx(t.code,{children:"interactive"})})," — thứ ",n.jsx(t.strong,{children:"bấm được"}),": nút, link, field focus, radio/checkbox đã chọn, tab, hàng option đang chọn."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:n.jsx(t.code,{children:"accent"})})," — chỗ ",n.jsx(t.strong,{children:"nhấn nội dung"}),", không bấm được: Pagination, con trỏ OTP."]}),`
`,n.jsxs(t.li,{children:["Nền trung tính ",n.jsx(t.code,{children:"background-muted/subtle/emphasized"})," và viền thương hiệu ",n.jsx(t.code,{children:"border-subtle/medium"})," cũng thuộc nhóm này: một brand có thể chọn nền ấm hay lạnh tuỳ nhận diện."]}),`
`]}),`
`,n.jsxs(t.p,{children:["Hiện ",n.jsx(t.code,{children:"accent"})," trỏ ramp ",n.jsx(t.strong,{children:"blue"}),", ",n.jsx(t.code,{children:"interactive"})," trỏ ramp ",n.jsx(t.strong,{children:"indigo"}),", nền và viền trung tính trỏ ramp ",n.jsx(t.strong,{children:"slate"})," (theo file Figma UU DLS). Hai nhóm khác màu nên dùng lẫn là lộ ngay trên màn: nút bấm mà mang màu ",n.jsx(t.code,{children:"accent"})," sẽ lệch tông với mọi nút khác."]}),`
`,n.jsx(t.h2,{id:"thêm-một-brand",children:"Thêm một brand"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`[data-theme="ten-brand"] {
  --background-interactive: var(--color-…);
  --object-interactive: var(--color-…);
  /* …chỉ ghi đè 20 token trong bảng trên */
}
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<html data-theme="ten-brand">
`})}),`
`,n.jsxs(t.p,{children:["Trong ",n.jsx(t.code,{children:"tokens.json"})," thêm một khoá cạnh ",n.jsx(t.code,{children:"semantic.color.uu"}),", rồi ",n.jsx(t.code,{children:"npm run tokens:dart"})," để bản Flutter có thêm giá trị ",n.jsx(t.code,{children:"UuBrand"}),"."]}),`
`,n.jsx(t.h2,{id:"trong-code",children:"Trong code"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Không viết ",n.jsx(t.code,{children:"if (brand === …)"}),". Nếu phải viết là đang làm sai."]}),`
`,n.jsx(t.li,{children:"Không tạo màu riêng cho từng brand trong component. Cần một vai chưa có → thêm token semantic vào nhóm đúng vai."}),`
`,n.jsx(t.li,{children:"Có từ hai brand trở lên thì mọi story phải đúng ở tất cả brand."}),`
`]})]})}function rn(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{rn as default};

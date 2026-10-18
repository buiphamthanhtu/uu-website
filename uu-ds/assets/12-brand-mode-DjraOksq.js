import{j as n,T as i,d as c}from"./iframe-o9qWa12E.js";import{useMDXComponents as o}from"./index-C2ilI4C6.js";import{M as h}from"./blocks-DUuIq9BS.js";import{B as s}from"./tokens-x2TgvMxy.js";import{C as d}from"./DocHeader-CFI7Q7vw.js";import"./ToggleButton-DsBVQPyh.js";import{S as a}from"./SegmentedControl-D6j8z5tK.js";import"./FieldLabel-Bf-zevn4.js";import"./TextInput-ZjZ_5fI_.js";import"./TextArea-C4GRcruh.js";import"./OTPInput-BrUjSJZs.js";import"./SearchInput-DxGsjQln.js";import"./DateInput-B4HlSgFB.js";import"./Dropdown-BSd8wtbW.js";import"./Menu-8leUQu75.js";import{C as l}from"./Checkbox-DEUlmVWm.js";import{a as m}from"./Radio-DQpo1kZY.js";import"./Switch-BRyzkqNn.js";import"./Chip-D-741wOH.js";import"./NavigationBar-BLcrGpsq.js";import"./BottomBar-CLkPKDAr.js";import{P as x}from"./Pagination-CEh5ZCMj.js";import"./Tab-CM5o7EIL.js";import"./Badge-Bfn3qyq5.js";import"./StatusIndicator-BsSwe8ao.js";import"./NotificationBadge-CwbmiFlO.js";import"./ButtonGroup-CpKlSYPb.js";import"./BottomSheet-DybJX-oQ.js";import"./Dialog-fxEFmzg8.js";import"./Table-BsSRo8-I.js";import"./TablePagination-B21QmpIg.js";import"./Breadcrumb-CIbva9Rw.js";import"./KPICard-BNE4-_h4.js";import"./SideNav-CE0HWfHm.js";import"./SideSheet-FKVYC5pq.js";import"./Popover-sSyvgDIb.js";import"./Tooltip-CABAn2vz.js";import{R as p}from"./layout-Bfiz2Kkg.js";import"./preload-helper-Dp1pzeXC.js";/* empty css              *//* empty css                 *//* empty css                    */function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"Nền tảng/Brand mode"}),`
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

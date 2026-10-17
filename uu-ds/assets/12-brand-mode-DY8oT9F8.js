import{j as n,T as i,d as o}from"./iframe-B79aK45l.js";import{useMDXComponents as c}from"./index-Cb9q3bXr.js";import{M as h}from"./blocks-VAgSek84.js";import{B as s}from"./tokens-BOwm3z2U.js";import{C as d}from"./DocHeader-zJ2NFdah.js";import"./ToggleButton-NJZkpZLr.js";import{S as a}from"./SegmentedControl-DWR3y5qm.js";import"./FieldLabel-DuvZT9eh.js";import"./TextInput-CBFggjz6.js";import"./TextArea-D0OqB7nE.js";import"./OTPInput-DPY0PYHc.js";import"./SearchInput-BQppooz6.js";import"./DateInput-BSDGb86Y.js";import"./Dropdown-CAFV5wI0.js";import"./Menu-BpLlZ3j1.js";import{C as l}from"./Checkbox-rM6L8sn3.js";import{a as m}from"./Radio-BAQ9ZMw9.js";import"./Switch-CT-VjuB6.js";import"./Chip-BVEdaqZW.js";import"./NavigationBar-DZyYmnuo.js";import"./BottomBar-D3H3Eahd.js";import{P as x}from"./Pagination-D6PJXcs1.js";import"./Tab-CU5TdYwQ.js";import"./Badge-DKUrzDyH.js";import"./StatusIndicator-BhOVN7PX.js";import"./NotificationBadge-B3Fsypaz.js";import"./ButtonGroup-D32OvwhD.js";import"./BottomSheet-qWdkID7Z.js";import"./Dialog-Dqy_vGFa.js";import{R as g}from"./layout-DfDgT8VD.js";import"./preload-helper-Dp1pzeXC.js";/* empty css              *//* empty css                 *//* empty css                    */function r(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"Nền tảng/Brand mode"}),`
`,n.jsx(e.h1,{id:"brand-mode",children:"Brand mode"}),`
`,n.jsxs(e.p,{children:["Màu thương hiệu của UU DS gói trong ",n.jsx(e.strong,{children:"đúng 20 token"}),". Mọi component chỉ đọc token semantic, nên đổi màu thương hiệu — hay thêm hẳn một brand mới — là đổi một khối token, không sửa component nào."]}),`
`,n.jsxs(g,{children:[n.jsx(i,{children:"Accent solid"}),n.jsx(i,{type:"outline",children:"Accent outline"}),n.jsx(o,{children:"Neutral solid"}),n.jsx(l,{checked:!0,"aria-label":"checked"}),n.jsx(m,{checked:!0,"aria-label":"checked"}),n.jsx(a,{"aria-label":"demo",items:[{value:"a",label:"Page"},{value:"b",label:"Page"}],value:"a",onChange:()=>{}}),n.jsx(x,{position:"begin"})]}),`
`,n.jsx(d,{type:"info",title:"Màu thương hiệu UU",children:n.jsxs(e.p,{children:["Đã chốt theo file Figma UU DLS: ",n.jsx(e.code,{children:"interactive"})," → ramp indigo, ",n.jsx(e.code,{children:"accent"})," → ramp blue, nền và viền trung tính → ramp slate. Đổi màu thương hiệu thì chỉ sửa đúng 20 token này trong ",n.jsx(e.code,{children:"tokens.css"})," / ",n.jsx(e.code,{children:"tokens.json"}),", rồi đo lại các cặp phụ thuộc màu thương hiệu ở ",n.jsx(e.a,{href:"?path=/docs/n%E1%BB%81n-t%E1%BA%A3ng-contrast-accessibility--t%C3%A0i-li%E1%BB%87u",children:"Contrast & Accessibility"}),"."]})}),`
`,n.jsx(e.h2,{id:"nhóm-token-thương-hiệu",children:"Nhóm token thương hiệu"}),`
`,n.jsx(s,{}),`
`,n.jsxs(e.p,{children:["Mọi token còn lại — status (",n.jsx(e.code,{children:"positive"})," / ",n.jsx(e.code,{children:"negative"})," / ",n.jsx(e.code,{children:"warning"})," / ",n.jsx(e.code,{children:"attention"}),"), thang viền xám, ",n.jsx(e.code,{children:"object-primary"}),", overlay — ",n.jsx(e.strong,{children:"không đổi theo brand"}),"."]}),`
`,n.jsxs(e.h2,{id:"accent--interactive",children:[n.jsx(e.code,{children:"accent"})," ≠ ",n.jsx(e.code,{children:"interactive"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"interactive"})})," — thứ ",n.jsx(e.strong,{children:"bấm được"}),": nút, link, field focus, radio/checkbox đã chọn, tab, hàng option đang chọn."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"accent"})})," — chỗ ",n.jsx(e.strong,{children:"nhấn nội dung"}),", không bấm được: Pagination, con trỏ OTP."]}),`
`,n.jsxs(e.li,{children:["Nền trung tính ",n.jsx(e.code,{children:"background-muted/subtle/emphasized"})," và viền thương hiệu ",n.jsx(e.code,{children:"border-subtle/medium"})," cũng thuộc nhóm này: một brand có thể chọn nền ấm hay lạnh tuỳ nhận diện."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Hiện ",n.jsx(e.code,{children:"accent"})," trỏ ramp ",n.jsx(e.strong,{children:"blue"}),", ",n.jsx(e.code,{children:"interactive"})," trỏ ramp ",n.jsx(e.strong,{children:"indigo"}),", nền và viền trung tính trỏ ramp ",n.jsx(e.strong,{children:"slate"})," (theo file Figma UU DLS). Hai nhóm khác màu nên dùng lẫn là lộ ngay trên màn: nút bấm mà mang màu ",n.jsx(e.code,{children:"accent"})," sẽ lệch tông với mọi nút khác."]}),`
`,n.jsx(e.h2,{id:"thêm-một-brand",children:"Thêm một brand"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`[data-theme="ten-brand"] {
  --background-interactive: var(--color-…);
  --object-interactive: var(--color-…);
  /* …chỉ ghi đè 20 token trong bảng trên */
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<html data-theme="ten-brand">
`})}),`
`,n.jsxs(e.p,{children:["Trong ",n.jsx(e.code,{children:"tokens.json"})," thêm một khoá cạnh ",n.jsx(e.code,{children:"semantic.color.uu"}),", rồi ",n.jsx(e.code,{children:"npm run tokens:dart"})," để bản Flutter có thêm giá trị ",n.jsx(e.code,{children:"UuBrand"}),"."]}),`
`,n.jsx(e.h2,{id:"trong-code",children:"Trong code"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Không viết ",n.jsx(e.code,{children:"if (brand === …)"}),". Nếu phải viết là đang làm sai."]}),`
`,n.jsx(e.li,{children:"Không tạo màu riêng cho từng brand trong component. Cần một vai chưa có → thêm token semantic vào nhóm đúng vai."}),`
`,n.jsx(e.li,{children:"Có từ hai brand trở lên thì mọi story phải đúng ở tất cả brand."}),`
`]})]})}function V(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{V as default};

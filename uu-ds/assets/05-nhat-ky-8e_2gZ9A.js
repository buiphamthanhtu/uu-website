import{j as n}from"./iframe-B9x1_Cao.js";import{useMDXComponents as i}from"./index-BsU1bdNi.js";import{M as c}from"./blocks-DoNITzeo.js";import"./preload-helper-Dp1pzeXC.js";function e(h){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Bắt đầu/Nhật ký"}),`
`,`
`,n.jsx(t.h1,{id:"nhật-ký-thay-đổi",children:"Nhật ký thay đổi"}),`
`,n.jsx(t.p,{children:"Mỗi phiên bản phát hành có một mục, chia theo bốn nhóm: Cần sửa app, Mới, Thay đổi, Sửa lỗi."}),`
`,n.jsx(t.h2,{id:"100--2026-11-10",children:"1.0.0 — 2026-11-10"}),`
`,n.jsxs(t.p,{children:["Web ",n.jsx(t.code,{children:"uu-ds"})," 1.0.0 · Flutter ",n.jsx(t.code,{children:"uu_ds_flutter"})," 1.0.0 · React Native ",n.jsx(t.code,{children:"uu-ds-native"})," 1.0.0."]}),`
`,n.jsxs(t.p,{children:["Cài: Web ",n.jsx(t.code,{children:'npm i "github:buiphamthanhtu/uu-ds#web-v1.0.0"'})," · React Native ",n.jsx(t.code,{children:'npm i "github:buiphamthanhtu/uu-ds#native-v1.0.0"'})," · Flutter ",n.jsx(t.code,{children:"ref: flutter-v1.0.0"})," trong ",n.jsx(t.code,{children:"pubspec.yaml"}),"."]}),`
`,n.jsx(t.p,{children:"Bản phát hành đầu tiên của UU Design system."}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Token hai tầng"}),": primitive → semantic cho màu, chữ, khoảng cách, bo góc, đổ bóng, blur. Đổi thương hiệu chỉ cần sửa nhóm token thương hiệu, component giữ nguyên."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Density và layout"}),": Touch / Compact cho mật độ, Expanded / Collapsed cho khung điều hướng. Đổi bằng một thuộc tính, không sửa component."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"State layer"})," là cách duy nhất để hiện hover và pressed. Chữ và nền đạt tương phản WCAG AA ở mọi brand."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Component và template màn"})," cùng tên, cùng thuộc tính trên Web (React), Flutter và React Native. Zalo Mini App dùng thẳng bản Web."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Product DNA"}),": style riêng của sản phẩm (màu, bo góc, viền, bóng, font, bộ icon) khai trong một file ",n.jsx(t.code,{children:"DNA.md"}),", không sửa component."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"UU icon"})," cho component, hai kiểu outline và fill. Sản phẩm cần thêm icon thì gắn bộ riêng qua DNA."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Cây quyết định"})," cho các chỗ dễ chọn sai: chọn một hay nhiều, đặt lỗi ở đâu, trường bắt buộc."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Cho AI đọc"}),": spec, token và bản đồ hệ thống ở dạng máy đọc, cùng nội dung với các trang ở đây. Skill cho AI cài bằng một lệnh: ",n.jsx(t.code,{children:"npx skills add buiphamthanhtu/uu-ds --skill uu-design-system"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Dựng theo màn mẫu"}),": đưa AI vài màn đã có (Figma, code, ảnh chụp hoặc website), AI trích DNA rồi dựng màn mới giống sản phẩm đó."]}),`
`,n.jsxs(t.li,{children:[n.jsxs(t.strong,{children:["Bộ chấm ",n.jsx(t.code,{children:"uu-ds-check"})]}),": chạy ",n.jsx(t.code,{children:"npx uu-ds-check src"})," để soát code web theo luật của UU DS, như dùng sai token hay tự chế component. Thêm ",n.jsx(t.code,{children:"--strict"})," để CI dừng khi còn lỗi nặng."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Widgetbook cho Flutter"}),": xem widget Flutter chạy thật trên web, đổi brand, density, khổ máy và DNA. Link ở trang Phát triển / Flutter."]}),`
`]})]})}function d(h={}){const{wrapper:t}={...i(),...h.components};return t?n.jsx(t,{...h,children:n.jsx(e,{...h})}):e(h)}export{d as default};

import{j as n}from"./iframe-DqdT0fUx.js";import{useMDXComponents as s}from"./index-CrbH4AOb.js";import{M as d}from"./blocks-CH4yrF42.js";import"./preload-helper-Dp1pzeXC.js";function t(c){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Phát triển/Web (React)"}),`
`,n.jsx(e.h1,{id:"web-react",children:"Web (React)"}),`
`,n.jsxs(e.p,{children:["Bộ React trong ",n.jsx(e.code,{children:"src/"})," là implement tham chiếu của UU DS: React 19, TypeScript, CSS thuần trên ",n.jsx(e.code,{children:"tokens.css"}),", không Tailwind, không CSS-in-JS. Package tên ",n.jsx(e.code,{children:"uu-ds"}),", xuất thẳng mã nguồn TypeScript."]}),`
`,n.jsx(e.h2,{id:"cài",children:"Cài"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i git+ssh://git@gitlab.<company>/<group>/uu-ds.git      # hoặc "file:../uu-ds" khi phát triển cạnh nhau
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import 'uu-ds/tokens.css';   // mọi giá trị lấy từ đây
import 'uu-ds/base.css';     // state ép, icon box, spinner
import { TextButtonAccent, TextInput, Icon, BottomSheet } from 'uu-ds';
`})}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Export"}),n.jsx(e.th,{children:"Nội dung"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"uu-ds"})}),n.jsxs(e.td,{children:["toàn bộ component + ",n.jsx(e.code,{children:"Icon"})]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"uu-ds/tokens.css"})," · ",n.jsx(e.code,{children:"uu-ds/tokens.json"})]}),n.jsx(e.td,{children:"token"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"uu-ds/base.css"})}),n.jsx(e.td,{children:"CSS bổ sung"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"uu-ds/icons"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"Icon"}),", ",n.jsx(e.code,{children:"iconNames"}),", ",n.jsx(e.code,{children:"loadIconCategory"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"uu-ds/icons/svg/<name>.svg"})}),n.jsxs(e.td,{children:["file SVG lẻ (",n.jsx(e.code,{children:"?raw"})," với Vite)"]})]})]})]}),`
`,n.jsx(e.h2,{id:"cấu-hình-vite-khi-cài-từ-node_modules",children:"Cấu hình Vite khi cài từ node_modules"}),`
`,n.jsxs(e.p,{children:["Package xuất TypeScript và dùng ",n.jsx(e.code,{children:"import.meta.glob"})," (lazy-load icon theo category), nên phải để Vite xử lý nó như mã nguồn thay vì pre-bundle:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// vite.config.ts
export default defineConfig({
  optimizeDeps: { exclude: ['uu-ds'] },
});
`})}),`
`,n.jsxs(e.p,{children:["Chạy ",n.jsx(e.code,{children:"npm run icons"})," trong repo UU DS trước khi build để có ",n.jsx(e.code,{children:"src/icons/generated/"})," (thư mục này bị gitignore; script ",n.jsx(e.code,{children:"prepare"})," trong package sẽ tự chạy khi cài từ git)."]}),`
`,n.jsx(e.h2,{id:"brand",children:"Brand"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<html data-theme="ten-brand">   <!-- bỏ thuộc tính = brand mode mặc định -->
`})}),`
`,n.jsxs(e.p,{children:["Component không biết mình ở brand nào. Đổi brand lúc chạy: ",n.jsx(e.code,{children:"document.documentElement.toggleAttribute('data-theme')"})," — không cần render lại."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Density"})," (desktop / dashboard): thêm ",n.jsx(e.code,{children:'data-density="compact"'})," trên ",n.jsx(e.code,{children:"<html>"})," hoặc một vùng — control, field và chữ lùi một bậc. Mặc định là ",n.jsx(e.code,{children:"touch"}),". Xem ",n.jsx(e.a,{href:"?path=/docs/n%E1%BB%81n-t%E1%BA%A3ng-density--t%C3%A0i-li%E1%BB%87u",children:"Density"}),"."]}),`
`,n.jsx(e.h2,{id:"kiểm-trước-khi-giao",children:"Kiểm trước khi giao"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`grep -rn "#[0-9A-Fa-f]\\{3,6\\}" src/            # không có hex trong component
grep -rn "var(--color-" src/                   # không dùng primitive
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Hover/Pressed không có rule nào đổi ",n.jsx(e.code,{children:"background"}),"/",n.jsx(e.code,{children:"color"}),"/",n.jsx(e.code,{children:"font-weight"}),"."]}),`
`,n.jsx(e.li,{children:"Đổi giá trị nhóm token thương hiệu thì nút, link, field focus, radio/checkbox đổi theo; màu status giữ nguyên."}),`
`,n.jsxs(e.li,{children:["Mọi ",n.jsx(e.code,{children:"Icon name"})," đều có trong ",n.jsx(e.code,{children:"src/icons/manifest.json"}),"."]}),`
`]})]})}function l(c={}){const{wrapper:e}={...s(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(t,{...c})}):t(c)}export{l as default};

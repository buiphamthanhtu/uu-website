import{j as n}from"./iframe-C4b24c-y.js";import{useMDXComponents as c}from"./index-BW_DOahZ.js";import{M as i}from"./blocks-Zak_5wSC.js";import"./preload-helper-Dp1pzeXC.js";function t(r){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Nền tảng/Kiến trúc token"}),`
`,n.jsx(e.h1,{id:"kiến-trúc-token",children:"Kiến trúc token"}),`
`,n.jsxs(e.p,{children:["Hệ thống dùng ",n.jsx(e.strong,{children:"2 tầng"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`core (179 var)          → primitive: rem (43), size (35), color ramp (81), opacity (20)
  ├─ color (57 var)     → semantic, theo brand mode (hiện có 1: uu)
  ├─ typography (27)    → font size/weight/family/line-height, 2 mode: Default | Active
  ├─ gap (19)           → spacing
  └─ radius (9)         → bo góc
`})}),`
`,n.jsxs(e.h2,{id:"quy-ước-đặt-tên-semantic-vai-trò-biến-thể",children:["Quy ước đặt tên semantic: ",n.jsx(e.code,{children:"{vai-trò}-{biến-thể}"})]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Tiền tố"}),n.jsx(e.th,{children:"Dùng cho"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"background-*"})}),n.jsx(e.td,{children:"nền frame / shape"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"object-*"})}),n.jsx(e.td,{children:"màu của nội dung: text, icon, vector"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"border-*"})}),n.jsx(e.td,{children:"màu stroke"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"overlay*"})}),n.jsx(e.td,{children:"lớp phủ có alpha"})]})]})]}),`
`,n.jsxs(e.p,{children:["Hậu tố: ",n.jsx(e.code,{children:"-muted"})," nhạt hơn · ",n.jsx(e.code,{children:"-emphasized"})," đậm hơn · ",n.jsx(e.code,{children:"-inverted"})," dùng trên nền tối · ",n.jsx(e.code,{children:"-on-X"})," nội dung nằm trên nền X."]}),`
`,n.jsx(e.h2,{id:"dùng-đúng-tầng-không-chỉ-đúng-màu",children:"Dùng đúng tầng, không chỉ đúng màu"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"var(--color-red-40)"})," và ",n.jsx(e.code,{children:"var(--background-accent-emphasized)"})," cùng ra ",n.jsx(e.code,{children:"#F87171"}),'. Nhìn không phân biệt được, mọi phép kiểm "cấm hex" đều cho qua. Nhưng primitive là ',n.jsx(e.strong,{children:"một bậc trên thang màu"}),", semantic là ",n.jsx(e.strong,{children:"một vai trò"}),". Viết primitive vào component là cắt sợi dây giữa hai tầng: đổi brand không theo, và người đọc spec tra vai trò đó không ra."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Đã xảy ra thật: một gradient nền section dựng bằng ",n.jsx(e.code,{children:"--color-red-40"}),", sống nhiều tháng vì trông đúng y hệt. Chỉ lộ ra khi đọc lại ",n.jsx(e.code,{children:"get_design_context"})," của chính node đó."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Luật:"})," ",n.jsx(e.code,{children:"--color-*"})," chỉ xuất hiện trong định nghĩa token semantic (",n.jsx(e.code,{children:"tokens.css"})," ",n.jsx(e.code,{children:":root"}),"), không xuất hiện trong component. Cần một màu mà không có token đúng vai → thêm token vào UU DS trước."]}),`
`,n.jsx(e.h2,{id:"alpha-nằm-trên-token-không-trên-primitive",children:"Alpha nằm trên token, không trên primitive"}),`
`,n.jsxs(e.p,{children:["Không primitive nào mang sẵn alpha. ",n.jsx(e.code,{children:"overlay"}),", ",n.jsx(e.code,{children:"overlay-strong"}),", ",n.jsx(e.code,{children:"background-transparent"})," compose từ primitive đặc + một bậc ",n.jsx(e.code,{children:"opacity-*"})," ngay tại tầng semantic:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`--overlay: color-mix(in srgb, var(--color-black) 10%, transparent);
--overlay-strong: color-mix(in srgb, var(--color-black) 45%, transparent);
--background-transparent: color-mix(in srgb, var(--color-white) 0%, transparent);
`})}),`
`,n.jsxs(e.p,{children:["Đừng thêm primitive kiểu ",n.jsx(e.code,{children:"black-10"}),", đừng nhân thêm opacity lên fill — alpha đã nằm trong token."]}),`
`,n.jsx(e.h2,{id:"file",children:"File"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"File"}),n.jsx(e.th,{children:"Vai trò"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"src/tokens/tokens.css"})}),n.jsxs(e.td,{children:["CSS custom properties, đủ 2 theme + recipe state layer + text style class ",n.jsx(e.code,{children:".text-*"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"src/tokens/tokens.json"})}),n.jsxs(e.td,{children:["DTCG-style, có ",n.jsx(e.code,{children:"$resolved"}),", dùng để sinh sang nền tảng khác"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"docs/tailwind.js"})}),n.jsx(e.td,{children:"Theme Tailwind trỏ về CSS var — chỉ khi project dùng Tailwind"})]})]})]}),`
`,n.jsxs(e.p,{children:["Mỗi token có phạm vi dùng rõ ràng (nền, chữ, viền, gap, radius) — tôn trọng phạm vi này khi map sang code: ",n.jsx(e.code,{children:"object-*"})," không đặt lên ",n.jsx(e.code,{children:"background"}),", ",n.jsx(e.code,{children:"gap-*"})," không dùng làm ",n.jsx(e.code,{children:"border-radius"}),"."]})]})}function l(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{l as default};

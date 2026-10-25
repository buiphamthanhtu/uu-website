import{j as n,I as i}from"./iframe-6vwN6wb9.js";import{useMDXComponents as r}from"./index-Dlv2haGb.js";import{M as l}from"./blocks-BSM2G-rt.js";import{M as d}from"./Markdown-CvqPMpCq.js";import{R as h,C as o}from"./layout-nPJ89kCs.js";import"./preload-helper-Dp1pzeXC.js";function s(c){const e={code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Kiểu/Icon/Hướng dẫn"}),`
`,n.jsx(e.h1,{id:"icon--bộ-uu-icon",children:"Icon — bộ UU icon"}),`
`,n.jsxs(h,{children:[n.jsx(o,{label:"chevron-left",children:n.jsx(i,{name:"chevron-left"})}),n.jsx(o,{label:"xmark",children:n.jsx(i,{name:"xmark"})}),n.jsx(o,{label:"check · fill",children:n.jsx(i,{name:"check",variant:"fill"})}),n.jsx(o,{label:"calendar-days",children:n.jsx(i,{name:"calendar-days"})}),n.jsx(o,{label:"chevron-down · 16",children:n.jsx(i,{name:"chevron-down",size:16})}),n.jsx(o,{label:"gift · fill",children:n.jsx(i,{name:"gift",variant:"fill"})})]}),`
`,n.jsx(e.h2,{id:"trong-code",children:"Trong code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Icon } from 'uu-ds/src/icons';

<Icon name="chevron-right" />                 // outline, hộp 24
<Icon name="heart" variant="fill" size={16} /> // fill = trạng thái bật
<Icon name="gift" title="Quà tặng" />          // có title → role=img, không thì aria-hidden
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Màu lấy từ ",n.jsx(e.code,{children:"color"})," của phần tử chứa (SVG dùng ",n.jsx(e.code,{children:"currentColor"}),") — đặt token ",n.jsx(e.code,{children:"object-*"})," lên phần tử cha."]}),`
`,n.jsxs(e.li,{children:["Tên không có trong thư viện → hộp nét đứt + cảnh báo console (dev). Tra tên ở trang ",n.jsx(e.strong,{children:"Thư viện"}),", hoặc ",n.jsx(e.code,{children:"src/icons/manifest.json"}),"."]}),`
`,n.jsxs(e.li,{children:["SVG lazy-load theo category (",n.jsx(e.code,{children:"src/icons/generated/*.json"}),", sinh khi ",n.jsx(e.code,{children:"npm run icons"}),"). Cần đồng bộ: ",n.jsx(e.code,{children:"import svg from 'uu-ds/src/icons/svg/xmark.svg?raw'"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"kho-svg-trong-repo",children:"Kho SVG trong repo"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"src/icons/svg/<name>.svg"})," (outline) và ",n.jsx(e.code,{children:"<name>-fill.svg"}),": ",n.jsx(e.strong,{children:"100 tên công khai"})," × 2 = 200 file, viewBox ",n.jsx(e.code,{children:"0 0 18 18"}),", mọi màu là ",n.jsx(e.code,{children:"currentColor"}),", không ",n.jsx(e.code,{children:"width"}),"/",n.jsx(e.code,{children:"height"}),". Hai file ",n.jsx(e.code,{children:"loader-2"}),"/",n.jsx(e.code,{children:"loader-2-fill"})," còn gradient màu cố định (đúng như bản gốc)."]}),`
`,n.jsxs(e.p,{children:["Bộ UU icon đủ 3.423 tên chỉ nằm trong skill ",n.jsx(e.code,{children:"uu-design-system"})," (",n.jsx(e.code,{children:"assets/icons/"}),"), dùng nội bộ. Repo, Storybook deploy và package phát hành chỉ chứa 100 icon ",n.jsx(e.code,{children:"public: true"}),"; muốn công khai thêm icon thì hỏi trước."]}),`
`,n.jsxs(e.p,{children:["Thêm icon công khai: đặt hai file SVG đã chuẩn hoá vào ",n.jsx(e.code,{children:"src/icons/svg/"}),", thêm một dòng vào ",n.jsx(e.code,{children:"src/icons/manifest.json"}),", rồi ",n.jsx(e.code,{children:"npm run icons"})," · ",n.jsx(e.code,{children:"npm run flutter:icons"}),". Chi tiết ở mục ",n.jsx(e.em,{children:"Thêm một icon vào UU icon"})," bên dưới."]}),`
`,n.jsxs(e.p,{children:["Nguồn gốc và giấy phép của bộ glyph: ",n.jsx(e.code,{children:"src/icons/NOTICE.md"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h2,{id:"luật-nguyên-văn-docsiconsmd",children:["Luật (nguyên văn ",n.jsx(e.code,{children:"docs/icons.md"}),")"]}),`
`,n.jsx(d,{src:"docs/icons.md"})]})}function u(c={}){const{wrapper:e}={...r(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(s,{...c})}):s(c)}export{u as default};

import{j as n,R as t,C as i,I as o}from"./iframe-B9x1_Cao.js";import{useMDXComponents as s}from"./index-BsU1bdNi.js";import{M as d}from"./blocks-DoNITzeo.js";import{M as h}from"./Markdown-C0WYKaxb.js";import"./preload-helper-Dp1pzeXC.js";function r(e){const c={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Kiểu/Icon/Hướng dẫn"}),`
`,n.jsx(c.h1,{id:"icon--bộ-uu-icon",children:"Icon — bộ UU icon"}),`
`,n.jsxs(t,{children:[n.jsx(i,{label:"chevron-left",children:n.jsx(o,{name:"chevron-left"})}),n.jsx(i,{label:"xmark",children:n.jsx(o,{name:"xmark"})}),n.jsx(i,{label:"check · fill",children:n.jsx(o,{name:"check",variant:"fill"})}),n.jsx(i,{label:"calendar-days",children:n.jsx(o,{name:"calendar-days"})}),n.jsx(i,{label:"chevron-down · 16",children:n.jsx(o,{name:"chevron-down",size:16})}),n.jsx(i,{label:"texture · fill",children:n.jsx(o,{name:"texture",variant:"fill"})})]}),`
`,n.jsx(c.h2,{id:"trong-code",children:"Trong code"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-tsx",children:`import { Icon } from 'uu-ds/src/icons';

<Icon name="chevron-right" />                 // outline, hộp 24
<Icon name="texture" variant="fill" size={16} /> // fill = trạng thái bật
<Icon name="texture" title="Quà tặng" />          // có title → role=img, không thì aria-hidden
`})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["Màu lấy từ ",n.jsx(c.code,{children:"color"})," của phần tử chứa (SVG dùng ",n.jsx(c.code,{children:"currentColor"}),") — đặt token ",n.jsx(c.code,{children:"object-*"})," lên phần tử cha."]}),`
`,n.jsxs(c.li,{children:["Tên không có trong thư viện → hộp nét đứt + cảnh báo console (dev). Tên có sẵn: ",n.jsx(c.code,{children:"src/icons/manifest.json"}),"."]}),`
`,n.jsxs(c.li,{children:["SVG lazy-load theo category (",n.jsx(c.code,{children:"src/icons/generated/*.json"}),", sinh khi ",n.jsx(c.code,{children:"npm run icons"}),"). Cần đồng bộ: ",n.jsx(c.code,{children:"import svg from 'uu-ds/src/icons/svg/xmark.svg?raw'"}),"."]}),`
`]}),`
`,n.jsx(c.h2,{id:"kho-svg-trong-repo",children:"Kho SVG trong repo"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"src/icons/svg/<name>.svg"})," (outline) và ",n.jsx(c.code,{children:"<name>-fill.svg"}),": mỗi tên công khai hai file, viewBox ",n.jsx(c.code,{children:"0 0 18 18"}),", mọi màu là ",n.jsx(c.code,{children:"currentColor"}),", không ",n.jsx(c.code,{children:"width"}),"/",n.jsx(c.code,{children:"height"}),"."]}),`
`,n.jsxs(c.p,{children:["Các tên công khai là icon component dùng cố định (",n.jsx(c.code,{children:"chevron-*"}),", ",n.jsx(c.code,{children:"xmark"}),", ",n.jsx(c.code,{children:"check"}),", ",n.jsx(c.code,{children:"circle-*"}),", ",n.jsx(c.code,{children:"magnifier"}),", ",n.jsx(c.code,{children:"calendar-days"}),", ",n.jsx(c.code,{children:"clock"}),", ",n.jsx(c.code,{children:"dots"}),", ",n.jsx(c.code,{children:"arrow-*"}),", ",n.jsx(c.code,{children:"sort-vertical"}),", ",n.jsx(c.code,{children:"sidebar-left"}),", ",n.jsx(c.code,{children:"triangle-warning"}),") và ",n.jsx(c.strong,{children:n.jsx(c.code,{children:"texture"})}),", icon giữ chỗ. Mọi ví dụ trong Storybook cần icon minh hoạ (BottomBar, Tab, SideNav, ListItem, Chip…) đều dùng ",n.jsx(c.code,{children:"texture"}),", giống component trên Figma."]}),`
`,n.jsxs(c.p,{children:["22 icon này chỉ để component chạy và làm ví dụ, gói không kèm bộ icon cho sản phẩm. Sản phẩm cần icon thì gắn một bộ: miễn phí như Lucide, hoặc mua license Nucleo, rồi đăng ký cả bộ qua DNA: web ",n.jsx(c.code,{children:"<IconProvider icons={…}>"}),", React Native ",n.jsx(c.code,{children:"<UuProvider icons={…}>"}),", Flutter ",n.jsx(c.code,{children:"uuThemeData(icons: …)"}),". Tên đăng ký ghi đè icon mặc định cùng tên; tên khác vẫn lấy bộ trong gói, nên icon của component vẫn chạy. Một sản phẩm một bộ, không trộn từng icon của hai bộ. Giấy phép của bộ tự gắn thuộc về sản phẩm."]}),`
`,n.jsxs(c.p,{children:["Ví dụ gắn Lucide (miễn phí, gói ",n.jsx(c.code,{children:"lucide-static"})," xuất mỗi icon thành chuỗi SVG, nét ",n.jsx(c.code,{children:"currentColor"}),"):"]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-tsx",children:`import { House, Heart, Settings, X } from 'lucide-static';
import { IconProvider, Icon } from 'uu-ds/icons';

const lucide = {
  home: { outline: House },
  heart: { outline: Heart },        // Lucide không có kiểu fill: trạng thái bật dùng lại outline
  settings: { outline: Settings },
  xmark: { outline: X },            // tuỳ chọn: ghi đè cả icon component dùng cho đồng bộ nét
};

<IconProvider icons={lucide}>
  <App />   {/* trong app: <Icon name="home" /> */}
</IconProvider>
`})}),`
`,n.jsx(c.p,{children:"Lucide nét dày và to hơn UU icon trong cùng hộp. Gắn xong thì xem icon cạnh chữ và nút một lượt trước khi dùng cả bộ."}),`
`,n.jsxs(c.p,{children:["Nguồn gốc và giấy phép của bộ glyph: ",n.jsx(c.code,{children:"src/icons/NOTICE.md"}),"."]}),`
`,n.jsx(c.hr,{}),`
`,n.jsxs(c.h2,{id:"luật-nguyên-văn-docsiconsmd",children:["Luật (nguyên văn ",n.jsx(c.code,{children:"docs/icons.md"}),")"]}),`
`,n.jsx(h,{src:"docs/icons.md"})]})}function j(e={}){const{wrapper:c}={...s(),...e.components};return c?n.jsx(c,{...e,children:n.jsx(r,{...e})}):r(e)}export{j as default};

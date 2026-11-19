import{j as n,M as t,R as d,b as i,I as o}from"./iframe-CWIerLKj.js";import{useMDXComponents as s}from"./index-BCnCjj_m.js";import{M as h}from"./Markdown-BnOqP-qT.js";import"./preload-helper-Dp1pzeXC.js";function r(c){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Kiểu/Icon/Hướng dẫn"}),`
`,n.jsx(e.h1,{id:"bộ-uu-icon",children:"Bộ UU icon"}),`
`,n.jsxs(d,{children:[n.jsx(i,{label:"chevron-left",children:n.jsx(o,{name:"chevron-left"})}),n.jsx(i,{label:"xmark",children:n.jsx(o,{name:"xmark"})}),n.jsx(i,{label:"check · fill",children:n.jsx(o,{name:"check",variant:"fill"})}),n.jsx(i,{label:"calendar-days",children:n.jsx(o,{name:"calendar-days"})}),n.jsx(i,{label:"chevron-down · 16",children:n.jsx(o,{name:"chevron-down",size:16})}),n.jsx(i,{label:"texture · fill",children:n.jsx(o,{name:"texture",variant:"fill"})})]}),`
`,n.jsx(e.h2,{id:"trong-code",children:"Trong code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Icon } from 'uu-ds/src/icons';

<Icon name="chevron-right" />                 // outline, hộp 24
<Icon name="texture" variant="fill" size={16} /> // fill = trạng thái bật
<Icon name="texture" title="Quà tặng" />          // có title → role=img, không thì aria-hidden
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Màu lấy từ ",n.jsx(e.code,{children:"color"})," của phần tử chứa (SVG dùng ",n.jsx(e.code,{children:"currentColor"}),"), nên đặt token ",n.jsx(e.code,{children:"object-*"})," lên phần tử cha."]}),`
`,n.jsxs(e.li,{children:["Tên không có trong thư viện → hộp nét đứt + cảnh báo console (dev). Tên có sẵn: ",n.jsx(e.code,{children:"src/icons/manifest.json"}),"."]}),`
`,n.jsxs(e.li,{children:["SVG lazy-load theo category (",n.jsx(e.code,{children:"src/icons/generated/*.json"}),", sinh khi ",n.jsx(e.code,{children:"npm run icons"}),"). Cần đồng bộ: ",n.jsx(e.code,{children:"import svg from 'uu-ds/src/icons/svg/xmark.svg?raw'"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"kho-svg-trong-repo",children:"Kho SVG trong repo"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"src/icons/svg/<name>.svg"})," (outline) và ",n.jsx(e.code,{children:"<name>-fill.svg"}),": mỗi tên công khai hai file, viewBox ",n.jsx(e.code,{children:"0 0 18 18"}),", mọi màu là ",n.jsx(e.code,{children:"currentColor"}),", không ",n.jsx(e.code,{children:"width"}),"/",n.jsx(e.code,{children:"height"}),"."]}),`
`,n.jsxs(e.p,{children:["Các tên công khai là icon component dùng cố định (",n.jsx(e.code,{children:"chevron-*"}),", ",n.jsx(e.code,{children:"xmark"}),", ",n.jsx(e.code,{children:"check"}),", ",n.jsx(e.code,{children:"circle-*"}),", ",n.jsx(e.code,{children:"magnifier"}),", ",n.jsx(e.code,{children:"calendar-days"}),", ",n.jsx(e.code,{children:"clock"}),", ",n.jsx(e.code,{children:"dots"}),", ",n.jsx(e.code,{children:"arrow-*"}),", ",n.jsx(e.code,{children:"sort-vertical"}),", ",n.jsx(e.code,{children:"sidebar-left"}),", ",n.jsx(e.code,{children:"triangle-warning"}),") và ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"texture"})}),", icon giữ chỗ. Mọi ví dụ trong Storybook cần icon minh hoạ (BottomBar, Tab, SideNav, ListItem, Chip…) đều dùng ",n.jsx(e.code,{children:"texture"}),", giống component trên Figma."]}),`
`,n.jsxs(e.p,{children:["22 icon này chỉ để component chạy và làm ví dụ, gói không kèm bộ icon cho sản phẩm. Sản phẩm cần icon thì gắn một bộ: miễn phí như Lucide, hoặc mua license Nucleo, rồi đăng ký cả bộ qua DNA: web ",n.jsx(e.code,{children:"<IconProvider icons={…}>"}),", React Native ",n.jsx(e.code,{children:"<UuProvider icons={…}>"}),", Flutter ",n.jsx(e.code,{children:"uuThemeData(icons: …)"}),". Tên đăng ký ghi đè icon mặc định cùng tên; tên khác vẫn lấy bộ trong gói, nên icon của component vẫn chạy. Một sản phẩm một bộ, không trộn từng icon của hai bộ. Giấy phép của bộ tự gắn thuộc về sản phẩm."]}),`
`,n.jsxs(e.p,{children:["Ví dụ gắn Lucide (miễn phí, gói ",n.jsx(e.code,{children:"lucide-static"})," xuất mỗi icon thành chuỗi SVG, nét ",n.jsx(e.code,{children:"currentColor"}),"):"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { House, Heart, Settings, X } from 'lucide-static';
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
`,n.jsx(e.p,{children:"Lucide nét dày và to hơn UU icon trong cùng hộp. Gắn xong thì xem icon cạnh chữ và nút một lượt trước khi dùng cả bộ."}),`
`,n.jsxs(e.p,{children:["Nguồn gốc và giấy phép của bộ glyph: ",n.jsx(e.code,{children:"src/icons/NOTICE.md"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h2,{id:"luật-nguyên-văn-docsiconsmd-tiếng-anh",children:["Luật (nguyên văn ",n.jsx(e.code,{children:"docs/icons.md"}),", tiếng Anh)"]}),`
`,n.jsx(h,{src:"docs/icons.md"})]})}function m(c={}){const{wrapper:e}={...s(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(r,{...c})}):r(c)}export{m as default};

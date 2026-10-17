import{j as n}from"./iframe-B79aK45l.js";import{useMDXComponents as i}from"./index-Cb9q3bXr.js";import{M as s,C as r,a as d,S as l}from"./blocks-VAgSek84.js";import{D as a,C as o}from"./DocHeader-zJ2NFdah.js";import{S as x,P as e}from"./Tab.stories-Blm0XSyH.js";import"./preload-helper-Dp1pzeXC.js";import"./Tab-CU5TdYwQ.js";import"./layout-DfDgT8VD.js";function t(h){const c={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:x}),`
`,n.jsx(c.h1,{id:"tab",children:"Tab"}),`
`,n.jsx(a,{spec:"6.20",variants:"2",status:"chốt",children:n.jsxs(c.p,{children:["Mục chuyển giữa các ",n.jsx(c.strong,{children:"vùng nội dung khác nhau"}),". ",n.jsx(c.code,{children:"State"})," = Default · Active. Hug width, cao 48."]})}),`
`,n.jsx(r,{of:e}),`
`,n.jsx(d,{of:e}),`
`,n.jsx(c.h2,{id:"2-variant",children:"2 variant"}),`
`,n.jsxs(c.table,{children:[n.jsx(c.thead,{children:n.jsxs(c.tr,{children:[n.jsx(c.th,{children:"State"}),n.jsx(c.th,{children:"Chữ"}),n.jsx(c.th,{children:"Gạch chỉ báo"})]})}),n.jsxs(c.tbody,{children:[n.jsxs(c.tr,{children:[n.jsx(c.td,{children:"Default"}),n.jsxs(c.td,{children:[n.jsx(c.code,{children:"title-base"})," 16/24 ",n.jsx(c.strong,{children:"600"})," · ",n.jsx(c.code,{children:"object-secondary"})]}),n.jsx(c.td,{children:"—"})]}),n.jsxs(c.tr,{children:[n.jsx(c.td,{children:n.jsx(c.strong,{children:"Active"})}),n.jsxs(c.td,{children:[n.jsx(c.code,{children:"title-base"})," 16/24 600 · ",n.jsx(c.strong,{children:n.jsx(c.code,{children:"object-interactive"})})]}),n.jsxs(c.td,{children:[n.jsx(c.strong,{children:"32 × 4"})," bo tròn hai đầu · ",n.jsx(c.code,{children:"border-interactive"})]})]})]})]}),`
`,n.jsxs(c.p,{children:["Hình học: auto-layout ",n.jsx(c.strong,{children:"dọc"}),", padding ",n.jsx(c.strong,{children:"12"})," cả bốn phía, gap 12, hug cả hai chiều → cao ",n.jsx(c.strong,{children:"48"}),", rộng theo chữ. Không có vỏ, không có nền, không có vạch nền chạy suốt dưới hàng tab."]}),`
`,n.jsxs(c.p,{children:["Gạch chỉ báo ",n.jsx(c.strong,{children:"rộng cố định 32"}),", canh giữa theo chiều ngang, tâm nằm đúng mép đáy nên thò xuống 2px. Nhãn dài mấy thì gạch vẫn 32 — đừng kéo cho bằng chữ."]}),`
`,n.jsxs(c.p,{children:["Cả chữ lẫn gạch của ",n.jsx(c.code,{children:"Active"})," đều thuộc họ ",n.jsx(c.strong,{children:n.jsx(c.code,{children:"interactive"})}),", nên cùng đổi theo ",n.jsx(c.a,{href:"?path=/docs/n%E1%BB%81n-t%E1%BA%A3ng-brand-mode--t%C3%A0i-li%E1%BB%87u",children:"brand mode"})," — chữ luôn đậm hơn gạch một bậc (hiện ",n.jsx(c.code,{children:"indigo-60"})," / ",n.jsx(c.code,{children:"indigo-50"}),"). Tab là thứ bấm được nên đi họ ",n.jsx(c.code,{children:"interactive"})," giống nút và link, không dùng ",n.jsx(c.code,{children:"accent"}),"."]}),`
`,n.jsx(c.h2,{id:"tab-chip-lọc-hay-segmentedcontrol",children:"Tab, Chip lọc hay SegmentedControl"}),`
`,n.jsxs(c.p,{children:["Ba thứ trông na ná, nói ba chuyện khác nhau. Hỏi: ",n.jsx(c.strong,{children:"bấm sang mục kế bên, khung bên dưới có còn là cùng một thứ không?"})]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["Vẫn là danh sách đó, chỉ ít mục đi → ",n.jsx(c.strong,{children:n.jsx(c.code,{children:"Chip"})})," lọc."]}),`
`,n.jsxs(c.li,{children:["Vẫn là cùng nội dung, chỉ đổi cách xem hoặc phạm vi → ",n.jsx(c.strong,{children:n.jsx(c.code,{children:"SegmentedControl"})}),"."]}),`
`,n.jsxs(c.li,{children:["Là một vùng nội dung khác, bố cục khác → ",n.jsx(c.strong,{children:n.jsx(c.code,{children:"Tab"})}),"."]}),`
`]}),`
`,n.jsxs(c.p,{children:["Chi tiết và các dấu hiệu nhận biết ở ",n.jsx(c.a,{href:"?path=/docs/n%E1%BB%81n-t%E1%BA%A3ng-c%C3%A2y-quy%E1%BA%BFt-%C4%91%E1%BB%8Bnh-ph%C3%A2n-lo%E1%BA%A1i-n%E1%BB%99i-dung--t%C3%A0i-li%E1%BB%87u",children:"Cây quyết định — Phân loại nội dung"}),"."]}),`
`,n.jsx(c.h2,{id:"hàng-tab",children:"Hàng tab"}),`
`,n.jsxs(c.p,{children:["Bản thiết kế chốt ",n.jsx(c.strong,{children:"mục tab"}),", không chốt cái hàng chứa nó. ",n.jsx(c.code,{children:"TabBar"})," trong code xếp các ",n.jsx(c.code,{children:"Tab"}),": HORIZONTAL, ",n.jsx(c.strong,{children:"gap 0"}),", cụm ",n.jsx(c.strong,{children:"canh giữa"}),", không có vạch nền. Cần bố cục khác thì tự xếp ",n.jsx(c.code,{children:"Tab"})," lấy."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-tsx",children:`<TabBar
  value={tab} onChange={setTab} aria-label="Lọc quà"
  items={[{ value: 'con-han', label: 'Còn hiệu lực' }, { value: 'het-han', label: 'Hết hiệu lực' }]}
/>
`})}),`
`,n.jsx(o,{type:"warning",title:"Chưa chốt",children:n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hover / Pressed / Disabled"})," — bản thiết kế mới có Default và Active. Bản web hiện không có state layer cho tab."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tràn khổ"})," — chưa có quy định khi tổng bề rộng vượt 390: cuộn ngang, rút chữ, hay chia đều."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hàng tab"})," — gap, canh lề, vạch nền: ",n.jsx(c.code,{children:"TabBar"})," là phần tự chế, chưa phải component đã chốt."]}),`
`]})}),`
`,n.jsx(l,{includePrimary:!1})]})}function y(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{y as default};

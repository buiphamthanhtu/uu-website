import{j as n}from"./iframe-B79aK45l.js";import{useMDXComponents as e}from"./index-Cb9q3bXr.js";import{M as t}from"./blocks-VAgSek84.js";import"./preload-helper-Dp1pzeXC.js";function c(i){const h={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Nền tảng/Quy định"}),`
`,n.jsx(h.h1,{id:"quy-định",children:"Quy định"}),`
`,n.jsx(h.p,{children:"Năm quy định áp cho mọi thứ dựng bằng UU DS, dù là web, mini app hay Flutter. Mỗi quy định kèm bằng chứng trong hệ thống và hệ quả khi code."}),`
`,n.jsx(h.h2,{id:"1-vai-trò-không-phải-màu",children:"1. Vai trò, không phải màu"}),`
`,n.jsxs(h.p,{children:["Token được gọi theo ",n.jsx(h.strong,{children:"vai"})," (",n.jsx(h.code,{children:"background-interactive"}),", ",n.jsx(h.code,{children:"object-secondary"}),", ",n.jsx(h.code,{children:"border-negative"}),"), không theo màu. Nhờ vậy đổi brand chỉ là đổi 10 phép gán, và người đọc spec biết ",n.jsx(h.em,{children:"tại sao"})," một chỗ có màu đó."]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"--color-red-40"})," và ",n.jsx(h.code,{children:"--background-accent-emphasized"})," cùng ra ",n.jsx(h.code,{children:"#F87171"}),", nhưng chỉ token semantic được phép xuất hiện trong component."]}),`
`,n.jsx(h.li,{children:"Cần một vai chưa có → thêm token vào UU DS, không với xuống primitive."}),`
`,n.jsxs(h.li,{children:["Kiểm: ",n.jsx(h.code,{children:'grep -rn "var(--color-" src/components'})," phải rỗng; không có hex trong component."]}),`
`]}),`
`,n.jsx(h.h2,{id:"2-tương-tác-là-một-lớp-phủ",children:"2. Tương tác là một lớp phủ"}),`
`,n.jsxs(h.p,{children:["Hover và Pressed không đổi màu nút. Chúng phủ một lớp ",n.jsx(h.code,{children:"currentColor"})," mờ lên trên: 5/10 trên nền sáng, 20/40 trên nền tối. Một cơ chế chạy đúng cho 144 variant nút, radio, ô nhập — không có ngoại lệ nào phải nhớ."]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:["Nếu phải viết ",n.jsx(h.code,{children:"if (hover) color = …"})," là đang làm sai."]}),`
`,n.jsx(h.li,{children:"Disabled và Loading không có lớp phủ. Loading chỉ khoá chạm, không giảm độ đục."}),`
`,n.jsxs(h.li,{children:["Chi tiết ở ",n.jsx(h.strong,{children:"State layer"}),"."]}),`
`]}),`
`,n.jsx(h.h2,{id:"3-brand-là-một-lớp-token-không-phải-một-nhánh-code",children:"3. Brand là một lớp token, không phải một nhánh code"}),`
`,n.jsxs(h.p,{children:["Màu thương hiệu gói trong đúng 20 token (xem ",n.jsx(h.a,{href:"?path=/docs/n%E1%BB%81n-t%E1%BA%A3ng-brand-mode--t%C3%A0i-li%E1%BB%87u",children:"Brand mode"}),"). Component không được biết mình đang ở brand nào — đổi hay thêm brand là đổi một khối token."]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"accent"})," dành cho tín hiệu thương hiệu ",n.jsx(h.strong,{children:"không bấm được"})," (Pagination, con trỏ OTP)."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"interactive"})," dành cho thứ ",n.jsx(h.strong,{children:"bấm được"})," — nút, link, focus, radio/checkbox đã chọn, tab."]}),`
`,n.jsxs(h.li,{children:["Hai nhóm là hai vai và hiện khác màu (",n.jsx(h.code,{children:"accent"})," blue, ",n.jsx(h.code,{children:"interactive"})," indigo). Dùng lẫn là lệch tông ngay trên màn."]}),`
`]}),`
`,n.jsx(h.h2,{id:"4-font-hệ-thống-cho-việc-font-thương-hiệu-cho-cảm-xúc",children:"4. Font hệ thống cho việc, font thương hiệu cho cảm xúc"}),`
`,n.jsxs(h.p,{children:["Toàn bộ UI chức năng dùng font hệ thống của thiết bị. ",n.jsx(h.code,{children:"Playwrite US Trad"})," chỉ dành cho 4 style ",n.jsx(h.code,{children:"display-*"}),'. Bản thiết kế ghi "SF Pro" chỉ để render được — không nhúng, không self-host.']}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Không hardcode bề rộng component hug."}),`
`,n.jsx(h.li,{children:"Line-height là giá trị tuyệt đối, không phải bội số. Web: rem, app: px."}),`
`,n.jsxs(h.li,{children:["Cẩn thận bậc weight trên font OEM Android (mode ",n.jsx(h.code,{children:"Active"})," 600 → 700)."]}),`
`]}),`
`,n.jsx(h.h2,{id:"5-một-tín-hiệu-cho-một-trạng-thái",children:"5. Một tín hiệu cho một trạng thái"}),`
`,n.jsx(h.p,{children:"OTP sai → viền đỏ cả cụm + một dòng lỗi, chữ trong ô giữ nguyên. Radio đang chọn → viền + chấm, nền vẫn trắng. Pagination → bề rộng là tín hiệu chính, màu là phụ."}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:["Không chồng nhiều tín hiệu (đổi viền ",n.jsx(h.em,{children:"và"})," đổi chữ ",n.jsx(h.em,{children:"và"})," toast) cho cùng một lỗi."]}),`
`,n.jsxs(h.li,{children:["Đừng để màu là tín hiệu ",n.jsx(h.strong,{children:"duy nhất"})," — kèm chữ hoặc icon, để người khó phân biệt màu vẫn hiểu."]}),`
`]})]})}function s(i={}){const{wrapper:h}={...e(),...i.components};return h?n.jsx(h,{...i,children:n.jsx(c,{...i})}):c(i)}export{s as default};

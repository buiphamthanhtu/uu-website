import{j as n}from"./iframe-o9qWa12E.js";import{useMDXComponents as i}from"./index-C2ilI4C6.js";import{M as d}from"./blocks-DUuIq9BS.js";import"./preload-helper-Dp1pzeXC.js";function c(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Phát triển/Zalo Mini App"}),`
`,n.jsx(e.h1,{id:"zalo-mini-app",children:"Zalo Mini App"}),`
`,n.jsxs(e.p,{children:["Zalo Mini App chạy trên ",n.jsx(e.strong,{children:"ZMP"})," (Zalo Mini Program): React + TypeScript, bundler Vite, CLI ",n.jsx(e.code,{children:"zmp-cli"}),", SDK ",n.jsx(e.code,{children:"zmp-sdk"})," cho API của Zalo (đăng nhập, thanh toán, vị trí, thông tin thiết bị). Ứng dụng chạy trong WebView của Zalo, nên bộ React của UU DS dùng được trực tiếp."]}),`
`,n.jsx(e.h2,{id:"tạo-project",children:"Tạo project"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i -g zmp-cli
zmp init my-mini-app          # chọn template React + TypeScript
cd my-mini-app
npm i uu-ds             # hoặc file:../uu-ds
`})}),`
`,n.jsxs(e.p,{children:["Thêm vào ",n.jsx(e.code,{children:"vite.config.mts"})," của template: ",n.jsx(e.code,{children:"optimizeDeps: { exclude: ['uu-ds'] }"})," (xem ",n.jsx(e.strong,{children:"Phát triển → Web (React)"}),")."]}),`
`,n.jsx(e.h2,{id:"điểm-khác-so-với-web-thường",children:"Điểm khác so với web thường"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Việc"}),n.jsx(e.th,{children:"Cách làm"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Token, component, icon"}),n.jsxs(e.td,{children:["Như web: import ",n.jsx(e.code,{children:"tokens.css"}),", ",n.jsx(e.code,{children:"base.css"}),", dùng component ",n.jsx(e.code,{children:"uu-ds"})]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Bộ ",n.jsx(e.code,{children:"zmp-ui"})," của template"]}),n.jsxs(e.td,{children:["Không dùng cho nút, ô nhập, sheet, dialog — style của nó lệch UU DS. Chỉ giữ ",n.jsx(e.code,{children:"App"}),"/",n.jsx(e.code,{children:"Router"}),"/",n.jsx(e.code,{children:"Page"})," để điều hướng"]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:".Mini App Control"})," (pill góc phải)"]}),n.jsxs(e.td,{children:["Zalo tự vẽ. ",n.jsx(e.code,{children:"NavigationBar"})," chừa slot ",n.jsx(e.code,{children:"miniAppControl"}),"; trong Zalo để trống slot và chừa bề rộng cho pill của Zalo"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Status bar, safe area"}),n.jsxs(e.td,{children:["Lấy từ ",n.jsx(e.code,{children:"getSystemInfo()"})," của ",n.jsx(e.code,{children:"zmp-sdk"})," (",n.jsx(e.code,{children:"statusBarHeight"}),", ",n.jsx(e.code,{children:"safeArea"}),") — không tự vẽ"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Font"}),n.jsx(e.td,{children:"Font hệ thống, không nhúng"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Dung lượng"}),n.jsxs(e.td,{children:["Icon lazy-load theo category; chỉ import SVG lẻ (",n.jsx(e.code,{children:"?raw"}),") cho icon dùng ở màn đầu"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Toast / Dialog của Zalo"}),n.jsxs(e.td,{children:["Dùng ",n.jsx(e.code,{children:"Toast"}),", ",n.jsx(e.code,{children:"Dialog"}),", ",n.jsx(e.code,{children:"BottomSheet"})," của UU DS để giống thiết kế; API của Zalo chỉ dùng cho quyền hệ thống (vị trí, camera)"]})]})]})]}),`
`,n.jsx(e.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsxs(e.p,{children:["Thư mục ",n.jsx(e.code,{children:"examples/zalo-mini-app/"})," trong repo: ",n.jsx(e.code,{children:"app-config.json"}),", ",n.jsx(e.code,{children:"src/app.tsx"}),", một màn mẫu với ",n.jsx(e.code,{children:"NavigationBar"}),", ",n.jsx(e.code,{children:"TextInput"}),", ",n.jsx(e.code,{children:"TextButtonAccent"}),", ",n.jsx(e.code,{children:"BottomSheet"}),", và cách đọc safe area."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { getSystemInfo } from 'zmp-sdk/apis';
import { NavigationBar, TextInput, TextButtonAccent } from 'uu-ds';

const { statusBarHeight } = await getSystemInfo();

<div style={{ paddingTop: statusBarHeight, background: 'var(--background-muted)' }}>
  <NavigationBar title="Điểm của tôi" onBack={() => history.back()} />
  ...
</div>
`})}),`
`,n.jsxs(e.p,{children:["Chạy thử: ",n.jsx(e.code,{children:"zmp start"})," rồi quét mã QR bằng Zalo; hoặc mở Zalo Mini App Studio. Deploy: ",n.jsx(e.code,{children:"zmp deploy"}),"."]})]})}function l(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{l as default};

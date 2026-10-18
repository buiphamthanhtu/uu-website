import{j as n}from"./iframe-gn_pzB68.js";import{useMDXComponents as c}from"./index-CrYLlzxl.js";import{M as r,C as i,a as d,S as l}from"./blocks-C259Y4_u.js";import{D as o,C as x}from"./DocHeader-ChFWaY5-.js";import{S as j,P as h,I as a}from"./PushNotification.stories-Dlx-01RT.js";import"./preload-helper-Dp1pzeXC.js";import"./PushNotification-D_xT5HPD.js";import"./layout-whGn3D85.js";function t(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:j}),`
`,n.jsx(s.h1,{id:"cardpushnotification",children:"CardPushNotification"}),`
`,n.jsx(o,{spec:"6.31",variants:"1",status:"chốt",children:n.jsxs(s.p,{children:["Thẻ ở đỉnh màn báo ",n.jsx(s.strong,{children:"chuyện từ bên ngoài"}),": đơn đổi trạng thái, có quà mới, tin nhắn. Mô phỏng dáng push của hệ điều hành nhưng do ",n.jsx(s.strong,{children:"app"})," vẽ. Push thật của iOS / Android do hệ điều hành vẽ, không thuộc DS."]})}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(d,{of:h}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`CardPushNotification   H · g8 · p 8/16/8/8 · radius-lg · background-surface · elevation-medium · căn TRÊN
├─ Image               48 (size-12) · radius-sm · ảnh nguồn (logo đối tác, ảnh sản phẩm) — ẩn được
└─ Text                V · g2 (gap-0-5) · FILL
   ├─ Title            body · 600 · object-primary · tối đa 2 dòng
   └─ Content          body · object-primary · tối đa 2 dòng
`})}),`
`,n.jsxs(s.table,{children:[n.jsx(s.thead,{children:n.jsxs(s.tr,{children:[n.jsx(s.th,{children:"Prop"}),n.jsx(s.th,{children:"Thiết kế"}),n.jsx(s.th,{children:"Ghi chú"})]})}),n.jsxs(s.tbody,{children:[n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.code,{children:"title"})}),n.jsxs(s.td,{children:[n.jsx(s.code,{children:"Title"})," (TEXT)"]}),n.jsxs(s.td,{children:["quá 2 dòng thì cắt bằng ",n.jsx(s.code,{children:"line-clamp"})]})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.code,{children:"content"})}),n.jsxs(s.td,{children:[n.jsx(s.code,{children:"Content"})," (TEXT)"]}),n.jsxs(s.td,{children:["quá 2 dòng thì cắt bằng ",n.jsx(s.code,{children:"line-clamp"})]})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.code,{children:"image"})}),n.jsxs(s.td,{children:[n.jsx(s.code,{children:"Image"})," (BOOLEAN)"]}),n.jsxs(s.td,{children:[n.jsx(s.code,{children:"{ src, alt }"})," — ảnh là nội dung, ",n.jsx(s.code,{children:"alt"})," bắt buộc"]})]}),n.jsxs(s.tr,{children:[n.jsxs(s.td,{children:[n.jsx(s.code,{children:"onClick"})," / ",n.jsx(s.code,{children:"href"})]}),n.jsx(s.td,{children:"bấm cả thẻ"}),n.jsxs(s.td,{children:["có ",n.jsx(s.code,{children:"href"})," thì thẻ là ",n.jsx(s.code,{children:"<a>"}),", không thì là ",n.jsx(s.code,{children:"<button>"})]})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.code,{children:"onDismiss"})}),n.jsx(s.td,{children:"tự ẩn · vuốt lên · Esc"}),n.jsx(s.td,{children:"màn gỡ thẻ khỏi cây khi được gọi"})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.code,{children:"duration"})}),n.jsx(s.td,{children:"5 giây"}),n.jsxs(s.td,{children:["mặc định ",n.jsx(s.code,{children:"5000"})]})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.code,{children:"swipeToDismiss"})}),n.jsx(s.td,{children:"vuốt lên để đóng"}),n.jsxs(s.td,{children:["mặc định ",n.jsx(s.code,{children:"true"})]})]})]})]}),`
`,n.jsx(s.h2,{id:"hành-vi",children:"Hành vi"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Không có type, không có nút"}),": bấm cả thẻ để mở."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Vuốt lên"})," để đóng; bàn phím: ",n.jsx(s.strong,{children:"Esc"})," khi thẻ đang focus."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Tự ẩn sau 5 giây"}),", dừng đếm khi đang hover, focus hoặc chạm; rời ra thì đếm tiếp phần còn lại."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Một thẻ mỗi lúc"}),": thẻ mới thay thẻ cũ. Đổi ",n.jsx(s.code,{children:"key"})," khi có thông báo mới để đếm lại từ đầu."]}),`
`,n.jsxs(s.li,{children:["Hover / Pressed của thẻ đi qua ",n.jsx(s.a,{href:"?path=/docs/n%E1%BB%81n-t%E1%BA%A3ng-state-layer--t%C3%A0i-li%E1%BB%87u",children:"state layer"})," nền sáng (",n.jsx(s.code,{children:"object-primary"})," 5 / 10), theo cơ chế chung 6.0."]}),`
`,n.jsxs(s.li,{children:["Trợ năng: vỏ thẻ mang ",n.jsx(s.code,{children:'role="status"'})," và ",n.jsx(s.code,{children:'aria-live="polite"'}),"."]}),`
`]}),`
`,n.jsx(s.h2,{id:"vị-trí-trên-màn",children:"Vị trí trên màn"}),`
`,n.jsxs(s.p,{children:["Template ",n.jsx(s.code,{children:"[Screen]PushNotification"}),": thẻ cách đỉnh safe area ",n.jsx(s.strong,{children:"8"}),", lề ",n.jsx(s.strong,{children:"12"})," hai bên. Thẻ không tự đặt vị trí, màn bọc nó trong lớp nổi ở đỉnh."]}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`{push && (
  <div className="my-push-layer">{/* top: safe area + 8 · left / right: 12 */}
    <CardPushNotification key={push.id}
      image={{ src: push.logo, alt: push.partner }}
      title={push.title} content={push.body}
      onClick={() => openOrder(push.orderId)}
      onDismiss={() => setPush(null)} />
  </div>
)}
`})}),`
`,n.jsx(s.h2,{id:"khác-toast",children:"Khác Toast"}),`
`,n.jsxs(s.table,{children:[n.jsx(s.thead,{children:n.jsxs(s.tr,{children:[n.jsx(s.th,{}),n.jsx(s.th,{children:n.jsx(s.a,{href:"?path=/docs/component-giao-ti%E1%BA%BFp-toast--t%C3%A0i-li%E1%BB%87u",children:n.jsx(s.code,{children:"Toast"})})}),n.jsx(s.th,{children:n.jsx(s.code,{children:"CardPushNotification"})})]})}),n.jsxs(s.tbody,{children:[n.jsxs(s.tr,{children:[n.jsx(s.td,{children:"Báo gì"}),n.jsx(s.td,{children:n.jsx(s.strong,{children:"kết quả việc người dùng vừa làm"})}),n.jsxs(s.td,{children:["chuyện từ ",n.jsx(s.strong,{children:"bên ngoài"})]})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:"Vị trí"}),n.jsx(s.td,{children:"đáy"}),n.jsx(s.td,{children:"đỉnh"})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:"Type"}),n.jsxs(s.td,{children:["có ",n.jsx(s.code,{children:"type"})]}),n.jsx(s.td,{children:"không có"})]})]})]}),`
`,n.jsx(x,{type:"warning",title:"Chưa chốt",children:n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Nút đóng"})," trên thẻ: chưa có."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Thời gian nhận"}),": chưa có."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Xếp chồng nhiều thẻ"}),": chưa có. Mỗi lúc một thẻ."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Bản trên desktop"}),": chưa có."]}),`
`]})}),`
`,n.jsx(l,{includePrimary:!1})]})}function k(e={}){const{wrapper:s}={...c(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(t,{...e})}):t(e)}export{k as default};

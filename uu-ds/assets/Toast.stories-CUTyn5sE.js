import{e as t,j as e}from"./iframe-C4b24c-y.js";import{S as h}from"./layout-Dr6JVIPl.js";const d={title:"Component/Giao tiếp/Toast",component:t,args:{type:"neutral",children:"Đã lưu thay đổi",action:{label:"Hoàn tác"},onClose:()=>{}},argTypes:{type:{control:"radio",options:["neutral","negative","positive","warning"]},onClose:{action:"close"}},parameters:{layout:"padded"},render:p=>e.jsx("div",{style:{width:428},children:e.jsx(t,{...p})})},n={},o={name:"4 type",parameters:{controls:{disable:!0}},render:()=>e.jsxs(h,{style:{width:428},children:[e.jsx(t,{type:"neutral",action:{label:"Hoàn tác"},onClose:()=>{},children:"Đã lưu thay đổi"}),e.jsx(t,{type:"negative",action:{label:"Thử lại"},onClose:()=>{},children:"Không thể kết nối. Vui lòng thử lại."}),e.jsx(t,{type:"positive",action:{label:"Xem"},onClose:()=>{},children:"Thanh toán thành công"}),e.jsx(t,{type:"warning",action:{label:"Cập nhật"},onClose:()=>{},children:"Phiên bản này sắp ngừng hỗ trợ"}),e.jsx(t,{type:"neutral",onClose:()=>{},children:"Không có nút Action (Action=false)"})]})};var a,s,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var l,i,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '4 type',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack style={{
    width: 428
  }}>
      <Toast type="neutral" action={{
      label: 'Hoàn tác'
    }} onClose={() => {}}>Đã lưu thay đổi</Toast>
      <Toast type="negative" action={{
      label: 'Thử lại'
    }} onClose={() => {}}>Không thể kết nối. Vui lòng thử lại.</Toast>
      <Toast type="positive" action={{
      label: 'Xem'
    }} onClose={() => {}}>Thanh toán thành công</Toast>
      <Toast type="warning" action={{
      label: 'Cập nhật'
    }} onClose={() => {}}>Phiên bản này sắp ngừng hỗ trợ</Toast>
      <Toast type="neutral" onClose={() => {}}>Không có nút Action (Action=false)</Toast>
    </Stack>
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const y=["Playground","Types"],m=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,Types:o,__namedExportsOrder:y,default:d},Symbol.toStringTag,{value:"Module"}));export{n as P,m as S};

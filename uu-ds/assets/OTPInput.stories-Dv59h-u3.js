import{j as e,r as E}from"./iframe-DqdT0fUx.js";import{O as a}from"./OTPInput-BHjXywqY.js";import{S as O,a as r}from"./layout-lF1Il3_E.js";const{fn:P}=__STORYBOOK_MODULE_TEST__,T={title:"Component/Nhập liệu/OTPInput",component:a,args:{value:"",onChange:P(),length:6,masked:!1,error:!1,errorMessage:"Mã xác thực không đúng",disabled:!1},argTypes:{state:{control:"select",options:[void 0,"default","focus","typing"]}},render:t=>{const[M,y]=E.useState(t.value);return e.jsx("div",{style:{width:328},children:e.jsx(a,{...t,value:M,onChange:u=>{var d;y(u),(d=t.onChange)==null||d.call(t,u)}})})}},n={},s={name:"Masked (mã PIN)",args:{masked:!0,value:"1234"}},o={args:{value:"123456",error:!0}},l={name:"14 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(O,{style:{width:328},children:[e.jsx(r,{children:"Empty · Default"}),e.jsx(a,{value:"",onChange:()=>{},state:"default"}),e.jsx(r,{children:"Empty · Focus — con trỏ đỏ là tín hiệu duy nhất"}),e.jsx(a,{value:"",onChange:()=>{},state:"focus"}),e.jsx(r,{children:"Filled · Typing"}),e.jsx(a,{value:"12",onChange:()=>{},state:"typing"}),e.jsx(r,{children:"Filled · Default"}),e.jsx(a,{value:"123456",onChange:()=>{},state:"default"}),e.jsx(r,{children:"Filled · Default · Masked"}),e.jsx(a,{value:"123456",onChange:()=>{},masked:!0,state:"default"}),e.jsx(r,{children:"Empty · Error"}),e.jsx(a,{value:"",onChange:()=>{},error:!0,errorMessage:"Mã xác thực không đúng"}),e.jsx(r,{children:"Filled · Error — cả 6 ô, chữ ở lại, dòng lỗi căn giữa"}),e.jsx(a,{value:"123456",onChange:()=>{},error:!0,errorMessage:"Mã xác thực không đúng"}),e.jsx(r,{children:"Filled · Error · Masked"}),e.jsx(a,{value:"123456",onChange:()=>{},masked:!0,error:!0,errorMessage:"Mã PIN không đúng"}),e.jsx(r,{children:"Empty · Disabled"}),e.jsx(a,{value:"",onChange:()=>{},disabled:!0}),e.jsx(r,{children:"Empty · Disabled · Masked"}),e.jsx(a,{value:"",onChange:()=>{},disabled:!0,masked:!0})]})};var i,p,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,h,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Masked (mã PIN)',
  args: {
    masked: true,
    value: '1234'
  }
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var C,v,x;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: '123456',
    error: true
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var k,j,f;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '14 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack style={{
    width: 328
  }}>
      <Caption>Empty · Default</Caption><OTPInput value="" onChange={() => {}} state="default" />
      <Caption>Empty · Focus — con trỏ đỏ là tín hiệu duy nhất</Caption><OTPInput value="" onChange={() => {}} state="focus" />
      <Caption>Filled · Typing</Caption><OTPInput value="12" onChange={() => {}} state="typing" />
      <Caption>Filled · Default</Caption><OTPInput value="123456" onChange={() => {}} state="default" />
      <Caption>Filled · Default · Masked</Caption><OTPInput value="123456" onChange={() => {}} masked state="default" />
      <Caption>Empty · Error</Caption><OTPInput value="" onChange={() => {}} error errorMessage="Mã xác thực không đúng" />
      <Caption>Filled · Error — cả 6 ô, chữ ở lại, dòng lỗi căn giữa</Caption><OTPInput value="123456" onChange={() => {}} error errorMessage="Mã xác thực không đúng" />
      <Caption>Filled · Error · Masked</Caption><OTPInput value="123456" onChange={() => {}} masked error errorMessage="Mã PIN không đúng" />
      <Caption>Empty · Disabled</Caption><OTPInput value="" onChange={() => {}} disabled />
      <Caption>Empty · Disabled · Masked</Caption><OTPInput value="" onChange={() => {}} disabled masked />
    </Stack>
}`,...(f=(j=l.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const I=["Playground","Masked","Error","States"],_=Object.freeze(Object.defineProperty({__proto__:null,Error:o,Masked:s,Playground:n,States:l,__namedExportsOrder:I,default:T},Symbol.toStringTag,{value:"Module"}));export{n as P,_ as S};

import{j as e,r as m}from"./iframe-BgqkvPSF.js";import{T as a}from"./TextArea-Bkz70rxV.js";import{S as p}from"./layout-DPQWCONv.js";const v={title:"Component/Nhập liệu/TextArea",component:a,args:{label:"Lý do xoá tài khoản",placeholder:"Nhập lý do",maxLength:100,error:!1,errorMessage:"Vui lòng nhập lý do",disabled:!1},render:t=>{const[c,y]=m.useState(t.value??"");return e.jsx("div",{style:{width:358},children:e.jsx(a,{...t,value:c,onChange:g=>y(g.target.value)})})}},r={},l={name:"9 variant (Value × State × Error × Disabled)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(p,{style:{width:358},children:[e.jsx(a,{label:"Empty · Default",state:"default",value:"",readOnly:!0}),e.jsx(a,{label:"Empty · Hover",state:"hover",value:"",readOnly:!0}),e.jsx(a,{label:"Empty · Focus",state:"focus",value:"",readOnly:!0}),e.jsx(a,{label:"Filled · Typing",state:"typing",value:"Tôi không còn dùng dịch vụ này nữa.",readOnly:!0}),e.jsx(a,{label:"Filled · Default",state:"default",value:"Tôi không còn dùng dịch vụ này nữa.",readOnly:!0}),e.jsx(a,{label:"Empty · Error",error:!0,errorMessage:"Error message",value:"",readOnly:!0}),e.jsx(a,{label:"Filled · Error",error:!0,errorMessage:"Error message",value:"Tôi không còn dùng dịch vụ này nữa.",readOnly:!0}),e.jsx(a,{label:"Empty · Disabled",disabled:!0,value:"",readOnly:!0}),e.jsx(a,{label:"Filled · Disabled",disabled:!0,value:"Tôi không còn dùng dịch vụ này nữa.",readOnly:!0})]})};var s,n,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var o,u,i;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '9 variant (Value × State × Error × Disabled)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack style={{
    width: 358
  }}>
      <TextArea label="Empty · Default" state="default" value="" readOnly />
      <TextArea label="Empty · Hover" state="hover" value="" readOnly />
      <TextArea label="Empty · Focus" state="focus" value="" readOnly />
      <TextArea label="Filled · Typing" state="typing" value="Tôi không còn dùng dịch vụ này nữa." readOnly />
      <TextArea label="Filled · Default" state="default" value="Tôi không còn dùng dịch vụ này nữa." readOnly />
      <TextArea label="Empty · Error" error errorMessage="Error message" value="" readOnly />
      <TextArea label="Filled · Error" error errorMessage="Error message" value="Tôi không còn dùng dịch vụ này nữa." readOnly />
      <TextArea label="Empty · Disabled" disabled value="" readOnly />
      <TextArea label="Filled · Disabled" disabled value="Tôi không còn dùng dịch vụ này nữa." readOnly />
    </Stack>
}`,...(i=(u=l.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const b=["Playground","States"],T=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,States:l,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{r as P,T as S};

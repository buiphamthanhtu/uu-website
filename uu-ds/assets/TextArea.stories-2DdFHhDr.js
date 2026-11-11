import{j as e,S as m,F as i,r as g}from"./iframe-DdYtqKZl.js";import{T as a}from"./TextArea-9EgMs9KK.js";const v={title:"Component/Nhập liệu/TextArea",component:a,args:{label:"Lý do xoá tài khoản",placeholder:"Nhập lý do",maxLength:100,error:!1,errorMessage:"Vui lòng nhập lý do",disabled:!1},render:t=>{const[h,p]=g.useState(t.value??"");return e.jsx("div",{style:{width:358,maxWidth:i},children:e.jsx(a,{...t,value:h,onChange:y=>p(y.target.value)})})}},r={},l={name:"9 variant (Value × State × Error × Disabled)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(m,{style:{width:358,maxWidth:i},children:[e.jsx(a,{label:"Empty · Default",placeholder:"Placeholder",state:"default",value:"",readOnly:!0}),e.jsx(a,{label:"Empty · Hover",placeholder:"Placeholder",state:"hover",value:"",readOnly:!0}),e.jsx(a,{label:"Empty · Focus",placeholder:"Placeholder",state:"focus",value:"",readOnly:!0}),e.jsx(a,{label:"Filled · Typing",state:"typing",value:"Tôi không còn dùng dịch vụ này nữa.",readOnly:!0}),e.jsx(a,{label:"Filled · Default",state:"default",value:"Tôi không còn dùng dịch vụ này nữa.",readOnly:!0}),e.jsx(a,{label:"Empty · Error",placeholder:"Placeholder",error:!0,errorMessage:"Error message",value:"",readOnly:!0}),e.jsx(a,{label:"Filled · Error",error:!0,errorMessage:"Error message",value:"Tôi không còn dùng dịch vụ này nữa.",readOnly:!0}),e.jsx(a,{label:"Empty · Disabled",placeholder:"Placeholder",disabled:!0,value:"",readOnly:!0}),e.jsx(a,{label:"Filled · Disabled",disabled:!0,value:"Tôi không còn dùng dịch vụ này nữa.",readOnly:!0})]})};var d,s,n;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var o,c,u;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '9 variant (Value × State × Error × Disabled)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack style={{
    width: 358,
    maxWidth: FIT
  }}>
      <TextArea label="Empty · Default" placeholder="Placeholder" state="default" value="" readOnly />
      <TextArea label="Empty · Hover" placeholder="Placeholder" state="hover" value="" readOnly />
      <TextArea label="Empty · Focus" placeholder="Placeholder" state="focus" value="" readOnly />
      <TextArea label="Filled · Typing" state="typing" value="Tôi không còn dùng dịch vụ này nữa." readOnly />
      <TextArea label="Filled · Default" state="default" value="Tôi không còn dùng dịch vụ này nữa." readOnly />
      <TextArea label="Empty · Error" placeholder="Placeholder" error errorMessage="Error message" value="" readOnly />
      <TextArea label="Filled · Error" error errorMessage="Error message" value="Tôi không còn dùng dịch vụ này nữa." readOnly />
      <TextArea label="Empty · Disabled" placeholder="Placeholder" disabled value="" readOnly />
      <TextArea label="Filled · Disabled" disabled value="Tôi không còn dùng dịch vụ này nữa." readOnly />
    </Stack>
}`,...(u=(c=l.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const b=["Playground","States"],E=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,States:l,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{r as P,E as S,l as a};

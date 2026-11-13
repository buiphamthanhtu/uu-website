import{j as e,S as _,F,r as w}from"./iframe-CtDk8fip.js";import{T as r}from"./TextInput-BODGymwO.js";const R={title:"Component/Nhập liệu/TextInput",component:r,args:{label:"Label",placeholder:"Placeholder",requirement:void 0,error:!1,errorMessage:"Thông tin chưa hợp lệ",disabled:!1},argTypes:{requirement:{control:"radio",options:[void 0,"required","optional"]},state:{control:"select",options:[void 0,"default","hover","focus","typing"],description:"State — ép để đối chiếu"},prefix:{control:"object"},action:{control:"object"}},render:c=>{const[M,q]=w.useState(c.value??"");return e.jsx("div",{style:{width:358,maxWidth:F},children:e.jsx(r,{...c,value:M,onChange:H=>q(H.target.value)})})}},a={},l={name:"Label suffix + tooltip",args:{label:"Số điện thoại",requirement:"required",tooltip:"Dùng để nhận mã xác thực"}},t={name:"Prefix + Action",args:{label:"Số điện thoại",prefix:{label:"+84"},action:{label:"Dán"}}},o={name:"Prefix icon",args:{label:"Tìm kiếm",placeholder:"Tìm sản phẩm",prefix:{icon:"magnifier"}}},n={args:{label:"Số điện thoại",value:"0123",error:!0,errorMessage:"Số điện thoại không hợp lệ"}},s={name:"9 variant (Value × State × Error × Disabled)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(_,{style:{width:358,maxWidth:F},children:[e.jsx(r,{label:"Empty · Default",placeholder:"Placeholder",state:"default",value:"",readOnly:!0,action:{label:"Action"}}),e.jsx(r,{label:"Empty · Hover",placeholder:"Placeholder",state:"hover",value:"",readOnly:!0,action:{label:"Action"}}),e.jsx(r,{label:"Empty · Focus",placeholder:"Placeholder",state:"focus",value:"",readOnly:!0,action:{label:"Action"}}),e.jsx(r,{label:"Filled · Typing",state:"typing",value:"Input",readOnly:!0,action:{label:"Action"}}),e.jsx(r,{label:"Filled · Default",state:"default",value:"Input",readOnly:!0,action:{label:"Action"}}),e.jsx(r,{label:"Empty · Error",placeholder:"Placeholder",error:!0,errorMessage:"Error message",value:"",readOnly:!0}),e.jsx(r,{label:"Filled · Error",error:!0,errorMessage:"Error message",value:"Input",readOnly:!0}),e.jsx(r,{label:"Empty · Disabled",placeholder:"Placeholder",disabled:!0,value:"",readOnly:!0}),e.jsx(r,{label:"Filled · Disabled",disabled:!0,value:"Input",readOnly:!0})]})},i={name:"Dòng gợi ý (Helper text)",args:{label:"Mật khẩu",type:"password",placeholder:"Nhập mật khẩu",helperText:"Tối thiểu 8 ký tự, có cả chữ và số"}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,h,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Label suffix + tooltip',
  args: {
    label: 'Số điện thoại',
    requirement: 'required',
    tooltip: 'Dùng để nhận mã xác thực'
  }
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,g,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Prefix + Action',
  args: {
    label: 'Số điện thoại',
    prefix: {
      label: '+84'
    },
    action: {
      label: 'Dán'
    }
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,v,T;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Prefix icon',
  args: {
    label: 'Tìm kiếm',
    placeholder: 'Tìm sản phẩm',
    prefix: {
      icon: 'magnifier'
    }
  }
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var S,E,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Số điện thoại',
    value: '0123',
    error: true,
    errorMessage: 'Số điện thoại không hợp lệ'
  }
}`,...(I=(E=n.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var P,O,j;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      <TextInput label="Empty · Default" placeholder="Placeholder" state="default" value="" readOnly action={{
      label: 'Action'
    }} />
      <TextInput label="Empty · Hover" placeholder="Placeholder" state="hover" value="" readOnly action={{
      label: 'Action'
    }} />
      <TextInput label="Empty · Focus" placeholder="Placeholder" state="focus" value="" readOnly action={{
      label: 'Action'
    }} />
      <TextInput label="Filled · Typing" state="typing" value="Input" readOnly action={{
      label: 'Action'
    }} />
      <TextInput label="Filled · Default" state="default" value="Input" readOnly action={{
      label: 'Action'
    }} />
      <TextInput label="Empty · Error" placeholder="Placeholder" error errorMessage="Error message" value="" readOnly />
      <TextInput label="Filled · Error" error errorMessage="Error message" value="Input" readOnly />
      <TextInput label="Empty · Disabled" placeholder="Placeholder" disabled value="" readOnly />
      <TextInput label="Filled · Disabled" disabled value="Input" readOnly />
    </Stack>
}`,...(j=(O=s.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var A,D,k;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Dòng gợi ý (Helper text)',
  args: {
    label: 'Mật khẩu',
    type: 'password',
    placeholder: 'Nhập mật khẩu',
    helperText: 'Tối thiểu 8 ký tự, có cả chữ và số'
  }
}`,...(k=(D=i.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const L=["Playground","Required","PrefixAndAction","PrefixIcon","Error","States","HelperText"],W=Object.freeze(Object.defineProperty({__proto__:null,Error:n,HelperText:i,Playground:a,PrefixAndAction:t,PrefixIcon:o,Required:l,States:s,__namedExportsOrder:L,default:R},Symbol.toStringTag,{value:"Module"}));export{n as E,a as P,l as R,W as S,s as a,t as b,o as c};

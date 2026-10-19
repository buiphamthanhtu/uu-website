import{j as e,r as F}from"./iframe-k4bV9c5e.js";import{T as r}from"./TextInput-AsnKxzzF.js";import{S as q}from"./layout-COpsTpFq.js";const M={title:"Component/Nhập liệu/TextInput",component:r,args:{label:"Label",placeholder:"Placeholder",requirement:void 0,error:!1,errorMessage:"Thông tin chưa hợp lệ",disabled:!1},argTypes:{requirement:{control:"radio",options:[void 0,"required","optional"]},state:{control:"select",options:[void 0,"default","hover","focus","typing"],description:"State — ép để đối chiếu"},prefix:{control:"object"},action:{control:"object"}},render:i=>{const[A,D]=F.useState(i.value??"");return e.jsx("div",{style:{width:358},children:e.jsx(r,{...i,value:A,onChange:P=>D(P.target.value)})})}},a={},t={name:"Label suffix + tooltip",args:{label:"Số điện thoại",requirement:"required",tooltip:"Dùng để nhận mã xác thực"}},l={name:"Prefix + Action",args:{label:"Số điện thoại",prefix:{label:"+84"},action:{label:"Dán"}}},n={name:"Prefix icon",args:{label:"Tìm kiếm",placeholder:"Tìm sản phẩm",prefix:{icon:"magnifier"}}},o={args:{label:"Số điện thoại",value:"0123",error:!0,errorMessage:"Số điện thoại không hợp lệ"}},s={name:"9 variant (Value × State × Error × Disabled)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(q,{style:{width:358},children:[e.jsx(r,{label:"Empty · Default",state:"default",value:"",readOnly:!0,action:{label:"Action"}}),e.jsx(r,{label:"Empty · Hover",state:"hover",value:"",readOnly:!0,action:{label:"Action"}}),e.jsx(r,{label:"Empty · Focus",state:"focus",value:"",readOnly:!0,action:{label:"Action"}}),e.jsx(r,{label:"Filled · Typing",state:"typing",value:"Input",readOnly:!0,action:{label:"Action"}}),e.jsx(r,{label:"Filled · Default",state:"default",value:"Input",readOnly:!0,action:{label:"Action"}}),e.jsx(r,{label:"Empty · Error",error:!0,errorMessage:"Error message",value:"",readOnly:!0}),e.jsx(r,{label:"Filled · Error",error:!0,errorMessage:"Error message",value:"Input",readOnly:!0}),e.jsx(r,{label:"Empty · Disabled",disabled:!0,value:"",readOnly:!0}),e.jsx(r,{label:"Filled · Disabled",disabled:!0,value:"Input",readOnly:!0})]})};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Label suffix + tooltip',
  args: {
    label: 'Số điện thoại',
    requirement: 'required',
    tooltip: 'Dùng để nhận mã xác thực'
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var x,g,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,h,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Prefix icon',
  args: {
    label: 'Tìm kiếm',
    placeholder: 'Tìm sản phẩm',
    prefix: {
      icon: 'magnifier'
    }
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,E,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Số điện thoại',
    value: '0123',
    error: true,
    errorMessage: 'Số điện thoại không hợp lệ'
  }
}`,...(I=(E=o.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var O,T,j;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '9 variant (Value × State × Error × Disabled)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack style={{
    width: 358
  }}>
      <TextInput label="Empty · Default" state="default" value="" readOnly action={{
      label: 'Action'
    }} />
      <TextInput label="Empty · Hover" state="hover" value="" readOnly action={{
      label: 'Action'
    }} />
      <TextInput label="Empty · Focus" state="focus" value="" readOnly action={{
      label: 'Action'
    }} />
      <TextInput label="Filled · Typing" state="typing" value="Input" readOnly action={{
      label: 'Action'
    }} />
      <TextInput label="Filled · Default" state="default" value="Input" readOnly action={{
      label: 'Action'
    }} />
      <TextInput label="Empty · Error" error errorMessage="Error message" value="" readOnly />
      <TextInput label="Filled · Error" error errorMessage="Error message" value="Input" readOnly />
      <TextInput label="Empty · Disabled" disabled value="" readOnly />
      <TextInput label="Filled · Disabled" disabled value="Input" readOnly />
    </Stack>
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const k=["Playground","Required","PrefixAndAction","PrefixIcon","Error","States"],R=Object.freeze(Object.defineProperty({__proto__:null,Error:o,Playground:a,PrefixAndAction:l,PrefixIcon:n,Required:t,States:s,__namedExportsOrder:k,default:M},Symbol.toStringTag,{value:"Module"}));export{a as P,R as S};

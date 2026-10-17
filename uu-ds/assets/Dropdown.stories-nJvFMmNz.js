import{j as e}from"./iframe-EkKnofS_.js";import{D as r}from"./Dropdown-DpHlGghR.js";import{S as m}from"./layout-Xzi5pJ9U.js";const c={title:"Component/Lựa chọn/Dropdown",component:r,args:{label:"Tỉnh / Thành phố",value:"",placeholder:"Bấm để chọn",error:!1,errorMessage:"Error message",disabled:!1,fixedWidth:!1},argTypes:{state:{control:"select",options:[void 0,"default","hover"]},onOpen:{action:"open"}},render:p=>e.jsx("div",{style:{width:358},children:e.jsx(r,{...p})})},a={},o={name:"8 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(m,{style:{width:187},children:[e.jsx(r,{label:"Empty · Default"}),e.jsx(r,{label:"Empty · Hover",state:"hover"}),e.jsx(r,{label:"Empty · Error",error:!0,errorMessage:"Error message"}),e.jsx(r,{label:"Filled · Default",value:"Data"}),e.jsx(r,{label:"Filled · Hover",value:"Data",state:"hover"}),e.jsx(r,{label:"Filled · Error",value:"Data",error:!0,errorMessage:"Error message"}),e.jsx(r,{label:"Empty · Disabled",disabled:!0}),e.jsx(r,{label:"Filled · Disabled",value:"Data",disabled:!0})]})};var l,s,t;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var d,n,i;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '8 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack style={{
    width: 187
  }}>
      <Dropdown label="Empty · Default" />
      <Dropdown label="Empty · Hover" state="hover" />
      <Dropdown label="Empty · Error" error errorMessage="Error message" />
      <Dropdown label="Filled · Default" value="Data" />
      <Dropdown label="Filled · Hover" value="Data" state="hover" />
      <Dropdown label="Filled · Error" value="Data" error errorMessage="Error message" />
      <Dropdown label="Empty · Disabled" disabled />
      <Dropdown label="Filled · Disabled" value="Data" disabled />
    </Stack>
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const u=["Playground","Variants"],E=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,Variants:o,__namedExportsOrder:u,default:c},Symbol.toStringTag,{value:"Module"}));export{a as P,E as S};

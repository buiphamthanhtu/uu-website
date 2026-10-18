import{j as e}from"./iframe-C4b24c-y.js";import{B as s,a as n}from"./Breadcrumb-D62HUKqk.js";import{S,C as t,R as B}from"./layout-Dr6JVIPl.js";const c=[{label:"Trang chủ",href:"#"},{label:"Đơn hàng",href:"#"},{label:"DH-1024"}],v={title:"Component/Điều hướng/Breadcrumb",component:s,args:{items:c},argTypes:{items:{control:"object"}}},l={},r={name:".BreadcrumbItem — 3 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(B,{children:[e.jsx(t,{label:"Current=False, State=Default",children:e.jsx(n,{href:"#",children:"Đơn hàng"})}),e.jsx(t,{label:"Current=False, State=Hover",children:e.jsx(n,{href:"#",state:"hover",children:"Đơn hàng"})}),e.jsx(t,{label:"Current=True",children:e.jsx(n,{current:!0,children:"DH-1024"})})]})},a={name:"Độ sâu · density",parameters:{controls:{disable:!0}},render:()=>e.jsxs(S,{children:[e.jsx(t,{label:"2 cấp",children:e.jsx(s,{items:c.slice(1),"aria-label":"Đường dẫn, 2 cấp"})}),e.jsx(t,{label:"4 cấp",children:e.jsx(s,{items:[{label:"Trang chủ",href:"#"},{label:"Cài đặt",href:"#"},{label:"Thành viên",href:"#"},{label:"Phân quyền"}],"aria-label":"Đường dẫn, 4 cấp"})}),e.jsx(t,{label:"Compact",children:e.jsx("div",{"data-density":"compact",children:e.jsx(s,{items:c,"aria-label":"Đường dẫn, Compact"})})})]})};var o,i,m;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(m=(i=l.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,u,b,p,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '.BreadcrumbItem — 3 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Cell label="Current=False, State=Default"><BreadcrumbItem href="#">Đơn hàng</BreadcrumbItem></Cell>
      <Cell label="Current=False, State=Hover"><BreadcrumbItem href="#" state="hover">Đơn hàng</BreadcrumbItem></Cell>
      <Cell label="Current=True"><BreadcrumbItem current>DH-1024</BreadcrumbItem></Cell>
    </Row>
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source},description:{story:"`.BreadcrumbItem` (nội bộ) — 3 variant. Mục `Current=True` không có Hover.",...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.description}}};var C,g,x,f,j;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Độ sâu · density',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      <Cell label="2 cấp"><Breadcrumb items={ITEMS.slice(1)} aria-label="Đường dẫn, 2 cấp" /></Cell>
      <Cell label="4 cấp"><Breadcrumb items={[{
        label: 'Trang chủ',
        href: '#'
      }, {
        label: 'Cài đặt',
        href: '#'
      }, {
        label: 'Thành viên',
        href: '#'
      }, {
        label: 'Phân quyền'
      }]} aria-label="Đường dẫn, 4 cấp" /></Cell>
      <Cell label="Compact"><div data-density="compact"><Breadcrumb items={ITEMS} aria-label="Đường dẫn, Compact" /></div></Cell>
    </Stack>
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:"Mục cuối luôn là trang hiện tại. Touch và Compact chỉ đổi cỡ chữ `body`.",...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};const y=["Playground","Matrix","Depth"],D=Object.freeze(Object.defineProperty({__proto__:null,Depth:a,Matrix:r,Playground:l,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{l as P,D as S};

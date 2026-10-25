import{r as k,j as e}from"./iframe-6vwN6wb9.js";import{B as n,a as c,b as m}from"./Breadcrumb-BEYmB8Lw.js";import{S as w,C as r,R}from"./layout-nPJ89kCs.js";const o=[{label:"Trang chủ",href:"#"},{label:"Đơn hàng",href:"#"},{label:"DH-1024"}],E={title:"Component/Điều hướng/Breadcrumb",component:n,args:{items:o},argTypes:{items:{control:"object"}}},s={},a={name:".BreadcrumbItem — 5 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(R,{children:[e.jsx(r,{label:"Current=False, State=Default",children:e.jsx(c,{href:"#",children:"Đơn hàng"})}),e.jsx(r,{label:"Current=False, State=Hover",children:e.jsx(c,{href:"#",state:"hover",children:"Đơn hàng"})}),e.jsx(r,{label:"Current=True",children:e.jsx(c,{current:!0,children:"DH-1024"})}),e.jsx(r,{label:"Type=Overflow, State=Default",children:e.jsx(m,{})}),e.jsx(r,{label:"Type=Overflow, State=Hover",children:e.jsx(m,{state:"hover"})})]})},t={name:"Độ sâu · density",parameters:{controls:{disable:!0}},render:()=>e.jsxs(w,{children:[e.jsx(r,{label:"2 cấp",children:e.jsx(n,{items:o.slice(1),"aria-label":"Đường dẫn, 2 cấp"})}),e.jsx(r,{label:"4 cấp",children:e.jsx(n,{items:[{label:"Trang chủ",href:"#"},{label:"Cài đặt",href:"#"},{label:"Thành viên",href:"#"},{label:"Phân quyền"}],"aria-label":"Đường dẫn, 4 cấp"})}),e.jsx(r,{label:"Compact",children:e.jsx("div",{"data-density":"compact",children:e.jsx(n,{items:o,"aria-label":"Đường dẫn, Compact"})})})]})},N=[{label:"Trang chủ",href:"#"},{label:"Bán hàng",href:"#"},{label:"Chi nhánh Quận 1",href:"#"},{label:"Tháng 10",href:"#"},{label:"Đơn hàng",href:"#"},{label:"DH-1024"}],l={name:"Rút gọn khi quá 4 mục",parameters:{controls:{disable:!0}},render:()=>{const[i,D]=k.useState();return e.jsxs(w,{style:{minHeight:280},children:[e.jsx(n,{items:N,"aria-label":"Đường dẫn, 6 cấp",onNavigate:M=>D(String(M.label))}),e.jsx("span",{className:"text-body",style:{color:"var(--object-secondary)"},children:i?`Đi tới: ${i}`:'Bấm "…" để xem đường dẫn ẩn.'})]})}};var d,u,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,p,g,C,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '.BreadcrumbItem — 5 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Cell label="Current=False, State=Default"><BreadcrumbItem href="#">Đơn hàng</BreadcrumbItem></Cell>
      <Cell label="Current=False, State=Hover"><BreadcrumbItem href="#" state="hover">Đơn hàng</BreadcrumbItem></Cell>
      <Cell label="Current=True"><BreadcrumbItem current>DH-1024</BreadcrumbItem></Cell>
      <Cell label="Type=Overflow, State=Default"><BreadcrumbOverflow /></Cell>
      <Cell label="Type=Overflow, State=Hover"><BreadcrumbOverflow state="hover" /></Cell>
    </Row>
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source},description:{story:"`.BreadcrumbItem` (nội bộ) — 5 variant. Mục `Current=True` không có Hover; `Type=Overflow` có Hover như mục thường.",...(f=(C=a.parameters)==null?void 0:C.docs)==null?void 0:f.description}}};var v,x,j,y,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source},description:{story:"Mục cuối luôn là trang hiện tại. Touch và Compact chỉ đổi cỡ chữ `body`.",...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.description}}};var B,T,I,O,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Rút gọn khi quá 4 mục',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [to, setTo] = useState<string>();
    return <Stack style={{
      minHeight: 280
    }}>
        <Breadcrumb items={LONG} aria-label="Đường dẫn, 6 cấp" onNavigate={it => setTo(String(it.label))} />
        <span className="text-body" style={{
        color: 'var(--object-secondary)'
      }}>{to ? \`Đi tới: \${to}\` : 'Bấm "…" để xem đường dẫn ẩn.'}</span>
      </Stack>;
  }
}`,...(I=(T=l.parameters)==null?void 0:T.docs)==null?void 0:I.source},description:{story:'Quá 4 mục thì rút gọn: giữ mục đầu và 2 mục cuối, giữa là "…". Bấm "…" mở `Menu` liệt kê các mục ẩn theo thứ tự; chọn một mục là đi tới trang đó.',...(H=(O=l.parameters)==null?void 0:O.docs)==null?void 0:H.description}}};const P=["Playground","Matrix","Depth","Collapsed"],G=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:l,Depth:t,Matrix:a,Playground:s,__namedExportsOrder:P,default:E},Symbol.toStringTag,{value:"Module"}));export{l as C,t as D,a as M,s as P,G as S};

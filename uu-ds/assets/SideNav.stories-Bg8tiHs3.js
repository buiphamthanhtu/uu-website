import{j as e,r as p}from"./iframe-C4b24c-y.js";import{S as i,a as r,b as v}from"./SideNav-C4oMXAPv.js";import{S as M,R as w,C as k}from"./layout-Dr6JVIPl.js";const L=({children:l,height:a=560})=>e.jsxs("div",{style:{display:"flex",height:a,borderRadius:"var(--radius-lg)",border:"1px solid var(--border-muted)",background:"var(--background-muted)",overflow:"hidden"},children:[l,e.jsx("div",{style:{flex:"1 1 0",minWidth:240}})]});function $({collapsed:l,initial:a="customers"}){const[R,F]=p.useState(a),[d,I]=p.useState(!0),t=c=>({active:R===c,onClick:()=>F(c)});return e.jsxs(i,{collapsed:l,"aria-label":"Điều hướng chính",children:[e.jsxs(v,{title:"Tổng quan",children:[e.jsx(r,{label:"Trang chủ",icon:"house",...t("home")}),e.jsx(r,{label:"Đơn hàng",icon:"receipt",chevron:!0,expanded:d,onClick:()=>I(c=>!c)}),d&&e.jsxs(e.Fragment,{children:[e.jsx(r,{level:2,label:"Tất cả đơn",...t("orders-all")}),e.jsx(r,{level:2,label:"Đơn chờ duyệt",...t("orders-pending")})]}),e.jsx(r,{label:"Khách hàng",icon:"users",...t("customers")})]}),e.jsxs(v,{title:"Quản trị",children:[e.jsx(r,{label:"Báo cáo",icon:"arrow-trend-up",...t("reports")}),e.jsx(r,{label:"Cài đặt",icon:"gear",...t("settings")})]})]})}const O={title:"Component/Điều hướng/SideNav",component:i,args:{collapsed:!1,"aria-label":"Điều hướng chính",children:null},argTypes:{children:{control:!1}},render:l=>e.jsx(L,{children:e.jsx($,{collapsed:!!l.collapsed})})},s={},o={name:"2 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(w,{align:"flex-start",style:{gap:"var(--gap-6)"},children:[!1,!0].map(l=>e.jsx(k,{label:`Collapsed=${l?"True":"False"}`,children:e.jsx(L,{children:e.jsx($,{collapsed:l})})},String(l)))})},_=[{label:"Default",state:"default",active:!1},{label:"Hover",state:"hover",active:!1},{label:"Active",state:"default",active:!0}],n={name:".SideNavItem — 9 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(M,{children:[{title:"Level=1, Collapsed=False",collapsed:!1,level:1,chevron:!1},{title:"Level=1, Collapsed=False, Chevron=True",collapsed:!1,level:1,chevron:!0},{title:"Level=2",collapsed:!1,level:2,chevron:!1},{title:"Level=1, Collapsed=True",collapsed:!0,level:1,chevron:!1}].map(l=>e.jsx(w,{align:"flex-start",style:{gap:"var(--gap-4)",flexWrap:"wrap"},children:_.map(a=>e.jsx(k,{label:`${l.title}, State=${a.label}`,children:e.jsx(i,{collapsed:l.collapsed,"aria-label":`Mẫu ${l.title} ${a.label}`,style:{height:"auto",border:0},children:e.jsx(r,{level:l.level,label:l.level===2?"Đơn chờ duyệt":"Khách hàng",icon:"users",chevron:l.chevron,state:a.state,active:a.active})})},a.label))},l.title))})};var u,h,m,g,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source},description:{story:'Bấm mục để chọn; bấm "Đơn hàng" để mở / đóng mục con. Bật `collapsed` rồi rê chuột vào icon để thấy Tooltip.',...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};var b,f,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '2 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start" style={{
    gap: 'var(--gap-6)'
  }}>
      {[false, true].map(collapsed => <Cell key={String(collapsed)} label={\`Collapsed=\${collapsed ? 'True' : 'False'}\`}>
          <Screen><DemoNav collapsed={collapsed} /></Screen>
        </Cell>)}
    </Row>
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,y,C,T,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '.SideNavItem — 9 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {[{
      title: 'Level=1, Collapsed=False',
      collapsed: false,
      level: 1 as const,
      chevron: false
    }, {
      title: 'Level=1, Collapsed=False, Chevron=True',
      collapsed: false,
      level: 1 as const,
      chevron: true
    }, {
      title: 'Level=2',
      collapsed: false,
      level: 2 as const,
      chevron: false
    }, {
      title: 'Level=1, Collapsed=True',
      collapsed: true,
      level: 1 as const,
      chevron: false
    }].map(row => <Row key={row.title} align="flex-start" style={{
      gap: 'var(--gap-4)',
      flexWrap: 'wrap'
    }}>
          {STATES.map(s => <Cell key={s.label} label={\`\${row.title}, State=\${s.label}\`}>
              <SideNav collapsed={row.collapsed} aria-label={\`Mẫu \${row.title} \${s.label}\`} style={{
          height: 'auto',
          border: 0
        }}>
                <SideNavItem level={row.level} label={row.level === 2 ? 'Đơn chờ duyệt' : 'Khách hàng'} icon="users" chevron={row.chevron} state={s.state} active={s.active} />
              </SideNav>
            </Cell>)}
        </Row>)}
    </Stack>
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source},description:{story:"`.SideNavItem`: Level × State × Collapsed (chỉ Level=1 có Collapsed=True) = 9 variant, thêm Chevron.",...(N=(T=n.parameters)==null?void 0:T.docs)==null?void 0:N.description}}};const E=["Playground","Matrix","ItemMatrix"],D=Object.freeze(Object.defineProperty({__proto__:null,ItemMatrix:n,Matrix:o,Playground:s,__namedExportsOrder:E,default:O},Symbol.toStringTag,{value:"Module"}));export{s as P,D as S};

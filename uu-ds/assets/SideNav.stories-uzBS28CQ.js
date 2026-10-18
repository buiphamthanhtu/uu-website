import{j as e,r as p}from"./iframe-gn_pzB68.js";import{S as u,a as t,b as g}from"./SideNav-3CSWjKo0.js";import{S as B}from"./Switch-CNvp6q2S.js";import{S as A,R as h,C as E}from"./layout-whGn3D85.js";const v=({children:a,height:l=560})=>e.jsxs("div",{style:{display:"flex",height:l,borderRadius:"var(--radius-lg)",border:"1px solid var(--border-muted)",background:"var(--background-muted)",overflow:"hidden"},children:[a,e.jsx("div",{style:{flex:"1 1 0",minWidth:240}})]});function m({collapsed:a,initial:l="customers"}){const[i,D]=p.useState(l),[x,P]=p.useState(!0),s=d=>({active:i===d,onClick:()=>D(d)});return e.jsxs(u,{collapsed:a,"aria-label":"Điều hướng chính",children:[e.jsxs(g,{title:"Tổng quan",children:[e.jsx(t,{label:"Trang chủ",icon:"house",...s("home")}),e.jsx(t,{label:"Đơn hàng",icon:"receipt",chevron:!0,expanded:x,onClick:()=>P(d=>!d)}),x&&e.jsxs(e.Fragment,{children:[e.jsx(t,{level:2,label:"Tất cả đơn",...s("orders-all")}),e.jsx(t,{level:2,label:"Đơn chờ duyệt",...s("orders-pending")})]}),e.jsx(t,{label:"Khách hàng",icon:"users",...s("customers")})]}),e.jsxs(g,{title:"Quản trị",children:[e.jsx(t,{label:"Báo cáo",icon:"arrow-trend-up",...s("reports")}),e.jsx(t,{label:"Cài đặt",icon:"gear",...s("settings")})]})]})}const K={title:"Component/Điều hướng/SideNav",component:u,args:{collapsed:!1,"aria-label":"Điều hướng chính",children:null},argTypes:{children:{control:!1}},render:a=>e.jsx(v,{children:e.jsx(m,{collapsed:!!a.collapsed})})},r={},c={name:"2 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(h,{align:"flex-start",style:{gap:"var(--gap-6)"},children:[!1,!0].map(a=>e.jsx(E,{label:`Collapsed=${a?"True":"False"}`,children:e.jsx(v,{children:e.jsx(m,{collapsed:a})})},String(a)))})},W=[{label:"Default",state:"default",active:!1},{label:"Hover",state:"hover",active:!1},{label:"Active",state:"default",active:!0}],o={name:".SideNavItem — 9 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(A,{children:[{title:"Level=1, Collapsed=False",collapsed:!1,level:1,chevron:!1},{title:"Level=1, Collapsed=False, Chevron=True",collapsed:!1,level:1,chevron:!0},{title:"Level=2",collapsed:!1,level:2,chevron:!1},{title:"Level=1, Collapsed=True",collapsed:!0,level:1,chevron:!1}].map(a=>e.jsx(h,{align:"flex-start",style:{gap:"var(--gap-4)",flexWrap:"wrap"},children:W.map(l=>e.jsx(E,{label:`${a.title}, State=${l.label}`,children:e.jsx(u,{collapsed:a.collapsed,"aria-label":`Mẫu ${a.title} ${l.label}`,style:{height:"auto",border:0},children:e.jsx(t,{level:a.level,label:a.level===2?"Đơn chờ duyệt":"Khách hàng",icon:"users",chevron:a.chevron,state:l.state,active:l.active})})},l.label))},a.title))})},n={name:'data-layout="collapsed" trên khung chứa',parameters:{controls:{disable:!0}},render:()=>{const[a,l]=p.useState("collapsed");return e.jsxs(A,{children:[e.jsxs(h,{children:[e.jsx(B,{"aria-label":'data-layout="collapsed"',checked:a==="collapsed",onChange:i=>l(i?"collapsed":"expanded")}),e.jsxs("span",{className:"text-body",style:{color:"var(--object-primary)"},children:['data-layout="',a,'"']})]}),e.jsx("div",{"data-layout":a,children:e.jsx(v,{children:e.jsx(m,{collapsed:!1})})})]})}};var b,y,S,f,j;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source},description:{story:'Bấm mục để chọn; bấm "Đơn hàng" để mở / đóng mục con. Bật `collapsed` rồi rê chuột vào icon để thấy Tooltip.',...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};var C,k,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var w,L,N,R,$;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(L=o.parameters)==null?void 0:L.docs)==null?void 0:N.source},description:{story:"`.SideNavItem`: Level × State × Collapsed (chỉ Level=1 có Collapsed=True) = 9 variant, thêm Chevron.",...($=(R=o.parameters)==null?void 0:R.docs)==null?void 0:$.description}}};var F,I,M,O,_;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'data-layout="collapsed" trên khung chứa',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [layout, setLayout] = useState<'expanded' | 'collapsed'>('collapsed');
    return <Stack>
        <Row>
          <Switch aria-label='data-layout="collapsed"' checked={layout === 'collapsed'} onChange={on => setLayout(on ? 'collapsed' : 'expanded')} />
          <span className="text-body" style={{
          color: 'var(--object-primary)'
        }}>data-layout="{layout}"</span>
        </Row>
        <div data-layout={layout}>
          <Screen><DemoNav collapsed={false} /></Screen>
        </div>
      </Stack>;
  }
}`,...(M=(I=n.parameters)==null?void 0:I.docs)==null?void 0:M.source},description:{story:'Trục layout (§4.2): `data-layout="collapsed"` trên khung chứa thu gọn thanh mà không cần prop `collapsed` (không có Tooltip).',...(_=(O=n.parameters)==null?void 0:O.docs)==null?void 0:_.description}}};const q=["Playground","Matrix","ItemMatrix","LayoutAxis"],G=Object.freeze(Object.defineProperty({__proto__:null,ItemMatrix:o,LayoutAxis:n,Matrix:c,Playground:r,__namedExportsOrder:q,default:K},Symbol.toStringTag,{value:"Module"}));export{r as P,G as S};

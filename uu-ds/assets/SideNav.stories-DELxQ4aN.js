import{j as e,r as d}from"./iframe-6vwN6wb9.js";import{S as m,b as t,a as f}from"./SideNav-kBOfiGsC.js";import{S as V}from"./Switch-C5m2-2AJ.js";import{S as q,R as b,C as z}from"./layout-nPJ89kCs.js";const v=({children:a,height:l=560})=>e.jsxs("div",{style:{display:"flex",height:l,borderRadius:"var(--radius-lg)",border:"1px solid var(--border-muted)",background:"var(--background-muted)",overflow:"hidden"},children:[a,e.jsx("div",{style:{flex:"1 1 0",minWidth:240}})]});function g({collapsed:a,initial:l="customers",toggle:i=!1,onCollapsedChange:u}){const[G,H]=d.useState(l),[x,Q]=d.useState(!0),s=h=>({active:G===h,onClick:()=>H(h)});return e.jsxs(m,{collapsed:a,toggle:i,onCollapsedChange:u,"aria-label":"Điều hướng chính",children:[e.jsxs(f,{title:"Tổng quan",children:[e.jsx(t,{label:"Trang chủ",icon:"house",...s("home")}),e.jsx(t,{label:"Đơn hàng",icon:"receipt",chevron:!0,expanded:x,badge:3,badgeLabel:"3 đơn mới",onClick:()=>Q(h=>!h)}),x&&e.jsxs(e.Fragment,{children:[e.jsx(t,{level:2,label:"Tất cả đơn",...s("orders-all")}),e.jsx(t,{level:2,label:"Đơn chờ duyệt",...s("orders-pending")})]}),e.jsx(t,{label:"Khách hàng",icon:"users",...s("customers")})]}),e.jsxs(f,{title:"Quản trị",children:[e.jsx(t,{label:"Báo cáo",icon:"arrow-trend-up",...s("reports")}),e.jsx(t,{label:"Cài đặt",icon:"gear",...s("settings")})]})]})}const J={title:"Component/Điều hướng/SideNav",component:m,args:{collapsed:!1,toggle:!0,"aria-label":"Điều hướng chính",children:null},argTypes:{children:{control:!1},onCollapsedChange:{control:!1}},render:function(l){const[i,u]=d.useState(!!l.collapsed);return d.useEffect(()=>u(!!l.collapsed),[l.collapsed]),e.jsx(v,{children:e.jsx(g,{collapsed:i,toggle:!!l.toggle,onCollapsedChange:u})})}},n={},p={name:"2 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(b,{align:"flex-start",style:{gap:"var(--gap-6)"},children:[!1,!0].map(a=>e.jsx(z,{label:`Collapsed=${a?"True":"False"}`,children:e.jsx(v,{children:e.jsx(g,{collapsed:a,toggle:!0})})},String(a)))})},U=[{label:"Default",state:"default",active:!1},{label:"Hover",state:"hover",active:!1},{label:"Active",state:"default",active:!0}],r={name:".SideNavItem — 9 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(q,{children:[{title:"Level=1, Collapsed=False",collapsed:!1,level:1,chevron:!1},{title:"Level=1, Collapsed=False, Chevron=True",collapsed:!1,level:1,chevron:!0},{title:"Level=1, Collapsed=False, Chevron=True, mở",collapsed:!1,level:1,chevron:!0,expanded:!0},{title:"Level=1, Collapsed=False, Badge",collapsed:!1,level:1,chevron:!0,badge:3},{title:"Level=2",collapsed:!1,level:2,chevron:!1},{title:"Level=1, Collapsed=True",collapsed:!0,level:1,chevron:!1},{title:"Level=1, Collapsed=True, Badge",collapsed:!0,level:1,chevron:!1,badge:3}].map(a=>e.jsx(b,{align:"flex-start",style:{gap:"var(--gap-4)",flexWrap:"wrap"},children:U.map(l=>e.jsx(z,{label:`${a.title}, State=${l.label}`,children:e.jsx(m,{collapsed:a.collapsed,"aria-label":`Mẫu ${a.title} ${l.label}`,style:{height:"auto",border:0},children:e.jsx(t,{level:a.level,label:a.level===2?"Đơn chờ duyệt":"Khách hàng",icon:"users",chevron:a.chevron,expanded:a.chevron?!!a.expanded:void 0,badge:a.badge,badgeLabel:a.badge?`${a.badge} mục mới`:void 0,state:l.state,active:l.active})})},l.label))},a.title))})},o={name:'data-layout="collapsed" trên khung chứa',parameters:{controls:{disable:!0}},render:()=>{const[a,l]=d.useState("collapsed");return e.jsxs(q,{children:[e.jsxs(b,{children:[e.jsx(V,{"aria-label":'data-layout="collapsed"',checked:a==="collapsed",onChange:i=>l(i?"collapsed":"expanded")}),e.jsxs("span",{className:"text-body",style:{color:"var(--object-primary)"},children:['data-layout="',a,'"']})]}),e.jsx("div",{"data-layout":a,children:e.jsx(v,{children:e.jsx(g,{collapsed:!1})})})]})}},c={name:"Nút thu / mở · badge",parameters:{controls:{disable:!0}},render:()=>{const[a,l]=d.useState(!1);return e.jsx(v,{children:e.jsx(g,{collapsed:a,toggle:!0,onCollapsedChange:l})})}};var S,y,C,j,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source},description:{story:'Bấm mục để chọn; bấm "Đơn hàng" để mở / đóng mục con (chevron xoay 180°). Bấm nút `sidebar-left` ở đầu thanh để thu gọn, rồi rê chuột vào icon để thấy Tooltip.',...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.description}}};var L,k,N;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <Screen><DemoNav collapsed={collapsed} toggle /></Screen>
        </Cell>)}
    </Row>
}`,...(N=(k=p.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var w,$,B,F,R;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      title: 'Level=1, Collapsed=False, Chevron=True, mở',
      collapsed: false,
      level: 1 as const,
      chevron: true,
      expanded: true
    }, {
      title: 'Level=1, Collapsed=False, Badge',
      collapsed: false,
      level: 1 as const,
      chevron: true,
      badge: 3
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
    }, {
      title: 'Level=1, Collapsed=True, Badge',
      collapsed: true,
      level: 1 as const,
      chevron: false,
      badge: 3
    }].map((row: {
      title: string;
      collapsed: boolean;
      level: 1 | 2;
      chevron: boolean;
      expanded?: boolean;
      badge?: number;
    }) => <Row key={row.title} align="flex-start" style={{
      gap: 'var(--gap-4)',
      flexWrap: 'wrap'
    }}>
          {STATES.map(s => <Cell key={s.label} label={\`\${row.title}, State=\${s.label}\`}>
              <SideNav collapsed={row.collapsed} aria-label={\`Mẫu \${row.title} \${s.label}\`} style={{
          height: 'auto',
          border: 0
        }}>
                <SideNavItem level={row.level} label={row.level === 2 ? 'Đơn chờ duyệt' : 'Khách hàng'} icon="users" chevron={row.chevron} expanded={row.chevron ? !!row.expanded : undefined} badge={row.badge} badgeLabel={row.badge ? \`\${row.badge} mục mới\` : undefined} state={s.state} active={s.active} />
              </SideNav>
            </Cell>)}
        </Row>)}
    </Stack>
}`,...(B=($=r.parameters)==null?void 0:$.docs)==null?void 0:B.source},description:{story:"`.SideNavItem`: Level × State × Collapsed (chỉ Level=1 có Collapsed=True) = 9 variant, thêm Chevron (đóng / mở) và Badge.",...(R=(F=r.parameters)==null?void 0:F.docs)==null?void 0:R.description}}};var I,M,D,E,O;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(M=o.parameters)==null?void 0:M.docs)==null?void 0:D.source},description:{story:'Trục layout (§4.2): `data-layout="collapsed"` trên khung chứa thu gọn thanh mà không cần prop `collapsed` (không có Tooltip).',...(O=(E=o.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};var _,A,P,K,W;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Nút thu / mở · badge',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return <Screen><DemoNav collapsed={collapsed} toggle onCollapsedChange={setCollapsed} /></Screen>;
  }
}`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source},description:{story:'Nút thu / mở (`Toggle`): `IconButtonNeutral` Ghost Small `sidebar-left` ở đầu thanh — dồn phải khi mở rộng, căn giữa khi thu gọn, có Tooltip khi thu gọn. Bấm gọi `onCollapsedChange`. Badge của "Đơn hàng" thành Dot ở góc icon khi thu gọn.',...(W=(K=c.parameters)==null?void 0:K.docs)==null?void 0:W.description}}};const X=["Playground","Matrix","ItemMatrix","LayoutAxis","Toggle"],le=Object.freeze(Object.defineProperty({__proto__:null,ItemMatrix:r,LayoutAxis:o,Matrix:p,Playground:n,Toggle:c,__namedExportsOrder:X,default:J},Symbol.toStringTag,{value:"Module"}));export{r as I,o as L,p as M,n as P,le as S,c as T};

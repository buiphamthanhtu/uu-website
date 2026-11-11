import{f as a,j as e,R as m,C as g,S as J,r as q}from"./iframe-CG-Y5hsd.js";const K={parameters:{scrollX:!0},title:"Component/Hành động/TextButton",component:a,args:{children:"Action",tone:"accent",type:"solid",inverted:!1,size:"base",state:"default"},argTypes:{tone:{control:"radio",options:["accent","neutral","danger"],description:"bản thiết kế: TextButtonAccent / TextButtonNeutral / TextButtonDanger"},type:{control:"radio",options:["solid","outline","ghost","tonal"],description:"`tonal` chỉ dùng với tone neutral, không inverted"},size:{control:"radio",options:["large","base","small"]},state:{control:"select",options:["default","hover","pressed","disabled","loading"]},prefix:{control:"text",description:"Tên icon bên trái chữ (vd. plus)"},suffix:{control:"text",description:"Tên UU icon (vd. chevron-right)"},inverted:{control:"boolean"},onClick:{action:"click"}}},l={},c={render:t=>e.jsxs(m,{children:[e.jsx(a,{...t,size:"large",children:"Large 56"}),e.jsx(a,{...t,size:"base",children:"Base 48"}),e.jsx(a,{...t,size:"small",children:"Small 32"})]})},d={name:"Suffix icon",render:t=>e.jsxs(m,{children:[e.jsx(a,{...t,size:"large",suffix:"chevron-right",children:"Tiếp tục"}),e.jsx(a,{...t,size:"base",suffix:"chevron-right",children:"Tiếp tục"}),e.jsx(a,{...t,size:"small",suffix:"chevron-right",children:"Tiếp tục"})]})},u={name:"Prefix icon",render:t=>e.jsxs(m,{children:[e.jsx(a,{...t,size:"large",prefix:"texture",children:"Thêm địa chỉ"}),e.jsx(a,{...t,size:"base",prefix:"texture",children:"Thêm địa chỉ"}),e.jsx(a,{...t,size:"small",prefix:"texture",children:"Thêm địa chỉ"}),e.jsx(a,{...t,size:"base",prefix:"texture",state:"loading",children:"Thêm địa chỉ"})]})},Q=["solid","outline","ghost"],x=["default","hover","pressed","disabled","loading"],n={name:"Ma trận variant",parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsx(J,{children:["accent","neutral","danger"].map(t=>e.jsxs("div",{children:[e.jsx("h3",{className:"uu-text-label",style:{margin:"0 0 var(--gap-2)"},children:t==="accent"?"TextButtonAccent":t==="neutral"?"TextButtonNeutral":"TextButtonDanger"}),(t==="danger"?[!1]:[!1,!0]).map(r=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px repeat(5, auto)",gap:"var(--gap-2) var(--gap-4)",alignItems:"center",padding:"var(--gap-3)",borderRadius:"var(--radius-lg)",background:r?"var(--background-inverted)":"var(--background-muted)",marginBottom:"var(--gap-2)"},children:[e.jsxs("span",{className:"uu-story-caption",style:{color:r?"var(--object-primary-inverted)":void 0},children:["Inverted=",String(r)]}),x.map(s=>e.jsx("span",{className:"uu-story-caption",style:{color:r?"var(--object-primary-inverted)":void 0},children:s},s)),Q.map(s=>e.jsxs(q.Fragment,{children:[e.jsx("span",{className:"uu-story-caption",style:{color:r?"var(--object-primary-inverted)":void 0},children:s}),x.map(h=>e.jsx(a,{tone:t,type:s,inverted:r,state:h,children:"Action"},`${s}-${h}`))]},s))]},String(r)))]},t))})},o={parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px repeat(5, auto)",gap:"var(--gap-2) var(--gap-4)",alignItems:"center",padding:"var(--gap-3)",borderRadius:"var(--radius-lg)",background:"var(--background-surface)"},children:[e.jsx("span",{className:"uu-story-caption",children:"Size"}),x.map(t=>e.jsx("span",{className:"uu-story-caption",children:t},t)),["large","base","small"].map(t=>e.jsxs(q.Fragment,{children:[e.jsx("span",{className:"uu-story-caption",children:t}),x.map(r=>e.jsx(a,{tone:"neutral",type:"tonal",size:t,state:r,children:"Action"},r))]},t))]})},p={args:{state:"loading",children:"Đang gửi mã xác thực"},render:t=>e.jsxs(m,{children:[e.jsx(g,{label:"Trước khi bấm",children:e.jsx(a,{...t,state:"default",children:"Gửi mã xác thực"})}),e.jsx(g,{label:"Loading — label ở lại, spinner đứng trước",children:e.jsx(a,{...t})})]})},i={name:"TextButtonDanger",args:{tone:"danger"},render:t=>e.jsxs(m,{children:[e.jsx(g,{label:"Solid",children:e.jsx(a,{...t,type:"solid",children:"Xoá tài khoản"})}),e.jsx(g,{label:"Outline",children:e.jsx(a,{...t,type:"outline",children:"Huỷ đơn"})}),e.jsx(g,{label:"Ghost",children:e.jsx(a,{...t,type:"ghost",children:"Gỡ thiết bị"})})]})};var v,T,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(y=(T=l.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var b,f,B;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Row>
      <TextButton {...args} size="large">Large 56</TextButton>
      <TextButton {...args} size="base">Base 48</TextButton>
      <TextButton {...args} size="small">Small 32</TextButton>
    </Row>
}`,...(B=(f=c.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var j,k,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Suffix icon',
  render: args => <Row>
      <TextButton {...args} size="large" suffix="chevron-right">Tiếp tục</TextButton>
      <TextButton {...args} size="base" suffix="chevron-right">Tiếp tục</TextButton>
      <TextButton {...args} size="small" suffix="chevron-right">Tiếp tục</TextButton>
    </Row>
}`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var S,C,N;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Prefix icon',
  render: args => <Row>
      <TextButton {...args} size="large" prefix="texture">Thêm địa chỉ</TextButton>
      <TextButton {...args} size="base" prefix="texture">Thêm địa chỉ</TextButton>
      <TextButton {...args} size="small" prefix="texture">Thêm địa chỉ</TextButton>
      <TextButton {...args} size="base" prefix="texture" state="loading">Thêm địa chỉ</TextButton>
    </Row>
}`,...(N=(C=u.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var R,w,D,P,A;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Ma trận variant',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  render: () => <Stack>
      {(['accent', 'neutral', 'danger'] as const).map(tone => <div key={tone}>
          <h3 className="uu-text-label" style={{
        margin: '0 0 var(--gap-2)'
      }}>{tone === 'accent' ? 'TextButtonAccent' : tone === 'neutral' ? 'TextButtonNeutral' : 'TextButtonDanger'}</h3>
          {(tone === 'danger' ? [false] : [false, true]).map(inverted => <div key={String(inverted)} style={{
        display: 'grid',
        gridTemplateColumns: '80px repeat(5, auto)',
        gap: 'var(--gap-2) var(--gap-4)',
        alignItems: 'center',
        padding: 'var(--gap-3)',
        borderRadius: 'var(--radius-lg)',
        background: inverted ? 'var(--background-inverted)' : 'var(--background-muted)',
        marginBottom: 'var(--gap-2)'
      }}>
              <span className="uu-story-caption" style={{
          color: inverted ? 'var(--object-primary-inverted)' : undefined
        }}>Inverted={String(inverted)}</span>
              {states.map(s => <span key={s} className="uu-story-caption" style={{
          color: inverted ? 'var(--object-primary-inverted)' : undefined
        }}>{s}</span>)}
              {types.map(t => <Fragment key={t}>
                  <span className="uu-story-caption" style={{
            color: inverted ? 'var(--object-primary-inverted)' : undefined
          }}>{t}</span>
                  {states.map(s => <TextButton key={\`\${t}-\${s}\`} tone={tone} type={t} inverted={inverted} state={s}>Action</TextButton>)}
                </Fragment>)}
            </div>)}
        </div>)}
    </Stack>
}`,...(D=(w=n.parameters)==null?void 0:w.docs)==null?void 0:D.source},description:{story:"Toàn bộ 3 tone × 3 type × 2 inverted (Danger chỉ Inverted=False) × 5 state ở size Base. Hover/Pressed là trạng thái ép (data-state) để đối chiếu bản thiết kế.",...(A=(P=n.parameters)==null?void 0:P.docs)==null?void 0:A.description}}};var F,I,L,G,M;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '80px repeat(5, auto)',
    gap: 'var(--gap-2) var(--gap-4)',
    alignItems: 'center',
    padding: 'var(--gap-3)',
    borderRadius: 'var(--radius-lg)',
    background: 'var(--background-surface)'
  }}>
      <span className="uu-story-caption">Size</span>
      {states.map(s => <span key={s} className="uu-story-caption">{s}</span>)}
      {(['large', 'base', 'small'] as const).map(size => <Fragment key={size}>
          <span className="uu-story-caption">{size}</span>
          {states.map(s => <TextButton key={s} tone="neutral" type="tonal" size={size} state={s}>Action</TextButton>)}
        </Fragment>)}
    </div>
}`,...(L=(I=o.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:"`Tonal` của `TextButtonNeutral`: 3 size × 5 state, đặt trên nền `background-surface`.",...(M=(G=o.parameters)==null?void 0:G.docs)==null?void 0:M.description}}};var _,O,W;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    state: 'loading',
    children: 'Đang gửi mã xác thực'
  },
  render: args => <Row>
      <Cell label="Trước khi bấm"><TextButton {...args} state="default">Gửi mã xác thực</TextButton></Cell>
      <Cell label="Loading — label ở lại, spinner đứng trước"><TextButton {...args} /></Cell>
    </Row>
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var H,$,E,X,U;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'TextButtonDanger',
  args: {
    tone: 'danger'
  },
  render: args => <Row>
      <Cell label="Solid"><TextButton {...args} type="solid">Xoá tài khoản</TextButton></Cell>
      <Cell label="Outline"><TextButton {...args} type="outline">Huỷ đơn</TextButton></Cell>
      <Cell label="Ghost"><TextButton {...args} type="ghost">Gỡ thiết bị</TextButton></Cell>
    </Row>
}`,...(E=($=i.parameters)==null?void 0:$.docs)==null?void 0:E.source},description:{story:"`TextButtonDanger` — chỉ cho hành động không hoàn tác được; một nút Solid mỗi màn.",...(U=(X=i.parameters)==null?void 0:X.docs)==null?void 0:U.description}}};const V=["Playground","Sizes","WithSuffix","WithPrefix","Matrix","Tonal","Loading","Danger"],Z=Object.freeze(Object.defineProperty({__proto__:null,Danger:i,Loading:p,Matrix:n,Playground:l,Sizes:c,Tonal:o,WithPrefix:u,WithSuffix:d,__namedExportsOrder:V,default:K},Symbol.toStringTag,{value:"Module"}));export{i as D,p as L,n as M,l as P,Z as S,d as W,c as a,u as b};

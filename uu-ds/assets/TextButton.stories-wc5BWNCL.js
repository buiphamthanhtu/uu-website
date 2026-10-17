import{a as r,j as e,r as A}from"./iframe-DOXsB9Iw.js";import{R as d,C as u,S as L}from"./layout-BGqIjpay.js";const _={title:"Component/Hành động/TextButton",component:r,args:{children:"Action",tone:"accent",type:"solid",inverted:!1,size:"base",state:"default"},argTypes:{tone:{control:"radio",options:["accent","neutral"],description:"bản thiết kế: TextButtonAccent / TextButtonNeutral"},type:{control:"radio",options:["solid","outline","ghost"]},size:{control:"radio",options:["large","base","small"]},state:{control:"select",options:["default","hover","pressed","disabled","loading"]},suffix:{control:"text",description:"Tên UU icon (vd. chevron-right)"},inverted:{control:"boolean"},onClick:{action:"click"}}},o={},i={render:t=>e.jsxs(d,{children:[e.jsx(r,{...t,size:"large",children:"Large 56"}),e.jsx(r,{...t,size:"base",children:"Base 48"}),e.jsx(r,{...t,size:"small",children:"Small 32"})]})},c={name:"Suffix icon",render:t=>e.jsxs(d,{children:[e.jsx(r,{...t,size:"large",suffix:"chevron-right",children:"Tiếp tục"}),e.jsx(r,{...t,size:"base",suffix:"chevron-right",children:"Tiếp tục"}),e.jsx(r,{...t,size:"small",suffix:"chevron-right",children:"Tiếp tục"})]})},M=["solid","outline","ghost"],m=["default","hover","pressed","disabled","loading"],n={name:"Ma trận variant",parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsx(L,{children:["accent","neutral"].map(t=>e.jsxs("div",{children:[e.jsx("h3",{className:"uu-text-label",style:{margin:"0 0 var(--gap-2)"},children:t==="accent"?"TextButtonAccent":"TextButtonNeutral"}),[!1,!0].map(a=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px repeat(5, auto)",gap:"var(--gap-2) var(--gap-4)",alignItems:"center",padding:"var(--gap-3)",borderRadius:"var(--radius-lg)",background:a?"var(--background-inverted)":"var(--background-muted)",marginBottom:"var(--gap-2)"},children:[e.jsxs("span",{className:"uu-story-caption",style:{color:a?"var(--object-primary-inverted)":void 0},children:["Inverted=",String(a)]}),m.map(s=>e.jsx("span",{className:"uu-story-caption",style:{color:a?"var(--object-primary-inverted)":void 0},children:s},s)),M.map(s=>e.jsxs(A.Fragment,{children:[e.jsx("span",{className:"uu-story-caption",style:{color:a?"var(--object-primary-inverted)":void 0},children:s}),m.map(p=>e.jsx(r,{tone:t,type:s,inverted:a,state:p,children:"Action"},`${s}-${p}`))]},s))]},String(a)))]},t))})},l={args:{state:"loading",children:"Đang gửi mã xác thực"},render:t=>e.jsxs(d,{children:[e.jsx(u,{label:"Trước khi bấm",children:e.jsx(r,{...t,state:"default",children:"Gửi mã xác thực"})}),e.jsx(u,{label:"Loading — label ở lại, spinner đứng trước",children:e.jsx(r,{...t})})]})};var g,x,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,y,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Row>
      <TextButton {...args} size="large">Large 56</TextButton>
      <TextButton {...args} size="base">Base 48</TextButton>
      <TextButton {...args} size="small">Small 32</TextButton>
    </Row>
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var T,f,j;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Suffix icon',
  render: args => <Row>
      <TextButton {...args} size="large" suffix="chevron-right">Tiếp tục</TextButton>
      <TextButton {...args} size="base" suffix="chevron-right">Tiếp tục</TextButton>
      <TextButton {...args} size="small" suffix="chevron-right">Tiếp tục</TextButton>
    </Row>
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var B,S,k,z,N;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Ma trận variant',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  render: () => <Stack>
      {(['accent', 'neutral'] as const).map(tone => <div key={tone}>
          <h3 className="uu-text-label" style={{
        margin: '0 0 var(--gap-2)'
      }}>{tone === 'accent' ? 'TextButtonAccent' : 'TextButtonNeutral'}</h3>
          {[false, true].map(inverted => <div key={String(inverted)} style={{
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
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:"Toàn bộ 2 tone × 3 type × 2 inverted × 5 state ở size Base. Hover/Pressed là trạng thái ép (data-state) để đối chiếu bản thiết kế.",...(N=(z=n.parameters)==null?void 0:z.docs)==null?void 0:N.description}}};var R,C,w;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    state: 'loading',
    children: 'Đang gửi mã xác thực'
  },
  render: args => <Row>
      <Cell label="Trước khi bấm"><TextButton {...args} state="default">Gửi mã xác thực</TextButton></Cell>
      <Cell label="Loading — label ở lại, spinner đứng trước"><TextButton {...args} /></Cell>
    </Row>
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const P=["Playground","Sizes","WithSuffix","Matrix","Loading"],E=Object.freeze(Object.defineProperty({__proto__:null,Loading:l,Matrix:n,Playground:o,Sizes:i,WithSuffix:c,__namedExportsOrder:P,default:_},Symbol.toStringTag,{value:"Module"}));export{o as P,E as S};

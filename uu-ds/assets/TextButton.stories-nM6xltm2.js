import{a as r,j as e,r as M}from"./iframe-BYdOfVdF.js";import{R as p,C as u,S as O}from"./layout-Bjrrhjus.js";const P={title:"Component/Hành động/TextButton",component:r,args:{children:"Action",tone:"accent",type:"solid",inverted:!1,size:"base",state:"default"},argTypes:{tone:{control:"radio",options:["accent","neutral","danger"],description:"bản thiết kế: TextButtonAccent / TextButtonNeutral / TextButtonDanger"},type:{control:"radio",options:["solid","outline","ghost"]},size:{control:"radio",options:["large","base","small"]},state:{control:"select",options:["default","hover","pressed","disabled","loading"]},suffix:{control:"text",description:"Tên UU icon (vd. chevron-right)"},inverted:{control:"boolean"},onClick:{action:"click"}}},i={},l={render:t=>e.jsxs(p,{children:[e.jsx(r,{...t,size:"large",children:"Large 56"}),e.jsx(r,{...t,size:"base",children:"Base 48"}),e.jsx(r,{...t,size:"small",children:"Small 32"})]})},c={name:"Suffix icon",render:t=>e.jsxs(p,{children:[e.jsx(r,{...t,size:"large",suffix:"chevron-right",children:"Tiếp tục"}),e.jsx(r,{...t,size:"base",suffix:"chevron-right",children:"Tiếp tục"}),e.jsx(r,{...t,size:"small",suffix:"chevron-right",children:"Tiếp tục"})]})},F=["solid","outline","ghost"],m=["default","hover","pressed","disabled","loading"],s={name:"Ma trận variant",parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsx(O,{children:["accent","neutral","danger"].map(t=>e.jsxs("div",{children:[e.jsx("h3",{className:"uu-text-label",style:{margin:"0 0 var(--gap-2)"},children:t==="accent"?"TextButtonAccent":t==="neutral"?"TextButtonNeutral":"TextButtonDanger"}),(t==="danger"?[!1]:[!1,!0]).map(a=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px repeat(5, auto)",gap:"var(--gap-2) var(--gap-4)",alignItems:"center",padding:"var(--gap-3)",borderRadius:"var(--radius-lg)",background:a?"var(--background-inverted)":"var(--background-muted)",marginBottom:"var(--gap-2)"},children:[e.jsxs("span",{className:"uu-story-caption",style:{color:a?"var(--object-primary-inverted)":void 0},children:["Inverted=",String(a)]}),m.map(n=>e.jsx("span",{className:"uu-story-caption",style:{color:a?"var(--object-primary-inverted)":void 0},children:n},n)),F.map(n=>e.jsxs(M.Fragment,{children:[e.jsx("span",{className:"uu-story-caption",style:{color:a?"var(--object-primary-inverted)":void 0},children:n}),m.map(g=>e.jsx(r,{tone:t,type:n,inverted:a,state:g,children:"Action"},`${n}-${g}`))]},n))]},String(a)))]},t))})},d={args:{state:"loading",children:"Đang gửi mã xác thực"},render:t=>e.jsxs(p,{children:[e.jsx(u,{label:"Trước khi bấm",children:e.jsx(r,{...t,state:"default",children:"Gửi mã xác thực"})}),e.jsx(u,{label:"Loading — label ở lại, spinner đứng trước",children:e.jsx(r,{...t})})]})},o={name:"TextButtonDanger",args:{tone:"danger"},render:t=>e.jsxs(p,{children:[e.jsx(u,{label:"Solid",children:e.jsx(r,{...t,type:"solid",children:"Xoá tài khoản"})}),e.jsx(u,{label:"Outline",children:e.jsx(r,{...t,type:"outline",children:"Huỷ đơn"})}),e.jsx(u,{label:"Ghost",children:e.jsx(r,{...t,type:"ghost",children:"Gỡ thiết bị"})})]})};var x,h,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,T,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Row>
      <TextButton {...args} size="large">Large 56</TextButton>
      <TextButton {...args} size="base">Base 48</TextButton>
      <TextButton {...args} size="small">Small 32</TextButton>
    </Row>
}`,...(b=(T=l.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var B,f,j;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Suffix icon',
  render: args => <Row>
      <TextButton {...args} size="large" suffix="chevron-right">Tiếp tục</TextButton>
      <TextButton {...args} size="base" suffix="chevron-right">Tiếp tục</TextButton>
      <TextButton {...args} size="small" suffix="chevron-right">Tiếp tục</TextButton>
    </Row>
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var S,k,z,C,R;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(k=s.parameters)==null?void 0:k.docs)==null?void 0:z.source},description:{story:"Toàn bộ 3 tone × 3 type × 2 inverted (Danger chỉ Inverted=False) × 5 state ở size Base. Hover/Pressed là trạng thái ép (data-state) để đối chiếu bản thiết kế.",...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.description}}};var N,w,D;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    state: 'loading',
    children: 'Đang gửi mã xác thực'
  },
  render: args => <Row>
      <Cell label="Trước khi bấm"><TextButton {...args} state="default">Gửi mã xác thực</TextButton></Cell>
      <Cell label="Loading — label ở lại, spinner đứng trước"><TextButton {...args} /></Cell>
    </Row>
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var A,G,L,_,I;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'TextButtonDanger',
  args: {
    tone: 'danger'
  },
  render: args => <Row>
      <Cell label="Solid"><TextButton {...args} type="solid">Xoá tài khoản</TextButton></Cell>
      <Cell label="Outline"><TextButton {...args} type="outline">Huỷ đơn</TextButton></Cell>
      <Cell label="Ghost"><TextButton {...args} type="ghost">Gỡ thiết bị</TextButton></Cell>
    </Row>
}`,...(L=(G=o.parameters)==null?void 0:G.docs)==null?void 0:L.source},description:{story:"`TextButtonDanger` — chỉ cho hành động không hoàn tác được; một nút Solid mỗi màn.",...(I=(_=o.parameters)==null?void 0:_.docs)==null?void 0:I.description}}};const H=["Playground","Sizes","WithSuffix","Matrix","Loading","Danger"],U=Object.freeze(Object.defineProperty({__proto__:null,Danger:o,Loading:d,Matrix:s,Playground:i,Sizes:l,WithSuffix:c,__namedExportsOrder:H,default:P},Symbol.toStringTag,{value:"Module"}));export{i as P,U as S};

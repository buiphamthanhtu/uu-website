import{I as i,j as e,r as h}from"./iframe-EkKnofS_.js";import{S as k,R as I}from"./layout-Xzi5pJ9U.js";const S={title:"Component/Hành động/IconButton",component:i,args:{icon:"xmark",label:"Đóng",tone:"neutral",type:"ghost",inverted:!1,size:"base",state:"default"},argTypes:{tone:{control:"radio",options:["accent","neutral"]},type:{control:"radio",options:["solid","outline","ghost"]},size:{control:"radio",options:["large","base","small"]},state:{control:"select",options:["default","hover","pressed","disabled","loading"]},iconVariant:{control:"radio",options:["outline","fill"]},onClick:{action:"click"}}},s={},o={render:r=>e.jsxs(I,{children:[e.jsx(i,{...r,size:"large"})," ",e.jsx(i,{...r,size:"base"})," ",e.jsx(i,{...r,size:"small"})]})},f=["solid","outline","ghost"],d=["default","hover","pressed","disabled","loading"],n={name:"Ma trận variant",parameters:{controls:{disable:!0},layout:"padded"},render:r=>e.jsx(k,{children:["accent","neutral"].map(c=>e.jsxs("div",{children:[e.jsx("h3",{className:"uu-text-label",style:{margin:"0 0 var(--gap-2)"},children:c==="accent"?"IconButtonAccent":"IconButtonNeutral"}),[!1,!0].map(a=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px repeat(5, auto)",gap:"var(--gap-2) var(--gap-4)",alignItems:"center",padding:"var(--gap-3)",borderRadius:"var(--radius-lg)",background:a?"var(--background-inverted)":"var(--background-muted)",marginBottom:"var(--gap-2)"},children:[e.jsxs("span",{className:"uu-story-caption",style:{color:a?"var(--object-primary-inverted)":void 0},children:["Inverted=",String(a)]}),d.map(t=>e.jsx("span",{className:"uu-story-caption",style:{color:a?"var(--object-primary-inverted)":void 0},children:t},t)),f.map(t=>e.jsxs(h.Fragment,{children:[e.jsx("span",{className:"uu-story-caption",style:{color:a?"var(--object-primary-inverted)":void 0},children:t}),d.map(l=>e.jsx(i,{icon:r.icon,label:r.label,tone:c,type:t,inverted:a,state:l},`${t}-${l}`))]},t))]},String(a)))]},c))})};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,v,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Row>
      <IconButton {...args} size="large" /> <IconButton {...args} size="base" /> <IconButton {...args} size="small" />
    </Row>
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,x,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Ma trận variant',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  render: (args: IconButtonProps) => <Stack>
      {(['accent', 'neutral'] as const).map(tone => <div key={tone}>
          <h3 className="uu-text-label" style={{
        margin: '0 0 var(--gap-2)'
      }}>{tone === 'accent' ? 'IconButtonAccent' : 'IconButtonNeutral'}</h3>
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
                  {states.map(s => <IconButton key={\`\${t}-\${s}\`} icon={args.icon} label={args.label} tone={tone} type={t} inverted={inverted} state={s} />)}
                </Fragment>)}
            </div>)}
        </div>)}
    </Stack>
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const B=["Playground","Sizes","Matrix"],R=Object.freeze(Object.defineProperty({__proto__:null,Matrix:n,Playground:s,Sizes:o,__namedExportsOrder:B,default:S},Symbol.toStringTag,{value:"Module"}));export{s as P,R as S};

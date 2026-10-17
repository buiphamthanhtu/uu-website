import{j as t,b as a}from"./iframe-B79aK45l.js";import{N as e}from"./NotificationBadge-B3Fsypaz.js";import{R as y}from"./layout-DfDgT8VD.js";const x={title:"Component/Giao tiếp/NotificationBadge",component:e,args:{content:"count",count:9,label:"9 thông báo mới"},argTypes:{content:{control:"radio",options:["count","dot"]},count:{control:"text"}}},n={},s={name:"Count · Dot",parameters:{controls:{disable:!0}},render:()=>t.jsxs(y,{children:[t.jsx(e,{content:"count",count:9,label:"9 thông báo mới"}),t.jsx(e,{content:"count",count:12,label:"12 thông báo mới"}),t.jsx(e,{content:"dot",label:"Có thông báo mới"})]})},o={name:"Đặt lên icon (màn tự neo)",parameters:{controls:{disable:!0}},render:()=>t.jsxs(y,{children:[t.jsxs("span",{style:{position:"relative",display:"inline-flex"},children:[t.jsx(a,{type:"ghost",size:"base",icon:"bell",label:"Thông báo"}),t.jsx(e,{content:"count",count:3,label:"3 thông báo mới",style:{position:"absolute",top:8,right:8}})]}),t.jsxs("span",{style:{position:"relative",display:"inline-flex"},children:[t.jsx(a,{type:"ghost",size:"base",icon:"bell",label:"Thông báo"}),t.jsx(e,{content:"dot",label:"Có thông báo mới",style:{position:"absolute",top:12,right:12}})]})]})};var i,r,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var c,p,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Count · Dot',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <NotificationBadge content="count" count={9} label="9 thông báo mới" />
      <NotificationBadge content="count" count={12} label="12 thông báo mới" />
      <NotificationBadge content="dot" label="Có thông báo mới" />
    </Row>
}`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var d,u,m,g,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Đặt lên icon (màn tự neo)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <span style={{
      position: 'relative',
      display: 'inline-flex'
    }}>
        <IconButtonNeutral type="ghost" size="base" icon="bell" label="Thông báo" />
        <NotificationBadge content="count" count={3} label="3 thông báo mới" style={{
        position: 'absolute',
        top: 8,
        right: 8
      }} />
      </span>
      <span style={{
      position: 'relative',
      display: 'inline-flex'
    }}>
        <IconButtonNeutral type="ghost" size="base" icon="bell" label="Thông báo" />
        <NotificationBadge content="dot" label="Có thông báo mới" style={{
        position: 'absolute',
        top: 12,
        right: 12
      }} />
      </span>
    </Row>
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"Màn tự đặt vị trí neo — bản thiết kế chưa chốt offset. Ví dụ dưới là cách đặt thường gặp, không phải spec.",...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};const f=["Playground","Contents","OnIcon"],C=Object.freeze(Object.defineProperty({__proto__:null,Contents:s,OnIcon:o,Playground:n,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{n as P,C as S};

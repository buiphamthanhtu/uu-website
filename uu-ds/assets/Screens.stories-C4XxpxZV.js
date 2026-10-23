import{j as e}from"./iframe-BYdOfVdF.js";import{E as l,a as v,b as c}from"./Screens-BWtHDJlL.js";import{R as E,C as n,P as s}from"./layout-Bjrrhjus.js";const t={src:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect x="36" y="44" width="56" height="44" rx="8" fill-opacity="0.12"/><rect x="48" y="32" width="32" height="12" rx="4" fill-opacity="0.08"/></svg>'),alt:"Hộp rỗng"},w={title:"Component/Chứa đựng/Screens",component:l,args:{title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây.",image:t,action:{label:"Tạo đơn"}},render:T=>e.jsx("div",{style:{width:390},children:e.jsx(l,{...T})})},i={name:"EmptySection"},r={name:"Ma trận khối nhúng",parameters:{controls:{disable:!0}},render:()=>e.jsxs(E,{align:"flex-start",children:[e.jsx(n,{label:"EmptySection · Action=true",children:e.jsx("div",{style:{width:390},children:e.jsx(l,{image:t,title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây.",action:{label:"Tạo đơn"}})})}),e.jsx(n,{label:"EmptySection · Action=false",children:e.jsx("div",{style:{width:390},children:e.jsx(l,{image:t,title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây."})})}),e.jsx(n,{label:"ErrorSection",children:e.jsx("div",{style:{width:390},children:e.jsx(v,{image:{...t,alt:"Kết nối bị gián đoạn"},title:"Chưa tải được danh sách",description:"Kiểm tra kết nối mạng rồi thử lại.",action:{label:"Thử lại"}})})}),e.jsx(n,{label:"Không truyền ảnh — ô tròn 128 vẫn còn",children:e.jsx("div",{style:{width:390},children:e.jsx(l,{title:"Chưa có thông báo",description:"Thông báo mới sẽ hiện ở đây."})})})]})},a={name:"ErrorSection",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{width:390},children:e.jsx(v,{image:{...t,alt:"Kết nối bị gián đoạn"},title:"Chưa tải được danh sách",description:"Kiểm tra kết nối mạng rồi thử lại.",action:{label:"Thử lại",onClick:()=>{}}})})},o={name:"EmptyScreen (template màn)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(E,{align:"flex-start",children:[e.jsx(n,{label:"Action=true",children:e.jsx(s,{height:720,background:"var(--background-surface)",children:e.jsx(c,{screenTitle:"Đơn hàng",onBack:()=>{},image:t,title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây.",action:{label:"Tạo đơn"}})})}),e.jsx(n,{label:"Action=false",children:e.jsx(s,{height:720,background:"var(--background-surface)",children:e.jsx(c,{screenTitle:"Thông báo",onBack:()=>{},image:{...t,alt:"Chuông im lặng"},title:"Chưa có thông báo",description:"Thông báo mới sẽ hiện ở đây."})})})]})};var h,d,m;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'EmptySection'
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,p,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Ma trận khối nhúng',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Cell label="EmptySection · Action=true">
        <div style={{
        width: 390
      }}><EmptySection image={ART} title="Chưa có đơn hàng" description="Đơn bạn tạo sẽ hiện ở đây." action={{
          label: 'Tạo đơn'
        }} /></div>
      </Cell>
      <Cell label="EmptySection · Action=false">
        <div style={{
        width: 390
      }}><EmptySection image={ART} title="Chưa có đơn hàng" description="Đơn bạn tạo sẽ hiện ở đây." /></div>
      </Cell>
      <Cell label="ErrorSection">
        <div style={{
        width: 390
      }}><ErrorSection image={{
          ...ART,
          alt: 'Kết nối bị gián đoạn'
        }} title="Chưa tải được danh sách" description="Kiểm tra kết nối mạng rồi thử lại." action={{
          label: 'Thử lại'
        }} /></div>
      </Cell>
      <Cell label="Không truyền ảnh — ô tròn 128 vẫn còn">
        <div style={{
        width: 390
      }}><EmptySection title="Chưa có thông báo" description="Thông báo mới sẽ hiện ở đây." /></div>
      </Cell>
    </Row>
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,u,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'ErrorSection',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 390
  }}>
      <ErrorSection image={{
      ...ART,
      alt: 'Kết nối bị gián đoạn'
    }} title="Chưa tải được danh sách" description="Kiểm tra kết nối mạng rồi thử lại." action={{
      label: 'Thử lại',
      onClick: () => {}
    }} />
    </div>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var C,S,j;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'EmptyScreen (template màn)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Cell label="Action=true">
        <PhoneFrame height={720} background="var(--background-surface)">
          <EmptyScreen screenTitle="Đơn hàng" onBack={() => {}} image={ART} title="Chưa có đơn hàng" description="Đơn bạn tạo sẽ hiện ở đây." action={{
          label: 'Tạo đơn'
        }} />
        </PhoneFrame>
      </Cell>
      <Cell label="Action=false">
        <PhoneFrame height={720} background="var(--background-surface)">
          <EmptyScreen screenTitle="Thông báo" onBack={() => {}} image={{
          ...ART,
          alt: 'Chuông im lặng'
        }} title="Chưa có thông báo" description="Thông báo mới sẽ hiện ở đây." />
        </PhoneFrame>
      </Cell>
    </Row>
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const k=["Playground","Matrix","ErrorBlock","Screen"],K=Object.freeze(Object.defineProperty({__proto__:null,ErrorBlock:a,Matrix:r,Playground:i,Screen:o,__namedExportsOrder:k,default:w},Symbol.toStringTag,{value:"Module"}));export{i as P,K as S,o as a};

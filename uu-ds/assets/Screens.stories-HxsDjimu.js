import{j as e}from"./iframe-6vwN6wb9.js";import{E as h,a as _,b as D,R as g,c as x}from"./Screens-Dq_t4rvF.js";import{N as I}from"./NavigationBar-BCULj685.js";import{R as u,C as n,P as p}from"./layout-nPJ89kCs.js";const t={src:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect x="36" y="44" width="56" height="44" rx="8" fill-opacity="0.12"/><rect x="48" y="32" width="32" height="12" rx="4" fill-opacity="0.08"/></svg>'),alt:"Hộp rỗng"},b={src:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx="64" cy="64" r="48" fill-opacity="0.12"/><path d="M44 66l14 14 28-30" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>'),alt:"Thanh toán thành công"},d=({nav:m,children:q})=>e.jsx(p,{height:720,background:"var(--background-surface)",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx(I,{title:m}),e.jsx("div",{style:{flex:"1 1 auto",minHeight:0},children:q})]})}),z={title:"Component/Chứa đựng/Screens",component:h,args:{title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây.",image:t,action:{label:"Tạo đơn"}},render:m=>e.jsx("div",{style:{width:390},children:e.jsx(h,{...m})})},i={name:"EmptySection"},a={name:"Ma trận khối nhúng",parameters:{controls:{disable:!0}},render:()=>e.jsxs(u,{align:"flex-start",children:[e.jsx(n,{label:"EmptySection · Action=true",children:e.jsx("div",{style:{width:390},children:e.jsx(h,{image:t,title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây.",action:{label:"Tạo đơn"}})})}),e.jsx(n,{label:"EmptySection · Action=false",children:e.jsx("div",{style:{width:390},children:e.jsx(h,{image:t,title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây."})})}),e.jsx(n,{label:"ErrorSection",children:e.jsx("div",{style:{width:390},children:e.jsx(_,{image:{...t,alt:"Kết nối bị gián đoạn"},title:"Chưa tải được danh sách",description:"Kiểm tra kết nối mạng rồi thử lại.",action:{label:"Thử lại"}})})}),e.jsx(n,{label:"Không truyền ảnh — ô tròn 128 vẫn còn",children:e.jsx("div",{style:{width:390},children:e.jsx(h,{title:"Chưa có thông báo",description:"Thông báo mới sẽ hiện ở đây."})})})]})},l={name:"ErrorSection",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{width:390},children:e.jsx(_,{image:{...t,alt:"Kết nối bị gián đoạn"},title:"Chưa tải được danh sách",description:"Kiểm tra kết nối mạng rồi thử lại.",action:{label:"Thử lại",onClick:()=>{}}})})},c={name:"EmptyScreen (template màn)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(u,{align:"flex-start",children:[e.jsx(n,{label:"Action=true",children:e.jsx(p,{height:720,background:"var(--background-surface)",children:e.jsx(x,{screenTitle:"Đơn hàng",onBack:()=>{},image:t,title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây.",action:{label:"Tạo đơn"}})})}),e.jsx(n,{label:"Action=false",children:e.jsx(p,{height:720,background:"var(--background-surface)",children:e.jsx(x,{screenTitle:"Thông báo",onBack:()=>{},image:{...t,alt:"Chuông im lặng"},title:"Chưa có thông báo",description:"Thông báo mới sẽ hiện ở đây."})})})]})},r={name:"Ma trận template màn",parameters:{controls:{disable:!0}},render:()=>e.jsxs(u,{align:"flex-start",children:[e.jsx(n,{label:"ResultScreen · có lối đi phụ",children:e.jsx(d,{nav:"Thanh toán",children:e.jsx(g,{image:b,title:"Thanh toán thành công",description:"Biên nhận đã gửi vào email của bạn.",primary:{label:"Xem đơn hàng"},secondary:{label:"Về trang chủ"}})})}),e.jsx(n,{label:"ResultScreen · chỉ nút chính",children:e.jsx(d,{nav:"Đặt phòng",children:e.jsx(g,{image:{...b,alt:"Đặt phòng thành công"},title:"Đặt phòng thành công",description:"Mã đặt phòng UU2048 đã gửi qua tin nhắn.",primary:{label:"Xem đặt phòng"}})})}),e.jsx(n,{label:"ErrorScreen",children:e.jsx(d,{nav:"Ví",children:e.jsx(D,{image:{...t,alt:"Kết nối bị gián đoạn"},title:"Hệ thống đang gián đoạn",description:"Ví tạm thời chưa dùng được. Bạn thử lại sau ít phút.",action:{label:"Thử lại"}})})})]})},o={name:"ResultScreen",parameters:{controls:{disable:!0}},render:()=>e.jsx(d,{nav:"Thanh toán",children:e.jsx(g,{image:b,title:"Thanh toán thành công",description:"Biên nhận đã gửi vào email của bạn.",primary:{label:"Xem đơn hàng",onClick:()=>{}},secondary:{label:"Về trang chủ",onClick:()=>{}}})})},s={name:"ErrorScreen",parameters:{controls:{disable:!0}},render:()=>e.jsx(d,{nav:"Ví",children:e.jsx(D,{image:{...t,alt:"Kết nối bị gián đoạn"},title:"Hệ thống đang gián đoạn",description:"Ví tạm thời chưa dùng được. Bạn thử lại sau ít phút.",action:{label:"Thử lại",onClick:()=>{}}})})};var S,y,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'EmptySection'
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var C,j,E;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(j=a.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var T,k,R;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(R=(k=l.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var w,f,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(f=c.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var A,K,M,V,P;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Ma trận template màn',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Cell label="ResultScreen · có lối đi phụ">
        <Screen390 nav="Thanh toán">
          <ResultScreen image={DONE} title="Thanh toán thành công" description="Biên nhận đã gửi vào email của bạn." primary={{
          label: 'Xem đơn hàng'
        }} secondary={{
          label: 'Về trang chủ'
        }} />
        </Screen390>
      </Cell>
      <Cell label="ResultScreen · chỉ nút chính">
        <Screen390 nav="Đặt phòng">
          <ResultScreen image={{
          ...DONE,
          alt: 'Đặt phòng thành công'
        }} title="Đặt phòng thành công" description="Mã đặt phòng UU2048 đã gửi qua tin nhắn." primary={{
          label: 'Xem đặt phòng'
        }} />
        </Screen390>
      </Cell>
      <Cell label="ErrorScreen">
        <Screen390 nav="Ví">
          <ErrorScreen image={{
          ...ART,
          alt: 'Kết nối bị gián đoạn'
        }} title="Hệ thống đang gián đoạn" description="Ví tạm thời chưa dùng được. Bạn thử lại sau ít phút." action={{
          label: 'Thử lại'
        }} />
        </Screen390>
      </Cell>
    </Row>
}`,...(M=(K=r.parameters)==null?void 0:K.docs)==null?void 0:M.source},description:{story:"Ba template màn: ResultScreen (có / không lối đi phụ) · ErrorScreen · EmptyScreen.",...(P=(V=r.parameters)==null?void 0:V.docs)==null?void 0:P.description}}};var F,O,H;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'ResultScreen',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen390 nav="Thanh toán">
      <ResultScreen image={DONE} title="Thanh toán thành công" description="Biên nhận đã gửi vào email của bạn." primary={{
      label: 'Xem đơn hàng',
      onClick: () => {}
    }} secondary={{
      label: 'Về trang chủ',
      onClick: () => {}
    }} />
    </Screen390>
}`,...(H=(O=o.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var N,U,X;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'ErrorScreen',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen390 nav="Ví">
      <ErrorScreen image={{
      ...ART,
      alt: 'Kết nối bị gián đoạn'
    }} title="Hệ thống đang gián đoạn" description="Ví tạm thời chưa dùng được. Bạn thử lại sau ít phút." action={{
      label: 'Thử lại',
      onClick: () => {}
    }} />
    </Screen390>
}`,...(X=(U=s.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const G=["Playground","Matrix","ErrorBlock","Screen","ScreenMatrix","Result","ErrorFull"],Y=Object.freeze(Object.defineProperty({__proto__:null,ErrorBlock:l,ErrorFull:s,Matrix:a,Playground:i,Result:o,Screen:c,ScreenMatrix:r,__namedExportsOrder:G,default:z},Symbol.toStringTag,{value:"Module"}));export{s as E,a as M,i as P,o as R,Y as S,r as a,c as b,l as c};

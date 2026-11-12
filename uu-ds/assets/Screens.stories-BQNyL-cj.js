import{j as e,F as N,R as x,b as n,i as m,P as p}from"./iframe-C5tnjhXs.js";import{E as h,a as U,b as X,R as b,c as S}from"./Screens-COKtpP3P.js";import{N as z}from"./NavigationBar-BAOVjGWJ.js";const t={src:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect x="36" y="44" width="56" height="44" rx="8" fill-opacity="0.12"/><rect x="48" y="32" width="32" height="12" rx="4" fill-opacity="0.08"/></svg>'),alt:"Hộp rỗng"},u={src:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx="64" cy="64" r="48" fill-opacity="0.12"/><path d="M44 66l14 14 28-30" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>'),alt:"Thanh toán thành công"},d=({nav:g,children:D,inCell:q})=>e.jsx(p,{height:720,background:"var(--background-surface)",inCell:q,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx(z,{title:g}),e.jsx("div",{style:{flex:"1 1 auto",minHeight:0},children:D})]})}),G={title:"Component/Chứa đựng/Screens",component:h,args:{title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây.",image:t,action:{label:"Tạo đơn"}},render:g=>e.jsx("div",{style:{width:390,maxWidth:N},children:e.jsx(h,{...g})})},i={name:"EmptySection"},a={name:"Ma trận khối nhúng",parameters:{controls:{disable:!0}},render:()=>e.jsxs(x,{align:"flex-start",children:[e.jsx(n,{label:"EmptySection · Action=true",children:e.jsx("div",{style:{width:390,maxWidth:m},children:e.jsx(h,{image:t,title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây.",action:{label:"Tạo đơn"}})})}),e.jsx(n,{label:"EmptySection · Action=false",children:e.jsx("div",{style:{width:390,maxWidth:m},children:e.jsx(h,{image:t,title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây."})})}),e.jsx(n,{label:"ErrorSection",children:e.jsx("div",{style:{width:390,maxWidth:m},children:e.jsx(U,{image:{...t,alt:"Kết nối bị gián đoạn"},title:"Chưa tải được danh sách",description:"Kiểm tra kết nối mạng rồi thử lại.",action:{label:"Thử lại"}})})}),e.jsx(n,{label:"Không truyền ảnh — ô tròn 128 vẫn còn",children:e.jsx("div",{style:{width:390,maxWidth:m},children:e.jsx(h,{title:"Chưa có thông báo",description:"Thông báo mới sẽ hiện ở đây."})})})]})},l={name:"ErrorSection",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{width:390,maxWidth:N},children:e.jsx(U,{image:{...t,alt:"Kết nối bị gián đoạn"},title:"Chưa tải được danh sách",description:"Kiểm tra kết nối mạng rồi thử lại.",action:{label:"Thử lại",onClick:()=>{}}})})},c={name:"EmptyScreen (template màn)",parameters:{controls:{disable:!0}},render:()=>e.jsxs(x,{align:"flex-start",children:[e.jsx(n,{label:"Action=true",children:e.jsx(p,{height:720,background:"var(--background-surface)",inCell:!0,children:e.jsx(S,{screenTitle:"Đơn hàng",onBack:()=>{},image:t,title:"Chưa có đơn hàng",description:"Đơn bạn tạo sẽ hiện ở đây.",action:{label:"Tạo đơn"}})})}),e.jsx(n,{label:"Action=false",children:e.jsx(p,{height:720,background:"var(--background-surface)",inCell:!0,children:e.jsx(S,{screenTitle:"Thông báo",onBack:()=>{},image:{...t,alt:"Chuông im lặng"},title:"Chưa có thông báo",description:"Thông báo mới sẽ hiện ở đây."})})})]})},r={name:"Ma trận template màn",parameters:{controls:{disable:!0}},render:()=>e.jsxs(x,{align:"flex-start",children:[e.jsx(n,{label:"ResultScreen · có lối đi phụ",children:e.jsx(d,{nav:"Thanh toán",inCell:!0,children:e.jsx(b,{image:u,title:"Thanh toán thành công",description:"Biên nhận đã gửi vào email của bạn.",primary:{label:"Xem đơn hàng"},secondary:{label:"Về trang chủ"}})})}),e.jsx(n,{label:"ResultScreen · chỉ nút chính",children:e.jsx(d,{nav:"Đặt phòng",inCell:!0,children:e.jsx(b,{image:{...u,alt:"Đặt phòng thành công"},title:"Đặt phòng thành công",description:"Mã đặt phòng UU2048 đã gửi qua tin nhắn.",primary:{label:"Xem đặt phòng"}})})}),e.jsx(n,{label:"ErrorScreen",children:e.jsx(d,{nav:"Ví",inCell:!0,children:e.jsx(X,{image:{...t,alt:"Kết nối bị gián đoạn"},title:"Hệ thống đang gián đoạn",description:"Ví tạm thời chưa dùng được. Bạn thử lại sau ít phút.",action:{label:"Thử lại"}})})})]})},o={name:"ResultScreen",parameters:{controls:{disable:!0}},render:()=>e.jsx(d,{nav:"Thanh toán",children:e.jsx(b,{image:u,title:"Thanh toán thành công",description:"Biên nhận đã gửi vào email của bạn.",primary:{label:"Xem đơn hàng",onClick:()=>{}},secondary:{label:"Về trang chủ",onClick:()=>{}}})})},s={name:"ErrorScreen",parameters:{controls:{disable:!0}},render:()=>e.jsx(d,{nav:"Ví",children:e.jsx(X,{image:{...t,alt:"Kết nối bị gián đoạn"},title:"Hệ thống đang gián đoạn",description:"Ví tạm thời chưa dùng được. Bạn thử lại sau ít phút.",action:{label:"Thử lại",onClick:()=>{}}})})};var y,C,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'EmptySection'
}`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var T,E,j;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Ma trận khối nhúng',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Cell label="EmptySection · Action=true">
        <div style={{
        width: 390,
        maxWidth: FIT_CELL
      }}><EmptySection image={ART} title="Chưa có đơn hàng" description="Đơn bạn tạo sẽ hiện ở đây." action={{
          label: 'Tạo đơn'
        }} /></div>
      </Cell>
      <Cell label="EmptySection · Action=false">
        <div style={{
        width: 390,
        maxWidth: FIT_CELL
      }}><EmptySection image={ART} title="Chưa có đơn hàng" description="Đơn bạn tạo sẽ hiện ở đây." /></div>
      </Cell>
      <Cell label="ErrorSection">
        <div style={{
        width: 390,
        maxWidth: FIT_CELL
      }}><ErrorSection image={{
          ...ART,
          alt: 'Kết nối bị gián đoạn'
        }} title="Chưa tải được danh sách" description="Kiểm tra kết nối mạng rồi thử lại." action={{
          label: 'Thử lại'
        }} /></div>
      </Cell>
      <Cell label="Không truyền ảnh — ô tròn 128 vẫn còn">
        <div style={{
        width: 390,
        maxWidth: FIT_CELL
      }}><EmptySection title="Chưa có thông báo" description="Thông báo mới sẽ hiện ở đây." /></div>
      </Cell>
    </Row>
}`,...(j=(E=a.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var k,R,w;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'ErrorSection',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 390,
    maxWidth: FIT
  }}>
      <ErrorSection image={{
      ...ART,
      alt: 'Kết nối bị gián đoạn'
    }} title="Chưa tải được danh sách" description="Kiểm tra kết nối mạng rồi thử lại." action={{
      label: 'Thử lại',
      onClick: () => {}
    }} />
    </div>
}`,...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var f,B,A;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'EmptyScreen (template màn)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Cell label="Action=true">
        <PhoneFrame height={720} background="var(--background-surface)" inCell>
          <EmptyScreen screenTitle="Đơn hàng" onBack={() => {}} image={ART} title="Chưa có đơn hàng" description="Đơn bạn tạo sẽ hiện ở đây." action={{
          label: 'Tạo đơn'
        }} />
        </PhoneFrame>
      </Cell>
      <Cell label="Action=false">
        <PhoneFrame height={720} background="var(--background-surface)" inCell>
          <EmptyScreen screenTitle="Thông báo" onBack={() => {}} image={{
          ...ART,
          alt: 'Chuông im lặng'
        }} title="Chưa có thông báo" description="Thông báo mới sẽ hiện ở đây." />
        </PhoneFrame>
      </Cell>
    </Row>
}`,...(A=(B=c.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var F,K,M,V,W;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Ma trận template màn',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Cell label="ResultScreen · có lối đi phụ">
        <Screen390 nav="Thanh toán" inCell>
          <ResultScreen image={DONE} title="Thanh toán thành công" description="Biên nhận đã gửi vào email của bạn." primary={{
          label: 'Xem đơn hàng'
        }} secondary={{
          label: 'Về trang chủ'
        }} />
        </Screen390>
      </Cell>
      <Cell label="ResultScreen · chỉ nút chính">
        <Screen390 nav="Đặt phòng" inCell>
          <ResultScreen image={{
          ...DONE,
          alt: 'Đặt phòng thành công'
        }} title="Đặt phòng thành công" description="Mã đặt phòng UU2048 đã gửi qua tin nhắn." primary={{
          label: 'Xem đặt phòng'
        }} />
        </Screen390>
      </Cell>
      <Cell label="ErrorScreen">
        <Screen390 nav="Ví" inCell>
          <ErrorScreen image={{
          ...ART,
          alt: 'Kết nối bị gián đoạn'
        }} title="Hệ thống đang gián đoạn" description="Ví tạm thời chưa dùng được. Bạn thử lại sau ít phút." action={{
          label: 'Thử lại'
        }} />
        </Screen390>
      </Cell>
    </Row>
}`,...(M=(K=r.parameters)==null?void 0:K.docs)==null?void 0:M.source},description:{story:"Ba template màn: ResultScreen (có / không lối đi phụ) · ErrorScreen · EmptyScreen.",...(W=(V=r.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var _,L,P;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(L=o.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var I,O,H;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(O=s.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};const J=["Playground","Matrix","ErrorBlock","Screen","ScreenMatrix","Result","ErrorFull"],$=Object.freeze(Object.defineProperty({__proto__:null,ErrorBlock:l,ErrorFull:s,Matrix:a,Playground:i,Result:o,Screen:c,ScreenMatrix:r,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{s as E,a as M,i as P,o as R,$ as S,r as a,c as b,l as c};

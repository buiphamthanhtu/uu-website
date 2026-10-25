import{r as d,j as e,T as P}from"./iframe-6vwN6wb9.js";import{C as c}from"./PushNotification-CPD3vDle.js";import{P as T,S as D,C as G}from"./layout-nPJ89kCs.js";const l={src:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" fill-opacity="0.08"/><rect x="14" y="14" width="20" height="20" rx="4" fill-opacity="0.16"/></svg>'),alt:"Cửa hàng UU"},I="Đơn hàng #UU2048 gồm 3 sản phẩm đã được giao cho đơn vị vận chuyển. Dự kiến giao trong hôm nay, trước 18:00. Bạn có thể theo dõi hành trình trong mục Đơn hàng.",$={title:"Component/Giao tiếp/CardPushNotification",component:c,args:{title:"Đơn hàng đang được giao",content:"Đơn #UU2048 sẽ đến trong hôm nay.",image:l,duration:0,placement:"top"},argTypes:{onClick:{action:"click"},onDismiss:{action:"dismiss"},placement:{control:"radio",options:[void 0,"top","top-end"]}},render:n=>e.jsx(T,{height:240,children:e.jsx(c,{...n})})},s={},i={name:"Image × độ dài chữ",parameters:{controls:{disable:!0}},render:()=>e.jsx(D,{children:[!0,!1].map(n=>[!1,!0].map(t=>e.jsx(G,{label:`Image=${n?"True":"False"}${t?" · chữ dài (cắt ở 2 dòng)":""}`,children:e.jsx("div",{style:{width:366},children:e.jsx(c,{image:n?l:void 0,title:t?"Đơn hàng #UU2048 đã rời kho và đang trên đường đến địa chỉ nhận hàng của bạn":"Đơn hàng đang được giao",content:t?I:"Đơn #UU2048 sẽ đến trong hôm nay.",duration:0})})},`${n}-${t}`)))})},a={name:"Trên màn hình (tự ẩn 5 giây)",parameters:{controls:{disable:!0}},render:()=>{const[n,t]=d.useState(1),[g,r]=d.useState(!0);return e.jsxs(T,{height:720,children:[e.jsx("div",{style:{padding:"var(--size-24) var(--gap-4) 0"},children:e.jsx(P,{onClick:()=>{t(m=>m+1),r(!0)},children:"Gửi thông báo"})}),g&&e.jsx(c,{placement:"top",image:l,title:"Bạn có quà mới",content:`Mã giảm 50.000 ₫ (lần ${n}) đang chờ trong Ví ưu đãi.`,onClick:()=>r(!1),onDismiss:()=>r(!1)},n)]})}},o={name:"Desktop (góc trên phải)",parameters:{controls:{disable:!0}},render:()=>{const[n,t]=d.useState(1),[g,r]=d.useState(!0);return e.jsxs("div",{style:{position:"relative",width:960,height:400,overflow:"hidden",transform:"translateZ(0)",background:"var(--background-muted)",border:"1px solid var(--border-muted)",borderRadius:"var(--radius-lg)"},children:[e.jsx("div",{style:{padding:"var(--gap-6)"},children:e.jsx(P,{onClick:()=>{t(m=>m+1),r(!0)},children:"Gửi thông báo"})}),g&&e.jsx(c,{placement:"top-end",image:l,title:"Đơn hàng đang được giao",content:`Đơn #UU20${48+n} sẽ đến trong hôm nay.`,onClick:()=>r(!1),onDismiss:()=>r(!1)},n)]})}};var h,p,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,x,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Image × độ dài chữ',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {[true, false].map(img => [false, true].map(long => <Cell key={\`\${img}-\${long}\`} label={\`Image=\${img ? 'True' : 'False'}\${long ? ' · chữ dài (cắt ở 2 dòng)' : ''}\`}>
          <div style={{
        width: 366
      }}>
            <CardPushNotification image={img ? IMG : undefined} title={long ? 'Đơn hàng #UU2048 đã rời kho và đang trên đường đến địa chỉ nhận hàng của bạn' : 'Đơn hàng đang được giao'} content={long ? LONG : 'Đơn #UU2048 sẽ đến trong hôm nay.'} duration={0} />
          </div>
        </Cell>))}
    </Stack>
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,k,b,C,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Trên màn hình (tự ẩn 5 giây)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [n, setN] = useState(1);
    const [open, setOpen] = useState(true);
    return <PhoneFrame height={720}>
        <div style={{
        padding: 'var(--size-24) var(--gap-4) 0'
      }}>
          <TextButtonAccent onClick={() => {
          setN(x => x + 1);
          setOpen(true);
        }}>Gửi thông báo</TextButtonAccent>
        </div>
        {open && (/* Một thẻ mỗi lúc: đổi \`key\` để thẻ mới thay thẻ cũ và đếm lại từ đầu. */
      <CardPushNotification key={n} placement="top" image={IMG} title="Bạn có quà mới" content={\`Mã giảm 50.000 ₫ (lần \${n}) đang chờ trong Ví ưu đãi.\`} onClick={() => setOpen(false)} onDismiss={() => setOpen(false)} />)}
      </PhoneFrame>;
  }
}`,...(b=(k=a.parameters)==null?void 0:k.docs)==null?void 0:b.source},description:{story:'Bấm "Gửi thông báo": thẻ hiện ở đỉnh, tự ẩn sau 5 giây (dừng khi hover / focus), vuốt lên hoặc Esc để đóng.',...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.description}}};var U,j,O,w,N;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Desktop (góc trên phải)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [n, setN] = useState(1);
    const [open, setOpen] = useState(true);
    return <div style={{
      position: 'relative',
      width: 960,
      height: 400,
      overflow: 'hidden',
      transform: 'translateZ(0)',
      background: 'var(--background-muted)',
      border: '1px solid var(--border-muted)',
      borderRadius: 'var(--radius-lg)'
    }}>
        <div style={{
        padding: 'var(--gap-6)'
      }}>
          <TextButtonAccent onClick={() => {
          setN(x => x + 1);
          setOpen(true);
        }}>Gửi thông báo</TextButtonAccent>
        </div>
        {open && <CardPushNotification key={n} placement="top-end" image={IMG} title="Đơn hàng đang được giao" content={\`Đơn #UU20\${48 + n} sẽ đến trong hôm nay.\`} onClick={() => setOpen(false)} onDismiss={() => setOpen(false)} />}
      </div>;
  }
}`,...(O=(j=o.parameters)==null?void 0:j.docs)==null?void 0:O.source},description:{story:'Desktop (`placement="top-end"`): góc trên phải, cách mép 16, rộng 360. Tự ẩn 5 giây, dừng khi hover, rời chuột đếm lại.',...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.description}}};const M=["Playground","Matrix","InScreen","Desktop"],F=Object.freeze(Object.defineProperty({__proto__:null,Desktop:o,InScreen:a,Matrix:i,Playground:s,__namedExportsOrder:M,default:$},Symbol.toStringTag,{value:"Module"}));export{o as D,a as I,i as M,s as P,F as S};

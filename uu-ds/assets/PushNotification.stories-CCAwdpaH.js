import{r as g,j as n,T as U}from"./iframe-C2B6W1mr.js";import{C as o}from"./PushNotification-D9xcnlSM.js";import{P as j,S as I,C as P}from"./layout-BwDKuDyv.js";const c={src:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" fill-opacity="0.08"/><rect x="14" y="14" width="20" height="20" rx="4" fill-opacity="0.16"/></svg>'),alt:"Cửa hàng UU"},O="Đơn hàng #UU2048 gồm 3 sản phẩm đã được giao cho đơn vị vận chuyển. Dự kiến giao trong hôm nay, trước 18:00. Bạn có thể theo dõi hành trình trong mục Đơn hàng.",C=({children:e})=>n.jsx("div",{style:{position:"absolute",top:"var(--gap-2)",left:"var(--gap-3)",right:"var(--gap-3)",zIndex:100},children:e}),T={title:"Component/Giao tiếp/CardPushNotification",component:o,args:{title:"Đơn hàng đang được giao",content:"Đơn #UU2048 sẽ đến trong hôm nay.",image:c,duration:0},argTypes:{onClick:{action:"click"},onDismiss:{action:"dismiss"}},render:e=>n.jsx(j,{height:240,children:n.jsx(C,{children:n.jsx(o,{...e})})})},r={},s={name:"Image × độ dài chữ",parameters:{controls:{disable:!0}},render:()=>n.jsx(I,{children:[!0,!1].map(e=>[!1,!0].map(t=>n.jsx(P,{label:`Image=${e?"True":"False"}${t?" · chữ dài (cắt ở 2 dòng)":""}`,children:n.jsx("div",{style:{width:366},children:n.jsx(o,{image:e?c:void 0,title:t?"Đơn hàng #UU2048 đã rời kho và đang trên đường đến địa chỉ nhận hàng của bạn":"Đơn hàng đang được giao",content:t?O:"Đơn #UU2048 sẽ đến trong hôm nay.",duration:0})})},`${e}-${t}`)))})},a={name:"Trên màn hình (tự ẩn 5 giây)",parameters:{controls:{disable:!0}},render:()=>{const[e,t]=g.useState(1),[k,i]=g.useState(!0);return n.jsxs(j,{height:720,children:[n.jsx("div",{style:{padding:"var(--size-24) var(--gap-4) 0"},children:n.jsx(U,{onClick:()=>{t(b=>b+1),i(!0)},children:"Gửi thông báo"})}),k&&n.jsx(C,{children:n.jsx(o,{image:c,title:"Bạn có quà mới",content:`Mã giảm 50.000 ₫ (lần ${e}) đang chờ trong Ví ưu đãi.`,onClick:()=>i(!1),onDismiss:()=>i(!1)},e)})]})}};var l,h,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,v,y,f,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        {open && <Slot>
            {/* Một thẻ mỗi lúc: đổi \`key\` để thẻ mới thay thẻ cũ và đếm lại từ đầu. */}
            <CardPushNotification key={n} image={IMG} title="Bạn có quà mới" content={\`Mã giảm 50.000 ₫ (lần \${n}) đang chờ trong Ví ưu đãi.\`} onClick={() => setOpen(false)} onDismiss={() => setOpen(false)} />
          </Slot>}
      </PhoneFrame>;
  }
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:'Bấm "Gửi thông báo": thẻ hiện ở đỉnh, tự ẩn sau 5 giây (dừng khi hover / focus), vuốt lên hoặc Esc để đóng.',...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};const $=["Playground","Matrix","InScreen"],N=Object.freeze(Object.defineProperty({__proto__:null,InScreen:a,Matrix:s,Playground:r,__namedExportsOrder:$,default:T},Symbol.toStringTag,{value:"Module"}));export{a as I,r as P,N as S};

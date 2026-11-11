import{j as e,a,R as k,C as E}from"./iframe-DdYtqKZl.js";import{T as t}from"./Tooltip-Bfl1AGmG.js";const L=["top","bottom","left","right"],N={top:"Top",bottom:"Bottom",left:"Left",right:"Right"},l=({children:o})=>e.jsx("div",{style:{padding:"var(--gap-14) var(--size-36)",display:"flex",justifyContent:"center"},children:o}),M={title:"Component/Giao tiếp/Tooltip",component:t,args:{text:"Sao chép mã giới thiệu",placement:"top",open:void 0,children:e.jsx("span",{})},argTypes:{placement:{control:"inline-radio",options:L},open:{control:"boolean"},children:{control:!1},relation:{control:!1}},render:o=>e.jsx(l,{children:e.jsx(t,{...o,children:e.jsx(a,{type:"outline",size:"base",icon:"texture",label:"Sao chép"})})})},r={},i={name:"4 variant",parameters:{controls:{disable:!0},scrollX:!0},render:()=>e.jsx(k,{style:{flexWrap:"wrap",gap:"var(--gap-4)"},children:L.map(o=>e.jsx(E,{label:`Placement=${N[o]}`,children:e.jsx(l,{children:e.jsx(t,{text:"Sao chép",placement:o,open:!0,children:e.jsx(a,{type:"outline",size:"base",icon:"texture",label:"Sao chép"})})})},o))})},n={name:"Chữ dài",parameters:{controls:{disable:!0}},render:()=>e.jsx(l,{children:e.jsx(t,{text:"Mã giới thiệu dùng được một lần cho mỗi tài khoản mới đăng ký",placement:"bottom",open:!0,children:e.jsx(a,{type:"ghost",size:"base",icon:"circle-info",label:"Về mã giới thiệu"})})})},s={name:"Thời gian hiện",parameters:{controls:{disable:!0},scrollX:!0},render:()=>e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--gap-2)"},children:[e.jsx(t,{text:"Sao chép đường dẫn",children:e.jsx(a,{type:"ghost",size:"base",icon:"texture",label:"Sao chép"})}),e.jsx(t,{text:"Gửi cho bạn bè",children:e.jsx(a,{type:"ghost",size:"base",icon:"texture",label:"Chia sẻ"})}),e.jsx(t,{text:"Tải hoá đơn về máy",children:e.jsx(a,{type:"ghost",size:"base",icon:"texture",label:"Tải xuống"})}),e.jsx(t,{text:"Xoá khỏi danh sách",children:e.jsx(a,{type:"ghost",size:"base",icon:"texture",label:"Xoá"})})]})})};var c,p,h,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:"Rê chuột giữ yên trên nút 500 ms, hoặc Tab tới nút, để hiện tooltip. Bấm Esc để ẩn.",...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};var u,x,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '4 variant',
  parameters: {
    controls: {
      disable: true
    },
    scrollX: true
  },
  render: () => <Row style={{
    flexWrap: 'wrap',
    gap: 'var(--gap-4)'
  }}>
      {PLACEMENTS.map(p => <Cell key={p} label={\`Placement=\${LABEL[p]}\`}>
          <Space>
            <Tooltip text="Sao chép" placement={p} open>
              <IconButtonNeutral type="outline" size="base" icon="texture" label="Sao chép" />
            </Tooltip>
          </Space>
        </Cell>)}
    </Row>
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,y,T,j,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Chữ dài',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Space>
      <Tooltip text="Mã giới thiệu dùng được một lần cho mỗi tài khoản mới đăng ký" placement="bottom" open>
        <IconButtonNeutral type="ghost" size="base" icon="circle-info" label="Về mã giới thiệu" />
      </Tooltip>
    </Space>
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source},description:{story:"Chữ dài xuống dòng khi chạm max-width 240.",...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.description}}};var f,v,z,C,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Thời gian hiện',
  parameters: {
    controls: {
      disable: true
    },
    scrollX: true
  },
  render: () => <Space>
      <div style={{
      display: 'flex',
      gap: 'var(--gap-2)'
    }}>
        <Tooltip text="Sao chép đường dẫn"><IconButtonNeutral type="ghost" size="base" icon="texture" label="Sao chép" /></Tooltip>
        <Tooltip text="Gửi cho bạn bè"><IconButtonNeutral type="ghost" size="base" icon="texture" label="Chia sẻ" /></Tooltip>
        <Tooltip text="Tải hoá đơn về máy"><IconButtonNeutral type="ghost" size="base" icon="texture" label="Tải xuống" /></Tooltip>
        <Tooltip text="Xoá khỏi danh sách"><IconButtonNeutral type="ghost" size="base" icon="texture" label="Xoá" /></Tooltip>
      </div>
    </Space>
}`,...(z=(v=s.parameters)==null?void 0:v.docs)==null?void 0:z.source},description:{story:`Hàng nút công cụ: rê chuột vào nút đầu, chờ 500 ms; rê tiếp sang nút bên cạnh thì tooltip mới hiện ngay
(cửa sổ warm 300 ms). Tab qua từng nút: tooltip hiện ngay khi nút nhận focus.`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.description}}};const P=["Playground","Matrix","LongText","Timing"],I=Object.freeze(Object.defineProperty({__proto__:null,LongText:n,Matrix:i,Playground:r,Timing:s,__namedExportsOrder:P,default:M},Symbol.toStringTag,{value:"Module"}));export{n as L,i as M,r as P,I as S,s as T};

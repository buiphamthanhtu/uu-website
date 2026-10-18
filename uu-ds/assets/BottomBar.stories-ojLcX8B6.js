import{j as a,r as G}from"./iframe-gn_pzB68.js";import{B as t}from"./BottomBar-BE7U8cSD.js";import{S as p,C as u}from"./layout-whGn3D85.js";const r=[{value:"home",label:"Trang chủ",icon:"house"},{value:"gift",label:"Ưu đãi",icon:"gift"},{value:"scan",label:"Quét mã",icon:"qrcode"},{value:"bell",label:"Thông báo",icon:"bell",badge:9,badgeLabel:"9 thông báo mới"},{value:"user",label:"Tài khoản",icon:"user"}],i=({children:e,width:n=390})=>a.jsx("div",{style:{width:n,padding:"var(--gap-3)",boxSizing:"border-box",background:"var(--background-subtle)",borderRadius:"var(--radius-lg)"},children:e}),H={title:"Component/Điều hướng/BottomBar",component:t,args:{items:r,value:"home",compact:!1,onChange:()=>{},"aria-label":"Điều hướng chính"},argTypes:{value:{control:"inline-radio",options:r.map(e=>e.value)},items:{control:!1}},render:e=>{const[n,d]=G.useState(e.value);return a.jsx(i,{children:a.jsx(t,{...e,value:n,onChange:d})})}},m={},h={name:"10 variant",parameters:{controls:{disable:!0}},render:()=>a.jsx(p,{children:[!1,!0].map(e=>r.map((n,d)=>a.jsx(u,{label:`Active=${d+1}, Compact=${e?"True":"False"}`,children:a.jsx(i,{children:a.jsx(t,{items:r,value:n.value,compact:e,onChange:()=>{},"aria-label":`Điều hướng chính, mẫu ${d+1}${e?" thu gọn":""}`})})},`${e}-${n.value}`)))})},c={name:"Số mục 2–5",parameters:{controls:{disable:!0}},render:()=>a.jsx(p,{children:[2,3,4,5].map(e=>a.jsx(u,{label:`${e} mục`,children:a.jsx(i,{children:a.jsx(t,{items:r.slice(0,e),value:"home",onChange:()=>{},"aria-label":`Điều hướng chính, ${e} mục`})})},e))})},o={name:"Badge",parameters:{controls:{disable:!0}},render:()=>a.jsxs(p,{children:[a.jsx(u,{label:"Thông báo chưa chọn — có badge",children:a.jsx(i,{children:a.jsx(t,{items:r,value:"home",onChange:()=>{},"aria-label":"Điều hướng chính, có badge"})})}),a.jsx(u,{label:"Thông báo đang chọn — badge ẩn",children:a.jsx(i,{children:a.jsx(t,{items:r,value:"bell",onChange:()=>{},"aria-label":"Điều hướng chính, badge ẩn"})})})]})},Q={icon:"qrcode",label:"Quét mã",onClick:()=>{}},R=r.filter(e=>e.value!=="scan"),s={name:"Action — nút hành động riêng",args:{items:R,action:Q}},l={name:"Action: Type × Compact",parameters:{controls:{disable:!0}},render:()=>a.jsx(p,{children:["emphasized","subtle"].map(e=>[!1,!0].map(n=>a.jsx(u,{label:`Type=${e==="emphasized"?"Emphasized":"Subtle"}, Compact=${n?"True":"False"}`,children:a.jsx(i,{children:a.jsx(t,{items:R,value:"home",compact:n,action:{...Q,type:e},onChange:()=>{},"aria-label":`Điều hướng chính, nút ${e}${n?" thu gọn":""}`})})},`${e}-${n}`)))})};var g,b,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(b=m.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var C,v,x;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:"{\n  name: '10 variant',\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: () => <Stack>\n      {[false, true].map(compact => ITEMS.map((it, i) => <Cell key={`${compact}-${it.value}`} label={`Active=${i + 1}, Compact=${compact ? 'True' : 'False'}`}>\n            <Screen><BottomBar items={ITEMS} value={it.value} compact={compact} onChange={() => {}} aria-label={`Điều hướng chính, mẫu ${i + 1}${compact ? ' thu gọn' : ''}`} /></Screen>\n          </Cell>))}\n    </Stack>\n}",...(x=(v=h.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var T,$,j,y,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Số mục 2–5',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {[2, 3, 4, 5].map(n => <Cell key={n} label={\`\${n} mục\`}>
          <Screen><BottomBar items={ITEMS.slice(0, n)} value="home" onChange={() => {}} aria-label={\`Điều hướng chính, \${n} mục\`} /></Screen>
        </Cell>)}
    </Stack>
}`,...(j=($=c.parameters)==null?void 0:$.docs)==null?void 0:j.source},description:{story:"Mục 1–2 luôn có, bật thêm mục 3–5: thanh có 2 đến 5 mục. `Compact=False` chia đều bề ngang.",...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.description}}};var A,k,I,f,E;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Badge',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      <Cell label="Thông báo chưa chọn — có badge">
        <Screen><BottomBar items={ITEMS} value="home" onChange={() => {}} aria-label="Điều hướng chính, có badge" /></Screen>
      </Cell>
      <Cell label="Thông báo đang chọn — badge ẩn">
        <Screen><BottomBar items={ITEMS} value="bell" onChange={() => {}} aria-label="Điều hướng chính, badge ẩn" /></Screen>
      </Cell>
    </Stack>
}`,...(I=(k=o.parameters)==null?void 0:k.docs)==null?void 0:I.source},description:{story:"Badge chỉ hiện ở mục KHÔNG được chọn; chọn mục đó thì badge ẩn.",...(E=(f=o.parameters)==null?void 0:f.docs)==null?void 0:E.description}}};var M,z,_,F,N;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Action — nút hành động riêng',
  args: {
    items: NAV_ITEMS,
    action: ACTION
  }
}`,...(_=(z=s.parameters)==null?void 0:z.docs)==null?void 0:_.source},description:{story:"`Action=true` — nút hành động riêng `base/FooterItemSpecial`, rời bên phải vỏ, cách 8.",...(N=(F=s.parameters)==null?void 0:F.docs)==null?void 0:N.description}}};var O,P,V,W,q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Action: Type × Compact',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      {(['emphasized', 'subtle'] as const).map(type => [false, true].map(compact => <Cell key={\`\${type}-\${compact}\`} label={\`Type=\${type === 'emphasized' ? 'Emphasized' : 'Subtle'}, Compact=\${compact ? 'True' : 'False'}\`}>
          <Screen><BottomBar items={NAV_ITEMS} value="home" compact={compact} action={{
          ...ACTION,
          type
        }} onChange={() => {}} aria-label={\`Điều hướng chính, nút \${type}\${compact ? ' thu gọn' : ''}\`} /></Screen>
        </Cell>))}
    </Stack>
}`,...(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:"4 variant của `base/FooterItemSpecial`: `Type` (Subtle · Emphasized) × `Compact`. Compact có nút thì tối đa 4 mục.",...(q=(W=l.parameters)==null?void 0:W.docs)==null?void 0:q.description}}};const K=["Playground","Matrix","ItemCount","WithBadge","WithAction","ActionMatrix"],J=Object.freeze(Object.defineProperty({__proto__:null,ActionMatrix:l,ItemCount:c,Matrix:h,Playground:m,WithAction:s,WithBadge:o,__namedExportsOrder:K,default:H},Symbol.toStringTag,{value:"Module"}));export{l as A,m as P,J as S};

import{j as a,r as H}from"./iframe-B5z-FeuG.js";import{B as t}from"./BottomBar-DaOrM9S0.js";import{S as d,C as u}from"./layout-CpZEwRt9.js";const r=[{value:"home",label:"Trang chủ",icon:"texture"},{value:"gift",label:"Ưu đãi",icon:"texture"},{value:"scan",label:"Quét mã",icon:"texture"},{value:"bell",label:"Thông báo",icon:"texture",badge:9,badgeLabel:"9 thông báo mới"},{value:"user",label:"Tài khoản",icon:"texture"}],i=({children:e,width:n=390})=>a.jsx("div",{style:{width:n,padding:"var(--gap-3)",boxSizing:"border-box",background:"var(--background-subtle)",borderRadius:"var(--radius-lg)"},children:e}),K={title:"Component/Điều hướng/BottomBar",component:t,args:{items:r,value:"home",compact:!1,onChange:()=>{},"aria-label":"Điều hướng chính"},argTypes:{value:{control:"inline-radio",options:r.map(e=>e.value)},items:{control:!1}},render:e=>{const[n,p]=H.useState(e.value);return a.jsx(i,{children:a.jsx(t,{...e,value:n,onChange:p})})}},m={},h={name:"10 variant",parameters:{controls:{disable:!0}},render:()=>a.jsx(d,{children:[!1,!0].map(e=>r.map((n,p)=>a.jsx(u,{label:`Active=${p+1}, Compact=${e?"True":"False"}`,children:a.jsx(i,{children:a.jsx(t,{items:r,value:n.value,compact:e,onChange:()=>{},"aria-label":`Điều hướng chính, mẫu ${p+1}${e?" thu gọn":""}`})})},`${e}-${n.value}`)))})},c={name:"Số mục 2–5",parameters:{controls:{disable:!0}},render:()=>a.jsx(d,{children:[2,3,4,5].map(e=>a.jsx(u,{label:`${e} mục`,children:a.jsx(i,{children:a.jsx(t,{items:r.slice(0,e),value:"home",onChange:()=>{},"aria-label":`Điều hướng chính, ${e} mục`})})},e))})},o={name:"Badge",parameters:{controls:{disable:!0}},render:()=>a.jsxs(d,{children:[a.jsx(u,{label:"Thông báo chưa chọn — có badge",children:a.jsx(i,{children:a.jsx(t,{items:r,value:"home",onChange:()=>{},"aria-label":"Điều hướng chính, có badge"})})}),a.jsx(u,{label:"Thông báo đang chọn — badge ẩn",children:a.jsx(i,{children:a.jsx(t,{items:r,value:"bell",onChange:()=>{},"aria-label":"Điều hướng chính, badge ẩn"})})})]})},R={icon:"texture",label:"Quét mã",onClick:()=>{}},G=r.filter(e=>e.value!=="scan"),s={name:"Action — nút hành động riêng",args:{items:G,action:R}},l={name:"Action: Type × Compact",parameters:{controls:{disable:!0}},render:()=>a.jsx(d,{children:["emphasized","subtle"].map(e=>[!1,!0].map(n=>a.jsx(u,{label:`Type=${e==="emphasized"?"Emphasized":"Subtle"}, Compact=${n?"True":"False"}`,children:a.jsx(i,{children:a.jsx(t,{items:G,value:"home",compact:n,action:{...R,type:e},onChange:()=>{},"aria-label":`Điều hướng chính, nút ${e}${n?" thu gọn":""}`})})},`${e}-${n}`)))})};var g,b,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(b=m.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var C,x,v;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:"{\n  name: '10 variant',\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: () => <Stack>\n      {[false, true].map(compact => ITEMS.map((it, i) => <Cell key={`${compact}-${it.value}`} label={`Active=${i + 1}, Compact=${compact ? 'True' : 'False'}`}>\n            <Screen><BottomBar items={ITEMS} value={it.value} compact={compact} onChange={() => {}} aria-label={`Điều hướng chính, mẫu ${i + 1}${compact ? ' thu gọn' : ''}`} /></Screen>\n          </Cell>))}\n    </Stack>\n}",...(v=(x=h.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var T,$,j,y,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(j=($=c.parameters)==null?void 0:$.docs)==null?void 0:j.source},description:{story:"Mục 1–2 luôn có, bật thêm mục 3–5: thanh có 2 đến 5 mục. `Compact=False` chia đều bề ngang.",...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.description}}};var A,I,k,M,E;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(I=o.parameters)==null?void 0:I.docs)==null?void 0:k.source},description:{story:"Badge chỉ hiện ở mục KHÔNG được chọn; chọn mục đó thì badge ẩn.",...(E=(M=o.parameters)==null?void 0:M.docs)==null?void 0:E.description}}};var f,z,_,F,N;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Action — nút hành động riêng',
  args: {
    items: NAV_ITEMS,
    action: ACTION
  }
}`,...(_=(z=s.parameters)==null?void 0:z.docs)==null?void 0:_.source},description:{story:"`Action=true` — nút hành động riêng `base/FooterItemSpecial`, rời bên phải vỏ, cách 8.",...(N=(F=s.parameters)==null?void 0:F.docs)==null?void 0:N.description}}};var O,W,P,V,Q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(W=l.parameters)==null?void 0:W.docs)==null?void 0:P.source},description:{story:"4 variant của `base/FooterItemSpecial`: `Type` (Subtle · Emphasized) × `Compact`. Compact có nút thì tối đa 4 mục.",...(Q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:Q.description}}};const L=["Playground","Matrix","ItemCount","WithBadge","WithAction","ActionMatrix"],J=Object.freeze(Object.defineProperty({__proto__:null,ActionMatrix:l,ItemCount:c,Matrix:h,Playground:m,WithAction:s,WithBadge:o,__namedExportsOrder:L,default:K},Symbol.toStringTag,{value:"Module"}));export{l as A,c as I,h as M,m as P,J as S,o as W,s as a};

import{j as e,r as E}from"./iframe-EkKnofS_.js";import{B as t}from"./BottomBar-B5y4Sjgf.js";import{S as u,C as h}from"./layout-Xzi5pJ9U.js";const n=[{value:"home",label:"Trang chủ",icon:"house"},{value:"gift",label:"Ưu đãi",icon:"gift"},{value:"scan",label:"Quét mã",icon:"qrcode"},{value:"bell",label:"Thông báo",icon:"bell",badge:9,badgeLabel:"9 thông báo mới"},{value:"user",label:"Tài khoản",icon:"user"}],i=({children:a,width:r=390})=>e.jsx("div",{style:{width:r,padding:"var(--gap-3)",boxSizing:"border-box",background:"var(--background-subtle)",borderRadius:"var(--radius-lg)"},children:a}),I={title:"Component/Điều hướng/BottomBar",component:t,args:{items:n,value:"home",compact:!1,onChange:()=>{},"aria-label":"Điều hướng chính"},argTypes:{value:{control:"inline-radio",options:n.map(a=>a.value)},items:{control:!1}},render:a=>{const[r,m]=E.useState(a.value);return e.jsx(i,{children:e.jsx(t,{...a,value:r,onChange:m})})}},c={},s={name:"10 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(u,{children:[!1,!0].map(a=>n.map((r,m)=>e.jsx(h,{label:`Active=${m+1}, Compact=${a?"True":"False"}`,children:e.jsx(i,{children:e.jsx(t,{items:n,value:r.value,compact:a,onChange:()=>{},"aria-label":`Điều hướng chính, mẫu ${m+1}${a?" thu gọn":""}`})})},`${a}-${r.value}`)))})},l={name:"Số mục 2–5",parameters:{controls:{disable:!0}},render:()=>e.jsx(u,{children:[2,3,4,5].map(a=>e.jsx(h,{label:`${a} mục`,children:e.jsx(i,{children:e.jsx(t,{items:n.slice(0,a),value:"home",onChange:()=>{},"aria-label":`Điều hướng chính, ${a} mục`})})},a))})},o={name:"Badge",parameters:{controls:{disable:!0}},render:()=>e.jsxs(u,{children:[e.jsx(h,{label:"Thông báo chưa chọn — có badge",children:e.jsx(i,{children:e.jsx(t,{items:n,value:"home",onChange:()=>{},"aria-label":"Điều hướng chính, có badge"})})}),e.jsx(h,{label:"Thông báo đang chọn — badge ẩn",children:e.jsx(i,{children:e.jsx(t,{items:n,value:"bell",onChange:()=>{},"aria-label":"Điều hướng chính, badge ẩn"})})})]})};var d,g,b;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(b=(g=c.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var p,S,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{\n  name: '10 variant',\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: () => <Stack>\n      {[false, true].map(compact => ITEMS.map((it, i) => <Cell key={`${compact}-${it.value}`} label={`Active=${i + 1}, Compact=${compact ? 'True' : 'False'}`}>\n            <Screen><BottomBar items={ITEMS} value={it.value} compact={compact} onChange={() => {}} aria-label={`Điều hướng chính, mẫu ${i + 1}${compact ? ' thu gọn' : ''}`} /></Screen>\n          </Cell>))}\n    </Stack>\n}",...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var x,C,j,B,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(C=l.parameters)==null?void 0:C.docs)==null?void 0:j.source},description:{story:"Mục 1–2 luôn có, bật thêm mục 3–5: thanh có 2 đến 5 mục. `Compact=False` chia đều bề ngang.",...(T=(B=l.parameters)==null?void 0:B.docs)==null?void 0:T.description}}};var $,f,k,y,M;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source},description:{story:"Badge chỉ hiện ở mục KHÔNG được chọn; chọn mục đó thì badge ẩn.",...(M=(y=o.parameters)==null?void 0:y.docs)==null?void 0:M.description}}};const _=["Playground","Matrix","ItemCount","WithBadge"],z=Object.freeze(Object.defineProperty({__proto__:null,ItemCount:l,Matrix:s,Playground:c,WithBadge:o,__namedExportsOrder:_,default:I},Symbol.toStringTag,{value:"Module"}));export{c as P,z as S};

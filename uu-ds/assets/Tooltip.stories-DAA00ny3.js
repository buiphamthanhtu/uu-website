import{j as e,b as i}from"./iframe-o9qWa12E.js";import{T as n}from"./Tooltip-CABAn2vz.js";import{R as T,C}from"./layout-Bfiz2Kkg.js";const f=["top","bottom","left","right"],v={top:"Top",bottom:"Bottom",left:"Left",right:"Right"},s=({children:t})=>e.jsx("div",{style:{padding:"var(--gap-14) var(--size-36)",display:"flex",justifyContent:"center"},children:t}),E={title:"Component/Giao tiếp/Tooltip",component:n,args:{text:"Sao chép mã giới thiệu",placement:"top",open:void 0,children:e.jsx("span",{})},argTypes:{placement:{control:"inline-radio",options:f},open:{control:"boolean"},children:{control:!1},relation:{control:!1}},render:t=>e.jsx(s,{children:e.jsx(n,{...t,children:e.jsx(i,{type:"outline",size:"base",icon:"copy",label:"Sao chép"})})})},o={},a={name:"4 variant",parameters:{controls:{disable:!0}},render:()=>e.jsx(T,{style:{flexWrap:"wrap",gap:"var(--gap-4)"},children:f.map(t=>e.jsx(C,{label:`Placement=${v[t]}`,children:e.jsx(s,{children:e.jsx(n,{text:"Sao chép",placement:t,open:!0,children:e.jsx(i,{type:"outline",size:"base",icon:"copy",label:"Sao chép"})})})},t))})},r={name:"Chữ dài",parameters:{controls:{disable:!0}},render:()=>e.jsx(s,{children:e.jsx(n,{text:"Mã giới thiệu dùng được một lần cho mỗi tài khoản mới đăng ký",placement:"bottom",open:!0,children:e.jsx(i,{type:"ghost",size:"base",icon:"circle-info",label:"Về mã giới thiệu"})})})};var c,l,p,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:"Rê chuột vào nút, hoặc Tab tới nút, để hiện tooltip. Bấm Esc để ẩn.",...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.description}}};var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '4 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row style={{
    flexWrap: 'wrap',
    gap: 'var(--gap-4)'
  }}>
      {PLACEMENTS.map(p => <Cell key={p} label={\`Placement=\${LABEL[p]}\`}>
          <Space>
            <Tooltip text="Sao chép" placement={p} open>
              <IconButtonNeutral type="outline" size="base" icon="copy" label="Sao chép" />
            </Tooltip>
          </Space>
        </Cell>)}
    </Row>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,b,y,S,j;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"Chữ dài xuống dòng khi chạm max-width 240.",...(j=(S=r.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};const L=["Playground","Matrix","LongText"],M=Object.freeze(Object.defineProperty({__proto__:null,LongText:r,Matrix:a,Playground:o,__namedExportsOrder:L,default:E},Symbol.toStringTag,{value:"Module"}));export{o as P,M as S};

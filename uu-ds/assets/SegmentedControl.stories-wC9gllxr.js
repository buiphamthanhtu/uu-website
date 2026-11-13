import{r as j,j as e,S as T,F as A,k as y}from"./iframe-DflIRoHs.js";import{S as t}from"./SegmentedControl-DqoK-n6J.js";const{fn:_}=__STORYBOOK_MODULE_TEST__,k={title:"Component/Lựa chọn/SegmentedControl",component:t,args:{items:[{value:"a",label:"Page"},{value:"b",label:"Page"},{value:"c",label:"Page"}],value:"a",onChange:_(),fill:!1,"aria-label":"Chọn trang"},render:a=>{const[o,i]=j.useState(a.value);return e.jsx(t,{...a,value:o,onChange:u=>{var c;i(u),(c=a.onChange)==null||c.call(a,u)}})}},l={},r={name:"Icon + suffix",args:{items:[{value:"all",label:"Tất cả",icon:"list-checkbox"},{value:"gift",label:"Quà",icon:"gift",suffix:e.jsx("span",{className:"uu-text-caption",style:{color:"var(--object-accent)"},children:"3"})},{value:"fav",icon:"heart",ariaLabel:"Yêu thích"}],value:"gift"}},s={name:"Chia đều (khi màn yêu cầu)",args:{fill:!0},render:a=>{const[o,i]=j.useState(a.value);return e.jsx(T,{style:{width:358,maxWidth:A},children:e.jsx(t,{...a,value:o,onChange:i})})}},n={name:"8 variant của item",parameters:{controls:{disable:!0}},render:()=>e.jsxs(T,{children:[e.jsx(y,{children:"State: Default · Hover · Pressed · Disabled — hàng trên Active=False, hàng dưới Active=True"}),e.jsx(t,{"aria-label":"Active=False",value:"x",onChange:()=>{},items:[{value:"a",label:"Page"},{value:"b",label:"Page",state:"hover"},{value:"c",label:"Page",state:"pressed"},{value:"d",label:"Page",disabled:!0}]}),e.jsxs("div",{className:"uu-story-row",children:[e.jsx(t,{"aria-label":"Active=True Default",value:"a",onChange:()=>{},items:[{value:"a",label:"Page"}]}),e.jsx(t,{"aria-label":"Active=True Hover",value:"a",onChange:()=>{},items:[{value:"a",label:"Page",state:"hover"}]}),e.jsx(t,{"aria-label":"Active=True Pressed",value:"a",onChange:()=>{},items:[{value:"a",label:"Page",state:"pressed"}]}),e.jsx(t,{"aria-label":"Active=True Disabled",value:"a",onChange:()=>{},items:[{value:"a",label:"Page",disabled:!0}]})]})]})};var v,d,m;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Icon + suffix',
  args: {
    items: [{
      value: 'all',
      label: 'Tất cả',
      icon: 'list-checkbox'
    }, {
      value: 'gift',
      label: 'Quà',
      icon: 'gift',
      suffix: <span className="uu-text-caption" style={{
        color: 'var(--object-accent)'
      }}>3</span>
    }, {
      value: 'fav',
      icon: 'heart',
      ariaLabel: 'Yêu thích'
    }],
    value: 'gift'
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var p,f,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Chia đều (khi màn yêu cầu)',
  args: {
    fill: true
  },
  render: args => {
    const [v, setV] = useState(args.value);
    return <Stack style={{
      width: 358,
      maxWidth: FIT
    }}><SegmentedControl {...args} value={v} onChange={setV} /></Stack>;
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,C,P;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '8 variant của item',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      <Caption>State: Default · Hover · Pressed · Disabled — hàng trên Active=False, hàng dưới Active=True</Caption>
      <SegmentedControl aria-label="Active=False" value="x" onChange={() => {}} items={[{
      value: 'a',
      label: 'Page'
    }, {
      value: 'b',
      label: 'Page',
      state: 'hover'
    }, {
      value: 'c',
      label: 'Page',
      state: 'pressed'
    }, {
      value: 'd',
      label: 'Page',
      disabled: true
    }]} />
      <div className="uu-story-row">
        <SegmentedControl aria-label="Active=True Default" value="a" onChange={() => {}} items={[{
        value: 'a',
        label: 'Page'
      }]} />
        <SegmentedControl aria-label="Active=True Hover" value="a" onChange={() => {}} items={[{
        value: 'a',
        label: 'Page',
        state: 'hover'
      }]} />
        <SegmentedControl aria-label="Active=True Pressed" value="a" onChange={() => {}} items={[{
        value: 'a',
        label: 'Page',
        state: 'pressed'
      }]} />
        <SegmentedControl aria-label="Active=True Disabled" value="a" onChange={() => {}} items={[{
        value: 'a',
        label: 'Page',
        disabled: true
      }]} />
      </div>
    </Stack>
}`,...(P=(C=n.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const F=["Playground","WithIconAndSuffix","Fill","Matrix"],I=Object.freeze(Object.defineProperty({__proto__:null,Fill:s,Matrix:n,Playground:l,WithIconAndSuffix:r,__namedExportsOrder:F,default:k},Symbol.toStringTag,{value:"Module"}));export{s as F,n as M,l as P,I as S,r as W};

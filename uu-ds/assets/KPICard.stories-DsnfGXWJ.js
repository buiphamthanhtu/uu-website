import{j as e}from"./iframe-gn_pzB68.js";import{K as t}from"./KPICard-DYdkZi6e.js";import{S as K,R as i,C as a}from"./layout-whGn3D85.js";const r=({children:d,width:P=240,density:f="compact"})=>e.jsx("div",{"data-density":f,style:{width:P,padding:"var(--gap-3)",boxSizing:"border-box",background:"var(--background-subtle)",borderRadius:"var(--radius-lg)"},children:d}),R={title:"Component/Dữ liệu/KPICard",component:t,args:{label:"Doanh thu tháng 10",value:"1.250.000.000 ₫",trend:"up",delta:"12% so với tháng trước"},argTypes:{trend:{control:"inline-radio",options:["up","down","none"]}},render:d=>e.jsx(r,{children:e.jsx(t,{...d})})},o={},s={name:"3 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{align:"flex-start",children:[e.jsx(a,{label:"Trend=Up",children:e.jsx(r,{children:e.jsx(t,{label:"Đơn hàng mới",value:"1.284",trend:"up",delta:"8,2% so với tuần trước"})})}),e.jsx(a,{label:"Trend=Down",children:e.jsx(r,{children:e.jsx(t,{label:"Tỷ lệ huỷ đơn",value:"3,1%",trend:"down",delta:"0,4 điểm so với tuần trước"})})}),e.jsx(a,{label:"Trend=[No trend]",children:e.jsx(r,{children:e.jsx(t,{label:"Khách hàng đang hoạt động",value:"18.420"})})})]})},l={name:"Màu theo chiều số",parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{align:"flex-start",children:[e.jsx(a,{label:"Chi phí tăng → vẫn Up",children:e.jsx(r,{children:e.jsx(t,{label:"Chi phí vận chuyển",value:"42.500.000 ₫",trend:"up",delta:"5% so với tháng trước"})})}),e.jsx(a,{label:"Thời gian chờ giảm → vẫn Down",children:e.jsx(r,{children:e.jsx(t,{label:"Thời gian xử lý trung bình",value:"2,4 giờ",trend:"down",delta:"18% so với tháng trước"})})})]})},n={name:"Touch · Compact",parameters:{controls:{disable:!0}},render:()=>e.jsx(K,{children:e.jsxs(i,{align:"flex-start",children:[e.jsx(a,{label:"Compact",children:e.jsx(r,{density:"compact",children:e.jsx(t,{label:"Doanh thu tháng 10",value:"1.250.000.000 ₫",trend:"up",delta:"12% so với tháng trước"})})}),e.jsx(a,{label:"Touch",children:e.jsx(r,{density:"touch",width:280,children:e.jsx(t,{label:"Doanh thu tháng 10",value:"1.250.000.000 ₫",trend:"up",delta:"12% so với tháng trước"})})})]})})};var c,h,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var p,g,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '3 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Cell label="Trend=Up"><Slot><KPICard label="Đơn hàng mới" value="1.284" trend="up" delta="8,2% so với tuần trước" /></Slot></Cell>
      <Cell label="Trend=Down"><Slot><KPICard label="Tỷ lệ huỷ đơn" value="3,1%" trend="down" delta="0,4 điểm so với tuần trước" /></Slot></Cell>
      <Cell label="Trend=[No trend]"><Slot><KPICard label="Khách hàng đang hoạt động" value="18.420" /></Slot></Cell>
    </Row>
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,x,v,C,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Màu theo chiều số',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Cell label="Chi phí tăng → vẫn Up"><Slot><KPICard label="Chi phí vận chuyển" value="42.500.000 ₫" trend="up" delta="5% so với tháng trước" /></Slot></Cell>
      <Cell label="Thời gian chờ giảm → vẫn Down"><Slot><KPICard label="Thời gian xử lý trung bình" value="2,4 giờ" trend="down" delta="18% so với tháng trước" /></Slot></Cell>
    </Row>
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:"Màu `Delta` theo **chiều số**, không theo tốt / xấu: chi phí tăng vẫn là `Up` xanh.",...(j=(C=l.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};var S,T,w,y,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Touch · Compact',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      <Row align="flex-start">
        <Cell label="Compact"><Slot density="compact"><KPICard label="Doanh thu tháng 10" value="1.250.000.000 ₫" trend="up" delta="12% so với tháng trước" /></Slot></Cell>
        <Cell label="Touch"><Slot density="touch" width={280}><KPICard label="Doanh thu tháng 10" value="1.250.000.000 ₫" trend="up" delta="12% so với tháng trước" /></Slot></Cell>
      </Row>
    </Stack>
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:"Touch: padding 16, giá trị 23/32 · Compact: padding 12, giá trị 19/28.",...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.description}}};const I=["Playground","Matrix","Direction","Density"],U=Object.freeze(Object.defineProperty({__proto__:null,Density:n,Direction:l,Matrix:s,Playground:o,__namedExportsOrder:I,default:R},Symbol.toStringTag,{value:"Module"}));export{o as P,U as S};

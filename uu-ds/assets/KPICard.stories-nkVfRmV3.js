import{j as e}from"./iframe-6vwN6wb9.js";import{K as l}from"./KPICard-FvizH_ip.js";import{S as N,R as s,C as r}from"./layout-nPJ89kCs.js";const t=({children:c,width:_=240,density:M="compact"})=>e.jsx("div",{"data-density":M,style:{width:_,padding:"var(--gap-3)",boxSizing:"border-box",background:"var(--background-subtle)",borderRadius:"var(--radius-lg)"},children:c}),U={title:"Component/Dữ liệu/KPICard",component:l,args:{label:"Doanh thu tháng 10",value:"1.250.000.000 ₫",trend:"up",delta:"12% so với tháng trước",polarity:"normal"},argTypes:{trend:{control:"inline-radio",options:["up","down","none"]},polarity:{control:"inline-radio",options:["normal","inverse"]}},render:c=>e.jsx(t,{children:e.jsx(l,{...c})})},i={},d={name:"5 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(N,{children:[e.jsxs(s,{align:"flex-start",children:[e.jsx(r,{label:"Trend=Up, Polarity=Normal",children:e.jsx(t,{children:e.jsx(l,{label:"Đơn hàng mới",value:"1.284",trend:"up",delta:"8,2% so với tuần trước"})})}),e.jsx(r,{label:"Trend=Down, Polarity=Normal",children:e.jsx(t,{children:e.jsx(l,{label:"Doanh thu tuần",value:"312.400.000 ₫",trend:"down",delta:"4% so với tuần trước"})})}),e.jsx(r,{label:"Trend=[No trend]",children:e.jsx(t,{children:e.jsx(l,{label:"Khách hàng đang hoạt động",value:"18.420"})})})]}),e.jsxs(s,{align:"flex-start",children:[e.jsx(r,{label:"Trend=Up, Polarity=Inverse",children:e.jsx(t,{children:e.jsx(l,{label:"Chi phí vận chuyển",value:"42.500.000 ₫",trend:"up",polarity:"inverse",delta:"5% so với tháng trước"})})}),e.jsx(r,{label:"Trend=Down, Polarity=Inverse",children:e.jsx(t,{children:e.jsx(l,{label:"Tỷ lệ huỷ đơn",value:"3,1%",trend:"down",polarity:"inverse",delta:"0,4 điểm so với tuần trước"})})})]}),e.jsxs(s,{align:"flex-start",children:[e.jsx(r,{label:"Interactive=True",children:e.jsx(t,{children:e.jsx(l,{label:"Đơn hàng mới",value:"1.284",trend:"up",delta:"8,2% so với tuần trước",href:"#"})})}),e.jsx(r,{label:"Interactive=True · Hover",children:e.jsx(t,{children:e.jsx(l,{label:"Đơn hàng mới",value:"1.284",trend:"up",delta:"8,2% so với tuần trước",href:"#","data-state":"hover"})})}),e.jsx(r,{label:"Interactive=True · Pressed",children:e.jsx(t,{children:e.jsx(l,{label:"Đơn hàng mới",value:"1.284",trend:"up",delta:"8,2% so với tuần trước",href:"#","data-state":"pressed"})})})]})]})},a={name:"Polarity",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{align:"flex-start",children:[e.jsx(r,{label:"Normal — doanh thu tăng là tốt",children:e.jsx(t,{children:e.jsx(l,{label:"Doanh thu tháng 10",value:"1.250.000.000 ₫",trend:"up",delta:"12% so với tháng trước"})})}),e.jsx(r,{label:"Inverse — chi phí tăng là xấu",children:e.jsx(t,{children:e.jsx(l,{label:"Chi phí vận chuyển",value:"42.500.000 ₫",trend:"up",polarity:"inverse",delta:"5% so với tháng trước"})})}),e.jsx(r,{label:"Inverse — thời gian chờ giảm là tốt",children:e.jsx(t,{children:e.jsx(l,{label:"Thời gian xử lý trung bình",value:"2,4 giờ",trend:"down",polarity:"inverse",delta:"18% so với tháng trước"})})})]})},n={name:"Thẻ bấm được",parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{align:"flex-start",children:[e.jsx(r,{label:"Link (href)",children:e.jsx(t,{children:e.jsx(l,{label:"Đơn hàng mới",value:"1.284",trend:"up",delta:"8,2% so với tuần trước",href:"#don-hang"})})}),e.jsx(r,{label:"Nút (onClick)",children:e.jsx(t,{children:e.jsx(l,{label:"Tỷ lệ huỷ đơn",value:"3,1%",trend:"down",polarity:"inverse",delta:"0,4 điểm so với tuần trước",onClick:()=>{}})})})]})},o={name:"Touch · Compact",parameters:{controls:{disable:!0}},render:()=>e.jsx(N,{children:e.jsxs(s,{align:"flex-start",children:[e.jsx(r,{label:"Compact",children:e.jsx(t,{density:"compact",children:e.jsx(l,{label:"Doanh thu tháng 10",value:"1.250.000.000 ₫",trend:"up",delta:"12% so với tháng trước"})})}),e.jsx(r,{label:"Touch",children:e.jsx(t,{density:"touch",width:280,children:e.jsx(l,{label:"Doanh thu tháng 10",value:"1.250.000.000 ₫",trend:"up",delta:"12% so với tháng trước"})})})]})})};var h,u,p;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var v,g,m;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '5 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack>
      <Row align="flex-start">
        <Cell label="Trend=Up, Polarity=Normal"><Slot><KPICard label="Đơn hàng mới" value="1.284" trend="up" delta="8,2% so với tuần trước" /></Slot></Cell>
        <Cell label="Trend=Down, Polarity=Normal"><Slot><KPICard label="Doanh thu tuần" value="312.400.000 ₫" trend="down" delta="4% so với tuần trước" /></Slot></Cell>
        <Cell label="Trend=[No trend]"><Slot><KPICard label="Khách hàng đang hoạt động" value="18.420" /></Slot></Cell>
      </Row>
      <Row align="flex-start">
        <Cell label="Trend=Up, Polarity=Inverse"><Slot><KPICard label="Chi phí vận chuyển" value="42.500.000 ₫" trend="up" polarity="inverse" delta="5% so với tháng trước" /></Slot></Cell>
        <Cell label="Trend=Down, Polarity=Inverse"><Slot><KPICard label="Tỷ lệ huỷ đơn" value="3,1%" trend="down" polarity="inverse" delta="0,4 điểm so với tuần trước" /></Slot></Cell>
      </Row>
      <Row align="flex-start">
        <Cell label="Interactive=True"><Slot><KPICard label="Đơn hàng mới" value="1.284" trend="up" delta="8,2% so với tuần trước" href="#" /></Slot></Cell>
        <Cell label="Interactive=True · Hover"><Slot><KPICard label="Đơn hàng mới" value="1.284" trend="up" delta="8,2% so với tuần trước" href="#" data-state="hover" /></Slot></Cell>
        <Cell label="Interactive=True · Pressed"><Slot><KPICard label="Đơn hàng mới" value="1.284" trend="up" delta="8,2% so với tuần trước" href="#" data-state="pressed" /></Slot></Cell>
      </Row>
    </Stack>
}`,...(m=(g=d.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,x,C,j,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Polarity',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Cell label="Normal — doanh thu tăng là tốt"><Slot><KPICard label="Doanh thu tháng 10" value="1.250.000.000 ₫" trend="up" delta="12% so với tháng trước" /></Slot></Cell>
      <Cell label="Inverse — chi phí tăng là xấu"><Slot><KPICard label="Chi phí vận chuyển" value="42.500.000 ₫" trend="up" polarity="inverse" delta="5% so với tháng trước" /></Slot></Cell>
      <Cell label="Inverse — thời gian chờ giảm là tốt"><Slot><KPICard label="Thời gian xử lý trung bình" value="2,4 giờ" trend="down" polarity="inverse" delta="18% so với tháng trước" /></Slot></Cell>
    </Row>
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source},description:{story:'Chỉ số mà **tăng là xấu** dùng `polarity="inverse"`: màu đảo, icon vẫn theo chiều số. Chọn theo ý nghĩa chỉ số, không theo con số đang hiện.',...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.description}}};var y,P,I,T,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Thẻ bấm được',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      <Cell label="Link (href)"><Slot><KPICard label="Đơn hàng mới" value="1.284" trend="up" delta="8,2% so với tuần trước" href="#don-hang" /></Slot></Cell>
      <Cell label="Nút (onClick)"><Slot><KPICard label="Tỷ lệ huỷ đơn" value="3,1%" trend="down" polarity="inverse" delta="0,4 điểm so với tuần trước" onClick={() => {}} /></Slot></Cell>
    </Row>
}`,...(I=(P=n.parameters)==null?void 0:P.docs)==null?void 0:I.source},description:{story:"Thẻ mở trang chi tiết: `href` → `<a>`, `onClick` → `<button>`. Cả thẻ là một vùng bấm, có `chevron-right` cuối hàng Label.",...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.description}}};var w,K,D,R,k;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(K=o.parameters)==null?void 0:K.docs)==null?void 0:D.source},description:{story:"Touch: padding 16, giá trị 23/32 · Compact: padding 12, giá trị 19/28.",...(k=(R=o.parameters)==null?void 0:R.docs)==null?void 0:k.description}}};const L=["Playground","Matrix","Polarity","Interactive","Density"],H=Object.freeze(Object.defineProperty({__proto__:null,Density:o,Interactive:n,Matrix:d,Playground:i,Polarity:a,__namedExportsOrder:L,default:U},Symbol.toStringTag,{value:"Module"}));export{o as D,n as I,d as M,i as P,H as S,a};

import{r as u,j as e}from"./iframe-DqdT0fUx.js";import{T as a,a as b}from"./Tab-mkem3JCU.js";import{S as E,R as G,C as t}from"./layout-lF1Il3_E.js";const O={title:"Component/Điều hướng/Tab",component:a,args:{children:"Còn hiệu lực",active:!1,disabled:!1,state:"default"},argTypes:{state:{control:"radio",options:["default","hover","pressed"]}},render:r=>e.jsx(a,{...r})},o={},h={name:"5 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(G,{children:[e.jsx(t,{label:"Default",children:e.jsx(a,{children:"Còn hiệu lực"})}),e.jsx(t,{label:"Active",children:e.jsx(a,{active:!0,children:"Còn hiệu lực"})}),e.jsx(t,{label:"Hover",children:e.jsx(a,{state:"hover",children:"Còn hiệu lực"})}),e.jsx(t,{label:"Pressed",children:e.jsx(a,{state:"pressed",children:"Còn hiệu lực"})}),e.jsx(t,{label:"Disabled",children:e.jsx(a,{disabled:!0,children:"Còn hiệu lực"})})]})},l={name:"Gạch chỉ báo cố định 32",parameters:{controls:{disable:!0}},render:()=>e.jsxs(G,{children:[e.jsx(t,{label:"nhãn ngắn",children:e.jsx(a,{active:!0,children:"Mã"})}),e.jsx(t,{label:"nhãn vừa",children:e.jsx(a,{active:!0,children:"Còn hiệu lực"})}),e.jsx(t,{label:"nhãn dài",children:e.jsx(a,{active:!0,children:"Ưu đãi sắp hết hạn"})})]})},n={name:"TabBar · Fixed",parameters:{controls:{disable:!0}},render:()=>{const[r,i]=u.useState("con-han"),d=[{value:"con-han",label:"Còn hiệu lực"},{value:"het-han",label:"Hết hiệu lực"}];return e.jsxs(E,{style:{width:390},children:[e.jsx(b,{layout:"fixed",items:d,value:r,onChange:i,"aria-label":"Lọc quà"}),e.jsx("span",{style:{font:"var(--font-weight-normal) var(--text-body-font-size)/var(--text-body-line-height) var(--font-family-body)",color:"var(--object-secondary)"},children:r==="con-han"?"Danh sách quà còn dùng được.":"Danh sách quà đã hết hạn — thẻ không còn nút Xem mã."})]})}},s={name:"TabBar · Fixed · ba tab",parameters:{controls:{disable:!0}},render:()=>{const[r,i]=u.useState("mo-ta");return e.jsx("div",{style:{width:390},children:e.jsx(b,{value:r,onChange:i,"aria-label":"Thông tin phòng",items:[{value:"mo-ta",label:"Mô tả"},{value:"hinh-anh",label:"Hình ảnh"},{value:"chinh-sach",label:"Chính sách",disabled:!0}]})})}},c={name:"TabBar · Scrollable",parameters:{controls:{disable:!0}},render:()=>{const r=[{value:"tong-quan",label:"Tổng quan"},{value:"phong",label:"Phòng"},{value:"tien-ich",label:"Tiện ích"},{value:"danh-gia",label:"Đánh giá"},{value:"vi-tri",label:"Vị trí"},{value:"chinh-sach",label:"Chính sách huỷ phòng"},{value:"hoi-dap",label:"Hỏi đáp"}],[i,d]=u.useState("chinh-sach");return e.jsx(E,{style:{width:390},children:e.jsx(b,{layout:"scrollable",items:r,value:i,onChange:d,"aria-label":"Thông tin khách sạn"})})}};var m,p,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,x,C;h.parameters={...h.parameters,docs:{...(g=h.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '5 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Cell label="Default"><Tab>Còn hiệu lực</Tab></Cell>
      <Cell label="Active"><Tab active>Còn hiệu lực</Tab></Cell>
      <Cell label="Hover"><Tab state="hover">Còn hiệu lực</Tab></Cell>
      <Cell label="Pressed"><Tab state="pressed">Còn hiệu lực</Tab></Cell>
      <Cell label="Disabled"><Tab disabled>Còn hiệu lực</Tab></Cell>
    </Row>
}`,...(C=(x=h.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var T,y,j,S,f;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Gạch chỉ báo cố định 32',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Cell label="nhãn ngắn"><Tab active>Mã</Tab></Cell>
      <Cell label="nhãn vừa"><Tab active>Còn hiệu lực</Tab></Cell>
      <Cell label="nhãn dài"><Tab active>Ưu đãi sắp hết hạn</Tab></Cell>
    </Row>
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source},description:{story:"Gạch chỉ báo rộng **cố định 32**, không giãn theo nhãn — nhãn dài mấy thì gạch vẫn 32, canh giữa.",...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.description}}};var w,B,V,k,q;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'TabBar · Fixed',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState('con-han');
    const items = [{
      value: 'con-han',
      label: 'Còn hiệu lực'
    }, {
      value: 'het-han',
      label: 'Hết hiệu lực'
    }];
    return <Stack style={{
      width: 390
    }}>
        <TabBar layout="fixed" items={items} value={v} onChange={setV} aria-label="Lọc quà" />
        <span style={{
        font: 'var(--font-weight-normal) var(--text-body-font-size)/var(--text-body-line-height) var(--font-family-body)',
        color: 'var(--object-secondary)'
      }}>
          {v === 'con-han' ? 'Danh sách quà còn dùng được.' : 'Danh sách quà đã hết hạn — thẻ không còn nút Xem mã.'}
        </span>
      </Stack>;
  }
}`,...(V=(B=n.parameters)==null?void 0:B.docs)==null?void 0:V.source},description:{story:"`TabBar` `Layout=Fixed`: 2–4 tab nhãn ngắn, tab chia đều bề ngang. Viền dưới 1px `border-muted` chạy suốt, gạch Active đè lên.",...(q=(k=n.parameters)==null?void 0:k.docs)==null?void 0:q.description}}};var D,F,H,P,M;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'TabBar · Fixed · ba tab',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState('mo-ta');
    return <div style={{
      width: 390
    }}>
        <TabBar value={v} onChange={setV} aria-label="Thông tin phòng" items={[{
        value: 'mo-ta',
        label: 'Mô tả'
      }, {
        value: 'hinh-anh',
        label: 'Hình ảnh'
      }, {
        value: 'chinh-sach',
        label: 'Chính sách',
        disabled: true
      }]} />
      </div>;
  }
}`,...(H=(F=s.parameters)==null?void 0:F.docs)==null?void 0:H.source},description:{story:"`Layout=Fixed` với ba tab, một tab Disabled — mũi tên trái/phải bỏ qua tab Disabled.",...(M=(P=s.parameters)==null?void 0:P.docs)==null?void 0:M.description}}};var R,_,L,A,z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'TabBar · Scrollable',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const items = [{
      value: 'tong-quan',
      label: 'Tổng quan'
    }, {
      value: 'phong',
      label: 'Phòng'
    }, {
      value: 'tien-ich',
      label: 'Tiện ích'
    }, {
      value: 'danh-gia',
      label: 'Đánh giá'
    }, {
      value: 'vi-tri',
      label: 'Vị trí'
    }, {
      value: 'chinh-sach',
      label: 'Chính sách huỷ phòng'
    }, {
      value: 'hoi-dap',
      label: 'Hỏi đáp'
    }];
    const [v, setV] = useState('chinh-sach');
    return <Stack style={{
      width: 390
    }}>
        <TabBar layout="scrollable" items={items} value={v} onChange={setV} aria-label="Thông tin khách sạn" />
      </Stack>;
  }
}`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.source},description:{story:'`Layout=Scrollable`: ≥ 5 tab hoặc nhãn dài — tab hug, cuộn ngang, padding trái 16, cắt mép phải. Tab Active tự cuộn vào tầm nhìn (mở story là tab "Chính sách huỷ phòng" đã được kéo vào).',...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.description}}};const I=["Playground","Matrix","IndicatorFixed","Bar","ThreeTabs","Scrollable"],N=Object.freeze(Object.defineProperty({__proto__:null,Bar:n,IndicatorFixed:l,Matrix:h,Playground:o,Scrollable:c,ThreeTabs:s,__namedExportsOrder:I,default:O},Symbol.toStringTag,{value:"Module"}));export{o as P,N as S};

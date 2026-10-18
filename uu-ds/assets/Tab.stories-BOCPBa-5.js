import{r as D,j as e}from"./iframe-BgqkvPSF.js";import{T as a,a as V}from"./Tab-Cc-x7X6a.js";import{S as P,R as _,C as o}from"./layout-DPQWCONv.js";const z={title:"Component/Điều hướng/Tab",component:a,args:{children:"Còn hiệu lực",active:!1},render:n=>e.jsx(a,{...n})},c={},l={name:"2 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(_,{children:[e.jsx(o,{label:"Default",children:e.jsx(a,{children:"Còn hiệu lực"})}),e.jsx(o,{label:"Active",children:e.jsx(a,{active:!0,children:"Còn hiệu lực"})})]})},r={name:"Gạch chỉ báo cố định 32",parameters:{controls:{disable:!0}},render:()=>e.jsxs(_,{children:[e.jsx(o,{label:"nhãn ngắn",children:e.jsx(a,{active:!0,children:"Mã"})}),e.jsx(o,{label:"nhãn vừa",children:e.jsx(a,{active:!0,children:"Còn hiệu lực"})}),e.jsx(o,{label:"nhãn dài",children:e.jsx(a,{active:!0,children:"Ưu đãi sắp hết hạn"})})]})},t={name:"TabBar (hàng tab)",parameters:{controls:{disable:!0}},render:()=>{const[n,h]=D.useState("con-han"),H=[{value:"con-han",label:"Còn hiệu lực"},{value:"het-han",label:"Hết hiệu lực"}];return e.jsxs(P,{style:{width:390},children:[e.jsx(V,{items:H,value:n,onChange:h,"aria-label":"Lọc quà"}),e.jsx("span",{style:{font:"var(--font-weight-normal) var(--font-size-base)/var(--font-height-base) var(--font-family-body)",color:"var(--object-secondary)"},children:n==="con-han"?"Danh sách quà còn dùng được.":"Danh sách quà đã hết hạn — thẻ không còn nút Xem mã."})]})}},s={name:"Ba tab",parameters:{controls:{disable:!0}},render:()=>{const[n,h]=D.useState("mo-ta");return e.jsx(V,{value:n,onChange:h,"aria-label":"Thông tin phòng",items:[{value:"mo-ta",label:"Mô tả"},{value:"hinh-anh",label:"Hình ảnh"},{value:"chinh-sach",label:"Chính sách"}]})}};var i,u,d;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(u=c.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,b,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '2 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Cell label="Default"><Tab>Còn hiệu lực</Tab></Cell>
      <Cell label="Active"><Tab active>Còn hiệu lực</Tab></Cell>
    </Row>
}`,...(p=(b=l.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var v,g,C,x,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source},description:{story:"Gạch chỉ báo rộng **cố định 32**, không giãn theo nhãn — nhãn dài mấy thì gạch vẫn 32, canh giữa.",...(T=(x=r.parameters)==null?void 0:x.docs)==null?void 0:T.description}}};var j,f,y,S,B;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'TabBar (hàng tab)',
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
        <TabBar items={items} value={v} onChange={setV} aria-label="Lọc quà" />
        <span style={{
        font: 'var(--font-weight-normal) var(--font-size-base)/var(--font-height-base) var(--font-family-body)',
        color: 'var(--object-secondary)'
      }}>
          {v === 'con-han' ? 'Danh sách quà còn dùng được.' : 'Danh sách quà đã hết hạn — thẻ không còn nút Xem mã.'}
        </span>
      </Stack>;
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:"Hàng tab: hai vùng nội dung loại trừ nhau, cụm canh giữa, không có vạch nền.",...(B=(S=t.parameters)==null?void 0:S.docs)==null?void 0:B.description}}};var k,w,M,R,q;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Ba tab',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState('mo-ta');
    return <TabBar value={v} onChange={setV} aria-label="Thông tin phòng" items={[{
      value: 'mo-ta',
      label: 'Mô tả'
    }, {
      value: 'hinh-anh',
      label: 'Hình ảnh'
    }, {
      value: 'chinh-sach',
      label: 'Chính sách'
    }]} />;
  }
}`,...(M=(w=s.parameters)==null?void 0:w.docs)==null?void 0:M.source},description:{story:"Ba tab trở lên vẫn chạy: cụm hug, canh giữa. Bản thiết kế chưa chốt cách xử khi tràn khổ 390.",...(q=(R=s.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};const E=["Playground","Matrix","IndicatorFixed","Bar","ThreeTabs"],F=Object.freeze(Object.defineProperty({__proto__:null,Bar:t,IndicatorFixed:r,Matrix:l,Playground:c,ThreeTabs:s,__namedExportsOrder:E,default:z},Symbol.toStringTag,{value:"Module"}));export{c as P,F as S};

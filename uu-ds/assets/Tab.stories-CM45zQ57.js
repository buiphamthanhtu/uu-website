import{r as u,j as e}from"./iframe-6vwN6wb9.js";import{T as h,a as p}from"./Tab-K04RKmz4.js";import{S as v,R as U,C as b}from"./layout-nPJ89kCs.js";const W={title:"Component/Điều hướng/Tab",component:h,args:{children:"Còn hiệu lực",active:!1,disabled:!1,state:"default",icon:void 0,badge:!1},argTypes:{state:{control:"radio",options:["default","hover","pressed"]},icon:{control:"select",options:[void 0,"gift","ticket","star","bell"]}},render:a=>e.jsx(h,{...a})},d={},r={name:"5 variant",parameters:{controls:{disable:!0}},render:()=>{const a=[{label:"Default",props:{}},{label:"Active",props:{active:!0}},{label:"Hover",props:{state:"hover"}},{label:"Pressed",props:{state:"pressed"}},{label:"Disabled",props:{disabled:!0}}],n=[{label:"chữ",props:{}},{label:"Icon",props:{icon:"gift"}},{label:"Badge",props:{badge:!0}},{label:"Icon + Badge",props:{icon:"gift",badge:!0}}];return e.jsx(v,{children:n.map(t=>e.jsx(U,{children:a.map(m=>e.jsx(b,{label:`State=${m.label} · ${t.label}`,children:e.jsx(h,{...m.props,...t.props,children:"Còn hiệu lực"})},m.label))},t.label))})}},s={name:"Gạch chỉ báo cố định 32",parameters:{controls:{disable:!0}},render:()=>e.jsxs(U,{children:[e.jsx(b,{label:"nhãn ngắn",children:e.jsx(h,{active:!0,children:"Mã"})}),e.jsx(b,{label:"nhãn vừa",children:e.jsx(h,{active:!0,children:"Còn hiệu lực"})}),e.jsx(b,{label:"nhãn dài",children:e.jsx(h,{active:!0,children:"Ưu đãi sắp hết hạn"})})]})},l={name:"TabBar · Fixed",parameters:{controls:{disable:!0}},render:()=>{const[a,n]=u.useState("con-han"),t=[{value:"con-han",label:"Còn hiệu lực"},{value:"het-han",label:"Hết hiệu lực"}];return e.jsxs(v,{style:{width:390},children:[e.jsx(p,{layout:"fixed",items:t,value:a,onChange:n,"aria-label":"Lọc quà"}),e.jsx("span",{style:{font:"var(--font-weight-normal) var(--text-body-font-size)/var(--text-body-line-height) var(--font-family-body)",color:"var(--object-secondary)"},children:a==="con-han"?"Danh sách quà còn dùng được.":"Danh sách quà đã hết hạn — thẻ không còn nút Xem mã."})]})}},o={name:"TabBar · Fixed · ba tab",parameters:{controls:{disable:!0}},render:()=>{const[a,n]=u.useState("mo-ta");return e.jsx("div",{style:{width:390},children:e.jsx(p,{value:a,onChange:n,"aria-label":"Thông tin phòng",items:[{value:"mo-ta",label:"Mô tả"},{value:"hinh-anh",label:"Hình ảnh"},{value:"chinh-sach",label:"Chính sách",disabled:!0}]})})}},c={name:"TabBar · Scrollable",parameters:{controls:{disable:!0}},render:()=>{const a=[{value:"tong-quan",label:"Tổng quan"},{value:"phong",label:"Phòng"},{value:"tien-ich",label:"Tiện ích"},{value:"danh-gia",label:"Đánh giá"},{value:"vi-tri",label:"Vị trí"},{value:"chinh-sach",label:"Chính sách huỷ phòng"},{value:"hoi-dap",label:"Hỏi đáp"}],[n,t]=u.useState("chinh-sach");return e.jsx(v,{style:{width:390},children:e.jsx(p,{layout:"scrollable",items:a,value:n,onChange:t,"aria-label":"Thông tin khách sạn"})})}},i={name:"TabBar · icon và badge",parameters:{controls:{disable:!0}},render:()=>{const[a,n]=u.useState("uu-dai");return e.jsx("div",{style:{width:390},children:e.jsx(p,{value:a,onChange:n,"aria-label":"Ví của tôi",items:[{value:"uu-dai",label:"Ưu đãi",icon:"gift"},{value:"ve",label:"Vé",icon:"ticket",badge:!0},{value:"diem",label:"Điểm",icon:"star"}]})})}};var g,x,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var T,S,f,C,j;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '5 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const states = [{
      label: 'Default',
      props: {}
    }, {
      label: 'Active',
      props: {
        active: true
      }
    }, {
      label: 'Hover',
      props: {
        state: 'hover' as const
      }
    }, {
      label: 'Pressed',
      props: {
        state: 'pressed' as const
      }
    }, {
      label: 'Disabled',
      props: {
        disabled: true
      }
    }];
    const contents = [{
      label: 'chữ',
      props: {}
    }, {
      label: 'Icon',
      props: {
        icon: 'gift'
      }
    }, {
      label: 'Badge',
      props: {
        badge: true
      }
    }, {
      label: 'Icon + Badge',
      props: {
        icon: 'gift',
        badge: true
      }
    }];
    return <Stack>
        {contents.map(c => <Row key={c.label}>
            {states.map(st => <Cell key={st.label} label={\`State=\${st.label} · \${c.label}\`}><Tab {...st.props} {...c.props}>Còn hiệu lực</Tab></Cell>)}
          </Row>)}
      </Stack>;
  }
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:"5 `State` × nội dung: chỉ chữ · có `Icon` · có `Badge` · có cả hai. Icon cùng màu chữ, Active đổi sang `fill`.",...(j=(C=r.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};var B,V,k,w,I;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(V=s.parameters)==null?void 0:V.docs)==null?void 0:k.source},description:{story:"Gạch chỉ báo rộng **cố định 32**, không giãn theo nhãn — nhãn dài mấy thì gạch vẫn 32, canh giữa.",...(I=(w=s.parameters)==null?void 0:w.docs)==null?void 0:I.description}}};var q,D,F,H,M;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(F=(D=l.parameters)==null?void 0:D.docs)==null?void 0:F.source},description:{story:"`TabBar` `Layout=Fixed`: 2–4 tab nhãn ngắn, tab chia đều bề ngang. Viền dưới 1px `border-muted` chạy suốt, gạch Active đè lên.",...(M=(H=l.parameters)==null?void 0:H.docs)==null?void 0:M.description}}};var P,R,_,A,L;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(R=o.parameters)==null?void 0:R.docs)==null?void 0:_.source},description:{story:"`Layout=Fixed` với ba tab, một tab Disabled — mũi tên trái/phải bỏ qua tab Disabled.",...(L=(A=o.parameters)==null?void 0:A.docs)==null?void 0:L.description}}};var $,z,E,G,O;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source},description:{story:'`Layout=Scrollable`: ≥ 5 tab hoặc nhãn dài — tab hug, cuộn ngang, padding trái 16, cắt mép phải. Tab Active tự cuộn vào tầm nhìn (mở story là tab "Chính sách huỷ phòng" đã được kéo vào).',...(O=(G=c.parameters)==null?void 0:G.docs)==null?void 0:O.description}}};var X,N,J,K,Q;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'TabBar · icon và badge',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [v, setV] = useState('uu-dai');
    return <div style={{
      width: 390
    }}>
        <TabBar value={v} onChange={setV} aria-label="Ví của tôi" items={[{
        value: 'uu-dai',
        label: 'Ưu đãi',
        icon: 'gift'
      }, {
        value: 've',
        label: 'Vé',
        icon: 'ticket',
        badge: true
      }, {
        value: 'diem',
        label: 'Điểm',
        icon: 'star'
      }]} />
      </div>;
  }
}`,...(J=(N=i.parameters)==null?void 0:N.docs)==null?void 0:J.source},description:{story:'Icon 16 trước chữ (gap 8) và Dot "có mới" sau chữ (gap 4). Cao tab vẫn 48. Nhãn tự đủ nghĩa — badge chỉ là thông tin phụ, screen reader đọc thêm "có mới".',...(Q=(K=i.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};const Y=["Playground","Matrix","IndicatorFixed","Bar","ThreeTabs","Scrollable","IconBadge"],ne=Object.freeze(Object.defineProperty({__proto__:null,Bar:l,IconBadge:i,IndicatorFixed:s,Matrix:r,Playground:d,Scrollable:c,ThreeTabs:o,__namedExportsOrder:Y,default:W},Symbol.toStringTag,{value:"Module"}));export{l as B,s as I,r as M,d as P,ne as S,o as T,c as a,i as b};

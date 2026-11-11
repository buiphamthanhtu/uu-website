import{j as e,S as W,r as p,F as m}from"./iframe-ROCLD28a.js";import{D as a}from"./Dropdown-BCj6xJbX.js";import{M as F}from"./SearchInput-CimSGt-6.js";const I={title:"Component/Lựa chọn/Dropdown",component:a,args:{label:"Tỉnh / Thành phố",value:"",placeholder:"Bấm để chọn",error:!1,errorMessage:"Error message",disabled:!1,fixedWidth:!1},argTypes:{state:{control:"select",options:[void 0,"default","hover"]},onOpen:{action:"open"}},render:o=>e.jsx("div",{style:{width:358,maxWidth:m},children:e.jsx(a,{...o})})},d={},c={name:"8 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(W,{style:{width:187},children:[e.jsx(a,{label:"Empty · Default"}),e.jsx(a,{label:"Empty · Hover",state:"hover"}),e.jsx(a,{label:"Empty · Error",error:!0,errorMessage:"Error message"}),e.jsx(a,{label:"Filled · Default",value:"Data"}),e.jsx(a,{label:"Filled · Hover",value:"Data",state:"hover"}),e.jsx(a,{label:"Filled · Error",value:"Data",error:!0,errorMessage:"Error message"}),e.jsx(a,{label:"Empty · Disabled",disabled:!0}),e.jsx(a,{label:"Filled · Disabled",value:"Data",disabled:!0})]})},g=[{value:"hn",label:"Hà Nội"},{value:"hcm",label:"TP. Hồ Chí Minh"},{value:"dn",label:"Đà Nẵng"},{value:"hp",label:"Hải Phòng"},{value:"ct",label:"Cần Thơ",disabled:!0}],n={name:"Mở danh sách (panel)",parameters:{controls:{disable:!0}},render:()=>{const[o,s]=p.useState(!1),[l,h]=p.useState(void 0),i=g.find(t=>t.value===l);return e.jsx("div",{style:{width:358,maxWidth:m,minHeight:320},children:e.jsx(a,{label:"Tỉnh / Thành phố",value:i?String(i.label):"",open:o,onOpen:()=>s(t=>!t),onClose:()=>s(!1),menu:e.jsx(F,{"aria-label":"Tỉnh / Thành phố",options:g,value:l,onSelect:h})})})}},r={name:"Option có mô tả",parameters:{controls:{disable:!0}},render:()=>{const[o,s]=p.useState(!0),[l,h]=p.useState("tieu-chuan"),i=[{value:"tieu-chuan",label:"Giao tiêu chuẩn",description:"Nhận hàng trong 3–5 ngày"},{value:"nhanh",label:"Giao nhanh",description:"Nhận hàng trong 24 giờ, áp dụng nội thành"},{value:"hoa-toc",label:"Hoả tốc",description:"Chỉ áp dụng đơn đặt trước 15:00",disabled:!0}],t=i.find(u=>u.value===l);return e.jsx("div",{style:{width:358,maxWidth:m,minHeight:300},children:e.jsx(a,{label:"Hình thức giao hàng",value:t?String(t.label):"",open:o,onOpen:()=>s(u=>!u),onClose:()=>s(!1),menu:e.jsx(F,{"aria-label":"Hình thức giao hàng",options:i,value:l,onSelect:h})})})}};var b,v,D;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(D=(v=d.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var S,x,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '8 variant',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack style={{
    width: 187
  }}>
      <Dropdown label="Empty · Default" />
      <Dropdown label="Empty · Hover" state="hover" />
      <Dropdown label="Empty · Error" error errorMessage="Error message" />
      <Dropdown label="Filled · Default" value="Data" />
      <Dropdown label="Filled · Hover" value="Data" state="hover" />
      <Dropdown label="Filled · Error" value="Data" error errorMessage="Error message" />
      <Dropdown label="Empty · Disabled" disabled />
      <Dropdown label="Filled · Disabled" value="Data" disabled />
    </Stack>
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,E,j,T,O;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Mở danh sách (panel)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [v, setV] = useState<string | undefined>(undefined);
    const picked = CITIES.find(o => o.value === v);
    return <div style={{
      width: 358,
      maxWidth: FIT,
      minHeight: 320
    }}>
        <Dropdown label="Tỉnh / Thành phố" value={picked ? String(picked.label) : ''} open={open} onOpen={() => setOpen(o => !o)} onClose={() => setOpen(false)} menu={<Menu aria-label="Tỉnh / Thành phố" options={CITIES} value={v} onSelect={setV} />} />
      </div>;
  }
}`,...(j=(E=n.parameters)==null?void 0:E.docs)==null?void 0:j.source},description:{story:"Prop `menu`: ô tự neo `Menu` Panel dưới mình — cách 4, rộng bằng ô, lật lên khi phía dưới thiếu chỗ, cao tối đa 320.\nChọn xong thì đóng; bấm ra ngoài, Esc, hoặc Tab ra khỏi ô cũng đóng.",...(O=(T=n.parameters)==null?void 0:T.docs)==null?void 0:O.description}}};var w,H,M,k,C;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Option có mô tả',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    const [v, setV] = useState<string | undefined>('tieu-chuan');
    const options: MenuOption[] = [{
      value: 'tieu-chuan',
      label: 'Giao tiêu chuẩn',
      description: 'Nhận hàng trong 3–5 ngày'
    }, {
      value: 'nhanh',
      label: 'Giao nhanh',
      description: 'Nhận hàng trong 24 giờ, áp dụng nội thành'
    }, {
      value: 'hoa-toc',
      label: 'Hoả tốc',
      description: 'Chỉ áp dụng đơn đặt trước 15:00',
      disabled: true
    }];
    const picked = options.find(o => o.value === v);
    return <div style={{
      width: 358,
      maxWidth: FIT,
      minHeight: 300
    }}>
        <Dropdown label="Hình thức giao hàng" value={picked ? String(picked.label) : ''} open={open} onOpen={() => setOpen(o => !o)} onClose={() => setOpen(false)} menu={<Menu aria-label="Hình thức giao hàng" options={options} value={v} onSelect={setV} />} />
      </div>;
  }
}`,...(M=(H=r.parameters)==null?void 0:H.docs)==null?void 0:M.source},description:{story:"Option có mô tả: dòng thứ hai `caption` `object-secondary`, tối đa 2 dòng; hàng cao theo nội dung.",...(C=(k=r.parameters)==null?void 0:k.docs)==null?void 0:C.description}}};const V=["Playground","Variants","WithMenu","WithDescription"],G=Object.freeze(Object.defineProperty({__proto__:null,Playground:d,Variants:c,WithDescription:r,WithMenu:n,__namedExportsOrder:V,default:I},Symbol.toStringTag,{value:"Module"}));export{d as P,G as S,c as V,n as W,r as a};

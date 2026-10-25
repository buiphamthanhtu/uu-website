import{j as e,r as p}from"./iframe-6vwN6wb9.js";import{D as a}from"./Dropdown-L1BYtwtq.js";import{M as C}from"./SearchInput-DzxMgUfj.js";import{S as V}from"./layout-nPJ89kCs.js";const F={title:"Component/Lựa chọn/Dropdown",component:a,args:{label:"Tỉnh / Thành phố",value:"",placeholder:"Bấm để chọn",error:!1,errorMessage:"Error message",disabled:!1,fixedWidth:!1},argTypes:{state:{control:"select",options:[void 0,"default","hover"]},onOpen:{action:"open"}},render:o=>e.jsx("div",{style:{width:358},children:e.jsx(a,{...o})})},d={},c={name:"8 variant",parameters:{controls:{disable:!0}},render:()=>e.jsxs(V,{style:{width:187},children:[e.jsx(a,{label:"Empty · Default"}),e.jsx(a,{label:"Empty · Hover",state:"hover"}),e.jsx(a,{label:"Empty · Error",error:!0,errorMessage:"Error message"}),e.jsx(a,{label:"Filled · Default",value:"Data"}),e.jsx(a,{label:"Filled · Hover",value:"Data",state:"hover"}),e.jsx(a,{label:"Filled · Error",value:"Data",error:!0,errorMessage:"Error message"}),e.jsx(a,{label:"Empty · Disabled",disabled:!0}),e.jsx(a,{label:"Filled · Disabled",value:"Data",disabled:!0})]})},m=[{value:"hn",label:"Hà Nội"},{value:"hcm",label:"TP. Hồ Chí Minh"},{value:"dn",label:"Đà Nẵng"},{value:"hp",label:"Hải Phòng"},{value:"ct",label:"Cần Thơ",disabled:!0}],t={name:"Mở danh sách (panel)",parameters:{controls:{disable:!0}},render:()=>{const[o,s]=p.useState(!1),[l,h]=p.useState(void 0),i=m.find(n=>n.value===l);return e.jsx("div",{style:{width:358,minHeight:320},children:e.jsx(a,{label:"Tỉnh / Thành phố",value:i?String(i.label):"",open:o,onOpen:()=>s(n=>!n),onClose:()=>s(!1),menu:e.jsx(C,{"aria-label":"Tỉnh / Thành phố",options:m,value:l,onSelect:h})})})}},r={name:"Option có mô tả",parameters:{controls:{disable:!0}},render:()=>{const[o,s]=p.useState(!0),[l,h]=p.useState("tieu-chuan"),i=[{value:"tieu-chuan",label:"Giao tiêu chuẩn",description:"Nhận hàng trong 3–5 ngày"},{value:"nhanh",label:"Giao nhanh",description:"Nhận hàng trong 24 giờ, áp dụng nội thành"},{value:"hoa-toc",label:"Hoả tốc",description:"Chỉ áp dụng đơn đặt trước 15:00",disabled:!0}],n=i.find(u=>u.value===l);return e.jsx("div",{style:{width:358,minHeight:300},children:e.jsx(a,{label:"Hình thức giao hàng",value:n?String(n.label):"",open:o,onOpen:()=>s(u=>!u),onClose:()=>s(!1),menu:e.jsx(C,{"aria-label":"Hình thức giao hàng",options:i,value:l,onSelect:h})})})}};var g,b,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var D,S,f;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,x,E,j,O;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      minHeight: 320
    }}>
        <Dropdown label="Tỉnh / Thành phố" value={picked ? String(picked.label) : ''} open={open} onOpen={() => setOpen(o => !o)} onClose={() => setOpen(false)} menu={<Menu aria-label="Tỉnh / Thành phố" options={CITIES} value={v} onSelect={setV} />} />
      </div>;
  }
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source},description:{story:"Prop `menu`: ô tự neo `Menu` Panel dưới mình — cách 4, rộng bằng ô, lật lên khi phía dưới thiếu chỗ, cao tối đa 320.\nChọn xong thì đóng; bấm ra ngoài, Esc, hoặc Tab ra khỏi ô cũng đóng.",...(O=(j=t.parameters)==null?void 0:j.docs)==null?void 0:O.description}}};var w,T,H,M,k;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      minHeight: 300
    }}>
        <Dropdown label="Hình thức giao hàng" value={picked ? String(picked.label) : ''} open={open} onOpen={() => setOpen(o => !o)} onClose={() => setOpen(false)} menu={<Menu aria-label="Hình thức giao hàng" options={options} value={v} onSelect={setV} />} />
      </div>;
  }
}`,...(H=(T=r.parameters)==null?void 0:T.docs)==null?void 0:H.source},description:{story:"Option có mô tả: dòng thứ hai `caption` `object-secondary`, tối đa 2 dòng; hàng cao theo nội dung.",...(k=(M=r.parameters)==null?void 0:M.docs)==null?void 0:k.description}}};const P=["Playground","Variants","WithMenu","WithDescription"],G=Object.freeze(Object.defineProperty({__proto__:null,Playground:d,Variants:c,WithDescription:r,WithMenu:t,__namedExportsOrder:P,default:F},Symbol.toStringTag,{value:"Module"}));export{d as P,G as S,c as V,t as W,r as a};

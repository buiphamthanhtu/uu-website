import{r as t,j as e,T as x}from"./iframe-CS8d8swY.js";import{C as b,B as y}from"./BottomSheet-BB6hD2NN.js";import{R as v}from"./Radio-BO1c3skW.js";import{T as te}from"./TextInput-84xt38bh.js";import{P as U,R as re,C as oe}from"./layout-BVaZ_bLP.js";const se={title:"Component/Chứa đựng/BottomSheet",component:b,args:{header:"Header",cta:{primary:{label:"Xác nhận"},secondary:{label:"Huỷ"}},handle:!1},argTypes:{onClose:{action:"close"},onBack:{action:"back"},onHeightChange:{action:"height"},height:{control:"radio",options:[void 0,"fit","full"]}},render:a=>e.jsx("div",{style:{width:366,maxWidth:"calc(100vw - 2 * var(--gap-4))",height:480,display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:e.jsx(b,{...a,children:e.jsx("p",{className:"uu-text-body",style:{margin:0},children:"Nội dung đặt vào Slot."})})})},c={args:{onBack:void 0}},C=["An Giang","Bà Rịa – Vũng Tàu","Bắc Giang","Bắc Ninh","Bến Tre","Bình Dương","Bình Định","Cà Mau","Cần Thơ","Đà Nẵng","Đắk Lắk","Đồng Nai","Hà Nội","Hải Phòng","Huế","Khánh Hoà","Lâm Đồng","Nghệ An","Quảng Ninh","TP. Hồ Chí Minh"],Y=({count:a=C.length})=>e.jsx("ul",{className:"uu-text-body",style:{margin:0,paddingLeft:"var(--gap-4)"},children:C.slice(0,a).map(n=>e.jsx("li",{children:n},n))}),r={name:"Navigation × Height",parameters:{controls:{disable:!0}},render:()=>e.jsx(re,{align:"flex-start",children:["close","back"].map(a=>["fit","full"].map(n=>e.jsx(oe,{label:`Navigation=${a==="close"?"Close":"Back"} · Height=${n==="fit"?"Fit":"Full"}`,children:e.jsx("div",{style:{width:366,maxWidth:"calc(100vw - 2 * var(--gap-4) - 2 * var(--gap-2))",height:480,display:"flex",flexDirection:"column",justifyContent:"flex-end",background:"var(--background-muted)",padding:"var(--gap-3)",boxSizing:"border-box",borderRadius:"var(--rounded-2xl)"},children:e.jsx(b,{header:a==="close"?"Chọn tỉnh":"Chọn huyện",onBack:a==="back"?()=>{}:void 0,handle:!0,height:n,cta:{primary:{label:"Xác nhận"},secondary:{label:"Huỷ"}},children:n==="full"?e.jsx(Y,{}):e.jsx("p",{className:"uu-text-body",style:{margin:0},children:"Nội dung đặt vào Slot."})})})},`${a}-${n}`)))})},i={name:"CardSheet · Navigation=Back",args:{header:"Chọn ngân hàng",onBack:()=>{}}},d={name:"CTA=false",args:{cta:!1,onBack:void 0}},h={name:"Xác nhận phá huỷ (Tone=Danger)",args:{header:"Huỷ đơn hàng?",onBack:void 0,cta:{tone:"danger",primary:{label:"Huỷ đơn"},secondary:{label:"Giữ lại"}}}},u={name:"Sheet trên màn hình (scrim + blur)",parameters:{controls:{disable:!0}},render:()=>{const[a,n]=t.useState(!0),[p,m]=t.useState("a");return e.jsxs(U,{height:720,children:[e.jsxs("div",{style:{padding:"var(--gap-4)"},children:[e.jsx("p",{className:"uu-text-body",children:"Nền màn hình vẫn đọc được qua scrim đen 10% + blur 16."}),e.jsx(x,{onClick:()=>n(!0),children:"Mở sheet"})]}),e.jsx(y,{open:a,onClose:()=>n(!1),header:"Xoá tài khoản",cta:{tone:"danger",primary:{label:"Xoá tài khoản"},secondary:{label:"Huỷ",onClick:()=>n(!1)}},children:e.jsx(v,{"aria-label":"Lý do",value:p,onChange:m,options:[{value:"a",label:"Tôi không còn nhu cầu sử dụng"},{value:"b",label:"Ứng dụng khó dùng"},{value:"c",label:"Lý do khác"}]})})]})}},o={name:"Sheet kéo được (Handle)",parameters:{controls:{disable:!0}},render:()=>{const[a,n]=t.useState(!0);return e.jsxs(U,{height:720,children:[e.jsx("div",{style:{padding:"var(--gap-4)"},children:e.jsx(x,{onClick:()=>n(!0),children:"Mở sheet"})}),e.jsx(y,{open:a,onClose:()=>n(!1),header:"Chọn tỉnh",handle:!0,cta:{primary:{label:"Xác nhận",onClick:()=>n(!1)}},children:e.jsx(Y,{count:10})})]})}},s={name:"Vị trí (placement) × density × DNA",parameters:{controls:{disable:!0}},render:()=>{const[a,n]=t.useState(!0),[p,m]=t.useState("touch"),[g,ee]=t.useState("center"),[f,ne]=t.useState(!0),ae=f?{"--border-outer-width":"2px","--elevation-none":"2px 2px 0 2px var(--object-primary)"}:void 0;return e.jsxs("div",{"data-density":p,style:{...ae,position:"relative",width:900,maxWidth:"calc(100vw - 2 * var(--gap-4) - 2px)",height:560,transform:"translateZ(0)",border:"1px solid var(--border)",borderRadius:"var(--rounded-lg)",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"var(--gap-4)",display:"flex",flexDirection:"column",gap:"var(--gap-3)"},children:[e.jsx(v,{"aria-label":"density",value:p,onChange:l=>m(l),options:[{value:"touch",label:"density Touch"},{value:"compact",label:"density Compact"}]}),e.jsx(v,{"aria-label":"placement",value:g,onChange:l=>ee(l),options:[{value:"auto",label:"placement bỏ trống (theo density)"},{value:"bottom",label:'placement="bottom"'},{value:"center",label:'placement="center"'}]}),e.jsxs("label",{className:"uu-text-body",children:[e.jsx("input",{type:"checkbox",checked:f,onChange:l=>ne(l.target.checked)})," DNA viền ngoài 2 + bóng cứng"]}),e.jsx(x,{onClick:()=>n(!0),children:"Mở sheet"})]}),e.jsx(y,{open:a,onClose:()=>n(!1),placement:g==="auto"?void 0:g,header:"Đổi tên",cta:{primary:{label:"Lưu",onClick:()=>n(!1)},secondary:{label:"Huỷ",onClick:()=>n(!1)}},children:e.jsx(te,{label:"Tên hiển thị",defaultValue:"Cẩm nang Nô"})})]})}};var k,S,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    onBack: undefined
  }
}`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var j,N,T,H,D;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Navigation × Height',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row align="flex-start">
      {(['close', 'back'] as const).map(nav => (['fit', 'full'] as const).map(h => <Cell key={\`\${nav}-\${h}\`} label={\`Navigation=\${nav === 'close' ? 'Close' : 'Back'} · Height=\${h === 'fit' ? 'Fit' : 'Full'}\`}>
          <div style={{
        width: 366,
        maxWidth: 'calc(100vw - 2 * var(--gap-4) - 2 * var(--gap-2))',
        height: 480,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        background: 'var(--background-muted)',
        padding: 'var(--gap-3)',
        boxSizing: 'border-box',
        borderRadius: 'var(--rounded-2xl)'
      }}>
            <CardSheet header={nav === 'close' ? 'Chọn tỉnh' : 'Chọn huyện'} onBack={nav === 'back' ? () => {} : undefined} handle height={h} cta={{
          primary: {
            label: 'Xác nhận'
          },
          secondary: {
            label: 'Huỷ'
          }
        }}>
              {h === 'full' ? <List /> : <p className="uu-text-body" style={{
            margin: 0
          }}>Nội dung đặt vào Slot.</p>}
            </CardSheet>
          </div>
        </Cell>))}
    </Row>
}`,...(T=(N=r.parameters)==null?void 0:N.docs)==null?void 0:T.source},description:{story:"Ma trận 4 variant: Navigation × Height (Handle bật). Khung cao 480 thay cho màn — `Full` cao bằng khung.",...(D=(H=r.parameters)==null?void 0:H.docs)==null?void 0:D.description}}};var O,P,w;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'CardSheet · Navigation=Back',
  args: {
    header: 'Chọn ngân hàng',
    onBack: () => {}
  }
}`,...(w=(P=i.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var A,L,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'CTA=false',
  args: {
    cta: false,
    onBack: undefined
  }
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var F,M,X;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Xác nhận phá huỷ (Tone=Danger)',
  args: {
    header: 'Huỷ đơn hàng?',
    onBack: undefined,
    cta: {
      tone: 'danger',
      primary: {
        label: 'Huỷ đơn'
      },
      secondary: {
        label: 'Giữ lại'
      }
    }
  }
}`,...(X=(M=h.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var V,$,I;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Sheet trên màn hình (scrim + blur)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    const [v, setV] = useState('a');
    return <PhoneFrame height={720}>
        <div style={{
        padding: 'var(--gap-4)'
      }}>
          <p className="uu-text-body">Nền màn hình vẫn đọc được qua scrim đen 10% + blur 16.</p>
          <TextButtonAccent onClick={() => setOpen(true)}>Mở sheet</TextButtonAccent>
        </div>
        <BottomSheet open={open} onClose={() => setOpen(false)} header="Xoá tài khoản" cta={{
        tone: 'danger',
        primary: {
          label: 'Xoá tài khoản'
        },
        secondary: {
          label: 'Huỷ',
          onClick: () => setOpen(false)
        }
      }}>
          <RadioList aria-label="Lý do" value={v} onChange={setV} options={[{
          value: 'a',
          label: 'Tôi không còn nhu cầu sử dụng'
        }, {
          value: 'b',
          label: 'Ứng dụng khó dùng'
        }, {
          value: 'c',
          label: 'Lý do khác'
        }]} />
        </BottomSheet>
      </PhoneFrame>;
  }
}`,...(I=($=u.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var _,W,E,G,q;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Sheet kéo được (Handle)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return <PhoneFrame height={720}>
        <div style={{
        padding: 'var(--gap-4)'
      }}>
          <TextButtonAccent onClick={() => setOpen(true)}>Mở sheet</TextButtonAccent>
        </div>
        <BottomSheet open={open} onClose={() => setOpen(false)} header="Chọn tỉnh" handle cta={{
        primary: {
          label: 'Xác nhận',
          onClick: () => setOpen(false)
        }
      }}>
          <List count={10} />
        </BottomSheet>
      </PhoneFrame>;
  }
}`,...(E=(W=o.parameters)==null?void 0:W.docs)==null?void 0:E.source},description:{story:"Kéo thanh lên → Full; kéo xuống ở Full → Fit; kéo xuống ở Fit quá 1/3 → đóng. Tab tới thanh rồi Enter để đổi nấc.",...(q=(G=o.parameters)==null?void 0:G.docs)==null?void 0:q.description}}};var z,K,Z,Q,J;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Vị trí (placement) × density × DNA',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    const [density, setDensity] = useState<'touch' | 'compact'>('touch');
    const [placement, setPlacement] = useState<'auto' | 'bottom' | 'center'>('center');
    const [dna, setDna] = useState(true);
    const dnaStyle = dna ? {
      '--border-outer-width': '2px',
      '--elevation-none': '2px 2px 0 2px var(--object-primary)'
    } as React.CSSProperties : undefined;
    return <div data-density={density} style={{
      ...dnaStyle,
      position: 'relative',
      width: 900,
      maxWidth: 'calc(100vw - 2 * var(--gap-4) - 2px)',
      height: 560,
      transform: 'translateZ(0)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--rounded-lg)',
      overflow: 'hidden'
    }}>
        <div style={{
        padding: 'var(--gap-4)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--gap-3)'
      }}>
          <RadioList aria-label="density" value={density} onChange={v => setDensity(v as 'touch' | 'compact')} options={[{
          value: 'touch',
          label: 'density Touch'
        }, {
          value: 'compact',
          label: 'density Compact'
        }]} />
          <RadioList aria-label="placement" value={placement} onChange={v => setPlacement(v as 'auto' | 'bottom' | 'center')} options={[{
          value: 'auto',
          label: 'placement bỏ trống (theo density)'
        }, {
          value: 'bottom',
          label: 'placement="bottom"'
        }, {
          value: 'center',
          label: 'placement="center"'
        }]} />
          <label className="uu-text-body"><input type="checkbox" checked={dna} onChange={e => setDna(e.target.checked)} /> DNA viền ngoài 2 + bóng cứng</label>
          <TextButtonAccent onClick={() => setOpen(true)}>Mở sheet</TextButtonAccent>
        </div>
        <BottomSheet open={open} onClose={() => setOpen(false)} placement={placement === 'auto' ? undefined : placement} header="Đổi tên" cta={{
        primary: {
          label: 'Lưu',
          onClick: () => setOpen(false)
        },
        secondary: {
          label: 'Huỷ',
          onClick: () => setOpen(false)
        }
      }}>
          <TextInput label="Tên hiển thị" defaultValue="Cẩm nang Nô" />
        </BottomSheet>
      </div>;
  }
}`,...(Z=(K=s.parameters)==null?void 0:K.docs)==null?void 0:Z.source},description:{story:"Vị trí sheet (spec 6.8): `placement` bỏ trống thì theo density (Touch → đáy, Compact → giữa màn, rộng tối đa 480);\ntruyền tay thì thắng density. Bật DNA viền ngoài để thấy ô nhập trong Slot không bị cắt viền và bóng.",...(J=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:J.description}}};const le=["Playground","Matrix","Back","NoCta","Danger","InScreen","Draggable","Placement"],pe=Object.freeze(Object.defineProperty({__proto__:null,Back:i,Danger:h,Draggable:o,InScreen:u,Matrix:r,NoCta:d,Placement:s,Playground:c,__namedExportsOrder:le,default:se},Symbol.toStringTag,{value:"Module"}));export{i as B,h as D,u as I,r as M,d as N,c as P,pe as S,o as a};

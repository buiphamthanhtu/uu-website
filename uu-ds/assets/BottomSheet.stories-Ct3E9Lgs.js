import{r as d,j as e,T as $}from"./iframe-6vwN6wb9.js";import{C as h,B as w}from"./BottomSheet-B8yp7CjB.js";import{R as V}from"./Radio-W97mCUrY.js";import{P as _,R as q,C as z}from"./layout-nPJ89kCs.js";const K={title:"Component/Chứa đựng/BottomSheet",component:h,args:{header:"Header",cta:{primary:{label:"Xác nhận"},secondary:{label:"Huỷ"}},handle:!1},argTypes:{onClose:{action:"close"},onBack:{action:"back"},onHeightChange:{action:"height"},height:{control:"radio",options:[void 0,"fit","full"]}},render:a=>e.jsx("div",{style:{width:366,height:480,display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:e.jsx(h,{...a,children:e.jsx("p",{className:"uu-text-body",style:{margin:0},children:"Nội dung đặt vào Slot."})})})},o={args:{onBack:void 0}},u=["An Giang","Bà Rịa – Vũng Tàu","Bắc Giang","Bắc Ninh","Bến Tre","Bình Dương","Bình Định","Cà Mau","Cần Thơ","Đà Nẵng","Đắk Lắk","Đồng Nai","Hà Nội","Hải Phòng","Huế","Khánh Hoà","Lâm Đồng","Nghệ An","Quảng Ninh","TP. Hồ Chí Minh"],E=({count:a=u.length})=>e.jsx("ul",{className:"uu-text-body",style:{margin:0,paddingLeft:"var(--gap-4)"},children:u.slice(0,a).map(n=>e.jsx("li",{children:n},n))}),t={name:"Navigation × Height",parameters:{controls:{disable:!0}},render:()=>e.jsx(q,{align:"flex-start",children:["close","back"].map(a=>["fit","full"].map(n=>e.jsx(z,{label:`Navigation=${a==="close"?"Close":"Back"} · Height=${n==="fit"?"Fit":"Full"}`,children:e.jsx("div",{style:{width:366,height:480,display:"flex",flexDirection:"column",justifyContent:"flex-end",background:"var(--background-muted)",padding:"var(--gap-3)",boxSizing:"border-box",borderRadius:"var(--rounded-2xl)"},children:e.jsx(h,{header:a==="close"?"Chọn tỉnh":"Chọn huyện",onBack:a==="back"?()=>{}:void 0,handle:!0,height:n,cta:{primary:{label:"Xác nhận"},secondary:{label:"Huỷ"}},children:n==="full"?e.jsx(E,{}):e.jsx("p",{className:"uu-text-body",style:{margin:0},children:"Nội dung đặt vào Slot."})})})},`${a}-${n}`)))})},s={name:"CardSheet · Navigation=Back",args:{header:"Chọn ngân hàng",onBack:()=>{}}},l={name:"CTA=false",args:{cta:!1,onBack:void 0}},c={name:"Xác nhận phá huỷ (Tone=Danger)",args:{header:"Huỷ đơn hàng?",onBack:void 0,cta:{tone:"danger",primary:{label:"Huỷ đơn"},secondary:{label:"Giữ lại"}}}},i={name:"Sheet trên màn hình (scrim + blur)",parameters:{controls:{disable:!0}},render:()=>{const[a,n]=d.useState(!0),[G,I]=d.useState("a");return e.jsxs(_,{height:720,children:[e.jsxs("div",{style:{padding:"var(--gap-4)"},children:[e.jsx("p",{className:"uu-text-body",children:"Nền màn hình vẫn đọc được qua scrim đen 10% + blur 16."}),e.jsx($,{onClick:()=>n(!0),children:"Mở sheet"})]}),e.jsx(w,{open:a,onClose:()=>n(!1),header:"Xoá tài khoản",cta:{tone:"danger",primary:{label:"Xoá tài khoản"},secondary:{label:"Huỷ",onClick:()=>n(!1)}},children:e.jsx(V,{"aria-label":"Lý do",value:G,onChange:I,options:[{value:"a",label:"Tôi không còn nhu cầu sử dụng"},{value:"b",label:"Ứng dụng khó dùng"},{value:"c",label:"Lý do khác"}]})})]})}},r={name:"Sheet kéo được (Handle)",parameters:{controls:{disable:!0}},render:()=>{const[a,n]=d.useState(!0);return e.jsxs(_,{height:720,children:[e.jsx("div",{style:{padding:"var(--gap-4)"},children:e.jsx($,{onClick:()=>n(!0),children:"Mở sheet"})}),e.jsx(w,{open:a,onClose:()=>n(!1),header:"Chọn tỉnh",handle:!0,cta:{primary:{label:"Xác nhận",onClick:()=>n(!1)}},children:e.jsx(E,{count:10})})]})}};var g,p,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    onBack: undefined
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,x,v,k,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:"Ma trận 4 variant: Navigation × Height (Handle bật). Khung cao 480 thay cho màn — `Full` cao bằng khung.",...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.description}}};var f,C,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'CardSheet · Navigation=Back',
  args: {
    header: 'Chọn ngân hàng',
    onBack: () => {}
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var B,j,N;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'CTA=false',
  args: {
    cta: false,
    onBack: undefined
  }
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var H,T,F;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(T=c.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var O,L,P;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var D,M,R,X,A;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(M=r.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"Kéo thanh lên → Full; kéo xuống ở Full → Fit; kéo xuống ở Fit quá 1/3 → đóng. Tab tới thanh rồi Enter để đổi nấc.",...(A=(X=r.parameters)==null?void 0:X.docs)==null?void 0:A.description}}};const Q=["Playground","Matrix","Back","NoCta","Danger","InScreen","Draggable"],Z=Object.freeze(Object.defineProperty({__proto__:null,Back:s,Danger:c,Draggable:r,InScreen:i,Matrix:t,NoCta:l,Playground:o,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{s as B,c as D,i as I,t as M,l as N,o as P,Z as S,r as a};

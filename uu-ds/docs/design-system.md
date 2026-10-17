# UU DS — Design System Specification

> Spec đầy đủ của **UU Design System** (UU DS). Mọi giá trị dưới đây khớp với `tokens.css` / `tokens.json` cùng thư mục.
> Đơn vị mặc định: **px**. Base rem = 16px.

---

## 0. Cách dùng file này

**Nếu bạn là AI được giao build prototype:** đọc hết mục 1–3 trước khi viết dòng code đầu tiên. Bốn quy tắc bắt buộc:

1. **Không bao giờ hardcode màu hex.** Luôn dùng token semantic (`background-interactive`, `object-primary`…). Token semantic → token primitive → hex. Hardcode hex = sai spec.
2. **Brand mode**: màu thương hiệu nằm gọn trong một nhóm token (xem 2.5). Component **không được** biết mình đang ở brand nào — đổi brand là đổi một lớp CSS/theme, không sửa component.
3. **Hover/Pressed đi qua state layer**, không đổi nền, màu chữ hay font-weight. Xem mục 6.0 — đây là cơ chế trung tâm của hệ thống, làm sai là sai toàn bộ tương tác.
4. **Chỉ build những gì có trong mục 5.** File này chỉ chứa phần đã chốt. Thứ gì không có ở đây nghĩa là chưa chốt — hỏi lại, đừng suy đoán.

Kèm theo file này trong cùng thư mục `references/`:
- `tokens.css` — CSS custom properties, kèm sẵn recipe state layer và component
- `tokens.json` — toàn bộ token dạng máy đọc (DTCG-style), dùng khi cần sinh sang nền tảng khác
- `tailwind.js` — chỉ dùng nếu dự án chạy Tailwind
- `icons.md` + `uu-icon-index.json` — bộ **UU icon**

---

## 1. Kiến trúc token

Hệ thống dùng **2 tầng** rõ ràng:

```
core                    → primitive: rem, size, color ramp (79), opacity
  ├─ color (57 token)   → semantic, theo brand mode (hiện có 1 mode: uu)
  ├─ typography         → font size/weight/family/line-height, 2 mode: Default | Active
  ├─ gap                → spacing
  └─ radius             → bo góc
```

Quy ước đặt tên semantic: `{vai-trò}-{biến-thể}`
- `background-*` → nền frame/shape
- `object-*` → màu của nội dung (text, icon, vector)
- `border-*` → màu stroke
- Hậu tố `-muted` = nhạt hơn, `-emphasized` = đậm hơn, `-inverted` = dùng trên nền tối, `-on-X` = nội dung nằm trên nền X

Mỗi token có phạm vi dùng rõ ràng — nền, chữ, viền, gap, radius. Đừng lấy token nền tô chữ hay ngược lại.

---

## 2. Color

> **Màu thương hiệu UU** (đã chốt theo file Figma UU DLS): `interactive` → ramp **indigo**,
> `accent` → ramp **blue**, nền và viền trung tính → ramp **slate**. Nhóm token thương hiệu in đậm
> trong bảng 2.2, liệt kê đủ ở 2.5. Đổi màu thương hiệu thì chỉ đổi đúng nhóm này trong
> `tokens.css` / `tokens.json` rồi đo lại contrast ở 2.3. Không component nào phải sửa.

### 2.1 Primitive ramp (`core/color/*`)

Mỗi ramp có 11 bậc: `05 10 20 30 40 50 60 70 80 90 95`.

| Ramp | 05 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| neutral | `#FAFAFA` | `#F5F5F5` | `#E5E5E5` | `#D4D4D4` | `#A3A3A3` | `#737373` | `#525252` | `#404040` | `#262626` | `#171717` | `#0A0A0A` |
| slate | `#F8FAFC` | `#F1F5F9` | `#E2E8F0` | `#CBD5E1` | `#94A3B8` | `#64748B` | `#475569` | `#334155` | `#1E293B` | `#0F172A` | `#020617` |
| red | `#FEF2F2` | `#FEE2E2` | `#FECACA` | `#FCA5A5` | `#F87171` | `#EF4444` | `#DC2626` | `#B91C1C` | `#991B1B` | `#7F1D1D` | `#450A0A` |
| orange | `#FFF7ED` | `#FFEDD5` | `#FED7AA` | `#FDBA74` | `#FB923C` | `#F97316` | `#EA580C` | `#C2410C` | `#9A3412` | `#7C2D12` | `#431407` |
| amber | `#FFFBEB` | `#FEF3C7` | `#FDE68A` | `#FCD34D` | `#FBBF24` | `#F59E0B` | `#D97706` | `#B45309` | `#92400E` | `#78350F` | `#451A03` |
| yellow | `#FEFCE8` | `#FEF9C3` | `#FEF08A` | `#FDE047` | `#FACC15` | `#EAB308` | `#CA8A04` | `#A16207` | `#854D0E` | `#713F12` | `#422006` |
| lime | `#F7FEE7` | `#ECFCCB` | `#D9F99D` | `#BEF264` | `#A3E635` | `#84CC16` | `#65A30D` | `#4D7C0F` | `#3F6212` | `#365314` | `#1A2E05` |
| green | `#F0FDF4` | `#DCFCE7` | `#BBF7D0` | `#86EFAC` | `#4ADE80` | `#22C55E` | `#16A34A` | `#15803D` | `#166534` | `#14532D` | `#052E16` |
| emerald | `#ECFDF5` | `#D1FAE5` | `#A7F3D0` | `#6EE7B7` | `#34D399` | `#10B981` | `#059669` | `#047857` | `#065F46` | `#064E3B` | `#022C22` |
| teal | `#F0FDFA` | `#CCFBF1` | `#99F6E4` | `#5EEAD4` | `#2DD4BF` | `#14B8A6` | `#0D9488` | `#0F766E` | `#115E59` | `#134E4A` | `#042F2E` |
| cyan | `#ECFEFF` | `#CFFAFE` | `#A5F3FC` | `#67E8F9` | `#22D3EE` | `#06B6D4` | `#0891B2` | `#0E7490` | `#155E75` | `#164E63` | `#083344` |
| sky | `#F0F9FF` | `#E0F2FE` | `#BAE6FD` | `#7DD3FC` | `#38BDF8` | `#0EA5E9` | `#0284C7` | `#0369A1` | `#075985` | `#0C4A6E` | `#082F49` |
| blue | `#EFF6FF` | `#DBEAFE` | `#BFDBFE` | `#93C5FD` | `#60A5FA` | `#3B82F6` | `#2563EB` | `#1D4ED8` | `#1E40AF` | `#1E3A8A` | `#172554` |
| indigo | `#EEF2FF` | `#E0E7FF` | `#C7D2FE` | `#A5B4FC` | `#818CF8` | `#6366F1` | `#4F46E5` | `#4338CA` | `#3730A3` | `#312E81` | `#1E1B4B` |
| violet | `#F5F3FF` | `#EDE9FE` | `#DDD6FE` | `#C4B5FD` | `#A78BFA` | `#8B5CF6` | `#7C3AED` | `#6D28D9` | `#5B21B6` | `#4C1D95` | `#2E1065` |
| purple | `#FAF5FF` | `#F3E8FF` | `#E9D5FF` | `#D8B4FE` | `#C084FC` | `#A855F7` | `#9333EA` | `#7E22CE` | `#6B21A8` | `#581C87` | `#3B0764` |
| fuchsia | `#FDF4FF` | `#FAE8FF` | `#F5D0FE` | `#F0ABFC` | `#E879F9` | `#D946EF` | `#C026D3` | `#A21CAF` | `#86198F` | `#701A75` | `#4A044E` |
| pink | `#FDF2F8` | `#FCE7F3` | `#FBCFE8` | `#F9A8D4` | `#F472B6` | `#EC4899` | `#DB2777` | `#BE185D` | `#9D174D` | `#831843` | `#500724` |
| rose | `#FFF1F2` | `#FFE4E6` | `#FECDD3` | `#FDA4AF` | `#FB7185` | `#F43F5E` | `#E11D48` | `#BE123C` | `#9F1239` | `#881337` | `#4C0519` |

**Primitive ngoài ramp:**

| Token | Hex |
|---|---|
| `color/black` | `#000000` |
| `color/white` | `#FFFFFF` |

19 ramp, cùng bộ ramp với collection `core` của file Figma UU DLS. Tổng 211 primitive màu. **Không có primitive nào mang sẵn alpha** — độ trong suốt được đặt ở tầng semantic, xem 2.4.

Khi đổi màu thương hiệu sang một màu không rơi đúng một bậc ramp, thêm **một** primitive riêng (ví dụ `color/uu-60`) rồi trỏ nhóm token thương hiệu vào đó — đừng trỏ thẳng token semantic vào hex.

### 2.2 Semantic token (collection `color`)

57 token (22 `background-*` · 22 `object-*` · **11** `border-*` · 2 `overlay*`). Chữ **đậm** = token thương hiệu, đổi khi đổi brand (xem 2.5).

**Background**

| Token | Giá trị |
|---|---|
| `background-surface` | white |
| `background-muted` | slate-05 |
| `background-subtle` | slate-10 |
| `background-emphasized` | slate-20 |
| `background-inverted` | black |
| `background-disabled` | slate-20 |
| `background-interactive` | **indigo-60** |
| `background-interactive-muted` | **indigo-05** |
| `background-accent` | **blue-60** |
| `background-accent-muted` | **blue-05** |
| `background-accent-subtle` | **blue-10** |
| `background-accent-medium` | **blue-20** |
| `background-accent-emphasized` | **blue-40** |
| `background-positive` | green-70 |
| `background-positive-muted` | green-10 |
| `background-negative` | red-60 |
| `background-negative-muted` | red-10 |
| `background-attention` | red-50 |
| `background-attention-muted` | red-10 |
| `background-warning` | yellow-30 |
| `background-warning-muted` | yellow-10 |
| `background-transparent` | xem 2.4 |

**Object (text / icon / vector)**

| Token | Giá trị |
|---|---|
| `object-primary` | black |
| `object-primary-inverted` | white |
| `object-secondary` | slate-50 |
| `object-disabled` | slate-40 |
| `object-on-light` | black |
| `object-on-dark` | white |
| `object-interactive` | **indigo-60** |
| `object-interactive-muted` | **indigo-50** |
| `object-interactive-inverted` | **indigo-30** |
| `object-on-interactive` | white |
| `object-accent` | **blue-60** |
| `object-accent-muted` | **blue-30** |
| `object-accent-inverted` | **blue-30** |
| `object-on-accent` | white |
| `object-positive` | green-70 |
| `object-on-positive` | white |
| `object-negative` | red-60 |
| `object-on-negative` | white |
| `object-attention` | red-50 |
| `object-on-attention` | white |
| `object-warning` | yellow-50 |
| `object-on-warning` | black |

**Border & overlay**

| Token | Giá trị |
|---|---|
| `border` | slate-30 |
| `border-muted` | slate-20 |
| `border-emphasized` | slate-50 |
| `border-subtle` | **blue-20** |
| `border-medium` | **blue-30** |
| `border-inverted` | slate-60 |
| `border-muted-inverted` | slate-70 |
| `border-interactive` | **indigo-50** |
| `border-interactive-inverted` | **indigo-70** |
| `border-highlight` | white |
| `border-negative` | red-60 |
| `overlay` | xem 2.4 |
| `overlay-strong` | xem 2.4 |

Family `border-*` có **hai thang song song**, đừng trộn:

- **Thang xám** — `border-muted` (slate-20) → `border` (slate-30) → `border-emphasized` (slate-50). **Không đổi theo brand.** Đây là viền mặc định của mọi control: ô nhập, checkbox, radio, switch, segmented control. `border-emphasized` là viền đậm lên khi hover/focus, không phải một bậc để trang trí.
- **Thang thương hiệu** — `border-subtle` (blue-20) → `border-medium` (blue-30). **Đổi theo brand**, đi cùng nhóm nền `background-muted`/`-subtle`/`-emphasized`. Dùng cho viền và vạch ngăn của khối có nền tint, không dùng cho control.

Chữ `subtle` / `medium` lấy đúng bậc đã có trong hệ (`background-accent-subtle`, `background-accent-medium`): trong mỗi family, `-muted` / `-subtle` / `-medium` / `-emphasized` là **thứ bậc tương đối của chính family đó**, không phải tên bậc tuyệt đối trên ramp.

Tương phản (ngưỡng ranh giới 3:1): `border-subtle` 1.42 trên trắng; `border-medium` 1.80. Cùng hạng với `border-muted` (1.23) và `border` (1.48) — tức **vạch trang trí**, không phải ranh giới duy nhất xác định một control. Trên `background-subtle` thì `border-subtle` chỉ còn 1.30 — muốn có vạch đọc được trong khối nền tint thì dùng `border-medium` (1.65).

`border-interactive` (indigo-50) là viền của thứ đang chọn hay đang focus, nên phải đạt ngưỡng ranh giới 3:1: **4.47** trên trắng · **3.99** trên `background-interactive-muted` — đạt. (Bậc indigo-30 trước đây chỉ 1.99 trên trắng, không đạt.) `object-interactive-muted` cùng bậc indigo-50: 4.47 trên trắng — đạt 3:1 cho icon và chữ lớn, **chưa tới 4.5** cho chữ thường.

`border-highlight` là viền trắng nổi bật, chỉ đọc được trên nền tối hoặc nền status bão hoà. Đo theo ngưỡng 3:1 cho ranh giới thành phần: trên `background-inverted` 21.00 · `background-interactive` 6.29 · `background-negative` 4.83 · `background-positive` 5.02 — đều đạt. **Không dùng trên `background-surface` (1.00) hay `background-warning` (1.32).**

**Cách ghép cặp status**

Mỗi họ status có hai vai riêng, đừng ghép chéo:

| Muốn | Dùng | Ví dụ |
|---|---|---|
| Chữ / icon status trên nền sáng thường | `object-{status}` | chữ cảnh báo trên `background-surface` |
| Chữ / icon nằm **trên** nền status | `object-on-{status}` | chữ trong Toast |
| Nền đặc | `background-{status}` | Toast |
| Nền nhạt | `background-{status}-muted` | banner, chip |

`object-negative` 4.83 và `object-positive` 5.02 đạt AA cho chữ trên nền sáng. `object-warning` là `yellow-50` (**1.92** trên trắng — không đạt AA cho chữ). Vì vậy `object-warning` chỉ dùng cho **chấm / icon đi kèm chữ `object-primary`** (StatusIndicator Container=None); chữ cảnh báo đứng một mình trên nền sáng thì chưa có token — hỏi lại.

> Đừng đặt `object-warning` lên `background-warning` (chỉ 3.93). Nền vàng thì dùng `object-on-warning` (đen, 15.93). Quy tắc chung: `background-{status}` chỉ đi với `object-on-{status}`.

**Họ `attention` — "có mới, chưa xem"**

`attention` báo **có thứ mới người dùng chưa xem**: số tin chưa đọc, chấm "mới", nhãn "Mới".
Nó **không** nói về rủi ro hay lỗi:

| Họ | Nghĩa | Ví dụ |
|---|---|---|
| `attention` | có mới, chưa xem — xem hay không cũng không sao | badge "3" trên chuông, chấm trên tab, nhãn "Mới" |
| `warning` | có rủi ro, nên cẩn thận trước khi làm | sắp hết hạn, số dư thấp, thao tác không hoàn tác |
| `negative` | đã hỏng hoặc sai, phải sửa | nhập sai, gửi thất bại |

`attention` (red-50) cùng tông đỏ với `negative` (red-60) nhưng là hai vai: đừng lấy
`negative` cho badge "có mới", đừng lấy `attention` cho thông báo lỗi.

**Bốn họ status**: `positive` · `negative` · `warning` · `attention` — **không đổi theo brand**
(2.5). Tên token đặt rộng (`positive` / `negative`) để dùng được cho nhiều trường hợp hơn chỉ
"thành công / lỗi". Tên **variant** trong Figma vẫn là `Tone=Success` / `Tone=Error` (Badge,
StatusIndicator) và prop trong code giữ đúng tên variant (`tone="success"` / `tone="error"`,
`error` của field) — variant là ngôn ngữ cho designer đọc, token là ngôn ngữ của hệ màu. Đừng đổi
tên variant hay prop cho khớp tên token.

### 2.3 Contrast — đã đo

Các cặp màu dưới đây đã đo theo WCAG 2.x. Ngưỡng: **4.5** cho chữ thường, **3.0** cho chữ lớn (≥24px thường hoặc ≥18.66px bold) và cho ranh giới thành phần tương tác.

| Cặp | Tỷ lệ |
|---|---|
| `object-primary` trên `background-surface` | 21.00 |
| `object-interactive` trên `background-surface` | 6.29 |
| chữ trắng trên `background-interactive` (nút Solid) | 6.29 |
| `object-interactive` trên `background-interactive-muted` | 5.62 |
| `object-interactive` trên `background-accent-subtle` | 5.15 |
| `object-accent` (blue-60) trên `background-surface` · chữ trắng trên `background-accent` | 5.17 |
| `border-interactive` (indigo-50) trên `background-surface` · trên `background-interactive-muted` | 4.47 · 3.99 (ngưỡng 3:1) |
| `object-secondary` (slate-50) trên `background-surface` · `background-muted` · `background-subtle` | 4.76 · 4.55 · **4.34** |
| `object-negative` trên nền sáng | 4.83 |
| chữ trắng trên `background-attention` (số trong badge) · `object-attention` trên nền sáng | **3.76** · **3.76** — dưới 4.5 cho chữ thường |
| `object-positive` trên nền sáng | 5.02 |
| `object-warning` (`yellow-50`) trên nền sáng | **1.92** — không đạt, chỉ làm chấm/icon kèm chữ |
| Toast: Neutral 21.00 · Negative 4.83 · Positive 5.02 · Warning 15.93 | đạt cả 4 |

Bảy dòng đầu phụ thuộc màu thương hiệu. **Đổi màu UU thì đo lại bảy dòng đó** trước khi chốt: nếu màu mới rơi dưới 4.5 với trắng, chữ nút `Ghost`/`Outline` và chữ trong nút `Solid` sẽ dưới chuẩn cho chữ thường. Khi đó đừng "chữa" bằng viền hay đổ bóng — chọn bậc đậm hơn trên ramp, hoặc đẩy chữ nút lên ngưỡng chữ lớn (≥18.66px, weight 700), là một thay đổi thang chữ cần chốt riêng.

`attention` (red-50) chỉ đạt **3.76** với trắng: đủ 3:1 cho chấm, icon và ranh giới, nhưng **dưới 4.5** cho chữ thường — số 11px trong `NotificationBadge` `Count` không đạt AA. **Đã chấp nhận có chủ ý** (chốt 2026-09-24): giữ red-50 cho tông badge; đừng tự "sửa" bằng cách đổi màu hay đổi chữ đen. `object-attention` chỉ dùng cho chấm / icon, không cho chữ đứng một mình.

`object-secondary` trên `background-subtle` chỉ 4.34 — dưới 4.5 cho chữ thường. Chữ phụ đặt trên nền `subtle` thì dùng cỡ ≥ chữ lớn, hoặc đổi nền sang `background-surface` / `background-muted`.

Đừng để màu là **tín hiệu duy nhất** ở chỗ quan trọng — kèm chữ hoặc icon để người khó phân biệt màu vẫn hiểu.

### 2.4 Token có alpha

Ba token không trỏ thẳng vào một primitive mà **cộng thêm alpha ngay tại tầng semantic** (color alias + phần trăm alpha).

| Token | Định nghĩa | Kết quả |
|---|---|---|
| `overlay` | `color/black` @ `opacity-10` | `rgba(0, 0, 0, 0.10)` |
| `overlay-strong` | `color/black` @ `opacity-45` | `rgba(0, 0, 0, 0.45)` |
| `background-transparent` | `color/white` @ `opacity-0` | trong suốt hoàn toàn |

**Chọn cái nào.** `overlay` để TÁCH LỚP — dialog và bottom sheet nổi lên trên màn nền,
nền vẫn đọc được; nó luôn đi kèm blur nền, chính lớp nhoè mới làm nền lùi ra sau,
còn 10% đen chỉ hạ độ sáng một chút. `overlay-strong` để LÀM TỐI một lớp media — luồng
camera, ảnh, video — cho thứ đặt trên nó đọc được; dùng một mình, không cần blur, vì
làm nhoè camera thì người dùng không ngắm được vào đâu.
Đừng lấy `overlay` cho ca thứ hai: 10% quá nhạt, khung ngắm chìm vào cảnh nền.

Phần alpha cũng bind vào token `opacity/*` chứ không phải số cứng, nên các token này hoàn toàn token-driven.

Trong CSS map thẳng bằng `color-mix`, giữ nguyên quan hệ dẫn xuất:

```css
--overlay: color-mix(in srgb, var(--color-black) 10%, transparent);
--overlay-strong: color-mix(in srgb, var(--color-black) 45%, transparent);
--background-transparent: color-mix(in srgb, var(--color-white) 0%, transparent);
```

Hệ quả cho code: **đừng tạo primitive màu có sẵn alpha**, và **đừng nhân thêm opacity lên fill** — alpha đã nằm trong token. Cần một màu mờ thì compose từ primitive đặc cộng một bậc `opacity/*`. Trong `tokens.json` các token này có thêm trường `$alpha`.

### 2.5 Brand mode

UU DS hiện có **một** brand mode, đặt ở `:root`. Cơ chế brand mode vẫn giữ nguyên để thêm brand về sau mà không đụng component: mỗi brand là một khối ghi đè **đúng nhóm token thương hiệu** dưới đây, bật bằng `<html data-theme="<tên-brand>">`.

Nhóm token thương hiệu — 20 token:

```
background-muted / -subtle / -emphasized     nền trung tính của trang (hiện: slate-05 / 10 / 20)
background-interactive / -interactive-muted
background-accent / -muted / -subtle / -medium / -emphasized
object-interactive / -muted / -inverted
object-accent / -muted / -inverted
border-interactive / -interactive-inverted
border-subtle / border-medium
```

Mọi token còn lại — status (`positive` / `negative` / `warning` / `attention`), thang xám, `object-primary`, overlay — **không đổi theo brand**.

`accent` (blue) và `interactive` (indigo) là **hai vai khác nhau**, hiện cũng khác màu: `interactive` cho thứ **bấm được** (nút, link, field focus, tab, item đang chọn), `accent` cho chỗ **nhấn nội dung** (con trỏ nhập, nhãn nổi bật). Đừng lấy token `accent` cho thứ bấm được chỉ vì màu trông hợp, và ngược lại.

Thêm một brand:

```css
[data-theme="ten-brand"] {
  --background-interactive: var(--color-…);
  /* …chỉ ghi đè nhóm token thương hiệu ở trên */
}
```

Trong `tokens.json` thêm một khoá cạnh `semantic.color.uu`, rồi `npm run tokens:dart` để bản Flutter có thêm giá trị `UuBrand`.

---

## 3. Typography

**Font families**

| Token | Giá trị thật | Dùng cho |
|---|---|---|
| `font-family-body` | **font hệ thống của thiết bị** | Toàn bộ UI chức năng |
| `font-family-display` | `Playwrite US Trad` | Chỉ style `display-*` |

> **`font-family-body` là font hệ thống của thiết bị, không phải một font của UU DS.**
> Bản thiết kế cần một tên font có thật để render nên thường ghi `SF Pro` — vốn là font hệ thống của iOS. Ngoài đời, app dùng font hệ thống của chính thiết bị: SF Pro trên iOS, Roboto hoặc bộ font riêng của hãng trên Android (Samsung, Xiaomi, Oppo đều thay, và người dùng còn tự đổi được).
>
> **Không nhúng, không self-host, không tải SF Pro.** Ngoài chuyện nó không tồn tại trên Android, font hệ thống của Apple còn bị giới hạn giấy phép trong hệ sinh thái Apple.

Trong CSS token giữ đúng tên `--font-family-body`, chỉ giá trị là stack hệ thống:

```css
--font-family-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                    "Noto Sans", system-ui, sans-serif;
```

Đây là mô hình lai phổ biến: font hệ thống cho toàn bộ thành phần chức năng (nút, ô nhập, nhãn), font thương hiệu chỉ dành cho vai trò display. UU DS đã chia đúng ranh giới đó — `display-*` là bốn style duy nhất dùng `font-family-display`.

**Ba hệ quả khi build**

1. **Đừng hardcode chiều rộng.** Bề rộng chữ khác nhau giữa iOS, Roboto và các bộ font OEM. Mọi component hug width (button, toggle, chip) phải để tự co giãn.
2. **Line-height là giá trị tuyệt đối, không phải bội số.** App (Flutter) dùng logical px, web dùng rem (xem *Đơn vị theo nền tảng* ở §4). Chính vì thế chiều cao dòng không đổi khi swap font, layout không xô. Đừng đổi sang bội số (`1.5`). Trên web, line-height phải đi **cùng đơn vị** với font-size (rem) — để px thì khi người dùng tăng cỡ chữ trình duyệt, chữ to lên mà dòng giữ nguyên, các dòng đè nhau.
3. **Cẩn thận bậc weight.** Một số font OEM Android không đủ 4 bậc, thiếu bậc nào trình duyệt sẽ làm giả (faux bold) trông rất xấu. Ảnh hưởng trực tiếp tới mode `Active` (600 → 700). Nếu gặp, hạ xuống dùng 2 bậc regular/bold thay vì 4.

**Font size** (`font size/font-size-*`)

| Token | px | rem |
|---|---|---|
| `3xs` | 8 | 0.5 |
| `2xs` | 9 | 0.5625 |
| `xs` | 11 | 0.6875 |
| `sm` | 13 | 0.8125 |
| `base` | 16 | 1 |
| `lg` | 19 | 1.1875 |
| `xl` | 23 | 1.4375 |
| `2xl` | 28 | 1.75 |
| `3xl` | 33 | 2.0625 |
| `4xl` | 40 | 2.5 |
| `5xl` | 48 | 3 |

**Line height** (`line height/font-height-*`): `2xs` 8 · `xs` 16 · `sm` 20 · `base` 24 · `lg` 28 · `xl` 32 · `2xl` 36 · `3xl` 40 · `4xl` 52 · `5xl` 60

**Font weight — 2 mode**

| Token | Default | Active |
|---|---|---|
| `font-weight-normal` | 400 | 500 |
| `font-weight-medium` | 500 | 600 |
| `font-weight-semibold` | 600 | 700 |
| `font-weight-bold` | 700 | 800 |

Mode `Active` làm chữ đậm thêm đúng 1 bậc, không đổi màu, không đổi kích thước.

> **Đọc kỹ chỗ này:** mode `Active` chỉ dùng cho **trạng thái đang được chọn** của hai
> component: Toggle button `Active=True` (mục 6.7) và Segment item `Pressed=True` của
> Segmented control (mục 6.13). Không chỗ nào khác. Nó **không** liên quan tới `:hover` hay
> `:active` của CSS, cũng **không** liên quan tới `State=Pressed` của button. Text button ở
> `State=Pressed` giữ nguyên weight 600.
>
> Áp mode này lên phần tử đang ở trạng thái bật, không phải phần tử đang bị nhấn.

### 3.1 Text styles

| Style | Family | Size | Line height | Weight | Letter spacing |
|---|---|---|---|---|---|
| `display-lg` | Playwrite US Trad | 48 | 60 | bold | 0 |
| `display-base` | Playwrite US Trad | 40 | 52 | bold | 0 |
| `display-sm` | Playwrite US Trad | 33 | 40 | bold | 0 |
| `display-xs` | Playwrite US Trad | 28 | 36 | bold | 0 |
| `heading-lg` | hệ thống | 28 | 36 | semibold | 0 |
| `heading-base` | hệ thống | 23 | 32 | semibold | 0 |
| `heading-sm` | hệ thống | 19 | 28 | semibold | 0 |
| `title-base` | hệ thống | 16 | 24 | semibold | 0 |
| `title-sm` | hệ thống | 13 | 20 | semibold | 0 |
| `title-xs` | hệ thống | 11 | 16 | semibold | 0 |
| `body` | hệ thống | 16 | 24 | normal | 0 |
| `label` | hệ thống | 16 | 24 | semibold | 0 |
| `caption` | hệ thống | 13 | 20 | normal | 0 |

`body` và `label` có `paragraph-spacing` = 16, `caption` = 8. Các style còn lại = 0.

> `label` và `title-base` trùng hệt nhau về giá trị. Khác biệt là **ngữ nghĩa**: `label` dùng trong control (button, input value), `title-base` dùng cho tiêu đề nội dung.

---

## 4. Spacing, size, shape, elevation

**Đơn vị theo nền tảng.** Giá trị gốc ghi bằng px (bảng dưới, và `tokens.json`). Mỗi nền tảng
xuất theo đơn vị riêng, cùng một giá trị:

| Nền tảng | `size-*` · `gap-*` · `radius-*` · `font-size-*` · `font-height-*` | Giữ nguyên px |
|---|---|---|
| App (Flutter) | logical px, đúng số trong bảng | — |
| Web (`tokens.css`) | **rem** = px ÷ 16 (`gap-4` = `1rem`, `font-size-lg` = `1.1875rem`) | `size-px`, `rounded-circle`, độ dày viền, bóng đổ |

Web dùng rem để giao diện co theo cỡ chữ người dùng chọn trong trình duyệt; ở cỡ mặc định 16
thì mọi số đo y hệt px. App không cần: Flutter tự co chữ theo cỡ chữ hệ thống. Code web dùng
`var(--token)` nên không phải quy đổi tay; đừng viết số rem hay px rời trong component.

**Gap** (`gap-*`) — bước 4px:

| Token | px | | Token | px |
|---|---|---|---|---|
| `gap-0` | 0 | | `gap-4` | 16 |
| `gap-0-5` | 2 | | `gap-5` | 20 |
| `gap-1` | 4 | | `gap-6` | 24 |
| `gap-1-5` | 6 | | `gap-7` | 28 |
| `gap-2` | 8 | | `gap-8` | 32 |
| `gap-2-5` | 10 | | `gap-9` | 36 |
| `gap-3` | 12 | | `gap-10` | 40 |
| `gap-3-5` | 14 | | `gap-11` | 44 |
| | | | `gap-12` | 48 |
| | | | `gap-14` | 56 |
| | | | `gap-16` | 64 |

**Size** (`size-N` = N × 4px): `0, px(1), 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96` → tối đa 384px.

**Radius**

| Token | px |
|---|---|
| `radius-none` | 0 |
| `radius-sm` | 8 |
| `radius-base` | 12 |
| `radius-lg` | 16 |
| `radius-xl` | 20 |
| `rounded-2xl` | 24 |
| `rounded-3xl` | 28 |
| `rounded-4xl` | 32 |
| `rounded-circle` | 9999 (pill / tròn hoàn toàn) |

**Opacity** (`opacity-N`, giá trị = N%): 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95.

Bốn bậc `5 / 10 / 20 / 40` là các bậc **được dùng thật** cho state layer (mục 6.0). `0` và `10` cấp alpha cho hai token màu ở mục 2.4. Phần còn lại là thang dự phòng.

**Elevation (effect styles)**

| Style | Shadow |
|---|---|
| `elevation-low` | `0 2px 8px rgba(0,0,0,0.10)` |
| `elevation-medium` | `0 4px 12px rgba(0,0,0,0.10)` |
| `elevation-high` | `0 8px 24px rgba(0,0,0,0.10)` |

**Paint styles**: `card-surface` (gradient), `↳` (solid `#D9D9D9`), `placeholder` (image) — 3 style rời, không nằm trong hệ token. `placeholder` là ảnh chèn chỗ cho mockup, không phải màu sản phẩm.


### 4.1 Density — `Touch` · `Compact`

Collection biến **`density`**, 2 mode: **`Touch`** (mặc định, đúng kích thước gốc — app mobile,
mini app) và **`Compact`** (desktop, dashboard, portal). Density là trục **độc lập** với brand:
brand nào cũng dùng được cả hai.

**Chỉ đổi kích thước và độ đậm chữ `label`.** Màu, state layer, gap giữa các khối, icon (trừ cỡ),
quy tắc ghép cặp — giữ nguyên. Không có primitive mới: mọi giá trị là alias tới thang có sẵn
(`size-*`, `gap-*`, `radius-*`, `font-size-*`, `font-height-*`, `font-weight-*`), trừ
`chip/border-width` (2 · 1) ghi số thẳng vì chưa có thang độ dày viền.

**Quy tắc Compact**
- Chữ: mọi text style **lùi đúng một bậc** trên thang 11 bậc (body/label 16 → 13, caption 13 → 11,
  heading 28/23/19 → 23/19/16). `11` là sàn — `title-xs` giữ 11/16. `display-*` không đổi.
- Control (TextButton, IconButton, ToggleButton): Large / Base / Small **56 / 48 / 32 → 40 / 32 / 24**;
  padding ngang 24 / 16 / 12 → 16 / 12 / 8; icon 24 → 16. Chip dùng bộ Small.
- Field (TextInput, SearchInput, DateInput, Dropdown, ô OTP): cao **48 → 32**, radius 16 → 8,
  padding ngang 12 → 8, icon 24 → 16. TextArea chỉ đổi radius và padding ngang, giữ cao 112.
- Chữ `label` (TextButton, ToggleButton, Segment, giá trị Dropdown) **600 → 500**. Mode chữ
  **Active** (Toggle bật, Segment đang chọn) vẫn đậm hơn một bậc: Touch 700 · Compact **600**.
  Chip viền **2 → 1**; TextButton Outline giữ viền 2.
- Checkbox / Radio **32 → 24**; Switch **56×32 → 40×24**; Tab padding 12 → 8.
- Small 24 vẫn đạt WCAG 2.5.8 (vùng bấm tối thiểu 24×24). **Đừng dùng Compact cho màn chạm.**

**Dùng thế nào**
- Figma: chọn frame màn → panel *Layer* → mode `density = Compact`. Mọi instance và text style bên
  trong tự co (text style gắn `fontSize` / `lineHeight` vào `text/*`; Button, Field, Checkbox, Radio,
  Switch, Chip, Tab gắn kích thước vào biến density). Ở `Touch` không variant nào đổi kích thước.
- Web: `data-density="compact"` trên khung chứa (`<html>` hay một vùng). Component và class
  `.text-*` đọc biến density; component **không** đọc thẳng `--font-size-*` / `--font-height-*`
  hay gõ cứng 24/32/40/48/56px (bộ chấm báo `text-primitive` và `density-hardcode`).
- Flutter: `uuThemeData(density: UuDensity.compact)`; widget đọc `UuTheme.of(context).sizes` và
  `.text`. `UuTextStyles` giữ làm hằng số Touch — đừng dùng trong widget.

| Biến Figma (`density/…`) | CSS | Touch | Compact |
|---|---|---|---|
| `text/heading-lg/font-size` | `--text-heading-lg-font-size` | 28 (`font-size-2xl`) | **23** (`font-size-xl`) |
| `text/heading-lg/line-height` | `--text-heading-lg-line-height` | 36 (`font-height-2xl`) | **32** (`font-height-xl`) |
| `text/heading-base/font-size` | `--text-heading-base-font-size` | 23 (`font-size-xl`) | **19** (`font-size-lg`) |
| `text/heading-base/line-height` | `--text-heading-base-line-height` | 32 (`font-height-xl`) | **28** (`font-height-lg`) |
| `text/heading-sm/font-size` | `--text-heading-sm-font-size` | 19 (`font-size-lg`) | **16** (`font-size-base`) |
| `text/heading-sm/line-height` | `--text-heading-sm-line-height` | 28 (`font-height-lg`) | **24** (`font-height-base`) |
| `text/title-base/font-size` | `--text-title-base-font-size` | 16 (`font-size-base`) | **13** (`font-size-sm`) |
| `text/title-base/line-height` | `--text-title-base-line-height` | 24 (`font-height-base`) | **20** (`font-height-sm`) |
| `text/title-sm/font-size` | `--text-title-sm-font-size` | 13 (`font-size-sm`) | **11** (`font-size-xs`) |
| `text/title-sm/line-height` | `--text-title-sm-line-height` | 20 (`font-height-sm`) | **16** (`font-height-xs`) |
| `text/title-xs/font-size` | `--text-title-xs-font-size` | 11 (`font-size-xs`) | 11 (`font-size-xs`) |
| `text/title-xs/line-height` | `--text-title-xs-line-height` | 16 (`font-height-xs`) | 16 (`font-height-xs`) |
| `text/body/font-size` | `--text-body-font-size` | 16 (`font-size-base`) | **13** (`font-size-sm`) |
| `text/body/line-height` | `--text-body-line-height` | 24 (`font-height-base`) | **20** (`font-height-sm`) |
| `text/label/font-size` | `--text-label-font-size` | 16 (`font-size-base`) | **13** (`font-size-sm`) |
| `text/label/line-height` | `--text-label-line-height` | 24 (`font-height-base`) | **20** (`font-height-sm`) |
| `text/label/font-weight` | `--text-label-font-weight` | 600 (`font-weight-semibold`) | **500** (`font-weight-medium`) |
| `text/caption/font-size` | `--text-caption-font-size` | 13 (`font-size-sm`) | **11** (`font-size-xs`) |
| `text/caption/line-height` | `--text-caption-line-height` | 20 (`font-height-sm`) | **16** (`font-height-xs`) |
| `control/height-large` | `--control-height-large` | 56 (`size-14`) | **40** (`size-10`) |
| `control/padding-x-large` | `--control-padding-x-large` | 24 (`gap-6`) | **16** (`gap-4`) |
| `control/padding-y-large` | `--control-padding-y-large` | 8 (`gap-2`) | **4** (`gap-1`) |
| `control/icon-large` | `--control-icon-large` | 24 (`size-6`) | **16** (`size-4`) |
| `control/height-base` | `--control-height-base` | 48 (`size-12`) | **32** (`size-8`) |
| `control/padding-x-base` | `--control-padding-x-base` | 16 (`gap-4`) | **12** (`gap-3`) |
| `control/padding-y-base` | `--control-padding-y-base` | 8 (`gap-2`) | **4** (`gap-1`) |
| `control/icon-base` | `--control-icon-base` | 24 (`size-6`) | **16** (`size-4`) |
| `control/height-small` | `--control-height-small` | 32 (`size-8`) | **24** (`size-6`) |
| `control/padding-x-small` | `--control-padding-x-small` | 12 (`gap-3`) | **8** (`gap-2`) |
| `control/padding-y-small` | `--control-padding-y-small` | 4 (`gap-1`) | **2** (`gap-0-5`) |
| `control/icon-small` | `--control-icon-small` | 16 (`size-4`) | 16 (`size-4`) |
| `field/height` | `--field-height` | 48 (`size-12`) | **32** (`size-8`) |
| `field/padding-x` | `--field-padding-x` | 12 (`gap-3`) | **8** (`gap-2`) |
| `field/radius` | `--field-radius` | 16 (`radius-lg`) | **8** (`radius-sm`) |
| `field/icon` | `--field-icon` | 24 (`size-6`) | **16** (`size-4`) |
| `field/otp-min-width` | `--field-otp-min-width` | 36 (`size-9`) | **28** (`size-7`) |
| `selection/size` | `--selection-size` | 32 (`size-8`) | **24** (`size-6`) |
| `selection/radius` | `--selection-radius` | 12 (`radius-base`) | **8** (`radius-sm`) |
| `selection/check` | `--selection-check` | 20 (`size-5`) | **16** (`size-4`) |
| `selection/radio-dot` | `--selection-radio-dot` | 20 (`size-5`) | **12** (`size-3`) |
| `selection/label-offset` | `--selection-label-offset` | 4 (`gap-1`) | **2** (`gap-0-5`) |
| `switch/width` | `--switch-width` | 56 (`size-14`) | **40** (`size-10`) |
| `switch/height` | `--switch-height` | 32 (`size-8`) | **24** (`size-6`) |
| `switch/padding` | `--switch-padding` | 8 (`gap-2`) | **6** (`gap-1-5`) |
| `switch/handle-off` | `--switch-handle-off` | 16 (`size-4`) | **12** (`size-3`) |
| `switch/handle-on` | `--switch-handle-on` | 28 (`size-7`) | **20** (`size-5`) |
| `switch/handle-icon` | `--switch-handle-icon` | 16 (`size-4`) | **12** (`size-3`) |
| `tab/padding` | `--tab-padding` | 12 (`gap-3`) | **8** (`gap-2`) |
| `chip/border-width` | `--chip-border-width` | 2 (`2px`) | **1** (`1px`) |

---

## 5. Component inventory

Đây là **toàn bộ** component đã chốt. Không có gì ngoài danh sách này. Tên component viết CamelCase liền, không dấu cách — code dùng đúng tên này.

| Component | Variants | Spec |
|---|---|---|
| `TextButtonAccent` | 90 | 6.1 |
| `TextButtonNeutral` | 90 | 6.1 |
| `IconButtonAccent` | 90 | 6.2 |
| `IconButtonNeutral` | 90 | 6.2 |
| `ToggleButton` | 48 | 6.7 |
| `ButtonGroup` | 2 | 6.9 |
| `TextInput` | 9 | 6.3 |
| `TextArea` | 9 | 6.3e |
| `OTPInput` | 14 | 6.3b |
| `SearchInput` | 7 | 6.3g |
| `DateInput` | 8 | 6.3c |
| `Dropdown` | 8 | 6.4 |
| `Menu` | 2 (+ `.MenuItem` 8) | 6.21 |
| `Checkbox` | 15 | 6.3f |
| `CheckboxInput` | 1 | 6.3f |
| `Radio` | 10 | 6.3d |
| `RadioInput` | 1 | 6.3d |
| `Switch` | 10 | 6.17 |
| `Chip` | 16 | 6.18 |
| `SegmentedControl` | 1 (+ `.Segment item` 8) | 6.13 |
| `NavigationBar` | 1 | 6.5 |
| `BottomBar` | 10 (+ `base/FooterItem` 2) | 6.22 |
| `Tab` | 2 | 6.20 |
| `Pagination` | 3 | 6.10b |
| `Toast` | 4 | 6.6 |
| `Badge` | 4 | 6.14 |
| `StatusIndicator` | 8 | 6.15 |
| `NotificationBadge` | 2 | 6.16 |
| Bottom sheet (`.base/sheet`) | 1 | 6.8 |
| Bottom sheet (`Sheet` — template màn hình) | 1 | 6.8 |
| Dialog (`.base/dialog`) | 1 | 6.10 |
| Dialog (`Dialog` — template màn hình) | 1 | 6.10 |
| `ResultScreen` (template màn) | 1 | 6.19 |
| `ErrorScreen` (template màn) | 1 | 6.19 |

Chưa có: Action group.

Chuỗi chữ trên component là **property**, không phải node phải chọn vào sửa: `Error message` (TextInput · TextArea · OTPInput · DateInput · Dropdown), `Word counter` (TextArea), `Input value` (ô OTP), `Text` (DateInput · Dropdown), `Label` (CheckboxInput · RadioInput · `base/prefix` · Chip), `Count` (NotificationBadge), `Content` (Toast). Bên code đó là prop (`errorMessage`, `label`…).

Component nội bộ, không dùng trực tiếp — chỉ xuất hiện bên trong component ở trên: `.label`, `.suffix`, `base/prefix` (Type Icon/Label), `base/suffix` (18×18, Type=Icon), `.Segment item`, `.MenuItem`, `base/FooterItem` (mục của `BottomBar`, 2 variant), `.base/input-default` và `.base/input-masked` (ô của OTP, 7 variant mỗi bộ), `.Mini App Control`, `.loading`, `Icon`, `🔒Base/Slick`.

`Sheet` (mục 6.8) và `Dialog` (mục 6.10) là template màn hình, không phải component sản phẩm — chúng nhúng một Device element.

**Không thuộc design system**, chỉ để dựng mockup bối cảnh: toàn bộ `Device elements` (status bar, keyboard iOS/Android, home indicator, browser chrome, alert Face ID / Touch ID) và `.Mini App Control` (UI của nền tảng mini app, ví dụ Zalo). Đừng token hoá, đừng coi là component sản phẩm.

## 6. Component specs

### 6.0 State layer — cơ chế tương tác

Hover và Pressed **không đổi màu nền hay màu chữ**. Hệ thống phủ thêm một lớp `state layer`:

- `RECTANGLE`, absolute-positioned, full-bleed đúng kích thước container, bo góc theo container
- Nằm **trên cùng** z-stack, và **bị khoá** trong file thiết kế (cố ý, để designer không kéo nhầm)
- `fill` = **màu content của chính variant đó** (text/icon color), không phải một màu cố định
- `opacity` bind vào token `opacity/opacity-*`

Chọn bậc opacity theo độ tương phản của nền:

| Ngữ cảnh | Fill của state layer | Hover | Pressed |
|---|---|---|---|
| Nền đặc, tối/bão hoà — `Solid` Accent, `Solid` Neutral | màu on-content (`object-on-interactive`, `object-primary-inverted`) | `opacity-20` | `opacity-40` |
| Nền sáng / trong suốt — `Outline`, `Ghost` (Inverted=False), và **mọi `Solid / Inverted=True`** (nền là `background-surface`) | màu content (`object-interactive`, `object-primary`) | `opacity-5` | `opacity-10` |
| Trên nền tối — `Outline`/`Ghost` + `Inverted=True` | màu content inverted (`object-interactive-inverted`, `object-primary-inverted`) | `opacity-20` | `opacity-40` |
| Text input `Hover` | `object-secondary` | `opacity-5` | — |

Nguyên tắc rút gọn: **content sáng trên nền tối → 20/40; content tối trên nền sáng → 5/10.**

`Disabled` và `Loading` **không có** state layer.

**Implement trong code:**

```css
.uu-interactive { position: relative; isolation: isolate; }
.uu-interactive::after {
  content: ""; position: absolute; inset: 0;
  border-radius: inherit; pointer-events: none;
  background: currentColor;      /* = màu content của variant, đúng spec */
  opacity: 0; transition: opacity 120ms ease;
}
/* nền đặc/tối */
.uu-on-dark:hover::after  { opacity: var(--opacity-20); }
.uu-on-dark:active::after { opacity: var(--opacity-40); }
/* nền sáng/trong suốt */
.uu-on-light:hover::after  { opacity: var(--opacity-5); }
.uu-on-light:active::after { opacity: var(--opacity-10); }
```

`background: currentColor` là cách map chính xác nhất — vì fill của state layer luôn trùng màu content. Với `Solid`, `currentColor` chính là `object-on-interactive`; với `Ghost`, chính là `object-interactive`. Một rule chạy cho cả 12 tổ hợp.

State layer là **toàn bộ** hiệu ứng của hover và pressed. Không đổi nền, không đổi màu chữ, không đổi font-weight.


### 6.1 Text button

**Hai bộ riêng biệt**: `Text button - Accent` và `Text button - Neutral`. Cùng cấu trúc, khác bảng màu.

**Props**

| Prop | Kiểu | Giá trị |
|---|---|---|
| `Action` | TEXT | mặc định `"Action"` |
| `Suffix` | BOOLEAN | mặc định `false` — bật icon bên phải |
| `Type` | VARIANT | `Solid` · `Outline` · `Ghost` |
| `Inverted` | VARIANT | `False` · `True` — dùng trên nền tối |
| `Size` | VARIANT | `Large` · `Base` · `Small` |
| `State` | VARIANT | `Default` · `Hover` · `Pressed` · `Disabled` · `Loading` |

**Layout theo size**

| Size | Height | Padding (T/R/B/L) | Gap | Radius | Text style |
|---|---|---|---|---|---|
| Large | 56 | `8 / 24 / 8 / 24` | 8 | `rounded-circle` | `label` |
| Base | 48 | `8 / 16 / 8 / 16` | 8 | `rounded-circle` | `label` |
| Small | 32 | `4 / 12 / 4 / 12` | 8 | `rounded-circle` | `label` |

Auto-layout: `HORIZONTAL`, `HUG × HUG`. `min-width` = `min-height` = chiều cao của size (56 / 48 / 32), nên nút chữ ngắn không bao giờ hẹp hơn hình tròn.

> **Viền `Outline` không được cộng vào chiều cao.** Viền nằm bên trong (`strokeAlign: INSIDE`)
> nên nút `Outline` cao đúng bằng nút `Solid`. Trên web, `border: 2px` + `box-sizing: border-box`
> **vẫn** cộng 4px khi chiều cao do nội dung quyết định chứ không do `height` cố định:
> nút `Small` có `4 + 24 + 4 = 32`, vừa chạm `min-height`, nên viền đẩy thành **36**.
> `Base` và `Large` thoát vì nội dung mới cao 44, còn dưới `min-height` 48 / 56 — nhưng chỉ là may,
> thêm một dòng chữ hay đổi padding là dính ngay.
> Dựng viền bằng `box-shadow: inset 0 0 0 2px` — không chiếm chỗ, và lớp state layer
> `::after { inset: 0 }` phủ trọn cả vùng viền. Cùng cách với `Chip` (6.18),
> `Switch` (6.17) và `Checkbox` (6.3f).
Icon suffix (instance `base/suffix`): **24×24 cho Large và Base, 16×16 cho Small** — cùng thang với Icon button. Chỉ hiện khi `Suffix = true`.

**Bảng màu — Accent**

| Type | Inverted | Background | Border | Text |
|---|---|---|---|---|
| Solid | False | `background-interactive` | — | `object-on-interactive` |
| Solid | True | `background-surface` | — | `object-interactive` |
| Outline | False | — | `border-interactive` 2px | `object-interactive` |
| Outline | True | — | `border-interactive-inverted` 2px | `object-interactive-inverted` |
| Ghost | False | — | — | `object-interactive` |
| Ghost | True | — | — | `object-interactive-inverted` |

**Bảng màu — Neutral**

| Type | Inverted | Background | Border | Text |
|---|---|---|---|---|
| Solid | False | `background-inverted` | — | `object-primary-inverted` |
| Solid | True | `background-surface` | — | `object-primary` |
| Outline | False | — | `border` 2px | `object-primary` |
| Outline | True | — | `border-inverted` 2px | `object-primary-inverted` |
| Ghost | False | — | — | `object-primary` |
| Ghost | True | — | — | `object-primary-inverted` |

**State overrides** (áp cho cả 2 bộ)

| State | Thay đổi |
|---|---|
| `Default` | baseline |
| `Hover` | + state layer, bậc hover (mục 6.0). Nền và chữ **không đổi** |
| `Pressed` | + state layer, bậc pressed (mục 6.0). Font-weight giữ nguyên |
| `Disabled` | không có state layer. Solid → bg `background-disabled`; Outline → border `border-muted` (Inverted: `border-muted-inverted`); mọi type → text `object-disabled` |
| `Loading` | không có state layer. Container giữ nguyên; spinner `.loading` (18×18, gradient sweep) đứng **trước** label, khe 8. Label **vẫn hiện** |

### 6.2 Icon button

**Props**: `Type` (Solid/Outline/Ghost) · `Inverted` (False/True) · `Size` (Large/Base/Small) · `State` (Default/Hover/Pressed/Disabled/Loading). 90 variants mỗi bộ.

Tên prop khớp hoàn toàn với Text button — dùng chung một API component được.

**Layout**

| Size | Box | Icon | Radius | Padding |
|---|---|---|---|---|
| Large | 56 × 56 | 24 | `rounded-circle` | 0 |
| Base | 48 × 48 | 24 | `rounded-circle` | 0 |
| Small | 32 × 32 | 16 | `rounded-circle` | 0 |

**Màu**: giống hệt bảng Text button tương ứng (Accent / Neutral), chỉ khác:
- **Stroke width = 2px**, `strokeAlign: INSIDE` (giống Text button).
- Màu icon dùng token `object-*` giống màu text của Text button.
- Bộ Neutral `Solid / Inverted=False` dùng `background-inverted`; Accent dùng `background-interactive`.
- State layer theo đúng mục 6.0.

**State layer cho `Inverted=True`** (đã đối chiếu toàn bộ 18 tổ hợp):

| Type | Accent | Neutral |
|---|---|---|
| `Solid` (nền là `background-surface`, tức nền sáng) | 5 / 10 | 5 / 10 |
| `Outline` | 20 / 40 | 20 / 40 |
| `Ghost` | 20 / 40 | 20 / 40 |

Toàn bộ 144 variant hover/pressed của 4 bộ button đã được audit và khớp 100% quy tắc mục 6.0. Không có ngoại lệ nào cần xử lý riêng trong code.
- Disabled Solid → `background-disabled`; Outline → `border-muted` / `border-muted-inverted`.

### 6.3 Text input

**Props**

| Prop | Kiểu | Mặc định |
|---|---|---|
| `Label` | BOOLEAN | `true` |
| `Placeholder` | TEXT | `"Placeholder"` |
| `Input` | TEXT | `"Input"` |
| `Prefix` | BOOLEAN | `false` |
| `Action` | BOOLEAN | `false` |
| `Value` | VARIANT | `Empty` · `Filled` — **tách riêng khỏi State** |
| `State` | VARIANT | `Default` · `Hover` · `Focus` · `Typing` · `[No state]` (khi Disabled) |
| `Disabled` | VARIANT | `False` · `True` |
| `Error` | VARIANT | `False` · `True` |

9 variants: `Empty/Default`, `Empty/Hover`, `Empty/Focus`, `Filled/Typing`, `Filled/Default`,
`Empty/Error`, `Filled/Error` (cao 100 thay vì 76), `Empty/Disabled`, `Filled/Disabled`.

**Cấu trúc**

```
Text input            VERTICAL · gap 4 · FIXED × HUG
├─ .label             HORIZONTAL · gap 8 · FILL × HUG · h24
│  ├─ Text wrapper    HORIZONTAL · gap 4
│  │  ├─ "Label"      style body · object-primary
│  │  └─ .suffix      Required | Optional  (caption · object-secondary)
│  └─ Icon (tooltip)  16×16 · ẩn mặc định
├─ Field              HORIZONTAL · padding 0/12 · gap 8 · FILL × FIXED · h48 · radius 16
│  ├─ base/prefix     Icon 24 | Label · ẩn mặc định
│  ├─ Text            style body
│  └─ suffix          padding-left 8 · **vạch ngăn trái 1px `border-muted`** · chứa `TextButtonNeutral` Ghost Small (h32) · ẩn mặc định
└─ Error message      style caption · object-negative · FILL × h20 · CHỈ có ở Error=True
```

Chiều cao root: 76 khi `Error=False` (24 + 4 + 48), **100** khi `Error=True` (+ 4 + 20). Dòng lỗi chiếm chỗ thật, không phải overlay — bố cục quanh ô phải nhường chỗ cho nó, đừng đặt ô nhập sát một khối khác rồi để dòng lỗi đè lên.

`.suffix` variant `Required` render `∙ Bắt buộc`; variant `Optional` là đối ứng. Nội dung tiếng Việt — hệ thống này viết cho sản phẩm VN.

**Field theo Value × State**

| Value | State | Background | Border 1px | Text | State layer |
|---|---|---|---|---|---|
| Empty | Default | `background-surface` | `border-muted` | `object-secondary` (placeholder) | — |
| Empty | Hover | `background-surface` | `border-muted` | `object-secondary` | + `object-secondary` `opacity-5`, phủ tràn viền (inset −1) |
| Empty | Focus | `background-surface` | **`border-emphasized`** | `object-secondary` + con trỏ 1,5×24 `object-accent` | — |
| Filled | Typing | `background-surface` | **`border-emphasized`** | `object-primary` + con trỏ | — |
| Filled | Default | `background-surface` | `border-muted` | `object-primary` | — |
| Empty | Disabled | **`background-disabled`** | `border-muted` | `object-disabled`; **Label cũng `object-disabled`** | — |
| Filled | Disabled | **`background-disabled`** | `border-muted` | `object-primary`; Label `object-disabled` | — |
| Empty | Error | `background-surface` | **`border-negative`** | `object-secondary` (placeholder) | — |
| Filled | Error | `background-surface` | **`border-negative`** | `object-primary` | — |

Nút `Action` trong suffix là `TextButtonNeutral` kiểu **Ghost** Small (không nền, chữ `object-primary`
600), đứng sau một vạch ngăn dọc 1px `border-muted` và padding-left 8.

> `Error=True` đổi BA thứ: viền Field sang `border-negative` (1px, vẫn radius 16), chữ **Label** sang `object-negative`, và **hiện dòng Error message** dưới Field (cách 4, style `caption`, màu `object-negative`, FILL bề ngang). Chữ trong ô, nền, placeholder giữ nguyên. Error không kết hợp với Disabled.
>
> Dòng lỗi là **chữ, KHÔNG có icon**. Lý do: viền đỏ + nhãn đỏ + chữ đỏ đã là ba tín hiệu cho cùng một chuyện, thêm icon là tín hiệu thứ tư mà không thêm thông tin. Áp cho mọi field có `Error`: Text input, TextArea, OTPInput, DateInput, Dropdown.

> `Filled + Disabled` giữ text `object-primary` là **cố ý**: nội dung đã được điền, người dùng vẫn cần đọc được nên contrast phải giữ. Chỉ placeholder (`Empty + Disabled`) mới hạ xuống `object-disabled`.

### 6.3b OTP Input (`OTPInput`)

Ô nhập mã xác thực nhiều chữ số. Thấy ô mã xác thực dựng tay ở đâu thì thay bằng component này.

**Props**

| Prop | Kiểu | Giá trị |
|---|---|---|
| `Value` | VARIANT | `Empty` · `Filled` |
| `State` | VARIANT | `Default` · `Focus` · `Typing` · `[No state]` (khi Disabled) |
| `Error` | VARIANT | `False` · `True` |
| `Disabled` | VARIANT | `False` · `True` |
| `Masked` | VARIANT | `False` · `True` — **ẩn chữ số**, dùng cho mã PIN |

**14 variants**: `Empty/Default`, `Empty/Focus`, `Filled/Typing`,
`Filled/Default`, `Empty/Error`, `Filled/Error`, `Empty/Disabled` — mỗi cái × `Masked`. Không có
`Focus/Error`, `Typing/Error` (lỗi chỉ hiện sau khi nhập đủ), không có `Filled/Disabled`.

**Cấu trúc**: root VERTICAL · gap 4 · **328 × 48** trong master (72 khi `Error=True`), bên
trong một `Input wrapper` HORIZONTAL · gap 8, chứa **6 ô**: `.base/input-default` khi
`Masked=False`, `.base/input-masked` khi `Masked=True`. Hai bộ ô này là component nội bộ,
mỗi bộ 7 variant: `State` Empty/Hover/Focus/Filled/Disabled ×
`Error`.

**Một ô**:
- Master vẽ **48 × 48 cố định** (6×48 + 5×8 = 328). Khi code dùng `flex: 1 0 0` ·
  `min-width` 36 · `max-width` 48 để trên máy hẹp ô rút dần về 36 thay vì tràn hoặc cuộn
  ngang — đây là quy ước code, bản thiết kế không mô hình hoá.
- radius 16 (`radius-lg`) · nền `background-surface` · viền 1px
- chữ căn GIỮA, style `body` 16/24
- Ô rỗng mang dấu **`-`** màu `object-secondary` — không phải ô trắng trơn, và cũng không
  phải placeholder chữ số

**Trạng thái của từng ô**

| Trạng thái | Viền | Ruột (`Masked=False`) | Ruột (`Masked=True`) |
|---|---|---|---|
| Chưa tới lượt (`Empty`) | `border-muted` | dấu `-` `object-secondary` | dấu `-` `object-secondary` |
| Đang nhận chữ (`Focus`) | **`border-emphasized`** | dấu `-` + **con trỏ** `2 × 24` `object-accent` ở mép trái | như bên |
| Đã điền (`Filled`) | `border-muted` | chữ số `object-primary` | **chấm tròn 8** `object-primary` (layer `Hidden pin`) |
| `Disabled` | `border-muted` · nền **`background-disabled`** | dấu `-` `object-disabled` | dấu `-` `object-disabled` |
| Lỗi | `border-negative` | giữ nguyên chữ đã gõ | giữ nguyên chấm |

Con trỏ trong OTP là **2 px** rộng (bản trước ghi 1,5 — số 1,5 là của Text input và TextArea,
xem 6.3e). `Masked=True` chỉ đổi ruột ô đã điền thành chấm: ô rỗng vẫn là dấu `-`, ô đang
gõ vẫn có con trỏ, viền và nền giữ nguyên luật.

Con trỏ đỏ là tín hiệu DUY NHẤT cho biết đang gõ vào ô nào — viền đậm lên một bậc thì
nhìn lướt không phân biệt được với ô thường. Sai mã thì báo bằng viền đỏ + dòng lỗi dưới
cụm ô, KHÔNG dùng toast (cùng luật với Text input, mục 6.3).

**Trạng thái Error của cả cụm**

- **Cả sáu ô** đổi viền sang `border-negative` cùng lúc — không tô đỏ riêng ô nào. Mã sai là
  sai cả cụm; không có cách nào biết chữ số nào hỏng, tô một ô là chỉ sai chỗ.
- Nền ô và màu chữ **giữ nguyên** (`background-surface` / `object-primary`). Chỉ khung
  báo lỗi; chữ đổi đỏ nữa là hai tín hiệu cho một lỗi.
- Chữ đã gõ **ở lại trong ô**. Xoá về rỗng là bắt gõ lại sáu số vì lỡ một số.
- Không ô nào có con trỏ: lỗi chỉ hiện sau khi đã nhập đủ sáu số. Chạm vào một ô để sửa
  thì con trỏ về và viền đỏ tắt.
- **Dòng lỗi** nằm trong root VERTICAL của component, ngay dưới `Input wrapper`, cách
  **4** (`gap-1`): style `caption` 13/20 · màu `object-negative` · **căn giữa** · FILL bề
  ngang. Khác Text input — dòng lỗi ở đó căn TRÁI dưới một ô đơn; ở đây cụm ô đối xứng
  nên dòng lỗi lệch trái sẽ đọc thành thuộc về ô số 1.

### 6.3c Date input (`DateInput`)

Ô chọn ngày. Đừng tự ghép Text input với một icon lịch — thấy chỗ nào làm vậy thì thay bằng component này.

**Props**

| Prop | Kiểu | Giá trị |
|---|---|---|
| `Value` | VARIANT | `Empty` · `Filled` |
| `State` | VARIANT | `Default` · `Hover` · `[No state]` (khi Disabled) |
| `Error` | VARIANT | `False` · `True` |
| `Disabled` | VARIANT | `False` · `True` |

Không có prop text (`Data`) và không có prop `Label` ở cấp set — nhãn là instance `.label`
bên trong, chữ mẫu `Label`. Không có `Focus`/`Typing`: ô không nhận gõ tay.

**Cấu trúc**: cùng shell với Text input (6.3) và Dropdown (6.4).

```
DateInput             VERTICAL · gap 4 · FIXED 187 × HUG (h76; 100 khi Error=True)
├─ .label             instance dùng chung · Suffix=False · Tooltips=False · FILL × h24
│  └─ "Label"         body · object-primary (Error: object-negative · Disabled: object-disabled)
├─ Field              HORIZONTAL · padding 0/12 · gap 8 · FILL × h48 · radius 16 (radius-lg)
│  ├─ Text            FILL (flex 1 0 0, min-width 1)
│  └─ Icon            24×24 (size-6) · calendar-days outline · object-secondary
└─ Error message      caption · object-negative · CHỈ khi Error=True
```

**Theo Value × State**

| Value | State | Chữ trong ô | Style | Màu chữ | Nền · viền | State layer |
|---|---|---|---|---|---|---|
| Empty | Default | `Bấm để chọn` | `body` 400 | `object-secondary` | `background-surface` · `border-muted` | — |
| Empty | Hover | `Bấm để chọn` | `body` 400 | `object-secondary` | như trên | `object-secondary` `opacity-5` |
| Filled | Default | `DD/MM/YYYY` | **`body` 400** | `object-primary` | như trên | — |
| Filled | Hover | `DD/MM/YYYY` | `body` 400 | `object-primary` | như trên | `object-secondary` `opacity-5` |
| Empty · Filled | Error | như Default | `body` 400 | như Default; **Label `object-negative`** | `background-surface` · **`border-negative`** + dòng lỗi | — |
| Empty | Disabled | `Bấm để chọn` | `body` 400 | **`object-disabled`**; Label `object-disabled` | **`background-disabled`** · `border-muted` | — |
| Filled | Disabled | `DD/MM/YYYY` | `body` 400 | `object-primary`; Label `object-disabled` | **`background-disabled`** · `border-muted` | — |

Icon `calendar-days` 24 luôn `object-secondary` (Disabled: `object-disabled`). Nó là gợi ý
"chỗ này mở lịch", không phải hành động nhấn được riêng — đừng tô `object-interactive`, đừng
bọc thành Icon button. `calendar` là icon khác trong cùng thư viện, không thay cho nhau.

**Hành vi**: chạm vào ô mở **lịch của hệ điều hành**, ô không nhận gõ tay nên không có con trỏ
và không có bàn phím. Nhờ vậy không có ngày sai định dạng lọt xuống backend. Giá trị hiển thị
theo `DD/MM/YYYY` (docs/ux-writing/04-so-lieu.md).

### 6.3d Radio (`Radio` · `RadioInput`)

Chọn một trong nhiều. Bộ "chọn" của thư viện có ba: Toggle button, Radio, và **Checkbox (6.3f)**.

**Props**: `Checked` (False/True) · `State` (Default/Hover/Pressed/**Error**/`[No state]`) ·
`Disabled` (False/True). **10 variant**: 2 × 4 state khi `Disabled=False`, cộng 2 variant
`Disabled=True` dùng giá trị `State=[No state]` — Disabled không có hover/pressed.

**Vòng tròn**: 32×32 · `rounded-circle` — bằng cỡ ô tick, không phải 20 như radio mặc định
của trình duyệt.

| Checked | State | Nền | Viền **2px** | Ruột | State layer |
|---|---|---|---|---|---|
| False | Default | `background-surface` | `border` | trống | — |
| False | Hover | `background-surface` | **`border-emphasized`** | trống | `object-secondary` `opacity-5` |
| False | Pressed | `background-surface` | **`border-emphasized`** | trống | `object-primary` `opacity-10` |
| True | Default | `background-surface` (VẪN trắng) | **`border-interactive`** | chấm **20** `object-interactive` | — |
| True | Hover | `background-surface` | `border-interactive` | chấm 20 `object-interactive` | `object-interactive` **`opacity-20`** |
| True | Pressed | `background-surface` | `border-interactive` | chấm 20 `object-interactive` | `object-interactive` **`opacity-40`** |
| False | **Error** | `background-surface` | **`border-negative`** | trống | — |
| True | **Error** | `background-surface` | **`border-negative`** | chấm 20 **`object-negative`** | — |
| False | Disabled | **`background-disabled`** | `border-muted` | trống | — |
| True | Disabled | `background-surface` | `border-muted` | chấm 20 `object-disabled` | — |

`Error` dùng khi nhóm radio bắt buộc mà chưa chọn, hoặc lựa chọn không hợp lệ — cùng vai với
Checkbox `Error`. Bản thiết kế mới vẽ Error × Default; hover/pressed chạy theo luật state layer
chung §6.0, fill lấy đúng màu ruột (`object-negative` khi đã chọn).

**Hàng Radio** (`RadioInput`): vòng tròn + cụm chữ, gap 12, canh **MÉP TRÊN**
(`items-start`) — cụm chữ đệm trên 4 để dòng đầu thẳng hàng với tâm vòng tròn. Canh giữa
thì nhãn dài ba dòng sẽ đẩy vòng tròn trôi xuống giữa đoạn văn.

**Danh sách**: các hàng cách nhau 8, giữa hai hàng có một đường kẻ **NÉT ĐỨT** 1px chạy
hết bề ngang — `stroke-dasharray 6 6`, màu `border-muted` (#E2E8F0). Đường kẻ là của
DANH SÁCH, không phải của hàng — hàng cuối không kẻ.

> Nét đứt, không phải nét liền. Dựng bằng gradient lặp ô 12px (6 tô / 6 trống) chứ đừng
> dùng `border: 1px dashed`: nhịp gạch của `dashed` do trình duyệt tự chọn, mỗi máy một
> kiểu và không khớp 6/6 của bản vẽ.

Vùng chạm là CẢ HÀNG, không riêng vòng tròn 32 (cùng luật với ô tick). Ở sheet xoá tài
khoản thì bấm nhầm mục nghĩa là gửi sai dữ liệu về product, nên vùng chạm rộng có giá.

### 6.3e Ô nhập NHIỀU DÒNG (`TextArea`)

Ô nhập nhiều dòng. Là **component riêng** `TextArea`, 9 variant — không phải một hình thái của TextInput.
Thấy màn nào còn ghép TextInput kéo cao thì thay bằng component này.

**Props** — như Text input, bỏ `Prefix` và `Action`:

| Prop | Kiểu | Giá trị |
|---|---|---|
| `Label` | BOOLEAN | `true` |
| `Placeholder` · `Input` | TEXT | `"Placeholder"` · `"Input"` |
| `State` | VARIANT | `Empty` · `Hover` · `Focus` · `Typing` · `Filled` |
| `Disabled` · `Error` | VARIANT | `False` · `True` |

Cùng shell với Text input mục 6.3 — `.label` + `Field`, gap 4 — chỉ khác phần `Field`.
Khổ master 258 × **140** (24 + 4 + 112); **164** khi `Error=True`.

| | Một dòng (6.3) | Nhiều dòng |
|---|---|---|
| Field | HORIZONTAL · h **48** | **VERTICAL** · h **112** (`size/size-28`) · gap 8 |
| Padding | 0/12 | **12 cả bốn phía** |
| Chữ | canh giữa theo chiều dọc | bám **MÉP TRÊN** |
| Bộ đếm ký tự | không có | góc **phải dưới**, `(n/100)` |

- Cao 112 là ĐÚNG BA DÒNG chữ: 12 + 3×24 + 12 + chỗ cho bộ đếm. Không phải một con số
  làm tròn cho đẹp — đừng tự hạ xuống 88 hay kéo lên 120.
- **Bộ đếm** `(0/100)`: style **`caption` 13/20** `object-secondary`, căn PHẢI, chiếm hết
  bề ngang. Nhỏ hơn chữ đang gõ và nhãn — nó là thông tin phụ của ô.

- Viền, nền, màu chữ theo state **giống hệt bảng Text input** (6.3): Hover có state layer
  `object-secondary` 5%; Focus/Typing viền `border-emphasized` + con trỏ **1,5 × 24**
  `object-accent` ở mép trái dòng đầu; Error viền `border-negative`, nhãn `object-negative`, dòng
  lỗi `caption` `object-negative` dưới Field cách 4. Disabled: nền `background-disabled`, nhãn
  và bộ đếm `object-disabled`; chữ đã gõ giữ `object-primary`, placeholder hạ
  `object-disabled`.

### 6.3f Checkbox (`Checkbox` · `CheckboxInput`)

Ô tick `Checkbox` và hàng `CheckboxInput` (ô + chữ).

**Props**: `Value` (Unchecked/Checked/**Indeterminate**) · `State` (Default/Hover/Pressed/**Error**/`[No state]`) ·
`Disabled` (False/True). **15 variant**.

Ngoài ra `CheckboxInput` lộ phần chữ thành property `Label` (TEXT) — override thẳng
trên instance, không phải vào sâu chọn node.

**Ô tick**: 32 × 32 · radius **12** (`radius-base`) — vuông bo, khác vòng tròn của Radio.

| Value | State | Nền | Viền 2px (INSIDE) | Ruột | State layer (radius 12) |
|---|---|---|---|---|---|
| Unchecked | Default | `background-surface` | `border-muted` | trống | — |
| Unchecked | Hover | `background-surface` | **`border-emphasized`** | trống | `object-secondary` `opacity-5`, phủ tràn viền (inset −2) |
| Unchecked | Pressed | `background-surface` | **`border-emphasized`** | trống | `object-primary` `opacity-10`, inset −2 |
| Unchecked | Disabled | **`background-disabled`** | `border-muted` | trống | — |
| Checked | Default | **`background-interactive`** | — | icon `check` **fill** 20 · `object-on-interactive` | — |
| Checked | Hover | `background-interactive` | — | `check` fill 20 | `object-on-interactive` **`opacity-20`** |
| Checked | Pressed | `background-interactive` | — | `check` fill 20 | `object-on-interactive` **`opacity-40`** |
| Checked | Disabled | **`background-disabled`** | `border-muted` | `check` fill 20 · `object-disabled` | — |
| **Indeterminate** | Default | `background-interactive` | — | **vạch 16 × 2**, bo tròn hai đầu · `object-on-interactive` | — |
| Indeterminate | Hover | `background-interactive` | — | vạch 16 × 2 | `object-on-interactive` `opacity-20` |
| Indeterminate | Pressed | `background-interactive` | — | vạch 16 × 2 | `object-on-interactive` `opacity-40` |
| Indeterminate | Disabled | **`background-disabled`** | `border-muted` | vạch 16 × 2 · `object-disabled` | — |
| Unchecked | **Error** | `background-surface` | **`border-negative`** | trống | — |
| Checked | **Error** | **`background-negative`** | — | `check` fill 20 · `object-on-negative` | — |
| Indeterminate | **Error** | **`background-negative`** | — | vạch 16 × 2 · `object-on-negative` | — |

> **Khi nào dùng `Error`.** Khi ô **bắt buộc** chưa tick mà người dùng đã bấm nút tiếp
> tục — điển hình là "Tôi đồng ý với Điều khoản". Báo ngay tại ô kèm một dòng chữ `sm`
> `object-negative` dưới hàng; **không** dùng Toast, vì Toast tự tắt còn lỗi chặn luồng thì
> phải nằm lại. `Error` nằm trên trục `State` nên bản vẽ chỉ có Error × Default; hover và
> pressed trên ô đang lỗi vẫn chạy theo luật state layer chung ở 6.0.

**Indeterminate** dùng khi ô "chọn tất cả" đứng trên một danh sách mới tick một phần. Ruột là
một **vạch ngang 16 × 2**, bo tròn hai đầu (radius 1 = tròn hết ở chiều cao 2), màu
`object-on-interactive` — không phải dấu trừ của font, không phải icon `minus`. Nền và state
layer y hệt `Checked`. Bấm vào ô Indeterminate thì chuyển sang `Checked`.

Checkbox đã chọn là **mảng màu đặc** — ngôn ngữ "đã hoàn tất", đối lập với Radio giữ nền
trắng. Dùng `interactive` nên đổi màu theo brand. Icon là
`check` variant `fill` của UU icon (đúng luật "trạng thái bật dùng fill", `icons.md`).

**Hàng Checkbox** (`CheckboxInput`, 316 × 32): ô tick + `Text wrapper`, gap 12, canh **MÉP
TRÊN** (`items-start`), text wrapper đệm trên 4, chữ `body` `object-primary` FILL — y hệt
`RadioInput`. Vùng chạm là CẢ HÀNG.

### 6.3g Ô tìm kiếm (`SearchInput`)

Ô tìm kiếm. Dùng chung khung
với Text input (6.3): root VERTICAL gap 4, `.label` tuỳ chọn, Field cao **48** radius **16**
(`radius-lg`), viền 1px, padding ngang 12 (`gap-3`), gap 8 (`gap-2`), chữ `body` 400.

**Props**: `Value` (Empty/Filled) · `State` (Default/Hover/Focus/Typing/`[No state]`) · `Disabled`
(False/True) · `Label` (BOOLEAN) · `Placeholder` · `Input`. **7 variant**. **Không có `Error`** —
ô tìm kiếm không báo lỗi định dạng; không kết quả là chuyện của màn kết quả, không phải của ô.

Hai thứ tách nó khỏi Text input:
- **Icon `magnifier` 24** `object-secondary` cố định bên trái, không tắt được.
- **Nút xoá `circle-xmark` 16** `object-secondary` bên phải, chỉ xuất hiện khi `Value=Filled`.

| Value | State | Viền | Nền | State layer | Bên phải |
|---|---|---|---|---|---|
| Empty | Default | `border-muted` | `background-surface` | — | — |
| Empty | Hover | `border-muted` | `background-surface` | `object-secondary` `opacity-5` | — |
| Empty | Focus | **`border-emphasized`** | `background-surface` | — | — |
| Filled | Default | `border-muted` | `background-surface` | — | `circle-xmark` 16 |
| Filled | Typing | **`border-emphasized`** | `background-surface` | — | `circle-xmark` 16 |
| Empty | Disabled | `border-muted` | **`background-disabled`** | — | — |
| Filled | Disabled | `border-muted` | **`background-disabled`** | — | — |

Chữ: gợi ý `object-secondary`, giá trị `object-primary`. Ô Disabled **đã có chữ vẫn giữ
`object-primary`** — cùng luật với Text input, để người dùng còn đọc được thứ mình đã nhập; chỉ
placeholder mới xuống `object-disabled`.

> **Hai chỗ bản dựng là chuẩn.** (1) Vùng chạm nút xoá là **32 × 32**, icon vẫn vẽ 16 —
> 16px dưới ngưỡng chạm tối thiểu trên điện thoại. (2) Icon `magnifier` khi `Disabled`
> xuống **`object-disabled`**, cùng luật với `calendar-days` của DateInput.

Chưa có: trạng thái đang tải kết quả, panel gợi ý / lịch sử tìm kiếm bung ra dưới ô,
nút "Huỷ" cạnh ô khi focus, cỡ nhỏ.

### 6.4 Dropdown

**Props**: `Data` (TEXT, `"Data"`) · `Label` (BOOLEAN, `true`) · `Value` (VARIANT: `Empty` ·
`Filled`) · `State` (VARIANT: `Default` · `Hover` · `[No state]`) · `Error` · `Disabled`.
**8 variant.**

Dùng lại y hệt shell của Text input:
- Root VERTICAL · gap 4 · FIXED 187 × HUG (h76; 100 khi Error=True)
- `.label` (instance dùng chung với Text input, `Suffix=False`)
- `Field`: h48 · radius 16 · padding 0/12 · gap 8 · `background-surface` · border 1px `border-muted`
- Icon `chevron-down` 16×16 · `object-secondary` ở mọi state

| Value | State | Chữ trong ô | Style | Màu chữ | Nền · viền | State layer |
|---|---|---|---|---|---|---|
| Empty | Default | `Bấm để chọn` | `body` 400 | `object-secondary` | `background-surface` · `border-muted` | — |
| Empty | Hover | `Bấm để chọn` | `body` 400 | `object-secondary` | như trên | `object-secondary` `opacity-5` (inset −1) |
| Filled | Default | giá trị `Data` | **`label` 600** | `object-primary` | như trên | — |
| Filled | Hover | `Data` | `label` 600 | `object-primary` | như trên | `object-secondary` `opacity-5` |
| Empty · Filled | Error | như Default | như Default | như Default; **Label `object-negative`** | `background-surface` · **`border-negative`** + dòng lỗi | — |
| Empty | Disabled | `Bấm để chọn` | `body` 400 | **`object-disabled`**; Label `object-disabled` | **`background-disabled`** · `border-muted` | — |
| Filled | Disabled | `Data` | `label` 600 | `object-primary`; Label `object-disabled` | **`background-disabled`** · `border-muted` | — |

Không có Focus/Typing (ô không nhận gõ). Danh sách option bung ra nằm ở **`Menu` (6.21)**.

Dropdown và `DateInput` (6.3c) là cùng một mẫu "ô chọn": gợi ý rỗng `body` 400
`object-secondary`, icon mép phải xám `object-secondary`, cùng bảng Hover/Error/Disabled.
Khác nhau ở giá trị đã chọn: Dropdown nhấn **`label` 600**, DateInput giữ **`body` 400**; và
icon (`chevron-down` 16 ↔ `calendar-days` 24). Recipe CSS `.uu-field__hint` /
`.uu-field__value` / `.uu-field__icon` trong `tokens.css`.

### 6.5 Navigation bar

**Props**

| Prop | Kiểu | Mặc định |
|---|---|---|
| `Content` | SLOT | slot tự do, không stretch child |
| `Back action` | BOOLEAN | `true` |
| `Sub action` | BOOLEAN | `false` |
| `Mini app` | BOOLEAN | `true` — hiện/ẩn `.Mini App Control` |

**Layout**: `430 × 56` · HORIZONTAL · padding `0/12` · gap `12` · FIXED × FIXED · **không có nền riêng** (trong suốt, nằm trên nền màn)

```
[ IconButtonNeutral Solid Inverted=True 48 (chevron-left) ] [ Content slot — FILL ] [ IconButtonAccent Solid Inverted=True 48 ] [ .Mini App Control ]
```

- Back: `IconButtonNeutral` / `Solid` / `Inverted=True` / Base (48) — tức nền `background-surface`, icon `chevron-left` `object-primary`
- Content slot: mặc định chứa text `"Screen"` style `heading-base`
- Sub action: `IconButtonAccent` / `Solid` / `Inverted=True` / Base (48), ẩn mặc định
- `.Mini App Control`: hiện mặc định, tắt bằng prop `Mini app` khi màn không chạy trong Zalo

**`.Mini App Control`** — pill điều khiển mini-app (kiểu WeChat/Zalo mini program):
- `83 × 34` · padding `4/8` · gap `8` · radius `9999` · nền trắng · border 1px đen
- Cấu trúc: `Icon L (24) | Divider 1×18 | Icon R (24)`
- Variants: `Power` (Off/On) × `Single` (Off/On) × `White` (Off/On) = 6


### 6.6 Toast

**Props**: `Type` (`Neutral` · `Negative` · `Positive` · `Warning`) · `Content` (TEXT) · `Action` (BOOLEAN, mặc định `true`)

**Layout**: `428 × 64` · HORIZONTAL · padding `8/16` · gap `12` · FIXED × HUG · radius `12` (`radius-base`) · shadow `0 4px 12px rgba(0,0,0,0.10)` = `elevation-medium`

```
[ Content — FILL ] [ Text button Neutral Solid Inverted=True ] [ Icon button Neutral Ghost 48 (xmark) ]
```

**Bảng theo type**

| Type | Background | Content | Nút Action | Nút đóng |
|---|---|---|---|---|
| `Neutral` | `background-inverted` | `object-primary-inverted` | `Inverted=True` | `Inverted=True` |
| `Negative` | `background-negative` | **`object-on-negative`** | `Inverted=True` | `Inverted=True` |
| `Positive` | `background-positive` | **`object-on-positive`** | `Inverted=True` | `Inverted=True` |
| `Warning` | `background-warning` | **`object-on-warning`** | `Inverted=False` | `Inverted=False` |

Quy tắc: **độ sáng của nền quyết định cả ba phần tử cùng lúc.** `background-warning` (`yellow-30`) là nền sáng nên content, nút Action và nút đóng đều lật sang tối. Ba type kia nền tối nên cả ba đều sáng. Không có ngoại lệ — nếu thêm type mới, áp đúng quy tắc này.

Nút Action là `TextButtonNeutral / Solid / Base` (48, nền `background-surface` khi `Inverted=True`); nút đóng là `IconButtonNeutral / Ghost / Base` — hộp **48 × 48**, `Icon` **24 × 24**, glyph `xmark` hiện **15,3px** ở giữa (xem 6.11). Nếu chữ X trông to gần bằng hộp 24 hoặc chỉ ~11px thì đang dùng bộ icon khác hoặc SVG bị crop / sót `width="18"`. Chữ nội dung dùng style `body` (400), không phải `label`.

**Contrast đã đo** (WCAG AA, ngưỡng 4.5 cho chữ thường): Neutral 21.00 · Negative 4.83 · Positive 5.02 · Warning 15.93. Cả bốn type đều đạt.

### 6.7 Toggle button

Nút hai trạng thái bật/tắt. Khác Text button ở chỗ nó **giữ trạng thái**, nên `Active` là một prop độc lập với `State`.

**Props**

| Prop | Kiểu | Giá trị |
|---|---|---|
| `Size` | VARIANT | `Large` · `Base` · `Small` |
| `State` | VARIANT | `Default` · `Hover` · `Pressed` · `Disabled` |
| `Active` | VARIANT | `False` · `True` |
| `Label` | VARIANT | `False` (icon-only) · `True` (icon + chữ) |
| `↳ Label` | TEXT | Chữ khi `Active=False`. Mặc định `"Action"` |
| `↳ Active label` | TEXT | Chữ khi `Active=True`. Mặc định `"Action"` |

48 variants = 3 × 4 × 2 × 2, đủ tổ hợp.

Hai prop chữ là **cố ý**: cho phép đổi copy theo trạng thái (kiểu `Theo dõi` → `Đang theo dõi`). Trong code map thành hai prop riêng, đừng dùng chung một chuỗi.

Tên hai prop khớp với giá trị của variant `Active`, và khớp với typography mode `Active` — cả ba dùng chung một từ để chỉ cùng một trạng thái.

**Layout**

| Size | Icon-only | Có label | Padding (label) | Icon |
|---|---|---|---|---|
| Large | 56 × 56 | h56 | `8 / 24 / 8 / 24` | 24 |
| Base | 48 × 48 | h48 | `8 / 16 / 8 / 16` | 24 |
| Small | 32 × 32 | h32 | `4 / 12 / 4 / 12` | 16 |

Gap 8 · radius `rounded-circle` · **không có border, không có shadow** ở mọi variant. Đây là chủ đích — component này dùng nổi trên ảnh hoặc nền màu, không phải trên nền trắng.

**Màu và chữ**

| | `Active=False` | `Active=True` |
|---|---|---|
| Background | `background-surface` | `background-interactive` |
| Icon & chữ | `object-primary` | `object-on-interactive` |
| Biến thể icon | **`outline`** | **`fill`** |
| Text prop | `↳ Label` | `↳ Active label` |
| Font weight | `semibold` (600) | `bold` (700) — qua typography mode `Active` |

Hai điểm dễ sót khi build:
- Icon **đổi hẳn biến thể** outline ↔ fill, không chỉ đổi màu.
- Chữ **đậm thêm một bậc** khi bật, thực hiện bằng typography mode `Active` (mục 3) chứ không phải override weight trên từng node. Vì component hug width, chiều rộng chênh đúng 1px giữa hai trạng thái (115 ↔ 116 ở Base). Đừng hardcode width.

**State overrides**

| State | Active=False | Active=True |
|---|---|---|
| `Default` | baseline | baseline |
| `Hover` | + state layer `object-primary` `opacity-5` | + state layer `object-on-interactive` `opacity-20` |
| `Pressed` | + state layer `object-primary` `opacity-10` | + state layer `object-on-interactive` `opacity-40` |
| `Disabled` | nền giữ `background-surface`, chữ `object-disabled` | nền đổi `background-disabled`, chữ `object-disabled` |

Khớp đúng quy tắc mục 6.0, không ngoại lệ. `Disabled` không có state layer, và không có state `Loading`.

### 6.8 Bottom sheet

Hai component tách vai rõ ràng: `.base/sheet` là bản thân tấm sheet, `Sheet` là màn hình hoàn chỉnh có scrim.

#### `.base/sheet` — tấm sheet

**Props**

| Prop | Kiểu | Mặc định |
|---|---|---|
| `Header` | TEXT | `"Header"` |
| `Slot` | SLOT | trống, không stretch child |
| `CTA` | BOOLEAN | `true` — hiện/ẩn **toàn bộ** nhóm nút |
| `Back` | BOOLEAN | `false` — hiện nút **quay lại** ở mép trái header |

**Back và Close loại trừ nhau.** Sheet gốc có nút đóng bên phải, không có back. Sheet **con**
(mở ra từ một sheet trước đó — chọn tỉnh rồi tới chọn huyện, xem điều khoản rồi tới xác
nhận) bật `Back=true`: nút quay lại xuất hiện bên trái **và nút đóng biến mất**. Không bao
giờ hiện cả hai. Back đưa về sheet cha; muốn đóng cả chuỗi thì về sheet gốc rồi bấm đóng —
đó là chủ đích, để người dùng không mất dấu đang ở tầng nào.

> **Nút đóng và nút quay lại loại trừ nhau.** Sheet có **hoặc** nút đóng bên phải **hoặc**
> nút quay lại bên trái, không bao giờ cả hai. Trong code dùng **một** prop
> `navigation: 'close' | 'back'` (hoặc `back: boolean` tự ẩn close), đừng expose hai boolean
> rời rồi để màn tự phối. Trong file thiết kế nên mô hình bằng một variant
> `Navigation=Close/Back` thay vì hai boolean.

Nút phụ và hướng xếp **không** có prop ở cấp `.base/sheet`. Chọn vào instance `Button group` bên trong để đổi `Secondary button` và `Layout` — đó là prop của component set ở mục 6.9.

**Cấu trúc**

```
.base/sheet        VERTICAL · gap 0 · FIXED × HUG · radius 24 (rounded-2xl, cả 4 góc) · background-surface · clip
├─ Header          HORIZONTAL · padding 16/16/0/16 · gap 16 · FILL × HUG · h48 · căn giữa theo trục phụ
│  ├─ Back         IconButtonNeutral / Outline / Small (32) · icon chevron-left 16 · visible ← prop Back (mặc định ẩn)
│  ├─ Title        "Header" · heading-base · object-primary · FILL
│  └─ Close        IconButtonNeutral / Outline / Small (32) · icon xmark 16 · object-primary · ẨN khi Back=true
└─ Body            VERTICAL · padding 12/16/16/16 · gap 12 · FILL × HUG
   ├─ Slot         FILL × HUG — chỗ đặt nội dung tuỳ ý
   └─ Button group instance của component set ở mục 6.9 · Layout=Horizontal · FILL × HUG
                   visible ← prop CTA
```

Nhóm nút **dùng chung component set `ButtonGroup`** (mục 6.9), giống Dialog — không phải frame tự dựng. Nhờ vậy Bottom sheet có sẵn cả `Layout=Vertical`.

Bo cả bốn góc chứ không riêng hai góc trên, vì sheet nổi cách hai mép 12px chứ không dính sát cạnh màn hình.

Khi bật `Secondary button` trên instance, hai nút chia đôi hàng, mỗi bên `(rộng − 12) / 2`.

> **Khi code:** dùng `flex: 1 1 0` cho cả hai nút, **không** dùng `flex: 1 1 auto`. Với basis `auto`, trình duyệt chia phần dư đều lên trên bề rộng nội dung vốn khác nhau, nên hai nút có nhãn dài ngắn khác nhau sẽ ra lệch vài px thay vì đúng một nửa.

#### `Sheet` — template màn hình

`390 × 844` · VERTICAL · căn `MAX` (dồn xuống đáy) · FIXED × FIXED

| Lớp | Giá trị |
|---|---|
| Scrim | `overlay` (đen 10%) + `BACKGROUND_BLUR 16` |
| Wrapper | padding `0/12` → sheet thụt vào 12px mỗi bên |
| Sheet | instance `.base/sheet`, FILL |
| Đáy | instance `IOS Home indicator` (Transparent=True) |

> `Sheet` là **template màn hình, không phải component sản phẩm** — nó chứa `IOS Home indicator` thuộc nhóm Device elements. Dùng nó để dựng mockup; khi code thì dựng lại phần scrim + wrapper theo bảng trên và bỏ home indicator, vì OS tự vẽ.
>
> `Sheet` expose đúng **một** prop: `Footer` (INSTANCE_SWAP, mặc định `IOS Home indicator /
> Theme=Default, Transparent=True`) để đổi phần đáy sang Device element khác khi dựng mockup
> Android. `Header`, `Slot`, `CTA`
> nằm ở instance `.base/sheet`; `Secondary button` và `Layout` nằm sâu hơn một cấp nữa, ở
> instance `Button group`. Khi code bỏ hẳn `Footer`, OS tự vẽ.

### 6.9 ButtonGroup

Component set dùng chung cho cặp nút chính/phụ. Cả Dialog và Bottom sheet đều dùng.

**Props**: `Layout` (VARIANT: `Horizontal` · `Vertical`) · `Secondary button` (BOOLEAN, mặc định `true`)

| Layout | Cấu trúc | Thứ tự | Kích thước |
|---|---|---|---|
| `Horizontal` | H · gap 12 · FIXED × HUG | **phụ (Outline) bên trái, chính (Solid) bên phải** | cả hai `FILL` + `layoutGrow: 1` → chia đều |
| `Vertical` | V · gap 12 · FIXED × HUG | **chính (Solid) trên, phụ (Outline) dưới** | cả hai `FILL` chiều ngang |

Nút dùng `Text button - Accent` size `Large` (56). `min-width` 56.

Chú ý thứ tự đảo giữa hai layout: nằm ngang thì nút chính ở **bên phải**, xếp dọc thì nút chính ở **trên**. Cả hai đều đặt nút chính ở vị trí ngón tay tới dễ nhất.

### 6.10 Dialog

Gồm hai component, cùng mô hình như Bottom sheet:

| Component | Là gì |
|---|---|
| `.base/dialog` | Chỉ tấm panel |
| `Dialog` | **Template màn hình** 390 × 844 — scrim + panel + home indicator |

**Props của `.base/dialog`**

| Prop | Kiểu | Mặc định |
|---|---|---|
| `Slot` | SLOT | rỗng, không stretch child |
| `Close button` | BOOLEAN | `true` |
| `Button group` | BOOLEAN | `true` |

**Panel**: `384` rộng khi đứng riêng · radius `24` (`rounded-2xl`) cả bốn góc · nền `background-surface` · VERTICAL · FIXED × HUG · gap 0

```
.base/dialog         V · g0 · r24 · background-surface
├─ Header            H · p 16/16/0/16 · g16 · FILL × HUG · căn PHẢI
│  └─ Close          Icon button - Neutral / Outline / Small (32) · border 2px · xmark 16
└─ Body              V · p 12/16/16/16 · g12 · FILL × HUG
   ├─ Slot           FILL × HUG
   └─ Button group   instance · Layout=Horizontal · Secondary button=false
```

**Khác Bottom sheet ở hai điểm** — đừng lẫn:

| | Bottom sheet | Dialog |
|---|---|---|
| Vị trí trên màn hình | sát đáy | **căn giữa theo chiều dọc** |
| Tiêu đề | có prop `Header` (TEXT) trong header | **không có tiêu đề** — toàn bộ nội dung nằm trong `Slot` |
| Nhóm nút | `ButtonGroup` (mục 6.9) | `ButtonGroup` (mục 6.9) |

Header của Dialog chỉ chứa nút đóng, căn phải (`primaryAxisAlignItems: MAX`). Nếu cần tiêu đề, đưa vào `Slot`.

**Đối chiếu prop giữa hai component** (khác nhau, dễ nhớ sai):

| Chức năng | `.base/sheet` | `.base/dialog` |
|---|---|---|
| Nội dung | `Slot` | `Slot` |
| Tiêu đề | `Header` (TEXT) | — |
| Hiện/ẩn nhóm nút | `CTA` | `Button group` |
| Hiện/ẩn nút đóng | — (hiện, trừ khi `Back=true`) | `Close button` |
| Nút quay lại (sheet con) | `Back` — thay chỗ nút đóng | — (Dialog không xếp tầng) |
| Nút phụ, hướng xếp | vào instance `Button group` | vào instance `Button group` |

**Lớp scrim** giống Bottom sheet: fill `overlay` (đen 10%, alpha nằm trong token) + `BACKGROUND_BLUR 16`, panel thụt `gap-3` (12) mỗi bên → rộng 366 trên khung 390. Đừng nhân thêm opacity lên fill.

`Dialog` chứa `IOS Home indicator` nên cũng là template màn hình. Build code thì dựng theo `.base/dialog` và tự làm scrim.

### 6.10b Pagination

Hàng **gạch** chỉ vị trí trong một băng chuyền. Không phải chấm tròn.

**Props**

| Prop | Kiểu | Giá trị |
|---|---|---|
| `Position` | VARIANT | `Begin` · `Middle` · `End` |

**Cấu trúc**

```
Pagination        HORIZONTAL · gap 4 · items center · 104 × 2
└─ 🔒Base/Slick × 5   h2 · radius circle
```

| Slick | Bề rộng | Nền |
|---|---|---|
| Đang xem (`Active=True`) | `size-6` (24) | `background-accent` |
| Còn lại (`Active=False`) | `size-4` (16) | `overlay` |

Tổng 104 = 24 + 4×16 + 4 khe×4. `🔒Base/Slick` khoá — đừng dùng riêng.

**Chỉ có BA vị trí, không phải năm.** `Position` đặt gạch dài ở slick thứ 1 (`Begin`), thứ 3 (`Middle`) hay thứ 5 (`End`). Component KHÔNG mô hình hoá "trang 2 trên 5" — nó nói *đang ở đầu, giữa hay cuối*. Băng chuyền nhiều hơn 5 trang vẫn dùng đúng năm gạch này.

Bề RỘNG là tín hiệu chính, màu chỉ phụ: nhìn nghiêng hay mù màu vẫn đọc ra đang ở đâu.

> Gạch không-active dùng `overlay` (đen 10%), không dùng màu nền thương hiệu: gạch nằm dưới banner nhiều màu, đen 10% bám được lên cả ảnh sáng lẫn ảnh tối, còn một màu nền nhạt sẽ chìm vào chính dải màu của banner.

### 6.11 Icon

Component `Icon` là **wrapper INSTANCE_SWAP**, không tự vẽ. Nó trỏ tới một thư viện icon ngoài (hơn 180 component set được liệt kê trong `preferredValues`). Tên icon theo convention kiểu Font Awesome: `chevron-left`, `chevron-down`, `xmark`.

**Hộp icon dùng trong hệ thống**: `24` (Icon button Large/Base, suffix của Text button L/Base, DateInput, prefix Segment item) · `16` (Icon button Small, suffix Small, Dropdown chevron, tooltip của `.label`) · `18` chỉ cho `.loading` và slot `.suffix` của Segment item. Màu luôn qua token `object-*`.

**Nét vẽ nhỏ hơn hộp.** UU icon vẽ trên lưới 18 có lề, nên nét thật chiếm khoảng **60–65% hộp**: `xmark` trong hộp 24 chỉ rộng **15,3px**, trong hộp 16 khoảng 10px. Đây là con số đo trên nút đóng của Toast. Con số này là **tính năng, không phải lỗi**: hộp 24 giữ vùng chạm và nhịp layout, lề giữ cho icon nét mảnh không lấn chữ.

> **Chỉ dùng UU icon.** Đừng thay bằng Lucide, Phosphor hay Font Awesome dù "giữ tên và
> size": mỗi bộ có tỷ lệ nét/hộp riêng. Lucide `x` ở hộp 24 vẽ nét 12px stroke 2,
> Font Awesome `xmark` lấp gần hết hộp — cùng "24" nhưng nhìn khác hẳn 15px của UU icon.
> Đổi bộ icon là đổi tỷ lệ nét/hộp, không có cách nào "giữ đúng size" được.

Cách lấy SVG đúng: `download_assets` node trong `uu-icon-index.json` (viewBox `0 0 18 18`, giữ
nguyên lề, bỏ `width`/`height`), hoặc dùng luôn file mà `get_design_context` xuất cho màn
đang dựng — file đó đã là viewBox `0 0 24 24` **kèm lề**, đặt vào hộp 24 là đúng. Đừng crop
viewBox sát nét, đừng để `width="18"` sót lại trong `<svg>` (icon sẽ render 18 thay vì 24).

### 6.12 `.loading`

Spinner `18 × 18`, dựng bằng 2 vector gradient tuyến tính + 1 chấm 2×2. Dùng trong `State = Loading` của button. Prototype: spinner tròn quay 360°, kích thước 18, màu kế thừa từ text color của button.

### 6.13 Segmented control (`SegmentedControl` · `.Segment item`)

Component `SegmentedControl` (HUG × HUG) và item nội bộ `.Segment item`. Là thanh chọn một-trong-nhiều
kiểu tab pill, khác Toggle button (bật/tắt độc lập) và Radio (chọn trong form).

**Vỏ** (`SegmentedControl`): HORIZONTAL · padding **4** cả bốn phía · gap **2** · radius **16**
(`radius-lg`) · nền **`background-emphasized`** (nền trung tính của brand, xem 2.5). Không có prop ở cấp vỏ; số item = số instance `.Segment item` bên
trong, master có 3.

**Item** (`.Segment item`): HORIZONTAL · `min 40 × 40` · padding **4/12** · gap 8 · HUG · radius 12.

| Prop | Kiểu | Mặc định |
|---|---|---|
| `Active` | VARIANT | `False` · `True` — **đang được chọn** |
| `State` | VARIANT | `Default` · `Hover` · `Pressed` · `Disabled` |
| `↳ Name` | TEXT | `"Page"` |
| `Page name` | BOOLEAN | `true` — ẩn chữ để làm item icon-only |
| `Icon` · `↳ Icon` | BOOLEAN · INSTANCE_SWAP | `false` — icon 24 đứng trước chữ |
| `Suffix` · `↳ Slot` | BOOLEAN · INSTANCE_SWAP | `false` — slot 18 sau chữ (badge, đếm) |

| Active | State | Nền | Shadow | Chữ (`label` 16/24) | State layer (radius 12) |
|---|---|---|---|---|---|
| False | Default | trong suốt | — | `object-secondary` · 600 | — |
| False | Hover | trong suốt | — | `object-secondary` · 600 | `object-primary` `opacity-5` |
| False | Pressed | trong suốt | — | `object-secondary` · 600 | `object-primary` `opacity-10` |
| False | Disabled | trong suốt | — | `object-disabled` · 600 | — |
| True | Default | **`background-surface`** | **`elevation-low`** | `object-primary` · **700** (mode `Active`) | — |
| True | Hover | `background-surface` | `elevation-low` | `object-primary` · 700 | `object-primary` `opacity-5` |
| True | Pressed | `background-surface` | `elevation-low` | `object-primary` · 700 | `object-primary` `opacity-10` |
| True | Disabled | **`background-disabled`** | `elevation-low` | `object-disabled` · 700 | — |

Ba điều dễ làm sai:

- **Chữ đậm lên bằng mode `Active`**, không phải override weight — variant `Active=True`
  set `explicitVariableModes typography=Active` ở cấp item, cùng cơ chế với Toggle button
  (mục 3, 6.7). Trong CSS gắn `.uu-is-active` lên item đang chọn.
- State layer của item dùng fill **`object-primary`** ở cả hai giá trị `Active`, bậc 5/10
  (nền sáng) — không phải `currentColor` như button, vì chữ item thường là `object-secondary`.
- Vỏ 48 = 40 + 4×2, item HUG nên thanh co theo chữ; đừng chia đều bề ngang trừ khi màn yêu
  cầu, và đừng hardcode 204.

---

### 6.14 Badge (`Badge`)

Nhãn trạng thái dạng viên thuốc, không bấm được. Prop duy nhất **`Tone`** = `Neutral` · `Success` · `Warning` · `Error` (4 variant).

- HORIZONTAL · cao **24** (`size-6`) · padding ngang **4** (`gap-1`) · HUG theo chữ · radius `rounded-circle`.
- Chữ **`title-sm`** (13/20, 600), một dòng, không xuống dòng. Không có icon, không có size khác.

| Tone | Nền | Chữ |
|---|---|---|
| Neutral | `background-inverted` | `object-primary-inverted` |
| Success | `background-positive` | `object-on-positive` |
| Warning | `background-warning` | `object-on-warning` |
| Error | `background-negative` | `object-on-negative` |

Cùng quy tắc với Toast: `background-{status}` chỉ đi với `object-on-{status}`. Không có state (không hover/pressed/disabled) — đây không phải control. Chưa có: kích thước khác 24, icon trước chữ, tone theo brand (interactive).

### 6.15 Status indicator (`StatusIndicator`)

Chấm màu + chữ trạng thái. Hai prop: **`Tone`** = `Neutral` · `Success` · `Warning` · `Error`; **`Container`** = `None` · `Filled` (8 variant).

Cấu trúc: HORIZONTAL · gap **6** (`gap-1-5`) · `Dot` (ellipse **8×8**, `size-2`) · chữ **`title-sm`** 600.

| Container | Kích thước | Nền | Chấm | Chữ |
|---|---|---|---|---|
| `None` | cao 20, không padding, không radius | — | `object-{tone}` (Neutral: `object-secondary`) | `object-primary` |
| `Filled` | cao 24 · padding 2/8 (`gap-0-5`/`gap-2`) · radius `rounded-circle` | Neutral `background-inverted`, còn lại `background-{tone}` | `object-on-{tone}` (Neutral: `object-on-dark`) | `object-on-{tone}` (Neutral: `object-on-dark`) |

Lưu ý `object-warning` là `yellow-50` (1.92 trên trắng): ở `Container=None` nó chỉ là chấm, chữ vẫn `object-primary` — đúng nguyên tắc "một tín hiệu cho một trạng thái" có chữ đi kèm. Không có state; không phải control.

### 6.16 Notification badge (`NotificationBadge`)

Chấm/số báo có mới, đặt lên góc icon hoặc tab. Prop **`Content`** = `Count` · `Dot` (2 variant).

| Content | Kích thước | Nền | Chữ |
|---|---|---|---|
| `Count` | cao **16** (`size-4`) · min-width 16 · padding ngang 4 (`gap-1`) · radius `rounded-circle` · HUG theo số | `background-attention` | `object-on-attention`, **11px** (`font-size-xs`) / 16 (`font-height-xs`) / 600, căn giữa |
| `Dot` | **8×8** (`size-2`) tròn | `background-attention` | — |

Dùng họ **`attention`** (2.2): badge báo **có mới, chưa xem** — không phải `negative` (lỗi), không phải `warning` (rủi ro), không phải `accent`. Họ status, không đổi theo brand. Chưa có: ngưỡng `99+`, vị trí neo lên icon (offset), variant màu khác — màn tự đặt vị trí, đừng tự chế thêm variant.

### 6.17 Switch (`Switch`)

Công tắc bật/tắt một thiết lập, **có hiệu lực ngay** — khác Checkbox (chọn rồi mới bấm nút xác
nhận).

**Props**: `Selected` (False/True) · `State` (Default/Hover/**Focus**/Pressed/`[No state]`) ·
`Disabled` (False/True). **10 variant** = 2 × 4 state khi `Disabled=False`, cộng 2 variant
`Disabled=True` dùng `State=[No state]`.

**Rãnh**: 56 × 32 (`size-14` × `size-8`) · radius **16** (`radius-lg`).
**Núm**: khi TẮT là vòng tròn **16** nằm cách mép trái 8 (`gap-2`); khi BẬT nở thành vòng
**28** (`size-7`) nền `background-surface` cách mép phải 2 (`gap-0-5`), bên trong có icon
`check` fill **16** màu `object-interactive`. Núm đổi cả vị trí lẫn kích thước — đó là chuyển
động chính, đừng chỉ trượt một núm cùng cỡ.

| Selected | State | Rãnh | Viền 2px | Núm | State layer |
|---|---|---|---|---|---|
| False | Default | `background-surface` | `border` | tròn 16 `object-secondary` | — |
| False | Hover | `background-surface` | **`border-emphasized`** | tròn 16 `object-secondary` | `object-secondary` `opacity-5` |
| False | Focus | `background-surface` | `border-emphasized` | tròn 16 `object-secondary` | `object-secondary` `opacity-10` |
| False | Pressed | `background-surface` | `border-emphasized` | tròn 16 **`object-primary`** | `object-primary` `opacity-10` |
| False | Disabled | **`background-disabled`** | `border-muted` | tròn 16 `object-disabled` | — |
| True | Default | **`background-interactive`** | — | tròn 28 `background-surface` + `check` 16 `object-interactive` | — |
| True | Hover | `background-interactive` | — | tròn 28 | `background-surface` `opacity-20` |
| True | Focus | `background-interactive` | — | tròn 28 | `background-surface` `opacity-40` |
| True | Pressed | `background-interactive` | — | tròn 28 | `background-surface` `opacity-40` |
| True | Disabled | **`background-disabled`** | — | tròn 28 `background-surface` + `check` 16 `object-disabled` | — |

Đọc bảng theo luật 6.0: nửa TẮT là nền sáng nên 5/10, nửa BẬT là nền đặc nên 20/40 — fill
luôn là màu content của variant, nên dựng bằng `currentColor` chạy đúng cả hai nửa. Riêng
`Pressed` khi TẮT thì núm đổi từ `object-secondary` sang `object-primary` (đậm thêm một bậc);
đây là ngoại lệ duy nhất của "state layer là toàn bộ hiệu ứng" trong component này và file vẽ
đúng như vậy.

`Switch` **BẬT dùng `interactive`** nên đổi màu theo brand.

Chưa có: nhãn đi kèm (hàng `SwitchInput` như `CheckboxInput`), cỡ nhỏ, switch có
chữ On/Off trong rãnh. Cần nhãn thì màn tự dựng hàng và nói rõ đó là phần tự chế.

### 6.18 Chip (`Chip`)

Nhãn bấm được, **giữ trạng
thái đã chọn** — khác button (bấm xong là xong) và khác Segment item (nằm trong vỏ chung).

**Hình học chép nguyên `TextButtonNeutral` Small**, không có số riêng: cao **32**, padding **4/12**
(`gap-1`/`gap-3`), gap **8** (`gap-2`), radius `rounded-circle`, viền **2px**, chữ `body` 16/24,
`min-width` = `min-height` = 32 (`size-8`).

**Props**: `Type` (Select/Dropdown) · `Selected` (False/True) · `State` (Default/Hover/Pressed/Disabled)
· `Label` (TEXT). **16 variant**.

| Selected | State | Nền | Viền 2px | Chữ | State layer |
|---|---|---|---|---|---|
| False | Default · Hover · Pressed | — | `border` | `object-primary` | `object-primary` `opacity-5` / `opacity-10` |
| True | Default · Hover · Pressed | **`background-interactive-muted`** | **`border-interactive`** | `object-primary` | `object-primary` `opacity-5` / `opacity-10` |
| False | Disabled | — | `border-muted` | `object-disabled` | — |
| True | Disabled | **`background-disabled`** | `border-muted` | `object-disabled` | — |

Chip đã chọn dùng `interactive` nên đổi theo brand. Disabled theo đúng luật của button: chip chưa
chọn bỏ nền (như `Outline` Disabled), chip đã chọn giữ nền (như `Solid` Disabled).

> **Vì sao chữ KHÔNG sang `object-interactive` khi chọn.** Màu thương hiệu đã nằm ở viền và nền
> chip; chữ giữ `object-primary` thì đọc được với **mọi** màu thương hiệu. `object-interactive` trên
> `background-interactive-muted` phụ thuộc màu brand — với màu thương hiệu hiện tại đạt 5.62, nhưng
> một màu thương hiệu sáng hơn có thể rơi dưới 4.5. Cũng **đừng** lấy `background-emphasized` làm
> nền chip đã chọn: nó là `slate-20`, trùng y hệt `background-disabled` — chip đã chọn sẽ nhìn như chip tắt.

**`Type=Dropdown`** thêm `chevron-down` 16 `object-secondary` ở cuối; hiện giá trị đang chọn, bấm
vào mới bung danh sách. Panel bung ra là phần màn tự dựng, chưa chốt.

Chưa có: icon đứng trước chữ, cỡ khác 32, chip có nút xoá (input chip).

### 6.19 Template màn (`ResultScreen` · `ErrorScreen`)

Hai template màn. Cùng họ với `Sheet` (6.8) và
`Dialog` (6.10) — là **bố cục màn để tham chiếu**, không phải component để import: khung **390 × 844**,
`NavigationBar` trên cùng, `Body` FILL căn giữa cả hai chiều padding ngang 16, `Footer` HUG padding 16,
`IOS Home indicator` dưới cùng.

| Template | Nội dung | Footer |
|---|---|---|
| `ResultScreen` | Việc đã xong, người dùng phải sang chỗ khác | `ButtonGroup` dọc — nút chính trên, lối đi phụ dưới |
| `ErrorScreen` | Lỗi chặn cả chức năng cốt lõi, không tự khắc phục được | **Một** nút duy nhất: thử lại |

`NavigationBar` ở cả hai để `Back action=false` — việc đã xong hoặc hệ thống đang hỏng thì không có
chỗ để quay lại. `Mini app=false` để template dùng được ngoài môi trường mini app.

> `ErrorScreen` chỉ có **một** nút là cố ý. Còn việc gì khác người dùng làm được ngay thì lỗi đó
> không chặn chức năng cốt lõi — nó thuộc nhánh `Dialog` hoặc `Toast`, không phải màn lỗi toàn trang.

### 6.20 Tab (`Tab`)

Mục chuyển
giữa các **vùng nội dung khác nhau**, không phải để lọc một danh sách.

**Props**: `State` (VARIANT: `Default` · `Active`) · `Tab` (TEXT, nhãn). **2 variant.**

**Hình học**: auto-layout **VERTICAL**, padding **12** cả bốn phía, gap 12, `HUG × HUG` →
cao **48**, rộng theo chữ. Không vỏ, không nền, không viền, không vạch nền chạy suốt.

| State | Chữ | Gạch chỉ báo |
|---|---|---|
| `Default` | `title-base` 16/24 **600** · `object-secondary` | — |
| `Active` | `title-base` 16/24 600 · **`object-interactive`** | LINE **32 × 4**, `stroke-cap` ROUND, `border-interactive` |

Gạch chỉ báo là một `LINE` **tuyệt đối** (`layoutPositioning: ABSOLUTE`), constraints
`CENTER / MAX`, đặt tại `y = 48` với `strokeAlign: CENTER` — tức tâm nằm đúng mép đáy, nửa
trên nằm trong, nửa dưới thò ra 2px (`clipsContent: false`). Bề rộng **cố định 32**, không
giãn theo nhãn: tab rộng 121 vẫn để gạch 32. Trên web dựng bằng
một khối `32 × 4` `rounded-circle`, `position: absolute; left: 50%; bottom: -2px`.

**Hàng tab chưa là component.** Bản web có `TabBar` xếp các `Tab` HORIZONTAL, **gap 0**, cụm
canh giữa, không nền, không vạch — và ghi rõ là phần tự chế.

**Chưa có**: `Hover` / `Pressed` / `Disabled`; cách xử khi tổng bề rộng tràn khổ 390 (cuộn
ngang hay rút chữ); quy định cho hàng tab.

> **Chữ và gạch cùng họ `interactive`.** Chữ `Active` dùng `object-interactive`, gạch dùng
> `border-interactive` — hai phần cùng đổi theo brand và giữ quan hệ chữ đậm hơn gạch một bậc
> (hiện `indigo-60` / `indigo-50`). Tab là thứ **bấm được** nên thuộc họ `interactive`, giống nút và
> link — `accent` dành cho nhấn nội dung. Đừng lấy `object-accent` cho chữ tab: một brand có
> `accent` khác `interactive` sẽ ra chữ một màu, gạch một màu.

**Đừng nhầm với `Chip` lọc và `SegmentedControl`** — xem mục *Phân loại nội dung* của bộ cây
quyết định. Tóm tắt: bấm sang mục kế bên mà **thẻ bên dưới đổi bố cục** thì là `Tab`; thẻ y
hệt chỉ ít đi thì là `Chip` lọc; cùng nội dung chỉ đổi cách xem thì là `SegmentedControl`.

### 6.21 Menu (`Menu` · `.MenuItem`)

Page `Menu` dưới `❖ SELECTION`, set `Menu` và section `base` chứa
component nội bộ `.MenuItem`. Đây là **panel option bung ra của
`Dropdown`** (6.4), thứ trước đây ghi là "chưa có, màn tự dựng".

**Props `Menu`**: `Platform` (VARIANT: `Panel` · `Sheet`). **2 variant.**

| Platform | Hình học |
|---|---|
| `Panel` | V · gap **4** · padding **12** · `FIXED × HUG` · radius **24** (`rounded-2xl`) · nền `background-surface` · **`elevation-low`** |
| `Sheet` | dùng lại nguyên template `Sheet` (6.8): `.base/sheet` `Header="Menu"`, `CTA=false`, `Back=false`, scrim `overlay` + blur 16 |

**Props `.MenuItem`**: `Selected` (False/True) · `State` (Default/Hover/Pressed/`[No state]`) ·
`Disabled` (False/True) · `Prefix` (BOOLEAN — icon 24 trước chữ) · `Option` (TEXT). **8 variant.**

**Hàng option**: HORIZONTAL · gap **12** · padding **8** · radius **12** · `FILL × HUG` → cao
**40**. Chữ style `body` 16/24.

| Selected | Nền hàng | Chữ | Icon trước 24 | Check 16 | State layer |
|---|---|---|---|---|---|
| False · Default | — | `object-primary` | `object-secondary` | — | — |
| False · Hover | — | `object-primary` | `object-secondary` | — | `object-primary` `opacity-5` |
| False · Pressed | — | `object-primary` | `object-secondary` | — | `object-primary` `opacity-10` |
| False · Disabled | — | `object-disabled` | `object-disabled` | — | — |
| **True** · Default | **`background-accent-subtle`** | **`object-interactive`** | **`object-accent`** | `object-interactive` | — |
| True · Hover | `background-accent-subtle` | `object-interactive` | `object-accent` | `object-interactive` | **`background-interactive`** `opacity-5` |
| True · Pressed | `background-accent-subtle` | `object-interactive` | `object-accent` | `object-interactive` | `background-interactive` `opacity-10` |
| True · Disabled | — (bỏ nền tint) | `object-disabled` | `object-disabled` | `object-disabled` | — (layer ẩn) |

Nền hàng đã chọn là **tint nhạt** chứ không phải màu đặc, nên state layer vẫn đi bậc nền sáng
**5 / 10** — chỉ đổi fill sang `background-interactive` cho cùng họ màu với nền hàng. Đúng luật 6.0.

**Neo panel chưa chốt.** Bản vẽ chỉ có tấm panel, không có quy định neo dưới ô, lật
lên khi thiếu chỗ, chiều cao tối đa, hay đóng khi bấm ra ngoài. Bản web để `Menu` là một khối
thường, `width: 100%` của khung chứa (nên bằng bề ngang ô `Dropdown`); màn tự đặt chỗ. Master
vẽ 214 chỉ là khổ mẫu.

**Chưa có**: ô tìm nhanh trong panel; chọn nhiều (hàng mới có dấu check, chưa có `Checkbox`);
tiêu đề nhóm và vạch ngăn giữa các cụm option.

### 6.22 Bottom bar (`BottomBar` · `base/FooterItem`)

Thanh điều hướng giữa các **màn chính** của app, nằm dưới đáy. Mỗi mục là một đích đến
ngang hàng; bấm mục là chuyển màn, không phải lọc nội dung trong màn.

**Props `BottomBar`**: `Active` (VARIANT `1`–`5`, mục đang chọn) · `Compact` (VARIANT
`False` · `True`) · `3` · `4` · `5` (BOOLEAN, bật mục thứ 3–5). **10 variant.** Mục 1 và 2 luôn
có, nên thanh có **2 đến 5 mục**.

**Props `base/FooterItem`** (nội bộ): `Active` (`False` · `True`) · `Label` (BOOLEAN) ·
`↳ Label` (TEXT) · `Badge` (BOOLEAN) · icon (INSTANCE_SWAP). **2 variant.**

**Hình học**

| Phần | Giá trị |
|---|---|
| Vỏ (`Wrapper`) | HORIZONTAL · padding **4** (`gap-1`) · gap **4** · radius `rounded-circle` · nền `background-surface` · không viền, không bóng |
| `Compact=False` | vỏ **FILL** bề ngang; mục **FILL** chia đều; mục cao **56** → thanh cao **64** |
| `Compact=True` | vỏ **HUG**; mục **HUG** 64 × 40, **không nhãn** → thanh cao **48** (5 mục = 344) |
| Mục | VERTICAL · padding **6 / 12** (`gap-1-5` / `gap-3`) · gap **4** · căn giữa · min **64 × 40** (`size-16` × `size-10`) · radius `rounded-circle` |
| Icon | hộp **24** (`size-6`) |
| Nhãn | `title-xs` **11/16 600**, một dòng |

| Mục | Nền | Icon | Nhãn |
|---|---|---|---|
| `Active=False` | — | kiểu `outline` · `object-secondary` | `object-secondary` |
| `Active=True` | `background-interactive-muted` | kiểu **`fill`** · `object-interactive` | `object-interactive` |

**Badge**: `NotificationBadge` `Count` (§6.16), neo góc trên phải **icon**: mép phải badge
thẳng mép phải icon, đỉnh badge cao hơn đỉnh icon **4px**. Chỉ có ở mục `Active=False` — mục
đang chọn không hiện badge.

Mục đang chọn thuộc họ **`interactive`** (thứ bấm được), giống `Tab` — không dùng `accent`.
Icon đổi `outline` → `fill` khi chọn, đúng luật §6.11.

**Chưa có**: `Hover` / `Pressed` / `Disabled` của mục; vị trí thanh trên màn (cách đáy, lề
ngang, safe area); bóng hay viền cho vỏ khi nền màn cũng là `background-surface`; nhãn dài
quá bề rộng mục; quá 5 mục.

## 7. Device elements — không thuộc design system

Page `DeviceElements`. Chỉ để dựng mockup bối cảnh; đừng token hoá, đừng đưa
vào component library.

| Component | Kích thước | Variants |
|---|---|---|
| `Status bar` | 402 × 62 | 16 — `OS` (iOS dynamic island / iOS notch / iOS / Android) × `Theme` (Default/Reverse) × `Transparent` |
| `iOS keyboard` | 402 × 318 | 8 — `Type` (Letters/Numbers) × `Version` (iOS 18 / iOS 26) × `Theme` (Light/Dark) × `Home indicator` |
| `Android keyboard` | 412 × 338 | 2 — Letters / Numbers |
| `IOS Home indicator` | 390 × 34 | 4 — `Theme` × `Transparent` |
| `Browser` | 1440 × 80 | 2 — Desktop / Mobile |
| `iOS Face ID` | 375 × 812 | 2 — Authenticating / Success |
| `.iOS Alert 15` | 402 × 300 | 4 — `Buttons`: 1 / 2 stacked / 2 side-by-side / 3 stacked |
| `.Face ID Alert 26` | 300 × 267 | 3 |
| `.Touch ID Alert 26` | 300 × 252 | 3 |
| `iOS Touch ID 26/15`, `iOS Face ID permission 26/15` | 390 × 844 | full-screen |

**Frame width chuẩn**: `390` (iPhone 14/15), `402` (iPhone 16), `412` (Android), `430` (iPhone Pro Max), `1440` (desktop).

---

*UU Design System — spec. File này chỉ chứa phần đã chốt.*

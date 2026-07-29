#!/bin/bash
# Tải toàn bộ hình ảnh từ trang Figma Sites đang publish về thư mục assets/
# Chạy 1 lần: bash download-assets.sh
# Sau khi chạy xong, website hoàn toàn độc lập, có thể gỡ publish trên Figma.

BASE="https://radio-soft-proxy.figma.site/_assets/v11"
mkdir -p assets

curl -L -o assets/logo.png    "$BASE/ea1d5f807dfa39191148aeaef177b5158534cac4.png"
curl -L -o assets/tieutam.png "$BASE/a1c0c65ce128e29b32ef1c69eb113a6a55bb1fa6.png"
curl -L -o assets/cover-1.png "$BASE/356dc2b504b01ef444c60c7fb5cc227da47a352f.png"
curl -L -o assets/cover-2.png "$BASE/6ad00c557e7e84e24bd25a996bf11451c2028c15.png"
curl -L -o assets/cover-3.png "$BASE/fe71c362182c922397310f27858754f3668ef33f.png"

echo "Xong! Kiểm tra thư mục assets/ nhé."

# --- Hình minh họa trong bài viết (export từ Figma qua MCP) ---
# LƯU Ý: các link figma.com/api/mcp/asset chỉ sống ~7 ngày, chạy script này SỚM nhé!
F="https://www.figma.com/api/mcp/asset"
curl -L -o assets/a1-img1.png "$F/e3e7826d-45ce-40cc-ad6c-a83a673e1d7f"
curl -L -o assets/a1-img2.png "$F/73479eb4-ce3c-4860-844d-a0245e0fb1c5"
curl -L -o assets/a1-img3.png "$F/c96395b8-18f7-4f7b-85f6-5237568c05c0"
curl -L -o assets/a1-img4.png "$F/3e562d48-e38f-4ebc-ba73-d4daa65b2357"
curl -L -o assets/a1-img5.png "$F/61ea0449-81d1-4a41-bd15-0206290a3dee"
curl -L -o assets/a2-img1.png "$F/560f74c7-21bf-40ef-8286-182a089681d4"
curl -L -o assets/a2-img2.png "$F/c4c58ee7-00b8-4359-8eae-23a299d9f2c1"
curl -L -o assets/a2-img3.png "$F/3eba53e6-efc4-4f1b-8df8-f0eb51bae615"
curl -L -o assets/a2-img4.png "$F/67826177-d2d9-433e-bafa-d5eb10aafec3"
curl -L -o assets/a2-img5.png "$F/867dd0df-f3b6-48ec-92b1-61554270f79f"
curl -L -o assets/a2-img6.png "$F/b5310b72-9b9a-4baf-860a-b7529e447e3b"
curl -L -o assets/a2-img7.png "$F/45e3b6f5-dae3-4d54-a774-d76751902012"
curl -L -o assets/a3-img1.png "$F/563a3379-e87c-496d-a814-79eb1ee1e979"
curl -L -o assets/a3-img2.png "$F/3fa1a8b2-4fdc-4bf7-88d0-9f90e28dd241"

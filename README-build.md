# Build & Deploy (1 lệnh)

## Cài dependencies
```bash
npm i
```

> Nếu bạn chưa cài: `npm i -D tailwindcss@3 postcss autoprefixer cssnano html-minifier-terser esbuild npm-run-all rimraf cpy-cli`

## Build
```bash
npm run build
```
Kết quả nằm trong thư mục `dist/`:
- `dist/styles.css` (đã minify + xoá comment)
- `dist/assets/js/*` (đã minify + bundle)
- toàn bộ `.html` (đã minify + remove comments)
- `dist/assets/**` (ảnh, fonts, ...)

## Ghi chú
- Đầu vào Tailwind đang trỏ tới `input.merged.css`. Nếu bạn dùng file khác, đổi trong script `build:css` trong package.json.
- Nếu chạy trên PowerShell bị lỗi escape, chạy lệnh trong **Git Bash** hoặc sửa dấu `\"` → `"` theo shell của bạn.

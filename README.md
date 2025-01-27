# 應用程式 - App Store 應用列表與推薦頁面

模擬 App Store 的應用程式列表和應用程式推薦頁面

---

## 環境要求

- Node 版本：`20.x` 或以上

---

## 啟動步驟

- npm install
- npm run dev

---

### 功能

## (期限內)已完成

1. **應用列表**

   - ✅ 顯示排名前 100 個免費應用的相關數據
   - ✅ 支持垂直滾動
   - ✅ 應用圖案要顯示成圓形
   - ✅ 每 10 個記錄一頁

2. **應用推薦**

   - ✅ 顯示排名前 10 個推薦應用的相關數據
   - ✅ 支持水平滾動顯示
   - ✅ 應用圖案要顯示成方形圖角
   - ✅ 顯示位置在應用列表上排

3. **應用搜尋**
   - ✅ 搜尋命中的應用記錄顯示在應用列表與推薦應用中
   - ✅ 搜尋列永遠固定在頁面的最頂, 就算應用列表垂直滾動時也是固定
   - ✅ 每次打字的時候, 會立即進行搜尋
   - ✅ 進行搜尋時, 命中的條件是以下其中一個 API 數據欄位有包含關鍵字
     i. feed.entry[].im:name
     ii. feed.entry[].summary.label
     iii. feed.entry[].title.label

## (期限內)未完成，會再陸續補上的功能 (待增加)

    👀 一些小 BUG 或 畫面可以怎麼弄比較好看 @-@

## 目錄結構

app/
├── components/
│ ├── ApplicationList.tsx # 應用列表元件
│ ├── Recommendations.tsx # 推薦應用元件
│ ├── Search.tsx # 搜尋框元件
├── home/ # 主頁
│ ├── page.tsx # 主頁面內容
├── favicon.ico  
├── globals.css  
├── layout.tsx
├── page.tsx # 主頁（根路徑頁面）已設定自動導向到 home page

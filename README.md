# JavaScript 工作坊 To Do List

來自 [lumir1031](https://github.com/lumir1031)

## 專案準備及提交方式
1. fork 此 repo 到自己的 Github ，並 git clone 到自己電腦
2. 將 `master` 保護起來，禁止推 master branch
    - 到自己的 repo > Settings > Branches > Branch protection rules > add rule 設定
3. 每個功能都開一個 branch 進行
    - 舉例： `feature/Complete_add_checked_task`
4. 完成後，發 PR 到「自己的 repo」並且自己 merge 進 `master`
5. 要記得 local master 的狀態也要更新喔！

## 任務: 完成 To Do List 功能
1. 點擊任務標記是否完成
    - 點擊任務 list 可以切換 `checked` class
2. 點擊 x 刪除任務
    - 點擊 `x` 可移除任務
3. 輸入新任務名稱， 按下 + 新增任務
    - 取得 input 輸入的文字
    - 按下 + 可以新增任務
    - 新增的任務也須具有 `標記完成` / `刪除`功能
4. 將 To Do List 用 localStorage 改寫
    - 所有新增修改刪除都需要更新 localStorage
    - localStorage 的用法可以參考 [localStorage 文件](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage)

使用原生 JavaScript 實作（不能寫 jQuery！），所有程式都會寫在 main.js 檔，不會修改到其他檔案。

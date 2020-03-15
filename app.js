// 取得結果元素
var result = document.getElementById("result");
// 取得按鈕 0-9 +-/*
var btns = document.getElementsByClassName("btn");

/* 計算機格式 */
// var 跟 let 功能一樣，但
// var 在 funtion 使用
// let 則在 括號內 使用
for (let i = 0; i < btns.length; i++) {
    // 按鈕[編號].添加事件監聽器("點擊"，匿名函式() { 函式(); })
    btns[i].addEventListener("click", function() {
        // 顯示(按鈕[編號]內容.至HTML上
        show(btns[i].innerHTML);
    });
}

// 函式 顯示(參數-內容)
function show(content) {
    // 結果元素.內容 = 參數-內容
    result.innerHTML = content;
}
/* 計算機格式 */

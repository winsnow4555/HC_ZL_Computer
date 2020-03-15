// 取得結果元素
var result = document.getElementById("result");
// 取得按鈕 0-9 +-/*
var btns = document.getElementsByClassName("btn");
// 輸入最終顯示 給予""存放內容
var final = "";
// 取得等於按鈕
var eqialBtn = document.getElementById("eqial");
// 等於按鈕.添加事件監聽器("點擊"，等於)
eqialBtn.addEventListener("click",eqial);
function eqial() {
    // 如果 最終顯示 等於 "空白" 就 跳出return
    if (final == "") return;
    // eval 運算字串函數
    result.innerHTML = eval(final);
    // 計算完成後清空
    final = "";
    // 計算完成後繼續
    // final = eval(final);
}

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
    // 處理尚未輸入數字
    if (final == "") {
        if (content == "0") return;
        if (content == "/") return;
        if (content == "*") return;
    }
    // 最終顯示數字累加
    // 輸入數字 += 參數-內容
    final += content;
    // 結果元素.內容 = 參數-內容
    result.innerHTML = final;
}
/* 計算機格式 */

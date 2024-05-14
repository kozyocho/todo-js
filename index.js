import './style.css'

const onClickAdd = () => {
    //テキストボックスの値を取得後、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    //liタグ生成
    const li = document.createElement("li");

    //div生成
    const div = document.createElement("div");
    div.className = "list-row"

    //p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    //完了ボタン生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        //押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
        const moveTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();

        //戻すボタン生成してdivタグ配下に設置
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        moveTarget.firstElementChild.appendChild(backButton);

        //完了リストに移動
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    //削除ボタン生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    //押された削除ボタンの親にあたるliを未完了リストから削除
    deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    })


    //liタグ子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    //未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd)
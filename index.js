import './style.css'

const onClickAdd = () => {
    //テキストボックスの値を取得後、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompleteTodo(inputText);
}

//渡された引数をもとに未完了のTODOを作成する関数
const createIncompleteTodo = (todoText) => {
        //liタグ生成
        const li = document.createElement("li");

        //div生成
        const div = document.createElement("div");
        div.className = "list-row"
    
        //p生成
        const p = document.createElement("p");
        p.className = "todo-item";
        p.innerText = todoText;
    
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
            backButton.addEventListener("click", () => {
                //TODOの内容を取得し未完了リストに追加
                const todo = backButton.previousElementSibling.innerText;
                createIncompleteTodo(todo);

                //押された戻るボタンの親にあるliを削除
                backButton.closest("li").remove();
            })
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
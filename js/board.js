//Modal
window.onload = function() {
    let modal = document.querySelector(".modal");
    let trigger = document.querySelector(".trigger");
    let createBoard = document.querySelector(".createBoard");

    let modalBoard=document.querySelector(".modalBoard");// modal for Boards name
    let triggerBoard = document.querySelector(".triggerBoard");// My Boards button
    let closeButton=document.querySelector(".closeButton");// closeButton

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    function toggleBoardModal() {
        modalBoard.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    createBoard.addEventListener("click", toggleModal);
    triggerBoard.addEventListener("click",toggleBoardModal);
    closeButton.addEventListener("click",toggleBoardModal);
    myBoards();
}



function createBoard() {
    var boardName = document.getElementById("name").value;

    console.log(boardName);
    var listName = {
        length: 0,
    };
    localStorage.setItem(boardName, JSON.stringify(listName));
    var board = localStorage.getItem(boardName);
}

function myFunction() {
    var param = event.currentTarget.text;
    window.location = 'file:///C:/Users/User/Desktop/trello/main.html?Board-Name=' + param;


}

function myBoards() {
    for (var i = 0; i < localStorage.length - 1; i++) {
        let boardName = document.createElement("a");
        boardName.onclick = myFunction;
        boardName.classList.add("modalBoardName");
        var text = document.createTextNode(localStorage.key(i));
        boardName.appendChild(text);
        document.querySelector(".modalBoard").appendChild(boardName);

    }
}
 
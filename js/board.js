//Modal
window.onload = function() {
    let modal = document.querySelector(".modal");
    let trigger = document.querySelector(".trigger");
    let createBoard = document.querySelector(".createBoard");

    let modalBoard=document.querySelector(".modalBoard");// modal for Boards name
    let triggerBoard = document.querySelector(".triggerBoard");// My Boards button
  //  let closeButton=document.querySelector(".closeButton");// closeButton

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
        else if(event.target === modalBoard)
        {
            toggleBoardModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
   
    createBoard.addEventListener("click", toggleModal);

    triggerBoard.addEventListener("click",toggleBoardModal);
    window.addEventListener("click", windowOnClick);
   // closeButton.addEventListener("click",toggleBoardModal);  //Close Buttonnery petqa amen texic hanel css ban

   // create Border-i css-y uxxel a petq texy pocxel
   //Border moduli css responsive chi etel a petqa poxel 
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
 
//Modal
window.onload = function() {
    let modal = document.querySelector(".modal");
    let trigger = document.querySelector(".trigger");
    let createBoard = document.querySelector(".createBoard");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    createBoard.addEventListener("click", toggleModal);
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
    // window.location = 'main.js' + param;


}

function myBoards() {
   let div = document.createElement("DIV");
   let button = document.createElement("span");
   let btnText=document.createTextNode("X");
   button.appendChild(btnText);
   button.classList.add('closeButton');
   div.appendChild(button);
   div.classList.add("modalDiv");
   div.id = "modalDiv";
   document.body.appendChild(div);
    for (var i = 0; i < localStorage.length - 1; i++) {
        let boardName = document.createElement("a");
        boardName.onclick = myFunction;
        boardName.classList.add("modalBoardName");
        var text = document.createTextNode(localStorage.key(i));
        boardName.appendChild(text);
        document.getElementById('modalDiv').appendChild(boardName);

    }
    button.addEventListener("click", showAndHide);
 
  //window.addEventListener("click", windowOnClick);
}
 function showAndHide(){
//     let trigger = document.querySelector(".triggerBoard");
//     let modalBoard = document.querySelector(".modalDiv");

//     function toggleModal() {
//         modalBoard.classList.toggle(".show-modalBoard");
//     }

//     function windowOnClick(event) {
//         if (event.target === modalBoard) {
//             toggleModal();
//         }
//     }

//     trigger.addEventListener("click", toggleModal);
//     window.addEventListener("click", windowOnClick);
//     modalDiv.addEventListener("click", toggleModal);
    
    //createBoard.addEventListener("click", toggleModal);


    let trigger = document.querySelector(".triggerBoard");
    let closeButton=document.querySelector(".closeButton");
    let modalBoard=document.querySelector(".modalDiv");
    function toggleModal()
    {
        modalBoard.classList.toggle("show-modalBoard");
    }
   
    trigger.addEventListener("click",toggleModal);
    closeButton.addEventListener("click",toggleModal);
}
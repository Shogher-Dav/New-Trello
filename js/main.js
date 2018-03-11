class Create {
    constructor(elName, identification, count, parent) {
        this.el = document.createElement(elName);
        this.el.classList.add(identification);
        this.id = identification + count;
        this.el.id = this.id;
        document.getElementById(parent).appendChild(this.el);
    }
    input(type) {
        this.el.type = type;
    }
    button(event, func, text) {
        this.el.setAttribute(event, func);
        var textBtn = document.createTextNode(text);
        this.el.appendChild(textBtn);
    }
    span(textSpan) {
        this.el.appendChild(document.createTextNode(textSpan));

    
    }
    tickMethod(){

   function x(){
         this.el.classList.toggle("tick1");
 }
  this.el.addEventListener('click',x.bind(this));
    
    }
}

window.onload = getParam;
var boardName;

function getParam() {
    let url = "" + window.location;
    var index = url.indexOf('=') + 1;
    if (index !== -1) {
        boardName = url.slice(index)
        read();
    }
}

function read() {
    let obj = JSON.parse(localStorage.getItem(boardName));
    let length = obj['length'];
    for (let i = 1; i <= length; i++) {
        openCreateBox();
        for (let j = 0; j < obj['addList' + i].length; j++) {
            let task = new Create("SPAN", 'list-text', '', "addList" + i);
            let tick=new Create('img','tick','',  "addList" + i);
            let garbage=new Create('image','garbage','',"addList" + i );
            task.span(obj['addList' + i][j]);     
          //  tick.tickMethod();  
          function x()
          {
         //  tick.el.classList.value='tick1';
           tick.el.classList.toggle('tick1');
            let z=tick.el.classList;
          return z;
          }
           let y= tick.el.addEventListener('click',x)
          //  console.log(tick.el.classList);
          //  alert(tick.el.classList.value);
         // console.log(tick.el.classList);
          //console.log(y);
        }
    }
}

var count = 0;

function openCreateBox() {
    var id = "board";
    count++;
    //addList
    var list = new Create("DIV", "addList", count, id);
    id = list.id;
     //  console.log(id);

    var input = new Create("INPUT", 'addInput', count, id);
    input.input('text');

    var saveBtn = new Create("BUTTON", 'btnList', count, id);
    saveBtn.button("onclick", "save(id)", 'save');

    var delBtn = new Create("BUTTON", 'btnDelete', count, id);
    delBtn.button("onclick", "deleteList(id)", 'x');

}
function deleteList(id){
    let deleteList = document.getElementById(id); // vercnume delBtn-i id
    let list=deleteList.parentNode; // gtnum enq list-y

    deleteList.parentNode.parentNode.removeChild(list); // DOM-ic jnjum en list-y

    //from local storage
    var obj = JSON.parse(localStorage.getItem(boardName)); //lokal storage-ic vercnum enq objecty
    let idNum = list.id.replace(/[^0-9]/g, ''); // stanum em addList1... list id-i tivy;
    console.log(obj);
     delete obj[list.id]; // jnjum enq  listy objecti mijic
     
////  Poxum enq addList-i tivy mihatov pakasacnum enq/////////// 
    renameProp =  (
        oldProp,
        newProp,
    { [oldProp]: old,
     ...others 
      }) => ({
        [newProp]: old,
        ...others
    })          

    for(let i=idNum; i<obj.length; i++){
        idNum++;
        obj=renameProp('addList'+idNum, 'addList'+i, obj); 
       
      }
     
    obj.length-=1;
    localStorage.setItem(boardName, JSON.stringify(obj));
}

function save(id) {
    let idNum = id.replace(/[^0-9]/g, '');
    let inputTextId = "addInput" + idNum;
    let inputText = document.getElementById(inputTextId).value;
    let addListId = 'addList' + idNum;
    let task = new Create("span", 'list-text', '', addListId);
    let tick=new Create("img",'tick','',addListId);
  //  let garbage=new Create('image','garbage','', addListId)  avelacnum e garbage-i nkar
    task.span(inputText);
  //  garbage.button('onclick','deleteTask(id)'); // buton a vra dnum a onclick ev deletTask atributy 

   tick.tickMethod(); //poxum e tick-i classy

 
    //set in localStorage
    let obj = JSON.parse(localStorage.getItem(boardName));
    if (obj.hasOwnProperty(addListId)) {
        var newArray = obj[addListId];
        newArray.push(inputText);
        obj[addListId] = newArray;
        localStorage.setItem(boardName, JSON.stringify(obj));
    } else {
        obj[addListId] = [inputText];
        obj['length'] += 1;
        localStorage.setItem(boardName, JSON.stringify(obj));
    }
   
  
    //  var text=document.querySelectorAll('.list-text');
    // var list=document.querySelectorAll('.addList');
    // console.log(text);
    //   dragAndDrop(text,list);
  
}


// function deleteTask(id){

//    garbageImage.addEventListener("click", function deleteTask(){
//        let listElement = document.getElementById(garbageImage.parentElement.id);
//        console.log(id.parentNode)
//        listElement.parentNode.removeChild(listElement);
  
//       //  from local storage
//         var obj = JSON.parse(localStorage.getItem("board1"));
//         let listId = document.getElementById(addListId).id;
//         let item = garbageImage.parentNode.innerText;
//         let index = obj[listId].indexOf(item);
//         obj[listId].splice(index, 1);
//         localStorage.setItem("board1", JSON.stringify(obj));
//         obj = JSON.parse(localStorage.getItem('board1'));
//    });

// }




// function dragAndDrop(classTask,classList){

//     function allowDrop(ev) {
//         ev.preventDefault();
//     }
    
//     function drag(ev) {
//         ev.dataTransfer.setData("text", ev.target.id);
//     }
   
//     function drop(ev) {
//         ev.preventDefault();
//         var data = ev.dataTransfer.getData("text");
//         ev.target.appendChild(document.getElementById(data));
//     }
//   [].forEach.call(classTask, function(col) {
//     col.setAttribute('draggable','true');
//     col.setAttribute('ondragstart',"drag(event)");
//  });
//   [].forEach.call(classList, function(col) {
//     col.setAttribute('ondragover','allowDrop(event)');
//     col.setAttribute('ondrop',"drop(event)");
   
//   });
// }


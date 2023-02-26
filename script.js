let listenedTarget = document.querySelector("#search").value;
const fruits = [
    "apple",
    "banana",
    "orange",
    "strawberry",
    "grape",
    "kiwi",
    "mango",
    "peach"
  ];
let target = document.querySelector("#suggestionPapa");

document.addEventListener("keyup", function(){
    // ProposeQuery(keycode)
    listenedTarget = document.querySelector("#search").value;
    // console.log(listenedTarget);
    // let query = fruits.find( (a) => {return a == listenedTarget});
    let b = "";
    fruits.forEach((a) => {       
        if (a.trim().match(listenedTarget) != "" && a.match(listenedTarget) != null) {
            b += a + "<br/>"; 
        }
    })
    
    target.innerHTML = b;
    
})

fruits.map((a) => console.log())
// function ShowImg(img) {
//     let a = img.getAttribute("href");
//     let b = document.getElementById("img1");
//     package.setAttribute("src", a);                        
// }

function show(){
    let list = document.getElementsByTagName("body")[0];
    console.log(list.childNodes.length)
    console.log(list.nodeType)
}

show()
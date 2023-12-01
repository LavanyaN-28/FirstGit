//GETELEMENTSBYTAGNAME//
var li=document.getElementsByTagName("li");
console.log(li)
console.log(li[1])
li[1].textContent="Hello 2"
li[1].style.fontWeight="bold"
li[1].style.backgroundColor="yellow"

for(var i=0; i<li.length;i++){
    li[i].style.backgroundColor="#f4f4f4"
}

// //Cannot change the color of  the Item 5 using getElementsByClassName //
// var lis=document.getElementsByClassName("list-group-item");
// lis[4].style.backgroundColor="blue"
// lis[4].style.color="blue"
// lis[4].style.fontWeight="bold"
//console.log(document.URL)
//console.log(document.title)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.body)
//console.log(document.forms)
//console.log(document.links)
//document.title="First-Program"


/*var headerTitle=document.getElementById("header-title")
console.log(headerTitle)
var header=document.getElementById("main-header")
header.style.borderBottom="solid 3px #000"
*/

/*var addItem=document.getElementById("item-title")
addItem.style.color="green"

addItem.style.fontWeight="bold"
*/
var items=document.getElementsByClassName("list-group-item");
console.log(items)
console.log(items[1])
/*items[1].textContent="Hello 2"
items[1].style.fontWeight="bold"
items[1].style.backgroundColor="yellow"

//items.style.backgroundColor="#f4f4f4";

for(var i=0; i<items.length;i++){
    items[i].style.backgroundColor="#f4f4f4"
}
*/
items[2].style.backgroundColor="green"
for(var i=0; i<items.length;i++){
    items[i].style.fontWeight="bold"
}
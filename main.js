let h1 = document.querySelector("#heading");

let shoppingList = ["milk", "bread", "oatmeal", "coffee", "tissues", "cheese"]

let userarticle = prompt("Insert the next item you're going to buy")

let inList = false


/*
if(shoppingList.includes(userarticle)){
    alert("You're missing this one")
} else{
    alert("this item is not on your list")
}
*/

let i = 0

while(i<shoppingList.length){

    if(userarticle == shoppingList[i]){
        inList = true
    }

    if(inList == true){
        alert("You're missing this one")
        h1.innerHTML = "You're missing this one"
        break
    } else if (inList == false && i == shoppingList.length-1){
        alert("this item is not on your list")
        h1.innerHTML = "this item is not on your list"
    }

    i++
}

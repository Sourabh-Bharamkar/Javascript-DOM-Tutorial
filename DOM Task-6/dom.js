
//querySelector

// let secondItem=document.querySelector('.list-group-item:nth-child(2)')
// console.log(secondItem)
// secondItem.style.backgroundColor='green'

// let thirdItem=document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.display='none'


// querySelectorAll

let items=document.querySelectorAll('.list-group-item')
items[1].style.color='green'

let oddItems=document.querySelectorAll('li:nth-child(odd)')
for(let i=0;i<oddItems.length;i++)
{
    oddItems[i].style.backgroundColor='green'
}

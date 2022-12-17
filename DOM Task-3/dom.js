// // examine the document object
// console.dir(document) 
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// document.all[10].textContent='Hello'
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)

var header=document.getElementById('main-header')
header.style.borderBottom='solid 3px black'

var headerTitle=document.getElementById('header-title')
console.log(headerTitle)
console.log(headerTitle.textContent)
console.log(headerTitle.innerText)

var items=document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
items[1].style.color='green'
items[1].style.fontWeight='bold'














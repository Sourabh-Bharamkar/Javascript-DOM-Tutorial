
let form = document.getElementById('form')
form.addEventListener('submit', storeDetails)


function storeDetails(e) {

  e.preventDefault();
  let userName = document.getElementById('name').value
  let email = document.getElementById('email').value
  let phoneNumber = document.getElementById('phoneNumber').value

  // create object
  let obj = {
    "userName": userName,
    'email': email,
    'Phone Number': phoneNumber
  }

  // converting an object to string 
  let obj_serialized = JSON.stringify(obj)
  localStorage.setItem(email, obj_serialized)

  document.getElementById('name').value = ''
  document.getElementById('email').value = ""
  document.getElementById('phoneNumber').value = ""

   let keyValue=localStorage.getItem(email)
  // create an li element 
  let li = document.createElement('li')
  // create text node 
  let text = document.createTextNode(`${email}: ${keyValue}`)
  // append textnode to li 
  li.appendChild(text)

  document.getElementById('registeredUsers').append(li)

}



// iterating through local storage keys 

const keys = Object.keys(localStorage)

  for (let key of keys) {
    let li=document.createElement('li')
    let textnode=document.createTextNode(`${key}: ${localStorage.getItem(key)}`)
    li.appendChild(textnode)
   document.getElementById('registeredUsers').append(li)

  }
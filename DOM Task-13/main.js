
let form = document.getElementById('form')

form.addEventListener('submit', storeDetails)

//adding edit functionality 
let registeredUsers = document.getElementById('registeredUsers')
registeredUsers.addEventListener('click', editFunctionality)

//adding delete functionality
registeredUsers.addEventListener('click', deleteFunctionality)



//storeDetails function 
function storeDetails(e) {

  e.preventDefault();
  //taking the data entered by user
  let userName = document.getElementById('name').value
  let email = document.getElementById('email').value
  let phoneNumber = document.getElementById('phoneNumber').value

  let key = document.getElementById('email').value


  // create object for user details 
  let obj = {
    "userName": userName,
    'email': email,
    'PhoneNumber': phoneNumber
  }

  // if user is not present in the local storage 

  if (localStorage.getItem(key) == null) {
    // converting an userdetails object to string and store it to local storage 
    let obj_serialized = JSON.stringify(obj)
    localStorage.setItem(key, obj_serialized)

    //printing user details at bottom of form
    let key_Value = localStorage.getItem(key)

    // create li element 
    let li = document.createElement('li')
    li.style.display = 'flex'

    // converting a keyvalue into an object and append to li element
    let keyValueObj = JSON.parse(localStorage.getItem(key));
    //creating p element and append key to it 
    let keyName = document.createElement('p')
    keyName.appendChild(document.createTextNode(`${key}`))
    li.appendChild(keyName)
    // creating textnode for a value of key 
    let keyValue = document.createTextNode(`: username- ${keyValueObj.userName}, email-${keyValueObj.email}, phone number.-${keyValueObj.PhoneNumber} `)
    li.appendChild(keyValue)


    // create edit button 
    let editBtn = document.createElement('input')
    editBtn.setAttribute('type', 'button')
    editBtn.setAttribute('value', 'Edit')
    editBtn.className = 'btn btn-success btn-sm mx-1 edit'


    // create delete button 
    let deleteBtn = document.createElement('input')
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('value', 'Delete');
    deleteBtn.className = 'btn btn-danger btn-sm delete';


    //append these buttons to li
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)


    document.getElementById('registeredUsers').append(li)
  }

  // if user is present in local storage 
  else if (localStorage.getItem(key) != null) {

    // converting the userdetails object to string and store it to local storage 
    let obj_serialized = JSON.stringify(obj)
    localStorage.setItem(key, obj_serialized)

    // converting a keyvalue into an object
    let keyValueObj = JSON.parse(localStorage.getItem(key))

    // creating textnode for a value of key 
    let keyValue = document.createTextNode(`: username- ${keyValueObj.userName}, email-${keyValueObj.email}, phone number.-${keyValueObj.PhoneNumber} `)

    console.log(keyValue)

    // modifying the user details on the page 
    //Getting all li tags of registered users 
    let liTags = Array.from(document.getElementById('registeredUsers').getElementsByTagName('li'))

    //traversing all li tags
    for (let i of liTags) {

      //find the li tag that matches the key
      if (i.childNodes[0].textContent == key) {

        i.childNodes[1].textContent = keyValue.textContent;

      }

    }
  }


  document.getElementById('name').value = ''
  document.getElementById('email').value = ""
  document.getElementById('phoneNumber').value = ""

}


iterateThroughLocalStorage();

// Iterating through local storage keys and show all resitered user's list on page
function iterateThroughLocalStorage() {

  const keys = Object.keys(localStorage)

  for (let key of keys) {

    // create li element 
    let li = document.createElement('li')
    li.style.display = 'flex'

    // converting a keyvalue into an object and append to li element
    let keyValueObj = JSON.parse(localStorage.getItem(key));
    //creating p element and append key to it 
    let keyName = document.createElement('p')
    keyName.appendChild(document.createTextNode(`${key}`))
    li.appendChild(keyName)
    // creating textnode for a value of key 
    let keyValue = document.createTextNode(`: username- ${keyValueObj.userName}, email-${keyValueObj.email}, phone number.-${keyValueObj.PhoneNumber} `)
    li.appendChild(keyValue)


    // create edit button 
    let editBtn = document.createElement('input')
    editBtn.setAttribute('type', 'button')
    editBtn.setAttribute('value', 'Edit')
    editBtn.className = 'btn btn-success btn-sm mx-1 edit'


    // create delete button 
    let deleteBtn = document.createElement('input')
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('value', 'Delete');
    deleteBtn.className = 'btn btn-danger btn-sm delete';


    //append these buttons to li
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)

    //append li to registered users 
    document.getElementById('registeredUsers').append(li)

  }

}


// edit functionality 
function editFunctionality(e) {

  e.preventDefault();
  if (e.target.classList.contains('edit')) {

    //get the key of an element on which event is happened 
    let key = e.target.parentElement.firstElementChild.textContent

    // find the key in local storage and converting keyvalue into object
    let obj = JSON.parse(localStorage.getItem(key))

    //feeding corresponding user details into form-textboxes
    document.getElementById('name').value = obj.userName
    document.getElementById('email').value = obj.email
    document.getElementById('phoneNumber').value = obj.PhoneNumber


    //also remove the item from page 
    let user = e.target.parentElement;
    // user.remove()

  }
}

//delete functiionality 
function deleteFunctionality(e) {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    if (confirm('Do you want to delete')) {
      let key = e.target.parentElement.firstElementChild.textContent;
      localStorage.removeItem(key)
      let user = e.target.parentElement;
      user.remove()
    }
  }

}



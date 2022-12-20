
let form=document.getElementById('form')
form.addEventListener('submit',storeDetails)


function storeDetails(e){
      e.preventDefault();
    let userName=document.getElementById('name').value
    let email=document.getElementById('email').value
    localStorage.setItem(userName,email)
    document.getElementById('name').value=''
    document.getElementById('email').value=""
}

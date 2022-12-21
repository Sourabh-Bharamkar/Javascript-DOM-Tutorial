
let form=document.getElementById('form')
form.addEventListener('submit',storeDetails)


function storeDetails(e){
      e.preventDefault();
    let userName=document.getElementById('name').value
    let email=document.getElementById('email').value
    let phoneNumber=document.getElementById('phoneNumber').value

    // create object
    let obj={
      "userName": userName,
      'email':email,
      'Phone Number':phoneNumber
    }
    
    let obj_serialized=JSON.stringify(obj)
    localStorage.setItem(userName,obj_serialized)

    document.getElementById('name').value=''
    document.getElementById('email').value=""
    document.getElementById('phoneNumber').value=""

   
    
}

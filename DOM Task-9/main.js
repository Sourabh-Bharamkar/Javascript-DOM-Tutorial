var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter= document.getElementById('filter'); 


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
//edit event
itemList.addEventListener('click', editItem);
//filter event
filter.addEventListener('keyup',filterItems);


// Add item
function addItem(e){

    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
    var newItemDiscription=document.getElementById('item-description').value;

    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
  
    // Create del button element
    var deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
  
    // Append button to li
    li.appendChild(deleteBtn);
  
    // Append li to list
    itemList.appendChild(li);

    //create edit button
    var editBtn=document.createElement('button')

    // add classes to edit button 
    editBtn.className='btn btn-success btn-sm float-right mx-2 edit'

    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));

    // Append button to li
    li.prepend(editBtn);

    // Append li to list
    itemList.appendChild(li);

    // appending item description to li 
    li.appendChild(document.createElement('br'))
    li.appendChild(document.createTextNode(newItemDiscription));



    //making add items input text boxes to default 
    document.getElementById('item').value='';
    document.getElementById('item-description').value='';

    
  }

  
  // Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }


//edit item
function editItem(e){
    if(e.target.classList.contains('edit')){
      if(confirm('Do you want edit?')){
        
      }
    }
  }
  

  //filter items

  function filterItems(e){
    //convert text to lowercase
    let text= e.target.value.toLowerCase();

    //list items
    let items=itemList.getElementsByTagName('li')

    //convert to an array
    Array.from(items).forEach((element)=>{
        
        if(element.textContent.toLowerCase().indexOf(text)!=-1)
        {
            element.style.display='block'
        }
        else{
            element.style.display='none';
        }
        
    })
  }


 
  
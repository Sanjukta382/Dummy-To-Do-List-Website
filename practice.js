document.addEventListener('DOMContentLoaded', function(){

//delete function

const list= document.querySelector('#todo-list ul')
list.addEventListener('click', function(e){
	if(e.target.className= 'remove'){
		const li= e.target.parentElement;
		
		list.removeChild(li);
	}
})
	
//add work

addWorks= document.forms['add-work'];

addWorks.addEventListener('submit', function(e){
	e.preventDefault();
const workName= addWorks.querySelector('input[type="text"]').value.trim();
if(workName != ""){

const li= document.createElement('li');
const works= document.createElement('span');
const removeBtn = document.createElement('button');

works.textContent= workName;
removeBtn.textContent= 'Remove';

works.classList.add('work');
removeBtn.classList.add('remove');

li.appendChild(works);
li.appendChild(removeBtn);
list.appendChild(li);

var form = document.getElementById("add-work");
form.reset();
}

});
	
	
})
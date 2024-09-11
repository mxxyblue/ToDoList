/**app.js */
window.onload = function(){
	const addBtn = document.querySelector('button#add-task-btn');
	addBtn.addEventListener('click', addTask);
};

function addTask(){ //add 버튼 클릭 이벤트
	let taskInput = document.querySelector('#task-input').value; //input 값 가져오기
	let parentNode = document.querySelector('#task-list'); 
	let newElement = createTaskDiv(taskInput); //새 div 생성
	
	parentNode.appendChild(newElement); //task-list에 child 추가하기
}

function createTaskDiv(taskInput){
	let newText = createNewText(taskInput);
	let newButton = createNewButton();
	
	return createNewDiv(newText, newButton);
}

function createNewText(taskInput){ //새 텍스트 요소 생성
	let newText = document.createElement("p");
	newText.innerHTML = taskInput;
	
	return newText;
}

function createNewButton(){ //새 버튼 요소 생성
	let newButton = document.createElement("button"); 
	newButton.innerHTML = "삭제";
	newButton.addEventListener('click', deleteTask); //삭제 버튼에 이벤트 추가
	
	return newButton;
}

function createNewDiv(newText, newButton){ //새 div에 버튼, 텍스트 요소 추가
	let newElement = document.createElement("div");  //const ? let ? 
	newElement.setAttribute('class', 'task-item');
	newElement.appendChild(newText);
	newElement.appendChild(newButton);
	
	return newElement;
}

//삭제버튼
function deleteTask(){
	let task = event.currentTarget.parentElement; //클릭한 버튼의 부모 요소 찾기
	task.remove(); //부모 요소(div) 삭제
}

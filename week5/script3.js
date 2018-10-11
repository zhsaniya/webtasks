function addTable(){
	var name = document.querySelector("#name").value;
	var surname = document.querySelector("#surname").value;
	var faculty = document.querySelector("#faculty").value;
	var students = document.querySelector("#students");
	
	var new_Row = students.insertRow(students.rows.length);
	var cell_1 = new_Row.insertCell(0);
	var cell_2 = new_Row.insertCell(1);
	var cell_3 = new_Row.insertCell(2);

	cell_1.innerHTML = name;
	cell_2.innerHTML = surname;
	cell_3.innerHTML = faculty;
}

function addStu(){
	const q = true;
	var name = document.querySelector("#name").value;
	if(!name){
		document.querySelector("#name").classList.add("error");
		q = false;
	}
	else{
		document.querySelector("#name").classList.remove("error");
	}
	var surname = document.querySelector("#surname").value;
	if(!surname){
		document.querySelector("#surname").classList.add("error");
		q = false;
	}
	else{
		document.querySelector("#surname").classList.remove("error");
	}
	if(q){
		addTable(); 
	}
}

document.querySelector("#addStudent").addEventListener('click',addStu);

	
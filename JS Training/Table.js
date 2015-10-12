function createTable(){
	var body = document.body;
	table = document.createElement('table');
	for(var i = 0; i < 9; i++){
		var tr = table.insertRow();
		for(var j = 0; j < 9; j++){
			var td = tr.insertCell();
			td.addEventListener('click', changeBg);
		}
	}	
	body.appendChild(table);
}
function changeBg(event) {
	var target = event.target;
	target.classList.toggle('new-color');
}

createTable();


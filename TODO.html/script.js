let mainCon = document.querySelector('.mainContainer');
let task = document.getElementById('task');
let add = document.getElementById('add');
let liOfTask = document.getElementById('liOfTask');
let set = document.getElementById('set');
let done = document.getElementById('done');
let addedTasks;
let adc = 0;
let chc = 0;
set.disabled = true;

document.addEventListener('keydown', function (e) {
	if (e.key === 'Enter') {
		if (task.value != String) {
			alert('Task cannot be Empty');
		} else {
			addedTasks = task.value;
			let html = ` <li id="tasks"> <input type="checkbox" class="chk" id="cbox" onclick="check()"  />${addedTasks.toUpperCase()} <span onclick=del() class="de" >❌  ${new Date().getFullYear()}</span> </li>`;
			liOfTask.insertAdjacentHTML('beforeend', html);
			task.value = '';
			adc++;
			set.disabled = false;
		}
	}
});

add.addEventListener('click', function () {
	if (task.value === '') {
		alert('Task cannot be Empty');
	} else {
		addedTasks = task.value;
		let html = ` <li id="tasks"> <input type="checkbox" class="chk" id="cbox" onclick="check()"  />${addedTasks.toUpperCase()} <span onclick=del() class="de" >❌</span> </li>`;
		liOfTask.insertAdjacentHTML('beforeend', html);
		task.value = '';
		adc++;
		set.disabled = false;
	}
});

function check() {
	let checkboxes = document.querySelectorAll('.chk');
	chc = 0;

	checkboxes.forEach((checkbox) => {
		if (checkbox.checked) {
			chc++;
		}
	});
}
function del() {
	let listItem = this.event.currentTarget.parentNode;
	listItem.parentNode.removeChild(listItem);
	adc--; // Decrement the count of total tasks
	if (adc === 0) {
		set.disabled = true; // Disable the 'Set' button if there are no tasks left
	}
}
set.addEventListener('click', function () {
	add.disabled = true;
	task.disabled = true;
	set.disabled = true;
	done.style.display = 'inline';

	let deleteIcons = document.querySelectorAll('.de');
	deleteIcons.forEach((icon) => {
		icon.style.display = 'none';
	});
});
let winner = document.querySelector('.winner');

done.addEventListener('click', function () {
	mainCon.style.display = 'none';
	winner.innerHTML = `<center> <h1 sytle="color:red"> you completed  ${Math.floor(
		(chc / adc) * 100
	)}% of Your Task</h1>  </center> `;
	winner.classList.toggle('whid');
});

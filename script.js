console.log("yo");
const container = document.querySelector('#container');
for(var i = 0; i< 5; i++){
	const content = document.createElement('div');
	content.classList.add('square');

	container.appendChild(content);
}
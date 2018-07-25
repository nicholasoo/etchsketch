console.log("yo");
const container = document.querySelector('#container');

for(var i = 0; i< 5; i++){
	for(var j = 0; j < 5; j++){
		const content = document.createElement('div');
		content.classList.add('square');
		if(j != 4){
			content.classList.add('float');
		}
		container.appendChild(content);
	}
}

const content = document.createElement('div');
		content.classList.add('bigsquare');
		container.appendChild(content);
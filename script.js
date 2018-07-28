console.log("yo");
/*
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
*/

function generateGrid(n) {
    const container = document.querySelector('#container');
    for (var k = 0; k < n; k++) {
        const row = document.createElement('div');
        container.appendChild(row);
        for (let j = 0; j < n; j++) {
            const squares = document.createElement('div');
            squares.classList.add('square');
            squares.style.height = 300 + 'px';
            squares.style.width = 300 + 'px';
            row.appendChild(squares);
        }
    }
}

function color()
{

}





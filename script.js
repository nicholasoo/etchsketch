console.log("yo");
const container = document.querySelector('#container');
//square is to get the original color
const square = document.createElement('div');
square.classList.add('square');

for(var i = 0; i< 5; i++){
	for(var j = 0; j < 6; j++){
		const content = document.createElement('div');
		content.classList.add('square');
		if(j != 5){
			content.classList.add('float');
		}
		container.appendChild(content);
		content.addEventListener("mouseover", function(event){
			//console.log("wassup");
			if(content.style.background == square.style.background){
				//console.log("red!");
				content.style.background = "green";
			}
			else if(content.style.background == "green"){
				content.style.background = "yellow";
			}
			else console.log("lol nope");
			//console.log("done");
			});
			//content.style.background = "green";
			//console.log("yo"); };
		}
}

//reset button
/*const button = document.querySelector('#button');
button.onclick = function(){ console.log("you pushed the button")};*/
//button.addEventListener("click", function(event){
//	console.log("you hit the button");
//});

function button()
{
	document.location.reload();
}
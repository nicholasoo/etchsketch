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
		content.addEventListener("mouseover", function(event){
			//needs some more testing, at first i tried to use == "green" but I couldn't get it working yet
			console.log("wassup");
			if(content.style.background != "green" && content.style.background != "yellow"){
				console.log("red!");
				content.style.background = "green";
			}
			else if(content.style.background != "yellow"){
				content.style.background = "yellow";
			}
			else console.log("lol nope");
			console.log("done");
			});
			//content.style.background = "green";
			//console.log("yo"); };
		}
}



function colorchange(content){
	console.log("wassup");
	if(content.style.background == "red"){
		content.style.background == "green";
	}
	else if(content.style.background == "green"){
		content.style.background == "yellow";
	}
}

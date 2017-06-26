var thumb = document.getElementById('artistBox').querySelectorAll('.artThumb');
console.log(thumb.toString());
console.log(thumb.length);

for(var i = 0; i < thumb.length; i++){
	console.log(thumb[i]);
	thumb[i].addEventListener("mouseover", mouseIn);
	thumb[i].addEventListener("mouseout", mouseOut);
}

function mouseIn(i){
	console.log("mousein image " + i);
	var image = thumb[i].src;
	var spanElem = "<img class=\"bigImg\" src=\"" + image + "\"></img>";
	var spannode = document.createElement("SPAN");
	var text = document.createTextNode(spanElem);
	spannode.appendChild(text);
	thumb[i].appendChild(spannode);
	return 0;
}

function mouseOut(i){
	console.log("mouseout on image " + i);
	return 0;
}

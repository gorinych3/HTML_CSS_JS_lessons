window.onload = function() {
    var images = document.getElementsByTagName("img");
    for(var i = 0; i < images.length; i++){
        //images[i].onclick = showAnswer; - старый выриант, при котором обработчик реагирует на нажатие мыши
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
}

function showAnswer(eventObj){
    var image = eventObj.target;
    var name = image.id;
    name = name + ".jpg";
    image.src = name;

    //setTimeout(reblur, 2000, image); - старый выриант, при котором обработчик реагирует на нажатие мыши
}

/*
function reblur(image){
	var name = image.id;
	name = name + "blur.jpg";  - старый выриант, при котором обработчик реагирует на нажатие мыши
	image.src = name;
}
*/

function reblur(eventObj){
    var image = eventObj.target;
    var name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}
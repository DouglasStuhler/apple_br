function fechaAbre(){
    var x = document.getElementsByClassName("nav")[0];

    var style = x.style.height;

    if (style == "8vh"){
        x.setAttribute("style", "height: 80vh");
    } else {
        x.setAttribute("style", "height: 8vh");
    }
}
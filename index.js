
console.log("OK");

document.getElementById("btnmenu2").addEventListener("click", ver_menu);

console.log("OK2");

document.getElementById("btnmenu").addEventListener("click", close_menu);

var open_menu = document.getElementById("btnmenu2");

var nav = document.getElementById("menu");

var cerrar_menu = document.getElementById("btnmenu");


/*MEDIA QUERY PARA EL BTNMENU2*/ 
const mbp = matchMedia('(max-width: 720px)');
const changeSize = mql => {
    mql.matches
    ? open_menu.style.display = "flex"
    : open_menu.style.display = "none"
    ? cerrar_menu.style.display = "none"
    : cerrar_menu.style.display = "flex"
}


function ver_menu(){

    nav.style.right = "0px";
    cerrar_menu.style.display = "flex";
    //open_menu.style.display = "flex";

}

function close_menu(){
    
    nav.style.right = "-330px";
    //open_menu.style.display = "felx";
    //cerrar_menu.style.display = "absolute";
    mbp.addListener(changeSize)
    changeSize(mediumBp)

}



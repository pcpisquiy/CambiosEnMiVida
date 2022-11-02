function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
          _x += el.offsetLeft - el.scrollLeft;
          _y += el.offsetTop - el.scrollTop;
          console.log(_x)
          console.log(_y)
          el = el.offsetParent;
    }
    return { top: _y, left: _x };
    }
const Navbar = document.getElementById("navbar");
const DivSalud = document.getElementById("Salud");
const DivAlimento = document.getElementById("Alimentacion");
const DivDeporte = document.getElementById("Deporte");
window.addEventListener('scroll',function(e){
    console.log(window.scrollY);
if(window.scrollY<getOffset(DivAlimento).top){
    if(Navbar.classList.contains("blue")){
        Navbar.classList.remove("blue");
        Navbar.classList.add("red");
    }
}else if(window.scrollY>getOffset(DivAlimento).top && window.scrollY<getOffset(DivDeporte).top){
    if(Navbar.classList.contains("red")){
        Navbar.classList.remove("red");
        Navbar.classList.add("blue");
    }
}else if(window.scrollY>getOffset(DivDeporte).top){
    if(Navbar.classList.contains("blue")){
        Navbar.classList.remove("blue");
        Navbar.classList.add("red");
    }
}
});


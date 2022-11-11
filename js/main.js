function encender() {
    var bombilla =document.getElementById('foco');
    bombilla.src='img/pic_bulbon.gif';
}
function apagar() {
    var bombilla= document.getElementById('foco');
    bombilla.src='img/pic_bulboff.gif';
    
}
function ocultar() {
    var bombilla = document.getElementById('foco');
    bombilla.style.display='none';
}

function mostrar() {
    var bombilla = document.getElementById('foco');
    bombilla.style.display='block';
    
}

function cambiarfondo() {
    var selector =document.getElementById('body');
    selector.style.backgroundColor="black";
}

function color() {
    var color = prompt("escriba ingresar un color en ingles");
    var selector = document.getElementById('body');
    selector.style.backgroundColor=color
}

function cambiarsize() {
    var selector = document.getElementById('foco');
    selector.style.cssText="transition: 3s;background-color:blue; width:420px;"
    
}
   
function circulo() {
    var figura=document.getElementById('figura');
    figura.classList.toggle("circulo");
}  

function arriba() {
    var figura=document.getElementById('figura');
    figura.classList.toggle("top");
}    

function abajo() {
    var figura=document.getElementById('figura');
    figura.classList.toggle("bottom");
    
}

function rombo() {
    var figura=document.getElementById('figura');
    figura.classList.toggle("rombo");
}

function izq() {
    var figura=document.getElementById('figura');
    figura.classList.toggle("izq");
    
}

function der() {
    var figura=document.getElementById('figura');
    figura.classList.toggle("der");
    
}
    
function triangulo() {
   var figura= document.getElementById('figura');
   figura.classList.toggle("triangulo");

}
function abajo () {
    var figura = document.getElementById('figura');
    figura.classList.toggle("butom")
    
}

function diagonaliz() {
    var figura = document.getElementById('figura');
    figura.classList.toggle("diagonaliz")
    
}

function diagonalde() {
    var figura = document.getElementById('figura');
    figura.classList.toggle("diagonalde")
    
}
function paralelogramo() {
    var figura = document.getElementById('figura');
    figura.classList.toggle("paralelogramo")
    
}

function luna() {
    var figura = document.getElementById('figura');
    figura.classList.toggle("luna")
}
function mostrargif(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("gif")
 
}

//el dun document
//query selector regresa 1 sólo elemento
//let container = document.querySelector('.container');

// let links = document.querySelectorAll('a');

// links.forEach(function(link){
// console.log(link);
// });

let celdas = document.querySelectorAll('td');

celdas.forEach(function (td) {
    td.addEventListener('click', function () {
        console.log(this)
    });
});

let closes = document.querySelectorAll('.close');

closes.forEach(function (close) {
    close.addEventListener('click', function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');
        content.classList.remove('animate__zoomIn');
        content.classList.remove('animate__animated');
        content.classList.add('animate__zoomOut');
        content.classList.add('animate__animated');
        //setTimeout setInterval
        setTimeout(function(){
            location.href = "/project2";
        }, 300);  
        
        console.log(':c bien sadboy xdxdxd');
    });
});

// let iconos = document.querySelectorAll('i');

// iconos.forEach(function(icono){
//     icono.classList.remove('fa-star');
// });
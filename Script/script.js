let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 6000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked =true;
}

// acima script para passagem de slide por contagem



$(document).ready(function() {
    
    let slideAtual = 1;
    let listaSlides = ["banner-f1", "banner-cs", "banner-lol"]

    setInterval(mudarSlide, 4500)

    function mudarSlide() {
        console.log("Slide atual:", slideAtual);

        // Remove o slide anterior
        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        } else if (slideAtual == 0) {
            $("#carrossel").removeClass(listaSlides[ (listaSlides.length) - 1 ])
        }

        // Adiciona o slide atual
        $("#carrossel").addClass(listaSlides[slideAtual]);

        // Indica o slide atual
        slideAtual++

        if(slideAtual > (listaSlides.length) - 1) {
            slideAtual = 0;
        }

    }
    
    //redimencionar em dispositivo movel (menu-ativo)
    $("#barras").click(function() {

        $("#menu").toggleClass("menu-ativo");
        
        // Toggle
        // if( $("#menu").hasClass("menu-ativo") ) {
        //     $("#menu").removeClass("menu-ativo")
        // } else {
        //     $("#menu").addClass("menu-ativo")
        // }

    })

})

function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function cadastrarNewsletter() {
    let email = document.getElementById("campo-email").value

    alert(email)
    console.log(email)
}

// DOM - Document Object Model

var imagens = ["img01.png", "img02.png", "img03.png", "img04.png"];
var imagematual = 0;

function trocaimagem() {
 imagematual = (imagematual + 1) % 4;
document.querySelector('.gif img'). src = imagens[imagematual];
}
setInterval(trocaimagem, 1500);

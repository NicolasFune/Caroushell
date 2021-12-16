
let carrosel_controls = document.getElementsByClassName('carrosel_control')
let carrosel = document.getElementsByClassName('carrosel')
let slides = document.getElementsByClassName('container__img--li')

let dots_SlideShow01 = $('.dot_SlideShow01')
let dot_01 = document.getElementById('dot_01')
let dot_02 = document.getElementById('dot_02')
let dot_03 = document.getElementById('dot_03')
let dot_04 = document.getElementById('dot_04')
let dot_05 = document.getElementById('dot_05')

let index = 0
let leftPositionSlide_01 = 0

$('.nextSlide--button').click(function (e) { 
    e.preventDefault();
    leftPositionSlide_01 = leftPositionSlide_01 - 100
    if(leftPositionSlide_01 < (RetornaQuantidadeDeSlidesNaVariável(slides) - 1)*-100){
        leftPositionSlide_01 = 0
    }
    SetaALeftPositionDeTodosOsSlides(slides,leftPositionSlide_01)
    SelecionarDotReferenteAPosiçãoDoSlide(leftPositionSlide_01)
});

$('.prevSlide--button').click(function (e) { 
    e.preventDefault();
    leftPositionSlide_01 = leftPositionSlide_01 + 100
    if(leftPositionSlide_01 > 0){
        leftPositionSlide_01 = (RetornaQuantidadeDeSlidesNaVariável(slides) - 1)*-100
    }
    SetaALeftPositionDeTodosOsSlides(slides,leftPositionSlide_01)
    SelecionarDotReferenteAPosiçãoDoSlide(leftPositionSlide_01)
    alert(leftPositionSlide_01)
});


dot_01.addEventListener('click',function SelecionarSlide01() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(0)
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '0vw'
        index = index + 1
    })
    index=0
    leftPositionSlide_01 = 0
})
dot_02.addEventListener('click',function SelecionarSlide02() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(-100)
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '-100vw'
        index = index + 1
    })
    index=0
    leftPositionSlide_01 = -100
})
dot_03.addEventListener('click',function SelecionarSlide03() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(-200)
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '-200vw'
        index = index + 1
    })
    index=0
    leftPositionSlide_01 = -200
})
dot_04.addEventListener('click',function SelecionarSlide04() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(-300)
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '-300vw'
        index = index + 1
    })
    index=0
    leftPositionSlide_01 = -300
})
dot_05.addEventListener('click',function SelecionarSlide05() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(-400)
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '-400vw'
        index = index + 1
    })
    index=0
    leftPositionSlide_01 = -400
})





let isVisible
let TornarControlesVisiveis = function(){
    for(let i=0;i<carrosel_controls.length;i++){
        carrosel_controls[i].style.opacity = "1"
    }

    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.animation = 'none'
        slides.item(index).left = '0vw'
        // slides.item(index).style.animationPlayState = 'paused'

        index = index + 1
    })
    index=0
    isVisible = true
}
let TornarControlesInvisiveis = function(){
    for(let i=0;i<carrosel_controls.length;i++){
        carrosel_controls[i].style.opacity = "0"
    }


    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.animation = 'slide_img 25s infinite ease-in'
        // slides.item(index).style.animationPlayState = 'running'

        index = index + 1
    })
    index=0


    $('.mascara').css('background-color', 'rgba(0,0,0,0.0)');
    isVisible = false
}


if(window.innerWidth > 1080){
    $('.mascara').mouseover(function () { 
        TornarControlesVisiveis()
    });
    $('.mascara').mouseout(function () { 
        TornarControlesInvisiveis()
    });
}


//Define que ao clicar no slide ele executa um toggle da visibilidade dos controles
$('.mouse__interaction__area').click(function (e) { 
    e.preventDefault();
    if(isVisible){
        TornarControlesInvisiveis()
    }else{
        TornarControlesVisiveis()
    }
}).children().click(function(e) {
    return false
 })


 
//Define Qual banner vai carregar e corrigi o tamanho da section para o tamanho do banner no EVENTO RESIZE
window.addEventListener('resize',function (param) {
    if(window.innerWidth < 1080){
        $('#img_01').attr('src', 'img/Stories SONHOS.webp');
        $('#img_02').attr('src', 'img/Stories PLANETA.webp');
        $('#img_03').attr('src', 'img/Stories FUTURO.webp');
        $('#img_04').attr('src', 'img/Stories VALORES.webp');
        $('#img_05').attr('src', 'img/Stories PAC.webp');
    }else{
        $('#img_01').attr('src', 'img/SONHOS.webp');
        $('#img_02').attr('src', 'img/PLANETA.webp');
        $('#img_03').attr('src', 'img/FUTURO.webp');
        $('#img_04').attr('src', 'img/VALORES.webp');
        $('#img_05').attr('src', 'img/PAC.webp');
    }
    $('.sec_carrosel').css('height',document.querySelector('.container__img').clientHeight);
    $('.carrosel').css('height',document.querySelector('.container__img').clientHeight);
    $('.mascara').css('height',document.querySelector('.container__img').clientHeight);
})

//Define Qual banner vai carregar e corrigi o tamanho da section para o tamanho do banner no EVENTO LOAD
if(window.innerWidth < 1080){
    $('#img_01').attr('src', 'img/Stories SONHOS.webp');
    $('#img_02').attr('src', 'img/Stories PLANETA.webp');
    $('#img_03').attr('src', 'img/Stories FUTURO.webp');
    $('#img_04').attr('src', 'img/Stories VALORES.webp');
    $('#img_05').attr('src', 'img/Stories PAC.webp');
}else{
    $('#img_01').attr('src', 'img/SONHOS.webp');
    $('#img_02').attr('src', 'img/PLANETA.webp');
    $('#img_03').attr('src', 'img/FUTURO.webp');
    $('#img_04').attr('src', 'img/VALORES.webp');
    $('#img_05').attr('src', 'img/PAC.webp');
}
$('.sec_carrosel').css('height',document.querySelector('.img__carrosel').clientHeight);
$('.carrosel').css('height',document.querySelector('.img__carrosel').clientHeight);
$('.mascara').css('height',document.querySelector('.img__carrosel').clientHeight);
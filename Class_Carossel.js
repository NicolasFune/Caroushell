export class Carrosel{
    constructor(){
        this._HTMLdoContainerCarrosel 
        this._HTMLdosSlides_li
        this._HTMLdoContainerDosControles 

        this._HTMLdoNextSlideButton 
        this._HTMLdoPrevSlideButton

        this._leftPositionSlides = 0
        this._index = 0
        
        this._QuantidadeDeSlidesTotais
        this._QuantidadeDeSlidesVisiveisNaTela
    }
    //Setter-Getter ------- HTMLdosSlides_li
    set HTMLdosSlides_li (val){
        this._HTMLdosSlides_li = document.querySelectorAll(val)
    }
    get HTMLdosSlides_li(){
        return this._HTMLdosSlides_li
    }
    //Setter-Getter ------- HTMLdoContainerCarrosel 
    set HTMLdoContainerCarrosel (val){
        this._HTMLdoContainerCarrosel = document.querySelector(val)
    }
    get HTMLdoContainerCarrosel(){
        return this._HTMLdoContainerCarrosel
    }
    //Setter-Getter ------- HTMLdoContainerDosControles
    set HTMLdoContainerDosControles(val){

        this._HTMLdoContainerDosControles = document.querySelector(val)

        this._HTMLdoContainerDosControles.addEventListener('mouseenter',()=>{this.TornarControlesVisiveis(this._HTMLdoContainerDosControles)})

        this._HTMLdoContainerDosControles.addEventListener('mouseleave',()=>{this.TornarControlesInvisiveis(this._HTMLdoContainerDosControles)})
    }
    get HTMLdoContainerDosControles(){
        return this._HTMLdoContainerDosControles
    }
    //Setter-Getter ------- HTMLdoNextSlideButton
    set HTMLdoNextSlideButton(val){
        this._HTMLdoNextSlideButton = document.querySelector(val)

        this._HTMLdoNextSlideButton.addEventListener('click',()=>{
            this._leftPositionSlides = this._leftPositionSlides - 100
            if(this._leftPositionSlides < (this._QuantidadeDeSlidesTotais-1)*-100){
                
            this._leftPositionSlides = 0
        }
        this.SetaALeftPositionDeTodosOsSlides(this._HTMLdosSlides_li,this._leftPositionSlides)
        })

        }

        
    get HTMLdoNextSlideButton(){
        return this._HTMLdoNextSlideButton
    }
    //Setter-Getter ------- HTMLdoPrevSlideButton
    set HTMLdoPrevSlideButton(val){
        this._HTMLdoPrevSlideButton = document.querySelector(val)
        this._HTMLdoPrevSlideButton.addEventListener('click',()=>{
            this._leftPositionSlides = this._leftPositionSlides + 100
            if(this._leftPositionSlides > 0) {
            this._leftPositionSlides = (this._QuantidadeDeSlidesTotais-1)*-100
        }
        this.SetaALeftPositionDeTodosOsSlides(this._HTMLdosSlides_li,this._leftPositionSlides)
        })
    }
    get HTMLdoPrevSlideButton(){
        return this._HTMLdoPrevSlideButton
    }
    //Setter-Getter ------- QuantidadeDeSlidesTotais
    set QuantidadeDeSlidesTotais (val){
        this._QuantidadeDeSlidesTotais = val
    }
    get QuantidadeDeSlidesTotais(){
        return this._QuantidadeDeSlidesTotais
    }
    //Internal Methods
    TornarControlesVisiveis(container){
        
        container.style.opacity = "1"
       
    }
   
    TornarControlesInvisiveis(container){
        container.style.opacity = "0"
    }
    
    





    



    SetaALeftPositionDeTodosOsSlides(SlideReferente,Posição){
        Array.from(SlideReferente).forEach(()=>{
            SlideReferente.item(this._index).style.left = Posição	+ 'vw'
            this._index = this._index + 1
        })
        this._index = 0
    }
    
    
    
    SelecionarDotReferenteAPosiçãoDoSlide(leftPositionSlide){
        switch (leftPositionSlide) {
            case -100:
                dot_01_depoimentos.style.transform = 'scale(1.0)'
                dot_02_depoimentos.style.transform = 'scale(2.0)'
                dot_03_depoimentos.style.transform = 'scale(1.0)'
                dot_04_depoimentos.style.transform = 'scale(1.0)'
                dot_05_depoimentos.style.transform = 'scale(1.0)'
                break;
            case -200:
                dot_01_depoimentos.style.transform = 'scale(1.0)'
                dot_02_depoimentos.style.transform = 'scale(1.0)'
                dot_03_depoimentos.style.transform = 'scale(2.0)'
                dot_04_depoimentos.style.transform = 'scale(1.0)'
                dot_05_depoimentos.style.transform = 'scale(1.0)'
                break;
            case -300:
                dot_01_depoimentos.style.transform = 'scale(1.0)'
                dot_02_depoimentos.style.transform = 'scale(1.0)'
                dot_03_depoimentos.style.transform = 'scale(1.0)'
                dot_04_depoimentos.style.transform = 'scale(2.0)'
                dot_05_depoimentos.style.transform = 'scale(1.0)'
                break;
            case -400:
                dot_01_depoimentos.style.transform = 'scale(1.0)'
                dot_02_depoimentos.style.transform = 'scale(1.0)'
                dot_03_depoimentos.style.transform = 'scale(1.0)'
                dot_04_depoimentos.style.transform = 'scale(1.0)'
                dot_05_depoimentos.style.transform = 'scale(2.0)'
                break;
            default:
                dot_01_depoimentos.style.transform = 'scale(2.0)'
                dot_02_depoimentos.style.transform = 'scale(1.0)'
                dot_03_depoimentos.style.transform = 'scale(1.0)'
                dot_04_depoimentos.style.transform = 'scale(1.0)'
                dot_05_depoimentos.style.transform = 'scale(1.0)'
                break
        }
    }
}


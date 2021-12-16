export class Carrosel{
    constructor(){
        this._HTMLdoContainerCarrosel 
        this._HTMLdosSlides_li
        this._HTMLdoContainerDosControles
        this._HTMLdoContainerDosDots

        this._HTMLdoNextSlideButton 
        this._HTMLdoPrevSlideButton

        this._leftPositionSlides = 0
        this._index = 0
        
        this._QuantidadeDeSlidesTotais
        this._QuantidadeDeSlidesVisiveisNaTela

        this._IntervalAnimation
        this._isPaused = false
        this._Delay 
        this._teste=0
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

        this._HTMLdoNextSlideButton.addEventListener('click',()=>{this.NextSlide()})

        }

        
    get HTMLdoNextSlideButton(){
        return this._HTMLdoNextSlideButton
    }
    //Setter-Getter ------- HTMLdoPrevSlideButton
    set HTMLdoPrevSlideButton(val){
        this._HTMLdoPrevSlideButton = document.querySelector(val)
        this._HTMLdoPrevSlideButton.addEventListener('click',()=>{this.PrevSlide()})
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
    //Setter-Getter ------- HTMLdoContainerDosDots
    set HTMLdoContainerDosDots (val){
        this._HTMLdoContainerDosDots = document.querySelector(val)
    }
    get HTMLdoContainerDosDots(){
        return this._HTMLdoContainerDosDots
    }






    //Internal Methods
    TornarControlesVisiveis(container){
        
        container.style.opacity = "1"
        this.StopAnimation()
       
    }
   



    TornarControlesInvisiveis(container){
        container.style.opacity = "0"
        this.StartAnimation(this._Delay)
    }




    NextSlide(){
        this._leftPositionSlides = this._leftPositionSlides - 100
        if(this._leftPositionSlides < (this._QuantidadeDeSlidesTotais-1)*-100){
            this._leftPositionSlides = 0
        }
        this.SetaALeftPositionDeTodosOsSlides(this._HTMLdosSlides_li,this._leftPositionSlides)
        
    }





    PrevSlide(){
        this._leftPositionSlides = this._leftPositionSlides + 100
        if(this._leftPositionSlides > 0) {
            this._leftPositionSlides = (this._QuantidadeDeSlidesTotais-1)*-100
        }
    this.SetaALeftPositionDeTodosOsSlides(this._HTMLdosSlides_li,this._leftPositionSlides)
    }




    StartAnimation(Delay){
        this._Delay = Delay
        this._IntervalAnimation = setInterval(()=>{ 
        this.NextSlide()
        },Delay)
    }




    StopAnimation(){
        clearInterval(this._IntervalAnimation)
    }

    SetaALeftPositionDeTodosOsSlides(SlideReferente,Posição){
        Array.from(SlideReferente).forEach(()=>{
            SlideReferente.item(this._index).style.left = Posição	+ 'vw'
            this._index = this._index + 1
        })
        this._index = 0
    }

    CriarDots(){

        let ArrayDeLeftPositions = []
        CriarArraysDePosições(this._QuantidadeDeSlidesTotais)


        for(let i=1;i<this._QuantidadeDeSlidesTotais+1;i++){
            let dot = document.createElement("button")
            dot.ariaLabel=`Slide 0${i}`
            dot.id=`dot_x_0${i}`
            dot.className=`dot_x`
            dot.addEventListener("click",DotClicado(i))
            this._HTMLdoContainerDosDots.appendChild(dot)
        }

        function CriarArraysDePosições(QuantidadeTotalDeSlides){
            let LeftPosition = 0
            for(let i=0;i<QuantidadeTotalDeSlides;i++){
                ArrayDeLeftPositions.push(LeftPosition)
                LeftPosition = LeftPosition - 100
            }
        }


        function DotClicado(i){
            
        }
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


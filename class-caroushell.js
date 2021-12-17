export class Caroushell{
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

        this._ArrayPosições=[]
        this._ArrayDeDots=[]
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
        this._ArrayPosições = this.CriarArraysDePosições()
        for(let i=1;i<this._QuantidadeDeSlidesTotais+1;i++){
            let dot = document.createElement("button")
            dot.ariaLabel=`Slide 0${i}`
            dot.id=`dot_x_0${i}`
            dot.className=`dot_x`
            this._ArrayDeDots.push(dot)
            dot.addEventListener("click",()=>{
                this.SetaALeftPositionDeTodosOsSlides(this._HTMLdosSlides_li,ArrayPosiçoes[i-1],this._ArrayDeDots,this._ArrayPosições)
                this._leftPositionSlides=ArrayPosiçoes[i-1]
                
            })
            this._HTMLdoContainerDosDots.appendChild(dot)
        }
        
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
        this.SetaALeftPositionDeTodosOsSlides(this._HTMLdosSlides_li,this._leftPositionSlides,'','')
        
    }





    PrevSlide(){
        this._leftPositionSlides = this._leftPositionSlides + 100
        if(this._leftPositionSlides > 0) {
            this._leftPositionSlides = (this._QuantidadeDeSlidesTotais-1)*-100
        }
    this.SetaALeftPositionDeTodosOsSlides(this._HTMLdosSlides_li,this._leftPositionSlides,'','')
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

    SetaALeftPositionDeTodosOsSlides(SlideReferente,Posição,ArrayDots,ArrayPosições){
        Array.from(SlideReferente).forEach(()=>{
            SlideReferente.item(this._index).style.left = Posição	+ 'vw'
            this._index = this._index + 1
        })
        this._index = 0

        if(ArrayDots!=''&&ArrayPosições!=''){
            ArrayDots.forEach((val)=>{
                val.style.transform = "scale(1.0)"
            })
            
            ArrayDots[ArrayPosições.indexOf(Posição)].style.transform = "scale(2.0)"
        }
        
    }
     CriarArraysDePosições(){
        let LeftPosition = 0
        let ArrayDeLeftPositions = []
        for(let i=0;i<this._QuantidadeDeSlidesTotais;i++){
            ArrayDeLeftPositions.push(LeftPosition)
            LeftPosition = LeftPosition - 100
        }
        return ArrayDeLeftPositions
    }
    
    
}


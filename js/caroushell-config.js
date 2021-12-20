import { Caroushell } from "./class-caroushell.js"
const carrosel = new Caroushell()

carrosel.HTMLdoContainerCarrosel = ".carrosel_x"
carrosel.HTMLdosSlides_li = ".carrosel_x_li"
carrosel.HTMLdoContainerDosControles = '.controls_x'
carrosel.HTMLdoNextSlideButton = '#controls_x_container_Next'
carrosel.HTMLdoPrevSlideButton = '#controls_x_container_Prev'
carrosel.HTMLdoContainerDosDots = ".controls_x_container_dots"

carrosel.QuantidadeDeSlidesTotais = 5
carrosel.StartAnimation(2500)

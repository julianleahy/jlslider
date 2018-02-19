import 'styles/jlslider.scss'

export default () => {

    const
        slider = $('.jlsliderPanel'),
        slide = $('.jlslide'),
        numSlides = slide.length,
        autoPlaySpeed = 5000,
        transitionSpeed = 500;

    let
        windowWidth = $(window).width(),
        panelWidth = (numSlides * windowWidth) + 'px',
        timerAutoPlay = null,
        slideCount = 1,
        animateTo = 'next';

    // set width of panel based on number of slides   
    slider.css({ 'min-width': panelWidth });

    // adjust panel width when window is resized
    $(window).resize(() => {
        windowWidth = $(window).width();
        slider.css({ 'min-width': panelWidth })
    });

    // setup autoplay by default
    const autoPlay = () => {
        timerAutoPlay = setInterval(()=> {
            transitionSlide();
        }, autoPlaySpeed)
    } 
    autoPlay();

    const transitionSlide = () => {
        
    }


}
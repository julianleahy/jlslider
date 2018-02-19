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


}
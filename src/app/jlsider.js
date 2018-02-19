import 'styles/jlslider.scss'
import ProgressBar from './progressbar';

export default () => {

    const
        slider = $('.jlsliderPanel'),
        slide = $('.jlslide'),
        slideView = $('#current'),
        progressBar = $('.progress'),
        numSlides = slide.length,
        autoPlaySpeed = 5000,
        transitionSpeed = 500;

    let
        windowWidth = $(window).width(),
        panelWidth = (numSlides * windowWidth) + 'px',
        timerAutoPlay = null,
        slideCount = 1,
        animateTo = 'next';

    let bar = new ProgressBar.Line('#progress', {
        color: '#666',
        duration: autoPlaySpeed,
        easing: 'easeInOut',
        strokeWidth: 1,
        trailWidth: 1,
        trailColor: '#f4f4f4'
    });

    // set width of panel based on number of slides   
    slider.css({ 'min-width': panelWidth });

    // adjust panel width when window is resized
    $(window).resize(() => {
        windowWidth = $(window).width();
        slider.css({ 'min-width': panelWidth })
    });

    $('#total').text(numSlides);

    // setup autoplay by default
    const autoPlay = () => {
        // show progress bar
        progressBar.css('display', 'block');
        bar.animate(1);
        timerAutoPlay = setInterval(() => {
            transitionSlide();
            bar.animate(1);
        }, autoPlaySpeed)
    }
    autoPlay();

    const transitionSlide = () => {

        // reset interval / bar incase contol clicked
        clearInterval(timerAutoPlay);
        bar.set(0);
        autoPlay();
        
        slide.removeClass('active');
        if (animateTo === 'next') {
            slider.animate({
                left: `-${(windowWidth)}px`
            }, transitionSpeed, () => {
                // append first slide to the end of the panel to create a continuous loop
                $('.jlslide:nth-child(1)').appendTo(slider);
                // reset left position back to 0
                slider.css({ left: 0 });
                // add active class to next slide to trigger animation
                $('.jlslide:nth-child(1)').addClass('active');
            })
            slideCount = (slideCount === numSlides) ? 1 : slideCount + 1;
        } else {
            $('.jlslide:last-child()').prependTo(slider);
            // get position of 'new' first slide
            slider.css({ left: `-${windowWidth}px` });
            // animate it into view
            slider.animate({ left: 0 }, transitionSpeed, () => {
                // add active class to next slide to trigger animation
                $('.jlslide:nth-child(1)').addClass('active');
            });
            slideCount = (slideCount === 1) ? numSlides : slideCount - 1;
        }

        slideCounter(slideCount);
 
    }

    // Display current slide number 
    const slideCounter = (currentSlide = 1) => {
        slideView.text(currentSlide);
    }

    $('#prev').click(() => {
        animateTo = 'prev';
        transitionSlide();
    })

    $('#next').click(() => {
        animateTo = 'next';
        transitionSlide();
    })


}
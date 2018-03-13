import 'styles/normalize.css';
import 'styles/main.scss';
import 'styles/preloader.scss';

import JLSlider from './jlsider';

$(function() {
  // can remove setTimeout just for demo
  setTimeout(function(){
    $('body').addClass('loaded');
    JLSlider();
	}, 1500);
    
});

